<template>
    <div class="main-contents">
        <h2 class="guide-title">Modals</h2>
        <div class="guide-info">
            <strong>Vuetify3 Dialogs</strong><br />
            <a href="https://vuetifyjs.com/en/components/dialogs/#usage" target="_blank">
                https://vuetifyjs.com/en/components/dialogs/#usage
            </a>
        </div>

        <h3 class="guide-stitle">1. Alert or Confirm Modal</h3>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">alertDialog</span> = <span class="func">ref</span><span class="mark">(</span><span class="boolean">false</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="comment">// alert 혹은 confirm 일 경우, class값에 'small' 추가</span>
<span class="arrow">&lt;</span><span class="component">v-dialog</span>
    <span class="props">id</span>=<span class="val">"SampleAlert"</span>
    <span class="props">class</span>=<span class="val">"modal-layout small"</span>
    <span class="props">v-model</span>="<span class="props">alertDialog</span>"
    <span class="props">transition</span>=<span class="val">"dialog-transition"</span>
<span class="arrow">&gt;</span>
    <span class="comment">// modal 띄울 button - modal 닫은 후 focus 이동을 위해 dialog 안에 버튼 위치</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">activator</span>="<span class="func">{</span> <span class="props">props</span>: <span class="evt">activatorProps</span> <span class="func">}</span>"<span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"btn-primary"</span> <span class="props">v-bind</span>="<span class="evt">activatorProps</span>"<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Alert<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

    <span class="comment">// modal 내용</span>
    <span class="arrow">&lt;</span><span class="component">v-card</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">actions</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-body"</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">p</span><span class="arrow">&gt;</span>Your application will relaunch automatically after the update is complete.<span class="arrow">&lt;/</span><span class="tag">p</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>

            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-footer"</span><span class="arrow">&gt;</span>
                <span class="comment">// '확인' 버튼의 click 이벤트에 대한 함수는 상황에 맞게 작성</span>
                <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"modal-btn-primary"</span> @<span class="props">click</span>="<span class="func">alertCallback</span>"<span class="arrow">&gt;</span>
                    <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>확인<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="component">v-card</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">v-dialog</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont type-row">
            <!-- alert modal -->
            <v-dialog id="SampleAlert" class="modal-layout small" v-model="alertDialog" transition="dialog-transition">
                <template v-slot:activator="{ props: activatorProps }">
                    <button type="button" class="btn-primary" v-bind="activatorProps">
                        <span>Alert</span>
                    </button>
                </template>

                <v-card class="modal-wrap">
                    <template v-slot:actions>
                        <div class="modal-body">
                            <p>Your application will relaunch automatically after the update is complete.</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="modal-btn-primary" @click="alertCallback">
                                <span>확인</span>
                            </button>
                        </div>
                    </template>
                </v-card>
            </v-dialog>

            <!-- confirm modal -->
            <v-dialog
                id="SampleAlert"
                class="modal-layout small"
                v-model="confirmDialog"
                transition="dialog-transition"
            >
                <template v-slot:activator="{ props: activatorProps }">
                    <button type="button" class="btn-primary" v-bind="activatorProps">
                        <span>Confirm</span>
                    </button>
                </template>

                <v-card class="modal-wrap">
                    <template v-slot:actions>
                        <div class="modal-body">
                            <p>Your application will relaunch automatically after the update is complete.</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="modal-btn-gray" @click="confirmDialog = false">
                                <span>취소</span>
                            </button>
                            <button type="button" class="modal-btn-primary" @click="confirmCallback">
                                <span>확인</span>
                            </button>
                        </div>
                    </template>
                </v-card>
            </v-dialog>
        </div>

        <h3 class="guide-stitle">2. Full screen Modal</h3>
        <div class="guide-info">※ mobile에서만 전체 화면으로 나타남</div>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">fullDialog</span> = <span class="func">ref</span><span class="mark">(</span><span class="boolean">false</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="comment">// full screen 일 경우, class값에 'full' 추가</span>
<span class="arrow">&lt;</span><span class="component">v-dialog</span>
    <span class="props">id</span>=<span class="val">"SampleModal"</span>
    <span class="props">class</span>=<span class="val">"modal-layout full"</span>
    <span class="props">v-model</span>="<span class="props">fullDialog</span>"
    :<span class="props">transition</span>="!!<span class="props">isMobile</span> ? <span class="val">'dialog-bottom-transition'</span> : <span class="val">'dialog-transition'</span>"
    :<span class="props">fullscreen</span>="!!<span class="props">isMobile</span> ? <span class="boolean">true</span> : <span class="boolean">false</span>"
