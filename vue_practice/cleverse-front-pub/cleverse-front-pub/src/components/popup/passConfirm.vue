<template>
  <base-alert 
    :propAlertShowModal="alertShowModal"
    :propIsScrollClass="true"
    :propBodyClass="'pwAlertClass'"
    @alertClose="onAlertHideModal" 
    title="비밀번호 확인"
    class="ly-alert-type1 pwalert"
  >
    <template v-slot:body>
      <div class="pop-pass-confirm">
        <form action="">
          <div class="input-box type3">
            <input type="password" required placeholder="비밀번호를 입력해주세요." v-model="passWriting">
            <button type="reset" class="input-txt-del readonly" @click="passWriting = ''"><span class="blind">입력 삭제</span></button>
            <div class="error" v-if="error">비밀번호가 일치하지 않습니다.</div>
          </div>
        </form>
      </div>
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn sm line-type1">취소</button>
        <button type="button" class="btn sm" :disabled="passWriting.length == ''">확인</button>
      </div>
    </template>
  </base-alert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import baseAlert from "@/components/layout/baseAlert.vue"
export default defineComponent({
  components: {
    baseAlert,
  },
  props: {
    pageInfo: null,
    propAlertShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      passWriting: '',
      error: true,
      alertShowModal: this.propAlertShowModal,
    }
  },
  watch: {
    'propAlertShowModal': function(){
      this.alertShowModal = this.propAlertShowModal
    }
  },
  methods:{
    onAlertHideModal(){
      this.$emit('alertClose');
    }
  }
})
</script>