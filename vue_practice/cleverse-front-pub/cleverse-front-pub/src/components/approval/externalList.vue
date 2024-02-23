<template>
  <div class="layout-wrap external">
    <div class="layout-body">
      <externalLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- 진행중문서 -->
          <!-- header -->
          <div class="board-common_header">
            <h2>진행중문서</h2>
          </div>
          <div class="board-common_header_foot">
            <!-- form -->
            <div class="board-header_data">
              <div class="row flex jc-sb">
                <button type="button" class="btn sm">날인</button>
                <div class="form">
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type3`'>
                  </select-view>
                  <div class="input-box type3">
                      <input type="text" required placeholder="검색어를 입력하세요.">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                  <button type="button" class="btn sm">검색</button>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- list -->
          <div class="board-data favor">
            <div>
              <div class="tbl type2" v-if="!nodata">
                <table-lite
                  :is-slot-mode='true'
                  :has-checkbox="true"
                  :columns='columns'
                  :rows='rows'
                  :total='100'
                  :messages='messages'>
                  <template v-slot:info="data">
                    {{data.value.info}}
                    <button type="button" class="btn sm line-type2">발송정보요청</button>
                  </template>
                </table-lite>
              </div>
              <p class="nodata" v-if="nodata">등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //list -->

          <!-- 완료된문서 -->
          <!-- header -->
          <div class="board-common_header">
            <h2>완료된문서</h2>
          </div>
          <div class="board-common_header_foot">
            <!-- form -->
            <div class="board-header_data">
              <div class="row flex jc-e">
                <div class="form">
                  <select-view
                    :propOptionList='optionLsit2'
                    :propPlaceholder='`2015년~현재`'
                    :propClass='`type3`'>
                  </select-view>
                  <select-view
                    :propOptionList='optionLsit3'
                    :propPlaceholder='`발신일`'
                    :propClass='`type3`'>
                  </select-view>
                  <div class="date">
                    <Datepicker
                      v-model="rangeDate"
                      range
                      :format="rangeFormat"
                      :enableTimePicker="false"
                      locale="ko"
                      autoApply
                      weekStart="0"
                      placeholder="시작일 선택 - 종료일 선택"
                      />
                  </div>
                  <button type="button" class="btn sm">검색</button>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- list -->
          <div class="board-data favor">
            <div>
              <div class="tbl type2" v-if="!nodata">
                <table-lite
                  :is-slot-mode='true'
                  :columns='columns2'
                  :rows='rows2'
                  :total='100'
                  :messages='messages'>
                  <template v-slot:info="data">
                    {{data.value.info}}
                    <button type="button" class="btn sm line-type2">발송정보요청</button>
                  </template>
                </table-lite>
              </div>
              <p class="nodata" v-if="nodata">등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //list -->

          <!-- 반려된문서 -->
          <!-- header -->
          <div class="board-common_header">
            <h2>반려된문서</h2>
          </div>
          <div class="board-common_header_foot">
            <!-- form -->
            <div class="board-header_data">
              <div class="row flex jc-e">
                <div class="form">
                  <select-view
                    :propOptionList='optionLsit4'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type3`'>
                  </select-view>
                  <div class="input-box type3">
                      <input type="text" required placeholder="검색어를 입력하세요.">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                  <button type="button" class="btn sm">검색</button>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- list -->
          <div class="board-data favor">
            <div>
              <div class="tbl type2" v-if="!nodata">
                <table-lite
                  :is-slot-mode='true'
                  :columns='columns3'
                  :rows='rows3'
                  :total='100'
                  :messages='messages'>
                  <template v-slot:date2="data">
                    <div class="tc">
                      {{data.value.date2}}
                    </div>
                    <button type="button" class="ico-comment mg-l5" v-if="data.value.date2">첨언</button>
                  </template>
                </table-lite>
              </div>
              <p class="nodata" v-if="nodata">등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //list -->

          <!-- 대외발신함 -->
          <!-- header -->
          <div class="board-common_header">
            <h2>대외발신함</h2>
          </div>
          <div class="board-common_header_foot">
            <!-- form -->
            <div class="board-header_data">
              <div class="row flex jc-sb">
                <button type="button" class="btn sm">다운로드</button>
                <div class="form">
                  <select-view
                    :propOptionList='optionLsit2'
                    :propPlaceholder='`2015년~현재`'
                    :propClass='`type3`'>
                  </select-view>
                  <select-view
                    :propOptionList='optionLsit4'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type3`'>
                  </select-view>
                  <div class="input-box type3">
                    <input type="text" required placeholder="검색어를 입력하세요.">
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                  <button type="button" class="btn sm">검색</button>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- list -->
          <div class="board-data favor">
            <div>
              <div class="tbl type2" v-if="!nodata">
                <table-lite
                  :is-slot-mode='true'
                  :columns='columns4'
                  :rows='rows4'
                  :total='100'
                  :messages='messages'>
                  <template v-slot:info="data">
                    {{data.value.info}}
                    <button type="button" class="btn sm line-type2">발송정보요청</button>
                  </template>
                </table-lite>
              </div>
              <p class="nodata" v-if="nodata">등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //list -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import externalLeft from "./externalLeft.vue"
import selectView from "@/components/selectView.vue"
import TableLite from "vue3-table-lite/ts";
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    externalLeft,
    selectView,
    TableLite,
    Datepicker,
  },
  data() {
    return {
      rangeDate: [new Date(),new Date()],
      isActive: false,
      nodata: false,
      page: 1,
      optionLsit: [
        { value: '제목', label: '제목' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit2: [
        { value: '제목', label: '제목' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit3: [
        { value: '제목', label: '제목' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit4: [
        { value: '제목', label: '제목' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      columns: [
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row:any): any {
            const subject = row.subject ? `<span class='txt'>${row.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '발신처',
          field: 'send',
          width: '18%',
          columnClasses: ['tc'],
          display: function (row:any): any {
            const send = row.send ? `<span class='txt'>${row.send}</span>`: ``
            const name = row.name ? `<span class='txt'>${row.name}</span>`: ``
            return (
              `
                <div>${name}</div>
                <div>${send}</div>
              `
            );
          },
        },
        {
          label: '요청일',
          field: 'date',
          width: '10%',
        },
        {
          label: '발신일',
          field: 'date2',
          width: '10%',
        },
        {
          label: '수신처',
          field: 'receive',
          width: '14%',
        },
        {
          label: '발송요청정보',
          field: 'info',
          width: '12%',
        },
      ],
      rows: [
        {
          subject: '문서제목이 입력됩니다. 문서제목이 입력됩니다. 문서제목이 입력됩니다',
          name: '김태경circle',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22 13:00',
          date2: '2022.02.22',
          receive: 'test001',
          info: '',
        },
        {
          subject: '문서제목이 입력됩니다. 문서제목이 입력됩니다. 문서제목이 입력됩니다',
          name: '김태경circle',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22 13:00',
          date2: '2022.02.22',
          receive: 'test001',
          info: '',
        },
      ],
      columns2: [
        {
          label: '문서번호',
          field: 'num',
          width: '17%',
          columnClasses: ['tc'],
          display: function (row:any): any {
            const team = row.team ? `<span class='txt'>${row.team}</span>`: ``
            const number = row.name ? `<span class='txt'>${row.number}</span>`: ``
            return (
              `
                <div>${team}</div>
                <div>${number}</div>
              `
            );
          },
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row:any): any {
            const subject = row.subject ? `<span class='txt'>${row.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '발신처',
          field: 'send',
          width: '17%',
          columnClasses: ['tc'],
          display: function (row:any): any {
            const send = row.send ? `<span class='txt'>${row.send}</span>`: ``
            const name = row.name ? `<span class='txt'>${row.name}</span>`: ``
            return (
              `
                <div>${name}</div>
                <div>${send}</div>
              `
            );
          },
        },
        {
          label: '요청일',
          field: 'date',
          width: '10%',
        },
        {
          label: '발신일',
          field: 'date2',
          width: '10%',
        },
        {
          label: '수신처',
          field: 'receive',
          width: '12%',
        },
        {
          label: '발송요청정보',
          field: 'info',
          width: '11%',
        },
      ],
      rows2: [
        {
          team: 'SharedService 1팀(EP)',
          number: '제 2022-00013',
          subject: '문서제목이 입력됩니다. 문서제목이 입력됩니다. 문서제목이 입력됩니다',
          name: '김태경circle',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22',
          date2: '2022.02.22 13:00',
          receive: 'test001',
          info: '',
        },
        {
          team: 'SharedService 1팀(EP)',
          number: '제 2022-00013',
          subject: '문서제목이 입력됩니다.',
          name: '김태경circle',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22',
          date2: '2022.02.22 13:00',
          receive: 'test001',
          info: '',
        },
      ],
      columns3: [
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '발신처',
          field: 'send',
          width: '18%',
          columnClasses: ['tc'],
          display: function (row:any): any {
            const send = row.send ? `<span class='txt'>${row.send}</span>`: ``
            const name = row.name ? `<span class='txt'>${row.name}</span>`: ``
            return (
              `
                <div>${name}</div>
                <div>${send}</div>
              `
            );
          },
        },
        {
          label: '발신일',
          field: 'date',
          width: '12%',
        },
        {
          label: '반려일',
          field: 'date2',
          width: '12%',
          columnClasses: ['tc'],
        },
        {
          label: '수신처',
          field: 'receive',
          width: '14%',
        },
      ],
      rows3: [
        {
          subject: '문서제목이 입력됩니다. 문서제목이 입력됩니다. 문서제목이 입력됩니다',
          name: '김태경circle',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22',
          date2: '2022.02.22 13:00',
          receive: 'test001',
        },
        {
          subject: '문서제목이 입력됩니다. 문서제목이 입력됩니다. 문서제목이 입력됩니다',
          name: '김한화',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22',
          date2: '2022.02.22 13:00',
          receive: 'test001',
        },
      ],
      columns4: [
        {
          label: '문서번호',
          field: 'num',
          width: '18%',
          columnClasses: ['tc'],
          display: function (row:any): any {
            const team = row.team ? `<span class='txt'>${row.team}</span>`: ``
            const number = row.name ? `<span class='txt'>${row.number}</span>`: ``
            return (
              `
                <div>${team}</div>
                <div>${number}</div>
              `
            );
          },
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row:any): any {
            const subject = row.subject ? `<span class='txt'>${row.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '발신일',
          field: 'date',
          width: '10%',
        },
        {
          label: '발신처',
          field: 'send',
          width: '18%',
          columnClasses: ['tc'],
          display: function (row:any): any {
            const send = row.send ? `<span class='txt'>${row.send}</span>`: ``
            const name = row.name ? `<span class='txt'>${row.name}</span>`: ``
            return (
              `
                <div>${name}</div>
                <div>${send}</div>
              `
            );
          },
        },
        {
          label: '수신처',
          field: 'receive',
          width: '14%',
        },
      ],
      rows4: [
        {
          team: 'SharedService 1팀(EP)',
          number: '제 2022-00013',
          subject: '문서제목이 입력됩니다. 문서제목이 입력됩니다. 문서제목이 입력됩니다',
          name: '김태경circle',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22',
          receive: 'test001',
        },
        {
          team: 'SharedService 1팀(EP)',
          number: '제 2022-00013',
          subject: '문서제목이 입력됩니다.',
          name: '김태경circle',
          send: '(SharedService 1팀(EP)',
          date: '2022.02.22',
          receive: 'test001',
        },
      ],
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: '',
        gotoPageLabel: '',
        noDataAvailable: "No data",
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

      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  },
  computed: {
  }
})
</script>