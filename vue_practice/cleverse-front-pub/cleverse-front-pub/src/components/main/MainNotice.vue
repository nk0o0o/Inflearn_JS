<template>
  <section class="main-box main-box__notice">
    <div class="main-box__inner">
      <h2 class="main-box--title">알림</h2>

      <div class="main-notice__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>
      <div class="main-notice__tab-content">
        <div 
          v-show="currentTab == 0"
          class="main-notice__type1"
        >
          <!-- <p class="no-data no-data__notice">미확인 알림이 없습니다</p> -->
          <ul>
            <li
              v-for="(row, idx) in list1"
              :key="idx"
              class="row"
              :class="{ready : row.alerm === false}"
            >
              <a href="#" class="row-link">
                <span
                  class="row-thumb"
                  :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
                >
                  <span class="row-alerm" v-if="row.alerm">미확인</span>
                </span>
                <span class="row-snippet">
                  <span class="row-cate">{{row.cate}}</span>
                  <span class="row-date">{{row.date}}</span>
                </span>
                <span class="row-contxt" v-html="row.contxt"></span>
                <span class="row-contxt2">{{row.contxt2}}</span>
              </a>
            </li>
          </ul>

        </div>
        
        <div 
          v-show="currentTab == 1"
          class="main-notice__type2"
        >
        <!-- <p class="no-data no-data__notice">미확인 알림이 없습니다</p> -->
          <ul>
            <li
              v-for="(row, idx) in list2"
              :key="idx"
              class="row"
              :class="{ready : row.alerm === false}"
            >
              <a href="#" class="row-link">
                <span class="row-contitle">
                  <i class="icon-board_lock" v-if="row.boardLock">비공개</i>
                  <span>{{row.contitle}}</span>
                </span>
                <span class="row-snippet">
                  <i class="icon-node_lock" v-if="row.nodeLock">비공개</i>
                  <span class="row-node_name" v-if="row.nodeName">
                    {{row.nodeName}}
                  </span>
                  <span class="row-task_name" v-if="row.taskName">{{row.taskName}}</span>
                  <span class="row-member" v-if="row.member">{{row.member}}</span>
                </span>
              </a>
            </li>
          </ul>

        </div>
      </div>

      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      currentTab: 0,
      tabsType : ["의견&요청", "업데이트된 보드"],
      list1: [
        {
          alerm: true,
          cate: "의견",
          date: "2022.03.14 09:23",
          contxt: "<b>김한화</b>님이 <b>A사 비즈니스 모델 분석 협업보드</b>에서 의견을 남겼습니다.",
          contxt2: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          cate: "요청",
          date: "2022.03.14 09:23",
          contxt: "<b>김한화</b>님이 <b>A사 비즈니스 모델 분석 협업보드</b>에서 의견을 남겼습니다.",
          contxt2: "asdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          cate: "의견",
          date: "2022.03.14 09:23",
          contxt: "<b>김한화</b>님이 <b>A사 비즈니스 모델 분석 협업보드</b>에서 의견을 남겼습니다.",
          contxt2: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        }
      ],
      list2: [
        {
          contitle: "awefawefawefwefawefawefawefwafawfwefawefawfawefwaefawefawefawefwefwafawfawfawefwafawf",
          boardLock: true,
          nodeLock: true,
          nodeName: "소속팀명",
          taskName: "소속 task명소속 task명소속 task명소속 task명소속 task명소속 task명소속 task명소속 task명",
          member: "김한화외 14명"
        },
        {
          contitle: "wafawfawfawefwafawf",
          boardLock: false,
          nodeLock: false,
          nodeName: "소속팀명",
          member: "김한화외 14명"
        },
        {
          contitle: "wafawfawfawefwafawf",
          boardLock: true,
          nodeLock: false,
          nodeName: "소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명소속팀명",
          member: "김한화외 14명"
        },
        {
          contitle: "New Service Project",
          boardLock: false,
          nodeLock: false,
          nodeName: "소속팀명",
          taskName: "소속 task명",
          member: "김한화외 14명"
        }
      ]
    }
  }
})
</script>