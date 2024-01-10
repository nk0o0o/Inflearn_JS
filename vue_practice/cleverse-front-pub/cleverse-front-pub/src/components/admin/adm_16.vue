<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>사용자별 메뉴권한조회</h3>
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
                <div class="input-box type3">
                  <input type="text" required="" placeholder="내용을 입력해주세요.">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                </div>
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

    <div class="group-admin_regist tbl">
      <div class="top-util-wrap">
        <div class="left">
          <button type="button" class="btn sm line-type1">추가</button>
          <button type="button" class="btn sm line-type1">삭제</button>
        </div>
        <p class="user">사용자 : 테** 수석매니저</p>
      </div>
      <div class="tbl_header">
        <div class="left">
          <div class="num">전체 <b>00</b>개</div>
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
        :columns="columns2"
        :rows="rows2"
        :total="totalRecordCount"
        :sortable="sortable"
        :messages="messages"
        />
      </div>
    </div>
  </div>

  <div class="adm-menu-manage mt-20">
    <div class="adm-tit">상단 아이콘</div>
    <div class="list-box">
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-1"><label for="chk1-1">사원찾기</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-2"><label for="chk1-2">시설물 예약</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-3"><label for="chk1-3">설문</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-4"><label for="chk1-4">고객센터</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-5"><label for="chk1-5">사이버 신문고</label></div>
    </div>
  </div>

  <div class="adm-menu-manage">
    <div class="adm-tit">GNB 메뉴</div>
    <div class="list-box type1">
      <ul>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-01"><label for="chk3-01">워크플레이스</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-02"><label for="chk3-02">메일</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-03"><label for="chk3-03">전자결재</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-04"><label for="chk3-04">게시판</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-05"><label for="chk3-05">지원업무</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-06"><label for="chk3-06">안건관리</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-07"><label for="chk3-07">관리자</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-08"><label for="chk3-08">Comm On</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-09"><label for="chk3-09">채널 Hplus</label></div></li>
        <li class="row">
          <div class="input-chk square">
            <input type="checkbox" name="chk3" id="chk3-10"><label for="chk3-10">새메뉴</label>
          </div>
          <div class="input-chk square">
            <input type="checkbox" name="chk3" id="chk3-11"><label for="chk3-11">새메뉴1</label>
          </div>
          <div class="input-chk square">
            <input type="checkbox" name="chk3" id="chk3-12"><label for="chk3-12">새메뉴2</label>
          </div>
          <div class="input-chk square">
            <input type="checkbox" name="chk3" id="chk3-13"><label for="chk3-13">새메뉴3</label>
          </div>
        </li>
      </ul>
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

export default defineComponent({
    // register the component
	components: {
      TableLite,
			Treeselect,
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
        }
      ],
      rows: [
        {
          name: "hh***",
          aid: "TEST0",
          position: "사원",
          company: "한화시스템/ICT",
          part: "Smart Works",
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
    }
  },
});
</script>