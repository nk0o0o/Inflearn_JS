<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="협업공간 설정"
    class="ly-pop-type1 lg f-14"
  >
    <template v-slot:body>
      <div class="tab-type3" id="tabs-type">
        <ul class="tab-menu type2">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>
      <div class="cont pd-b20">
        <div v-show="currentTab == 0">
          <div class="flex jc-e mg-b10">
            <button type="button" class="icon-btn del">협업공간 폐쇄</button>
            <div class="dropdown-type2 tooltip mg-l10">
              <dropdown-menu2
                :propItem="dropItem"
                :propClass="'dropdown-type2-list type2'"
                :propLocation="'bottom end'"
              >
              </dropdown-menu2>
            </div>
          </div>
          <div class="tbl data-type ta-l">
            <table>
              <colgroup>
              <col style="width:20%">
              <col>
              </colgroup>
              <tbody>
                <tr>
                  <th>제목</th>
                  <td>
                    <div class="flex jc-sb wss-tit txt-ell_wrap">
                      <!-- <p class="f-16">협업공간 제목제목제목</p> -->
                      <form action="">
                        <div class="input-box type3" v-if="!stateModify">
                          <input type="text" value="협업공간 제목제목제목" required>
                          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                        </div>
                        <p class="f-16 txt-ell_tit" v-else>협업공간 제목제목제목협업공간</p>
                      </form>
                      <div v-if="!stateModify">
                        <button type="button" class="btn md line2 round-type mg-l10" @click="save">저장</button>
                        <button type="button" class="btn md line2 round-type mg-l10" @click="cancel">취소</button>
                      </div>
                      <button type="button" class="btn md line2 round-type mg-l10" v-if="stateModify" @click="modify">수정</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>링크 공유</th>
                  <td>
                    <div class="flex jc-sb">
                      <p class="fc lgray txt-ell">https://def.cp.hanwha.com/general/dashboard/PROJ20020512181251031RfnE</p>
                      <button type="button" class="btn md line2 round-type mg-l10">링크 복사</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>공개 설정</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">전체공개</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">협업공간 멤버만 공개</label></div>
                  </td>
                </tr>
                <tr>
                  <th>사용 여부</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-3"><label for="radio1-3">사용중</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-4"><label for="radio1-4">종료</label></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-show="currentTab == 1">
          <div class="board-write-search">
            <div>
              <select-view
                :propOptionList="optionLsit"
                :propPlaceholder="'폴더명'"
                :propClass="'type1 h40'"
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
          <div class="tbl-total-btn">
            <button type="button" class="btn sm line-type2 round-type">삭제</button>
            <span class="total-num">총 <em>10</em>건
              <button type="button" class="ico refresh"><i>새로고침</i></button>
            </span>
          </div>
          <div class="tbl list-type3">
            <table-lite
              :is-slot-mode="true"
              :has-checkbox="true"
              :columns="columns"
              :rows="rows"
              :sortable="sortable"
              :messages="messages"
            >
              <template v-slot:subject="data">
                <div class="flex wss-tit board-folder-modify_form"> 
                  <form action="">
                    <div class="input-box type3" v-if="!stateModify1">
                      <input type="text" :value="data.value.subject" required placeholder="폴더면 최대 80Byte">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">입력가능한 글자수를 초과하였습니다.</div>
                    </div>
                    <p class="f-16" v-else>{{data.value.subject}}</p>
                  </form>
                  <div v-if="!stateModify1">
                    <button type="button" @click="save1">취소</button>
                    <button type="button" @click="cancel1">저장</button>
                  </div>
                  <button type="button" class="ico-pen" v-if="stateModify1" @click="modify1">수정</button>
                </div>
              </template>
            </table-lite>
          </div>
        </div>
        <div v-show="currentTab == 2">
          <div class="board-write-search">
            <div>
              <select-view
                :propOptionList="optionLsit2"
                :propPlaceholder="'이름'"
                :propClass="'type1 h40'"
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
          <div class="collabo-board-pop_numwrap">
            <span class="num">
              협업공간 멤버 수 <em>10</em>명
            </span>
            <span class="num">
              "김지현" 검색결과 총 <em>1</em>건
              <button type="button" class="ico refresh"><i>새로고침</i></button>
            </span>
          </div>
          <div class="collabo-board-pop_head v3">
            <span class="txt">선택 멤버를</span>
            <span>
              <select-view
                :propOptionList="optionLsit2"
                :propPlaceholder="'권한변경'"
                :propClass="'type3'"
              >
              </select-view>
            </span>
            <div class="add-member">
              <member-edit-button></member-edit-button>
            </div>
          </div>
          <div class="tbl list-type3">
            <table-lite
              :has-checkbox="true"
              :columns="columns2"
              :rows="rows2"
              :sortable="sortable"
              :messages="messages"
            />
          </div>
        </div>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import TableLite from "vue3-table-lite/ts";
import memberEditButton from '@/components/memberEditButton.vue';


