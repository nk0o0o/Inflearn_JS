<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>개인별 용량관리</h3>
      </div>
  </div>

  <div class="group-admin_wrap type2">
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
                <label class="select-default">
                  <select>
                    <option>이름</option>
                    <option>옵션명</option>
                    <option>옵션명</option>
                  </select>
                </label>
                <form action="">
                  <div class="input-box type3 mg-r10">
                    <input type="text" required="" placeholder="검색어 입력">
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  </div>
                </form>
                <button type="button" class="btn md">검색</button>
                <div class="input-chk square type2"><input type="checkbox" name="chk1" id="chk1"><label for="chk1" class="txt-lab">전사</label></div>
            </div>
          </div>

          <div class="treeselect">
            <treeselect
              v-model="treeSelected"
              :max-height="500"
              :options="treeData"
              :default-expand-level="0"
              :always-open="true"
              :load-options="handleLoadOptions"
              @select="onSelect"
              @deselect="onDeselect"
              :multiple="isMultiple"
              :autoSelectDescendants="false"
              :flat="true"
            ></treeselect>
          </div>
          <div class="org-num">총 <em>50</em>명</div>
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

    <div class="btn-area">
      <button class="btn md">추가</button>
    </div>

    <div class="group-admin_regist tbl">
      <div class="top-util-wrap">
        <div class="left">
          <button type="button" class="btn sm line-type1">변경</button>
        </div>
      </div>
      <table class="tbl tl">
				<colgroup>
					<col style="width:20%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">용량</th>
						<td>
							<div class="flex">
                <form action="" class="flex">
                  <div class="input-box type1 w180">
                    <input type="text" required>
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                  <span class="mg-l10">MB</span>
                </form>
              </div>
						</td>
					</tr>
					<tr>
						<th scope="row">기간</th>
						<td>
							<div class="flex">
                <div>
                  <Datepicker
                    v-model="date"
                    :enableTimePicker="false"
                    locale="ko"
                    autoApply
                  />
                </div>
                <span class="mg-l10">까지</span>
              </div>
						</td>
					</tr>
          <th scope="row">사유</th>
						<td>
							<form action="">
                <div class="input-box w100p type1">
                  <input type="text" class="w100p" required placeholder="내용을 입력해주세요.">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
						</td>
				</tbody>
			</table>

      <div class="selected-area">
        <dl>
            <dt>
              <div class="flex">
                <div class="input-chk square type2"><input type="checkbox" id="checkall"></div>
                <button type="button" class="btn sm line-type1 mg-l10">삭제</button>
              </div>
            </dt>
            <dd>
                <ul>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8093046" value="[object Object]" checked><label for="user_8093046">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8093047" value="[object Object]"> <label for="user_8093047">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8093093" value="[object Object]"> <label for="user_8093093">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8083315" value="[object Object]"> <label for="user_8083315">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8049040" value="[object Object]"> <label for="user_8049040">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8084706" value="[object Object]"> <label for="user_8084706">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8086281" value="[object Object]"> <label for="user_8086281">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8086484" value="[object Object]"> <label for="user_8086484">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8087829" value="[object Object]"> <label for="user_8087829">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                  <li><div class="input-chk square type2"><input type="checkbox" id="user_8087833" value="[object Object]"> <label for="user_8087833">박** 대리 ( 경영기획파트 / 시스템) / 0</label></div></li>
                </ul>
            </dd>
        </dl>
      </div>
      
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableLite from "vue3-table-lite/ts";
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
    // register the component
	components: {
      TableLite,
			Treeselect,
      Datepicker,
	},
	data() {
			return {
      // define the default value
      treeSelected: null,
      // define options
      treeData: [
          {
            id: 'a',
            label: 'a',
            children: [
              {
                id: 'aa',
                label: 'aa',
              }, {
                id: 'ab',
                label: 'ab',
              }
            ],
          }, {
            id: 'b',
            label: 'b',
          }, {
            id: 'c',
            label: 'c',
          },
          {
            id: 'e',
            label: 'e',
            children: [
              {
                id: 'f',
                label: 'f',
                children: [
                  {
                    id: 'j',
                    label: 'j',
                  }, {
                    id: 'k',
                    label: 'k',
                    children: [
                      {
                        id: 'ja',
                        label: 'ja',
                      },
                      {
                        id: 'ka',
                        label: 'ka',
                        children: [
                          {
                            id: 'jb',
                            label: 'jb',
                          },
                          {
                            id: 'kb',
                            label: 'kb',
                          },
                          {
                            id: 'jbc',
                            label: 'jbc',
                          },
                        ],
                      }, {
                          id: 'kah',
                          label: 'kah',
                          children: [
                            {
                              id: 'jbh',
                              label: 'jbh',
                            },
                            {
                              id: 'jbhc',
                              label: 'jbhc',
                            },
                          ]
                      }
                    ],
                  }
                ],
              },
              {
                id: 'n',
                label: 'n',
                children: [
                  {
                    id: 'aac',
                    label: 'aac',
                  }, {
                    id: 'abc',
                    label: 'abc',
                  }
                ],
              },
              {
                id: 'g',
                label: 'g',
              }
            ],
          }, {
              id: 'h',
              label: 'h',
          }, {
              id: 'i',
              label: 'i',
          }, {
              id: 'l',
              label: 'l',
          }
      ],
      currentTab1: 0,
      tabsType1: ['조직도'],
      columns: [
        {
          label: "이름",
          field: "name",
          width: "",
          sortable: false,
        },
        {
          label: "아이디",
          field: "aid",
          width: "",
          sortable: false,
        },
        {
          label: "직위",
          field: "position",
          width: "",
          sortable: false,
        },
        {
          label: "직책",
          field: "rank",
          width: "",
          sortable: false,
        },
        {
          label: "회사",
          field: "company",
          width: "",
          sortable: false,
        },
        {
          label: "부서",
          field: "part",
          width: "",
          sortable: false,
        },
        {
          label: "용량",
          field: "volume",
          width: "",
          sortable: false,
        }
      ],
      rows: [
        {
          name: "hh***",
          aid: "TEST0",
          position: "사원",
          rank: "팀원",
          company: "한화시스템/ICT",
          part: "Smart Works",
          volume: "0",
        }
      ],
      columns2: [
        {
          label: "유형",
          field: "type",
          width: "80px",
          sortable: false,
        },
        {
          label: "권한아이디",
          field: "aid",
          width: "",
          sortable: false,
        },
        {
          label: "권한이름",
          field: "name",
          width: "",
          sortable: false,
        },
        {
          label: "적용회사",
          field: "company",
          width: "110px",
          sortable: false,
        },
        {
          label: "제외메뉴여부",
          field: "menu",
          width: "110px",
          sortable: false,
        }
      ],
      rows2: [
        {
          type: "회사",
          aid: "Tester",
          name: "비밀번호변경시 AD비밀번호먼저변경",
          company: "공통",
          menu: "아니오"
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
      date: new Date().toString(),
    }
  },
});
</script>