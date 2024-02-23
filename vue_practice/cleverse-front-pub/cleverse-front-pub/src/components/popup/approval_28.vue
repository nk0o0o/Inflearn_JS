<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="결재의견편집"
    class="ly-pop-type1 md"
  >
    <template v-slot:body>
    <div class="guide-box gray">
      <div class="bg-cnt">
        <p>기존에 등록하신 결재의견이 있습니다.<br>편집 혹은 신규등록 여부를 선택하신 후 확인 버튼을 눌러 주세요.</p>
        <div class="mg-t20">
          <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1" checked><label for="radio1-1">편집</label></div>
          <div class="input-radio h16 mg-l40"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">신규등록</label></div>
        </div>
      </div>
    </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
      <button type="button" class="btn lg line-type2">취소</button>
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