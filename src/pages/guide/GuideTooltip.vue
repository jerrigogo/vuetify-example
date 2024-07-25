<template>
    <div class="main-contents">
        <h2 class="guide-title">Tooltips</h2>
        <div class="guide-info">
            <strong>Vuetify3 Tooltips</strong><br />
            <a href="https://vuetifyjs.com/en/components/tooltips/#usage" target="_blank">
                https://vuetifyjs.com/en/components/tooltips/#usage
            </a>
        </div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// import tooltip component</span>
<span class="import">import</span> <span class="props">TooltipComp</span> <span class="import">from</span> <span class="val">'@/components/TooltipComp.vue'</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="comment">// position을 정의하지 않을 경우 'end'가 default</span>
<span class="arrow">&lt;</span><span class="component">tooltip-comp</span> :<span class="props">position</span>="<span class="val">`bottom start`</span>"<span class="arrow">&gt;</span>
    <span class="comment">// tooltip 띄울 버튼 텍스트 - 스크린 리더 용</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">help</span><span class="arrow">&gt;</span>개인정보 처리목적 도움말<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="comment">// tooltip 내용</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">content</span><span class="arrow">&gt;</span>
        개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;</span><span class="component">tooltip-comp</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            개인정보 처리목적
            <tooltip-comp :position="`bottom start`">
                <template #help>개인정보 처리목적 도움말</template>
                <template #content>개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등</template>
            </tooltip-comp>
        </div>
    </div>
</template>

<script setup>
import TooltipComp from '@/components/TooltipComp.vue';
</script>
