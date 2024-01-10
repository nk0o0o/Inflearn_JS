<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="첨언보기"
    class="ly-pop-type1 admin lg scroll"
  >
    <template v-slot:body>
      <div class="tab-type3" id="tabs-type">
        <ul class="tab-menu type2">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>
      <div class="cont tbl">
        <div v-show="currentTab == 0">
          <div class='tbl list-type3 no-paging'>
            <table-lite
              :columns='columns'
              :rows='rows'
              :total='100'
              :messages='messages'/>
          </div>
        </div>
        <div v-show="currentTab == 1">

        </div>
      </div>
    </template>

    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn lg">확인</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    basePopup,
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
      error: false,
      showModal: this.propShowModal,
      currentTab: 0,
      tabsType: ['결재의견', '전달의견'],
      columns: [
        {
          label: '이름/부서',
          field: 'name',
          width: '25%',
        },

        {
          label: '작성일',
          field: 'date',
          width: '18%',
          columnClasses:"fc gray",
        },
        {
          label: '의견',
          field: 'opinion',
          width: '',
          columnClasses:"tl opinion-h",
        },
      ],
      rows: [
        {
          id: 0,
          name: '김한화 부장 / IDC기획3팀',
          date: '2022.02.22 13:00',
          opinion: '데이터센터 기반시설 수준진단 진행과 관련하여 개선작업시에 추가로 진행하려고 합니다.',
        },
        {
          id: 1,
          name: '김한화 부장 / IDC기획3팀',
          date: '2022.02.22 13:00',
          opinion: '데이터센터 기반시설',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
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