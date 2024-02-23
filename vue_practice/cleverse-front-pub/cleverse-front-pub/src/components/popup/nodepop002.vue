<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title=""
    class="ly-pop-type1 admin f-14 no-title"
  >
    <template v-slot:body>
      <div class="title sub">예상업무기간은</div>
      <div class="date h40">
        <Datepicker 
          weekStart="0"
          v-model="rangeDate"
          range 
          :format="rangeFormat"
          :enableTimePicker="false"/>
      </div>
      <div class="flex jc-sb mg-t20">
        <div class="title sub">업무 내용은</div>
        <button type="button" class="icon-btn addfile mg-b10">파일첨부</button>
      </div>
      <div>
        <textarea name="" id="" class="textarea type1 bg-gray" placeholder="이 노드를 통해 수행하고 싶은 업무 내용을 간략하게 적어주세요!"></textarea>
      </div>
      <ul class="work-file_list scroll">
        <li class="ico-file pdf">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button" class="fc org">삭제</button></li>
        <li class="ico-file excel">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button" class="fc org">삭제</button></li>
        <li class="ico-file hwp">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button" class="fc org">삭제</button></li>
        <li class="ico-file img">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button" class="fc org">삭제</button></li>
      </ul>
      <ol class="pop-prog_list">
        <li><em>1</em></li>
        <li class="ov"><em>2</em></li>
        <li><em>3</em></li>
      </ol>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">이전</button>
        <button type="button" class="btn lg">다음</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    basePopup,
    Datepicker,
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
      rangeDate: [new Date(),new Date()],
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
    rangeFormat(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();

      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();

      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  }
})
</script>