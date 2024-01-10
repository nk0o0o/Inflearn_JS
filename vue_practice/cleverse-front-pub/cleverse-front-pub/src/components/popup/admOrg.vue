<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="isScrollClass"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="조직도"
    class="ly-pop-type1 admin org_01"
  >
    <template v-slot:body>
      
      <div class="org-layout">
        <div class="tab-content">
            <div class="tab-menu_wrap">
              <div class="tab-type1" id="tabs-type1">
                <!-- <ul class="tab-menu">
                  <li class="active"><button type="button">조직도</button></li>
                  <li><button type="button">그룹사</button></li>
                  <li><button type="button">협력업체</button></li>
                </ul> -->
                <ul class="adm-tab-menu">
                  <li :class="{'active':currentTab1===index}" v-for="(tab, index) in tabsType1" :key="index">
                    <button type="button" @click="currentTab1 = index">{{tab}}</button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cont">
              <div v-show="currentTab1 == 0">
                <div class="org-form form-wrap">
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'공개'"
                      :propClass="'type3'">
                    </select-view>
                  </div>
                  <div class="f1">
                    <form action="">
                      <div class="input-box type3">
                        <input type="text" required placeholder="검색어">
                        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                        <div class="error" v-if="error">에러 내용입력</div>
                      </div>
                    </form>
                  </div>
                  <div><button type="button" class="btn md">검색</button></div>
                  <div><button type="button" class="btn md line-type2">초기화</button></div>
                </div>

                <div class="treeselect">
                  <treeselect
                    v-model="treeSelected"
                    :max-height="115"
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
              <div v-show="currentTab1 == 1">
                <div class="org-form_sel">
                  <select-view 
                      :propOptionList="optionLsit"
                      :propPlaceholder="'그룹사 선택'"
                      :propClass="'type1'"
                    >
                    </select-view>
                </div>
                <div class="org-form form-wrap">
                  <div>
                    <select-view 
                      :propOptionList="optionLsit"
                      :propPlaceholder="'사용자'"
                      :propClass="'type1'"
                    >
                    </select-view>
                  </div>
                  <div class="f1">
                    <form action="">
                      <div class="input-box type3">
                        <input type="text" required placeholder="검색어">
                        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                        <div class="error" v-if="error">에러 내용입력</div>
                      </div>
                    </form>
                  </div>
                  <div><button type="button" class="btn md">검색</button></div>
                  <div><button type="button" class="btn md line-type2">초기화</button></div>
                </div>

                <div class="treeselect">
                  <treeselect
                    v-model="treeSelected"
                    :max-height="115"
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
              <div v-show="currentTab1 == 2">
                <div class="org-form form-wrap">
                  <div>
                    <select-view 
                      :propOptionList="optionLsit"
                      :propPlaceholder="'사용자'"
                      :propClass="'type1'"
                    >
                    </select-view>
                  </div>
                  <div class="f1">
                    <form action="">
                      <div class="input-box type3">
                        <input type="text" required placeholder="검색어">
                        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                        <div class="error" v-if="error">에러 내용입력</div>
                      </div>
                    </form>
                  </div>
                  <div><button type="button" class="btn md">검색</button></div>
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
          <button class="btn md line-type2">삭제</button>
        </div>

        <div class="selected-area">
          <dl>
              <dt><div class="input-chk square"><input type="checkbox" id="checkall"><label for="checkall">삭제선택</label></div></dt>
              <dd>
                  <ul>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8093046" value="[object Object]"> <label for="user_8093046">박지연 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8093093" value="[object Object]"> <label for="user_8093093">김동영 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8083315" value="[object Object]"> <label for="user_8083315">신현동 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8049040" value="[object Object]"> <label for="user_8049040">이민영 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8084706" value="[object Object]"> <label for="user_8084706">정승영 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8086281" value="[object Object]"> <label for="user_8086281">이현수 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8086484" value="[object Object]"> <label for="user_8086484">김은정 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8087829" value="[object Object]"> <label for="user_8087829">이희범 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8087833" value="[object Object]"> <label for="user_8087833">조성후 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8088523" value="[object Object]"> <label for="user_8088523">김대율 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8088568" value="[object Object]"> <label for="user_8088568">김돌 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8089028" value="[object Object]"> <label for="user_8089028">김민호 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8090517" value="[object Object]"> <label for="user_8090517">정대진 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8092891" value="[object Object]"> <label for="user_8092891">김청운 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8093046" value="[object Object]"> <label for="user_8093046">박지연 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8093093" value="[object Object]"> <label for="user_8093093">김동영 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8083315" value="[object Object]"> <label for="user_8083315">신현동 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8049040" value="[object Object]"> <label for="user_8049040">이민영 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8084706" value="[object Object]"> <label for="user_8084706">정승영 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8086281" value="[object Object]"> <label for="user_8086281">이현수 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8086484" value="[object Object]"> <label for="user_8086484">김은정 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8087829" value="[object Object]"> <label for="user_8087829">이희범 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8087833" value="[object Object]"> <label for="user_8087833">조성후 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8088523" value="[object Object]"> <label for="user_8088523">김대율 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8088568" value="[object Object]"> <label for="user_8088568">김돌 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8089028" value="[object Object]"> <label for="user_8089028">김민호 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8090517" value="[object Object]"> <label for="user_8090517">정대진 ( 경영기획파트 )</label></div></li>
                    <li><div class="input-chk square"><input type="checkbox" id="user_8092891" value="[object Object]"> <label for="user_8092891">김청운 ( 경영기획파트 )</label></div></li>
                  </ul>
              </dd>
          </dl>
        </div>
      </div>
      
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-wrap org-foot_btn">
        <button type="button" class="btn">취소</button>
        <button type="button" class="btn line-type1">확인</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue";
// @ts-ignore 
import Treeselect from 'vue3-treeselect';
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    basePopup,
    Treeselect,
    TableLite,
    selectView,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
    propIsScrollClass: {
      type: String,
      default: '',
    },
  },
  data(){
    return{
    isActive: false,
    error: false,
    showModal: this.propShowModal,
    isScrollClass: this.propIsScrollClass,
    optionLsit: [
      { value: 'test menu1', label: 'test menu1' },
      { value: 'test hover', label: 'test hover' },
      { value: 'test Selected', label: 'test Selected', disabled: true },
      { value: 'test menu4', label: 'test menu4' },
      { value: 'test menu5', label: 'test menu5' },
    ],
    currentTab1: 0,
    tabsType1: ['조직도', '그룹사', '협력업체'],
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
                    id: 'j',
                    label: 'j',
                  }, {
                    id: 'k',
                    label: 'k',
                  } 
                ],
              } 
            ],
          }, {
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
        id: 'h',
        label: 'h',
      }
    ],
    isMultiple: true,
    isLoading: false,
    columns: [
    {
      label: "이름",
      field: "name",
      width: "",
      sortable: false,
    },
    {
      label: "아이디",
      field: "id",
      width: "",
      sortable: false,
    },
    {
      label: "직위",
      field: "spot",
      width: "",
      sortable: false,
    },
    {
      label: "직책",
      field: "pos",
      width: "",
      sortable: false,
    },
    {
      label: "부서",
      field: "part",
      width: "",
      sortable: false,
    },
    
    ],
    rows: [
    {
      name: "박지연",
      id: 8093046,
      spot: "차장",
      pos: "팀원",
      part: "경영기획파트",
    },
    ],
  }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
    },
  }
})
</script>