<template>
    <div class="tooltip">
        <button type="button" class="tooltip-trigger" @click="showTooltip">
            <span class="sr-only">
                <slot name="help"></slot>
            </span>
            <v-tooltip
                class="tooltip-wrap"
                v-model="tipShow"
                activator="parent"
                offset="5"
                :open-on-focus="true"
                :location="!isMobile ? props.position : 'bottom'"
            >
                <slot name="content"></slot>
            </v-tooltip>
        </button>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

const props = defineProps({
    position: { type: String, default: 'end' }
});

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

const tipShow = ref(false);
const showTooltip = () => {
    tipShow.value = true;
};
</script>
