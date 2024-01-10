<template>
  <div>
    <component 
      :is="popupComponent"  
      @cancel="onCancel" 
      @confirm="onConfirm" 
      :propShowModal="showModal"
      :propAlertShowModal="alertShowModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
  props: {
    pageInfo: null,
  },
  data(){
    return{
      popupId: '',
      showModal: true,
      alertShowModal: true,
    }
  },
  computed: {
    popupComponent() {
      return defineAsyncComponent(() => import('@/components/popup/'+this.$route.params.popupId))
    }
  },
  methods:{
    
  }
})
</script>