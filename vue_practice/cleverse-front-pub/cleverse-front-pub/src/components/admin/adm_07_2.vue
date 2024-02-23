<template>
<div>
  <div class="sect-header">
    <div class="left">
      <h3>직무태그</h3>
    </div>
  </div>
  <div class="top-util-wrap">
    <div class="right">
        <button type="button" class="btn md">신규 태그 등록</button>
    </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="left">
        <div class="num">총 <b>00</b>건</div>
      </div>
      <div class="right">
        <button type="button" class="btn sm line-type1">삭제</button>
        <button type="button" class="btn sm line-type1">엑셀다운로드</button>
        <button type="button" class="btn sm line-type1">엑셀업로드</button>
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
          label: "직군",
          field: "job",
          width: "15%",
          sortable: false,
        },
        {
          label: "직렬",
          field: "serial",
          width: "15%",
          sortable: false,
        },
        {
          label: "직무태그",
          field: "tag",
          width: "",
          sortable: true,
        },
        {
          label: "변경",
          field: "btn",
          width: "14%",
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
          job: "신사업부문",
          serial: "노드 카테고리",
          tag: "#태그명 #태그명 #태그명 #태그명#태그명 #태그명 #태그명 #태그명#태그명 #태그명",
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