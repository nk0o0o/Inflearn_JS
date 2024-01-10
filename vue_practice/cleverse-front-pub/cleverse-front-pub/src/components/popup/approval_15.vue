<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="관련문서 첨부"
    class="ly-pop-type1 relate-doc"
  >
    <template v-slot:body>
      <div class="group-file-pop">
        <!-- search -->
        <div class="board-write-search">
          <div>
            <select-view
              :propOptionList="optionLsit"
              :propPlaceholder="'2015년-현재'"
              :propClass="'type1 h40'"
              >
            </select-view>
          </div>
          <div>
            <select-view
              :propOptionList="optionLsit"
              :propPlaceholder="'문서제목'"
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
          <button type="button" class="btn md line2 round-type mg-l10">상세검색</button>
        </div>
        <!-- //search -->

        <div class="group-file-pop_cont">
          <div class="nav">
            <div class="treeselect">
              <treeselect
                v-model="treeSelected"
                :max-height="410"
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
          </div>
          <div class="relate-doc-tbl">
            <!-- 전체문서 -->
            <div class="title sub">[전체문서]</div>
            <div class="flex jc-sb mg-b10 mg-t20">
              <button type="button" class="icon-btn doc">선택문서첨부</button>
              <div class="flex space multiselect-dropdown__right">
                <span class="f-14">문서종류</span>
                <div>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'전체'"
                    :propClass="'type3 w120'"
                    >
                  </select-view>
                </div>
              </div>
            </div>
            <div class="tbl type3 list-type3">
              <table-lite
                :is-slot-mode="true"
                :has-checkbox="true"
                :columns="columns"
                :rows="rows"
                :total="100"
                :messages="messages"
                >
                <template v-slot:subject="data">
                  <p class="txt">
                    <a href="javascript:void(0)">{{data.value.subject}}</a>
                  </p>
                </template>
                <template v-slot:name="data">
                  <p class="txt">{{data.value.name}}</p>
                </template>
              </table-lite>
            </div>
            <!-- //전체문서 -->

            <!-- 기안문서 -->
            <div class="title sub">[기안문서]</div>
            <div class="flex jc-sb mg-b10 mg-t20">
              <button type="button" class="icon-btn doc">선택문서첨부</button>
              <div class="flex space">
                <span class="f-14">문서종류</span>
                <div>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'전체'"
                    :propClass="'type3 w120'"
                    >
                  </select-view>
                </div>
              </div>
            </div>
            <div class="tbl type3 list-type3">
              <table-lite
                :is-slot-mode="true"
                :has-checkbox="true"
                :columns="columns"
                :rows="rows"
                :total="100"
                :messages="messages"
                >
                <template v-slot:subject="data">
                  <p class="txt">
                    <a href="javascript:void(0)">{{data.value.subject}}</a>
                  </p>
                </template>
                <template v-slot:name="data">
                  <p class="txt">{{data.value.name}}</p>
                </template>
              </table-lite>
            </div>
            <!-- //기안문서 -->

            <!-- 수신문서 -->
            <div class="title sub">[수신문서]</div>
            <div class="flex jc-sb mg-b10 mg-t20">
              <button type="button" class="icon-btn doc">선택문서첨부</button>
              <div class="flex space">
                <span class="f-14">문서종류</span>
                <div>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'지출결의서'"
                    :propClass="'type3 w120'"
                    >
                  </select-view>
                </div>
              </div>
            </div>
            <div class="tbl type3 list-type3">
              <table-lite
                :is-slot-mode="true"
                :has-checkbox="true"
                :columns="columns3"
                :rows="rows3"
                :total="100"
                :messages="messages"
                >
                <template v-slot:subject="data">
                  <p class="txt">
                    <a href="javascript:void(0)">{{data.value.subject}}</a>
                  </p>
                </template>
                <template v-slot:name="data">
                  <p class="txt">{{data.value.name}}</p>
                </template>
              </table-lite>
            </div>
            <!-- //수신문서 -->

            <!-- 대외발신문서 -->
            <div class="title sub">[대외발신문서]</div>
            <div class="flex jc-sb mg-b10 mg-t20">
              <button type="button" class="icon-btn doc">선택문서첨부</button>
              <div class="flex space">
                <span class="f-14">문서종류</span>
                <div>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'전체'"
                    :propClass="'type3 w120'"
                    >
                  </select-view>
                </div>
              </div>
            </div>
            <div class="tbl type3 list-type3">
              <table-lite
                :is-slot-mode="true"
                :has-checkbox="true"
                :columns="columns4"
                :rows="rows4"
                :total="100"
                :messages="messages"
                >
                <template v-slot:subject="data">
                  <p class="txt">
                    <a href="javascript:void(0)">{{data.value.subject}}</a>
                  </p>
                </template>
              </table-lite>
            </div>
            <!-- //대외발신문서 -->

            <!-- 디지털워크그룹 -->
            <div class="title sub">[디지털워크그룹]</div>
            <div class="flex jc-sb mg-b10 mg-t20">
              <button type="button" class="icon-btn doc">선택문서첨부</button>
            </div>
            <div class="tbl type3 list-type3">
              <table-lite
                :is-slot-mode="true"
                :has-checkbox="true"
                :columns="columns5"
                :rows="rows5"
                :total="100"
                :messages="messages"
                >
                <template v-slot:subject="data">
                  <p class="txt">
                    <a href="javascript:void(0)">{{data.value.subject}}</a>
                  </p>
                </template>
                <template v-slot:name="data">
                  <p class="txt">{{data.value.name}}</p>
                </template>
              </table-lite>
            </div>
            <!-- //디지털워크그룹 -->
          </div>
        </div>

        <div class="mg-t30 mg-b10">
          <button type="button" class="icon-btn del">전체삭제</button>
          <button type="button" class="icon-btn del">선택삭제</button>
        </div>
        <div class="tbl type3 list-type3 no-paging">
          <table-lite
            :has-checkbox="true"
            :columns="columns2"
            :rows="rows2"
            :total="100"
            :messages="messages"/>
        </div>
      </div>  
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">확인</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
import TableLite from "vue3-table-lite/ts";
import selectView from "@/components/selectView.vue"
// @ts-ignore 
import Treeselect from 'vue3-treeselect';

