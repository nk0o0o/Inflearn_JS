<template>
  <div class="home-sector-02_notice_board">
    <h2 class="title">게시판</h2>
    <div class="tab-notice-board" id="tabs-notice-board">
      <ul class="tab-notice-board_menu">
        <li 
          :class="{'active':currentTab===index}" 
          v-for="(tab, index) in tabNoticeBoards" 
          :key="index"
        >
          <button 
            type="button" 
            @click="currentTab = index"
          >
            {{tab}}
            <span class="num" 
              v-if="tabs[index] && tabs[index].lists"
            >
              {{tabs[index].lists.length}}
            </span>
          </button>
        </li>
      </ul>
      <div class="tab-notice-board_content" v-if="!nodata">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          v-show="currentTab == index"
        >
          <ul class="list">
            <li
              v-for="(item, index) in item.lists"
              :key="index"
            >
              <span class="txt">{{item.title}}</span>
              <span class="dates">{{item.date}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="nodata file" v-if="nodata">
        <span>공지가 없습니다.</span>
      </div>
    </div>
    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  data() {
    return {
      nodata: false,
      currentTab: 0,
      tabNoticeBoards: ['회사공지', '그룹공지'],
      tabs: [
        {
          lists: [
            {
              title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼오육칠팔구십일이삼사오육칠팔구십일이삼',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역1',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역1',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역1',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역1',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역1',
              date: '2022.03.14'
            },
          ],
        },
        {
          lists: [
            {
              title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼오육칠팔구십일이삼사오육칠팔구십일이삼',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역2',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역2',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역2',
              date: '2022.03.14'
            },
            {
              title: '회사 게시판 타이틀 영역2',
              date: '2022.03.14'
            },
          ],
        },
      ],
    };
  }
});
</script>