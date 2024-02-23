<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    class="ly-pop-type2"
  >
    <template v-slot:body>
      <span class="img"><img :src="require('@/assets/imgs/img_dummy2.png')" style="width:480px;height:auto;" alt="banner"></span>
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-notice">
        <div class="input-chk"> 
          <input type="checkbox" name="chk1" id="chk1"><label for="chk1">오늘은 그만 보기</label> 
        </div>
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