<template>
    <header class="header-container">
        <div class="header-inner">
            <h1 class="header-title">Header</h1>
        </div>

        <navi-comp :is-mobile="props.isMobile" />
    </header>
</template>

<script setup>
import NaviComp from '@/components/layout/NaviComp.vue';

const props = defineProps({
    isMobile: { type: Boolean }
});
</script>
