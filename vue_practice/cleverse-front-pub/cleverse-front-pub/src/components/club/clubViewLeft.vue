<template>
  <div class="layout-left club">
    <div class="left-navi">
      <span class="left-navi-official">공식</span>
      <!-- <span class="left-navi-official none">비공식</span> -->
      <h2 class="left-navi-tit">한화 시스템 언더그라운드 밴드</h2>
      <button type="button" class="btn_bookmark" @click="isActive=!isActive" :class="{'active':isActive}">즐겨찾기</button>
      
      <div class="club-info">
        <dl>
          <dt>운영회장</dt>
          <dd>홍길동 차장</dd>
          <dt>개설일</dt>
          <dd>2022.09.06</dd>
          <dt>회원수</dt>
          <dd>100명</dd>
        </dl>
        <div class="btn-set">
          <button type="button" class="btn sm line-type2 member">회원보기</button>
          <div class="dropdown-type1 add-file">
            <dropdown-menu3
              :propisSlotMode="false"
              :propSelectText="selectAddFileText"
              :propItem="dropItem"
              :propClass="'task-log'"
              :propDropSelectItem="dropSelectItem.itemId"
              @selected="selectValue"
              :propLocation="'end top'"
            />
          </div>
        </div>
      </div>
      <div class="sub-tit">
        김한화님은 <em>운영회장</em>입니다.
      </div>
      <button type="button" class="btn md w100p">동호회 탈퇴하기</button>
      <ul class="left-navi-list">
        <li class="menu-01">
          <button type="button" class="group-first-menu">
            <span>동호회 홈화면 가기</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            동호회 홈화면 가기
            </v-tooltip>
          </button>
        </li>
        <li class="menu-02 active">
          <button type="button" class="group-first-menu">
            <span>게시판 1</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            게시판 1
            </v-tooltip>
          </button>
          <ul class="dep2">
            <li>
              <button type="button">
                <span>게시판 명이 보여집니다. 게시판 명이 보여집니다.</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                게시판 명이 보여집니다. 게시판 명이 보여집니다.
                </v-tooltip>
              </button>
            </li>
          </ul>
        </li>
        <li class="menu-03 active">
          <button type="button" class="group-first-menu">
            <span>게시판 2</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            게시판 2
            </v-tooltip>
          </button>
          <ul class="dep2">
            <li>
              <button type="button">
                <span>게시판 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                게시판 명
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button">
                <span>게시판 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                게시판 명
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button">
                <span>게시판 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                게시판 명
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button">
                <span>게시판 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                게시판 명
                </v-tooltip>
              </button>
            </li>
          </ul>
        </li>
        <li class="menu-04">
          <button type="button" class="group-first-menu">
            <span>게시판 3</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            게시판 3
            </v-tooltip>
          </button>
          <ul class="dep2">
            <li>
              <button type="button">
                <span>게시판 명</span>
                <v-tooltip
                  activator="parent"
                  anchor="end"
                  content-class="end tooltip-w mw-200"
                >
                게시판 명
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
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

export default defineComponent({
  components: {
    dropdownMenu3,
  },
  data() {
    return {
      isActive: false,
      selectAddFileText: '동호회관리',
      dropSelectItem:{
        itemId: 'selected1'
      },
      dropItem: [
        { title: '기본정보관리', itemId: 'selected1'  },
        { title: '멤버관리', itemId: 'selected2'  },
        { title: '동호회 폐쇄', itemId: 'selected3'  },
      ],
    }
  },
  methods:{
    selectValue(val:any){
      this.dropSelectItem.itemId = val.selected
    },
  },
})
</script>