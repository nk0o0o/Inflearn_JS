<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="멤버관리"
    class="ly-pop-type1 xl scroll"
  >
    <template v-slot:body>
      <div class="tab-type3" id="tabs-type">
        <ul class="tab-menu type2">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>
      <div class="cont wide-wrap pd-b10">
        <div v-show="currentTab == 0">
          <div class="guide-box gry">
            <p class="tit">등록된 그룹원의 권한을 변경하거나 추가해보세요</p>
            <ul class="list-txt">
              <li>* 부서로 추가시 하위 부서 구성원도 전부 그룹원으로 추가되오니 유의하시기 바랍니다.</li>
              <li>* 하위 부서 구성원을 포함하지 않으려면 원하는 임직원만 개별로 추가해주시기 바랍니다.</li>
              <li>* 대표 운영자는 반드시 한명만 지정이 가능합니다.</li>
            </ul>
          </div>
          <div class="member-edit">
            <div class="box">
              <div class="box-top">
                <div class="title">
                  <strong>대표 운영자 <em>1</em></strong>
                </div>
                <div>
                  <button type="button" class="btn sm line-type2">수정</button>
                </div>
              </div>
              <ul class="list">
                <li v-for="(item, index) in List" :key="index">
                  <div class="input-chk square">
                    <input type="checkbox" :name="`chk1-${index}`" :id="`chk1-${index}`">
                    <label :for="`chk1-${index}`"><span class="label">{{item.name}}</span></label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="box center">
              <div class="box-top">
                <div class="title">
                  <strong>부 운영자 <em>2</em></strong>
                </div>
                <div>
                  <button type="button" class="btn sm line-type2">삭제</button>
                  <button type="button" class="btn sm">추가</button>
                </div>
              </div>
              <ul class="list">
                <li v-for="(item, index) in List2" :key="index">
                  <div class="input-chk square">
                    <input type="checkbox" :name="`chk2-${index}`" :id="`chk2-${index}`">
                    <label :for="`chk2-${index}`"><span class="label">{{item.name}}</span></label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="btn-set">
              <button type="button" class="btn-move-l">좌측으로 이동</button>
              <button type="button" class="btn-move-r">우측으로 이동</button>
            </div>
            <div class="box">
              <div class="box-top">
                <div class="title">
                  <strong>일반회원 <em>0</em></strong>
                </div>
                <div>
                  <button type="button" class="btn sm line-type2">삭제</button>
                  <button type="button" class="btn sm">추가</button>
                </div>
              </div>
              <p class="nodata">데이터가 없습니다.</p>
            </div>
          </div>
        </div>
        <div v-show="currentTab == 1">
          <div class="tbl-head-sch">
            <div>
              <button type="button" class="icon-btn download">다운로드</button>
              <button type="button" class="btn sm">회원전체 메일발송</button>
            </div>
            <div>
              <form action="">
                <div class="input-box search-type4">
                  <input type="text" required placeholder="검색어를 입력하세요.">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
              <select-view
                :propOptionList='optionLsit'
                :propPlaceholder='`전체`'
                :propClass='`type3`'
                >
              </select-view>
            </div>
          </div>

          <div class="tbl list-type3 no-paging fc-gry">
            <table-lite
              :is-slot-mode="true"
              :columns="columns"
              :rows="rows"
              :total="100"
              :messages="messages"
            >
              <template v-slot:name="data">
                <div class="img-profile">
                  <span class="img">
                    <img :src="require(`@/assets/imgs/${data.value.imgSrc}`)">
                  </span>
                  <span class="name">{{data.value.name}}</span>
                </div>
              </template>
            </table-lite>
          </div> 
        </div>
      </div>
    </template>
    
    <!-- <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn lg line-type2">닫기</button>
		</div>
    </template> -->
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import TableLite from "vue3-table-lite/ts";
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    basePopup,
    TableLite,
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
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      currentTab: 0,
      tabsType: ['동호회 회원', '메일 발송'],
      columns: [
        {
          label: '이름',
          field: 'name',
          width: '18%',
          columnClasses:"tl",
        },
        {
          label: '소속팀',
          field: 'team',
          width: '20%',
        },
        {
          label: '기본정보',
          field: 'info',
          width: '',
          columnClasses:"tl",
          display: function (row2:any): any {
            const tel = row2.tel ? `${row2.tel}`: ``
            const mail = row2.mail ? `${row2.mail}`: ``
            return (
              `
                <div>${tel}</div>
                <div>${mail}</div>
              `
            );
          },
        },
        {
          label: '회원등급',
          field: 'grade',
          width: '12%',
        },
        {
          label: '가입일',
          field: 'date',
          width: '10%',
        },
        {
          label: '최종방문일',
          field: 'date2',
          width: '10%',
        },
      ],
      rows: [
        {
          imgSrc: 'icon-svg/profile-default.svg',
          name: '김한화 부장',
          team: '디지털워크그룹',
          tel: '02-1234-3000',
          mail: 'hanwha11@hanwha.com',
          grade: '운영자',
          date: '2022-02-22',
          date2: '2022-02-22',
        },
        {
          imgSrc: 'img_dummy1.png',
          name: '김한화 부장',
          team: '디지털워크그룹',
          tel: '02-1234-3000',
          mail: 'hanwha11@hanwha.com',
          grade: '운영자',
          date: '2022-02-22',
          date2: '2022-02-22',
        },
        {
          imgSrc: 'img_dummy3.png',
          name: '김한화 부장',
          team: '디지털워크그룹',
          tel: '02-1234-3000',
          mail: 'hanwha11@hanwha.com',
          grade: '운영자',
          date: '2022-02-22',
          date2: '2022-02-22',
        },
        {
          imgSrc: 'img_profile_02.png',
          name: '김한화 부장',
          team: '디지털워크그룹',
          tel: '02-1234-3000',
          mail: 'hanwha11@hanwha.com',
          grade: '운영자',
          date: '2022-02-22',
          date2: '2022-02-22',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      optionLsit: [
        { value: '전체', label: '전체' },
        { value: '가입일', label: '가입일' },
        { value: '옵션명', label: '옵션명' },
      ],
      List: [
        {
          name: '김한화 매니저',
        },
      ],
      List2: [
        {
          name: '박한화 부장',
        },
        {
          name: '김한화 매니저',
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