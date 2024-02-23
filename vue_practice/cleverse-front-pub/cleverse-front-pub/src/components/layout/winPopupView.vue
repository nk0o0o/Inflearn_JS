
<template>
  <component
    :is="popupComponent"
    :propShowModal="true"
  />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  props: {
    pageInfo: null,
  },
  data(){
    return{

    }
  },
  setup(props, context){
    const route = useRoute()

    const popupComponent = computed(()=>{
        return defineAsyncComponent(() => import('@/components/winPopup/'+route.params.popupId))
    })

    const popupClassReset = onMounted(()=>{
      let bb = document.querySelector('.v-main__wrap')
      return bb?.classList.add('winPopupWidthReset')
    })

    return{
      popupComponent,
      popupClassReset
    }
  },
  methods:{

  }
})
</script>