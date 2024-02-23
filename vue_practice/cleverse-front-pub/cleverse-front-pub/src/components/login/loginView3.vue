<template>
  <div class="login-out__wrap">
    <header class="login-out__header">
      <div class="wrap">
        <p class="name"><em>EP 이한찬</em>님 안녕하세요.</p>
        <div class="bn_list">
          <button type="button" class="btn line-type1">정보 수정</button>
          <button type="button" class="btn line-type1">비밀번호 변경</button>
          <button type="button" class="btn line-type1">메일 백업</button>
          <button type="button" class="btn">로그아웃</button>
        </div>
        <div class="tit">
          <h1>SYSTEM LINK</h1>
          <p>현업포탈 사용이 불가한 임직원을 위한 업무 시스템 바로가기 페이지 입니다.</p>
        </div>
      </div>
    </header>
    <section class="login-out__body">
      <ul class="bn_list">
        <li v-for="(item, index) in btns" :key="index">
          <button type="button" :class="item.icon" v-html="item.title"></button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components:{
  },
  props: {
    pageInfo: null,
  },
  data(){
    return{
      isActive: false,
      error: true,
      btns: [
        { icon: 'owa', title: 'Outlook Web App' },
        { icon: 'hplus', title: '채널Hplus' },
        { icon: 'control', title: '내부통제' },
        { icon: 'eagle-pms', title: 'EaglePMS' },
        { icon: 'toktok', title: '한화톡톡' },
        { icon: 'toktok-data', title: '한화톡톡<br>빅데이터' },
        { icon: 'feedback', title: '전산업무요청<br>FeedBack' },
        { icon: 'counseling', title: '심리상담 서비스' },
        { icon: 'homepage', title: '한화시스템<br>홈페이지' },
        { icon: 'p-info', title: '인물정보' },
        { icon: 'hone-cloud', title: 'HONE Cloud' },
        { icon: 'pm-portal', title: 'PM포탈' },
        { icon: 'e-itsm', title: 'E-ITSM' },
        { icon: 'resort', title: '리조트 예약' },
        { icon: 'itsm', title: 'ITSM' },
        { icon: 'ict-tv', title: 'ICT TV' },
        { icon: 'stock', title: '우리사주' },
        { icon: 'work-supply', title: '업무지원 시스템' },
        { icon: 'npaper', title: '사이버 신문고' },
        { icon: 'room', title: '한화빌딩 회의실<br>예약시스템' },
        { icon: 'seat', title: '좌석예약<br>시스템' },
        { icon: 'sharing', title: '업무공유' },
        { icon: 'ghr', title: 'GHR' },
        { icon: 'erp', title: 'SMART ERP' },
        { icon: 'welfare', title: '복지사이트' },
        { icon: 'h-itam', title: 'H-ITAM' },
        { icon: 'workplace', title: 'Workplace' },
      ],
    }
  },
  methods:{
  }
})
</script>