<template>
  <div class="update-board">
    <h2 class="title">Updated Board</h2>
    <div class="update-board_tab" id="tabs-update-board" v-if="!nodata">
      <ul class="update-board_tab_menu">
        <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsBoard" :key="index">
          <button type="button" @click="currentTab = index">{{tab}}</button>
        </li>
      </ul>
      <div class="update-board_tab_content">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          v-show="currentTab == index"
        >
          <ul class="over">
            <li
              v-for="(item, index) in item.list"
              :key="index"
            >
              <em>{{item.title}}</em>
              <span>{{item.sort}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nodata board" v-if="nodata">
      <span>업데이트 보드가 없습니다.</span>
    </div>
    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    <coming-soon
      propComingTypeClass="coming-soon-type1"
      propComingImgClass="coming-soon-board"
      propComingText="업데이트된 내용이 있는<br>협업보드를 볼 수 있어요"
    />
  </div>
  <a href="main/comingSoonBoard" style="position:absolute;bottom:0;left:0px;display:block;width:580px;height:290px;z-index:12;"></a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    comingSoon,
  },
  data() {
    return {
      nodata: false,
      currentTab: 0,
      tabsBoard: ['협업공간명', '차세대 그룹웨어 구축', '차세대 그룹웨어 수행', '차세대 그룹웨어 산출물', '차세대 그룹웨어 산출물', '차세대 그룹웨어 산출물'],
      tabs: [
        {
          list: [
            { title: '차세대 그룹웨어 모바일 Architecture1', sort: '01. 아키텍쳐 설계' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '00. GNB', sort: '03. 디자인' },
          ],
        },
        {
          list: [
            { title: '차세대 그룹웨어 모바일 Architecture2', sort: '01. 아키텍쳐 설계' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '00. GNB', sort: '03. 디자인' },
          ],
        },
        {
          list: [
            { title: '차세대 그룹웨어 모바일 Architecture3', sort: '01. 아키텍쳐 설계' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '00. GNB', sort: '03. 디자인' },
          ],
        },
        {
          list: [
            { title: '차세대 그룹웨어 모바일 Architecture4', sort: '01. 아키텍쳐 설계' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '00. GNB', sort: '03. 디자인' },
          ],
        },
        {
          list: [
            { title: '차세대 그룹웨어 모바일 Architecture5', sort: '01. 아키텍쳐 설계' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '00. GNB', sort: '03. 디자인' },
          ],
        },
        {
          list: [
            { title: '차세대 그룹웨어 모바일 Architecture6', sort: '01. 아키텍쳐 설계' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '[디자인] 05. 업무공유 2.0 조직맵 1차', sort: '02. 기획' },
            { title: '00. GNB', sort: '03. 디자인' },
          ],
        },
      ]
    }
  },
});
</script>

