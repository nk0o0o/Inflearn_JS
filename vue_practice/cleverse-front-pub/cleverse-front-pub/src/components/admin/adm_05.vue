<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>노드승인</h3>
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
              <label for="radCont1_2">승인대기</label>
          </div>
          <div class="input-radio h16">
              <input type="radio" name="radCont1" id="radCont1_3">
              <label for="radCont1_3">완료</label>
          </div>
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
          label: "부문",
          field: "sector",
          width: "10%",
          sortable: false,
        },
        {
          label: "클러스터",
          field: "cluster",
          width: "12%",
          sortable: false,
        },
        {
          label: "노드명",
          field: "node",
          width: "",
          sortable: true,
        },
        {
          label: "구분",
          field: "division",
          width: "10%",
          sortable: false,
        },
        {
          label: "신청자",
          field: "name",
          width: "10%",
          sortable: false,
        },
        {
          label: "신청일시",
          field: "date1",
          width: "10%",
          sortable: false,
        },
        {
          label: "완료일시",
          field: "date2",
          width: "10%",
          sortable: false,
        },
        {
          label: "승인반려",
          field: "btn",
          width: "10%",
          sortable: false,
          display: function (row:any) {
          return (
              '<button type="button" class="btn sm line-type1">' +
              '승인/반려' +
              '</button>'
            );
          },
        },
        
      ],
      rows: [
        {
          sector: "업무공유 신사업부문",
          cluster: "Big Data&Lending",
          node: "IT전략 지원 노드명 IT전략 지원 노드명",
          division: "비정규",
          name: "박준현",
          date1: "2021.08.09 23:59",
          date2: "2021.08.09 23:59",
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