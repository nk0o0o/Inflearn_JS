<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>공용메일관리</h3>
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
        <div class="mail-list" v-show="currentTab1 == 0">
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
              <button class="btn md">추가</button>
            </div>
            <form action="">
              <div class="form-box">
                <div class="input-box type3 w100p">
                  <input type="text" class="w100p" required="" placeholder="검색어 입력">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                </div>
                <button type="button" class="btn md">검색</button>
                <button type="button" class="btn md line-type2">초기화</button>
              </div>
            </form>
          </div>
          
          <div class="basic-list">
            <ul>
              <li>클래버스공용메일01(mail100@hanwha.com)</li>
              <li>클래버스공용메일02(mail100@hanwha.com)</li>
              <li>클래버스공용메일03(mail100@hanwha.com)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="group-admin_regist tbl mg-l30">
      <h4 class="tit-sub">공용메일상세내역</h4>
      <div class="top-util-wrap mg-b0">
        <div class="right">
          <button type="button" class="btn sm">저장</button>
          <button type="button" class="btn sm line-type1">삭제</button>
        </div>
      </div>
      <table class="tbl tl">
				<colgroup>
					<col style="width:18%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row"><span class="asterisk">메일명칭</span></th>
						<td>
              <form action="">
                <div class="input-box w100p type1">
                  <input type="text" class="w100p" required placeholder="">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                </form> 
						</td>
					</tr>
          <th scope="row"><span class="asterisk">메일주소</span></th>
						<td>
							<form action="">
                <div class="input-box w100p type1">
                  <input type="text" class="w100p" required placeholder="">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
						</td>
				</tbody>
			</table>

      <div class="tbl_header mg-t20">
        <div class="classification flex jc-sb">
          <div class="flex">
            <div class="num mg-l20">검색어</div>
            <select-view
              :propOptionList="optionLsit1"
              :propClass="'type1 mg-l10 mg-r10'"
              :propCloseOn="true"
              propPlaceholder="사용자"
              propValue="사용자"
            />
            <div class="input-box type3 w180">
              <input type="text" required placeholder="검색어 입력">
              <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            </div>
            <button type="button" class="btn sm">검색</button>
          </div>
          <div class="flex">
            <span>사용자를</span>
            <button type="button" class="btn sm mg-l10">추가</button>
            <button type="button" class="btn sm line-type1">삭제</button>
          </div>
        </div>
      </div>

      <div class="tbl_header mg-t10">
        <div class="left">
          <div class="num">전체 <b>00</b>건</div>
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
      <div class="table-wrap">
        <table-lite
          :has-checkbox="true"
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';
import TableLite from "vue3-table-lite/ts";
import selectView from "@/components/selectView.vue";

export default defineComponent({
  components: {
    TableLite,
    selectView,
  },
  data () {
    return {
      optionLsit1: [
        { value: '사용자', label: '사용자' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      currentTab1: 0,
      tabsType1: ['공용메일목록'],
      error: false,
      show : false,
      isLoading: false,
      columns: [
        {
          label: "사용자",
          field: "name",
          width: "35%",
          sortable: true,
          isKey: true,
        },
        {
          label: "부서명",
          field: "part",
          width: "",
          sortable: true,
          isKey: true,
        },
      ],
      rows: [
        {
          name: "김하나",
          part: "시스템",
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