<template>
    <div :id="props.id" class="calendar" :aria-labelledby="`${props.id}-label`">
        <button v-if="props.isMobile" type="button" class="cal-close" @click="emit('calClose')">
            <span class="sr-only">달력 닫기</span>
        </button>

        <div class="calendar-header">
            <h1 :id="`${props.id}-label`" class="calendar-tit" aria-live="assertive">
                {{ setDate.year }}<span class="sr-only">년</span><span aria-hidden="true">.</span>
                {{ setDate.month < 10 ? '0' + setDate.month : setDate.month }}<span class="sr-only">월</span>
            </h1>

            <div class="calendar-btns" role="navigation">
                <button type="button" class="prev-cal" @click="moveMonth('prev')" :aria-controls="`${props.id}-body`">
                    <span class="sr-only">이전 달</span>
                </button>
                <button type="button" class="next-cal" @click="moveMonth('next')" :aria-controls="`${props.id}-body`">
                    <span class="sr-only">다음 달</span>
                </button>
            </div>
        </div>
        <div class="calendar-body">
            <div :id="`${props.id}-body`" class="calendar-wrap">
                <div class="calendar-yoil" aria-hidden="true">
                    <div v-for="(yoil, index) in setDays" :key="index" class="yoil-item">{{ yoil }}</div>
                </div>
                <div class="calendar-dates">
                    <template v-if="prevArray.length > 0">
                        <button
                            type="button"
                            v-for="(prevObj, index) in prevArray"
                            :key="index"
                            class="date-item empty prev"
                            :aria-label="`${prevObj.year}년 ${prevObj.month}월 ${prevObj.date}일 ${prevObj.day}요일`"
                            :data-date="`${prevObj.year}-${prevObj.month}-${prevObj.date}`"
                            tabindex="-1"
                            @click="selectDate"
                        >
                            <span>{{ prevObj.date }}</span>
                        </button>
                    </template>

                    <button
                        type="button"
                        v-for="(dateObj, index) in monthArray"
                        :key="index"
                        :class="`date-item${dateObj.empty ? ' empty' : ''}${dateObj.now ? ' today' : ''}${dateObj.selected ? ' sel' : ''}`"
                        :aria-label="`${dateObj.year}년 ${dateObj.month}월 ${dateObj.date}일 ${dateObj.day}요일${dateObj.now ? ' (오늘)' : ''}${dateObj.selected ? ' (선택한 날짜)' : ''}`"
                        :aria-selected="!!dateObj.selected ? dateObj.selected : null"
                        :data-date="`${dateObj.year}-${dateObj.month}-${dateObj.date}`"
                        :tabindex="index !== keyCnt ? -1 : null"
                        @click="selectDate"
                        @keydown="keyboardMove"
                    >
                        <span>{{ dateObj.date }}</span>
                    </button>

                    <template v-if="nextArray.length > 0">
                        <button
                            type="button"
                            v-for="(nextObj, index) in nextArray"
                            :key="index"
                            class="date-item empty next"
                            :aria-label="`${nextObj.year}년 ${nextObj.month}월 ${nextObj.date}일 ${nextObj.day}요일`"
                            :data-date="`${nextObj.year}-${nextObj.month}-${nextObj.date}`"
                            tabindex="-1"
                            @click="selectDate"
                        >
                            <span>{{ nextObj.date }}</span>
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, nextTick, onBeforeMount } from 'vue';
const props = defineProps({
    id: { type: String },
    isMobile: { type: Boolean },
    setupDate: { type: Object },
    checkedDate: { type: Object }
});

const emit = defineEmits(['calAct', 'calClose']);

const setDays = ref(['일', '월', '화', '수', '목', '금', '토']);
const setDate = ref({
    year: props.setupDate.year,
    month: props.setupDate.month,
    date: props.setupDate.date,
    day: new Date(`${props.setupDate.year}-${props.setupDate.month}-${props.setupDate.date}`).getDay()
});

// 오늘 날짜
const setToday = ref({
    year: computed(() => new Date().getFullYear()),
    month: computed(() => new Date().getMonth() + 1),
    date: computed(() => new Date().getDate()),
    day: computed(() => new Date().getDay())
});

// month array
const monthArray = ref([]);
const prevArray = ref([]);
const nextArray = ref([]);

