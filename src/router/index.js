/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
// import { routes } from 'vue-router/auto-routes'
import GUIDE from './guide/guide';

const routes = [
    {
        path: '/',
        redirect: '/guide/modal'
    },
    {
        path: '/',
        component: () => import('@/components/layout/LayoutBasic.vue'),
        children: [
            {
                path: '/home',
                name: 'Main',
                component: () => import('@/pages/MainPage.vue')
            }
        ]
    },
    ...GUIDE
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

router.afterEach((to) => {
    const title = to.meta.title == undefined ? '' : to.meta.title + ' - ';
    nextTick(() => {
        document.title = title + 'Vuetify Example';
    });
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
        if (!localStorage.getItem('vuetify:dynamic-reload')) {
            console.log('Reloading page to fix dynamic import error');
            localStorage.setItem('vuetify:dynamic-reload', 'true');
            location.assign(to.fullPath);
        } else {
            console.error('Dynamic import error, reloading page did not fix it', err);
        }
    } else {
        console.error(err);
    }
});

router.isReady().then(() => {
    localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
