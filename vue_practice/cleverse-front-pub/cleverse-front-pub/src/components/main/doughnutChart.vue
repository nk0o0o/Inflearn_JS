<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  name: 'DoughnutChart',
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 160
    },
    height: {
      type: Number,
      default: 160
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      //default: () => {}
    },
    plugins: {
      type: Array,
      //default: () => []
    }
  },
  data() {
    return {
      chartData: {
        type: 'doughnut',
        labels: ['받은 편지함', '보낸 편지함', '임시 보관함', '정크 메일', '대화 내용', '기타 사서함 용량', '남은 용량'],
        datasets: [
          {
            backgroundColor: ['#00cdbb', '#00a0f7', '#5d79f5', '#455c73', '#8a9fb4', '#c1dbeb', '#ececec'],
            data: [20, 10, 10, 10, 15, 15, 20],
            borderWidth: 0,
            hoverOffset: 4,
            cutout: 65,
            
          }
        ]
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            // position: 'right',
            // align: 'start',
            // labels: {
            //   usePointStyle: true,
            //   pointStyles: 'rectRounded',
            //   boxHeight: 20,
            //   padding: 20,
            //   color: '#000',
            //   font: {
            //     size: 14,
            //     lineHeight: 1.8,
            //   }
            // }
          },
        },
      }
    }
  }
})
</script>
