<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title=""
    class="ly-pop-type1 admin sm no-title"
  >
    <template v-slot:body>
      <div class="f-14">
        <p>최근 30일동안의 마음건강 데이터가 없습니다.<br>마음건강 App에서 마음건강을 체크해 보세요.</p>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap ta-c">
        <button type="button" class="btn lg">확인</button>
      </div>
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