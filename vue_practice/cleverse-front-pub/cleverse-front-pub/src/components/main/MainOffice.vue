<template>
  <section class="main-box main-box__office">
    <div class="main-box__inner">
      <h2 class="main-box--title">출근지 신청</h2>

      <div class="main-office__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
        <button type="button" class="btn-icon btn-icon-seet"><span>좌석선택</span></button>
      </div>

      <div class="main-office__wrap">

        <div class="main-office__box">
          <div class="inner prev-date"> <!-- 지난날 prev-date -->
            <div class="date">2.28(월)</div>
            <select-view
                :propPlaceholder="'출근지'"
                :propOptionList="optionList"
                :propClass="'type3'"
                :propDisabled="true"
            />
            <div class="seet">
              <span class="non">미예약</span>
            </div>
          </div>
        </div>

        <div class="main-office__box">
          <div class="inner prev-date"> <!-- 지난날 prev-date -->
            <div class="date">3.1(화)</div>
            <select-view
                :propPlaceholder="'출근지'"
                :propOptionList="optionList"
                :propClass="'type3'"
                :propDisabled="true"
            />
            <div class="seet">
              <span class="non">미예약</span>
            </div>
          </div>
        </div>

        <div class="main-office__box">
          <div class="inner">
            <div class="date">3.2(수)</div>
            <select-view
                :propPlaceholder="'출근지'"
                :propOptionList="optionList"
                :propClass="'type3'"
            />
            <div class="seet">
              <span class="non">미예약</span>
            </div>
          </div>
        </div>

        <div class="main-office__box">
          <div class="inner">
            <div class="date">3.3(목)</div>
            <select-view
              :propPlaceholder="'출근지'"
              :propOptionList="optionList"
              :propClass="'type3'"
            />
            <div class="seet">
              <div class="count">232 / 385석</div>
              <div class="sort">
                <span>고정 89</span>
                <span>우선 888</span>
              </div>
            </div>
          </div>
        </div>

        <div class="main-office__box">
          <div class="inner">
            <div class="date">3.4(금)</div>
            <select-view
              :propPlaceholder="'출근지'"
              :propOptionList="optionList"
              :propClass="'type3'"
            />
            <div class="seet">
              <div class="count">232 / 385석</div>
              <div class="sort">
                <span>고정 880</span>
                <span>우선 888</span>
              </div>
            </div>
          </div>
        </div>

        <div class="main-office__box">
          <div class="btn_inner">
            <button type="button" class="btn md" disabled><span>저장</span></button>
          </div>
        </div>

      </div>


      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import selectView from "@/components/selectView.vue"
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
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
    selectView
  }
});
</script>