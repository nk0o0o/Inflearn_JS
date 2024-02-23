<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    title="일괄결재함"
    class="ly-pop-type1 lg scroll"
  >
    <template v-slot:body>
      <div class="board-common_header_foot mg-t0">
        <div class="board-header_data mg-t0">
          <div class="row">
            <span class="data-tit">비밀번호</span>
            <div class="input-box type3">
                <input type="password" required placeholder="">
                <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                <div class="error" v-if="error">에러 내용입력</div>
            </div>
              <button type="button" class="btn sm line-type2">반려</button>
            <button type="button" class="btn sm">승인</button>
          </div>
        </div>
      </div>
      <div class="tbl type2 pd-b10">
        <table-lite
          :has-checkbox="true"
          :columns="columns"
          :rows="rows"
          :total="100"
          :messages="messages"/>
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
          label: "문서제목",
          field: "subject",
          width: "",
          columnClasses: ["subject tl"],
          display: function (row:any): any {
            const subject = row.subject ? `<span class="txt">${row.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: "기안자",
          field: "name",
          width: "12%",
        },
        {
          label: "기안일",
          field: "date",
          width: "18%",
        },
        {
          label: "받은시간",
          field: "date2",
          width: "18%",
        },
      ],
      rows: [
        {
          subject: "[PI ERP] [디지털워크그룹] 문서타이틀 글자수 최대 38자이후 문서타이틀 글자수 최대 38자이후",
          name: "김한화",
          date: "2022.02.22 13:00",
          date2: "2022.02.22 13:00",
        },
        {
          subject: "[PI ERP] [디지털워크그룹] 문서타이틀",
          name: "김한화",
          date: "2022.02.22 13:00",
          date2: "2022.02.22 13:00",
        },
        {
          subject: "[PI ERP] [디지털워크그룹] 문서타이틀",
          name: "김한화",
          date: "2022.02.22 13:00",
          date2: "2022.02.22 13:00",
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