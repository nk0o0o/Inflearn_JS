<template>
  <base-alert 
    :propAlertShowModal="alertShowModal"
    :propIsScrollClass="true"
    :propBodyClass="'pwAlertClass'"
    @alertClose="onAlertHideModal" 
    title="Home 설정"
    class="ly-alert-type1 pwalert"
  >
    <template v-slot:body>
      <p class="txt-1">Home 설정이 완료 되었습니다.</p>
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
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