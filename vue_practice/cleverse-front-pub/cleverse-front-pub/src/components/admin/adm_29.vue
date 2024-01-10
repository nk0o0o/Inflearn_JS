<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>과제 태그 관리</h3>
      </div>
  </div>

  <div class="top-util-wrap">
      <div class="left">
        <span class="sel-label">부문 선택 :</span>
        <select-view 
          :propOptionList="optionLsit"
          :propPlaceholder="'전체'"
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
      <div class="right">
        <button type="button" class="btn md line-type1">삭제</button>
      </div>
    </div>
    <table-lite
      :is-slot-mode="true"
      :has-checkbox="true"
      :is-loading="isLoading"
      :columns="columns"
      :rows="rows"
      :total="totalRecordCount"
      :sortable="sortable"
      :messages="messages"
    >
      <template v-slot:color="data">
        <em class="tag-color c01" v-if="data.value.c01"><i class="blind">#ffe5b4</i></em>
        <em class="tag-color c02" v-if="data.value.c02"><i class="blind">#ffd3f2</i></em>
        <em class="tag-color c03" v-if="data.value.c03"><i class="blind">#f9cece</i></em>
        <em class="tag-color c04" v-if="data.value.c04"><i class="blind">#fff16f</i></em>
        <em class="tag-color c05" v-if="data.value.c05"><i class="blind">#cff0f7</i></em>
        <em class="tag-color c06" v-if="data.value.c06"><i class="blind">#ecf9ba</i></em>
        <em class="tag-color c07" v-if="data.value.c07"><i class="blind">#eac9ba</i></em>
        <em class="tag-color c08" v-if="data.value.c08"><i class="blind">#b8f2cf</i></em>
        <em class="tag-color c09" v-if="data.value.c09"><i class="blind">#c9ceff</i></em>
        <em class="tag-color c10" v-if="data.value.c10"><i class="blind">#e5d7fd</i></em>
        <em class="tag-color c11" v-if="data.value.c11"><i class="blind">#f6ff8c</i></em>
        <em class="tag-color c12" v-if="data.value.c12"><i class="blind">#ffa1a1</i></em>
        <em class="tag-color c13" v-if="data.value.c13"><i class="blind">#e7e7e7</i></em>
        <em class="tag-color c14" v-if="data.value.c14"><i class="blind">#d0d0d0</i></em>
        <em class="tag-color c15" v-if="data.value.c15"><i class="blind">#b6b6d8</i></em>
        <em class="tag-color c16" v-if="data.value.c16"><i class="blind">#a5efff</i></em>
      </template>
      
      <template v-slot:btnSample="data">
        {{data.value.width}}
        <button type="button" class="btn sm" @click="btnClickSample"><span>변경/삭제</span></button>
      </template>
    </table-lite>
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
          label: "태그명",
          field: "title",
          sortable: true,
          isKey: true,
        },
        {
          label: "부문",
          field: "sector",
          sortable: false,
        },
        {
          label: "정렬",
          field: "align",
          width: "6%",
          sortable: true,
        },
        {
          label: "색상",
          field: "color",
          width: "6%",
          sortable: false,
        },
        {
          label: "업데이트/수정자",
          field: "update",
          sortable: true,
        },
        {
          label: "변경",
          field: "btnSample",
          width: "12%",
          //columnClasses: "tc",
        },
      ],
      rows: [
        {
          title: 'OKR',
          sector: '투자부문',
          align: "10",
          c01: true,
          update: "2022-10-10 / 2190231",
        },
        {
          title: 'OKR',
          sector: '보험부문',
          align: "10",
          c02: true,
          update: "2022-10-10 / 2190232",
        },
        {
          title: 'C-level',
          sector: 'Company in Company',
          align: "10",
          c03: true,
          update: "2022-10-10 / 2190233",
        },
        {
          title: '주요',
          sector: '신사업부문',
          align: "10",
          c04: true,
          update: "2022-10-10 / 2190234",
        },
        {
          title: '중점',
          sector: '경영혁신부문',
          align: "10",
          c05: true,
          update: "2022-10-10 / 2190235",
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      sortable: {
        order: "id",
        sort: "asc",
      },
    }
  },
  methods:{
    btnClickSample($event:any){
      alert('버튼 클릭');

      $event.stopPropagation();//이벤트 전파 중단 추가
    }
  },
});
</script> 