<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>배너관리</h3>
      </div>
  </div>

  <div class="top-util-wrap">
      <div class="right">
          <button type="button" class="btn md">신규 등록</button>
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
            <input type="text" required placeholder="제목 검색">
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
          <button type="button" class="btn md line-type1">삭제</button>
        </form>
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
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    TableLite,
  },
  data () {
    return {
      error: false,
      show : false,
      isLoading: false,
      columns: [
        {
          label: "제목",
          field: "title",
          width: "",
          sortable: true,
          isKey: true,
        },
        {
          label: "노출기간",
          field: "period",
          width: "15%",
          sortable: false,
        },
        {
          label: "생성일시",
          field: "produce",
          width: "15%",
          sortable: false,
        },
        {
          label: "게시여부",
          field: "posting",
          width: "10%",
          sortable: false,
        },
        {
          label: "변경",
          field: "btn",
          width: "10%",
          sortable: false,
          display: function (row:any) {
          return (
              '<button type="button" class="btn sm line-type1">' +
              '변경' +
              '</button>'
            );
          },
        },
      ],
      rows: [
        {
          title: "이번주 가장 활발한 노드는?이번주 가장 활발한 노드는?",
          period: "2021.08.09 -  2021.08.09",
          produce: "2021.08.09 -  2021.08.09",
          posting: "Y",
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