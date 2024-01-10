<template>
  <base-alert 
    :propAlertShowModal="alertShowModal"
    :propIsScrollClass="true"
    :propBodyClass="'pwAlertClass'"
    @alertClose="onAlertHideModal" 
    title="알림"
    class="ly-alert-type1 pwalert"
  >
    <template v-slot:body>
      <p class="txt-1">
        비공개 시 보드 멤버를 별도로 구성할 수 있습니다.<br>
        단 비공개 멤버가 구성된 보드는 전체공개,멤버만 공개로 다시 변경 할 수 없습니다.<br>
        비공개로 설정하시겠습니까?
      </p>
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
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