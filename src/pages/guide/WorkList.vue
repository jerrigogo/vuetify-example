<template>
    <header class="publist-header">
        <div class="pub-header-inner">
            <h1 class="publist-tit">Working List</h1>

            <!-- <router-link class="header-link" :to="{ path: '/guide/modal' }">GUIDE</router-link> -->
        </div>
    </header>
    <main class="publist-main">
        <div class="pub-contents">
            <div class="pub-sorting">
                <div class="type-info">* 화면종류 : P(페이지), M(모달 팝업)</div>

                <div class="sort-item">
                    <label for="keyword">화면명 검색</label>
                    <input
                        type="search"
                        id="keyword"
                        name="keyword"
                        class="inp-box"
                        placeholder="키워드를 입력해 주세요."
                        @keydown.enter="sorting($event, 'keyword')"
                    />
                    <button type="button" class="srch-btn" @click="sorting($event, 'keyword')">
                        <span>검색</span>
                    </button>
                    <button type="button" class="all-btn" @click="sorting($event, 'all')">
                        <span>전체보기</span>
                    </button>
                </div>

                <div class="sort-item">
                    <label for="manager">담당자</label>
                    <span class="select">
                        <select v-model="srchType.manager" id="manager" @change="sorting($event, 'manager')">
                            <option value="">전체</option>
                            <option v-for="(name, index) in managerList" :key="index" :value="name">{{ name }}</option>
                        </select>
                    </span>
                </div>

                <div class="sort-item">
                    <label for="state">진행상황</label>
                    <span class="select">
                        <select v-model="srchType.progress" id="state" @change="sorting($event, 'progress')">
                            <option value="">전체</option>
                            <option value="wait">진행대기</option>
                            <option value="ing">진행중</option>
                            <option value="complete">완료</option>
                            <option value="hold">보류</option>
                            <option value="except">제외</option>
                        </select>
                    </span>
                </div>

                <div class="sort-item">
                    <label for="start">시작일</label>
                    <span class="select">
                        <select v-model="srchType.startdate" id="start" @change="sorting($event, 'startdate')">
                            <option value="">전체</option>
                            <option v-for="(date, index) in startDateList" :key="index" :value="date">
                                {{ date }}
                            </option>
                        </select>
                    </span>
                </div>

                <div class="sort-item">
                    <span class="status">
                        전체: <strong>{{ pubList.length }}</strong
                        >건, &nbsp; 진행대기: <span v-html="statusRate('wait')"></span>, &nbsp; 진행중:
                        <span class="ing" v-html="statusRate('ing')"></span>, &nbsp; 완료:
                        <span class="complete" v-html="statusRate('complete')"></span>, &nbsp; 보류:
                        <span v-html="statusRate('hold')"></span>, &nbsp; 제외:
                        <span v-html="statusRate('except')"></span>
                    </span>
                </div>
            </div>

            <table class="pub-list">
                <caption>
                    publishing list
                </caption>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Depth 1</th>
                        <th>Depth 2</th>
                        <th>Depth 3</th>
                        <th>Depth 4</th>
                        <th>Depth 5</th>
                        <th class="page-name">화면명</th>
                        <th class="scrid">화면 ID</th>
                        <th class="type">화면 종류</th>
                        <th class="name">담당자</th>
                        <th class="progress">진행상황</th>
                        <th class="date">시작</th>
                        <th class="date">완료</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="resultList.length > 0">
                        <tr
                            v-for="(item, index) in resultList"
                            :key="index"
                            :class="`${item.progress} ${item.group ? 'border-line' : ''}`"
                        >
                            <td>{{ index + 1 }}</td>
                            <td :class="`depth1 ${!item.depth[1] ? 'last' : ''}`">
                                {{ item.depth[0] }}
                            </td>
                            <td :class="`depth2 ${!item.depth[2] ? 'last' : ''}`">
                                {{ item.depth[1] }}
                            </td>
                            <td :class="`depth3 ${!item.depth[3] ? 'last' : ''}`">
                                {{ item.depth[2] }}
                            </td>
                            <td :class="`depth4 ${!item.depth[4] ? 'last' : ''}`">
                                {{ item.depth[3] }}
                            </td>
                            <td class="depth5 last">
                                {{ item.depth[4] }}
                            </td>
                            <td class="page-name" v-html="pageName(item.depth[item.depth.length - 1])"></td>
                            <td class="scrid">
                                <router-link :to="{ path: '/home' }" target="_blank">{{ item.scrid }}</router-link>
                            </td>
                            <td class="type">{{ item.scrtype }}</td>
                            <td class="name">{{ item.manager }}</td>
                            <td class="progress">{{ displayProgress(item.progress) }}</td>
                            <td class="date">{{ item.startdate }}</td>
                            <td class="date">{{ item.compdate }}</td>
                            <td>
                                <ul v-if="item.etc">
                                    <li
                                        v-for="(etc, index) in item.etc"
                                        :key="etc"
                                        :class="index == item.etc.length - 1 ? 'last' : ''"
                                    >
                                        {{ etc }}
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                            <td colspan="13" class="no-result">검색결과가 없습니다.</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script setup>
import { ref, nextTick, computed, onBeforeMount, onUnmounted } from 'vue';
import PubListJson from './pubList.json';

