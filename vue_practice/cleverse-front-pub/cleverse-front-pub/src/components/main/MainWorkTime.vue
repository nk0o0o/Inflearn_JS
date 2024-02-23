<template>
  <section class="main-box main-box__work_time">
    <div class="main-box__inner">
      <h2 class="main-box--title">
        유연근무 간편등록
        <Tooltip 
          position="bottom"
          :tooltipText="'11시 이후 출근은 전자결재를 통해 상신하세요.'"
          :class="'tooltip'"
        />
      </h2>

      <div class="main-work_time__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>

      <div
        v-show="currentTab == 0"
        class="main-work_time__select"
      >

        <div class="date">
          <Datepicker 
            weekStart="0"
            v-model="rangeDate"
            range 
            :format-locale="ja"
            :enableTimePicker="false"
          />
        </div>
        <div class="select_wrap">
          <div class="item" v-for="(row, idx) in time" :key="idx">
            <label class="time_sel">
              <input type="radio" name="time_sel" :value="row"/>
              <span>{{row}}</span>
            </label>
          </div>
          <div class="item item-btn">
            <button type="button" class="btn md"><span>저장</span></button>
          </div>
        </div>
      </div>
      <div
        v-show="currentTab == 1"
        class="main-work_time__list"
      >
        <div class="main-work_time__list__head">
          <span class="cell cell-date">신청일시</span>
          <span class="cell cell-range">신청기간</span>
          <span class="cell cell-time">출근시간</span>
        </div>

        <!-- <p class="no-data no-data__time">신청 내역이 없습니다</p> -->

        <ul class="main-work_time__list__body">
          <li class="row" v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link">
              <span class="cell cell-date">{{row.date}}</span>
              <span class="cell cell-range">{{row.range}}</span>
              <span class="cell cell-time">{{row.time}}</span>
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
import Datepicker from '@vuepic/vue-datepicker';
import Tooltip from "@/components/tooltip.vue";
export default defineComponent({
  data() {
    return {
      rangeDate: [new Date(),new Date()],
      currentTab: 1,
      tabsType : ["근무 신청", "신청 내역"],
      time: ["07:00","07:30","08:00","08:30","09:00","09:30","10:00"],
      list: [
        {
          date : "2022.03.14 11:23",
          range : "2022.03.14 -  2022.03.20",
          time : "07:00"
        },
        {
          date : "2022.03.14 11:23",
          range : "2022.03.14 -  2022.03.20",
          time : "07:00"
        },
        {
          date : "2022.03.14 11:23",
          range : "2022.03.14 -  2022.03.20",
          time : "07:00"
        },
        {
          date : "2022.03.14 11:23",
          range : "2022.03.14 -  2022.03.20",
          time : "07:00"
        },
        {
          date : "2022.03.14 11:23",
          range : "2022.03.14 -  2022.03.20",
          time : "07:00"
        },
      ]
    }
  },
  components: {
    Datepicker,
    Tooltip
  }
});
</script>