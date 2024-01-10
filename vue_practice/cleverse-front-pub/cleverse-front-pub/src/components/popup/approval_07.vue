<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="결재선 미리보기"
    class="ly-pop-type1 admin scroll"
  >
    <template v-slot:body>
      <div class="approval-preview">
        <div class="title sub">결재선</div>
        <div class="tbl list-type3 fc-gry no-paging">
          <table-lite
            :columns='columns'
            :rows='rows'
            :total='100'
            :messages='messages'/>
        </div>
        <div class="title sub">참조</div>
        <ul class="list-tbl-st">
          <li v-for="(item, index) in List" :key="index" :class="item.type">
            {{item.name}}
            <div class="input-chk square mg-l15" v-if="item.folder">
              <input type="checkbox" name="chk" :id="`chk-${index}`"><label :for="`chk-${index}`">하위부서포함</label>
            </div>
          </li>
        </ul>
        <div class="title sub">수신</div>
        <ul class="list-tbl-st">
          <li v-for="(item, index) in List2" :key="index" :class="item.type">
            {{item.name}}
          </li>
        </ul>
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
      columns: [
        {
          label: '순번',
          field: 'num',
          width: '10%',
        },
        {
          label: '이름',
          field: 'name',
          width: '12%',
        },
        {
          label: '직책',
          field: 'job',
          width: '12%',
        },
        {
          label: '부서',
          field: 'part',
          width: '',
          columnClasses:"tl",
        },
        {
          label: '결재형식',
          field: 'type',
          width: '15%',
        },
        {
          label: '전결',
          field: 'data',
          width: '12%',
        },
        {
          label: '상태',
          field: 'state',
          width: '12%',
        },
      ],
      rows: [
        {
          num: '00',
          name: '김한화',
          job: '과장',
          part: '디지털워크그룹',
          type: '일반결재',
          data: '불가능',
          state: '미결',
        },
        {
          num: '00',
          name: '김한화',
          job: '과장',
          part: '디지털워크그룹',
          type: '기안자',
          data: '불가능',
          state: '미결',
        },
        {
          num: '00',
          name: '김한화',
          job: '과장',
          part: '디지털워크그룹',
          type: '기안자',
          data: '불가능',
          state: '미결',
        },
        {
          num: '00',
          name: '김한화',
          job: '과장',
          part: '디지털워크그룹',
          type: '기안자',
          data: '불가능',
          state: '미결',
        },
        {
          num: '00',
          name: '김한화',
          job: '과장',
          part: '디지털워크그룹',
          type: '기안자',
          data: '불가능',
          state: '미결',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      List: [
        {
          type: 'person',
          name: '박한화 부장',
        },
        {
          type: 'team',
          name: 'SharedService 1팀',
          folder: true,
        },
        {
          type: 'team',
          name: 'SharedService 1팀',
          folder: true,
        },
      ],
      List2: [
        {
          type: 'team',
          name: '인사기획팀',
        },
        {
          type: 'team',
          name: '디지털워크그룹',
        },
        {
          type: 'person',
          name: '박한화 부장',
        },
        {
          type: 'person',
          name: '박한화 부장',
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