<span class="arrow">&gt;</span>
    <span class="comment">// modal 띄울 button</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">activator</span>="<span class="func">{</span> <span class="props">props</span>: <span class="evt">activatorProps</span> <span class="func">}</span>"<span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"btn-primary"</span> <span class="props">v-bind</span>="<span class="evt">activatorProps</span>"<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Full screen<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

    <span class="comment">// modal 내용</span>
    <span class="arrow">&lt;</span><span class="component">v-card</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">actions</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-header"</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">h1</span> <span class="props">class</span>=<span class="val">"modal-title"</span><span class="arrow">&gt;</span>Full screen Modal<span class="arrow">&lt;/</span><span class="tag">h1</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>

            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-body"</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">p</span><span class="arrow">&gt;</span>Your application will relaunch automatically after the update is complete.<span class="arrow">&lt;/</span><span class="tag">p</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>

            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-footer"</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"modal-btn-gray"</span> @<span class="props">click</span>="<span class="props">fullDialog</span> = <span class="boolean">false</span>"<span class="arrow">&gt;</span>
                    <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>닫기<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
                <span class="comment">// '확인' 버튼의 click 이벤트에 대한 함수는 상황에 맞게 작성</span>
                <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"modal-btn-primary"</span> @<span class="props">click</span>="<span class="func">fullModalCall</span>"<span class="arrow">&gt;</span>
                    <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>확인<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>

            <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"modal-close"</span> @<span class="props">click</span>="<span class="props">fullDialog</span> = <span class="boolean">false</span>"<span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">span <span class="props">class</span>=<span class="val">"sr-only"</span></span><span class="arrow">&gt;</span>닫기<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="component">v-card</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">v-dialog</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <!-- full screen modal -->
            <v-dialog
                id="SampleDialog1"
                class="modal-layout full"
                v-model="fullDialog"
                :transition="!!isMobile ? 'dialog-bottom-transition' : 'dialog-transition'"
                :fullscreen="!!isMobile ? true : false"
            >
                <template v-slot:activator="{ props: activatorProps }">
                    <button type="button" class="btn-primary" v-bind="activatorProps">
                        <span>Full screen</span>
                    </button>
                </template>

                <v-card class="modal-wrap">
                    <template v-slot:actions>
                        <div class="modal-header">
                            <h1 class="modal-title">Full screen Modal</h1>
                        </div>

                        <div class="modal-body">
                            <p>
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="modal-btn-gray" @click="fullDialog = false">
                                <span>닫기</span>
                            </button>
                            <button type="button" class="modal-btn-primary" @click="fullModalCall">
                                <span>확인</span>
                            </button>
                        </div>

                        <button type="button" class="modal-close" @click="fullDialog = false">
                            <span class="sr-only">닫기</span>
                        </button>
                    </template>
                </v-card>
            </v-dialog>

            <v-dialog id="SampleDialog2" v-model="dialog2" class="modal-layout small">
                <v-card class="modal-wrap">
                    <template v-slot:actions>
                        <div class="modal-body">
                            <p>Your application will relaunch automatically after the update is complete.</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="modal-btn-gray" @click="dialog2 = false">
                                <span>닫기</span>
                            </button>
                            <button type="button" class="modal-btn-primary" @click="modal2Call">
                                <span>확인</span>
                            </button>
                        </div>
                    </template>
                </v-card>
            </v-dialog>
        </div>

        <h3 class="guide-stitle">3. Bottom-sheet Modal</h3>
        <div class="guide-info">※ mobile에서만 bottom-sheet로 나타남</div>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">bottomDialog</span> = <span class="func">ref</span><span class="mark">(</span><span class="boolean">false</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="comment">// Bottom-sheet 일 경우, class값에 'bottom' 추가</span>
<span class="arrow">&lt;</span><span class="component">v-bottom-sheet</span>
    <span class="props">id</span>=<span class="val">"SampleModal2"</span>
    <span class="props">class</span>=<span class="val">"modal-layout bottom"</span>
    <span class="props">v-model</span>="<span class="props">bottomDialog</span>"
    :<span class="props">transition</span>="!!<span class="props">isMobile</span> ? <span class="val">'dialog-bottom-transition'</span> : <span class="val">'dialog-transition'</span>"
