<template>
  <div class="home-sector-01_email">
    <h2 class="title">Email</h2>
    <div class="home-sector-01_email_inner">
      <div class="graph">
        <div class="graph-inner">
          <mail-chart
            :propEmailGuage="emailGuage"
            :propSpeed="emailGuage"
          />
          <dl>
            <dt>메일용량</dt>
            <dd><button type="button">메일백업</button></dd>
          </dl>
        </div>
        <ul>
          <li>
            <em>메일용량</em>
            <span>100.4/500MB</span>
          </li>
          <li>
            <em>신규메일</em>
            <span>28/134</span>
          </li>
        </ul>
      </div>
      <ul class="list over" v-if="!nodata">
        <li
          v-for="(item, index) in lists"
          :key="index"
        >
          <span class="img" :class="{ import: item.import }">
            <span>
              <img v-if="item.src" :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name">
            </span>
          </span>
          <dl>
            <dt>{{item.title}}</dt>
            <dd>{{item.name}}・{{item.date}}</dd>
          </dl>
        </li>
      </ul>

      <div class="nodata mail"  v-if="nodata">
        <span>미확인 메일이 없습니다.</span>
      </div>

    </div>
    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    <coming-soon
      propComingTypeClass="coming-soon-type1"
      propComingImgClass="coming-soon-email"
      propComingText="남아있는 나의 메일 용량을 확인하고<br>받은 메일을 미리 볼 수 있어요"
    />
    <a href="main/comingSoonMail" style="position:absolute;top:0;left:0;display:block;width:580px;height:320px;z-index:12;"></a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import mailChart from '@/components/mailChart.vue'
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    mailChart,
    comingSoon,
  },
  data() {
    return {
      nodata: false,
      emailGuage: 61,
      lists: [
        {
          import: true,
          name: '김한화',
          title: 'UI/UX 히든공고 링크 송부의 件',
          date: '2022.03.14 11:23'
        },
        {
          src: 'sample_123.jpg',
          name: '김한화',
          title: '게시판 옵션 관련 화면 송부',
          date: '2022.03.14 11:23'
        },
        {
          import: true,
          src: 'sample_123.jpg',
          name: '김한화',
          title: '준법협의체 1차 교육 및 자료 제출 안내 준법협의체 1차 교육 및 자료 제출 안내',
          date: '2022.03.14 11:23'
        },
      ],
    }
  },
});
</script>
