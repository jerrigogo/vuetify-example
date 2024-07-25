<template>
    <div class="main-contents">
        <h2 class="guide-title">Datepicker</h2>
        <div class="guide-info">※ Datepicker 기간 선택 시 alert dialog에만 Vuetify component 사용</div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// component import</span>
<span class="import">import</span> <span class="props">DatepickerItem</span> <span class="import">from</span> <span class="val">'@/components/DatepickerItem.vue'</span>;

<span class="comment">/** datepicker type option
 * 1. sLabel: picker의 label
 */</span>
<span class="tag">const</span> <span class="evt">pickerOpt</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">sLabel:</span> <span class="val">'날짜 선택'</span>
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">datepicker-item</span>
    <span class="props">id</span>=<span class="val">"PickerSample1"</span>
    :<span class="props">picker-opt</span>="<span class="props">pickerOpt</span>"
<span class="arrow">&gt;&lt;/</span><span class="component">datepicker-item</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <datepicker-item id="PickerSample1" :picker-opt="pickerOpt"></datepicker-item>
        </div>

        <h3 class="guide-stitle">2. Period</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">/** 기간 선택 datepicker type option
 * 1. type: datepicker 종류, single or period
 * 2. sLabel: 첫 번째 picker의 label
 * 3. eLable: 두 번째 picker의 label; type이 single일 때는 생략
 */</span>
<span class="tag">const</span> <span class="evt">pickerOpt</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">type:</span> <span class="val">'period'</span>,
    <span class="props">sLabel:</span> <span class="val">'시작일'</span>,
    <span class="props">eLabel:</span> <span class="val">'종료일'</span>
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-cont">
            <datepicker-item id="PickerSample2" :picker-opt="pickerOpt2"></datepicker-item>
        </div>

        <h3 class="guide-stitle">3. 첫 번째 혹은 두 번째 날짜 값이 있을 때</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">/** 기간 선택 datepicker type option
 * 1. type: datepicker 종류, single or period
 * 2. sLabel: 첫 번째 picker의 label
 * 3. start: 선택된 첫 번째 날짜가 있을 때
 * 4. eLable: 두 번째 picker의 label
 * 5. end: 선택된 두 번째 날짜가 있을 때
 */</span>
<span class="tag">const</span> <span class="evt">pickerOpt</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">type:</span> <span class="val">'period'</span>,
    <span class="props">sLabel:</span> <span class="val">'시작일'</span>,
    <span class="props">start:</span> <span class="val">'2024-07-15'</span>,
    <span class="props">eLabel:</span> <span class="val">'종료일'</span>,
    <span class="props">end:</span> <span class="val">'2024-07-30'</span>
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-cont">
            <datepicker-item id="PickerSample3" :picker-opt="pickerOpt3"></datepicker-item>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DatepickerItem from '@/components/DatepickerItem.vue';

/** datepicker type option
 * 1. sLabel: 첫 번째 picker의 label
 */
const pickerOpt = ref({
    sLabel: '날짜 선택'
});

/** 기간 선택 datepicker type option
 * 1. type: datepicker 종류, single or period
 * 2. sLabel: 첫 번째 picker의 label
 * 3. eLable: 두 번째 picker의 label
 */
const pickerOpt2 = ref({
    type: 'period',
    sLabel: '시작일',
    eLabel: '종료일'
});

/** 기간 선택 datepicker type option
 * 1. type: datepicker 종류, single or period
 * 2. sLabel: 첫 번째 picker의 label
 * 3. start: 선택된 첫 번째 날짜가 있을 때
 * 4. eLable: 두 번째 picker의 label
 * 5. end: 선택된 두 번째 날짜가 있을 때
 */
const pickerOpt3 = ref({
    type: 'period',
    sLabel: '시작일',
    start: '2024-07-15',
    eLabel: '종료일',
    end: '2024-07-30'
});
</script>
