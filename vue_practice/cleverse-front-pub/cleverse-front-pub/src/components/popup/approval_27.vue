<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="승인자 정보"
    class="ly-pop-type1 md scroll"
  >
    <template v-slot:body>
      <div class="tbl list-type3 no-paging">
        <table-lite
          :columns='columns'
          :rows='rows'
          :total='100'
          :messages='messages'
          />
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">취소</button>
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
          label: '번호',
          field: 'num',
          width: '20%',
        },

        {
          label: '승인자 정보',
          field: 'info',
          width: '',
        },
      ],
      rows: [
        {
          num: '1',
          info: '김한화 사원/—(000-0000-0000)',
        },
        {
          num: '2',
          info: '김한화 사원/—(000-0000-0000)',
        },
        {
          num: '3',
          info: '김한화 사원/—(000-0000-0000)',
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