<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <askLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>문의내역</h2>
          </div>
          <div class="board-common_header_foot">
            <div class="board-common_search flex jc-sb fl-none">
              <div>
                <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'한화솔루션 쿠셸 부문'"
                    :propClass="'type1'"
                    >
                </select-view>
              </div>
              <div class="flex">
                <div>
                  <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'제목'"
                      :propClass="'type1'"
                      >
                  </select-view>
                </div>
                <form action="">
                  <div class="input-box search-type4">
                    <input type="text" required placeholder="검색어를 입력하세요.">
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
            </div>
          </div>
          <!-- //header -->
          <!-- list -->
          <div class="tbl type2">
            <table-lite
              :columns="columns"
              :rows="rows"
              :total="100"
              :messages="messages"/>
          </div>
          <!-- //list -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import askLeft from "./askLeft.vue"
import selectView from "@/components/selectView.vue"
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    askLeft,
    selectView,
    TableLite,
  },
  data() {
    return {
      isActive: false,
      nodata: true,
      page: 1,
      optionLsit: [
        { value: '제목', label: '제목' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      columns: [
        {
          label: '번호',
          field: 'num',
          width: '14%',
          sortable: true,
        },
        {
          label: '제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<a class="txt flex-1" href="javascript:void(0)" data-id="${row2.id}">${row2.subject}</a>`: ``,
                  IconQ = row2.IconQ ? `<em class="ico-Q">Q</em>`: ``,
                  IconA = row2.IconA ? `<em class="ico-A">A</em>`: ``
            return (
              `
                <div>
                  ${IconQ}
                  ${IconA}
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '등록일',
          field: 'date',
          width: '18%',
          sortable: true,
        },
      ],
      rows: [
        {
          num: '100',
          subject: '사서함을 임시적으로 microsoft exchange servr 이동했습니다. 서비스 최대 글자수 60자 노출 이후 서비스 최대 글자수 60자 노출 이후',
          date: '2022.02.24',
          IconQ: true,
        },
        {
          num: '100',
          subject: '외부메일 발송시 라틴메일 받음_0303_H',
          date: '2022.02.24',
          IconA: true,
        },
        {
          num: '100',
          subject: '아웃룩 2개의 계정 연결 시 기본값으로 설정 오류_0105_K',
          date: '2022.02.24',
          IconQ: true,
        },
        {
          num: '100',
          subject: '외부메일 발송시 라틴메일 받음_0303_H',
          date: '2022.02.24',
          IconA: true,
        },
        {
          num: '100',
          subject: '아웃룩 2개의 계정 연결 시 기본값으로 설정 오류_0105_K',
          date: '2022.02.24',
          IconQ: true,
        },
        {
          num: '100',
          subject: '외부메일 발송시 라틴메일 받음_0303_H',
          date: '2022.02.24',
          IconA: true,
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
  },
  computed: {
  }
})
</script>