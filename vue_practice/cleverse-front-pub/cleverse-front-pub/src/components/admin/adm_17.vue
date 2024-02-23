<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>휴지통 관리</h3>
      </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="search">
        <select-view
          :propOptionList="optionLsit3"
          :propClass="'type1'"
          :propCloseOn="true"
          propPlaceholder="제목"
          propValue="제목"
        />
        <div class="input-box search-type5">
            <input type="text" required placeholder="노드명 검색">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
            <div class="list">
                <ul>
                    <li>내 과제/내가 속한 과제 리스트</li>
                    <li>Digital C.P.C. 기반 구축 </li>
                    <li>Digital Infra 구축</li>
                    <li>Digital Infra 구축</li>
                </ul>
            </div>
        </div>
      </div>
    </div>

    <div class="tbl_header">
      <div class="classification">
        <div class="num">분류</div>
        <select-view
          :propOptionList="optionLsit1"
          :propClass="'type1'"
          :propCloseOn="true"
          propPlaceholder="2022"
          propValue="2022"
        />
        <select-view
          :propOptionList="optionLsit2"
          :propClass="'type1'"
          :propCloseOn="true"
          propPlaceholder="그룹게시판1"
          propValue="그룹게시판1"
        />
      </div>
    </div>

    <div class="tbl_header">
      <div class="left">
          <button type="button" class="btn sm line-type1">삭제</button>
          <button type="button" class="btn sm">복원</button>
      </div>
      <div class="right">
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_1" checked>
          <label for="radCont1_1">전체</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_2">
          <label for="radCont1_2">기간만료</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_3">
          <label for="radCont1_3">삭제</label>
        </div>
      </div>
    </div>

    <div class="tbl_header">
      <div class="left">
          <div class="num">총 <b>00</b>건</div>
      </div>
      <div class="right">
        <select-view
          :propOptionList="optionLsit4"
          :propClass="'type1'"
          :propCloseOn="true"
          propPlaceholder="10개"
          propValue="10"
        />
      </div>
    </div>

    <table-lite
      :has-checkbox="true"
      :is-loading="isLoading"
      :columns="columns"
      :rows="rows"
      :total="totalRecordCount"
      :sortable="sortable"
      :messages="messages"
    />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';
import selectView from "@/components/selectView.vue";
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    TableLite,
    selectView
  },
  data () {
    return {
      optionLsit1: [
        { value: '2018', label: '2018' },
        { value: '2019', label: '2019' },
        { value: '2020', label: '2020', disabled: true },
        { value: '2021', label: '2021' },
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' },
        { value: '2025', label: '2025' },
        { value: '2026', label: '2026' },
        { value: '2027', label: '2027' },
        { value: '2028', label: '2028' },
        { value: '2029', label: '2029' },
        { value: '2030', label: '2030' },
        { value: '2031', label: '2031' },
        { value: '2032', label: '2032' },
        { value: '2033', label: '2033' },
        { value: '2034', label: '2034' },
        { value: '2035', label: '2035' },
        { value: '2036', label: '2036' },
        { value: '2037', label: '2037' },
      ],
      optionLsit2: [
        { value: '그룹게시판1', label: '그룹게시판1' },
        { value: '그룹게시판2', label: '그룹게시판2' },
        { value: '그룹게시판3', label: '그룹게시판3', disabled: true },
        { value: '그룹게시판4', label: '그룹게시판4' },
        { value: '그룹게시판5', label: '그룹게시판5' },
      ],
      optionLsit3: [
        { value: '제목1', label: '제목1' },
        { value: '제목2', label: '제목2' },
      ],
      optionLsit4: [
        { value: '10', label: '10개' },
        { value: '20', label: '20개' },
      ],
      error: false,
      show : false,
      isLoading: false,
      columns: [
        {
          label: "게시판",
          field: "board",
          width: "10%",
          sortable: false,
          isKey: true,
        },
        {
          label: "제목",
          field: "title",
          width: "*",
          sortable: false,
          columnClasses: 'tl'
        },
        {
          label: "작성자",
          field: "writer",
          width: "10%",
          sortable: true,
        },
        {
          label: "등록일",
          field: "registrationDate",
          width: "13%",
          sortable: true,
        },
        {
          label: "만료일",
          field: "expirationDate",
          width: "13%",
          sortable: true,
        },
        {
          label: "삭제일",
          field: "deleteDate",
          width: "13%",
          sortable: true,
        },
      ],
      rows: [
        {
          board: "외부광고",
          title: "IT전략 지원 노드명 IT전략 지원 노드명",
          writer: "김하나",
          registrationDate: "2021.08.09 23:59",
          expirationDate: "2021.08.09 23:59",
          deleteDate: "2021.08.09 23:59",
        },
      ],
      totalRecordCount: 50,
      sortable: {
        order: "id",
        sort: "asc",
      },
    }
  },
  methods: {
  },
})
</script>