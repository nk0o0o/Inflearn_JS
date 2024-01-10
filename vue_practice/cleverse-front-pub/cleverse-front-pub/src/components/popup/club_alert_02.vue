<template>
  <base-alert 
    :propAlertShowModal="alertShowModal"
    :propIsScrollClass="true"
    @alertClose="onAlertHideModal" 
    title="동호회 개설하기"
    class="ly-alert-type1 sm"
  >
    <template v-slot:body>
      <p class="txt-1">해당 동호회는 회비로 운영되는 공식 동호회로 인사팀 승인을 통해 개설이 가능합니다.</p>
      <p class="txt-1">자세한 내용은 지원업무 내 동호회 신청 화면에서 확인이 가능합니다.</p>
      <p class="txt-1">지원업무 화면으로 이동 하시겠습니까?</p>
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