<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    class="ly-pop-type1 remote-support"
  >
    <template v-slot:body>
      <div class="title">
        <h3>원격지원 안내</h3>
        <p>Cleverse 사용 중 전화로 해결하기 어려운 사항은<br><span class="fc org">원격상담</span>으로 도와드립니다.</p>
      </div>
      <ul class="info-box">
        <li>
          <strong>고객센터 연결</strong>
          <p>한화시스템/ICT 고객센터에<br>전화상담을 연결하세요</p>
          <span class="f-18 f-bold">02-6313-3144</span>
        </li>
        <li>
          <strong>상담원 연결</strong>
          <p>고객님의 상담내용을<br>접수합니다</p>
        </li>
        <li>
          <strong>원격제어 접속</strong>
          <p>[접속하기]를 선택하고 상담원의<br>안내에 따라 성함 입력후<br>접속번호를 선택합니다</p>
          <span class="f-12">※ 설치화면이 나오는 경우<br>실행 버튼 선택</span>
          <button type="button" class="btn_contect"><i class="blind">접속하기</i></button>
        </li>
      </ul>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";

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
      isActive: false,
      error: false,
      showModal: this.propShowModal,
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
  }
})
</script>