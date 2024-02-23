<template>
  <base-alert 
    :propAlertShowModal="alertShowModal"
    @alertClose="onAlertHideModal" 
    :propIsScrollClass="true"
    :propBodyClass="'pwAlertClass'"
    title="인증번호발급안내"
    class="ly-alert-type1 pwalert"
  >
    <template v-slot:body>
      <p class="txt-1">인증번호가 정상적으로 발급되었습니다.</p>
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn sm line-type1">취소</button>
        <button type="button" class="btn sm">확인</button>
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