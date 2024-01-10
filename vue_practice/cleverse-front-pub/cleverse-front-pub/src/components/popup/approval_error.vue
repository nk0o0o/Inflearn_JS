<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    title="오류"
    class="ly-pop-type1 sm f-14"
  >
    <template v-slot:body>
      <div class="error-wrap">
        <strong>오류번호 6245960</strong>
        <p>이용에 불편을 드려 죄송합니다.<br>일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주시기 바랍니다.</p>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from "vue"
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
      error: false,
      showModal: this.propShowModal,
    }
  },
  watch: {
    "propShowModal": function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit("popClose");
    },
  }
})
</script>