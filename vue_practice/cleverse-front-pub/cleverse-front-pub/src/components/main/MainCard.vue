<template>
  <section class="main-box main-box__card">
    <div class="main-box__inner">
      <h2 class="main-box--title">
        법인카드
        <Tooltip 
          position="bottom"
          :tooltipText="'법인카드 예산 사용 현황은? 어제까지 입력된 데이터를 기준으로 서비스가 제공됩니다. 최종 업데이트 - 2022.03.01 03:34'"
          :class="'tooltip'"
        />
      </h2>

      <div class="main-card__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>

      <div class="main-card__tab-content">
        <div
          v-show="currentTab == 0"
          class="main-card__use_list"
        >
          <!-- <p class="no-data no-data__card">미처리 건이 없습니다</p> -->
          <ul>
            <li class="row" v-for="(row, idx) in list1" :key="idx">
              <a href="#" class="row-link">
                <span class="row-date">{{row.date}}</span>
                <span class="row-use">{{row.use}}</span>
                <span class="row-pay">{{dotNumber(row.pay) + '원'}}</span>
              </a>
            </li>
          </ul>

        </div>

        <div
          v-show="currentTab == 1"
          class="main-card__budget_check"
        >
          <!-- <p class="no-data no-data__card">사용현황 데이터가 없습니다</p> -->
          <select-view
            :propPlaceholder="'F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행'"
            :propOptionList="optionList"
            :propClass="'type3'"
          />
          <ul>
            <li class="row" v-for="(row, idx) in list2" :key="idx">
              <a href="#" class="row-link">
                <span class="row-cate">{{row.cate}}</span>
                <span class="row-state">
                  <span class="row-bar">
                    <span :style="'width: '+sizePerCalc(row.pay, row.max)"><span class="per">{{sizePerCalc(row.pay, row.max)}}</span></span>
                  </span>
                  <span class="row-pay">{{dotNumber(row.pay)}}원</span>
                  <span class="row-max">/ {{dotNumber(row.max)}}원</span>
                </span>
              </a>
            </li>
          </ul>

        </div>
      </div>

      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import selectView from "@/components/selectView.vue"
import Tooltip from "@/components/tooltip.vue";

import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      currentTab: 0,
      tabsType : ["미처리 건", "예산 조회"],
      optionList: [
        { value: '1', label: "F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행" },
        { value: '2', label: "F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행" },
        { value: '3', label: "F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행" },
        { value: '4', label: "F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행" },
        { value: '5', label: "F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행" },
        { value: '6', label: "F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행" },
      ],
      list1: [
        {
          date: "2022.03.14 00:23",
          use: "63베이커리63베이커리63베이커리63베이커리63베이커리63베이커리63베이커리63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
        {
          date: "2022.03.14 00:23",
          use: "63베이커리",
          pay: "1000000"
        },
      ],
      list2: [
        {
          cate: "업무회의비",
          max: "1000000",
          pay: "999999",
        },
        {
          cate: "업무추진식대",
          max: "1000000",
          pay: "234523",
        },
        {
          cate: "시내교통비",
          max: "1000000",
          pay: "23535",
        },
        {
          cate: "교육비",
          max: "1000000",
          pay: "23534",
        }
      ]
    }
  },
  components: {
    selectView,
    Tooltip
  },
  methods: {
    sizePerCalc(val: number, max: number) {
      const per = (val / max * 100);
      const result = Math.floor(per) + '%';
      return result;
    },
    dotNumber(val: number) {
      const result = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return result;
    }
  }
});
</script>