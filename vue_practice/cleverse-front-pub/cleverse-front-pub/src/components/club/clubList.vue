<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <clubViewLeft/>
      <div class="layout-contents club-sub">
        <!-- visual -->
        <div class="club-visual">
          <p>영화/연극/뮤지컬/콘서트/전시/여행/체험 등 다양한 공연 및 행사가 준비되어 있는<br>종합엔터테인먼트 문화동호회, 브로컬리입니다.</p>
          <img :src="require('@/assets/imgs/news-thumbnail-03.png')" alt="동호회이미지">
        </div>
        <!-- //visual -->
        
        <!-- board -->
        <div class="board-common_wrap">
          <div class="board-data favor">
            <div class="tab-type3">
                <ul class="tab-menu">
                  <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
                    <button type="button" @click="tabClick(index)">
                      {{tab.title}}
                    </button>
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
                              :propModalValue="propModalValue"
                              :propLocation="'bottom start'"
                              :propName="data.value.writer"
                              :propItem="dropItem"
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
                              :propModalValue="propModalValue"
                              :propLocation="'bottom start'"
                              :propName="data.value.writer"
                              :propItem="dropItem"
                              :propClass="'dropdown-type2-list type3'"
                            >
                            </dropdown-menu2>
                          </div>
                        </template>
                      </table-lite>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- //board -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import clubViewLeft from "./clubViewLeft.vue"
import TableLite from "vue3-table-lite/ts";
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

export default defineComponent({
  components: {
    clubViewLeft,
    TableLite,
    dropdownMenu2,
  },
  data() {
    return {
      propModalValue: false,
      nodata: false,
      page: 1,
      currentTab: 0,
      tabsType: [
        { title: '최신 공지' },
        { title: '최신 게시글' },
      ],
      optionLsit1: [
        { value: '동호회', label: '동호회' },
        { value: '소개글', label: '소개글' },
        { value: '운영회장', label: '운영회장' },
        { value: '개설일', label: '개설일' },
      ],
      columns: [
        {
          label: "게시판",
          field: "kind",
          width: "12%",
          columnClasses: ['kind'],
        },
        {
          label: "첨부",
          field: "attach",
          width: "7%",
          display: function (row:any): any {
            return (
              `<span class="btn-attach">첨부</span>`
            );
          },
        },
        {
          label: "제목",
          field: "subject",
          width: "41%",
          columnClasses: ['subject'],
          display: function (row:any): any {
            const newAlarm = row.newAlarm ? `<em class="ico-alarm">alarm</em>`: ``,
                  newIcon = row.newIcon ? `<em class="ico-new">NEW</em>`: ``,
                  urgency = row.urgency ? `<em class="ico-urgency">긴급</em>`: ``,
                  reply2 = row.reply2 ? `<em class="txt-reply">Re.</em>`: ``;
            return (
              `
                <div>
                  ${reply2}
                  ${newAlarm}
                  ${urgency}
                  <a href="javascript:void(0)" class="txt" data-id="${row.id}">${row.subject}</a>
                  ${newIcon}
                </div>
              `
            );
          },
        },
        {
          label: "작성자",
          field: "writer",
          width: "12%",
          columnClasses: ['writer'],
        },
        {
          label: "등록일",
          field: "date",
          width: "20%",
        },
        {
          label: "조회",
          field: "check",
          width: "8%",
        },
      ],
      rows: [
        {
          id: 0,
          kind: '공지사항',
          subject: '게시판 타이틀 영역1',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newIcon: true,
          //newAlarm: true,
          urgency: true,
        },
        {
          id: 1,
          kind: '공지사항',
          subject: '게시판 타이틀 영역2',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newIcon: false,
          newAlarm: false,
          reply2: true,
        },
        {
          id: 2,
          kind: '공지사항',
          subject: '게시판 타이틀 영역3',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newIcon: false,
          newAlarm: false,
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
      dropItem: {
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
    tabClick(idx:number){
      this.propModalValue=false
      setTimeout(() => {
        this.currentTab = idx
      }, 300);
    },
  },
  computed: {

  }
})
</script>