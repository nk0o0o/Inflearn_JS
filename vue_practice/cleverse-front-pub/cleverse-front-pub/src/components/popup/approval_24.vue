<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    title="공시대상 안내"
    class="ly-pop-type1 lg f-14 scroll"
  >
    <template v-slot:body>
      <div class="fc org f-14 mg-b15">※ 기안문서가 아래의 공시정보를 포함하고 있는지 확인하여 주시기 바랍니다.</div>
      <div class='tbl list-type3 pay scroll no-paging'>
        <table-lite
          :is-slot-mode='true'
          :columns='columns'
          :rows='rows'
          :total='100'
          :messages='messages'
          >
          <template v-slot:check="data">
            <div class="input-radio h16">
              <input type="radio" :name="'radio'+data.value.idx" :id="'radio'+data.value.idx" checked>
              <label :for="'radio'+data.value.idx"></label>
            </div>
          </template>
          <template v-slot:uncheck="data">
            <div class="input-radio h16">
              <input type="radio" :name="'radio'+data.value.idx" :id="'radio'+data.value.idx+'-1'">
              <label :for="'radio'+data.value.idx+'-1'"></label>
            </div>
          </template>
        </table-lite>
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
      columns: [
        {
          label: 'NO',
          field: 'idx',
          width: '10%',
          sortable: false
        },
        {
          label: '구분',
          field: 'cate',
          width: '15%',
        },
        {
          label: '내용',
          field: 'subject',
          width: '40%',
          columnClasses:"tl",
        },
        {
          label: '금액기준',
          field: 'amount',
          width: '15%',
        },
        {
          label: '해당',
          field: 'check',
          width: '10%',
        },
        {
          label: '미해당',
          field: 'uncheck',
          width: '10%',
        },
      ],
      rows: [
        {
          idx: 1,
          cate: '내부거래공시',
          subject: '계열회사간 내부거래(자금, 자산, 유가증권, 상품/용역 거래)에 해당하는가?',
          amount: '모든건',
          check: true,
          uncheck: false,
        },
        {
          idx: 2,
          cate: '영업 및 생산활동',
          subject: '거래처와의 계약체결/해지 및 거래 중단과 관련한 내용을 포함하고 있는가?',
          amount: '386억원 이상',
          check: true,
          uncheck: false,
        },
        {
          idx: 3,
          cate: '투자활동',
          subject: '신규시설투자, 공장증설, 중요한 자산의 취득 및 처분과 관련된 내용을 포함하고 있는가?',
          amount: '484억원 이상',
          check: true,
          uncheck: false,
        },
        {
          idx: 4,
          cate: '손익에 관한 사항',
          subject: '회사에 벌금, 과태료 등이 부과 되거나, 임직원 횡령 배임사실의 확인과 관련된 내용인가?',
          amount: '242억원 이상',
          check: true,
          uncheck: false,
        },
        {
          idx: 5,
          cate: '소송 관련',
          subject: '기업 경영활동 중 소송 절차가 제기(신청)되거나 판결(결정)된 사실을 포함하고 있는가?',
          amount: '모든건',
          check: true,
          uncheck: false,
        },
        {
          idx: 6,
          cate: '중요사실 관련',
          subject: '증자/강자, 합병/분할, 영업양수도 등 종속회사 경영과 관련한 중요사실을 포함하고 있는가?',
          amount: '모든건',
          check: true,
          uncheck: false,
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