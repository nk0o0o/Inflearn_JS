<template>
  <div class="layout-left">
    <div class="left-navi">
      <h2 class="left-navi-tit">지원업무</h2>
      <ul class="left-navi-list support">
        <li class="menu-01 active none-list">
          <button type="button" class="group-first-menu">
            <span>임직원 서비스</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            임직원 서비스
            </v-tooltip>
          </button>
        </li>
        <li class="menu-02 active">
          <button type="button" class="group-first-menu">
            <span>업무 지원</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            업무 지원
            </v-tooltip>
          </button>
          <ul class="dep2">
            <li>
              <button type="button" class="single-menu">
                <span>업무지원 Desk</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                업무지원 Desk
                </v-tooltip>
              </button>
            </li>
            <li class="active">
              <button type="button">
                <span>VDI 업무지원</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                VDI 업무지원
                </v-tooltip>
              </button>
              <ul class="dep3">
                <li>
                  <button type="button" class="single-menu">
                    <span>공지사항</span>
                    <v-tooltip
                      activator="parent"
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    공지사항
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type="button" class="single-menu">
                    <span>Q&A</span>
                    <v-tooltip
                      activator="parent"
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    Q&A
                    </v-tooltip>
                  </button>
                </li>
              </ul>
            </li>
            <li class="active">
              <button type="button">
                <span>업무공유시스템</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                업무공유시스템
                </v-tooltip>
              </button>
              <ul class="dep3">
                <li>
                  <button type="button" class="single-menu">
                    <span>공지사항</span>
                    <v-tooltip
                      activator="parent"
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    공지사항
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type="button" class="single-menu">
                    <span>Q&A</span>
                    <v-tooltip
                      activator="parent"
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    Q&A
                    </v-tooltip>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="menu-03 active">
          <button type="button" class="group-first-menu">
            <span>지원부서 R&R</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            지원부서 R&R
            </v-tooltip>
          </button>
          <div class="team-wrap">
            <button type="button"><span>회계팀(ICT)</span></button>
            <button type="button"><span>구매 3팀</span></button>
            <button type="button"><span>법무팀</span></button>
            <button type="button"><span>인사팀</span></button>
            <button type="button"><span>부서명 최대 한줄까지 표시 합니다 부서명 최대 한줄까지</span></button>
            <!-- <p>등록된 부서가 없습니다.</p> -->
          </div>
        </li>
        <li class="menu-04 active">
          <ul class="dep2">
            <li>
              <button type="button" class="single-menu">
                <span>시설물 예약</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                시설물 예약
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>설문</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                설문
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>사이버신문고</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                사이버신문고
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>명함신청</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                명함신청
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>SMS</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                SMS
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>심리상담서비스 심리상담 서비스심리상담서비스 최대 두줄...</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                심리상담서비스 심리상담 서비스심리상담서비스 최대 두줄...
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>인물정보</span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                인물정보
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
      <button type="button" class="bnr-cs">고객센터 이용하기</button>
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