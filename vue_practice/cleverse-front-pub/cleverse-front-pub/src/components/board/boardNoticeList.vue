<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <boardLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>
              공지사항
              <button type="button" class="btn_bookmark" @click="follow=!follow" :class="{'active':follow}"><i class="blind">{{follow?'구독중':'구독'}}</i></button>
              <button type="button" class="btn_setting"><i class="blind">설정</i></button>
            </h2>
            <div class="flex">
              <!-- <button type="button" class="btn sm line-type2 mg-r10" :class="{'follow-active':follow}" @click="follow=!follow">{{follow?'구독중':'구독'}}</button> -->
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
                    zIndex="100"
                  />
                </div>
              </div>
              <div class="btn_list">
                <button type="button" class="btn md line-type1">승인관리</button>
                <button type="button" class="btn md">글쓰기</button>
              </div>
            </div>
            <!-- 등록일 선택 시 -->
            <div class="board-common_search">
              <div>
                <select-view
                  :propOptionList='optionLsit'
                  :propPlaceholder='`등록일`'
                  :propValue="`등록일`"
                  :propClass='`type1`'
                  >
                </select-view>
              </div>
              <div class="date line-type">
                <Datepicker
                  v-model="rangeDate"
                  range
                  :format="rangeFormat"
                  :enableTimePicker="false"
                  locale="ko"
                  autoApply
                  weekStart="0"
                  placeholder="시작일 선택 &nbsp;- &nbsp; 종료일 선택"
                  />
                  <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
              </div>
              <div class="drop">
                <div class="dropdown-type1">
                  <dropdown-menu
                    :propItem="dropItem"
                    zIndex="100"
                  />
                </div>
              </div>
              <div class="btn_list">
                <button type="button" class="btn md line-type1">승인관리</button>
                <button type="button" class="btn md">글쓰기</button>
              </div>
            </div>
          </div>
          <!-- //header -->
          <!-- notice list -->
          <div class="tbl type2">
            <table-lite
              :is-slot-mode="true"
              :columns="columns2"
              :rows="rows2"
              :total="100"
              :messages="messages"
            >
              <template v-slot:subject="data">
                <em class="ico-reply" v-if="data.value.reply">reply</em>
                <em class="ico-alarm" v-if="data.value.newAlarm">alarm</em>
                <em class="ico-urgency" v-if="data.value.urgency">긴급</em>
                <em class="ico-com-noti" v-if="data.value.noticeIcon">회사공지</em>
                <a class="txt" v-if="data.value.subject" href="javascript:void(0)" :data-id="data.value.id">{{data.value.subject}}</a>
                <em class="txt-num" v-if="data.value.replyNum">[{{data.value.replyNum}}]</em>
                <em class="ico-new" v-if="data.value.newIcon">NEW</em>
              </template>
              <template v-slot:writer="data">
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="data.value.writer"
                    :propItem="dropItem2"
                    :propClass="'dropdown-type2-list type3'"
                    propLocation="bottom start"
                  >
                  </dropdown-menu2>
                </div>
              </template>
            </table-lite>
          </div>
          <Paging
            v-model="page"
            :records="500"
            :per-page="25"
            :options="{hideCount: true}"
            @paginate="myCallback"
          />
          <!-- //notice list -->
        </div>


      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import boardLeft from "./boardLeft.vue"
