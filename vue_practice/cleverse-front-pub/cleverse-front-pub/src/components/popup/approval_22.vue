<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="분할저장"
    class="ly-pop-type1 xxs not-ovf"
  >
    <template v-slot:body>
      <div>
        <p>다운로드할 리스트가 1000건을 초과하여<br>분할하여 저장 하셔야 합니다.</p>
        <div class="flex jc-sb mg-t15">
          <select-view
            :propOptionList="optionLsit"
            :propPlaceholder="'1-1000'"
            :propClass="'type1 flex-1'"
            >
          </select-view>
          <button type="button" class="btn sm">엑셀다운</button>
        </div>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    basePopup,
    selectView,
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
      optionLsit: [
        { value: '1-1000', label: '1-1000' },
        { value: '옵션명', label: '옵션명' },
      ],
      
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