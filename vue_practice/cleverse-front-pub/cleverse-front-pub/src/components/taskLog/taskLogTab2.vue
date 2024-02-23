<template>
  <div>
    <h1 class="mg-t30">파일</h1>
    <div class="flex jc-sb mg-b20">
      <div class="f-14 mg-t20">총 <strong>160</strong>건</div>
      <div class="flex">
        <form action="">
          <div class="input-box search-type-1 mg-r20">
            <input type="text" required placeholder="파일명 검색">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
            <div class="list">
              <ul>
                <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                <li>Digital C.P.C. 기반 구축 </li>
                <li>Digital Infra 구축</li>
                <li>Digital Infra 구축</li>
              </ul>
            </div>
          </div>
        </form>
        <div class="dropdown-type1 filter">
          <filterBox-fileList></filterBox-fileList>
        </div>
        <button type="button" class="btn md mg-l20">다운로드</button>
      </div>
    </div>
      
    <div class="tbl list-type3">
      <table-lite
        :has-checkbox="true"
        :is-slot-mode="true"
        :rowClasses="rowClasses"
        :columns="columns"
        :rows="rows"
        :total="100"
        :sortable="sortable"
        :messages="messages">

        <template v-slot:editor>
          <div class="dropdown-type2 tooltip text">
            <dropdown-menu2
              :propName="'김한화'"
              :propItem="dropItem"
              :propClass="'dropdown-type2-list type2'"
            >
            </dropdown-menu2>
          </div>
        </template>

        <template v-slot:more>
          <div class="drop">
            <div class="dropdown-type1 dot-gry">
              <dropdown-menu
                :propItem="dropItem2"
              ></dropdown-menu>
            </div>
          </div>
        </template>
      </table-lite>
    </div>

    <div class="tbl list-type3" v-if="!nodata2">
      <table-lite
        :has-checkbox="true"
        :is-slot-mode="true"
        :rowClasses="rowClasses"
        :columns="columns"
        :rows="rows"
        :total="100"
        :sortable="sortable"
        :messages="messages">

        <template v-slot:editor>
          <div class="dropdown-type2 tooltip text">
            <dropdown-menu2
              :propName="'김한화'"
              :propItem="dropItem"
              :propClass="'dropdown-type2-list type2'"
            >
            </dropdown-menu2>
          </div>
        </template>

        <template v-slot:more>
          <div class="drop">
            <div class="dropdown-type1 dot-gry">
              <dropdown-menu
                :propItem="dropItem2"
              ></dropdown-menu>
            </div>
          </div>
        </template>
      </table-lite>
    </div>
    <p class="no-data" v-if="nodata2">조회된 결과가 없습니다</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TableLite from "vue3-table-lite/ts";
import dropdownMenu from "@/components/dropdownMenu3.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import filterBoxFileList from "@/components/taskLog/filterBoxFileListB.vue";

export default defineComponent({
  components: {
    TableLite,
    dropdownMenu,
    dropdownMenu2,
    filterBoxFileList,
  },
  data() {
    return {
      nodata2: true,
      dropItem: {
        title: `
          <div class="tooltip-member">
            <div>
              <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
              <p><b>김한화</b> <span class="pos">직위/직책</span></p>
            </div>
            <p class="cp">회사명 <span></span> 소속조직명</p>
            <p class="phone">010-1234-2336</p>
            <p class="email">mail@hanwha.com</p>
          </div>
        `,
      },
      dropItem2: [
				{ title: '다운로드'},
				{ title: '파일 삭제' },
			],
      columns: [
        {
          label: '구분',
          field: 'cate',
          width: '13%',
        },
        {
          label: '파일명',
          field: 'subject',
          width: '',
          sortable: true,
          columnClasses: 'tl toe',
          display: function (row2:any): any {
            const iconPdf = row2.iconPdf ? `<em class="ico-file pdf"></em>`: ``,
                  iconExcel = row2.iconExcel ? `<em class="ico-file excel"></em>`: ``,
                  iconHwp = row2.iconHwp ? `<em class="ico-file hwp"></em>`: ``,
                  iconImg = row2.iconImg ? `<em class="ico-file img"></em>`: ``,
                  subject = row2.subject ? `<span class="txt">${row2.subject}</span>`: ``
            return (
              `
                <div class="flex">
                  ${iconPdf}
                  ${iconExcel}
                  ${iconHwp}
                  ${iconImg}
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '마지막 업데이트',
          field: 'date',
          width: '13%',
          sortable: true,
        },
        {
          label: '생성/수정자',
          field: 'editor',
          width: '12%',
          sortable: true,
        },
        {
          label: '더보기',
          field: 'more',
          width: '6%',
        },
      ],
      rows: [
        {
          cate: '최종결과물',
          subject: '상반기 보험사 영업실적 보고 상반기 보험사 영업실적 보고 상반기 보험사 영업25상반기 보험사 영업실적 보고 상반기 영업실적 보고',
          date: '2022.02.24',
          name: '김한화',
          more: '',
          iconPdf: true,
        },
        {
          cate: '의사결정',
          subject: '상반기 보험사 영업실적 보고',
          date: '2022.02.24',
          name: '김한화',
          more: '',
          iconExcel: true,
        },
        {
          cate: '보드',
          subject: '상반기 보험사 영업실적 보고',
          date: '2022.02.24',
          name: '김한화',
          more: '',
          iconHwp: true,
        },
        {
          cate: '보드',
          subject: '상반기 보험사 영업실적 보고',
          date: '2022.02.24',
          name: '김한화',
          more: '',
          iconImg: true,
        },
      ],
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: '',
        gotoPageLabel: '',
        noDataAvailable: "No data",
      },

    };
  },
  methods: {

  },
  computed: {

  }
});
</script>