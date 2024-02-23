<template>
  <base-popup
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="사원정보조회"
    class="ly-pop-type1"
  >
    <template v-slot:body>
      <div class="employee-pop">
        <div  class="employee-pop_head">
          <span class="img"><img :src="require('@/assets/imgs/img_dummy3.png')" alt="김한화"></span>
          <span class="state "></span>
        </div>
        <div class="employee-pop_cont">
          <h2 class="title"><em>김한화 과장</em> 매니저</h2>
          <span class="number">hsnc17041209</span>
          <ul class="board_wrap">
            <li v-for="(info, index) in employeeInfo" :key="index">
              <em>{{ info.title }}</em>
              <span>{{ info.info }}</span>
            </li>
          </ul>
          <div class="tab-type3">
            <ul class="tab-menu">
              <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
                <button type="button" @click="currentTab = index">{{tab}}</button>
              </li>
            </ul>
            <div class="tab-content">
              <div v-show="currentTab == 0">
                <ul class="board_wrap line">
                  <li v-for="(info, index) in teamInfo" :key="index">
                    <em>{{ info.title }}</em>
                    <span>{{ info.info }}</span>
                  </li>
                </ul>
              </div>
              <div v-show="currentTab == 1">
                <ul class="board_wrap line">
                  <li v-for="(info, index) in teamInfo" :key="index">
                    <em>{{ info.title }}</em>
                    <span>{{ info.info }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn lg">확인</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"

export default defineComponent({
  components: {
    basePopup,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      error: false,
      showModal: this.propShowModal,
      currentTab: 0,
      tabsType: ['인사팀', '인사운영팀(ICT)'],
      employeeInfo: [
        {
          title: '이메일',
          info: 'hsnc17041209@hawha-partners.com'
        },
        {
          title: '휴대전화',
          info: '010-6392-0044'
        },
        {
          title: '회사전화',
          info: '02-6392-0044'
        },
        {
          title: '팩스번호',
          info: '02-6392-0044'
        },
        {
          title: '근무지',
          info: '한화생명'
        },
        {
          title: '입사일',
          info: '2017.04.24'
        },
      ],
      teamInfo: [
        {
          title: '직책',
          info: '팀원'
        },
        {
          title: '직무',
          info: '02-6392-0044'
        },
        {
          title: '소속',
          info: '한화시스템/ICT > ICT부문 > 데이터센터 > SharedService담당 > SharedService1팀 > 디지털워크그룹'
        },
      ],
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
    },
  },
  computed: {
  }
})
</script>