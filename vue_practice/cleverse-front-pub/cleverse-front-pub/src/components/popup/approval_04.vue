<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="개인 결재선"
    class="ly-pop-type1 lg f-14"
  >
    <template v-slot:body>
      <div class="flex jc-sb btn-wrap pd-t20">
        <button type="button" class="btn sm line-type2 round-type">삭제</button>
        <button type="button" class="btn sm round-type">추가</button>
      </div>
      <div class="tbl list-type3 approval-maxH-type1 mg-b30 no-paging">
        <table-lite
          :has-checkbox="true"
          :columns='columns'
          :rows='rows'
          :total='100'
          :messages='messages'
          :is-fixed-first-column="true"
          />
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
          label: '결재선명',
          field: 'name',
          width: '15%',
        },

        {
          label: '결재선명',
          field: 'name2',
          width: '',
          columnClasses:"tl",
        },
        {
          label: '등록일',
          field: 'date',
          width: '16%',
          columnClasses:"fc gray",
        },
         {
          label: '수정일',
          field: 'date2',
          width: '16%',
          columnClasses:"fc gray",
        },
      ],
      rows: [
        {
          id: 0,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 1,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 3,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 4,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 5,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 6,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 7,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 8,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 9,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 10,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 11,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 12,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 13,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 14,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
        },
        {
          id: 15,
          name: '부장',
          name2: '팀장님까지',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
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