<template>
    <div class="main-contents">
        <h2 class="guide-title">Accordions</h2>
        <div class="guide-info">
            <strong>Vuetify3 Expansion panels</strong><br />
            <a href="https://vuetifyjs.com/en/components/expansion-panels/#usage" target="_blank">
                https://vuetifyjs.com/en/components/expansion-panels/#usage
            </a>
        </div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info html">
            <pre>
<span class="comment">// multiple: accordion의 펼침/닫힘이 item별로 각각 작동하도록 하는 속성</span>
<span class="arrow">&lt;</span><span class="component">v-expansion-panels</span> <span class="props">class</span>=<span class="val">"accordion"</span> <span class="props">variant</span>=<span class="val">"accordion"</span> <span class="props">multiple</span><span class="arrow">&gt;</span>
    <span class="comment">// static: item의 제목 부분 높이 고정</span>
    <span class="arrow">&lt;</span><span class="component">v-expansion-panel</span> <span class="props">class</span>=<span class="val">"acco-item"</span> <span class="props">static</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="component">v-expansion-title</span>
            <span class="props">id</span>=<span class="val">"Acco1-1"</span>
            <span class="props">class</span>=<span class="val">"acco-header"</span>
            <span class="props">aria-controls</span>=<span class="val">"Acco1-1-panel"</span>
        <span class="arrow">&gt;</span>
            Item1
        <span class="arrow">&lt;/</span><span class="component">v-expansion-title</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="component">v-expansion-text</span>
            <span class="props">id</span>=<span class="val">"Acco1-1-panel"</span>
            <span class="props">class</span>=<span class="val">"acco-panel"</span>
            <span class="props">aria-labelledby</span>=<span class="val">"Acco1-1"</span>
        <span class="arrow">&gt;</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
        <span class="arrow">&lt;/</span><span class="component">v-expansion-text</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="component">v-expansion-panel</span><span class="arrow">&gt;</span>
    ...
<span class="arrow">&lt;/</span><span class="component">v-expansion-panels</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <v-expansion-panels class="accordion" variant="accordion" multiple>
                <v-expansion-panel class="acco-item" static>
                    <v-expansion-panel-title id="Acco1-1" class="acco-header" aria-controls="Acco1-1-panel"
                        >Item1</v-expansion-panel-title
                    >
                    <v-expansion-panel-text id="Acco1-1-panel" class="acco-panel" aria-labelledby="Acco1-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="acco-item" static>
                    <v-expansion-panel-title id="Acco1-2" class="acco-header" aria-controls="Acco1-2-panel"
                        >Item2</v-expansion-panel-title
                    >
                    <v-expansion-panel-text id="Acco1-2-panel" class="acco-panel" aria-labelledby="Acco1-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="acco-item" static>
                    <v-expansion-panel-title id="Acco1-3" class="acco-header" aria-controls="Acco1-3-panel"
                        >Item3</v-expansion-panel-title
                    >
                    <v-expansion-panel-text id="Acco1-3-panel" class="acco-panel" aria-labelledby="Acco1-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>

        <h3 class="guide-stitle">2. Opened Item</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// index of opened item</span>
<span class="tag">const</span> <span class="evt">accoOpen</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span><span class="num">0</span>, <span class="num">1</span><span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="comment">// v-model 추가</span>
<span class="arrow">&lt;</span><span class="component">v-expansion-panels</span> <span class="props">v-model</span>="<span class="props">accoOpen</span>" <span class="props">class</span>=<span class="val">"accordion"</span> <span class="props">variant</span>=<span class="val">"accordion"</span> <span class="props">multiple</span><span class="arrow">&gt;</span>
...
<span class="arrow">&lt;/</span><span class="component">v-expansion-panels</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <v-expansion-panels v-model="accoOpen" class="accordion" variant="accordion" multiple>
                <v-expansion-panel class="acco-item" static>
                    <v-expansion-panel-title id="Acco2-1" class="acco-header" aria-controls="Acco2-1-panel"
                        >Item1</v-expansion-panel-title
                    >
                    <v-expansion-panel-text id="Acco2-1-panel" class="acco-panel" aria-labelledby="Acco2-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="acco-item" static>
                    <v-expansion-panel-title id="Acco2-2" class="acco-header" aria-controls="Acco2-2-panel"
                        >Item2</v-expansion-panel-title
                    >
                    <v-expansion-panel-text id="Acco2-2-panel" class="acco-panel" aria-labelledby="Acco2-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="acco-item" static>
                    <v-expansion-panel-title id="Acco3-3" class="acco-header" aria-controls="Acco3-3-panel"
                        >Item3</v-expansion-panel-title
                    >
                    <v-expansion-panel-text id="Acco3-3-panel" class="acco-panel" aria-labelledby="Acco3-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const accoOpen = ref([0, 1]);
</script>
