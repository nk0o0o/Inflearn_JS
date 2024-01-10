<template>
  <section class="main-box main-box__payment">
    <div class="main-box__inner">
      <h2 class="main-box--title">전자결재</h2>

      <div class="main-board__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab.str}} <span class="count" v-if="tab.count">{{returnCount(tab.count)}}</span></button>
          </li>
        </ul>
      </div>

      <div class="main-board__list main-board__payment">

        <!-- <p class="no-data no-data__paper">결재문서가 없습니다</p> -->
        <ul>
          <li class="row" v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link">
              <span class="row-date">{{row.date}}</span>
              <span class="row-contxt">{{row.contxt}}</span>
              <span class="row-writer">{{row.writer}}</span>
            </a>
          </li>
        </ul>

      </div>

      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      currentTab: 0,
      tabsType : [
        {str: "진행중", count: 6},
        {str: "완료", count: 6},
        {str: "결제할 문서", count: 0},
        {str: "반송 문서", count: 99999},
      ],
      list : [
        {
          date: "2022.03.14",
          contxt: "[대외공문]한화데이터센터 법적 정기검사",
          writer: "김한화"
        },
        {
          date: "2022.03.14",
          contxt: "asdofijafijawe;fijawl;efjiaw;lfj;aweijasdofijafijawe;fijawl;efjiaw;lfj;aweijfasdofijafijawe;fijawl;efjiaw;lfj;aweijff",
          writer: "asooifjaslidfjjlsdfi"
        },
        {
          date: "2022.03.14",
          contxt: "[대외공문]한화데이터센터 법적 정기검사",
          writer: "김한화김한화김한화김한화김한화"
        },
        {
          date: "2022.03.14",
          contxt: "[대외공문]한화데이터센터 법적 정기검사",
          writer: "김한화"
        },
        {
          date: "2022.03.14",
          contxt: "asdofijafijawe;fijawl;efjiaw;lfj;aweijasdofijafijawe;fijawl;efjiaw;lfj;aweijfasdofijafijawe;fijawl;efjiaw;lfj;aweijff",
          writer: "asooifjaslidfjjlsdfi"
        },
        {
          date: "2022.03.14",
          contxt: "[대외공문]한화데이터센터 법적 정기검사",
          writer: "김한화김한화김한화김한화김한화"
        },
        {
          date: "2022.03.14",
          contxt: "[대외공문]한화데이터센터 법적 정기검사",
          writer: "김한화"
        },
        {
          date: "2022.03.14",
          contxt: "asdofijafijawe;fijawl;efjiaw;lfj;aweijasdofijafijawe;fijawl;efjiaw;lfj;aweijfasdofijafijawe;fijawl;efjiaw;lfj;aweijff",
          writer: "asooifjaslidfjjlsdfi"
        },
        {
          date: "2022.03.14",
          contxt: "[대외공문]한화데이터센터 법적 정기검사",
          writer: "김한화김한화김한화김한화김한화"
        },
      ]
    }
  },
  methods: {
    returnCount(val: number) {
      const str = (val > 99) ? "99+" : val;
      return str;
    }
  }
});
</script>