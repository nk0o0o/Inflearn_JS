<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="일자별 활동내역"
    class="ly-pop-type1 admin xl f-14"
  >
    <template v-slot:body>
      <div class="flex jc-sb ae mg-b20">
        <div class="flex col as">
          <p class="f-16">일자별로 업데이트 정보를 확인할 수 있습니다. (마지막 업데이트로부터 30일)</p>
          <p class="mg-t10 fc gray">* 텍스트 본문 수정내역과 의견/답변은 활동내역으로 제공하지 않으며, 파일은 마지막 업데이트 정보만 확인할 수 있습니다.</p>
        </div>
        <div>
          <div class="date">
            <Datepicker
              weekStart="0"
              v-model="rangeDate"
              range
              :format="rangeFormat"
              :enableTimePicker="false"/>
          </div>
        </div>
      </div>
      <div class="tbl list-type3" v-if="!nodata">
        <table-lite
          :is-slot-mode="true"
          :rowClasses="rowClasses"
          :columns="columns"
          :rows="rows"
          :total="100"
          :sortable="sortable"
          :messages="messages">
          <template v-slot:subject="data">
            {{data.value.width}}
            <div class="toe">{{ data.value.subject }}</div>
            <div class="re-de" :class="data.value.hide">
              <span class="re">{{ data.value.re }}</span>
              <span class="de">{{ data.value.de }}</span>
            </div>
          </template>

          <template v-slot:editor>
            <div class="dropdown-type2 tooltip text">
              <dropdown-menu2
                :propName="'김한화'"
                :propItem="dropItem"
                :propClass="'dropdown-type2-list type2'"
              >
              </dropdown-menu2>
            </div>
          </template>
        </table-lite>
        <!-- <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p> -->
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import Datepicker from '@vuepic/vue-datepicker'
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    basePopup,
    dropdownMenu2,
    Datepicker,
    TableLite
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
      showModal: this.propShowModal,
      rangeDate: [new Date(),new Date()],
      dropItem: {
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
      //nodata: false,
      rowClasses: (row:any) => {
        if (row.trClass == true) {
          return ["del"];
        }
      },
      columns: [
        {
          label: '마지막 업데이트',
          field: 'date',
          width: '15%',
          sortable: true,
        },
        {
          label: '구분',
          field: 'bdsDiv',
          width: '10%',
        },
        {
          label: '항목',
          field: 'statusTxt',
          width: '8%',
        },
        {
          label: '내용',
          field: 'subject',
          width: '',
          columnClasses: ['subject tl'],
        },
        {
          label: '생성/수정자',
          field: 'editor',
          width: '10%',
        },
      ],
      rows: [
        {
          date: '12시간 전',
          bdsDiv: '할일',
          statusTxt: '삭제',
          subject: '할일을 등록 시 입력한 제목이 노출되며 클릭시 상세 팝업 출력됨 할일을 등록 시 입력한 제목이 노출되며 클릭시 상세 팝업 출력됨',
          hide: '',
          re: '김한화',
          de: '유한화',
          editor: '김한화',
          trClass: true,
        },
        {
          date: '16시간 전',
          bdsDiv: '멤버',
          statusTxt: '탈퇴',
          subject: '이효리',
          hide: 'hide',
          re: '',
          de: '',
          editor: '본인',
          trClass: false,
        },
        {
          date: '2021.01.18',
          bdsDiv: '할일',
          statusTxt: '요청',
          subject: '벤치마킹 자료 요청',
          hide: '',
          re: '김한화',
          de: '유한화',
          editor: '이생명',
          trClass: false,
        },
      ],
        messages: {
        pagingInfo: '',
        pageSizeChangeLabel: '',
        gotoPageLabel: '',
        noDataAvailable: "No data",
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
    rangeFormat(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();

      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();

      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  }
})
</script>