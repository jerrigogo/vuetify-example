<template>
    <div :id="props.id" class="form-wrap datepicker">
        <div class="form-item">
            <span class="form-label">{{ opt.sLabel }}</span>
            <label
                :for="`${props.id}-start-btn`"
                :id="`${props.id}-start-input`"
                :class="`inp-box ${!displayStart ? 'placeholder' : ''}`"
                tabindex="0"
                @keydown.enter="selectCal($event, 'start')"
            >
                {{ displayStart ? displayStart : '날짜를 선택해 주세요' }}
            </label>
            <button
                type="button"
                :id="`${props.id}-start-btn`"
                class="cal-btn"
                aria-haspopup="dialog"
                :aria-control="`${props.id}-calendar-start`"
                tabindex="-1"
                @click="selectCal($event, 'start')"
            >
                <span class="sr-only">달력 보기</span>
            </button>

            <div
                v-if="showCalendar.firstCal"
                class="dialog-calendar"
                role="dialog"
                aria-modal="true"
                :aria-label="`${opt.sLabel} 달력`"
                tabindex="-1"
            >
                <calendar-item
                    :id="`${props.id}-calendar-start`"
                    :is-mobile="isMobile"
                    :setup-date="startDate"
                    :checked-date="checkedStart"
                    @cal-act="selectDate($event, 'start')"
                    @cal-close="closeCalendar"
                ></calendar-item>
            </div>
        </div>

        <div v-if="opt.type == 'period'" class="form-item">
            <span class="form-label">{{ opt.eLabel }}</span>
            <label
                :for="`${props.id}-end-btn`"
                :id="`${props.id}-end-input`"
                :class="`inp-box ${!displayEnd ? 'placeholder' : ''}`"
                tabindex="0"
                @keydown.enter="selectCal($event, 'end')"
            >
                {{ displayEnd ? displayEnd : '날짜를 선택해 주세요' }}
            </label>
            <button
                type="button"
                :id="`${props.id}-end-btn`"
                class="cal-btn"
                aria-haspopup="dialog"
                :aria-control="`${props.id}-calendar-end`"
                tabindex="-1"
                @click="selectCal($event, 'end')"
            >
                <span class="sr-only">달력 보기</span>
            </button>

            <div
                v-if="showCalendar.secondCal"
                class="dialog-calendar"
                role="dialog"
                aria-modal="true"
                :aria-label="`${opt.eLabel} 달력`"
                tabindex="-1"
            >
                <calendar-item
                    :id="`${props.id}-calendar-end`"
                    :is-mobile="isMobile"
                    :setup-date="endDate"
                    :checked-date="checkedEnd"
                    @cal-act="selectDate($event, 'end')"
                    @cal-close="closeCalendar"
                ></calendar-item>
            </div>
        </div>

        <!-- alert modal -->
        <v-dialog id="ErrorDatepicker" class="modal-layout small" v-model="alertDialog" transition="dialog-transition">
            <v-card class="modal-wrap">
                <template v-slot:actions>
                    <div class="modal-body">
                        <p>{{ opt.eLabel }}이 {{ opt.sLabel }}보다 빠릅니다.<br />다시 선택해 주세요.</p>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="modal-btn-primary" @click="alertCallback">
                            <span>확인</span>
                        </button>
                    </div>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref, computed, nextTick, onBeforeMount } from 'vue';
import CalendarItem from '@/components/CalendarItem.vue';

// props
const props = defineProps({
    id: { type: String },
    pickerOpt: { type: Object }
});

// mobile check
const isMobile = ref();
const chkMobile = () => {
    chkDevice();

    window.addEventListener('resize', () => {
        chkDevice();
    });
};

const chkDevice = () => {
    let winW = window.innerWidth;
    if (winW < 1024) {
        isMobile.value = true;
    } else {
        isMobile.value = false;
    }
};

// calendar open/close 여부
const showCalendar = ref({
    firstCal: false,
    secondCal: false
});

// calendar option 설정
const opt = ref({});
const settingOpt = () => {
    if (props.pickerOpt) {
        opt.value.type = props.pickerOpt.type;
        opt.value.sLabel = props.pickerOpt.sLabel;
        opt.value.eLabel = props.pickerOpt.eLabel;

        if (props.pickerOpt.start) {
            displayStart.value = props.pickerOpt.start;
            checkedStart.value = {
                year: props.pickerOpt.start.split('-')[0],
                month: props.pickerOpt.start.split('-')[1],
                date: props.pickerOpt.start.split('-')[2]
            };
        }

        if (props.pickerOpt.end) {
            displayEnd.value = props.pickerOpt.end;
            checkedEnd.value = {
                year: props.pickerOpt.end.split('-')[0],
                month: props.pickerOpt.end.split('-')[1],
                date: props.pickerOpt.end.split('-')[2]
            };
        }
    }
};

