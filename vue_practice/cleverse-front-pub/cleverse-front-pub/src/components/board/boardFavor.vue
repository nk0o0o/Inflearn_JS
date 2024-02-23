<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <boardLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>즐겨찾기</h2>
            <div class="flex">
              <div class="board_style">
                <div class="style1"><input type="radio" name="style" id="style1" checked><label for="style1">스타일1</label></div>
                <div class="style2"><input type="radio" name="style" id="style2"><label for="style2">스타일2</label></div>
              </div>
            </div>
          </div>
          <div class="board-common_header_foot">
            <div class="board-common_search">
              <div>
                <select-view
                  :propOptionList="optionLsit"
                  :propPlaceholder="'제목'"
                  :propClass="'type1'"
                  >
                </select-view>
              </div>
              <div>
                <form action="">
                  <div class="input-box search-type4">
                    <input type="text" required placeholder="내용을 입력해주세요.">
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                    <div class="list">
                      <ul>
                        <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                        <li>Digital C.P.C. 기반 구축 </li>
                        <li>Digital Infra 구축</li>
                        <li>Digital Infra 구축</li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div class="drop">
                <div class="dropdown-type1">
                  <dropdown-menu
                    :propItem="dropItem"
                  ></dropdown-menu>
                </div>
              </div>
            </div>
          </div>
          <!-- //header -->
          <!-- board -->
          <div class="board-data favor">
            <div class="tab-type3">
                <ul class="tab-menu">
                  <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
                    <button type="button" @click="currentTab = index">{{tab}}</button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div v-show="currentTab == 0">
                    <div class="tbl type2" v-if="!nodata">
                      <table-lite
                        :is-slot-mode="true"
                        :columns="columns"
                        :rows="rows"
                        :rowClasses="rowClasses"
                        :total="100"
                        :messages="messages"
                      >
                        <template v-slot:writer="data">
                          <div class="dropdown-type2 tooltip text">
                            <dropdown-menu2
                              :propName="data.value.writer"
                              :propItem="dropItem2"
                              :propClass="'dropdown-type2-list type3'"
                            >
                            </dropdown-menu2>
                          </div>
                        </template>
                      </table-lite>
                    </div>
                    <p class="nodata" v-if="nodata">검색결과가 없습니다.</p>
                  </div>
                  <div v-show="currentTab == 1">

                  </div>
                </div>
            </div>
          </div>
          <!-- //board -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import boardLeft from "./boardLeft.vue"
import selectView from "@/components/selectView.vue"
import TableLite from "vue3-table-lite/ts";
import dropdownMenu from "@/components/dropdownMenu.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

export default defineComponent({
  components: {
    boardLeft,
    selectView,
    TableLite,
    dropdownMenu,
    dropdownMenu2,
  },
  data() {
    return {
      //nodata: false,
      currentTab: 0,
      tabsType: [ '회사 게시판', '그룹 게시판' ],
      optionLsit: [
        { value: '전체', label: '전체' },
        { value: '게시판', label: '게시판' },
        { value: '제목', label: '제목' },
        { value: '작성자', label: '작성자' },
        { value: '내용', label: '내용' },
      ],
      dropItem: [
        { title: '전체', isToggle: false },
        { title: '읽지않음', isToggle: false },
        { title: '제목', isToggle: true, isActive: false },
        { title: '첨부', isToggle: true, isActive: false },
        { title: '작성자', isToggle: true, isActive: false },
        { title: '등록일', isToggle: true, isActive: false },
        { title: '종료일', isToggle: true, isActive: false },
        { title: '조회', isToggle: true, isActive: false },
      ],
      columns: [
        {
          label: '게시판',
          field: 'kind',
          width: '12%',
          columnClasses: ['kind'],
        },
        {
          label: '첨부',
          field: 'attach',
          width: '7%',
          display: function (row:any): any {
            return (
              `<span class="btn-attach">첨부</span>`
            );
          },
        },
        {
          label: '제목',
          field: 'subject',
          width: '41%',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const newAlarm = row2.newAlarm ? `<em class="ico-alarm">alarm</em>`: ``,
                  newIcon = row2.newIcon ? `<em class="ico-new">NEW</em>`: ``,
                  noticeIcon = row2.noticeIcon ? `<em class="ico-com-noti">회사공지</em>`: ``,
                  subject = row2.subject ? `<a class="txt" href="javascript:void(0)" data-id="${row2.id}">${row2.subject}</a>`: ``
            return (
              `
                <div>
                  ${newAlarm}
                  ${noticeIcon}
                  ${subject}
                  ${newIcon}
                </div>
              `
            );
          },
        },
        {
          label: '작성자',
          field: 'writer',
          width: '12%',
          columnClasses: ['writer'],
        },
        {
          label: '등록일',
          field: 'date',
          width: '18%',
        },
        {
          label: '조회',
          field: 'check',
          width: '10%',
        },
      ],
      rows: [
        {
          id: 0,
          kind: '공지사항',
          subject: '게시판 타이틀 영역1 게시판 타이틀 영역1 게시판 타이틀 영역1 게시판 타이틀 영역1',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newIcon: true,
        },
        {
          id: 1,
          kind: '공지사항',
          subject: '게시판 타이틀 영역2',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
        },
        {
          id: 2,
          kind: '공지사항',
          subject: '게시판 타이틀 영역3',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          trClass: true,
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      rowClasses: (row:any) => {
        if (row.trClass) {
          return ["writed"]; //조건문으로 분기 할 경우
        }
        return ["bbb", "other"];// default로 클래스 추가 하고 싶을 경우
      },
      dropItem2: {
        title: `
          <div class="tooltip-member">
            <div>
              <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
              <p><b>김한화</b> <span class="pos">직위/직책</span></p>
            </div>
            <p class="cp">회사명 <span></span> 소속조직명</p>
            <p class="phone">010-1234-2336</p>
            <p class="email">mail@hanwha.com</p>
          </div>
        `,
      },
    };
  },
  methods: {
  },
  computed: {

  }
})
</script>