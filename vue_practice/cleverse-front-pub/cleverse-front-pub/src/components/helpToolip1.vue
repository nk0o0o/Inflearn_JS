<template>
  <div ref="tooltip" class="tooltip-pop" :class="[propArrayValue.class, {active:propArrayValue.visible}]">
    <div class="desc">Coming Soon</div>
    <p class="msg" v-html="propArrayValue.text"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  props: {
    propArrayValue:{
      type: Object as PropType<{id: string, text:string, class: string, visible: boolean}>,
      required: true
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const tooltip = ref(null);
    onClickOutside(tooltip, (event) => {
      // console.log('##### ==> onClickOutside 1', props.propArrayValue);
      // console.log('##### ==> onClickOutside 2');
      emit('close')
    })
    return {
      tooltip
    }
  }
})
</script>