export default defineComponent({
  components: {
    basePopup,
    TableLite,
    Treeselect,
    selectView
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
      relateDocTbl: 0,
      error: false,
      showModal: this.propShowModal,
       optionLsit: [
        { value: '문서제목', label: '문서제목문서제목문서제목문서제목' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      columns: [
        {
          label: "문서제목",
          field: "subject",
          width: "",
          columnClasses: ['subject'],
          // display: function (row:any): any {
          //   const subject = row.subject ? `<p class='txt'>${row.subject}</p>`: ``
          //   return (
          //     `${subject}`
          //   );
          // },
        },
        {
          label: "기안자/기안부서",
          field: "name",
          width: "30%",
          // display: function (row:any): any {
          //   const name = row.name ? `<p class='txt'>${row.name}</p>`: ``
          //   return (
          //     `${name}`
          //   );
          // },
        },
        {
          label: "등록일",
          field: "date",
          width: "24%",
        },
      ],
      rows: [
        {
          subject: '[교육] [LMS 결재요청]사외위탁교육 과정신청',
          name: "김한화(한화디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
        {
          subject: '[신청] SSL VPN계정신청서',
          name: "김한화(디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
      ],
      columns3: [
        {
          label: "문서제목",
          field: "subject",
          width: "",
          columnClasses: ['subject'],
          // display: function (row3:any): any {
          //   const subject = row3.subject ? `<p class='txt'>${row3.subject}</p>`: ``
          //   return (
          //     `${subject}`
          //   );
          // },
        },
        {
          label: "등록일",
          field: "date",
          width: "24%",
        },
        {
          label: "발신처",
          field: "name",
          width: "30%",
          // display: function (row3:any): any {
          //   const name = row3.name ? `<p class='txt'>${row3.name}</p>`: ``
          //   return (
          //     `${name}`
          //   );
          // },
        },
      ],
      rows3: [
        {
          subject: '[교육] 사외위탁교육 과정신청',
          name: "김한화(한화디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
      ],
      columns4: [
        {
          label: "문서제목",
          field: "subject",
          width: "",
          columnClasses: ['subject'],
          // display: function (row3:any): any {
          //   const subject = row3.subject ? `<p class='txt'>${row3.subject}</p>`: ``
          //   return (
          //     `${subject}`
          //   );
          // },
        },
        {
          label: "요청일",
          field: "date",
          width: "24%",
        },
        {
          label: "날인일",
          field: "date2",
          width: "24%",
        },
        {
          label: "진행상태",
          field: "state",
          width: "14%",
        },
      ],
      rows4: [
        {
          subject: '[교육] 사외위탁교육 과정신청',
          date: "2022.02.24 09:52",
          date2: "2022.02.24 09:52",
          state: "날인요청",
        },
      ],
      columns5: [
        {
          label: "문서제목",
          field: "subject",
          width: "",
          columnClasses: ['subject'],
          // display: function (row3:any): any {
          //   const subject = row3.subject ? `<p class='txt'>${row3.subject}</p>`: ``
          //   return (
          //     `${subject}`
          //   );
          // },
        },
        {
          label: "작성자",
          field: "name",
          width: "30%",
          // display: function (row3:any): any {
          //   const name = row3.name ? `<p class='txt'>${row3.name}</p>`: ``
          //   return (
          //     `${name}`
          //   );
          // },
        },
        {
          label: "등록일",
          field: "date",
          width: "24%",
        },
      ],
      rows5: [
        {
          subject: '[교육] 사외위탁교육 과정신청',
          name: "김한화(한화디지털워크그룹)",
          date: "2022.02.24 09:52",
        },
      ],
      columns2: [
        {
          label: "파일이름",
          field: "subject",
          width: "",
          columnClasses:"tl",
          display: function (row2:any): any {
            const newAlarm = row2.newAlarm ? `<em class="ico-file pdf"></em>`: ``,
                  subject = row2.subject ? `<span class="txt">${row2.subject}</span>`: ``
            return (
              `
                <div class="flex">
                  ${newAlarm}
                  ${subject}
                </div>
              `
            );
          },
        },
      ],
      rows2: [
        {
          subject: 'IT Academy 과정상세 과정 과정상세과정.pptx',
          newAlarm: true,
        },
        {
          subject: 'IT Academy 과정상세 과정 과정상세과정.pptx',
          newAlarm: true,
        },
      ],
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: '',
        gotoPageLabel: '',
        noDataAvailable: "No data",
      },
      treeSelected: null,
      isMultiple: false,
      treeData: [ 
        {
          id: 'a',
          label: '하이파이브(Hi-FIVE)',
          children: [ 
            {
              id: 'aa',
              label: '2019년 풋살월드컴',
              children: [ 
                {
                  id: 'aaa',
                  label: '01_우승_준우승팀단체사진',
                } 
              ],
            }, {
              id: 'ab',
              label: '문서함',
            }, {
              id: 'ac',
              label: '2018 야구대회사진',
            } , {
              id: 'ad',
              label: '2018 축구대회사진',
            } , {
              id: 'ae',
              label: '피드파일',
            }  
          ],
        }, {
            id: 'b',
            label: '한화시스템/ICT 조직문화 공간',
        },
      ],
      optionLsit2: [
        { value: '전체', label: '전체' },
        { value: '옵션명 옵션명', label: '옵션명 옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  mounted(){
    // setTimeout(()=>{
    //   this.relateDocTbl = document.querySelectorAll('.relate-doc-tbl')[0].getBoundingClientRect().height
    // },500)
    
    // // console.log('@@@@ mounted ===>',document.querySelectorAll('.relate-doc-tbl')[0].getBoundingClientRect().height)
  },
  computed:{
    // calcH(): number{
    //   return this.relateDocTbl
    // }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
    },
  }
})
</script>