<template>
  <div class="mytask">
    <h2 class="title">My Task</h2>
    <div class="week-wrap">
      <div class="week-header">
        <div
          v-for="(item, index) in weeks"
          :key="index"
          :class="[{ off: item.off }, { today: item.today }]"
        >
          <span>{{item.week}}</span>
          <span>{{item.day}}</span>
        </div>
      </div>
      <div  class="week-schedule_wrap">
        <table class="week-schedule" v-if="!nodata">
          <tbody>
            <tr class="color-01">
              <td></td>
              <td></td>
              <td></td>
              <td class="bg full" colspan="2">
                <div class="info-inner lock day3">
                  <span>차세대 그룹웨어 구축 차세대 그룹웨어 구축 차세대 그룹웨어 구축 차세대 그룹웨어 구축</span>
                  <v-tooltip
                    activator="parent"
                    anchor='bottom start'
                    content-class='bottom'
                  >
                  차세대 그룹웨어 구축 차세대 그룹웨어
                  </v-tooltip>
                </div>
                <!-- <span class="bg-day" :style="'width:'+realCount.count+'%'"></span> -->
              </td>
              <td class="bg"></td>
              <td></td>
            </tr>
            <tr class="color-01">
              <td></td>
              <td class="bg full" colspan="2">
                <div class="info-inner lock day4">
                  <span>차세대 그룹웨어 구축 차세대 그룹웨어 구축 차세대 그룹웨어 구축 차세대 그룹웨어 구축</span>
                  <v-tooltip
                    activator="parent"
                    anchor='bottom start'
                    content-class='bottom'
                  >
                  차세대 그룹웨어 구축 차세대 그룹웨어
                  </v-tooltip>
                </div>
                <span class="bg-day" :style="'width:'+realCount.count+'%'"></span>
              </td>
              <td class="bg"></td>
              <td class="bg"></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="color-02">
              <td class="bg full" colspan="3">
                <div class="info-inner lock day7">
                  <span>한화생명업무공유2.0 한화생명업무공유2.0</span>
                  <v-tooltip
                    activator="parent"
                    anchor='bottom start'
                    content-class='bottom'
                  >
                  한화생명업무공유2.0 한화생명업무공유2.0
                  </v-tooltip>
                </div>
                <span class="bg-day" :style="'width:'+realCount.count+'%'"></span>
              </td>
              <td class="bg"></td>
              <td class="bg"></td>
              <td class="bg"></td>
              <td class="bg"></td>
            </tr>
            <tr class="color-02">
              <td></td>
              <td></td>
              <td class="bg full">
                <div class="info-inner day2">
                  <span>업무공유 시스템 업무공유 시스템</span>
                  <v-tooltip
                    activator="parent"
                    anchor='bottom start'
                    content-class='bottom'
                  >
                  업무공유 시스템 업무공유 시스템
                  </v-tooltip>
                </div>
                <span class="bg-day" :style="'width:'+realCount.count+'%'"></span>
              </td>
              <td class="bg"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="nodata task" v-if="nodata">
          <span>Task가 없습니다.</span>
        </div>
      </div>
      <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    </div>
    <!-- <coming-soon
      propComingTypeClass="coming-soon-type1"
      propComingImgClass="coming-soon-mytask"
      propComingText="업데이트된 내용이 있는<br> 협업보드를 볼수있어요"
    /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
//import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import useCountNumber from "@/plugins/use/useCountNumber";
//import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    //comingSoon,
    //dropdownMenu2,
  },
  setup() {
    const error = ref('')
    const myNumber = ref(100)
    const minNumber = ref(25)
    const countNum = useCountNumber(myNumber,{
      minNumber: 25,
      interval: 15
    })
    return {
      myNumber,
      countNum,
      minNumber,
      error
    }
  },
  data() {
    return {
      realCount: this.countNum,
      nodata: false,
      weeks: [
        { off: true, week: 'Sun', day: 11 },
        { week: 'Mon', day: 12 },
        { today: true, week: 'Tue', day: 13 },
        { week: 'Wed', day: 14 },
        { week: 'Thu', day: 15 },
        { week: 'Fri', day: 16 },
        { off: true, week: 'Sat', day: 17 },
      ],
      dropItem: {
        title: `
          <p class="text">차세대 그룹웨어 구축 차세대 그룹웨어 구축</p>
        `,
      },
      dropItem2: {
        title: `
          <p class="text">한화생명업무공유2.0 한화생명업무공유2.0</p>
        `,
      },
      dropItem3: {
        title: `
          <p class="text">업무공유 시스템 업무공유 시스템</p>
        `,
      },
    }
  },
});
</script>

