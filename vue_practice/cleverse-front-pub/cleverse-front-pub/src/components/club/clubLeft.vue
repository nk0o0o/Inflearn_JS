<template>
  <div class="layout-left">
    <div class="left-navi">
      <h2 class="left-navi-tit">나의 동호회</h2>
      <button type="button" class="btn round-type">동호회 개설하기</button>
      <ul class="left-navi-list club-main">
        <li class="menu-01 active">
          <button type="button" class="group-first-menu">
            <span>즐겨찾기 동호회</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            즐겨찾기 동호회
            </v-tooltip>
          </button>
          <button type="button" class="favor-set">설정</button>
          <ul class="dep2">
            <li>
              <div class="no-club">
                가입하신 동호회가 없습니다.
              </div>
              <!-- <button type="button" class="single-menu">
                <span>동호회 명이 보여집니다. 동호회 명이 보여집니다.</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                동호회 명이 보여집니다. 동호회 명이 보여집니다.
                </v-tooltip>
              </button> -->
            </li>
          </ul>
        </li>
        <li class="menu-02 active">
          <button type="button" class="group-first-menu">
            <span>소속 동호회</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            소속 동호회
            </v-tooltip>
          </button>
          <ul class="dep2">
            <li>
              <button type="button" class="single-menu">
                <span>동호회 명 동호회 명 동호회 명 동호회 명 동호회 명 동호회 명 동호회 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                동호회 명 동호회 명 동호회 명 동호회 명 동호회 명 동호회 명 동호회 명
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu sysop">
                <span>동호회 명</span>
                <em>운영</em>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                동호회 명
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu sysop">
                <span>비공식 동호회</span>
                <em>운영</em>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                동호회 명
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>동호회 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                동호회 명
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>동호회 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                동호회 명
                </v-tooltip>
              </button>
            </li>
          </ul>
        </li>
      </ul>
      <div class="left-navi_foot club">
        <ul class="left-navi-list">
          <li class="favor active">
            <button type="button" class="favor-menu">
              <span>즐겨찾기 게시판</span>
              <v-tooltip
                activator="parent"
                anchor="end"
                content-class="end tooltip-w mw-200"
              >
              즐겨찾기 게시판
              </v-tooltip>
            </button>
            <button type="button" class="favor-set">설정</button>
            <!-- <ul class="dep2">
              <li>
                <button type="button" class="single-menu">
                  <span>게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인</span>
                  <v-tooltip
                    activator="parent"
                    anchor="end"
                    content-class="end tooltip-w mw-200"
                  >
                  게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인
                  </v-tooltip>
                </button>
              </li>
              <li>
                <button type="button">
                  <span class="btn-arrow">화살표 영역</span>
                  <span>공지사항 <em class="ico-new">NEW</em></span>
                  <v-tooltip
                    activator="parent"
                    anchor="end"
                    content-class="end tooltip-w mw-200"
                  >
                  공지사항
                  </v-tooltip>
                </button>
              </li>
              <li>
                <button type="button">
                  <span class="btn-arrow">화살표 영역</span>
                  <span>업무지원 Desk</span>
                  <v-tooltip
                    activator="parent"
                    anchor="end"
                    content-class="end tooltip-w mw-200"
                  >
                  공지사항
                  </v-tooltip>
                </button>
              </li>
            </ul> -->
          </li>
        </ul>
        <button type="button" class="favor-page">
          <span>즐겨찾기 게시글</span>
          <v-tooltip
            activator="parent"
            anchor="end"
            content-class="end tooltip-w mw-200"
          >
          즐겨찾기 게시글
          </v-tooltip>
        </button>
        <button type="button" class="temporary">
          <span>임시저장함</span>
          <v-tooltip
            activator="parent"
            anchor="end"
            content-class="end tooltip-w mw-200"
          >
          임시저장함
          </v-tooltip>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
  data() {
    return {
      isActive: true,

    }
  },
  methods:{
   
  },
})
</script>