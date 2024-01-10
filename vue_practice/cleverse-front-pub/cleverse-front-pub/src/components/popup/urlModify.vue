<template>
  <base-popup 
    :propShowModal="showModal" 
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="링크 URL 수정"
    class="ly-pop-type1 sm cbip"
  >
    <template v-slot:body>
      <div class="pop-url-modify">
        <label for="url" class="url">링크 URL</label>
        <div class="input-box type3">
          <input type="text" required placeholder="URL을 입력해주세요." id="url">
          <button type="reset" class="input-txt-del readonly"><span class="blind">입력 삭제</span></button>
        </div>
      </div>
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn sm line-type1">취소</button>
        <button type="button" class="btn sm">저장</button>
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
      error: true,
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