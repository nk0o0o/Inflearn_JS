<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>SMS 전송결과</h3>
      </div>
  </div>

  <div class="group-admin_wrap">
    <div class="tbl">
      <div class="tbl_header">
        <div class="left">
          <span class="list-num">회사선택</span>
          <select-view
						:propOptionList="optionLsit"
						:propClass="'type1'"
						:propCloseOn="true"
						propPlaceholder="한화시스템/ICT"
						propValue="1"
					/>
        </div>
        <div class="right">
          <span class="list-num">검색날짜 선택</span>
          <Datepicker
            v-model="date"
            :enableTimePicker="false"
            locale="ko"
            autoApply
          />
        </div>
      </div>
      <div class="table-wrap">
        <table-lite
          :is-loading="isLoading"
          :columns="columns"
          :rows="rows"
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
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    TableLite,
		selectView,
    Datepicker,
  },
  data() {
    return {
      error: false,
      isLoading: false,
      columns: [
        {
          label: "Agent",
          field: "agent",
          width: "10%",
          sortable: false,
        },
        {
          label: "날짜",
          field: "date",
          width: "",
          sortable: false,
        },
        {
          label: "성공",
          field: "sucess",
          width: "12%",
          sortable: false,
        },
        {
          label: "실패",
          field: "fail",
          width: "12%",
          sortable: false,
        },
        {
          label: "전송중",
          field: "send",
          width: "12%",
          sortable: false,
        },
        {
          label: "대기중(에약중)",
          field: "hold",
          width: "12%",
          sortable: false,
        },
        {
          label: "총 건수",
          field: "total",
          width: "12%",
          sortable: false,
        },
      ],
      rows: [
        {
          agent: "FAX WIDE",
          date: "2022-08-12",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
          total: "6",
        },
        {
          agent: "SMS LG U+",
          date: "2022-08-12",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
          total: "6",
        },
        {
          agent: "LMS LG U+",
          date: "2022-08-12",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
          total: "6",
        },
        {
          agent: "FAX WIDE",
          date: "2022-08-12",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
          total: "6",
        },
        {
          agent: "LMS LG U+",
          date: "2022-08-12",
          sucess: "0",
          fail: "0",
          send: "1",
          hold: "0",
          total: "6",
        },
      ],
      optionLsit: [
        { value: '1', label: '한화시스템/ICT' },
      ],
			date: new Date().toString(),
    }
  },
});
</script>