import selectView from "@/components/selectView.vue"
import dropdownMenu from "@/components/dropdownMenu.vue"
import TableLite from "vue3-table-lite/ts"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    boardLeft,
    selectView,
    dropdownMenu,
    TableLite,
    dropdownMenu2,
    Datepicker,
  },
  data() {
    return {
      rangeDate: [new Date(),new Date()],
      follow: false,
      isActive: false,
      nodata: true,
      page: 1,
      optionLsit: [
        { value: '전체', label: '전체' },
        { value: '게시판', label: '게시판' },
        { value: '제목', label: '제목' },
        { value: '작성자', label: '작성자' },
        { value: '내용', label: '내용' },
      ],
      //menu: false,
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
      columns2: [
        {
          label: '',
          field: 'favor',
          width: '40px',
          headerClasses: ['favor'],
          display: function (row2:any): any {
            const favorIcon = row2.favorIcon ? '<span class="ico-favor"><em class="blind">Good</em></span>': row2.favor
            return ( `${favorIcon}` );
          },
        },
        {
          label: '첨부',
          field: 'attach',
          width: "40px",
          display: function (row2:any): any {
            return (
              `<span class="btn-attach">첨부</span>`
            );
          },
        },
        {
          label: '번호',
          field: 'number',
          width: '60px',
          display: function (row2:any): any {
            const flagIcon = row2.flagIcon ? '<span class="ico-flag">flag</span>': row2.number
            return ( `${flagIcon}` );
          },
        },
        {
          label: '제목',
          field: 'subject',
          columnClasses: ['subject'],
          // display: function (row2:any): any {
          //   const newAlarm = row2.newAlarm ? `<em class="ico-alarm">alarm</em>`: ``,
          //         newIcon = row2.newIcon ? `<em class="ico-new">NEW</em>`: ``,
          //         noticeIcon = row2.noticeIcon ? `<em class="ico-com-noti">회사공지</em>`: ``,
          //         replyNum = row2.replyNum ? `<em class="txt-num">[${row2.replyNum}]</em>`: ``,
          //         subject = row2.subject ? `<a class="txt" href="javascript:void(0)" data-id="${row2.id}">${row2.subject}</a>`: ``
          //   return (
          //     `
          //       <div>
          //         ${newAlarm}
          //         ${noticeIcon}
          //         ${subject}
          //         ${newIcon}
          //       </div>
          //     `
          //   );
          // },
        },
        {
          label: '작성자',
          field: 'writer',
          width: '85px',
          columnClasses: ['writer'],
        },
        {
          label: '등록일',
          field: 'startDate',
          width: '85px',
          columnClasses: ['registration-date'],
        },
        {
          label: '종료일',
          field: 'endDate',
          width: '85px',
          columnClasses: ['end-date'],
        },
        {
          label: '분류',
          field: 'classification',
          width: '105px',
          columnClasses: ['classific'],
          display: function (row2:any): any {
            var arr = row2.classification.split(',');
            var data = '<ul class="txt-classific">';
            for(let i=0; i<arr.length; i++) data += `<li>${arr[i]}</li>`;
            data += '</ul>';
            return (
              `
                ${data}
              `
            );
          },
        },
        {
          label: '조회',
          field: 'check',
          width: '60px',
          columnClasses: ['hit'],
        },
      ],
      rows2: [
        {
          id: 0,
          favor: '',
          number: '',
          subject: '게시판 타이틀 영역1 게시판 타이틀 영역1 게시판 타이틀 영역1 게시판 타이틀 영역1',
          replyNum: 590,
          writer: '작성자명',
          startDate: '2022.02.22 13:00',
          endDate: '2022.02.22',
          classification: '자격취득지원내용',
          check: '432',
          //newAlarm: true,
          urgency: true,
          flagIcon: true,
          newIcon: true,
          favorIcon: true,
          trClass: true,
        },
        {
          id: 1,
          favor: '',
          number: 23,
          reply: true,
          subject: '게시판 타이틀 영역2',
          replyNum: 590,
          writer: 'James',
          startDate: '2022.02.22 13:00',
          endDate: '2022.02.22',
          classification: '자격취득지원내용',
          check: '432',
          trClass: true,
        },
        {
          id: 2,
          favor: '',
          number: 3,
          subject: '게시판 타이틀 영역3',
          writer: '작성자명',
          startDate: '2022.02.22 13:00',
          endDate: '2022.02.22',
          classification: '분류 1내용 출력 합니다, 분류 2내용 출력, 분류 3내용 출력',
          check: '432',
          noticeIcon: true,
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
    };
  },
  methods: {
    rangeFormat(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();

      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();

      return `${yearStart}.${monthStart}.${dayStart} ~ ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  },
})
</script>