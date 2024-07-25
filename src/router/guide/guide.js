export default [
    {
        path: '/guide',
        component: () => import('@/components/layout/LayoutGuide.vue'),
        children: [
            {
                path: '/guide/modal',
                name: 'Modal',
                component: () => import('@/pages/guide/GuideModal.vue'),
                meta: {
                    title: 'Modals'
                }
            },
            {
                path: '/guide/select',
                name: 'Select',
                component: () => import('@/pages/guide/GuideSelect.vue'),
                meta: {
                    title: 'Selects'
                }
            },
            {
                path: '/guide/accordion',
                name: 'Accordion',
                component: () => import('@/pages/guide/GuideAccordion.vue'),
                meta: {
                    title: 'Accordions'
                }
            },
            {
                path: '/guide/dropdown',
                name: 'Dropdown',
                component: () => import('@/pages/guide/GuideDropDown.vue'),
                meta: {
                    title: 'Dropdowns'
                }
            },
            {
                path: '/guide/tab',
                name: 'Tab',
                component: () => import('@/pages/guide/GuideTabs.vue'),
                meta: {
                    title: 'Tabs'
                }
            },
            {
                path: '/guide/tooltip',
                name: 'Tooltip',
                component: () => import('@/pages/guide/GuideTooltip.vue'),
                meta: {
                    title: 'Tooltips'
                }
            },
            {
                path: '/guide/toast',
                name: 'Toast',
                component: () => import('@/pages/guide/GuideToast.vue'),
                meta: {
                    title: 'Toasts'
                }
            }
            // {
            //     path: '/guide/swiper',
            //     name: 'swiper',
            //     component: () => import('@/pages/guide/GuideSwiper.vue')
            // },
            // {
            //     path: '/guide/calendar',
            //     name: 'calendar',
            //     component: () => import('@/pages/guide/GuideCalendar.vue')
            // },
            // {
            //     path: '/guide/datepicker',
            //     name: 'datepicker',
            //     component: () => import('@/pages/guide/GuideDatepicker.vue')
            // }
        ]
    },
    {
        path: '/worklist',
        name: 'worklist',
        component: () => import('@/pages/guide/WorkList.vue')
    }
];
