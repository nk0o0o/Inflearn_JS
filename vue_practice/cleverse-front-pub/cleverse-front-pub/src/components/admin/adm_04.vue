<template>
<div>
  <div class="sect-header">
    <div class="left">
      <h3>노드/노드원 정보</h3>
    </div>
  </div>

  <div class="top-util-wrap">
    <div class="left">
      <select-view 
        :propOptionList="optionLsit"
        :propPlaceholder="'(20200020300) 전략 부문'"
        :propClass="'type1'"
      >
      </select-view>
      <select-view 
        :propOptionList="optionLsit"
        :propPlaceholder="'Big Data Lending'"
        :propClass="'type1'"
      >
      </select-view>
    </div>
    <div class="right">
      <button type="button" class="btn md">신규 노드 등록</button>
    </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="left">
        <div class="num">총 <b>00</b>건</div>
      </div>
      <div class="right">
        <form action="">
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
      </form>
      </div>
    </div>

    <table-lite
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
import TableLite from "vue3-table-lite/ts";
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    TableLite,
    selectView,
  },
  data () {
    return {
      error: false,
      show : false,
      optionLsit: [
        { value: 'test menu1', label: 'test menu1' },
        { value: 'test hover', label: 'test hover' },
        { value: 'test Selected', label: 'test Selected', disabled: true },
        { value: 'test menu4', label: 'test menu4' },
        { value: 'test menu5', label: 'test menu5' },
      ],
      isLoading: false,
      columns: [
        {
          label: "노드ID",
          field: "id",
          width: "12%",
          sortable: false,
        },
        {
          label: "노드명",
          field: "name",
          width: "",
          sortable: true,
        },
        {
          label: "캡틴",
          field: "captain",
          width: "12%",
          sortable: false,
        },
        {
          label: "구성원수",
          field: "num",
          width: "12%",
          sortable: false,
        },
        {
          label: "진행기간",
          field: "date",
          width: "15%",
          sortable: false,
        },
        {
          label: "정규/비정규",
          field: "regular",
          width: "12%",
          sortable: false,
        },
        {
          label: "공개여부",
          field: "open",
          width: "10%",
          sortable: false,
        },
        {
          label: "종료여부",
          field: "end",
          width: "5%",
          sortable: false,
        },
        {
          label: "변경/삭제",
          field: "btn",
          width: "14%",
          sortable: false,
          display: function (row:any) {
          return (
              '<button type="button" class="btn sm line-type1">' +
              '변경/삭제' +
              '</button>'
            );
          },
        },
        
      ],
      rows: [
        {
          id: 22020202,
          name: "정보공유체계개선",
          captain: "박준현",
          num: 999,
          date: "2021.08.09 -  2021.08.09",
          regular: "정규",
          open: "비공개",
          end: "Y"
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