// 날짜 설정
const setDate = ref({
    year: computed(() => new Date().getFullYear()),
    month: computed(() => new Date().getMonth() + 1),
    date: computed(() => new Date().getDate())
});

/** 날짜 선택 관련 저장소(?)
 *  startDate: 시작일 달력 날짜 setting; type: Object
 *  displayStart: 시작일 표시; type: String (YYYY-MM-DD)
 *  checkedStart: 시작일 선택 달력에서 선택한 날짜 저장; type: Object
 *  endDate: 종료일 달력 날짜 setting; type Object
 *  displayEnd: 종료일 표시; type: Srting (YYYY-MM-DD)
 *  checkedEnd: 종료일 선택 달려에서 선택한 날짜 저정; type: Object
 */
const startDate = ref(setDate.value);
const displayStart = ref();
const checkedStart = ref({});
const endDate = ref(setDate.value);
const displayEnd = ref();
const checkedEnd = ref({});

// 날짜 선택 함수
const selectDate = (obj, type) => {
    let month = obj.month < 10 ? '0' + obj.month : obj.month;
    let date = obj.date < 10 ? '0' + obj.date : obj.date;

    if (type == 'start') {
        // 시작일
        displayStart.value = `${obj.year}-${month}-${date}`;
        checkedStart.value = obj;
        startDate.value = obj;
        showCalendar.value.firstCal = false;

        // 달력 띄우기 전 요소로 focusing
        prevFocus.value.focus();
    } else if (type == 'end') {
        // 종료일
        displayEnd.value = `${obj.year}-${month}-${date}`;
        checkedEnd.value = obj;
        endDate.value = obj;
        showCalendar.value.secondCal = false;
    }

    if (isMobile.value) {
        document.querySelector('body').removeAttribute('style');
    }

    // eventListener 삭제
    document.removeEventListener('click', hideCalendar);
    document.removeEventListener('keydown', keyHideCal);

    compareDate(type);
};

// 날짜 비교
const errorType = ref();
const compareDate = (type) => {
    let start = new Date(displayStart.value);
    let end = new Date(displayEnd.value);

    // 시작일이 종료일보다 나중일 때
    if (start > end) {
        alertDialog.value = true;
        errorType.value = type;
    }
};

// 달력 버튼
const selectCal = (e, _srt) => {
    let winH = window.innerHeight;
    let boxInp = document.querySelector(`#${props.id}-${_srt}-input`);
    let boxH = boxInp.getBoundingClientRect().height;
    let boxT = boxInp.getBoundingClientRect().top;

    prevFocus.value = e.target;

    if (_srt == 'start') {
        // 시작일
        showCalendar.value.firstCal = !showCalendar.value.firstCal;
        showCalendar.value.secondCal = false;

        nextTick(() => {
            if (showCalendar.value.firstCal) {
                let startCal = document.querySelector(`#${props.id}-calendar-start`).closest('.dialog-calendar');
                let startCalH = startCal.getBoundingClientRect().height;
                let startCalP = boxT + boxH + startCalH;

                if (!isMobile.value) {
                    if (winH > startCalP) {
                        startCal.classList.remove('top');
                    } else {
                        startCal.classList.add('top');
                    }
                }

                // startCal.focus();

                if (displayStart.value) {
                    startCal.addEventListener('animationend', () => {
                        startCal.querySelector('.date-item.sel').focus();
                    });
                } else {
                    // startCal.focus();
                    startCal.addEventListener('animationend', () => {
                        startCal.querySelector('.date-item.today').focus();
                    });
                }
            }
        });
    } else {
        // 종료일
        showCalendar.value.firstCal = false;
        showCalendar.value.secondCal = !showCalendar.value.secondCal;

        nextTick(() => {
            if (showCalendar.value.secondCal) {
                let endCal = document.querySelector(`#${props.id}-calendar-end`).closest('.dialog-calendar');
                let endCalH = endCal.getBoundingClientRect().height;
                let endCalP = boxT + boxH + endCalH;

                if (!isMobile.value) {
                    if (winH > endCalP) {
                        endCal.classList.remove('top');
                    } else {
                        endCal.classList.add('top');
                    }
                }

                endCal.focus();
            }
        });
    }

    if (isMobile.value) {
        let body = document.querySelector('body');
        body.style.overflowY = 'hidden';
    }

    // 달력 이외의 영역 선택 시
    document.addEventListener('click', hideCalendar);
    // keyboard
    document.addEventListener('keydown', keyHideCal);
};

