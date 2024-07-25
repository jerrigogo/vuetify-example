<template>
    <div class="main-contents">
        <h2 class="guide-title">Dropdowns</h2>
        <div class="guide-info">
            <strong>Vuetify3 Menus</strong><br />
            <a href="https://vuetifyjs.com/en/components/menus/#usage" target="_blank">
                https://vuetifyjs.com/en/components/menus/#usage
            </a>
        </div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">items</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Menu 1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Menu 2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Menu 3'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Menu 4'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Menu 5'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Menu 6'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"dropdown"</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="component">v-menu</span> <span class="props">class</span>=<span class="val">"dropdown-layer"</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">activator</span>="<span class="func">{ <span class="evt">props</span> }</span>"<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"dropdown-trigger"</span> <span class="props">v-bind</span>="<span class="evt">props</span>"<span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Sample<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

        <span class="arrow">&lt;</span><span class="component">v-list</span> <span class="props">class</span>=<span class="val">"dropdown-list"</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="component">v-list-item</span>
                <span class="props">class</span>=<span class="val">"dropdown-item"</span>
                <span class="import">v-for</span>="<span class="func">(<span class="evt">item</span>, <span class="evt">index</span>)</span> <span class="tag">in</span> <span class="props">items</span>"
                :<span class="props">key</span>="<span class="evt">index</span>"
                :<span class="props">value</span>="<span class="evt">index</span>"
            <span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="component">v-list-item-title</span><span class="arrow">&gt;</span><span class="func">&lbrace;&lbrace;</span> <span class="evt">item</span>.<span class="props">label</span> <span class="func">&rbrace;&rbrace;</span><span class="arrow">&lt;/</span><span class="component">v-list-item-title</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="component">v-list-item</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="component">v-list</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="component">v-menu</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/<span class="arrow">&lt;</span><span class="tag">div</span></span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <div class="dropdown">
                <v-menu class="dropdown-layer">
                    <template v-slot:activator="{ props }">
                        <button type="button" class="dropdown-trigger" v-bind="props"><span>Sample</span></button>
                    </template>

                    <v-list class="dropdown-list">
                        <v-list-item class="dropdown-item" v-for="(item, index) in items" :key="index" :value="index">
                            <v-list-item-title>{{ item.label }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    { label: 'Menu 1' },
    { label: 'Menu 2' },
    { label: 'Menu 3' },
    { label: 'Menu 4' },
    { label: 'Menu 5' },
    { label: 'Menu 6' }
]);
</script>
