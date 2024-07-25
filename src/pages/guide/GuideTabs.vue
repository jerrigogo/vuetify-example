<template>
    <div class="main-contents">
        <h2 class="guide-title">Tabs</h2>
        <div class="guide-info">※ Vuetify component 미사용</div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// import tab component</span>
<span class="import">import</span> <span class="tag">TabComp</span> <span class="import">from</span> <span class="val">'@/components/TabComp.vue'</span>;
<span class="tag">const</span> <span class="evt">tabItems</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 3'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">tab-comp</span> <span class="props">id</span>=<span class="val">"Tab1"</span> :<span class="props">tab-opts</span>="<span class="props">tabItems</span>"<span class="arrow">&gt;</span>
    <span class="comment">// tab panel 내용 - tab의 개수에 맞게 tab panel을 작성해야 함</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel1</span><span class="arrow">&gt;</span>Tab 1 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel2</span><span class="arrow">&gt;</span>Tab 2 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel3</span><span class="arrow">&gt;</span>Tab 3 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">tab-comp</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <tab-comp id="Tab1" :tab-opts="tabItems">
                <template #panel1>Tab 1 contents</template>
                <template #panel2>Tab 2 contents</template>
                <template #panel3>Tab 3 contents</template>
            </tab-comp>
        </div>

        <h3 class="guide-stitle">2. Selected</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">tabItems2</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 2'</span>, <span class="props">selected:</span> <span class="boolean">true</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 3'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">tab-comp</span> <span class="props">id</span>=<span class="val">"Tab2"</span> :<span class="props">tab-opts</span>="<span class="props">tabItems2</span>"<span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel1</span><span class="arrow">&gt;</span>Tab 1 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel2</span><span class="arrow">&gt;</span>Tab 2 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel3</span><span class="arrow">&gt;</span>Tab 3 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">tab-comp</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <tab-comp id="Tab2" :tab-opts="tabItems2">
                <template #panel1>Tab 1 contents</template>
                <template #panel2>Tab 2 contents</template>
                <template #panel3>Tab 3 contents</template>
            </tab-comp>
        </div>

        <h3 class="guide-stitle">3. Disabled</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">tabItems3</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 3'</span>, <span class="props">disabled:</span> <span class="boolean">true</span> <span class="braket">}</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Tab 4'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">tab-comp</span> <span class="props">id</span>=<span class="val">"Tab3"</span> :<span class="props">tab-opts</span>="<span class="props">tabItems3</span>"<span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel1</span><span class="arrow">&gt;</span>Tab 1 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel2</span><span class="arrow">&gt;</span>Tab 2 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel3</span><span class="arrow">&gt;</span>Tab 3 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">panel4</span><span class="arrow">&gt;</span>Tab 4 contents<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">tab-comp</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <tab-comp id="Tab3" :tab-opts="tabItems3">
                <template #panel1>Tab 1 contents</template>
                <template #panel2>Tab 2 contents</template>
                <template #panel3>Tab 3 contents</template>
                <template #panel4>Tab 4 contents</template>
                <template #panel5>Tab 5 contents</template>
                <template #panel6>Tab 6 contents</template>
            </tab-comp>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TabComp from '@/components/TabComp.vue';

const tabItems = ref([{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }]);
const tabItems2 = ref([{ label: 'Tab 1' }, { label: 'Tab 2', selected: true }, { label: 'Tab 3' }]);
const tabItems3 = ref([{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3', disabled: true }, { label: 'Tab 4' }]);
</script>
