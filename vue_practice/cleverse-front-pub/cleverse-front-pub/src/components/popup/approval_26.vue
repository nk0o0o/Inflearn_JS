<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onframeHideModal"
    :propFrameUrl="propFrameUrl"
    :propIsScrollClass="false"
    class="ly-pop-type1 md frame-wrap"
  >
    <template v-slot:body>
      <iframe
        :src="propFrameUrl"
        width="100%"
        class="approvalFrame"
        name="frame"
        frameborder='0'
        framespacing='0'
        marginheight='0'
        marginwidth='0'
        scrolling='no'
        vspace='0'
      ></iframe>
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
      propFrameUrl: "/approval_26.html"
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