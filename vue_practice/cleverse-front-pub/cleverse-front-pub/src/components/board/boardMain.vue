<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <boardLeft/>
      <div class="layout-contents">
        <!-- searchbar -->
        <div class="board-searchbar">
          <div>
            <select-view
              :propOptionList="optionLsit1"
              :propPlaceholder="'전체'"
              >
            </select-view>
          </div>
          <div>
            <select-view
              :propOptionList="optionLsit2"
              :propPlaceholder="'1개월'"
              >
            </select-view>
          </div>
          <div>
            <form action="">
              <div class="input-box">
                <input type="text" required placeholder="검색어를 입력하세요.">
                <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
              </div>
            </form>
          </div>
        </div>
        <!-- //searchbar -->
        <!-- slider -->
        <div class="board-slider">
          <div class="board-slider_head">
            <h2>Key News</h2>
            <div>
              <button type="button" class="icon-btn edit">Edit</button>
            </div>
          </div>
          <swiper
            :breakpoints="swiperOptions.breakpoints"
            :slides-per-view="3"
            :space-between="16"
            :modules="modules"
            :pagination="pagination"
            :navigation="navigation"
            :loop="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide v-for="(swiperItem, swiperIdx) in this.division(1, this.list)" :key="swiperIdx">
              <a href="#" class="row" v-for="(row, idx) in swiperItem" :key="idx">
                <!-- as-is
                <span
                  class="row-thumb"
                  :style="`background-image: url(`+require(`@/assets/imgs/${row.src}`)+`)`"
                />
                -->
                <span class="row-thumb">
                  <img :src="require(`@/assets/imgs/${row.src}`)">
                </span>
                <span class="row-name">
                  <span class="name">{{row.name}}</span>
                </span>
                <span class="row-contxt">
                  {{row.contxt}}
                </span>
              </a>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next" slot:button-next></div>
          <div class="swiper-button-prev" slot:button-prev></div>
        </div>
        <!-- //slider -->
        <!-- board -->
        <div class="board-common_wrap">
          <div class="board-data favor">
            <div class="tab-type3">
                <ul class="tab-menu">
                  <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
                    <button type="button" @click="tabClick(index)">
                      {{tab.title}}
                      <span class="num">{{tab.num}}</span>
                    </button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div v-show="currentTab == 0">
                    <div class="tbl type2" v-if="!nodata">
                      <table-lite
                        :is-slot-mode="true"
                        :columns="columns"
                        :rows="rows"
                        :rowClasses="rowClasses"
                        :total="100"
                        :messages="messages"
                      >
                        <template v-slot:writer="data">
                          <div class="dropdown-type2 tooltip text">
                            <dropdown-menu2
                              :propModalValue="propModalValue"
                              :propLocation="'bottom start'"
                              :propName="data.value.writer"
                              :propItem="dropItem"
                              :propClass="'dropdown-type2-list type3'"
                            >
                            </dropdown-menu2>
                          </div>
                        </template>
                      </table-lite>
                    </div>
                    <p class="nodata" v-if="nodata">검색결과가 없습니다.</p>
                  </div>
                  <div v-show="currentTab == 1">
                    <ul class="board-data_list">
                      <li v-for="(search, index) in searchList" :key="index">
                        <strong class="tit" v-html="search.title"></strong>
                        <span class="loc">{{search.location}}</span>
                      </li>
                    </ul>
                    <Paging
                      v-model="page"
                      :records="500"
                      :per-page="25"
                      :options="{hideCount: true}"
                      @paginate="myCallback"
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- //board -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import boardLeft from "./boardLeft.vue"
import selectView from "@/components/selectView.vue"
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import TableLite from "vue3-table-lite/ts";
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

//@ts-ignore
import Paging from 'v-pagination-3';


