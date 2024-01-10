<template>
    <section class="tab">
        <h1>Tab Type1</h1>
        <div class="tab-type1" id="tabs-type1">
            <ul class="tab-menu">
                <li :class="{'active':currentTab1===index}" v-for="(tab, index) in tabsType1" :key="index">
                    <button type="button" @click="currentTab1 = index">{{tab}}</button>
                </li>
            </ul>
            <div class="tab-content">
                <div v-show="currentTab1 == 0">tab content0</div>
                <div v-show="currentTab1 == 1">tab content1</div>
                <div v-show="currentTab1 == 2">tab content2</div>
                <div v-show="currentTab1 == 3">tab content3</div>
            </div>
        </div>

        <h1>Tab Type2</h1>
        <div class="tab-type2" id="tabs-type2">
            <ul class="tab-menu">
                <li :class="{'active':currentTab2===index}" v-for="(tab, index) in tabsType2" :key="index">
                    <button type="button" @click="currentTab2 = index">{{tab}}</button>
                </li>
            </ul>
            <div class="tab-content">
                <div v-show="currentTab2 == 0">tab content0</div>
                <div v-show="currentTab2 == 1">tab content1</div>
                <div v-show="currentTab2 == 2">tab content2</div>
                <div v-show="currentTab2 == 3">tab content3</div>
            </div>
        </div>

        <h1>Tab Type3</h1>
        <div class="tab-type3" id="tabs-type3">
            <ul class="tab-menu">
                <li :class="{'active':currentTab3===index}" v-for="(tab, index) in tabsType3" :key="index">
                    <button type="button" @click="currentTab3 = index">{{tab}}</button>
                </li>
            </ul>
            <div class="tab-content">
                <div v-show="currentTab3 == 0">tab content0</div>
                <div v-show="currentTab3 == 1">tab content1</div>
                <div v-show="currentTab3 == 2">tab content2</div>
                <div v-show="currentTab3 == 3">tab content3</div>
            </div>
        </div>

        <h1>Tab Type4</h1>
        <div class="tab-type4" id="tabs-type4">
            <ul class="tab-menu">
                <li :class="{'active':currentTab4===index}" v-for="(tab, index) in tabsType4" :key="index">
                    <button type="button" @click="currentTab4 = index">{{tab}}</button>
                </li>
            </ul>
            <div class="tab-content">
                <div v-show="currentTab4 == 0">tab content0</div>
                <div v-show="currentTab4 == 1">tab content1</div>
                <div v-show="currentTab4 == 2">tab content2</div>
                <div v-show="currentTab4 == 3">tab content3</div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            currentTab1: 0,
            currentTab2: 0,
            currentTab3: 0,
            currentTab4: 0,
            tabsType1: ['title1-1', 'title1-2', 'title1-3', 'title1-4'],
            tabsType2: ['title2-1', 'title2-2', 'title2-3', 'title2-4'],
            tabsType3: ['title3-1', 'title3-2', 'title3-3', 'title3-4'],
            tabsType4: ['title4-1', 'title4-2', 'title4-3', 'title4-4'],
        };
    }
})
</script>
<style lang="css" scoped>
h1 {font-size: 30px; color: #000}
h1 ~ h1 {margin-top: 50px;}
</style>