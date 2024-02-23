<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onframeHideModal"
    :propFrameUrl="propFrameUrl"
    :propIsScrollClass="false"
    class="ly-pop-type1 xl frame-mode"
  >
    <template v-slot:body>
      샘플 팝업에서는 컴포넌트 > 컴포넌트 를 호출하여 정상적으로<br>
      frame height를 가져오지 못하는 문제가 있습니다.<br>
      일반 팝업호출에서는 문제없이 작동 합니다.<br>
      빠른 시일 안에 수정 하겠습니다.
      <iframe
        :src="propFrameUrl"
        class="approvalFrame"
        name="frame"
        frameborder='0'
        framespacing='0'
        marginheight='0'
        marginwidth='0'
        scrolling='yes'
        vspace='0'
      />
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
    propFrameUrl:{
      type: String,
      default: '',
    },
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
    onframeHideModal(){
      this.$emit('popClose');
    },
    parentPwAlert(){
      // @ts-ignore
      this.$parent.pwAlert()
    },
  }
})
</script>