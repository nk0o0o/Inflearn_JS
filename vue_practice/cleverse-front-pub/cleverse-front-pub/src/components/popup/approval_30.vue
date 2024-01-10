<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    title="동명인 검색 결과"
    class="ly-pop-type1 lg"
  >
    <template v-slot:body>
      <div class="tbl-head-sch">
        <span class="total">총<em>99</em>명</span>
      </div>
      <div class="tbl type2">
        <table-lite
          :has-checkbox="true"
          :columns="columns"
          :rows="rows"
          :total="100"
          :messages="messages"/>
      </div>
    </template>

    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">닫기</button>
        <button type="button" class="btn lg">확인</button>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from "vue"
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
      error: false,
      showModal: this.propShowModal,
      columns: [
        {
          label: "이름",
          field: "name",
          width: "13%",
          columnClasses: ['fc dark'],
        },
        {
          label: "아이디",
          field: "iden",
          width: "13%",
        },
        {
          label: "직위",
          field: "pos",
          width: "10%",
        },
        {
          label: "회사",
          field: "comp",
          width: "16%",
        },
        {
          label: "부서",
          field: "part",
          width: "",
        },
        {
          label: "전화번호",
          field: "tel",
          width: "12%",
        },
        {
          label: "이동전화",
          field: "tel2",
          width: "12%",
        },
      ],
      rows: [
        {
          name: "김한화(EP)",
          iden: "hanwha001",
          pos: "매니저",
          comp: "한화시스템/ICT",
          part: "금융솔루션사업부",
          tel: "070-1234-0000",
          tel2: "010-1234-0000",
        },
        {
          name: "김한화",
          iden: "hanwha001",
          pos: "상무",
          comp: "한화시스템/ICT",
          part: "EP",
          tel: "070-1234-0000",
          tel2: "010-1234-0000",
        },
        {
          name: "김한화",
          iden: "hanwha001",
          pos: "매니저",
          comp: "한화시스템/ICT",
          part: "금융솔루션사업부",
          tel: "070-1234-0000",
          tel2: "010-1234-0000",
        },
        {
          name: "김한화",
          iden: "hanwha001",
          pos: "매니저",
          comp: "한화시스템/ICT",
          part: "금융솔루션사업부",
          tel: "070-1234-0000",
          tel2: "010-1234-0000",
        },
        {
          name: "김한화",
          iden: "hanwha001",
          pos: "매니저",
          comp: "한화시스템/ICT",
          part: "금융솔루션사업부",
          tel: "070-1234-0000",
          tel2: "010-1234-0000",
        },
        {
          name: "김한화",
          iden: "hanwha001",
          pos: "매니저",
          comp: "한화시스템/ICT",
          part: "금융솔루션사업부",
          tel: "070-1234-0000",
          tel2: "010-1234-0000",
        },
      ],
      messages: {
        pagingInfo: "",
        pageSizeChangeLabel: "",
        gotoPageLabel: "",
        noDataAvailable: "No data",
      },
    }
  },
  watch: {
    "propShowModal": function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit("popClose");
    },
  }
})
</script>