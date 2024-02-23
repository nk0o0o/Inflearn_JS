<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="타이틀 입니다"
    class="ly-pop-type1 admin sm"
  >
    <template v-slot:body>
      <div class="f-14">
        <p>본문내용 본문내용 본문내용본문내용 본문내용 본문내용<br>본문내용 본문내용 본문내용본문내용 본문내용 본문내용본문내용 본문내용 본문내용본문내용 본문내용 본문내용 본문내용 본문내용 본문내용본문내용 본문내용 본문내용</p>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap ta-c">
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