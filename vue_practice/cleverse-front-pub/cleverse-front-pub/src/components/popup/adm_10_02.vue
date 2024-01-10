<template>
  <base-popup 
    :propShowModal="showModal"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="SMS 수신자정보"
    class="ly-pop-type1 md"
  >
    <template v-slot:body>
		<div class="sms-wrap">
			<div class="sms-form">
        <div class="msgbox">
          <textarea name="" id="" placeholder="808byte 초과 시, 장문 문자로 자동 전환됩니다. (최대 1900Byte) 입력창.. 오른쪽 이모티콘"></textarea>
          <p>97 / 1900Byte</p>
        </div>
        <div class="send-result">
          <div class="tit">핸드폰 정보 오류(총 0명)</div>
          <div class="member">
            <span v-for="item in lists" :key="item.info">{{item.info}}</span>
          </div>
        </div>
      </div>
		</div>
    <div class="tbl type2 no-paging scroll">
      <div class="tr">수신자 리스트 (총 <strong>4</strong> 명)</div>
      <table-lite
        :columns="columns"
        :rows="rows"
        :total='100'
        :messages='messages'
      />
    </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md">닫기</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
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
		propIsScrollClass: {
      type: String,
      default: '',
    },
  },
  data(){
    return{
      showModal: this.propShowModal,
      columns: [
        {
          label: "NO",
          field: "number",
          width: "10%",
        },
        {
          label: "이름",
          field: "name",
          width: "20%",
        },
        {
          label: "번 호",
          field: "phone",
          width: "",
        },
        {
          label: "전송시간",
          field: "date",
          width: "25%",
        },
        {
          label: "전송결과",
          field: "result",
          width: "15%",
        }
      ],
      rows: [
        {
          number: "1",
          name: "수신1",
          phone: "01012345678",
          date: "2022-02-15 15:00",
          result: "대기중"
        },
        {
          number: "2",
          name: "수신2",
          phone: "01012345678",
          date: "2022-02-15 15:00",
          result: "대기중"
        },
        {
          number: "3",
          name: "수신3",
          phone: "01012345678",
          date: "2022-02-15 15:00",
          result: "대기중"
        },
        {
          number: "4",
          name: "수신4",
          phone: "01012345678",
          date: "2022-02-15 15:00",
          result: "대기중"
        },
        {
          number: "5",
          name: "수신5",
          phone: "01012345678",
          date: "2022-02-15 15:00",
          result: "대기중"
        },
        {
          number: "6",
          name: "수신6",
          phone: "01012345678",
          date: "2022-02-15 15:00",
          result: "대기중"
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      lists : [
        { info : "홍길동1 (SS1 개발) (유효하지 않는 번호)" },
        { info : "홍길동2 (SS1 개발) (유효하지 않는 번호)" },
        { info : "홍길동3 (SS1 개발) (유효하지 않는 번호)" },
        { info : "홍길동4 (SS1 개발) (유효하지 않는 번호)" },
        { info : "홍길동5 (SS1 개발) (유효하지 않는 번호)" },
        { info : "홍길동6 (SS1 개발) (유효하지 않는 번호)" },
      ]
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