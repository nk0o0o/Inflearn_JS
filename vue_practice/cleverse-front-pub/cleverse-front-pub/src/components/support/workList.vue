<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <supportLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>공지사항</h2>
            <div>
              <div class="board_style">
                <div class="style1"><input type="radio" name="style" id="style1" checked><label for="style1">스타일1</label></div>
                <div class="style2"><input type="radio" name="style" id="style2"><label for="style2">스타일2</label></div>
              </div>
            </div>
          </div>
          <div class="board-common_header_foot">
            <div class="board-common_search">
              <div>
                <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'2022년'"
                    :propClass="'type1'"
                    >
                </select-view>
              </div>
              <div>
                <form action="">
                  <div class="input-box search-type4">
                    <input type="text" required placeholder="검색어를 입력하세요.">
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
              </div>
              <div class="btn_list">
                <button type="button" class="btn md">글쓰기</button>
              </div>
            </div>
          </div>
          <!-- //header -->
          <!-- notice list -->
          <div class="board-notice">
            <div class="board-notice_cont" v-for="(noti, index) in noticeList" :key="index" :class="{ readed: noti.isReaded }">
              <div class="head">
                <h3 class="tit">
                  <span class="ico emergency" v-if="noti.emergency"><i>긴급</i></span>
                  <span class="ico com-noti" v-if="noti.companyNotice"><i>회사공지</i></span>
                  <span class="ico noti" v-if="noti.notice"><i>공지</i></span>
                  <span class="info">
                    {{noti.title}}
                  </span>
                  <span class="ico new" v-if="noti.new"><i>NEW</i></span>
                  <span class="ico file" v-if="noti.attach"><i>첨부</i></span>
                </h3>
              </div>
              <p class="txt">{{noti.content}}</p>
              <div class="foot">
                <div>
                  <span class="date_txt">{{noti.date}}</span>
                  <span class="kind_txt" v-html="noti.kind"></span>
                </div>
                <div class="bn_list">
                  <span class="ico view">{{noti.view}}</span>
                  <span class="ico comment">{{noti.reply}}</span>
                  <span class="ico favorite" @click="noti.isActive = !noti.isActive" :class="{ active: noti.isActive }">{{noti.favor}}</span>
                  <span class="ico import" :class="{ active: noti.isImport }"><span class="blind">중요</span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="board-data">
            <p class="nodata" v-if="nodata">게시글이 없습니다.</p>
          </div>
          <Paging
            v-model="page"
            :records="500"
            :per-page="25"
            :options="{hideCount: true}"
            @paginate="myCallback"
          />
          <!-- //notice list -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import supportLeft from "./supportLeft.vue"
import selectView from "@/components/selectView.vue"
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    supportLeft,
    selectView,
    Paging,
  },
  data() {
    return {
      isActive: false,
      nodata: true,
      page: 1,
      optionLsit: [
        { value: '2022년', label: '2022년' },
        { value: '2021년', label: '2021년' },
        { value: '2020년', label: '2020년' },
      ],
      noticeList: [
        {
          isReaded: false,
          emergency: true,
          companyNotice: true,
          notice: true,
          new: true,
          title: '[그룹공지]임직원 SNS 사용 가이드라인 배포 안내',
          content: '내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다.',
          date: '김한화・2022.03.14 오전 11:23',
          kind: '분류 [<span class="fix_txt">분류명 최대 15자 출력후 분류명 최대 15자 출력후</span>]',
          view: 185,
          reply: 15,
          favor: 10,
          isActive: true,
          isImport: true,
        },
        {
          isReaded: false,
          companyNotice: true,
          attach: true,
          title: '[그룹공지]임직원 SNS 사용 가이드라인 배포 안내2',
          content: '내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다.',
          date: '김한화・2022.03.14 오전 11:23',
          kind: '분류 [<span class="fix_txt">분류명 최대 15자</span>]',
          favor: 11,
          view: 185,
          reply: 15,
          isActive: false,
          isImport: false,
        },
        {
          isReaded: true,
          title: '[그룹공지]임직원 SNS 사용 가이드라인 배포 안내 임직원 SNS 사용 가이드라인 배포 안내 임직원 SNS 사용 가이드라인 배포 안내',
          content: '내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다.',
          date: '김한화・2022.03.14 오전 11:23',
          kind: '분류 [<span class="fix_txt">분류명 최대 15자</span>]',
          favor: 12,
          view: 185,
          reply: 15,
          isActive: false,
          isImport: false,
        },
      ],
      //menu: false,
    };
  },
  methods: {
  },
  computed: {
  }
})
</script>