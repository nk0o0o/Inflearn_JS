<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    :propIsScrollClass="true"
    :propBodyClass="'pwClass'"
    title="비밀번호 재발급 안내"
    class="ly-pop-type1 pwreissue"
  >
    <template v-slot:body>
      <h2 class="ly-tit-h2">임시 비밀번호 확인 방법 안내</h2>
      <ol class="ly-use-step">
        <li><p>아이디와 사번을 입력하시고 인증번호발송을 누르시면, <br>등록된 핸드폰 번호로 인증번호가 전송됩니다.</p></li>
        <li><p>전송받은 인증번호를 입력하시고 인증을 누르시면, <br>동일 핸드폰 번호로 임시비밀번호가 전송됩니다.</p></li>
        <li><p>전송된 비밀번호는 임시 비밀번호입니다. <br>보안을 위해 반드시 비밀번호를 변경한 후 사용하시기 바랍니다.</p></li>
      </ol>
      <p class="ly-use-step-sub"><span>※</span>사번을 모르시거나 핸드폰 번호가 등록되지 않았을 경우에는<br> 소속회사 시샵에게 문의 하십시요.</p>

      <h2 class="ly-tit-h2">사용자 인증 확인</h2>
      <div class="input-box type5">
          <input type="text" required placeholder="아이디">
          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
          <div class="error" v-if="error">에러 문구</div>
      </div>
      <div class="input-box type5">
          <input type="text" required placeholder="사번">
          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
          <div class="error" v-if="error">에러 문구</div>
      </div>
    </template>

    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <v-button class="btn biggest" @click="parentPwAlert">인증번호발송</v-button>
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
    parentPwAlert(){
      // @ts-ignore
      this.$parent.pwAlert()
    },
  }
})
</script>