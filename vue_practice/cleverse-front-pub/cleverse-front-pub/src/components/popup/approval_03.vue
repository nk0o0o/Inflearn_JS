<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="전자결재 수신처 조회"
    class="ly-pop-type1 admin scroll"
  >
    <template v-slot:body>
    <div class='tbl list-type3 no-paging'>
      <table-lite
        :columns='columns'
        :rows='rows'
        :total='100'
        :messages='messages'/>
    </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">선택</button>
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
          label: '수신처',
          field: 'name',
          width: '',
        },
       
        {
          label: '수신일',
          field: 'date',
          width: '25%',
          columnClasses:"fc gray",
        },
        {
          label: '열람일',
          field: 'date2',
          width: '25%',
          columnClasses:"fc gray",
        },
         {
          label: '상태',
          field: 'state',
          width: '15%',
          columnClasses:"fc gray",
        },
      ],
      rows: [
        {
          id: 0,
          name: '김한화 부장',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '열람',
        },
        {
          id: 1,
          name: '김한화 부장',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '미열람',
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