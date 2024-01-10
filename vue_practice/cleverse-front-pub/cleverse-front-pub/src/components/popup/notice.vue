<template>
  <base-popup
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="공지사항"
    class="ly-pop-type1 notice"
  >
    <template v-slot:body>
      <h2 class="notice-h2">임시 비밀번호 확인 방법 안내</h2>
      <div class="notice-cont">
        공지사항 내용이 노출됩니다. 이미지 없는 케이스입니다.<br>
		텍스트 형식으로 노출됩니다.<br>
		공지사항 내용 공지사항 내용이 노출됩니다. 이미지 없는 케이스입니다.<br>
		텍스트 형식으로 노출됩니다.<br>
		<a>링크가 노출됩니다.</a><br><br>

		공지사항 내용이 노출됩니다. 이미지 없는 케이스입니다.<br>
		텍스트 형식으로 노출됩니다.<br>
		공지사항 내용 공지사항 내용이 노출됩니다. 이미지 없는 케이스입니다.
      </div>
    </template>

	<template v-slot:btnWrap>
    <div class="btn-wrap right">
      <button type="button" class="btn lg line-type2">취소</button>
      <button type="button" class="btn lg">확인</button>
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
    parentPwAlert(){
      // @ts-ignore
      this.$parent.pwAlert()
    },
  }
})
</script>