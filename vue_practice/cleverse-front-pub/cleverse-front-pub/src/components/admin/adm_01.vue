<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>부문정보</h3>
      </div>
  </div>

  <div class="top-util-wrap">
    <div class="right">
        <button type="button" class="btn md">신규부문등록</button>
    </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="left">
          <div class="num">총 <b>00</b>건</div>
      </div>
      <div class="right">
          <form action="">
            <div class="srch_opt_wrap">

              <Datepicker 
                weekStart="0"
                v-model="rangeDate" 
                range 
                :enableTimePicker="false"
              />

              <div class="input-box search-type3">
                <input type="text" required="" placeholder="내용을 입력해주세요.">
                <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
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
import TableLite from "vue3-table-lite/ts";
import Datepicker from '@vuepic/vue-datepicker';

export default defineComponent({
  components: {
    TableLite,
    Datepicker
  },
  data() {
    return {
      rangeDate: [new Date(),new Date()],
      isLoading: false,
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true,
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true,
        },
      ],
      rows: [
        {
          id: 0,
          name: "TEST0",
          email: "test0@example.com"
        },
        {
          id: 1,
          name: "TEST1",
          email: "test1@example.com"
        },
        {
          id: 2,
          name: "TEST2",
          email: "test2@example.com"
        }
      ],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
      items: ['foo', 'bar', 'fizz', 'buzz'],
      values: ['foo', 'bar'],
      value: null,
    }
  },
});
</script> 