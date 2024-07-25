<template>
    <div class="main-contents">
        <h2 class="guide-title">Selects</h2>
        <div class="guide-info">
            <strong>Vuetify3 Selects</strong><br />
            <a href="https://vuetifyjs.com/en/components/selects/#usage" target="_blank">
                https://vuetifyjs.com/en/components/selects/#usage
            </a>
        </div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">selectOpt</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="val">'Select Option1'</span>,
    <span class="val">'Select Option2'</span>,
    <span class="val">'Select Option3'</span>,
    <span class="val">'Select Option4'</span>,
    <span class="val">'Select Option5'</span>,
    <span class="val">'Select Option6'</span>
<span class="func">ref<span class="mark">)</span>]</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">"select-box"</span>
    <span class="props">label</span>=<span class="val">"Basic Sample"</span>
    :<span class="props">items</span>="<span class="props">selectOpt</span>"
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>="<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">'select-box-list'</span> <span class="func">}</span>"
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <v-select
                class="select-box"
                label="Basic Sample"
                :items="selectOpt"
                :menu-props="{ contentClass: 'select-box-list' }"
            >
            </v-select>
        </div>

        <h3 class="guide-stitle">2. Multiple</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">sampleselect</span> = <span class="func">ref<span class="mark">(<span class="func">[]</span>)</span></span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">"select-box"</span>
    <span class="props">label</span>=<span class="val">"Multiple Sample"</span>
    <span class="props">v-model</span>="<span class="props">sampleselect</span>"
    :<span class="props">items</span>="<span class="props">selectOpt</span>"
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>="<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">'select-box-list'</span> <span class="func">}</span>"
    <span class="props">multiple</span>
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <v-select
                class="select-box"
                label="Multiple Sample"
                v-model="sampleselect"
                :items="selectOpt"
                :menu-props="{ contentClass: 'select-box-list' }"
                multiple
            ></v-select>
        </div>

        <h3 class="guide-stitle">3. Selected</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// 선택된 값 설정</span>
<span class="tag">const</span> <span class="evt">selectedsample</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span> <span class="props">label:</span> <span class="val">'Select Option3'</span>, <span class="props">value:</span> <span class="val">'3'</span> <span class="func">}</span><span class="mark">)</span>;
<span class="tag">const</span> <span class="evt">selectOpt2</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select Option1'</span>, <span class="props">value:</span> <span class="val">'1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select Option2'</span>, <span class="props">value:</span> <span class="val">'2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select Option3'</span>, <span class="props">value:</span> <span class="val">'3'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select Option4'</span>, <span class="props">value:</span> <span class="val">'4'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select Option5'</span>, <span class="props">value:</span> <span class="val">'5'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select Option6'</span>, <span class="props">value:</span> <span class="val">'6'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">"select-box"</span>
    <span class="props">label</span>=<span class="val">"Selected value"</span>
    <span class="props">v-model</span>="<span class="props">selectedsample</span>"
    :<span class="props">items</span>="<span class="props">selectOpt2</span>"
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>="<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">'select-box-list'</span> <span class="func">}</span>"
    <span class="props">item-title</span>=<span class="val">"label"</span>
    <span class="props">item-value</span>=<span class="val">"value"</span>
    <span class="props">return-object</span>
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <v-select
                class="select-box"
                label="Selected value"
                v-model="selectedsample"
                :items="selectOpt2"
                :menu-props="{ contentClass: 'select-box-list' }"
                item-title="label"
                item-value="value"
                return-object
            ></v-select>
        </div>

        <h3 class="guide-stitle">4. Custom item props</h3>
        <div class="guide-info">※ selectbox 리스트의 항목을 두 줄로 표시</div>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">items</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">'Select Option1'</span>, <span class="props">subtitle:</span> <span class="val">'sub-title of select option1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">'Select Option2'</span>, <span class="props">subtitle:</span> <span class="val">'sub-title of select option2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">'Select Option3'</span>, <span class="props">subtitle:</span> <span class="val">'sub-title of select option3'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">'Select Option4'</span>, <span class="props">subtitle:</span> <span class="val">'sub-title of select option4'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">'Select Option5'</span>, <span class="props">subtitle:</span> <span class="val">'sub-title of select option5'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">'Select Option6'</span>, <span class="props">subtitle:</span> <span class="val">'sub-title of select option6'</span> <span class="braket">}</span>
<span class="func"><span class="mark">]</span>)</span>;

<span class="tag">const</span> <span class="evt">itemProps</span> = <span class="mark">(<span class="props">item</span>)</span> <span class="tag">=></span> <span class="mark">{</span>
    <span class="import">return</span> <span class="func">{</span>
        <span class="props">title: item</span>.<span class="props">title</span>,
        <span class="props">subtitle: item</span>.<span class="props">subtitle</span>
    <span class="func">}</span>;
<span class="mark">}</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">"select-box"</span>
    <span class="props">label</span>=<span class="val">"Custom"</span>
    :<span class="props">item-props</span>="<span class="func">itemProps</span>"
    :<span class="props">items</span>="<span class="props">items</span>"
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>="<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">'select-box-list'</span> <span class="func">}</span>"
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <v-select
                class="select-box"
                label="Custom"
                :item-props="itemProps"
                :items="items"
                :menu-props="{ contentClass: 'select-box-list' }"
            ></v-select>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectOpt = ref([
    'Select Option1',
    'Select Option2',
    'Select Option3',
    'Select Option4',
    'Select Option5',
    'Select Option6'
]);

const sampleselect = ref([]);

const selectedsample = ref({ label: 'Select Option3', value: '3' });
const selectOpt2 = ref([
    { label: 'Select Option1', value: '1' },
    { label: 'Select Option2', value: '2' },
    { label: 'Select Option3', value: '3' },
    { label: 'Select Option4', value: '4' },
    { label: 'Select Option5', value: '5' },
    { label: 'Select Option6', value: '6' }
]);

const items = ref([
    { title: 'Select Option1', subtitle: 'sub-title of select option1' },
    { title: 'Select Option2', subtitle: 'sub-title of select option2' },
    { title: 'Select Option3', subtitle: 'sub-title of select option3' },
    { title: 'Select Option4', subtitle: 'sub-title of select option4' },
    { title: 'Select Option5', subtitle: 'sub-title of select option5' },
    { title: 'Select Option6', subtitle: 'sub-title of select option6' }
]);

const itemProps = (item) => {
    return {
        title: item.title,
        subtitle: item.subtitle
    };
};
</script>
