<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>SMS 전송결과</h3>
      </div>
  </div>
	<div class="top-util-wrap">
    <div class="right">
        <button type="button" class="btn md">SMS 재전송</button>
        <button type="button" class="btn md">예약 전송 취소</button>
        <button type="button" class="btn md">삭제</button>
        <button type="button" class="btn md">새로고침</button>
    </div>
  </div>

  <div class="group-admin_wrap">
    <div class="tbl">
      <div class="tbl_header">
        <div class="left">
          <div class="num">전체 <b>00</b>개</div>
        </div>
        <div class="right">
          <span class="list-num">목록개수</span>
          <select-view
						:propOptionList="optionLsit1"
						:propClass="'type1'"
						:propCloseOn="true"
						propPlaceholder="10개"
						propValue="10"
					/>
        </div>
      </div>
      <div class="table-wrap">
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
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableLite from "vue3-table-lite/ts";
import selectView from "@/components/selectView.vue";

export default defineComponent({
  components: {
    TableLite,
		selectView,
  },
  data() {
    return {
      error: false,
      isLoading: false,
      totalRecordCount: 10,
      columns: [
        {
          label: "NO",
          field: "number",
          width: "5%",
          sortable: false,
        },
        {
          label: "보낸 날짜",
          field: "date",
          width: "15%",
          sortable: true,
        },
        {
          label: "제목",
          field: "subject",
          width: "",
          sortable: true,
        },
        {
          label: "총 건수",
          field: "total",
          width: "8%",
          sortable: true,
        },
        {
          label: "성공",
          field: "sucess",
          width: "8%",
          sortable: true,
        },
        {
          label: "실패",
          field: "fail",
          width: "8%",
          sortable: true,
        },
        {
          label: "전송중",
          field: "send",
          width: "8%",
          sortable: true,
        },
        {
          label: "대기중",
          field: "hold",
          width: "8%",
          sortable: true,
        }
      ],
      rows: [
        {
          number: "1",
          date: "2022-08-12 04:25",
          subject: "전송테스트1",
          total: "6",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
        },
        {
          number: "2",
          date: "2022-08-12 04:25",
          subject: "전송테스트1",
          total: "6",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
        },
        {
          number: "3",
          date: "2022-08-12 04:25",
          subject: "전송테스트1",
          total: "6",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
        },
        {
          number: "4",
          date: "2022-08-12 04:25",
          subject: "전송테스트1",
          total: "6",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
        },
        {
          number: "5",
          date: "2022-08-12 04:25",
          subject: "전송테스트1",
          total: "6",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
        },
      ],
      totalRecordCount2: 50,
      sortable: {
        order: "id",
        sort: "asc",
      },
      optionLsit1: [
        { value: '10', label: '10개' },
        { value: '20', label: '20개' },
        { value: '30', label: '30개' },
      ],
    }
  },
});
</script>