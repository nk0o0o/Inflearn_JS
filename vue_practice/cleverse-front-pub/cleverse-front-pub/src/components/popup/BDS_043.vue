<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="협업공간 설정"
    class="ly-pop-type1 collabo-board-pop"
  >
    <template v-slot:body>
      <div class="tab-type3 board-setting pop-tab" id="tabs-type">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
        <div class="tab-content">
          <div v-show="currentTab == 0">
            <div class="collabo-board-pop_head">
              <div>
                <button type="button" class="bn_closure">협업공간 폐쇄</button>
              </div>
              <div>
                <div class="dropdown-type2 tooltip mg-l10">
                  <dropdown-menu2
                    :propItem="dropItem"
                    :propClass="'dropdown-type2-list type2'"
                    :propLocation="'bottom end'"
                  >
                  </dropdown-menu2>
                </div>
              </div>
            </div>
            <table class="tbl-write type1">
              <colgroup>
                <col style="width:120px;">
                <col style="width:auto;">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">제목</th>
                  <td>
                    <div class="flex btw">
                      <span class="ellip">협업공간 제목제목</span>
                      <span>
                        <button type="button" class="btn md line-type1">수정</button>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">링크 공유</th>
                  <td>
                    <div class="flex btw">
                      <span class="ellip">https://def.cp.hanwha.com/general/dashboard/PROJ20020512181251031RfnE</span>
                      <span>
                        <button type="button" class="btn md line-type1">링크 복사</button>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">공개 설정</th>
                  <td>
                    <div class="input-radio h16">
                      <input type="radio" name="radio1" id="radio1" checked><label for="radio1">전체공개</label>
                    </div>
                    <div class="input-radio h16">
                      <input type="radio" name="radio1" id="radio2"><label for="radio2">협업공간 멤버만 공개</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">사용 여부</th>
                  <td>
                    <div class="input-radio h16">
                      <input type="radio" name="radio2" id="radio3" checked><label for="radio3">사용중</label>
                    </div>
                    <div class="input-radio h16">
                      <input type="radio" name="radio2" id="radio4"><label for="radio4">종료</label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-show="currentTab == 1">            
            <div class="board-write-search">
              <div>
                <select-view
                  :propOptionList="optionLsit"
                  :propPlaceholder="'폴더명'"
                  :propClass="'type1 mg-l20'"
                  >
                </select-view>
              </div>
              <div>
                <form action="">
                    <div class="input-box search-type4">
                        <input type="text" required placeholder="검색어를 입력하세요.">
                        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                        <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                        <div class="list">
                            <ul>
                                <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                                <li>Digital C.P.C. 기반 구축 </li>
                                <li>Digital Infra 구축</li>
                                <li>Digital Infra 구축</li>
                            </ul>
                        </div>
                    </div>
                </form>
              </div>
            </div>
            <div class="collabo-board-pop_head v2">
              <span class="num">
                총 <em>10</em>건
                <button type="button" class="ico refresh"><i>새로고침</i></button>
              </span>
              <span>
                <button type="button" class="btn sm line-type2">삭제</button>
              </span>
            </div>
            <div class="tbl type4">
              <table-lite
                :has-checkbox="true"
                :is-slot-mode="true"
                :columns="columns"
                :rows="rows"
                :total="100"
                :messages="messages"
              >
                <template v-slot:subject="data">
                  <a class="txt" v-if="data.value.subject" href="javascript:void(0)" :data-id="data.value.id">{{data.value.subject}}</a>
                  <span class="edit" v-if="data.value.edit"><i class="blind">편집</i></span>
                </template>
                <template v-slot:manager="data">
                  <div class="dropdown-type2 tooltip text">
                    <dropdown-menu2
                      :propName="data.value.manager"
                      :propItem="dropItem2"
                      :propClass="'dropdown-type2-list type2'"
                    >
                    </dropdown-menu2>
                  </div>
                </template>
              </table-lite>
            </div>
          </div>
          <div v-show="currentTab == 2">
            <div class="board-write-search">
              <div>
                <select-view
                  :propOptionList="optionLsit3"
                  :propPlaceholder="'귄한 전체'"
                  :propClass="'type1'"
                >
                </select-view>
              </div>
              <div>
                <select-view
                  :propOptionList="optionLsit"
                  :propPlaceholder="'이름'"
                  :propClass="'type1 pd-l10'"
                  >
                </select-view>
              </div>
              <div>
                <form action="">
                  <div class="input-box search-type4">
                    <input type="text" required placeholder="검색어를 입력하세요.">
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                    <div class="list">
                      <ul>
                        <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                        <li>Digital C.P.C. 기반 구축 </li>
                        <li>Digital Infra 구축</li>
                        <li>Digital Infra 구축</li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="collabo-board-pop_head v3">
              <span class="num">
                협업공간 멤버 수 <em>10</em>명
              </span>
              <span class="txt">선택 멤버를</span>
              <span>
                <select-view
                  :propOptionList="optionLsit2"
                  :propPlaceholder="'변경'"
                  :propClass="'type3'"
                >
                </select-view>
              </span>
              
              <span>
                <button type="button" class="btn sm">멤버 추가</button>
              </span>
            </div>
            <div class="tbl type4">
              <table-lite
                :has-checkbox="true"
                :is-slot-mode="true"
                :columns="columns2"
                :rows="rows2"
                :total="100"
                :messages="messages"
              >
                <template v-slot:manager="data">
                  <div class="dropdown-type2 tooltip text">
                    <dropdown-menu2
                      :propName="data.value.manager"
                      :propItem="dropItem2"
                      :propClass="'dropdown-type2-list type3'"
                      :propLocation="'bottom start'"
                    >
                    </dropdown-menu2>
                  </div>
                </template>
              </table-lite>
            </div>
          </div>
        </div>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import TableLite from "vue3-table-lite/ts";
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import selectView from "@/components/selectView.vue"


