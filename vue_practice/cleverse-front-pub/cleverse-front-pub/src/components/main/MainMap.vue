<template>
  <section class="main-box main-box__map">
    <div class="main-box__inner">
      <h2 class="main-box--title">조직맵</h2>

      <div class="main-map__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
        <button type="button" class="btn-icon btn-icon-map"><span>내 부서 가기</span></button>
      </div>

      <div
        v-show="currentTab == 0"
        class="main-map__list"
      >
        <ul>
          <li v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link">
              <span class="row-name">
                <span class="row-group">{{row.group}}</span>
                <span class="row-number">{{row.number}}</span>
              </span>
              <span class="row-contxt">{{row.contxt}}</span>
            </a>
          </li>
        </ul>
      </div>

      <div
        v-show="currentTab == 1"
        class="main-map__list"
      >
        <ul>
          <li v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link">
              <span class="row-name">
                <span class="row-group">{{row.group}}</span>
                <span class="row-number">{{row.number}}</span>
              </span>
              <span class="row-contxt">{{row.contxt}}</span>
            </a>
          </li>
        </ul>
      </div>

      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      currentTab: 0,
      tabsType : ["통합조직", "ICT 부문"],
      list: [
        {
          group: "전략실",
          number: 3,
          contxt: "dswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefj"
        },
        {
          group: "전략실",
          number: 1000,
          contxt: "dswf"
        },
        {
          group: "전략실",
          number: 3,
          contxt: "dswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefj"
        },
        {
          group: "전략실",
          number: 1000,
          contxt: "dswf"
        },
        {
          group: "전략실",
          number: 3,
          contxt: "dswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefjdswfwfwmpfmeowfmowfmowifjiwefj"
        },
        {
          group: "전략실",
          number: 1000,
          contxt: "dswf"
        },
      ]
    }
  },
});
</script>