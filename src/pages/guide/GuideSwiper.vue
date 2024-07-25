<script setup>
import { ref } from 'vue';
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // fade 효과 사용할 때 import
import 'swiper/css/a11y';

/**
 * modules: 사용할 module
 * slidePerView: 한 화면에 보여주는 슬라이드 개수
 * spaceBetween: 슬라이드 간 여백
 * loop: 슬라이드 loop 여부(default: false)
 * autoplay: 슬라이드 자동 시작 여부(default: false)
 * effect: 슬라이딩의 효과 부여(default: slide)
 * navigation: 좌/우 이동 화살표 표시
 * pagination: 페이징 표시
 */
const swiperOptions = ref({
    // Autoplay 및 EffectFade는 사용할 때만 추가
    modules: [Navigation, Pagination, Autoplay, EffectFade, A11y],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    autoplay: false,
    effect: 'slide',
    navigation: true,
    pagination: {
        clickable: true
    },
    /** 웹접근성(한글화)
     * containerMessage: 슬라이드에 대한 설명
     * prevSlideMessage: 이전 화살표에 대한 설명
     * nextSlideMessage: 다음 화살표에 대한 설명
     * slideLabelMessage: 현재 몇 번 슬라이드인지 설명
     * paginationBulletMessage: 페이징에 대한 설명
     * a11y: 웹접근성
     * breakpoints: 해상도에 따라 다른 설정
     */
    a11y: {
        containerMessage: '기본 슬라이드 샘플입니다.',
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다.',
        paginationBulletMessage: '{{index}}번 슬라이드로 가기'
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});

const swiperOptions2 = ref({
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: {
        clickable: true,
        // 웹접근성(한글화) 포함
        renderBullet: (index, className) => {
            return `<span role="button" class="paging-item ${className}" aria-label="${index + 1}번 슬라이드로 가기">${index + 1}</span>`;
        }
    },
    a11y: {
        containerMessage: '페이징을 변경한 슬라이드 샘플입니다.',
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다.'
    }
});

const swiperOptions3 = ref({
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: {
        type: 'fraction'
    },
    a11y: {
        containerMessage: '페이징을 분수 형태로 변경한 슬라이드 샘플입니다.',
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다.'
    }
});

const swiperOptions4 = ref({
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: {
        type: 'progressbar'
    },
    a11y: {
        containerMessage: '페이징을 진행바 형태로 변경한 슬라이드 샘플입니다.',
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다.'
    }
});

// swiper의 event 확인 가능
const onSwiper = (swiper) => {
    console.log(swiper);
};

// swiper의 slide 감지
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<template>
    <div class="main-contents">
        <h2 class="guide-title">Swipers</h2>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info">
            참고 URL : Swiper Vue.js (<a href="https://swiperjs.com/vue" class="link-text" target="_blank"
                >https://swiperjs.com/vue</a
            >)
        </div>
        <div class="guide-info script">
            <pre>
<span class="import">import</span> <span class="mark">{</span> <span class="props">ref</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'vue'</span>;
<span class="comment">// swiper 관련 import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">Navigation</span>, <span class="props">Pagination</span>, <span class="props">Autoplay</span>, <span class="props">EffectFade</span>, <span class="props">A11y</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'swiper/modules'</span>;
<span class="import">import</span> <span class="mark">{</span> <span class="props">Swiper</span>, <span class="props">SwiperSlide</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'swiper/vue'</span>;
<span class="import">import</span> <span class="val">'swiper/css'</span>;
<span class="import">import</span> <span class="val">'swiper/css/navigation'</span>;
<span class="import">import</span> <span class="val">'swiper/css/pagination'</span>;
<span class="import">import</span> <span class="val">'swiper/css/effect-fade'</span>; <span class="comment">// fade 효과 사용할 때 import</span>
<span class="import">import</span> <span class="val">'swiper/css/a11y'</span>;

<span class="comment">/**
 * modules: 사용할 module
 * slidePerView: 한 화면에 보여주는 슬라이드 개수
 * spaceBetween: 슬라이드 간 여백
 * loop: 슬라이드 loop 여부(default: false)
 * autoplay: 슬라이드 자동 시작 여부(default: false)
 * effect: 슬라이딩의 효과 부여(default: slide)
 * navigation: 좌/우 이동 화살표 표시
 * pagination: 페이징 표시
 * a11y: 웹접근성
 * breakpoints: 해상도에 따라 다른 설정
 */</span>
<span class="tag">const</span> <span class="evt">swiperOptions</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="comment">// Autoplay 및 EffectFade는 사용할 때만 추가</span>
    <span class="props">modules:</span> <span class="bracket">[</span><span class="func">Navigation</span>, <span class="func">Pagination</span>, <span class="func">Autoplay</span>, <span class="func">EffectFade</span>, <span class="func">A11y</span><span class="braket">]</span>,
    <span class="props">slidesPerView:</span> <span class="num">1</span>,
    <span class="props">spaceBetween:</span> <span class="num">20</span>,
    <span class="props">loop:</span> <span class="boolean">false</span>,
    <span class="props">autoplay:</span> <span class="boolean">false</span>,
    <span class="props">effect:</span> <span class="val">'slide'</span>,
    <span class="props">navigation:</span> <span class="boolean">true</span>,
    <span class="props">pagination:</span> <span class="braket">{</span>
        <span class="props">clickable:</span> <span class="boolean">true</span>
    <span class="braket">}</span>,
    <span class="comment">/** 웹접근성(한글화)
     * containerMessage: 슬라이드에 대한 설명
     * prevSlideMessage: 이전 화살표에 대한 설명
     * nextSlideMessage: 다음 화살표에 대한 설명
     * slideLabelMessage: 현재 몇 번 슬라이드인지 설명
     * paginationBulletMessage: 페이징에 대한 설명
     */</span>
    <span class="props">a11y:</span> <span class="braket">{</span>
        <span class="props">containerMessage:</span> <span class="val">'기본 슬라이드 샘플입니다.'</span>,
        <span class="props">prevSlideMessage:</span> <span class="val">'이전 슬라이드'</span>,
        <span class="props">nextSlideMessage:</span> <span class="val">'다음 슬라이드'</span>,
        <span class="props">slideLabelMessage:</span> <span class="val">'총 &#123;&#123;slidesLength&#125;&#125;장의 슬라이드 중 &#123;&#123;index&#125;&#125;번 슬라이드입니다.'</span>,
        <span class="props">paginationBulletMessage:</span> <span class="val">'&#123;&#123;index&#125;&#125;번 슬라이드로 가기'</span>
    <span class="braket">}</span>,
    <span class="props">breakpoints:</span> <span class="braket">{</span>
        <span class="comment">// when window width is >= 320px</span>
        <span class="num">320:</span> <span class="mark">{</span>
            <span class="props">slidesPerView:</span> <span class="num">1</span>,
            <span class="props">spaceBetween:</span> <span class="num">5</span>
        <span class="mark">}</span>,
        <span class="comment">// when window width is >= 480px</span>
        <span class="num">480:</span> <span class="mark">{</span>
            <span class="props">slidesPerView:</span> <span class="num">1</span>,
            <span class="props">spaceBetween:</span> <span class="num">10</span>
        <span class="mark">}</span>,
        <span class="comment">// when window width is >= 640px</span>
        <span class="num">640:</span> <span class="mark">{</span>
            <span class="props">slidesPerView:</span> <span class="num">1</span>,
            <span class="props">spaceBetween:</span> <span class="num">20</span>
        <span class="mark">}</span>
    <span class="braket">}</span>
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">swiper</span> <span class="props">v-bind</span>="<span class="props">swiperOptions</span>" @<span class="props">swiper</span>="<span class="func">onSwiper</span>" @<span class="props">slideChange</span>="<span class="func">onSlideChange</span>"<span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>Slide 1<span class="arrow">&lt;/</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>Slide 2<span class="arrow">&lt;/</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>Slide 3<span class="arrow">&lt;/</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>Slide 4<span class="arrow">&lt;/</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>Slide 5<span class="arrow">&lt;/</span><span class="component">swiper-slide</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">swiper</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <swiper v-bind="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
            </swiper>
        </div>

        <h3 class="guide-stitle">2-1. Pagination custom</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">swiperOptions2</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    ...
    <span class="props">pagination:</span> <span class="braket">{</span>
        <span class="props">clickable:</span> <span class="boolean">true</span>,
        <span class="comment">// 웹접근성(한글화) 포함</span>
        <span class="func">renderBullet</span><span class="props">:</span> <span class="mark">(</span><span class="props">index</span>, <span class="props">className</span><span class="mark">)</span> <span class="tag">=></span> <span class="mark">{</span>
            <span class="import">return</span> <span class="val">`&lt;span role="button" class="paging-item <span class="tag">${</span><span class="props">className</span><span class="tag">}</span>" aria-label="<span class="tag">${</span><span class="props">index</span> <span style="color:#ccc">+</span> <span class="num">1</span><span class="tag">}</span>번 슬라이드로 가기"&gt;${index + 1}&lt;/span&gt;`;</span>
        }
    <span class="braket">}</span>,
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-cont">
            <swiper v-bind="swiperOptions2">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
            </swiper>
        </div>

        <h3 class="guide-stitle">2-2. Pagination fraction</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">swiperOptions2</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    ...
    <span class="props">pagination:</span> <span class="braket">{</span>
        <span class="props">type:</span> <span class="val">'fraction'</span>
    <span class="braket">}</span>,
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-cont">
            <swiper v-bind="swiperOptions3">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
            </swiper>
        </div>

        <h3 class="guide-stitle">2-3. Pagination progress</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">swiperOptions2</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    ...
    <span class="props">pagination:</span> <span class="braket">{</span>
        <span class="props">type:</span> <span class="val">'progressbar'</span>
    <span class="braket">}</span>,
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-cont">
            <swiper v-bind="swiperOptions4">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
            </swiper>
        </div>
    </div>
</template>
