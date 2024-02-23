<template>
  <base-popup 
    :propShowModal="showModal"
    @popClose="onHideModal" 
    title=""
    class="ly-pop-type1 ssm img-big-view__wrap"
  >
    <template v-slot:body>
      <div class="img-big-view">
        <img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화">
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