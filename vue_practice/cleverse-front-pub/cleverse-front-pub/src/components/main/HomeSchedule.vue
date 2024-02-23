<template>  
  <div class="home-sector-01_schedule">
    <h2 class="title">Schedule</h2>
    <ul class="schedule_list" v-if="!nodata">
      <li
        v-for="(item, index) in schedules"
        :key="index"
        :class="[{ on: item.on }, { off: item.off }]"
      >
        <em>
          {{item.time}}
          <span v-if="item.to">{{item.to}}</span>
        </em>
        <span>
          {{item.title}} 
          <span class="info">
            <span class="loc">{{item.location}}</span>
            <span class="mem">{{item.member}}</span>
          </span>
        </span>
      </li>
    </ul>
    <div class="nodata schedule" v-if="nodata">
      <span>일정이 없습니다.</span>
    </div>
    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    <!-- <coming-soon
      propComingTypeClass="coming-soon-type1"
      propComingImgClass="coming-soon-schedule"
      propComingText="일정을 클릭하면 상세한 내용을 확인하고<br>화상회의도 참석할 수 있어요"
    /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    //comingSoon,
  },
  data() {
    return {
      nodata: false,
      schedules: [
        {
          on: true,
          time: '종일',
          title: '[프로젝트] 차세대그룹웨어 구축 프로젝트팀 주간업무공유',
          location: '여의도 63빌딩 6층 9pod',
          member: '김한화 외 10명',
        },
        {
          off: true,
          time: '15:00',
          to: '17:00',
          title: '[프로젝트] 한화생명 업무공유 시스템 주간보고회의',
          location: '여의도 63빌딩 6층 9pod',
          member: '김한화 외 10명',
        },
        {
          time: '17:00',
          to: '18:00',
          title: '[프로젝트] 한화생명 업무공유 시스템 주간보고회의',
          location: '여의도 63빌딩 6층 9pod',
          member: '김한화 외 10명',
        },
      ],
    }
  },
});
</script>