export default defineComponent({
  components: {
    boardLeft,
    selectView,
    Swiper,
    SwiperSlide,
    TableLite,
    Paging,
    dropdownMenu2,
  },
  data() {
    return {
      swiperOptions: {
        // breakpoints: {
        //   1500: {
        //     slidesPerView: 4,       
        //     spaceBetween: 16,
        //   }
        // },
      },
      propModalValue: false,
      nodata: false,
      page: 1,
      currentTab: 0,
      tabsType: [
        { title: '게시글', num: 47  },
        { title: '게시판', num: 24 },
      ],
      searchList: [
        {
          title: '게시글 제목 영역 <em>검색어</em>',
          location: '회사 게시판 > 한화시스템/ICT길잡이',
        },
        {
          title: '게시글 제목 영역 <em>검색어</em>',
          location: '회사 게시판 > 한화시스템/ICT길잡이 > 인사총무',
        },
        {
          title: '게시글 제목 영역 <em>검색어</em>',
          location: '회사 게시판 > 한화시스템/ICT길잡이 > 인사총무 > 사옥이전 정보공유 > 사옥이전 정보공유',
        },
        {
          title: '게시글 제목 영역 <em>검색어</em>',
          location: '회사 게시판 > 한화시스템/ICT길잡이',
        },
        {
          title: '게시글 제목 영역 <em>검색어</em>',
          location: '회사 게시판 > 한화시스템/ICT길잡이 > 인사총무',
        },
      ],
      optionLsit1: [
        { value: '전체', label: '전체' },
        { value: '게시판', label: '게시판' },
        { value: '제목', label: '제목' },
        { value: '작성자', label: '작성자' },
        { value: '내용', label: '내용' },
      ],
      optionLsit2: [
        { value: '전체', label: '전체' },
        { value: '1주일', label: '1주일' },
        { value: '1개월', label: '1개월' },
        { value: '2개월', label: '2개월' },
        { value: '3개월', label: '3개월' },
        { value: '4개월', label: '4개월' },
        { value: '5개월', label: '5개월' },
        { value: '6개월', label: '6개월' },
        { value: '7개월', label: '7개월' },
        { value: '8개월', label: '8개월' },
        { value: '9개월', label: '9개월' },
        { value: '10개월', label: '10개월' },
        { value: '11개월', label: '11개월' },
        { value: '1년', label: '1년' },
      ],
      list: [
        {
          name: "게시판명",
          contxt: "게시판 타이틀 영역입니다.",
          src: 'kiosk_letter_1.png'
        },
        {
          name: "게시판명",
          contxt: "게시판 타이틀 영역입니다. 최대 2줄까지 노출됩니다. 게시판 타이틀 영역입니다. 최대 2줄까지 노출됩니다.",
          src: 'kiosk_letter_2.png'
        },
        {
          name: "게시판명",
          contxt: "게시판 타이틀 영역입니다.",
          src: 'kiosk_letter_3.png'
        },
        {
          name: "게시판명",
          contxt: "게시판 타이틀 영역입니다. 최대 2줄까지 노출됩니다.",
          src: 'kiosk_letter_1.png'
        },
        {
          name: "게시판명",
          contxt: "게시판 타이틀 영역입니다.",
          src: 'kiosk_letter_2.png'
        },
        {
          name: "게시판명",
          contxt: "게시판 타이틀 영역입니다. 최대 2줄까지 노출됩니다.",
          src: 'kiosk_letter_3.png'
        },
      ],
      pagination: {
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
      modules: [Pagination, Navigation, Autoplay],
      columns: [
        {
          label: "게시판",
          field: "kind",
          width: "12%",
          columnClasses: ['kind'],
        },
        {
          label: "첨부",
          field: "attach",
          width: "7%",
          display: function (row:any): any {
            return (
              `<span class="btn-attach">첨부</span>`
            );
          },
        },
        {
          label: "제목",
          field: "subject",
          width: "41%",
          columnClasses: ['subject'],
          display: function (row:any): any {
            const newAlarm = row.newAlarm ? `<em class="ico-alarm">alarm</em>`: ``,
                  newIcon = row.newIcon ? `<em class="ico-new">NEW</em>`: ``,
                  urgency = row.urgency ? `<em class="ico-urgency">긴급</em>`: ``,
                  reply2 = row.reply2 ? `<em class="txt-reply">Re.</em>`: ``;
            return (
              `
                <div>
                  ${reply2}
                  ${newAlarm}
                  ${urgency}
                  <a href="javascript:void(0)" class="txt" data-id="${row.id}">${row.subject}</a>
                  ${newIcon}
                </div>
              `
            );
          },
        },
        {
          label: "작성자",
          field: "writer",
          width: "12%",
          columnClasses: ['writer'],
        },
        {
          label: "등록일",
          field: "date",
          width: "20%",
        },
        {
          label: "조회",
          field: "check",
          width: "8%",
        },
      ],
      rows: [
        {
          id: 0,
          kind: '공지사항',
          subject: '게시판 타이틀 영역1',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newIcon: true,
          //newAlarm: true,
          urgency: true,
        },
        {
          id: 1,
          kind: '공지사항',
          subject: '게시판 타이틀 영역2',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newIcon: false,
          newAlarm: false,
          reply2: true,
        },
        {
          id: 2,
          kind: '공지사항',
          subject: '게시판 타이틀 영역3',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newIcon: false,
          newAlarm: false,
          trClass: true,
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      rowClasses: (row:any) => {
        if (row.trClass) {
          return ["writed"]; //조건문으로 분기 할 경우
        }
        return ["bbb", "other"];// default로 클래스 추가 하고 싶을 경우
      },
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
    };
  },
  methods: {
    tabClick(idx:number){
      this.propModalValue=false
      setTimeout(() => {
        this.currentTab = idx
      }, 300);
    },
    division(n: number, argArr = 'everyone') {
      let arr = JSON.parse(JSON.stringify(argArr));
      let len = arr.length;
      let cnt = Math.floor(len / n);
      let tmp = [];
      if(len % n == 0 ) {
        cnt = cnt - 1;
      }
      for (let i = 0; i <= cnt; i++) {
        tmp.push(arr.splice(0, n));
      }
      return tmp;
    },
  },
  computed: {

  }
})
</script>