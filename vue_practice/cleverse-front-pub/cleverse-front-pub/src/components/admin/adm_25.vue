<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>메일자동삭제관리</h3>
      </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="classification">
        <div class="num">회사선택</div>
        <select-view
          :propOptionList="optionLsit1"
          :propClass="'type1'"
          :propCloseOn="true"
          propPlaceholder="한화시스템/ICT"
          propValue="한화시스템/ICT"
        />
        <div class="num mg-l20">검색어</div>
        <select-view
          :propOptionList="optionLsit2"
          :propClass="'type1'"
          :propCloseOn="true"
          propPlaceholder="이름"
          propValue="이름"
        />
        <form action="">
          <div class="input-box type3">
            <input type="text" required placeholder="검색어 입력">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
          </div>
        </form>
        <div>
          <button type="button" class="btn sm">검색</button>
        </div>
      </div>
    </div>

    <div class="tbl_header">
      <div class="left">
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_1" checked>
          <label for="radCont1_1">삭제대상자</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_2">
          <label for="radCont1_2">예외대상자</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_3">
          <label for="radCont1_3">전체</label>
        </div>
        <div class="input-radio h16">
          <input type="radio" name="radCont1" id="radCont1_4">
          <label for="radCont1_4">정책관리대상자</label>
        </div>
        <span class="fc org mg-l10">※ 정책 적용시 실제 사용자의 메일이 삭제됩니다.</span>
      </div>
      <div class="right">
        <button type="button" class="btn sm">추가</button>
        <button type="button" class="btn sm line-type1">삭제</button>
      </div>
    </div>

    <div class="tbl_header">
      <div class="left">
        <div class="num">전체 <b>00</b>개(회사제외)</div>
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
      :is-slot-mode="true"
      :has-checkbox="true"
      :is-loading="isLoading"
      :columns="columns"
      :rows="rows"
      :total="totalRecordCount"
      :sortable="sortable"
      :messages="messages"
    >
      <template v-slot:date="data">
        <select-view
          :propName="data.value.date"
          :propOptionList="optionLsit3"
          :propPlaceholder="'10일'"
          :propClass="'type3'"
        >
        </select-view>
      </template>
      <template v-slot:check="data">
        <select-view
          :propName="data.value.check"
          :propOptionList="optionLsit5"
          :propPlaceholder="'대상'"
          :propClass="'type3'"
        >
        </select-view>
      </template>
    </table-lite>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';
import selectView from "@/components/selectView.vue";
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    TableLite,
    selectView
  },
  data () {
    return {
      optionLsit1: [
        { value: '한화시스템/ICT', label: '한화시스템/ICT' },
        { value: '옵션명', label: '그옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit2: [
        { value: '이름', label: '이름' },
        { value: '제목', label: '제목' },
      ],
      optionLsit3: [
        { value: '10일', label: '10일' },
        { value: '20일', label: '20일' },
      ],
       optionLsit5: [
        { value: '대상', label: '대상' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit4: [
        { value: '10', label: '10개' },
        { value: '20', label: '20개' },
      ],
      error: false,
      show : false,
      isLoading: false,
      columns: [
        {
          label: "아이디",
          field: "aid",
          width: "15%",
          sortable: true,
          isKey: true,
        },
        {
          label: "이름",
          field: "name",
          width: "15%",
          sortable: true,
          isKey: true,
        },
        {
          label: "이메일",
          field: "email",
          width: "",
          sortable: true,
          isKey: true,
        },
        {
          label: "메일보관일",
          field: "date",
          width: "10%",
          sortable: true,
          columnClasses: 'tl'
        },
        {
          label: "등록일",
          field: "date2",
          width: "18%",
          sortable: true,
        },
        {
          label: "대상여부",
          field: "check",
          width: "13%",
          sortable: true,
        },
      ],
      rows: [
        {
          aid: "testid001",
          name: "김하나",
          email: "textemail@hanwha.com",
          date: "",
          date2: "2021.08.09 23:59",
          check: "",
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