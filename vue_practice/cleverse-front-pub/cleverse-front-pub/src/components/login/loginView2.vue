<template>
  <div class="login-wrap">
    <header class="login-header">
        <h1 class="login-logo">
          <span class="blind">로고</span>
          <img :src="require('@/assets/imgs/icon/icon-clevers-logo-motion.gif')">
          <!-- <svg-logo /> -->
        </h1>
        <!-- <h2 class="login-tit"><span class="blind">Cleverse</span></h2> -->
    </header>
    <section class="login-body certification">
      <form action="">
        <div class="login-help">
          <div class="input-radio">
            <input type="radio" name="radio1" id="radio1" checked><label for="radio1">모바일앱</label>
            <input type="radio" name="radio1" id="radio2"><label for="radio2">SMS</label>
          </div>
        </div>
        <div class="input-box type5" :class="{active: isCertificationActive}">
            <input type="text" required placeholder="인증번호" v-model="certificationValue">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <span class="certification-time">02:18</span>
            <button type="button" class="input-txt-request" @click="certificationNum"><span>{{certificationTxt}}</span></button>
            <div class="error" v-if="error">인증번호가 일치하지 않습니다.</div>
        </div>
        <button type="button" class="btn login" :disabled="certificationValue.length < 1">확인</button>
        <p class="certification-txt">외부 접속 시 사내 보안규정 준수를 위해 인증이 필요합니다.</p>
      </form>
    </section>
  </div>
  <footer class="login-footer">
    <p class="copyright">©Hanwha. All Right reserved.</p>
    <ul class="info-list">
        <!-- <li><a href="">이용약관</a></li> -->
        <li><a href="" class="f-bold">개인정보 처리방침</a></li>
    </ul>
    <button type="button" class="btn sm line-type2" @click="toggle">계열사 전체보기</button>
    <div class="subsidiary-box" :class="{active: isActive}">
      <div class="subsidiary-box-inner">
        <dl class="subsidiary-list fir">
          <dt>제조/건설</dt>
          <dd>(주)한화</dd>
          <dd>한화케미칼</dd>
          <dd>한화큐셀&amp;첨단소재</dd>
          <dd>한화정밀기계</dd>
          <dd>한화에어로스페이스</dd>
          <dd>한화종합화학</dd>
          <dd>한화에너지</dd>
          <dd>한화파워시스템</dd>
          <dd>한화테크윈</dd>
          <dd>한화토탈</dd>
          <dd>여천NCC</dd>
          <dd>한화솔루션</dd>
          <dd>한화시스템</dd>
          <dd>한화건설</dd>
          <dd>한화컴파운드</dd>
          <dd>한화임팩트</dd>
          <dd>한화디펜스</dd>
          <dd>한화큐셀</dd>
          <dd>한화도시개발</dd>
        </dl>

        <dl class="subsidiary-list sec">
          <dt>금융</dt>
          <dd>한화생명</dd>
          <dd>한화손해보험</dd>
          <dd>한화투자증권</dd>
          <dd>한화자산운용</dd>
          <dd>한화저축은행</dd>
        </dl>

        <dl class="subsidiary-list thi">
          <dt>서비스/레저</dt>
          <dd>한화호텔앤드리조트</dd>
          <dd>한화역사</dd>
          <dd>한화갤러리아</dd>
          <dd>한화이글스</dd>
          <dd class="w100">한화갤러리아타임월드</dd>
          <dd class="w100">한화63시티</dd>
          <dd class="w100">한화시스템/ICT</dd>
        </dl>
      </div>

    </div>
  </footer>
  <div class="toast-box"><span>인증번호가 정상적으로 발급되었습니다.</span></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import svgLogo from "@/components/svgLogo.vue"

export default defineComponent({
  components:{
    // svgLogo
  },
  props: {
    pageInfo: null,
  },
  data(){
    return{
      isCertificationActive: false,
      isActive: false,
      error: true,
      certificationTxt: '요청하기',
      isDisabled: true,
      certificationValue: "",
    }
  },
  methods:{
    toggle(){
      this.isActive = !this.isActive;
    },
    certificationNum(){
      this.isCertificationActive = true;
      this.certificationTxt = '재전송';
    }
  }
})
</script>