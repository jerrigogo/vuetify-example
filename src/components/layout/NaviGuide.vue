<template>
    <nav
        :class="`navi-guide ${drawerOpen ? 'open' : ''}`"
        role="navigation"
        :aria-hidden="isMobile ? !drawerOpen : null"
        aria-labelledby="GuideMenu"
    >
        <div class="navi-wrap">
            <div class="navi-header">
                <h2 id="GuideMenu" class="sr-only">Guide 메뉴</h2>
                <button
                    v-if="isMobile"
                    type="button"
                    :class="`menu-btn ${drawerOpen ? 'open' : ''}`"
                    @click="showDrawer"
                >
                    <span class="sr-only">{{ drawerOpen ? '메뉴 닫기' : '메뉴 열기' }}</span>
                </button>
            </div>

            <div class="menus">
                <h3 class="menu-tit">Style Guide</h3>
                <div class="menu-pubguide">
                    <ul>
                        <li v-for="(menu, index) in menuData.guide" :key="index">
                            <router-link class="navi-link" to="" :tabindex="tabIndex">
                                <span>{{ menu.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <h3 class="menu-tit">Components</h3>
                <div class="menu-component">
                    <ul>
                        <li
                            v-for="(menu, index) in menuData.components"
                            :key="index"
                            :class="nowMenu == menu.src ? 'on' : ''"
                        >
                            <router-link
                                class="navi-link"
                                :to="{ name: menu.src }"
                                @click="pageMove(menu.src)"
                                :tabindex="tabIndex"
                            >
                                <span>{{ menu.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount } from 'vue';
import router from '@/router';

const isMobile = ref();
const chkMobile = () => {
    chkDevice();

    window.addEventListener('resize', () => {
        chkDevice();
    });
};

const chkDevice = () => {
    let winW = window.innerWidth;
    if (winW < 1024) {
        isMobile.value = true;
    } else {
        isMobile.value = false;
    }
};

onBeforeMount(() => chkMobile());

const menuData = ref({
    guide: [
        { label: 'Layouts', src: '' },
        { label: 'Menus', src: '' },
        { label: 'Typography', src: '' },
        { label: 'Color Palette', src: '' },
        { label: 'Buttons', src: '' },
        { label: 'Icons', src: '' },
        { label: 'Input Fields', src: '' },
        { label: 'Selections', src: '' },
        { label: 'Tables', src: '' },
        { label: 'Lists', src: '' }
    ],
    components: [
        { label: 'Modals', src: 'Modal' },
        { label: 'Selects', src: 'Select' },
        { label: 'Accordions', src: 'Accordion' },
        { label: 'Dropdowns', src: 'Dropdown' },
        { label: 'Tabs', src: 'Tab' },
        { label: 'Tooltips', src: 'Tooltip' },
        { label: 'Toasts', src: 'Toast' },
        { label: 'Swipers', src: 'Swiper' },
        { label: 'Calendar', src: 'Calendar' },
        { label: 'Datepickers', src: 'Datepicker' }
    ]
});

const drawerOpen = ref(false);
const showDrawer = () => {
    let body = document.querySelector('body');
    let naviMenu = document.querySelector('.navi-wrap .menus');
    let naviLink = naviMenu.querySelector('li.on');
    let nowPageTop = naviLink.getBoundingClientRect().top;

    drawerOpen.value = !drawerOpen.value;

    if (drawerOpen.value) {
        body.style.overflowY = 'hidden';
        naviMenu.scrollTo({ top: nowPageTop });
        document.addEventListener('keydown', accessibility);
    } else {
        body.removeAttribute('style');
        naviMenu.scrollTo({ top: 0 });
        document.removeEventListener('keydown', accessibility);
    }
};

const tabIndex = ref(computed(() => changeIndex()));
const changeIndex = () => {
    if (isMobile.value) {
        if (!drawerOpen.value) {
            return -1;
        } else {
            return null;
        }
    }
};

const accessibility = (e) => {
    let focusEl = document.activeElement;
    let drawer = document.querySelector('.navi-guide');
    let focusableEls = drawer.querySelectorAll('[href], button, [tabindex]:not([tabindex="-1"])');
    let firstEl = focusableEls[0];
    let lastEl = focusableEls[focusableEls.length - 1];

    if (e.key == 'Tab') {
        if (e.shiftKey && focusEl == firstEl) {
            e.preventDefault();
            lastEl.focus();
        } else if (!e.shiftKey && focusEl == lastEl) {
            e.preventDefault();
            firstEl.focus();
        }
    }
};

const changePath = ref(computed(() => router.currentRoute.value.path));
const nowMenu = ref(router.currentRoute.value.name);

watch(changePath, () => {
    nowMenu.value = router.currentRoute.value.name;
});

const pageMove = (_path) => {
    nowMenu.value = _path;
    if (isMobile.value) showDrawer();
};
</script>
