<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="결재문서 이력보기"
    class="ly-pop-type1 xl"
  >
    <template v-slot:body>
      <div class="title sub">수정이력</div>
      <div class="tbl list-type3 no-thead no-paging scroll mh160">
        <table-lite
          :has-checkbox="true"
          :columns="columns"
          :rows="rows"
          :total="100"
          :messages="messages"/>
      </div>
      <div class="btn-wrap ta-c mg-t30">
        <button type="button" class="btn md round-type">문서비교</button>
      </div>
      <div class="explain-wrap">
        <span>※ 범례 : </span>
        <span class="legend add">추가된 영역</span>
        <span class="legend del">삭제된 영역</span>
        <span class="legend modify">수정된 영역</span>
      </div>
      <div class="doc-compare">
        <!-- <div class="doc">
          <div class="title sub">[버전 5]</div>
          <div class="print-wrap">문서 노출 영역</div>
        </div>
        <div class="doc">
          <div class="title sub">[버전 4]</div>
          <div class="print-wrap">문서 노출 영역</div>
        </div> -->
        <iframe src="" frameborder="0" width="100%" height="500px" style="background:#f6f6f8; overflow:auto;">
          <!-- 문서 노출 영역 -->
        </iframe>
      </div>
      <div class="doc-compare">
        <!-- 선택된 문서가 없을 경우 -->
        <div class="doc no-select flex jc">
          <p>비교할 문서가 선택되지 않았습니다.<br>수정이력에서 비교할 문서를 선택해주세요.</p>
        </div>
        <!-- //선택된 문서가 없을 경우 -->
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
  },
  data(){
    return{
      error: false,
      showModal: this.propShowModal,
      columns: [
        {
          label: '버전',
          field: 'ver',
          width: '10%',
        },
        {
          label: '날짜',
          field: 'date',
          width: '22%',
        },
        {
          label: "이름",
          field: "subject",
          width: "",
          columnClasses:"tl",
          display: function (row2:any): any {
            const newAlarm = row2.newAlarm ? `<em class="ico-staff"></em>`: ``,
                  subject = row2.subject ? `<span class="txt">${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${newAlarm}
                  ${subject}
                </div>
              `
            );
          },
        },
      ],
      rows: [
        {
          ver: '버전5',
          date: '2019.05.31 10:20:31',
          subject: '김한화 과장',
          newAlarm: true,
        },
        {
          ver: '버전5',
          date: '2019.05.31 10:20:31',
          subject: '김한화 과장',
          newAlarm: true,
        },
        {
          ver: '버전5',
          date: '2019.05.31 10:20:31',
          subject: '김한화 과장',
          newAlarm: true,
        },
        {
          ver: '버전5',
          date: '2019.05.31 10:20:31',
          subject: '김한화 과장',
          newAlarm: true,
        },
        {
          ver: '버전5',
          date: '2019.05.31 10:20:31',
          subject: '김한화 과장',
          newAlarm: true,
        },
        {
          ver: '버전5',
          date: '2019.05.31 10:20:31',
          subject: '김한화 과장',
          newAlarm: true,
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
  },
  computed: {
  }
})
</script>