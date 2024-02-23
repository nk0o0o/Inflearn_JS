<template>
  <div class="sys-index_wrap">
    <div class="sys-t_banner">
        <span class="txt">우리가 일하는 이유는?</span>
        <button class="bn">자세히 보기</button>
    </div>
    <p class="sys-index-txt"># Health Tech  # Wealth Tech  # Company Building</p>
    <div class="sys-index_list">
      <div class="box first">
        <div class="box_header">
          <h2 class="ico i01">
            <img class="img-sector" :src="require('@/assets/imgs/collaboration/svg/cluster-sector-vision-small.svg')" alt="Vision">
            <span class="sector-name">Vision 2030Vision 2030Vision 2030Vision 2030Vision 2030</span>
          </h2>
          <button class="moreview"><span>더보기</span></button>
        </div>
        <p class="txt">
          목표가 한줄에서 두줄정도 노출합니다 보험 부문 전략입니다 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출
          목표가 한줄에서 두줄정도 노출합니다 보험 부문 전략입니다 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출
          목표가 한줄에서 두줄정도 노출합니다 보험 부문 전략입니다 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출
        </p>
        <div class="box_footer">
          <div class="cs_num">Cluster <em>1</em></div>
          <div class="sector sl">
            <main-circle-slider></main-circle-slider>
          </div>
        </div>
      </div>
      <div class="second">
        <div class="box" v-for="(item, index) in lists" :key="index">
          <div class="box_header">
            <h2 class="ico">
              <img class="img-sector" :src="require(`@/assets/imgs/collaboration/svg/${item.icon}`)" :alt="item.title">
              <span class="sector-name">{{item.title}}</span>
            </h2>
            <button class="moreview"><span>더보기</span></button>
          </div>
          <p class="txt">{{item.text}}</p>
          <div class="cs_num">{{item.sector}} <em>{{item.count}}</em></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainCircleSlider from './MainCircleSlider.vue';

export default defineComponent({
  components: {
    MainCircleSlider,
  },
  data() {
    return { 
      lists: [
        {
          title: '전략부문',
          icon: 'cluster-sector-small.svg',
          text: '목표가 한줄에서 두줄정도 노출합니다 보험 부문 전략입니다 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출 목표가 한줄에서 두줄정도 노출합니다 보험 부문 전략입니다 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출 목표가 한줄에서 두줄정도 노출합니다 보험 부문 전략입니다 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출',
          sector: 'Cluster',
          count: 1,
        },
        {
          title: '신사업부문',
          icon: 'cluster-sector-building-small.svg',
          text: '목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출',
          sector: 'Cluster',
          count: 3,
        },
        {
          title: '보험부문',
          icon: 'cluster-sector-insurance-small.svg',
          text: '목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출',
          sector: 'Cluster',
          count: 5,
        },
        {
          title: '직할',
          icon: 'cluster-sector-direct-small.svg',
          text: '목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출 목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 45자 노출',
          sector: 'Cluster',
          count: 10,
        },
        {
          title: '경영혁신부문',
          icon: 'cluster-sector-innovation-small.svg',
          text: '목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 ',
          sector: 'Cluster',
          count: 15,
        },
        {
          title: '투자부문',
          icon: 'cluster-sector-invest-small.svg',
          text: '목표가 한줄에서 두줄정도 노출합니다 보험부문 전략입니다 ',
          sector: 'Cluster',
          count: 6,
        },
      ]
    };
  },  
  methods: { 
  },
});
</script>