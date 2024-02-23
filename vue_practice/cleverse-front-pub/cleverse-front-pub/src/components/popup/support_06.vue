<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="시스템 담당자 안내"
    class="ly-pop-type1 md scroll"
  >
    <template v-slot:body>
      <div class="guide-box gry mg-b20">
        <p class="list-txt fc dark">
          Cleverse 이외 개별 서비스에 대한 문의는 아래 연락처로 연락 부탁드립니다.
        </p>
      </div>

      <div class="tbl list-type3 no-paging">
        <table-lite
          is-slot-mode="true"
          :columns="columns"
          :rows="rows"
          :total="100"
          :messages="messages"
          >
          <template v-slot:info="data">
            <div class="team-info">
              <span class="part">{{data.value.team}}</span>
              <em>-</em><i class="icon-phone"></i>
              <span class="num">{{data.value.phone}}</span>
            </div>
          </template>
        </table-lite>
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
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      columns: [
        {
          label: '업무시스템명',
          field: 'subject',
          width: '39%',
        },
        {
          label: '문의처',
          field: 'info',
          width: '',
          columnClasses: ['tl'],
        },
      ],
      rows: [
        {
          subject: '한화톡톡',
          team: '한화시스템/ICT VOC운영팀',
          phone: '02-6313-3827',
        },
        {
          subject: '인사 시스템(HR)',
          team: '한화시스템/ICT E-HR운영팀',
          phone: '02-6313-3222'
        },
        {
          subject: 'DLP(개인정보보호)',
          team: '한화시스템/ICT 보안관리팀',
          phone: '031-8014-2044',
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