export default defineComponent({
  components: {
    basePopup,
    selectView,
    dropdownMenu2,
    TableLite,
    memberEditButton,
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
      error: true,
      stateModify: true,
      stateModify1: true,
      isActive: false,
      showModal: this.propShowModal,
      currentTab: 0,
      tabsType: ['기본 관리', '폴더 관리', '멤버 관리'],
      optionLsit: [
        { value: '폴더명', label: '폴더명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit2: [
        { value: '멤버', label: '멤버' },
        { value: '운영자', label: '운영자' },
        { value: '멤버제외', label: '멤버제외' },
      ],
      optionLsit3: [
        { value: '변경', label: '변경' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit4: [
        { value: '권한 전체', label: '권한 전체' },
        { value: '옵션명', label: '옵션명' },
      ],
      dropItem: {
        title: `
          <b>툴팁 타이틀</b>
          <ul>
            <li>툴팁 내용이 나옵니다.</li>
            <li>툴팁 내용이 나옵니다.툴팁 내용이 나옵니다.</li>
          </ul>
        `,
      },
      columns: [
        {
          label: '폴더명',
          field: 'subject',
          width: '',
          columnClasses: ['subject tl'],
        },
        {
          label: '생성보드 수',
          field: 'num',
          width: '12%',
          columnClasses: 'fc gray',
        },
        {
          label: '생성일',
          field: 'date',
          width: '18%',
          columnClasses: 'fc gray',
        },
        {
          label: '생성자',
          field: 'writer',
          width: '12%',
          columnClasses: 'fc gray',
        },
      ],
      rows: [
        {
          subject: '팀장님까지',
          num: '10',
          date: '2022.02.24 13:00',
          writer: '김한화',
          folderIcon: true,
        },
        {
          subject: '팀장님까지',
          num: '100',
          date: '2022.02.24 13:00',
          writer: '김한화',
          folderIcon: false,
        },
        {
          subject: '팀장님까지',
          num: '10',
          date: '2022.02.24 13:00',
          writer: '김한화',
          folderIcon: false,
        },
      ],
      columns2: [
        {
          label: '이름',
          field: 'name',
          width: '8%',
        },
        {
          label: '아이디',
          field: 'aid',
          width: '15%',
        },
        {
          label: '소속',
          field: 'part',
          width: '',
          columnClasses: 'fc gray',
        },
        {
          label: '직위',
          field: 'pos',
          width: '11%',
          columnClasses: 'fc gray',
        },
        {
          label: '직책',
          field: 'spot',
          width: '11%',
          columnClasses: 'fc gray',
        },
        {
          label: '가입일',
          field: 'date',
          width: '12%',
          columnClasses: 'fc gray',
        },
         {
          label: '계정만료',
          field: 'date2',
          width: '12%',
          columnClasses: 'fc gray',
        },
        {
          label: '권한',
          field: 'auth',
          width: '8%',
          columnClasses: 'fc gray',
        },
      ],
      rows2: [
        {
          name: '김이름',
          aid: 'hsnc00001234',
          part: 'EP',
          pos: '매니저',
          spot: '팀원',
          date: '2022.02.24',
          date2: '2022.02.24',
          auth: '운영자',
        },
        {
          name: '김이름',
          aid: 'hsnc00001234',
          part: '한화시스템',
          pos: '차장',
          spot: '팀원',
          date: '2022.02.24',
          date2: '2022.02.24',
          auth: '운영자',
        },
      ],
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: '',
        gotoPageLabel: '',
        noDataAvailable: "No data",
      },
      selectSlotText:'변경',
      dropSelectItem5:{
        itemId: 'selected1'
      },
      dropItem5: [
        { 
          label: '권한변경',
          dep2: [
            { 
              title: '멤버',
              class: 'menu1',
              itemId: 'selected1'
            },
            {
              title: '운영자',
              class: 'menu2',
              itemId: 'selected2'
            },
          ],
        },
        { 
          label: '상태변경',
          dep2: [
            { 
              title: '멤버 제외',
              class: 'menu3',
              itemId: 'selected3'
            },
          ],
        },
      ],
      selectSlotText2:'권한전체',
      dropSelectItem6:{
        itemId: 'selected1'
      },
      dropItem6: [
        { 
          title: '권한전체',
          class: 'menu1',
          itemId: 'selected1'
        },
        { 
          title: '멤버',
          class: 'menu2',
          itemId: 'selected2'
        },
        { 
          title: '운영자',
          class: 'menu3',
          itemId: 'selected3'
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
    modify(){
      this.stateModify = false
      console.log('@@@modify');
    },
    save(){
      this.stateModify = true
      console.log('@@@save');
    },
    cancel(){
      this.stateModify = true
      console.log('@@@cancel');
    },
    modify1(){
      this.stateModify1 = false
      console.log('@@@modify1');
    },
    save1(){
      this.stateModify1 = true
      console.log('@@@save1');
    },
    cancel1(){
      this.stateModify1 = true
      console.log('@@@cancel1');
    },
    selectSlotValue(val:any){
      this.selectSlotText = val
    },
    dropClickItem1(item: any){
      this.dropSelectItem5.itemId = item.itemId
    },
    selectSlotValue2(val:any){
      this.selectSlotText2 = val
    },
    dropClickItem2(item: any){
      this.dropSelectItem6.itemId = item.itemId
    },
  }
})
</script>