<template>
  <section class="chart">
    <mail-chart
      :propEmailGuage="emailGuage"
      :propSpeed="emailGuage"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mailChart from '@/components/mailChart.vue'

export default defineComponent({
    components: {
      mailChart,
    },
    data() {
        return {
          emailGuage: 93, // 0 ~ 100 까지 가능 - % 단위
        }
    },
    methods:{ 
    }
})
</script>
