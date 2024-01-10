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

        <div class="board-searchbar">
          <div>
            <select-view
              :propOptionList="optionLsit1"
              :propPlaceholder="'운영회장'"
              >
            </select-view>
          </div>
          <div class="date">
            <Datepicker
              v-model="rangeDate"
              range
              :format="rangeFormat"
              :enableTimePicker="false"
              weekStart="0"
              locale="ko"
              cancelText="취소"
              selectText="선택"
              />
              <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
          </div>
        </div>
        <!-- //searchbar -->
        
        <!-- board -->
        <div class="board-common_wrap">
          <div class="board-data favor">
            <div class="search-club">
              <div class="sub-title">
                검색결과 <em>20</em>
                <!-- <button type="button" class="btn-ico-single refresh"><span class="blind">새로고침</span></button> -->
              </div>
              <ul class="club-list">
                <li v-for="(item, index) in clubList" :key="index">
                  <span class="img">
                    <span class="thumb">
                      <img :src="require(`@/assets/imgs/${item.img}`)" alt="동호회이미지">
                    </span>
                  </span>
                  <div class="info">
                    <p class="title">
                      <strong v-html="item.title"></strong>
                      <em class="label-tag" v-if="item.official">공식</em>
                      <em class="label-tag gry" v-if="item.unofficial">비공식</em>
                    </p>
                    <p class="sector" v-html="item.sector"></p>
                    <dl>
                      <dt>운영자</dt>
                      <dd v-html="item.name"></dd>
                      <dt>개설일</dt>
                      <dd v-html="item.date"></dd>
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
              <p class="nodata" v-if="nodata">검색결과가 없습니다.</p>
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
//@ts-ignore
import Paging from 'v-pagination-3';

import Datepicker from '@vuepic/vue-datepicker'
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';

export default defineComponent({
  components: {
    clubLeft,
    selectView,
    Paging,
    Datepicker,
  },
  data() {
    return {
      propModalValue: false,
      nodata: false,
      page: 1,
      rangeDate: [new Date(),new Date()],
      optionLsit1: [
        { value: '동호회', label: '동호회' },
        { value: '소개글', label: '소개글' },
        { value: '운영회장', label: '운영회장' },
        { value: '개설일', label: '개설일' },
      ],
      clubList: [
        {
          img: 'news-thumbnail-01.png',
          title: '<i>동호회</i> 명이 보여집니다. 동호회 명이 보여집니다. 동호회 명이 보여집니다. 동호회 명이 보여집니다.',
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
          sector: '<i>영화</i>/연극/뮤지컬/콘서트',
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
          name: '<i>김한화</i> 차장 (디지털워크그룹)',
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
          date: '<i>2022.09.06</i>',
          member: '100명',
          num: '10명',
          official: true,
        },
      ],
    };
  },
  methods: {
    rangeFormat(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();

      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();

      return `${yearStart}.${monthStart}.${dayStart} ~ ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  },
  computed: {

  }
})
</script>