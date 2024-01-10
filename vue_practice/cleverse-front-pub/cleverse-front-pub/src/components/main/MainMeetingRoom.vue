<template>
  <section class="main-box main-box__meeting_room">
    <div class="main-box__inner">
      <h2 class="main-box--title">회의실 예약</h2>
      <div class="main-meeting__filter__row">
        <div class="main-meeting__filter__cell">
          <select-view
            :propPlaceholder="'여의도 본사'"
            :propOptionList="optionList"
            :propClass="'type3'"
          />
        </div>
        <div class="main-meeting__filter__cell">
          <select-view
            :propPlaceholder="'수용인원 전체'"
            :propOptionList="optionList"
            :propClass="'type3'"
          />
        </div>
      </div>
      <div class="main-meeting__filter__row">
        <div class="main-meeting__filter__cell date">
          <Datepicker
						weekStart="0"
            v-model="date"
            :format="format"
            :enableTimePicker="false"
          />
        </div>
        <div class="main-meeting__filter__cell date time">
          <Datepicker 
            v-model="time"
            timePicker 
            range
            :format="timeFormat"
          />
        </div>
      </div>

      <p class="main-meeting__title">예약가능한 회의실 <span class="count">47</span></p>

      <div class="main-meeting__list">
        <ul>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">장교_C1305_TV_임원대기실</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">faejfweijf;oiewjfoiejfawiejfoawiejfao;wiej</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">장교_C1305_TV_임원대기실</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">faejfweijf;oiewjfoiejfawiejfoawiejfao;wiej</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">장교_C1305_TV_임원대기실</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">faejfweijf;oiewjfoiejfawiejfoawiejfao;wiej</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">장교_C1305_TV_임원대기실</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
          <li class="row">
            <button type="button" class="row-btn">
              <strong class="row-contxt">faejfweijf;oiewjfoiejfawiejfoawiejfao;wiej</strong>
              <span class="row-member">25명</span>
            </button>
          </li>
        </ul>
      </div>
      <!-- <p class="no-data no-data__meeting_room">예약가능한 회의실이 없습니다</p> -->

      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import selectView from "@/components/selectView.vue"
import Datepicker from '@vuepic/vue-datepicker';
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      date: new Date().toString(),
      time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
      },
      currentTab: 0,
      tabsType : ["이번주", "다음주"],
      optionList: [
        { value: '1', label: "여의도 본사" },
        { value: '2', label: "판교" },
        { value: '3', label: "불광" },
        { value: '4', label: "신설" },
        { value: '5', label: "판교" },
        { value: '6', label: "데이터 센터" },
        { value: '7', label: "거점외 근무" },
        { value: '8', label: "재택" },
        { value: '9', label: "휴가" },
      ],
    }
  },
  components: {
    selectView,
    Datepicker,
  },
  methods: {
    format(date:any) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `Selected date is ${day}-${month}-${year}`;
    },
    timeFormat(){
      return `Selected date is 10:10`;
    },
  }
});
</script>