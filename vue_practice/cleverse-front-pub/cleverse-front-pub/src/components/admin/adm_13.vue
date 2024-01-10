<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>권한별 사용자정의</h3>
      </div>
  </div>

  <div class="group-admin_wrap">
    <div class="tab-content auth-sel-wrap">
      <div class="tab-menu_wrap">
        <div class="tab-type1" id="tabs-type1">
          <ul class="adm-tab-menu">
            <li :class="{'active':currentTab1===index}" v-for="(tab, index) in tabsType1" :key="index">
              <button type="button" @click="currentTab1 = index">{{tab}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont tbl">
        <div v-show="currentTab1 == 0">
          <div class="table-wrap no-paging">
            <table-lite
              :has-checkbox="false"
              :is-loading="isLoading"
              :columns="columns"
              :rows="rows"
              :sortable="sortable"
              :messages="messages"
            />
          </div>
        </div>
        <div v-show="currentTab1 == 1">
          <div class="auth-form">
            <div class="form-box">
              <label class="select-default">
                <span class="txt-lab">회사 선택</span>
                <select>
                  <option>한화시스템/ICT</option>
                  <option>옵션명</option>
                  <option>옵션명</option>
                </select>
              </label>
            </div>
            <div class="form-box">
              <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-1" checked><label for="chk1-1" class="txt-lab">회사전용</label></div>
              <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-2"><label for="chk1-2" class="txt-lab">전사공용</label></div>
              <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-3"><label for="chk1-3" class="txt-lab">관리자용</label></div>
            </div>
          </div>
          <div class="table-wrap no-paging">
            <table-lite
              :has-checkbox="false"
              :is-loading="isLoading"
              :columns="columns"
              :rows="rows"
              :sortable="sortable"
              :messages="messages"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="group-admin_regist tbl">
      <div class="top-util-wrap">
        <div class="left">
          <button type="button" class="btn sm line-type1">추가</button>
          <button type="button" class="btn sm line-type1">삭제</button>
          <button type="button" class="btn sm line-type1">다운로드</button>
        </div>
        <p class="user">G11 서클 시스템 바로가기 사용자</p>
      </div>
      <div class="tbl_header">
        <div class="left">
          <div class="num">전체 <b>00</b>개</div>
        </div>
        <div class="right authorized-search">
          <div class="input-box search-type3">
            <input type="text" required="" placeholder="내용을 입력해주세요.">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
          </div>

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
      <div class="table-wrap">
        <table-lite
        :has-checkbox="true"
        :is-loading="isLoading"
        :columns="columns2"
        :rows="rows2"
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

export default defineComponent({
  components: {
    TableLite,
  },
  data() {
    return {
      error: false,
      show : false,
      isLoading: false,
      currentTab1: 0,
      tabsType1: ['공통권한', '회사별권한'],
      totalRecordCount: 10,
      columns: [
        {
          label: "권한아이디",
          field: "aid",
          width: "25%",
          sortable: false,
        },
        {
          label: "권한이름",
          field: "name",
          width: "",
          sortable: false,
          columnClasses:"tl",
        },
        {
          label: "제외메뉴여부",
          field: "menu",
          width: "25%",
          sortable: false,
        }
      ],
      rows: [
        {
          aid: "TEST0",
          name: "디펜스기본화면",
          menu: "아니오",
        }
      ],
      columns2: [
        {
          label: "사용자",
          field: "user",
          width: "",
          sortable: false,
          columnClasses:"tl",
        },
        {
          label: "유형",
          field: "type",
          width: "30%",
          sortable: false,
        }
      ],
      rows2: [
        {
          user: "강**본부장/영업시설본부",
          type: "사용자",
        }
      ],
      totalRecordCount2: 50,
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