// calendar
const setCalendar = (dateObj) => {
    let firstYoil = new Date(dateObj.year, dateObj.month - 1, 1).getDay(); // 이번 달 첫 번째 요일
    let lastDate = new Date(dateObj.year, dateObj.month, 0).getDate(); // 이번 달 마지막 날
    let endDay = new Date(dateObj.year, dateObj.month, 0).getDay(); // 이번 달 마지막 요일
    let remainDate = 6 - endDay;

    let pastYear = dateObj.month - 1 == 0 ? dateObj.year - 1 : dateObj.year; // 지난 달의 연도
    let pastMonth = dateObj.month - 1 == 0 ? 12 : dateObj.month - 1; // 지난 달
    let pastLastYoil = new Date(pastYear, pastMonth, 0).getDay();
    let pastLastDate = new Date(pastYear, pastMonth, 0).getDate() - pastLastYoil; // 지난 달 마지막 날

    let toYear = dateObj.year;
    let toMonth = dateObj.month;

    let nextMYear = dateObj.month + 1 > 12 ? dateObj.year + 1 : dateObj.year; // 다음 달의 연도
    let nextMonth = dateObj.month + 1 > 12 ? 1 : dateObj.month + 1; // 다음 달

    // 요일 계산
    const calDay = (date) => {
        let yoilCnt = new Date(date).getDay();
        return setDays.value[yoilCnt];
    };

    // 이전 달 빈 날짜
    if (firstYoil !== 0) {
        for (let i = 0; i <= pastLastYoil; i++) {
            let monthObj = {};
            monthObj.year = pastYear;
            monthObj.month = pastMonth;
            monthObj.date = pastLastDate + i;
            monthObj.day = calDay(pastYear + '-' + pastMonth + '-' + (pastLastDate + i));

            prevArray.value.push(monthObj);
        }
    }

    // 현재 달 날짜
    for (let i = 1; i <= lastDate; i++) {
        let monthObj = {};
        monthObj.year = toYear;
        monthObj.month = toMonth;
        monthObj.date = i;
        monthObj.day = calDay(toYear + '-' + toMonth + '-' + i);
        if (toYear == setToday.value.year && toMonth == setToday.value.month && i == setToday.value.date) {
            monthObj.now = true;
        }

        // 선택한 날짜가 있을 경우
        selectedDate.value = props.checkedDate;
        if (selectedDate.value) {
            if (monthObj.month == selectedDate.value.month && monthObj.date == selectedDate.value.date) {
                monthObj.selected = true;
            }
        }

        monthArray.value.push(monthObj);
    }

    // 다음 달 빈 날짜
    for (let i = 1; i <= remainDate; i++) {
        let monthObj = {};
        monthObj.year = nextMYear;
        monthObj.month = nextMonth;
        monthObj.date = i;
        monthObj.day = calDay(nextMYear + '-' + nextMonth + '-' + i);

        nextArray.value.push(monthObj);
    }

    nextTick(() => {
        let calendar = document.querySelector(`#${props.id}`);
        let dateItems = calendar.querySelectorAll('.date-item:not(.empty)');
        let selIdx;
        let todayIdx;

        for (let i = 0; i < dateItems.length; i++) {
            let itemClass = dateItems[i].classList;
            if (itemClass.contains('sel')) {
                selIdx = i;
            } else if (itemClass.contains('today')) {
                todayIdx = i;
            }

            keyCnt.value = selIdx ? selIdx : todayIdx;
        }
    });
};

// 이전/다음 달
const moveMonth = (_srt) => {
    let year = setDate.value.year;
    let month = setDate.value.month;

    if (_srt == 'prev') {
        month--;
        if (month < 1) {
            month = 12;
            year = year - 1;
        }
    } else if (_srt == 'next') {
        month++;
        if (month > 12) {
            month = 1;
            year = year + 1;
        }
    }

    setDate.value = { year: year, month: month };

    // 초기화
    monthArray.value = [];
    prevArray.value = [];
    nextArray.value = [];

    setCalendar(setDate.value);
};

// keyboard move
const keyCnt = ref(0);
const keyboardMove = (e) => {
    let dateItems = document.querySelectorAll(`#${props.id} .date-item:not(.empty)`);
    let selIdx = keyCnt.value;

    dateItems[selIdx].removeAttribute('tabindex');

    if (e) {
        if (e.key == 'ArrowRight' || e.key == 'ArrowLeft' || e.key == 'ArrowUp' || e.key == 'ArrowDown') {
            if (e.key == 'ArrowRight') {
                e.preventDefault();

                selIdx++;
                if (selIdx > dateItems.length - 1) {
                    moveMonth('next');
                    selIdx = 0;
                }
            } else if (e.key == 'ArrowLeft') {
                e.preventDefault();

                selIdx--;
                if (selIdx < 0) {
                    moveMonth('prev');
                    selIdx = monthArray.value.length - 1;
                }
            } else if (e.key == 'ArrowUp') {
                e.preventDefault();

                selIdx = selIdx - 7;
                if (selIdx < 0) {
                    moveMonth('prev');
                    selIdx = monthArray.value.length + selIdx;
                }
            } else if (e.key == 'ArrowDown') {
                e.preventDefault();

                selIdx = selIdx + 7;

                if (selIdx > dateItems.length - 1) {
                    moveMonth('next');
                    selIdx = selIdx - dateItems.length;
                }
            }

            nextTick(() => {
                let newItems = document.querySelectorAll(`#${props.id} .date-item:not(.empty)`);

                for (let i = 0; i < newItems.length - 1; i++) {
                    newItems[i].setAttribute('tabindex', -1);
                }

                keyCnt.value = selIdx;
                newItems[keyCnt.value].focus();
                newItems[keyCnt.value].removeAttribute('tabindex');
            });
        }
    }
};

// 날짜 선택
const selectedDate = ref();
const selectDate = (e) => {
    let selDate = e.target.dataset.date;
    let dateItems = document.querySelectorAll(`#${props.id} .date-item:not(.empty)`);
    let dateArr = selDate.split('-');
    let year = dateArr[0];
    let month = dateArr[1];
    let date = dateArr[2];
    let prev = e.target.classList.contains('prev');
    let next = e.target.classList.contains('next');
    let selIdx;
    let dateObj = {};

    if (prev || next) {
        if (prev) {
            moveMonth('prev');
        } else {
            moveMonth('next');
        }
    }

    monthArray.value.forEach((daily) => {
        daily.selected = false;
    });

    selIdx = monthArray.value.findIndex((x) => x.date == date);
    monthArray.value[selIdx].selected = true;

    dateObj.year = year;
    dateObj.month = month;
    dateObj.date = date;

    selectedDate.value = dateObj;
    keyCnt.value = selIdx;
    dateItems[selIdx].focus();

    emit('calAct', selectedDate.value);
};

onBeforeMount(() => {
    setCalendar(setDate.value);
});
</script>
