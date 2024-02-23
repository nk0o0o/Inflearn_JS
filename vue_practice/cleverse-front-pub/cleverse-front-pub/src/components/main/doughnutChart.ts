// import { defineComponent, h, PropType } from 'vue'
// import { Doughnut } from 'vue-chartjs'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   CategoryScale,
//   Plugin
// } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

// export default defineComponent({
//   name: 'DoughnutChart',
//   components: {
//     Doughnut
//   },
//   props: {
//     chartId: {
//       type: String,
//       default: 'doughnut-chart'
//     },
//     width: {
//       type: Number,
//       default: 160
//     },
//     height: {
//       type: Number,
//       default: 160
//     },
//     cssClasses: {
//       default: '',
//       type: String
//     },
//     styles: {
//       type: Object as PropType<Partial<CSSStyleDeclaration>>,
//       //default: () => {}
//     },
//     plugins: {
//       type: Array as PropType<Plugin<'doughnut'>[]>,
//       //default: () => []
//     }
//   },
//   setup(props) {
//     const chartData = {
//       labels: ['받은 편지함', '보낸 편지함', '임시 보관함', '정크 메일', '대화 내용', '기타 사서함 용량', '남은 용량'],
//       datasets: [
//         {
//           backgroundColor: ['#00cdbb', '#00a0f7', '#5d79f5', '#455c73', '#8a9fb4', '#c1dbeb', '#ececec'],
//           data: [20, 10, 10, 10, 15, 15, 20],
//           borderWidth: 0,
//           hoverOffset: 4,
//           cutout: 65,
//         },
//       ]
//     }

//     const chartOptions = {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "right",
//           labels: {}
//         },
        
//       },
//       maintainAspectRatio: false,
//     }

//     return () =>
//       h(Doughnut, {
//         chartData,
//         chartOptions,
//         chartId: props.chartId,
//         width: props.width,
//         height: props.height,
//         cssClasses: props.cssClasses,
//         styles: props.styles,
//         plugins: props.plugins,
//       })
//   }
// })

// // legend: {
// //   display: true, //show
// //   position: 'top', //위치
// //   align: 'end', //정렬
// //   labels: {
// //       fontColor: "#959dad", //폰트 컬러
// //       usePointStyle: true, //dataset에서 정의한 pointStyle 그대로 사용
// //       boxWidth: 5, //넓이
// //       filter: function(item, chart) {
// //           return !item.text.includes('label to remove');
// //       } //data에서 label이 label to removed일 경우 보이지 않음
// //   }
// // },
