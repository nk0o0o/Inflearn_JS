<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    title="결재진행문서"
    class="ly-pop-type1 lg scroll"
  >
    <template v-slot:body>
      <div class="tbl type2 pd-b10">
        <table-lite
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
          width: "11%",
        },
        {
          label: "기안일",
          field: "date",
          width: "18%",
        },
        {
          label: "현결재자",
          field: "name2",
          width: "11%",
        },
      ],
      rows: [
        {
          subject: "[PI ERP] [디지털워크그룹] 문서타이틀 글자수 최대 38자이후 문서타이틀 글자수 최대 38자이후",
          name: "김한화",
          date: "2022.02.22 13:00",
          name2: "박이름",
        },
        {
          subject: "[PI ERP] [디지털워크그룹] 문서타이틀",
          name: "김한화",
          date: "2022.02.22 13:00",
          name2: "박이름",
        },
        {
          subject: "[PI ERP] [디지털워크그룹] 문서타이틀",
          name: "김한화",
          date: "2022.02.22 13:00",
          name2: "박이름",
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