<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <clubLeft/>
      <div class="layout-contents club-main">
        <!-- searchbar -->
        <div class="board-searchbar">
          <div>
            <select-view
              :propOptionList="optionLsit1"
              :propPlaceholder="'동호회'"
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
            <h2>Update</h2>
          </div>
          <swiper
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
                <span class="row-thumb">
                  <img :src="require(`@/assets/imgs/${row.src}`)">
                </span>
                <span class="row-name">
                  <span class="name">{{row.name}}</span>
                  <span class="member">{{row.member}}</span>
                </span>
                <span class="row-title">
                  {{row.title}}
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
                      <!-- <span class="num">{{tab.num}}</span> -->
                    </button>
                  </li>
                </ul>
                <div class="board-common_header">
                  <div>
                    <select-view
                        :propOptionList="optionLsit2"
                        :propPlaceholder="'최신순'"
                        :propClass="'type3'"
                        >
                    </select-view>
                  </div>
                  <div class="board_style">
                    <div class="style1"><input type="radio" name="style" id="style1" checked><label for="style1">한줄로 보기</label></div>
                    <div class="style2"><input type="radio" name="style" id="style2"><label for="style2">두줄로 보기</label></div>
                  </div>
                </div>
                
                <div class="tab-content">
                  <div v-show="currentTab == 0">
                    <ul class="club-list">
                      <li v-for="(item, index) in clubList" :key="index">
                        <span class="img">
                          <span class="thumb">
                            <img :src="require(`@/assets/imgs/${item.img}`)" alt="동호회이미지">
                          </span>
                        </span>
                        <div class="info">
                          <p class="title">
                            <strong>{{item.title}}</strong>
                            <em class="label-tag" v-if="item.official">공식</em>
                            <em class="label-tag gry" v-if="item.unofficial">비공식</em>
                          </p>
                          <p class="sector">{{item.sector}}</p>
                          <dl>
                            <dt>운영자</dt>
                            <dd>{{item.name}}</dd>
                            <dt>개설일</dt>
                            <dd>{{item.date}}</dd>
                          </dl>
                          <dl>
                            <dt>회원수</dt>
                            <dd>{{item.member}}</dd>
                            <dt>최근 1주일 간 접속 수</dt>
                            <dd>{{item.num}}</dd>
                          </dl>
                        </div>
                      </li>
                    </ul>
                    <Paging
                      v-model="page"
                      :records="500"
                      :per-page="25"
                      :options="{hideCount: true}"
                      @paginate="myCallback"
                    />
                    <p class="nodata" v-if="nodata">가입하신 동호회가 없습니다.</p>
                  </div>
                  <div v-show="currentTab == 1">
                    <!-- <ul class="board-data_list">
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
                    /> -->
                    <p class="nodata" v-if="nodata2">가입하신 동호회가 없습니다.</p>
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
import clubLeft from "./clubLeft.vue"
import selectView from "@/components/selectView.vue"
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    clubLeft,
    selectView,
    Swiper,
    SwiperSlide,
    Paging,
  },
  data() {
    return {
      propModalValue: false,
      nodata: false,
      nodata2: true,
      page: 1,
      currentTab: 0,
      tabsType: [
        { title: '전체 동호회', num: 47  },
        { title: '최신 게시글', num: 24 },
      ],
      optionLsit1: [
        { value: '동호회', label: '동호회' },
        { value: '소개글', label: '소개글' },
        { value: '운영회장', label: '운영회장' },
        { value: '개설일', label: '개설일' },
      ],
      optionLsit2: [
        { value: '최신순', label: '최신순' },
        { value: '회원수', label: '회원수' },
        { value: '이름순', label: '이름순' },
      ],
      list: [
        {
          name: "업데이트 2022.09.06",
          member: "회원수 100명",
          title: "동호회 명이 보여집니다. 동호회 명이 보여집니다.",
          contxt: "동호회의 설명글이 보여집니다. 동호회의 설명글이 보여집니다.",
          src: 'kiosk_letter_1.png'
        },
        {
          name: "업데이트 2022.09.06",
          member: "회원수 100명",
          title: "동호회 명이 보여집니다.",
          contxt: "동호회의 설명글이 보여집니다. 동호회의 설명글이 보여집니다.",
          src: 'kiosk_letter_2.png'
        },
        {
          name: "업데이트 2022.09.06",
          member: "회원수 100명",
          title: "동호회 명이 보여집니다.",
          contxt: "동호회의 설명글이 보여집니다. 동호회의 설명글이 보여집니다.",
          src: 'kiosk_letter_3.png'
        },
        {
          name: "업데이트 2022.09.06",
          member: "회원수 100명",
          title: "동호회 명이 보여집니다.",
          contxt: "동호회의 설명글이 보여집니다. 동호회의 설명글이 보여집니다.",
          src: 'kiosk_letter_1.png'
        },
      ],
      clubList: [
        {
          img: 'news-thumbnail-01.png',
          title: '동호회 명이 보여집니다. 동호회 명이 보여집니다. 동호회 명이 보여집니다. 동호회 명이 보여집니다.',
          sector: '영화/연극/뮤지컬/콘서트',
          name: '김한화 차장 (디지털워크그룹)',
          date: '2022.09.06',
          member: '100명',
          num: '10명',
          official: true,
        },
        {
          img: 'img_thumb_03.png',
          title: '동호회 명이 보여집니다.',
          sector: '영화/연극/뮤지컬/콘서트',
          name: '김한화 차장 (디지털워크그룹)',
          date: '2022.09.06',
          member: '1,000명',
          num: '1,000명',
          unofficial: true,
        },
        {
          img: 'news-thumbnail-04.png',
          title: '동호회 명이 보여집니다.',
          sector: '영화/연극/뮤지컬/콘서트',
          name: '김한화 차장 (디지털워크그룹)',
          date: '2022.09.06',
          member: '100명',
          num: '10명',
          official: true,
        },
        {
          img: 'news-thumbnail-05.png',
          title: '동호회 명이 보여집니다.',
          sector: '영화/연극/뮤지컬/콘서트',
          name: '김한화 차장 (디지털워크그룹)',
          date: '2022.09.06',
          member: '100명',
          num: '10명',
          official: true,
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