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
        <div class="board-common_wrap">
          <div class="board-data favor tsch">
            <div class="tab-type3">
                <ul class="tab-menu">
                  <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
                    <button type="button" @click="currentTab = index">
                      {{tab.title}}
                      <span class="num" v-if="tab.num">{{tab.num}}</span>
                    </button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div v-show="currentTab == 0">
                    <div class="tsch-list">
                      <ul>
                        <li v-for="(item, index) in schList1" :key="index">
                          <div class="tit">
                            <strong v-html="item.title"></strong>
                          </div>
                          <p class="cont" v-html="item.text"></p>
                          <div class="location" v-html="item.route"></div>
                          <div class="person">
                            <p>
                              <span class="tip">
                                <span class="dropdown-type2 tooltip text">
                                  <dropdown-menu2
                                    :propName="item.name"
                                    :propItem="dropItem2"
                                    :propLocation="'bottom start'"
                                    :propClass="'dropdown-type2-list type3'"
                                  >
                                  </dropdown-menu2>
                                </span>
                              </span>
                              <span class="date">{{item.date}}</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Paging
                      v-model="page"
                      :records="500"
                      :per-page="25"
                      :options="{hideCount: true}"
                      @paginate="myCallback"
                    />
                    <div class="nodata-wrap">
                      <p class="result">검색결과 <em>0</em></p>
                      <p class="nodata task" v-if="nodata">검색결과가 없습니다.</p>
                    </div>
                  </div>
                  <div v-show="currentTab == 1">
                    <div class="tsch-list type2">
                      <ul>
                        <li v-for="(item, index) in schList2" :key="index">
                          <div class="tit">
                            <strong v-html="item.title"></strong>
                          </div>
                          <div class="location" v-html="item.route"></div>
                        </li>
                      </ul>
                    </div>
                    <Paging
                      v-model="page"
                      :records="500"
                      :per-page="25"
                      :options="{hideCount: true}"
                      @paginate="myCallback"
                    />
                    <div class="nodata-wrap">
                      <p class="result">검색결과 <em>0</em></p>
                      <p class="nodata task" v-if="nodata">검색결과가 없습니다.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import boardLeft from "./boardLeft.vue"
import selectView from "@/components/selectView.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    boardLeft,
    selectView,
    Paging,
    dropdownMenu2,
  },
  data() {
    return {
      nodata: true,
      page: 1,
      currentTab: 0,
      tabsType: [
        { title: '게시글', num: 47 },
        { title: '게시판', num: 21 },
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
      schList1: [
        {
          title: '<em class="sw">검색어</em> 최대 글자수는 40자 입니다. 최대 글자수는 40자 입니다. 최대 글자수는 40자 입니다. 최대 글자수는 40자 입니다.',
          text: '내용영역 <em class="sw">검색어</em>를 데이터가 표시됩니다. 내용영역 <em class="sw">검색어</em> 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다.',
          route: '회사게시판<i></i>한화시스템/ICT길잡이<i></i>인사총무<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유',
          name: '김한화',
          date: '2022.03.14 11:23',
        },
        {
          title: '임직원 서비스 명 <em class="sw">검색어</em>',
          text: '내용영역 <em class="sw">검색어</em>를 데이터가 표시됩니다. 내용영역 <em class="sw">검색어</em> 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
          route: '회사게시판<i></i>한화시스템/ICT길잡이<i></i>인사총무<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유',
          name: '김한화',
          date: '2022.03.14 11:23',
        },
        {
          title: '게시글 제목 영역 <em class="sw">검색어</em>',
          text: '내용영역 <em class="sw">검색어</em>를 데이터가 표시됩니다. 내용영역 <em class="sw">검색어</em> 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
          route: '회사게시판<i></i>한화시스템/ICT길잡이<i></i>인사총무<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유',
          name: '김한화',
          date: '2022.03.14 11:23',
        },
      ],
      schList2: [
        {
          title: '게시글 제목 영역 <em class="sw">검색어</em> 게시글 제목 영역 <em class="sw">검색어</em>',
          route: '회사게시판<i></i>공지사항',
        },
        {
          title: '게시글 제목 영역 <em class="sw">검색어</em>',
          route: '회사게시판<i></i>한화시스템/ICT길잡이<i></i>인사총무<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유',
        },
        {
          title: '게시글 제목 영역 <em class="sw">검색어</em>',
          route: '회사게시판<i></i>한화시스템/ICT길잡이<i></i>인사총무<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유',
        },
        {
          title: '게시글 제목 영역 <em class="sw">검색어</em>',
          route: '회사게시판<i></i>한화시스템/ICT길잡이<i></i>인사총무<i></i>사옥이전 정보공유<i></i>사옥이전 정보공유',
        },
      ],
      dropItem2: {
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
  },
  computed: {

  }
})
</script>