// 달력 띄우기 전 요소 저장
const prevFocus = ref();

// 달력 이외의 영역 선택 시 닫기 함수
const allClass = ref([]);
const hideCalendar = (e) => {
    let target = e.target;
    let targetClass = target.classList.value;
    let startBox = document.querySelector(`#${props.id}-start-input`);
    let endBox = document.querySelector(`#${props.id}-end-input`);
    let targetBox = showCalendar.value.firstCal ? startBox : endBox;
    let dialog = document.querySelector('.dialog-calendar');

    if (showCalendar.value.firstCal || showCalendar.value.secondCal) {
        let allEls = dialog.querySelectorAll('div, h1, button, span');
        allEls.forEach((el) => {
            let elClass = el.classList.value;
            if (allClass.value.findIndex((x) => x == elClass) < 0) {
                allClass.value.push(elClass);
            }
        });

        if (
            allClass.value.findIndex((x) => x == targetClass) < 0 &&
            !target.closest('form-item') &&
            !target.classList.contains('cal-btn') &&
            target != targetBox
        ) {
            showCalendar.value.firstCal = false;
            showCalendar.value.secondCal = false;

            // 달력 닫은 후
            nextTick(() => {
                // 달력 띄우기 전 요소로 focusing
                prevFocus.value.focus();

                if (isMobile.value) {
                    let body = document.querySelector('body');
                    body.removeAttribute('style');
                }

                // eventListener 삭제
                document.removeEventListener('click', hideCalendar);
                document.removeEventListener('keydown', keyHideCal);
            });
        }
    }
};

// keyboard 달력 밖으로 focus나갔을 때 닫기
const keyHideCal = (e) => {
    if (e.key == 'Tab' || e.key == 'Escape') {
        let focusEl = document.activeElement;
        let dialog = document.querySelector('.dialog-calendar');
        let focusEls = dialog.querySelectorAll('.date-item:not([tabindex="-1"]), .prev-cal, .next-cal, .cal-close');
        let firstEl = focusEls[0];
        let lastEl = focusEls[focusEls.length - 1];

        if (
            (e.shiftKey && focusEl == firstEl) ||
            (e.shiftKey && focusEl == dialog) ||
            (!e.shiftKey && focusEl == lastEl) ||
            e.key == 'Escape'
        ) {
            e.preventDefault();
            showCalendar.value.firstCal = false;
            showCalendar.value.secondCal = false;
            prevFocus.value.focus();

            if (isMobile.value) {
                let body = document.querySelector('body');
                body.removeAttribute('style');
            }

            document.removeEventListener('keydown', keyHideCal);
        } else {
            if (e.shiftKey && (focusEl == firstEl || focusEl == dialog)) {
                e.preventDefault();
                lastEl.focus();
            } else if (!e.shiftKey && focusEl == lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        }
    }
};

// calendar 닫기
const closeCalendar = () => {
    if (isMobile.value) {
        showCalendar.value.firstCal = false;
        showCalendar.value.secondCal = false;

        document.querySelector('body').removeAttribute('style');

        // eventListener 삭제
        document.removeEventListener('click', hideCalendar);
        document.removeEventListener('keydown', keyHideCal);
    }
};

// 기간 선택 시 alert
const alertDialog = ref(false);

// alert callback
const alertCallback = () => {
    let target = document.querySelector(`#${props.id}-${errorType.value}-input`);
    alertDialog.value = false;

    // alert 닫은 후 focus 이동
    target.focus();

    // focus 이동 후 상태 설정
    nextTick(() => {
        if (errorType.value == 'start') {
            displayStart.value = '';
            checkedStart.value = {};
        } else if (errorType.value == 'end') {
            displayEnd.value = '';
            checkedEnd.value = {};
        }
    });
};

onBeforeMount(() => {
    chkMobile();
    settingOpt();
    chkMobile();
});
</script>
