<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <supportLeft/>
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
          <div class="board-data favor">
            <div class="tab-type3">
                <ul class="tab-menu">
                  <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
                    <button type="button" @click="currentTab = index">
                      {{tab.title}}
                      <span class="num">{{tab.num}}</span>
                    </button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div v-show="currentTab == 0">
                    <div class="tsch-list">
                      <ul>
                        <li v-for="(item, index) in service" :key="index">
                          <div class="tit flex jc-sb">
                            <strong v-html="item.title"></strong>
                            <em>{{item.cate}}</em>
                          </div>
                          <p class="cont" v-html="item.text"></p>
                          <div class="person">
                            <p>업무담당자<span>{{item.name}}</span></p>
                            <p v-if="item.system">시스템담당자<span>{{item.name2}}</span></p>
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
                    <!-- <p class="nodata" v-if="nodata">등록된 데이터가 없습니다.</p> -->
                  </div>
                  <div v-show="currentTab == 1">
                    <div class="tsch-list">
                      <ul>
                        <li v-for="(item, index) in work" :key="index">
                          <div class="tit flex jc-sb">
                            <strong v-html="item.title"></strong>
                          </div>
                          <p class="cont" v-html="item.text"></p>
                          <div class="location" v-html="item.route"></div>
                          <div class="person">
                            <p>{{item.name}}<span class="date">{{item.date}}</span></p>
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
                    <p class="nodata" v-if="nodata">등록된 데이터가 없습니다.</p>
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
import { defineComponent } from 'vue';
import supportLeft from "./supportLeft.vue";
import selectView from "@/components/selectView.vue"
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    supportLeft,
    Paging,
    selectView,
  },
  data() {
    return {
      currentTab: 0,
      tabsType: [
        { title: '임직원 서비스', num: 47 },
        { title: '업무지원', num: 21 },
      ],
      nodata: true,
      isFocus: false,
      page: 1,
      optionLsit1: [
        { value: '전체', label: '전체' },
        { value: '게시판', label: '게시판' },
        { value: '제목', label: '제목' },
        { value: '작성자', label: '작성자' },
        { value: '내용', label: '내용' },
      ],
      service: [
        {
          title: '<em class="sw">검색어</em> 최대 글자수는 40자 입니다. 최대 글자수는 40자 입니다. 최대 글자수는 40자 입니다. 최대 글자수는 40자 입니다.',
          cate: '임직원 서비스 카테고리명',
          text: '내용영역 <em class="sw">검색어</em>를 데이터가 표시됩니다. 내용영역 <em class="sw">검색어</em> 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다.',
          name: '김한화,김이름',
          name2: '김한화,김이름',
          system: true,
        },
        {
          title: '임직원 서비스 명 <em class="sw">검색어</em>',
          cate: '인사',
          text: '내용영역 <em class="sw">검색어</em>를 데이터가 표시됩니다. 내용영역 <em class="sw">검색어</em> 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
          name: '김한화',
          name2: '김한화',
          system: false,
        },
        {
          title: '게시글 제목 영역 <em class="sw">검색어</em>',
          cate: '인사',
          text: '내용영역 <em class="sw">검색어</em>를 데이터가 표시됩니다. 내용영역 <em class="sw">검색어</em> 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
          name: '김한화,김이름',
          name2: '김한화,김이름',
          system: false,
        },
        {
          title: '게시글 제목 영역 <em class="sw">검색어</em>',
          cate: '임직원 서비스 카테고리명',
          text: '내용영역 <em class="sw">검색어</em>를 데이터가 표시됩니다. 내용영역 <em class="sw">검색어</em> 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
          name: '김한화',
          name2: '김한화',
          system: true,
        },
      ],
      work: [
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
      ],
    };
  },
  methods: {
  },
  computed: {
  }
})
</script>