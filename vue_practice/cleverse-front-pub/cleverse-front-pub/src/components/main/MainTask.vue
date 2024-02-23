<template>
  <section class="main-box main-box__task">
    <div class="main-box__inner">
      <h2 class="main-box--title">중점 Task</h2>

      <div class="main-task__tab tab-type3">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
      </div>
      <div class="main-task__tab-content">
        <div 
          v-show="currentTab == 0"
          class="main-task__list"
        >
          <!-- <p class="no-data no-data__task">중점 Task가 없습니다</p> -->
          <ul>
            <li class="row" v-for="(row, idx) in list1" :key="idx">
              <a href="#" class="row-link">
                <span class="row-state">
                  <span class="state state0" v-if="row.state === 0">설정필요</span>
                  <span class="state state1" v-if="row.state === 1">미흡</span>
                  <span class="state state2" v-if="row.state === 2">보통</span>
                  <span class="state state3" v-if="row.state === 3">좋음</span>
                </span>
                <span class="row-member">
                  <span
                    class="thumb"
                    :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
                  />
                  <span class="number">+{{row.memberNumber}}</span>
                </span>
                <span class="row-node">
                  <span class="ico-lock" v-if="row.nodeLock === true">비공개</span>
                  <span class="name">{{row.nodeName}}</span>
                </span>
                <span class="row-task">
                  <span class="name">
                    {{row.taskName}}
                  </span>
                  <span class="row-reply" v-if="row.taskReply">
                    {{returnReplyCount(row.taskReply)}}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        
        <div 
          v-show="currentTab == 1"
          class="main-task__list"
        >

      <!-- <p class="no-data no-data__task">중점 Task가 없습니다</p> -->
          <ul>
            <li class="row" v-for="(row, idx) in list1" :key="idx">
              <a href="#" class="row-link">
                <span class="row-state">
                  <span class="state state0" v-if="row.state === 0">설정필요</span>
                  <span class="state state1" v-if="row.state === 1">미흡</span>
                  <span class="state state2" v-if="row.state === 2">보통</span>
                  <span class="state state3" v-if="row.state === 3">좋음</span>
                </span>
                <span class="row-member">
                  <span
                    class="thumb"
                    :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
                  />
                  <span class="number">+{{row.memberNumber}}</span>
                </span>
                <span class="row-node">
                  <span class="ico-lock" v-if="row.nodeLock === true">비공개</span>
                  <span class="name">{{row.nodeName}}</span>
                </span>
                <span class="row-task">
                  <span class="name">
                    {{row.taskName}}
                  </span>
                  <span class="row-reply" v-if="row.taskReply">
                    {{returnReplyCount(row.taskReply)}}
                  </span>
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
      tabsType : ["통합조직", "ICT 부문"],
      list1: [
        {
          state: 0,
          memberNumber: 10,
          nodeLock: true,
          nodeName: "시스템 개발시스템 개발시스템 개발시스템 개발",
          taskName: "업무공유 시스템 사업 추진업무공유 시스템 사업 추진",
          taskReply: 99999
        },
        {
          state: 1,
          memberNumber: 5,
          nodeLock: false,
          nodeName: "시스템 개발",
          taskName: "업무공유 시스템",
          taskReply: 3
        },
        {
          state: 2,
          memberNumber: 0,
          nodeLock: true,
          nodeName: "시스템 개발시스템 개발시스템 개발시스템 개발",
          taskName: "업무공유 시스템",
          taskReply: 0
        },
        {
          state: 3,
          memberNumber: 88,
          nodeLock: true,
          nodeName: "시스템 개발",
          taskName: "업무공유 시스템업무공유 시스템업무공유 시스템업무공유 시스템업무공유 시스템",
          taskReply: 0
        },
        {
          state: 0,
          memberNumber: 10,
          nodeLock: true,
          nodeName: "시스템 개발시스템 개발시스템 개발시스템 개발",
          taskName: "업무공유 시스템 사업 추진업무공유 시스템 사업 추진",
          taskReply: 99999
        },
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
  },
  methods: {
    returnReplyCount(val: number) {
      const str = (val > 99) ? "99+" : val;
      return str;
    }
  }
})
</script>