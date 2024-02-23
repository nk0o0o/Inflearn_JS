<template>
<div>
  <div class="sect-header">
    <div class="left">
      <h3>조직태그</h3>
    </div>
  </div>
  <div class="top-util-wrap">
    <div class="left">
      <select-view 
        :propOptionList="optionLsit"
        :propPlaceholder="'(20200020300) 신사업부문'"
        :propClass="'type1'"
      >
      </select-view>
    </div>
    <div class="right">
        <button type="button" class="btn md">신규 태그 등록</button>
    </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="left">
        <div class="num">총 <b>00</b>건</div>
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
          label: "구분",
          field: "sector",
          width: "15%",
          sortable: false,
        },
        {
          label: "유형",
          field: "category",
          width: "15%",
          sortable: false,
        },
        {
          label: "태그명",
          field: "tag",
          width: "",
          sortable: true,
        },
        {
          label: "태그수",
          field: "num",
          width: "15%",
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
          sector: "신사업부문",
          category: "노드 카테고리",
          tag: "#태그명 #태그명 #태그명 #태그명#태그명 #태그명 #태그명 #태그명#태그명 #태그명",
          num: "999"
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