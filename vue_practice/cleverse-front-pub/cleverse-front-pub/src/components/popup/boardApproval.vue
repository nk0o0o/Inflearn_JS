<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="게시판 승인관리"
    class="ly-pop-type1"
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
            <div class="board-approval_wrap">
              <div class="bn">
                <button type="button" class="btn sm line-type2">반려</button>
                <button type="button" class="btn sm line-type2">승인</button>
              </div>
              <div class="tbl type2">
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox="true"
                  :columns="columns"
                  :rowClasses="rowClasses"
                  :rows="rows"
                  :total="100"
                  :messages="messages"
                  @row-clicked="rowClicked"
                  >
                </table-lite>
              </div>
            </div>
          </div>
          <div v-show="currentTab == 1">
            <div class="board-approval_wrap">
              <div class="bn">
                <button type="button" class="btn sm line-type2">대기</button>
                <button type="button" class="btn sm line-type2">반려</button>
              </div>
              <div class="tbl type2">
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox="true"
                  :columns="columns"
                  :rowClasses="rowClasses"
                  :rows="rows"
                  :total="100"
                  :messages="messages"
                  @row-clicked="rowClicked"
                  >
                </table-lite>
              </div>
            </div>
          </div>
          <div v-show="currentTab == 2">
            <div class="board-approval_wrap">
              <div class="bn">
                <button type="button" class="btn sm line-type2">대기</button>
                <button type="button" class="btn sm line-type2">반려</button>
              </div>
              <div class="tbl type2">
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox="true"
                  :columns="columns"
                  :rowClasses="rowClasses"
                  :rows="rows2"
                  :total="100"
                  :messages="messages"
                  @row-clicked="rowClicked"
                  >
                </table-lite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <template v-slot:btnWrap>
    <div class="btn-wrap right">
			<button type="button" class="btn lg">닫기</button>
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
    TableLite,
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
      tabsType: ['대기', '승인', '반려'],
      rowClicked: (row:any) => {
        alert('Row click');
        console.log("Row clicked!", row);
      },
      columns: [
        {
          label: "번호",
          field: "number",
          width: "10%",
          columnClasses: ["bk"],
        },
        {
          label: "제목",
          field: "title",
          width: "55%",
          columnClasses: "tl bk",
          display: function (row:any) {
            const newAlarm = row.newAlarm ? `<em class="ico-new">NEW</em>`: ``;
            return (
              `<a href="javascript:void(0)" data-id="${row.id}">${row.title} ${newAlarm}</a>`
            );
          },
        },
        {
          label: "작성자",
          field: "writer",
          width: "15%",
        },
        {
          label: "등록일",
          field: "registration",
          width: "20%",
        },
      ],
      rows: [
        {
          id: 0,
          number: 11,
          title: '알림대상 테스트',
          newAlarm: true,
          writer: "그룹웨어운영자",
          registration: "2022.02.22 13:00",
        },
        {
          id: 1,
          number: 10,
          title: '알림대상 테스트',
          writer: "그룹웨어운영자",
          registration: "2022.02.22 13:00",
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: '등록된 내용이 없습니다.',
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