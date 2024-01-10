<template>
    <section class="hw-guide">
        <h1>Publishing Guide</h1>
        <div class="guide_tab" id="tabs">
            <ul class="tab-menu clear">
                <li v-for="(tab, index) in tabs" :class="{active:currentTab===index}" :key="index">
                <button type="button" @click="currentTab = index">{{tab}}</button>
                </li>
            </ul>
            <div class="tab-content">
                <gw-form v-show="currentTab == 0" />
                <gw-button v-show="currentTab == 1" />
                <gw-tab v-show="currentTab == 2" />
                <gw-table v-show="currentTab == 3" />
                <gw-popup v-show="currentTab == 4" />
                <gw-calendar v-show="currentTab == 5" />
                <gw-drag-drop v-show="currentTab == 6" />
                <gw-tree v-show="currentTab == 7" />
                <gw-swiper v-show="currentTab == 8" />
                <gw-pagination v-show="currentTab == 9" />
                <gw-dropdown v-show="currentTab == 10" />
                <gw-chart v-show="currentTab == 11" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GwForm from "@/components/guide/GwForm.vue";
import GwButton from "@/components/guide/GwButton.vue";
import GwTab from "@/components/guide/GwTab.vue";
import GwTable from "@/components/guide/GwTable.vue";
import GwPopup from "@/components/guide/GwPopup.vue";
import GwCalendar from "@/components/guide/GwCalendar.vue";
import GwDragDrop from "@/components/guide/GwDragDrop.vue";
import GwTree from "@/components/guide/GwTree.vue";
import GwSwiper from "@/components/guide/GwSwiper.vue";
import GwPagination from "@/components/guide/GwPagination.vue";
import GwDropdown from "@/components/guide/GwDropdown.vue";
import GwChart from "@/components/guide/GwChart.vue";


export default defineComponent({
    components: {
        GwForm,
        GwButton,
        GwTab,
        GwTable,
        GwPopup,
        GwCalendar,
        GwDragDrop,
        GwTree,
        GwSwiper,
        GwPagination,
        GwDropdown,
        GwChart,
    },
    name: 'tabs-form',
    data() {
        return {
            currentTab: 0,
            tabs: ['FORM', 'BUTTON', 'TAB', 'TABLE', 'POPUP', 'CARENDAR','DRAGDROP', 'TREE SELECT','SWIPER', 'PAGINATION', 'DROPDOWN', 'CHART']
        };
    },
})
</script>

<style lang="css" scoped>
h1 {
    padding:30px 0 10px;
    font-size: 36px; text-align: center;
}
.hw-guide {
    height: 100%;
    background-color: #fff;
}
.guide_tab {background-color: #fff;}
.tab-menu {margin: 20px;}
.tab-menu li {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    color: #b1b6b7;
    border: 1px solid #d0d4d5; border-left: 0 none;
    background-color: #f5f6f7;
}
.tab-menu li button {height: 40px; line-height: 40px; padding: 0 20px;}
.tab-menu li:first-child {border-left: 1px solid #d0d4d5}
.tab-menu li.active {
    position: relative;
    font-family: 'Lifeplus'; font-weight:600; color: #f97723;
    border-bottom: 1px solid #fff;
    background-color: #fff;
}
.tab-menu li.active::before {
    display: block; content: '';
    position: absolute; left:-1px; top:-1px;
    width: calc(100% + 2px); height: 3px;
    background-color: #f97723;
}
.tab-content {min-height:800px; padding:20px;}
</style>