const pubList = ref(computed(() => PubListJson));

// 진행상황 표시
const displayProgress = (_srt) => {
    let result;
    switch (_srt) {
        case 'ing':
            result = '진행중';
            break;
        case 'wait':
            result = '진행대기';
            break;
        case 'except':
            result = '제외';
            break;
        case 'complete':
            result = '완료';
            break;
        case 'hold':
            result = '보류';
            break;
        default:
            result = '진행대기';
            break;
    }

    return result;
};

// 담당자명 표시
const managerList = ref(computed(() => manager()));
const manager = () => {
    let name = [];
    pubList.value.forEach((list) => {
        name.push(list.manager);
    });

    const uniqArr = name.filter((el, idx) => {
        return name.indexOf(el) == idx;
    });

    return uniqArr;
};

// 시작일
const startDateList = ref(computed(() => startDate()));
const startDate = () => {
    let date = [];
    pubList.value.forEach((list) => {
        date.push(list.startdate);
    });

    const uniqArr = date.filter((el, idx) => {
        return date.indexOf(el) == idx;
    });

    return uniqArr;
};

// 검색
const resultList = ref(pubList.value);
const srchType = ref({
    progress: '',
    manager: '',
    startdate: '',
    keyword: ''
});
const sorting = (e, _type) => {
    let val = e.target.value;
    let result = [];

    switch (_type) {
        case 'progress':
            srchType.value.progress = val;
            break;
        case 'manager':
            srchType.value.manager = val;
            break;
        case 'startdate':
            srchType.value.startdate = val;
            break;
        case 'keyword':
            srchType.value.keyword = document.querySelector('#keyword').value;
    }

    if (
        (!srchType.value.progress && !srchType.value.manager && !srchType.value.startdate && !srchType.value.keyword) ||
        _type == 'all'
    ) {
        srchType.value.progress = '';
        srchType.value.manager = '';
        srchType.value.startdate = '';
        srchType.value.keyword = '';
        result = pubList.value;
    } else {
        const reduceResult = pubList.value.reduce((acc, cur) => {
            const progCondition = srchType.value.progress ? cur.progress == srchType.value.progress : true;
            const manCondition = srchType.value.manager ? cur.manager == srchType.value.manager : true;
            const dateCondition = srchType.value.startdate ? cur.startdate == srchType.value.startdate : true;
            const wordCondition = srchType.value.keyword
                ? cur.depth[cur.depth.length - 1].indexOf(srchType.value.keyword) > -1
                : true;

            if (progCondition && manCondition && dateCondition && wordCondition) {
                acc.push(cur);
            }

            return acc;
        }, []);

        result = reduceResult;
    }

    resultList.value = result;
};

// 화면명 표시
const pageName = (_txt) => {
    let change = '';
    let keyword = srchType.value.keyword;

    if (keyword) {
        let regex = new RegExp(keyword, 'g');
        change = _txt.replace(regex, '<strong>' + keyword + '</strong>');
    } else {
        change = _txt;
    }

    return change;
};

// 진행율 표시
const statusRate = (_srt) => {
    let arr = [];
    let result;
    let except = [];
    pubList.value.forEach((list) => {
        if (list.progress == _srt) {
            arr.push(list);
        }

        if (list.progress == 'except') {
            except.push(list);
        }
    });

    result = arr.length;

    if (_srt == 'ing' || _srt == 'complete') {
        let per = ((result / (pubList.value.length - except.length)) * 100).toFixed(2);
        result = `<strong>${result}</strong>건(${per}%)`;
    } else {
        result = `<strong>${result}</strong>건`;
    }

    return result;
};

const publeLaout = (_srt) => {
    let wrap = document.querySelector('#app');

    if (_srt == 'in') {
        wrap.classList.add('worklist');
    } else {
        wrap.classList.remove('worklist');
    }
};

onBeforeMount(() => {
    nextTick(() => {
        publeLaout('in');
    });
});

onUnmounted(() => {
    publeLaout('out');
});
</script>
