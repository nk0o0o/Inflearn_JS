<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="그룹 파일함"
    class="ly-pop-type1"
  >
    <template v-slot:body>
      <div class="group-file-pop">
        <div class="group-file-pop_search">
          <form action="">
            <div class="input-box search-type4">
              <input type="text" required placeholder="검색어를 입력하세요.">
              <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
              <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
              <div class="error" v-if="error">에러 내용입력</div>
            </div>
          </form>
        </div>

        <div class="group-file-pop_cont">
          <div class="nav">
            <div class="treeselect">
              <treeselect
                v-model="treeSelected"
                :max-height="410"
                :options="treeData"
                :default-expand-level="0"
                :always-open="true"
                :load-options="handleLoadOptions"
                @select="onSelect"
                @deselect="onDeselect"
                :multiple="isMultiple"
                :autoSelectDescendants="false"
                :flat="true"
              ></treeselect>
            </div>
          </div>
          <div>
            <div class="tbl type3">
              <table-lite
                :columns="columns"
                :rows="rows"
                :total="100"
                :messages="messages"/>
            </div>
          </div>
        </div>

      </div>  
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn lg">선택</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
import TableLite from "vue3-table-lite/ts";
// @ts-ignore 
import Treeselect from 'vue3-treeselect';

export default defineComponent({
  components: {
    basePopup,
    TableLite,
    Treeselect,
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
          label: "파일명",
          field: "subject",
          width: "50%",
          columnClasses: ['subject'],
        },
        {
          label: "생성일자",
          field: "date1",
          width: "",
        },
        {
          label: "수정일자",
          field: "date2",
          width: "",
        },
      ],
      rows: [
        {
          subject: 'Photo.00011.JPG',
          date1: "2022.02.24",
          date2: "2022.02.24",
        },
        {
          subject: 'Photo.00012.JPG',
          date1: "2022.02.24",
          date2: "2022.02.24",
        },
        {
          subject: 'Photo.00013.JPG',
          date1: "2022.02.24",
          date2: "2022.02.24",
        },
      ],
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: '',
        gotoPageLabel: '',
        noDataAvailable: "No data",
      },
      treeSelected: null,
      isMultiple: false,
      treeData: [ 
        {
          id: 'a',
          label: '하이파이브(Hi-FIVE)',
          children: [ 
            {
              id: 'aa',
              label: '2019년 풋살월드컴',
              children: [ 
                {
                  id: 'aaa',
                  label: '01_우승_준우승팀단체사진',
                } 
              ],
            }, {
              id: 'ab',
              label: '문서함',
            }, {
              id: 'ac',
              label: '2018 야구대회사진',
            } , {
              id: 'ad',
              label: '2018 축구대회사진',
            } , {
              id: 'ae',
              label: '피드파일',
            }  
          ],
        }, {
            id: 'b',
            label: '한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간한화시스템/ICT 조직문화 공간',
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
  },
  computed: {
  }
})
</script>