<span class="arrow">&gt;</span>
    <span class="comment">// modal 띄울 button</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">activator</span>="<span class="func">{</span> <span class="props">props</span>: <span class="evt">activatorProps</span> <span class="func">}</span>"<span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"btn-primary"</span> <span class="props">v-bind</span>="<span class="evt">activatorProps</span>"<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Bottom-sheet<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

    <span class="comment">// modal 내용</span>
    <span class="arrow">&lt;</span><span class="component">v-card</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">actions</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-header"</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">h1</span> <span class="props">class</span>=<span class="val">"modal-title"</span><span class="arrow">&gt;</span>Bottom-sheet Modal<span class="arrow">&lt;/</span><span class="tag">h1</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>

            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-body"</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">p</span><span class="arrow">&gt;</span>Your application will relaunch automatically after the update is complete.<span class="arrow">&lt;/</span><span class="tag">p</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>

            <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"modal-footer"</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"modal-btn-gray"</span> @<span class="props">click</span>="<span class="props">bottomDialog</span> = <span class="boolean">false</span>"<span class="arrow">&gt;</span>
                    <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>닫기<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
                <span class="comment">// '확인' 버튼의 click 이벤트에 대한 함수는 상황에 맞게 작성</span>
                <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"modal-btn-primary"</span> @<span class="props">click</span>="<span class="func">BottomModalCall</span>"<span class="arrow">&gt;</span>
                    <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>확인<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
                <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>

            <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"modal-close"</span> @<span class="props">click</span>="<span class="props">bottomDialog</span> = <span class="boolean">false</span>"<span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">span <span class="props">class</span>=<span class="val">"sr-only"</span></span><span class="arrow">&gt;</span>닫기<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="component">v-card</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">v-bottom-sheet</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <!-- bottom sheet modal -->
            <v-bottom-sheet
                id="SampleDialog1"
                class="modal-layout bottom"
                v-model="bottomDialog"
                :transition="!!isMobile ? 'dialog-bottom-transition' : 'dialog-transition'"
            >
                <template v-slot:activator="{ props: activatorProps }">
                    <button type="button" class="btn-primary" v-bind="activatorProps">
                        <span>Bottom-sheet</span>
                    </button>
                </template>

                <v-card class="modal-wrap">
                    <template v-slot:actions>
                        <div class="modal-header">
                            <h1 class="modal-title">Bottom-sheet Modal</h1>
                        </div>

                        <div class="modal-body">
                            <p>
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.<br />
                                Your application will relaunch automatically after the update is complete.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="modal-btn-gray" @click="bottomDialog = false">
                                <span>닫기</span>
                            </button>
                            <button type="button" class="modal-btn-primary" @click="BottomModalCall">
                                <span>확인</span>
                            </button>
                        </div>

                        <button type="button" class="modal-close" @click="bottomDialog = false">
                            <span class="sr-only">닫기</span>
                        </button>
                    </template>
                </v-card>
            </v-bottom-sheet>
        </div>

        <h3 class="guide-stitle">※ Mobile Device Check</h3>
        <div class="guide-info script">
            <pre>
<span class="import">import</span> <span class="mark">{</span> <span class="props">ref</span>, <span class="props">onBeforeMount</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'vue'</span>;

<span class="tag">const</span> <span class="evt">isMobile</span> = <span class="func">ref</span><span class="mark">(</span><span class="boolean">false</span><span class="mark">)</span>;
<span class="tag">const</span> <span class="func">chkMobile</span> = <span class="mark">()</span> <span class="tag">=></span> <span class="mark">{</span>
    <span class="tag">let</span> <span class="props">userAgent</span> = <span class="props">navigator</span>.<span class="props">userAgent</span>;
    <span class="tag">let</span> <span class="props">device</span> = <span class="braket">/Android</span>|<span class="braket">webOS</span>|<span class="braket">iPhone</span>|<span class="braket">iPad</span>|<span class="braket">iPod</span>|<span class="braket">BlackBerry</span>|<span class="braket">EMobile</span>|<span class="braket">Opera Mini/</span><span class="tag">i</span>;

    <span class="import">if</span> <span class="func">(</span><span class="props">device</span>.<span class="func">test</span><span class="braket">(</span><span class="props">userAgent</span><span class="braket">)</span><span class="func">)</span> <span class="func">{</span>
        <span class="evt">isMobile</span>.<span class="props">value</span> = <span class="boolean">true</span>;
    <span class="func">}</span> <span class="import">else</span> <span class="func">{</span>
        <span class="evt">isMobile</span>.<span class="props">value</span> = <span class="boolean">false</span>;
    <span class="func">}</span>
<span class="mark">}</span>;

<span class="func">onBeforeMount</span><span class="mark">(</span><span class="func">()</span> <span class="tag">=></span> <span class="func">{</span>
    <span class="func">chkMobile</span><span class="braket">()</span>;
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

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

onBeforeMount(() => chkMobile());

const alertDialog = ref(false);
const confirmDialog = ref(false);
const fullDialog = ref(false);
const dialog2 = ref(false);
const bottomDialog = ref(false);

const alertCallback = () => {
    console.log('alert callback!!');
    alertDialog.value = false;
};

const confirmCallback = () => {
    console.log('alert callback!!');
    confirmDialog.value = false;
};

const fullModalCall = () => {
    console.log('full modal callback!!');

    dialog2.value = true;
};

const modal2Call = () => {
    console.log('2nd modal callback!!');

    // fullDialog.value = false;
    dialog2.value = false;
};

const BottomModalCall = () => {
    console.log('Bottom sheet callback!!');
    bottomDialog.value = false;
};

onBeforeMount(() => {
    chkMobile();
});
</script>
