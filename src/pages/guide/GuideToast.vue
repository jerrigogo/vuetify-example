<template>
    <div class="main-contents">
        <h2 class="guide-title">Toast</h2>
        <div class="guide-info">
            <strong>Vuetify3 Snackbars</strong><br />
            <a href="https://vuetifyjs.com/en/components/snackbars/#usage" target="_blank">
                https://vuetifyjs.com/en/components/snackbars/#usage
            </a>
        </div>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">v-snackbar</span> <span class="props">class</span>=<span class="val">"toast-wrap"</span> :<span class="props">timeout</span>="<span class="num">2000"</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">activator</span>="<span class="func">{ <span class="evt">props</span> }</span>"<span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"btn-primary"</span> <span class="props">v-bind</span>="<span class="props">props</span>"<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Pop Toast<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag"><span class="tag">template</span></span><span class="arrow">&gt;</span>

    Lorem ipsum dolor sit amet consectetur.
<span class="arrow">&lt;/</span><span class="component">v-snackbar</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <v-snackbar class="toast-wrap" :timeout="2000">
                <template v-slot:activator="{ props }">
                    <button type="button" class="btn-primary" v-bind="props"><span>Pop Toast</span></button>
                </template>

                Lorem ipsum dolor sit amet consectetur.
            </v-snackbar>
        </div>
    </div>
</template>

<script setup></script>
