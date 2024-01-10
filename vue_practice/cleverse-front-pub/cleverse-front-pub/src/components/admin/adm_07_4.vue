<template>
<div>
  <div class="sect-header">
    <div class="left">
      <h3>권한관리</h3>
    </div>
  </div>

  <div class="top-util-wrap">
    <div class="right">
      <button type="button" class="btn md">신규 권한 등록</button>
    </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="left">
        <div class="num">총 <b>00</b>건</div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_1" checked>
          <label for="radCont1_1">전체</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_2">
          <label for="radCont1_2">캡틴</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_3">
          <label for="radCont1_3">위원회</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_4">
          <label for="radCont1_4">관리자</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_5">
          <label for="radCont1_5">최고관리자</label>
        </div>
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
          label: "소속부문",
          field: "sector",
          width: "20%",
          sortable: false,
          
        },
        {
          label: "사용자ID",
          field: "id",
          width: "20%",
          sortable: false,
        },
        {
          label: "사용자명",
          field: "name",
          width: "20%",
          sortable: false,
        },
        {
          label: "권한설정",
          field: "author",
          width: "25%",
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
          sector: "신사업부문",
          id: "220202022",
          name: "박준현박준현박준현",
          author: "캡틴, 관리자"
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