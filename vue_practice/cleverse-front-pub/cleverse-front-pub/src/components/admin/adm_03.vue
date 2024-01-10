<template>
<div>
  <div class="sect-header">
    <div class="left">
        <h3>클러스터 정보</h3>
    </div>
  </div>

  <div class="top-util-wrap">
      <div class="left">
        <select-view 
          :propOptionList="optionLsit"
          :propPlaceholder="'공개'"
          :propClass="'type1'"
        >
        </select-view>
      </div>
      <div class="right">
        <button type="button" class="btn md">신규 클러스터 등록</button>
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
            <input type="text" required placeholder="클러스터명 검색">
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
          label: "클러스터ID",
          field: "id",
          width: "15%",
          sortable: true,
          isKey: true,
        },
        {
          label: "클러스터명",
          field: "name",
          width: "",
          sortable: true,
        },
        {
          label: "소속 노드수",
          field: "node",
          width: "15%",
          sortable: false,
        },
        {
          label: "생성일시",
          field: "date",
          width: "15%",
          sortable: false,
        },
        {
          label: "변경/삭제",
          field: "btn",
          width: "15%",
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
          name: "정보공유체계개선정보공유체계개선 정보공유체계개선정보공유체계개선 정보공유체계개선정보공유체계개선",
          node: 999,
          date: "2021.08.09 23:59",
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