<template>
    <div class="main-contents">
        <h2 class="guide-title">Calendar</h2>
        <div class="guide-info">※ Vuetify component 미사용</div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// component import</span>
<span class="import">import</span> <span class="props">CalendarItem</span> <span class="import">from</span> <span class="val">'@/components/CalendarItem.vue'</span>;

<span class="comment">// 날짜 설정</span>
<span class="tag">const</span> <span class="evt">setDate</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">year:</span> <span class="func">computed</span><span class="braket">(</span><span class="mark">()</span> <span class="tag">=> new</span> <span class="type">Date</span><span class="mark">()</span>.<span class="func">getFullYear</span><span class="mark">()</span><span class="braket">)</span>,
    <span class="props">month:</span> <span class="func">computed</span><span class="braket">(</span><span class="mark">()</span> <span class="tag">=> new</span> <span class="type">Date</span><span class="mark">()</span>.<span class="func">getMonth</span><span class="mark">()</span> + <span class="num">1</span><span class="braket">)</span>,
    <span class="props">date:</span> <span class="func">computed</span><span class="braket">(</span><span class="mark">()</span> <span class="tag">=> new</span> <span class="type">Date</span><span class="mark">()</span>.<span class="func">getDate</span><span class="mark">()</span><span class="braket">)</span>
<span class="func">}</span><span class="mark">)</span>;

<span class="comment">// 날짜 선택 callback</span>
<span class="tag">const</span> <span class="func">selectDate</span> = <span class="mark">(<span class="props">obj</span>)</span> <span class="tab">=></span> <span class="mark">{</span>
    <span class="comment">// obj: 선택한 날짜 object</span>
    ...
<span class="mark">}</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">calendar-item</span>
    <span class="props">id</span>=<span class="val">"CalSample1"</span>
    :<span class="props">setup-date</span>="<span class="props">setDate</span>"
    @<span class="props">cal-act</span>="<span class="func">selectDate</span>"<span class="arrow">
&gt;&lt;/</span><span class="component">calendar-item</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <calendar-item id="CalSample1" :setup-date="setDate" @cal-act="selectDate"></calendar-item>
        </div>

        <h3 class="guide-stitle">2. Checked date (예: 2024-07-15)</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// 선택한 날짜(예: 2024년 7월 15일)</span>
<span class="tag">const</span> <span class="evt">checkedDate</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">year:</span> <span class="num">2024</span>,
    <span class="props">month:</span> <span class="num">7</span>,
    <span class="props">date:</span> <span class="num">15</span>
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="comment">// :checked-date 속성 추가</span>
<span class="arrow">&lt;</span><span class="component">calendar-item</span>
    <span class="props">id</span>=<span class="val">"CalSample1"</span>
    :<span class="props">setup-date</span>="<span class="props">setDate</span>"
    :<span class="props">checked-date</span>="<span class="props">checkedDate</span>"
    @<span class="props">cal-act</span>="<span class="func">selectDate</span>"
<span class="arrow">&gt;&lt;/</span><span class="component">calendar-item</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <calendar-item
                id="CalSample2"
                :setup-date="setDate"
                :checked-date="checkedDate"
                @cal-act="selectDate"
            ></calendar-item>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CalendarItem from '@/components/CalendarItem.vue';

// 날짜 설정
const setDate = ref({
    year: computed(() => new Date().getFullYear()),
    month: computed(() => new Date().getMonth() + 1),
    date: computed(() => new Date().getDate())
});

// 날짜 선택 callback
const selectDate = (obj) => {
    // obj: 선택한 날짜 object
    console.log(obj);
};

// 선택한 날짜
const checkedDate = ref({
    year: 2024,
    month: 7,
    date: 15
});
</script>
