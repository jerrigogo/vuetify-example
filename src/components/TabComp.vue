<template>
    <div :id="props.id" class="tabs-wrap">
        <div class="tab-list" role="tablist">
            <template v-for="(item, index) in props.tabOpts" :key="index">
                <button
                    type="button"
                    :id="`${props.id}-${index + 1}`"
                    class="tab-item"
                    role="tab"
                    :aria-selected="selIdx == index ? true : false"
                    :aria-controls="`${props.id}-${index + 1}-panel`"
                    :tabindex="selIdx == index ? (item.disabled ? -1 : 0) : -1"
                    :disabled="item.disabled ? true : false"
                    @click="selectTab($event)"
                    @keydown="keySelectTab($event)"
                >
                    <span>{{ item.label }}</span>
                </button>
            </template>
        </div>

        <div class="tab-contents">
            <template v-for="i in panelLength" :key="i">
                <div
                    :id="`${props.id}-${i}-panel`"
                    class="tab-panel"
                    role="tabpanel"
                    :aria-labelledby="`${props.id}-${i}`"
                    :aria-hidden="selIdx == i - 1 ? false : true"
                    :tabindex="selIdx == i - 1 ? 0 : -1"
                >
                    <slot :name="`panel${i}`"></slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, onBeforeMount } from 'vue';

// mobile device check
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

// 전달받은 값
const props = defineProps({
    id: { type: String },
    tabOpts: { type: Object }
});

// tab panel의 갯수
const panelLength = ref(props.tabOpts.length);

// 현재 선택된 tab의 index
const selIdx = ref();

// tab 초기설정
const initTab = () => {
    let selected = props.tabOpts.findIndex((x) => x.selected == true);
    selIdx.value = selected > -1 ? selected : 0;
};

// tab 선택
const selectTab = (e) => {
    let target = e.target;
    let tabList = target.closest('.tab-list');
    let tabItems = tabList.querySelectorAll('.tab-item');
    let tabPanels = target.closest('.tabs-wrap').querySelectorAll('.tab-panel');

    tabItems.forEach((tab, index) => {
        if (tab == target) {
            selIdx.value = index;
        }
    });

    if (isMobile.value) {
        let tabL = target.getBoundingClientRect().left - 8;
        tabList.scrollTo({ left: tabL, behavior: 'smooth' });
    }

    nextTick(() => tabPanels[selIdx.value].focus());
};

// disabled가 아닌 tab의 index
const tabIdx = ref();

// 키보드(화살표 키)로 tab 선택
const keySelectTab = (e) => {
    let target = e.target;
    let tabWrap = document.querySelector(`#${props.id}`);
    let tabItems = tabWrap.querySelectorAll('.tab-item:not(:disabled)');
    let firstTab = tabItems[0];
    let lastTab = tabItems[tabItems.length - 1];

    for (let i = 0; i < tabItems.length; i++) {
        if (tabItems[i] == target) {
            tabIdx.value = i;
        }
    }

    switch (e.key) {
        case 'ArrowRight':
            e.preventDefault();
            tabIdx.value++;
            if (tabIdx.value > tabItems.length - 1) {
                tabIdx.value = 0;
            }
            tabItems[tabIdx.value].focus();

            break;
        case 'ArrowLeft':
            e.preventDefault();
            tabIdx.value--;
            if (tabIdx.value < 0) {
                tabIdx.value = tabItems.length - 1;
            }
            tabItems[tabIdx.value].focus();
            break;
        case 'Home':
            e.preventDefault();
            firstTab.focus();
            break;
        case 'End':
            e.preventDefault();
            lastTab.focus();
            break;
        case 'Enter':
            e.preventDefault();
            selectTab(e);
            break;
    }

    if (e.keyCode == 32) {
        e.preventDefault();
        selectTab(e);
    }
};

onBeforeMount(() => {
    chkMobile();
    initTab();
});
</script>
