<template>
    <header-comp :is-mobile="isMobile" />

    <main class="main-container">
        <router-view />
    </main>

    <footer-comp v-if="!isMobile" />
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderComp from '@/components/layout/HeaderComp.vue';
import FooterComp from '@/components/layout/FooterComp.vue';

const isMobile = ref(computed(() => chkMobile()));
const chkMobile = () => {
    let userAgent = navigator.userAgent;
    let device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    if (device.test(userAgent)) {
        return true;
    } else {
        return false;
    }
};
</script>
