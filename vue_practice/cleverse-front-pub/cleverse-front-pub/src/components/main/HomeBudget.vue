<template>
  <div class="home-sector-02_budget">
    <h2 class="title">통제예산 조회</h2>

    <div class="budget-select">
      <select-view
        :propOptionList="optionLsit"
        :propPlaceholder="'F211097-4 한화생명업무공유시스템 2차 고도화 구축-수행'"
        :propClass="'type3'"
      >
      </select-view>
    </div>
    <div class="budget-graph" v-if="!nodata">
      <ul>
        <li
          v-for="(item, index) in graphs"
          :key="index"
        >
          <span class="graph-wrap">
            <span class="tit">{{item.title}}</span>
            <budget-graph
              :propPercent="item.percent"
              :propNumer="item.numer"
              :propDenom="item.denom"
              :propStep="propStep"
            />
            <span class="percent">{{item.percent}}%</span>
          </span>
        </li>
      </ul>
      <p class="total">회계포탈 미처리 법인카드 금액 <strong>1,626,300</strong>원 입니다.</p>
    </div>
    <div class="nodata data" v-if="nodata">
      <span>사용 현황 데이터가 없습니다.</span>
    </div>


    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    <coming-soon
      propComingTypeClass="coming-soon-type1"
      propComingImgClass="coming-soon-budget"
      propComingText="우리팀의 통제예산 사용 현황을<br>볼 수 있어요"
    />
    <a href="main/comingSoonSupply" style="position:absolute;top:0;left:0;display:block;width:580px;height:420px;z-index:12;"></a>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import selectView from "@/components/selectView.vue"
import budgetGraph from "@/components/main/budgetGraph.vue"
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    selectView,
    budgetGraph,
    comingSoon,
  },
  props:{
    propStep:{
      type: Number,
      default: 2
    },
  },
  data() {
    return {
      nodata: false,
      optionLsit: [
        { value: 'menu1', label: 'F211097-1 한화생명업무공유시스템 1차 고도화 구축-수행' },
        { value: 'menu2', label: 'F211097-2 한화생명업무공유시스템 2차 고도화 구축-수행' },
        { value: 'menu3', label: 'F211097-3 한화생명업무공유시스템 3차 고도화 구축-수행' },
        { value: 'menu4', label: 'F211097-4 한화생명업무공유시스템 4차 고도화 구축-수행' },
        { value: 'menu5', label: 'F211097-5 한화생명업무공유시스템 5차 고도화 구축-수행' },
      ],
      graphs: [
        {
          title: '업무회의비',
          percent:50,
          numer: '100,000',
          denom: '1,000,000',
        },
        {
          title: '업무추진식대업업무추진식대업업무추진식대업',
          percent:40,
          numer: '100,000',
          denom: '1,000,000',
        },
        {
          title: '시내교통비',
          percent:30,
          numer: '100,000',
          denom: '1,000,000',
        },
        {
          title: '조직관리비',
          percent:40,
          numer: '100,000',
          denom: '1,000,000',
        },
      ],
    }
  },
});
</script>