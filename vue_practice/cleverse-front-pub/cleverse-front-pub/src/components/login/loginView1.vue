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
    <section class="login-body">
      <form action="">
          <div class="input-box type5">
              <input type="text" required placeholder="아이디">
              <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
              <div class="error" v-if="error">아이디를 입력해 주세요.</div>
          </div>
          <div class="input-box type5">
              <input type="text" required placeholder="비밀번호 (영대∙소, 특수, 숫자 3가지 조합: 8~20자 / 2가지 조합: 10~20자)">
              <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
              <div class="error" v-if="error">비밀번호를 입력해 주세요.</div>
              <!-- <div class="error" v-if="error">비밀번호는 3자 이상이어야 합니다.</div>
              <div class="error" v-if="error">비밀번호를 잘못 입력 하셨습니다(총 5회 오류시 재발급 필요) (1/5).</div>
              <div class="error" v-if="error">5회 이상 비밀번호를 잘못 입력하여 비밀번호를 재발급하시기 바랍니다.</div> -->
          </div>
          <div class="login-help">
            <div class="input-chk"><input type="checkbox" name="chk1" id="chk1"><label for="chk1">아이디 저장</label></div>
            <button type="button" class="btn-ico-txt arrow-r" @click="pwPop"><span>비밀번호 재발급</span></button>
            <!-- <button type="button" class="btn-ico-txt arrow-r" @click="pwAlert"><span>alert</span></button> -->
          </div>
          <button type="button" class="btn login">로그인</button>
      </form>
    </section>
  </div>
  <footer class="login-footer">
    <p class="copyright">©Hanwha. All Right reserved.</p>
    <ul class="info-list">
        <!-- <li><a href="">이용약관</a></li> -->
        <li><a href="" class="f-bold">개인정보 처리방침</a></li>
    </ul>
    <button type="button" class="btn sm line-type2 subsidiary" @click="toggle">계열사 전체보기</button>
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

  <!-- s: 비밀번호 재발급 팝업 -->
  <pw-reissue
    :propShowModal="showModal"
    @popClose="onHideModal"
  ></pw-reissue>
  <!-- //e: 비밀번호 재발급 팝업 -->

  <!-- s: 알럿창 팝업 -->
  <pw-alert
    :propAlertShowModal="alertShowModal"
    @alertClose="onAlertHideModal"
  ></pw-alert>
  <!-- //e: 알럿창 팝업 -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import svgLogo from "@/components/svgLogo.vue"
import pwReissue from "@/components/popup/pwReissue.vue"
import pwAlert from "@/components/popup/pwAlert.vue"
// @ts-ignore
import vClickOutside from 'click-outside-vue3'

export default defineComponent({
  directives: {
      clickOutside: vClickOutside.directive
  },
  components: {
    pwReissue,
    pwAlert,
    // svgLogo
  },
  props: {
    pageInfo: null,
  },
  mounted(){
    document.querySelector('body')?.addEventListener('click',this.onClickOutside)
  },
  data(){
    return{
      isActive: false,
      error: true,
      showModal: false,
      alertShowModal: false,
    }
  },
  methods:{
    toggle(){
      this.isActive = !this.isActive;
    },
    pwPop(){
      this.showModal = true
    },
    pwAlert(){
      this.alertShowModal = true
    },
    onHideModal(){
      this.showModal = false
    },
    onAlertHideModal(){
      this.alertShowModal = false
    },
    onClickOutside($event:any) {
      if(!$event.target.classList.contains('subsidiary')){
        if(this.isActive){
          if(!$event.target.closest('.subsidiary-box')){
            this.isActive = false
          }
        }
      }
    },
  }
})
</script>