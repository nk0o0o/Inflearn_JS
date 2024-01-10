<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>권한정의</h3>
      </div>
  </div>

  <div class="top-util-wrap">
    <div class="left">
      <button type="button" class="btn md">추가</button>
      <button type="button" class="btn md line-type1">삭제</button>
    </div>
    <div class="right">
      <form action="">
        <div class="srch_opt_wrap">
          <label class="select-default">
            <select>
                <option>권한아이디</option>
                <option>옵션명</option>
                <option>옵션명</option>
            </select>
          </label>
          <div class="input-box search-type3">
            <input type="text" required="" placeholder="내용을 입력해주세요.">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="left">
        <div class="num">전체 <b>00</b>개</div>
        <div class="input-radio h16"><input type="radio" name="radCont1" id="radCont1_1" checked><label for="radCont1_1">전체</label></div>
        <div class="input-radio h16"><input type="radio" name="radCont1" id="radCont1_2"><label for="radCont1_2">공통권한</label></div>
        <div class="input-radio h16"><input type="radio" name="radCont1" id="radCont1_3"><label for="radCont1_3">회사별권한</label></div>
      </div>
      <div class="right">
        <div class="srch_opt_wrap">
          <span class="num">목록개수</span>  
          <label class="select-default">
            <select>
                <option>10개</option>
                <option>20개</option>
                <option>30개</option>
            </select>
          </label>
        </div>
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
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    TableLite,
  },
  data() {
    return {
      rangeDate: [new Date(),new Date()],
      isLoading: false,
      columns: [
        {
          label: "권한아이디",
          field: "id",
          width: "15%",
          sortable: true,
          isKey: true,
        },
        {
          label: "권한이름",
          field: "name",
          width: "15%",
          sortable: true,
        },
        {
          label: "권한종류",
          field: "type",
          width: "120px",
          sortable: true,
        },
        {
          label: "공개구분",
          field: "public",
          width: "120px",
          sortable: true,
        },
        {
          label: "설명",
          field: "content",
          width: "",
          sortable: false,
          columnClasses:"tl",
        },
        {
          label: "제외메뉴여부",
          field: "menu",
          width: "100px",
          sortable: false,
        },
        {
          label: "등록일",
          field: "date",
          width: "140px",
          sortable: false,
        },
      ],
      rows: [
        {
          id: "TEST0",
          name: "디펜스기본화면",
          type: "공통권한",
          public: "공용",
          content: "디펜스기본화면",
          menu: "아니오",
          date: "2021.03.10 14:03"
        }
      ],
      totalRecordCount: 50,
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