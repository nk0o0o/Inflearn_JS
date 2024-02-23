<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <askLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <div class="board-common_header">
            <h2>내문의내역</h2>
          </div>
          <!-- view -->
          <div class="board-ask_view">
            <ul class="head">
              <li class="tit">[묻고 답하기] [서비스데스트] 사서함을 임시적으로 microsoft exchange servr 이동했습니다. 0105-C</li>
              <li class="cate"><strong>분류</strong>메일</li>
              <li>시삽(KR) 프로/Circle Team(010-6400-4629)</li>
            </ul>

            <div class="download">
              <ul>
                <li class="ico-file pdf">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file hwp">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file ppt">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file word">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file jpg">IT Academy 과정상세 과정].pptx (2387.6KB) <button type="button">파일저장</button></li>
              </ul>
              <button type="button" class="icon-btn download">전체 다운로드</button>
            </div>

            <div class="content">
              1. 고객명 :  이동호 (0109477962) / 사원번호 : 201100723 / 아이디 : dongho2<br><br>
              2. 접수내용 : 외부메일 발송시 리턴메일 받음<br><br>
              - 유럽, 일본 법인에 메일 발송시 위의 받는 사람의 메일 주소가 존재하지 않습니다. 라를 내용의 리턴메일 받음<br>
              - 다른 직원은 외부메일 정상으로 발송됨<br>
              - 발신메일주소 : su.kwon@q-cells.com<br>
              - 수신메일주소 :<br>
              su.kwon@q-cells.com<br>
              sam.yoon@q-cells.com<br>
              Dohyun.Kwon@q-cells.com<br>
              josong@hqj.jp<br><br>
              확인 부탁드립니다.
            </div>
          </div>
          <!-- //view-->
          <!-- btn -->
          <div class="btn-wrap">
            <button type="button" class="btn md">목록</button>
            <button type="button" class="btn md line-type1">수정</button>
            <button type="button" class="btn md line-type1">삭제</button>
            <button type="button" class="btn md line-type1">답변보기</button>
          </div>
          <!-- //btn -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import askLeft from "./askLeft.vue"

export default defineComponent({
  components: {
    askLeft,
  },
  data() {
    return {

    };
  },
  methods: {
  },
  computed: {
  }
})
</script>