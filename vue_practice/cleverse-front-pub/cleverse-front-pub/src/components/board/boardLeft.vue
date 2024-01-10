<template>
  <div class='layout-left'>
    <div class='left-navi'>
      <h2 class='left-navi-tit'>게시판</h2>
      <ul class='left-navi-list'>
        <li class='group'>
          <button type='button' class='group-first-menu'>
            <span>그룹 게시판</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            그룹 게시판
            </v-tooltip>
          </button>
        </li>
        <li class='company active'>
          <button type='button' class='group-first-menu'>
            <span>회사 게시판</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            회사 게시판
            </v-tooltip>
          </button>
          <ul class='dep2'>
            <li>
              <button type='button' class='single-menu active'>
                <span>게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>공지사항 <em class='ico-new'>NEW</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                공지사항
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu link'>
                <span>신HR제도 Q&amp;A</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                신HR제도 Q&amp;A
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련 사옥이전관련
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>업무지원 Desk</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                업무지원 Desk
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>VDI 업무지원</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                VDI 업무지원
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>업무공유시스템</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                업무공유시스템
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>내부거래 심의위원회</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                내부거래 심의위원회
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>H-Tech</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                H-Tech
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>내부거래 심의위원회</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                내부거래 심의위원회
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>구매</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                구매
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>회사규정 및 절차</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                회사규정 및 절차
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button'>
                <span class="btn-arrow">화살표 영역</span>
                <span>홍보</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                홍보
                </v-tooltip>
              </button>
            </li>
            <li class='active'>
              <button type='button' class='active'>
                <span class="btn-arrow">화살표 영역</span>
                <span>한화시스템/ICT 길잡이</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                한화시스템/ICT 길잡이
                </v-tooltip>
              </button>
              <ul class='dep3'>
                <li>
                  <button type='button' class='single-menu'>
                    <span class="btn-arrow">화살표 영역</span>
                    <span>학습조직</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    학습조직
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button'>
                    <span class="btn-arrow">화살표 영역</span>
                    <span>인사총무</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    인사총무
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button'>
                    <span class="btn-arrow">화살표 영역</span>
                    <span>재경</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    재경
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button'>
                    <span class="btn-arrow">화살표 영역</span>
                    <span>품질</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    품질
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button'>
                    <span class="btn-arrow">화살표 영역</span>
                    <span>정보보호국</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    정보보호국
                    </v-tooltip>
                  </button>
                </li>
                <li class='active'>
                  <button type='button'>
                    <span class="btn-arrow">화살표 영역</span>
                    <span>데이터센터 <em class='ico-new'>NEW</em></span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    데이터센터
                    </v-tooltip>
                  </button>
                  <ul class='dep4'>
                    <li>
                      <button type='button' class='single-menu'>
                        <span>디자인</span>
                        <v-tooltip
                          activator='parent'
                          anchor='end'
                          content-class='end tooltip-w mw-200'
                        >
                        디자인
                        </v-tooltip>
                      </button>
                    </li>
                    <li class='active'>
                      <button type='button'>
                        <span class="btn-arrow">화살표 영역</span>
                        <span>소프트웨어동향</span>
                        <v-tooltip
                          activator='parent'
                          anchor='end'
                          content-class='end tooltip-w mw-200'
                        >
                        소프트웨어동향
                        </v-tooltip>
                      </button>
                      <ul class='dep5'>
                        <li>
                          <button type='button' class='single-menu'>
                            <span>5depth</span>
                            <v-tooltip
                              activator='parent'
                              anchor='end'
                              content-class='end tooltip-w mw-200'
                            >
                            5depth
                           </v-tooltip>
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <button type='button' class='single-menu'>
                    <span>산업안전보건</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                      content-class='end tooltip-w mw-200'
                    >
                    산업안전보건
                    </v-tooltip>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <div class='left-navi_foot'>
        <ul class='left-navi-list'>
          <li class='favor active'>
            <button type='button' class='favor-menu'>
              <span>즐겨찾기 게시판</span>
              <v-tooltip
                activator='parent'
                anchor='end'
                content-class='end tooltip-w mw-200'
              >
              즐겨찾기 게시판
              </v-tooltip>
            </button>
            <button type='button' class="favor-set">설정</button>
            <ul class='dep2'>
              <li>
                <button type='button' class='single-menu'>
                  <span>게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인</span>
                  <v-tooltip
                    activator='parent'
                    anchor='end'
                    content-class='end tooltip-w mw-200'
                  >
                  게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인게시판 메인
                  </v-tooltip>
                </button>
              </li>
              <li>
                <button type='button'>
                  <span class="btn-arrow">화살표 영역</span>
                  <span>공지사항 <em class='ico-new'>NEW</em></span>
                  <v-tooltip
                    activator='parent'
                    anchor='end'
                    content-class='end tooltip-w mw-200'
                  >
                  공지사항
                  </v-tooltip>
                </button>
              </li>
              <li>
                <button type='button'>
                  <span class="btn-arrow">화살표 영역</span>
                  <span>업무지원 Desk</span>
                  <v-tooltip
                    activator='parent'
                    anchor='end'
                    content-class='end tooltip-w mw-200'
                  >
                  공지사항
                  </v-tooltip>
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <button type='button' class='feed'>
          <span>즐겨찾기 게시글</span>
          <v-tooltip
            activator='parent'
            anchor='end'
            content-class='end tooltip-w mw-200'
          >
          즐겨찾기 게시글
          </v-tooltip>
        </button>
        <button type='button' class='temporary'>
          <span>임시저장함</span>
          <v-tooltip
            activator='parent'
            anchor='end'
            content-class='end tooltip-w mw-200'
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

})
</script>
