<template>
    <div :tooltip="tooltipText" :position="position"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Tooltip",
  props: {
    tooltipText: {
      type: String,
      default: "Tooltip text",
    },
    position: {
      type: String,
      default: "top",
    },
  },
});
</script>

