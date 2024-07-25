<template>
    <nav id="navigation"
        :class="`navi-container ${menuOpen ? 'open' : ''}`"
        :aria-hidden="isMobile ? menuOpen ? false : true : null"
        :aria-expanded="isMobile ? menuOpen ? true : false : null"
        aria-labelledby="navigation-label"
    >
        <button v-if="props.isMobile" type="button"
            aria-control="navigation"
            class="menu-btn"
            @click="menuOpen = !menuOpen"
        >
            <span class="sr-only">메뉴 {{ openClose() }}</span>
        </button>

        <div class="navi-inner">
            <h2 id="navigation-label" class="sr-only">Navigation</h2>
            <ul class="menu-list">
                <li><a href="">Menu 1</a></li>
                <li><a href="">Menu 2</a></li>
                <li><a href="">Menu 3</a></li>
                <li><a href="">Menu 4</a></li>
                <li><a href="">Menu 5</a></li>
                <li><a href="">Menu 6</a></li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    isMobile: { type: Boolean }
})

const menuOpen = ref();
const openClose = () => {
    let menuText;
    if (menuOpen.value) {
        menuText = '닫기';
    } else {
        menuText = '열기';
    }

    return menuText;
}
</script>