export default defineComponent({
  components: {
    basePopup,
    TableLite,
    dropdownMenu2,
    selectView,
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
      currentTab: 0,
      showModal: this.propShowModal,
      tabsType: ['기본 관리', '폴더 관리', '멤버 관리'],
      optionLsit: [
        { value: '이름', label: '이름' },
        { value: '아이디', label: '아이디' },
        { value: '사번', label: '사번' },
        { value: '직책', label: '직책' },
        { value: '직무', label: '직무' },
      ],
      optionLsit2: [
        { value: '이름', label: '이름' },
        { value: '아이디', label: '아이디' },
        { value: '사번', label: '사번' },
        { value: '직책', label: '직책' },
        { value: '직무', label: '직무' },
      ],
      optionLsit3: [
        { value: '이름', label: '이름' },
        { value: '아이디', label: '아이디' },
        { value: '사번', label: '사번' },
        { value: '직책', label: '직책' },
        { value: '직무', label: '직무' },
      ],
      dropItem2: {
        title: `
          <div class="tooltip-member">
            <div>
              <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
              <p><b>김한화</b> <span class="pos">직위/직책</span></p>
            </div>
            <p class="cp">회사명 <span></span> 소속조직명</p>
            <p class="phone">010-1234-2336</p>
            <p class="email">mail@hanwha.com</p>
          </div>
        `,
      },
      columns: [
        {
          label: '보드명',
          field: 'subject',
          width: '50%',
          columnClasses: ['subject'],
        },
        {
          label: '생성보드 수',
          field: 'num',
          width: '12%',
        },
        {
          label: '생성일',
          field: 'date',
          width: '15%',
        },
        {
          label: '생성자',
          field: 'manager',
          width: '12%',
        },
      ],
      rows: [
        {
          id: 0,
          subject : '협업보드명',
          edit: true,
          num: 10,
          date: '2022.02.24 13:00',
          manager: '김한화',
        },
        {
          id: 0,
          subject : '협업보드명',
          edit: false,
          num: 10,
          date: '2022.02.24 13:00',
          manager: '김한화',
        },
      ],
      columns2: [
        {
          label: '이름',
          field: 'manager',
          width: '10%',
          columnClasses: ['manager'],
        },
        {
          label: '아이디',
          field: 'cid',
          width: '20%',
          columnClasses: ['bk'],
        },
        {
          label: '소속',
          field: 'belong',
          width: '13%',
        },
        {
          label: '직위',
          field: 'spot',
          width: '10%',
        },
        {
          label: '직책',
          field: 'position',
          width: '10%',
        },
        {
          label: '가입일',
          field: 'date',
          width: '15%',
        },
        {
          label: '계정만료',
          field: 'account',
          width: '12%',
        },
        {
          label: '권한',
          field: 'authority',
          width: '10%',
        },
      ],
      rows2: [
        {
          id: 0,
          manager: '김지현',
          cid : 'hsnc21050408',
          belong: '한화시스템',
          spot: '매니저',
          position: '팀원',
          date: '2022.02.24',
          account: '',
          authority: '운영자',
        },
      ],
      totalRecordCount: 100,
      sortable: {
        order: "id",
        sort: "asc",
      },
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: '파일이 없습니다.',
      },
      dropItem: { 
        title: `
          <b>전체 공개 / 멤버 공개란?</b>
          <ul>
            <li>전체 공개 - 조직원 전체 조회 가능</li> 
            <li>멤버 공개 - 멤버만 조회 가능</li>
          </ul>
        `,
      },
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