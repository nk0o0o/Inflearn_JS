<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <collabo-board-left/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>최근 방문한 보드</h2>
          </div>
          <!-- //header -->

          <!-- content -->
          <div class="collabo-board_content">
            <div class="collabo-board_list_header">
              <div>
                <span class="num">총 <em>10</em>건</span>
              </div>                  
              <div class="search">
                <form action="">
                  <div class="input-box search-type3" :class="{ 'active' : isActive }">
                    <input type="text" required placeholder="검색어를 입력하세요.">
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                </form>
                <button type="button" class="bn_active" :class="{ 'active' : isActive }" @click="isActive = !isActive"><i class="blind">검색 활성화</i></button>
              </div>
              <div class="favor_wrap">
                <span class="favor" @click="isFavor = !isFavor" :class="{ 'active' : isFavor }"><i class="blind">즐겨찾기</i></span>
              </div>
              <div class="drop_wrap">
                <div class="dropdown-type1 select-box">
                  <dropdown-menu3
                    :propisSlotMode="false"
                    :propSelectText="selectText"
                    :propItem="dropItem"
                    :propDropSelectItem="dropSelectItem.itemId"
                    @selected="selectValue"
                    :propLocation="'bottom'"
                  />
                </div>
              </div>
            </div>
            
            <div class="tbl type4">
              <table-lite
                :is-slot-mode="true"
                :columns="columns"
                :rows="rows"
                :total="100"
                :sortable="sortable"
                :messages="messages"
              >
                <template v-slot:subject="data">
                  <!-- <i class="ico-file inline ppt" v-if="data.value.ppt"></i> -->
                  <a class="txt" v-if="data.value.subject" href="javascript:void(0)" :data-id="data.value.id">{{data.value.subject}}</a>
                </template>
                <template v-slot:favor="data">
                  <div class="favor_wrap lock">
                    <span class="favor s" :class="{ 'active' : data.value.favor }"><i class="blind">즐겨찾기</i></span>
                  </div>
                  <em class="ico-lock" v-if="data.value.lock">lock</em>
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
          <!-- //content -->

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import collaboBoardLeft from "./collaboBoardLeft.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue"
import TableLite from "vue3-table-lite/ts"



export default defineComponent({
  components: {
    collaboBoardLeft,
    dropdownMenu2,
    dropdownMenu3,
    TableLite,
  },
  data() {
    return {
      isActive: false,
      isFavor: false,
      selectText:'최신순',
      dropSelectItem:{
        itemId: 'selected1'
      },
      dropItem: [
        { title: '기본순', itemId: 'selected1' },
        { title: '최신순', itemId: 'selected2' },
        { title: '이름순', itemId: 'selected3' },
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
          label: '',
          field: 'favor',
          width: '8%',
          columnClasses: ['favor'],
        },
        {
          label: '보드명',
          field: 'subject',
          width: '42%',
          columnClasses: ['subject'],
          sortable: true,
          isKey: true,
        },
        {
          label: '폴더명',
          field: 'folder',
          width: '15%',
          sortable: true,
          isKey: true,
        },
        {
          label: '공간명',
          field: 'ground',
          width: '15%',
          sortable: true,
          isKey: true,
        },
        {
          label: '의견',
          field: 'opinion',
          width: '10%',
          columnClasses: ['opinion'],
        },
        {
          label: '생성자',
          field: 'manager',
          width: '10%',
        },
      ],
      rows: [
        {
          favor: false,
          id: 0,
          lock: false,
          subject : '협업보드명',
          folder: '폴더명 표시',
          ground: '협업공간명 표시',
          update: '2021.04.23',
          opinion: '99+',
          manager: '김한화',
        },
        {
          favor: true,
          id: 0,
          lock: true,
          subject : '협업보드명 협업보드명 협업보드명 긴 경우 협업보드명 협업보드명 협업보드명 긴 경우',
          folder: '폴더명 표시',
          ground: '협업공간명 표시',
          update: '2021.04.23',
          opinion: '99+',
          manager: '김한화',
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
      
    };
  },
  methods: {
    selectValue(val:any){
      this.selectText = val.title
      this.dropSelectItem.itemId = val.selected
    },
  },
})
</script>