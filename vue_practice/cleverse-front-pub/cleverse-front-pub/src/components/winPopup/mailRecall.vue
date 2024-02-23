<template>
  <div class="winPop-wrap hcal org">
    <h1 class="title">
      메일 회수
    </h1>
    <div>
      <div class="btn-wrap right mg-t0">
        <button type="button" class="btn sm line-type2">새로고침</button>
        <button type="button" class="btn sm">회수 요청</button>
      </div>
      <div class="collect-scroll">
        <div class="tbl list-type3 fc-gry">
          <table-lite
            :columns='columns'
            :rows='rows'
            :total='100'
            :messages='messages'/>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    TableLite
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      isActive: false,
      error: false,
      columns: [
        {
          label: '받는사람',
          field: 'name',
          width: '28%',
          display: function (row2:any): any {
            const name = row2.name ? `${row2.name}`: ``
            const mail = row2.mail ? `${row2.mail}`: ``
            return (
              `
                <div>${name}</div>
                <div>${mail}</div>
              `
            );
          },
        },
        {
          label: '구분',
          field: 'sort',
          width: '16%',
        },
        {
          label: '상태 조회',
          field: 'state',
          width: '',
          columnClasses:"tl",
        },
         {
          label: '회수시간',
          field: 'date',
          width: '20%',
        },
      ],
      rows: [
        {
          name: '김한화(Kim Hanwha)',
          mail: 'abcd001@hanwha.com',
          sort: '받는사람',
          state: '메일을 회수하였습니다.',
          date: '2022.02.22 13:00:00',
        },
        {
          name: '김한화(Kim Hanwha)',
          mail: 'abcd001@hanwha.com',
          sort: '받는사람',
          state: '수신자가 메일을 이미 확인하였습니다.',
          date: '2022.02.22 13:00:00',
        },
        {
          name: '김한화(Kim Hanwha)',
          mail: 'abcd001@hanwha.com',
          sort: '받는사람',
          state: '회수 중 입니다.',
          date: '2022.02.22 13:00:00',
        },
        {
          name: '김한화(Kim Hanwha)',
          mail: 'abcd001@hanwha.com',
          sort: '받는사람',
          state: '메일을 회수하였습니다.',
          date: '2022.02.22 13:00:00',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
    }
  },
  
})
</script>