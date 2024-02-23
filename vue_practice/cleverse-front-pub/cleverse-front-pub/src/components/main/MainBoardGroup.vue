<template>
  <section class="main-box main-box__board_group">
    <div class="main-box__inner">
      <h2 class="main-box--title">그룹게시판</h2>
      
      <div class="main-board__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>

      <div class="main-board__list">

        <!-- <p class="no-data no-data__board">게시글이 없습니다</p> -->
        <ul>
          <li class="row" v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link">
              <span class="row-contxt">{{row.contxt}}</span>
              <span class="row-date">{{row.date}}</span>
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
      tabsType : ["공지사항","구독게시판 A","구독게시판 B","구독게시판 C"],
      list : [
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
        {
          contxt: "회사 게시판 타이틀 영역",
          date: "2022.03.14",
        },
        {
          contxt: "alkalerfkjae;rofjao;ewrifjaowrijgo;aejirg;oijserg;oijser;ogijrijegosi;ejrgoisjrego;ijewfio",
          date: "2022.03.14",
        },
      ]
    }
  },
});
</script>