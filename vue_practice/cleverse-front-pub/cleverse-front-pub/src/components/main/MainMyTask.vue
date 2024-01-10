<template>
  <section class="main-box main-box__my_task">
    <div class="main-box__inner">
      <h2 class="main-box--title">나의 Task</h2>

      <div class="main-my_task__header">
        <button @click="btn(-1)" class="btn-date-prev"><span class="blind">하루 전</span></button>
        <Datepicker
          weekStart="0"
          v-model="date"
          :format="format"
        />
        <button @click="btn(+1)" class="btn-date-next"><span class="blind">하루 후</span></button>
      </div>
      <div class="main-my_task__box">

        <!-- <p class="no-data no-data__task">Task가 없습니다</p> -->
        <ul class="list">
          <li class="row" v-for="(row, idx) in taskList" :key="idx">
            <input type="checkbox" :id="'chk'+idx" :checked="row.chk === true">
            <label :for="'chk'+idx" class="row-chk">완료 여부</label>
            <a href="#" class="row-link">
              <span class="row-node">
                <span class="ico-lock" v-if="row.nodeLock === true">비공개</span>
                <span class="name">{{row.nodeName}}</span>
              </span>
              <span class="row-task">
                <span class="ico-flag" v-if="row.taskFlag === true">중요</span>
                <span class="ico-lock" v-if="row.taskLock === true">비공개</span>
                <span class="name">
                  {{row.taskName}}
                </span>
              </span>
              <span class="row-reply">
                <span v-if="row.taskReply">
                  {{returnReplyCount(row.taskReply)}}
                </span>
              </span>
              <span class="row-date">
                <span>
                  <span class="ico-delay" v-if="row.taskDelay === true">지연</span>
                  {{row.taskDate}}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Datepicker from '@vuepic/vue-datepicker';
export default defineComponent({
  components: {
    Datepicker,
  },
  data() {
    return {
      date: new Date(),
      taskList : [
        {
          chk: false,
          nodeLock: true,
          nodeName: "시스템개발시스템개발시스템개발시스템개발시스템개발시스템개발",
          taskFlag: true,
          taskLock: true,
          taskName: "A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석",
          taskReply: 99999,
          taskDate: "어제",
          taskDelay: true
        },
        {
          chk: true,
          nodeLock: false,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: false,
          taskName: "A사 비즈니스 모델 분석",
          taskReply: 1,
          taskDate: "05.18",
          taskDelay: false
        },
        {
          chk: false,
          nodeLock: false,
          nodeName: "시스템개발시스템개발시스템개발시스템개발시스템개발시스템개발",
          taskFlag: true,
          taskLock: false,
          taskName: "A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석",
          taskReply: 0,
          taskDate: "05.18",
          taskDelay: true
        },
        {
          chk: false,
          nodeLock: true,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: true,
          taskName: "A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석",
          taskReply: 99,
          taskDate: "어제",
          taskDelay: true
        },
        {
          chk: false,
          nodeLock: false,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: false,
          taskName: "A사 비즈니스 모델",
          taskReply: 99,
          taskDate: "어제",
          taskDelay: false
        },
        {
          chk: false,
          nodeLock: false,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: false,
          taskName: "A사 비즈니스 모델",
          taskReply: 99,
          taskDate: "어제",
          taskDelay: false
        },
        {
          chk: false,
          nodeLock: false,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: false,
          taskName: "A사 비즈니스 모델",
          taskReply: 99,
          taskDate: "어제",
          taskDelay: false
        },
        {
          chk: false,
          nodeLock: false,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: false,
          taskName: "A사 비즈니스 모델",
          taskReply: 99,
          taskDate: "어제",
          taskDelay: false
        },
        {
          chk: false,
          nodeLock: false,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: false,
          taskName: "A사 비즈니스 모델",
          taskReply: 99,
          taskDate: "어제",
          taskDelay: false
        },
        {
          chk: false,
          nodeLock: false,
          nodeName: "시스템개발",
          taskFlag: false,
          taskLock: false,
          taskName: "A사 비즈니스 모델",
          taskReply: 99,
          taskDate: "어제",
          taskDelay: false
        },
      ]
    }
  },
  methods: {
    returnReplyCount(val: number) {
      const str = (val > 99) ? "99+" : val;
      return str;
    },
    btn(date: number) {
      let today = new Date(this.date);
      this.date = new Date(today.setDate(today.getDate() + date));
    },
    format(date:any) {
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);

      return `${month}.${day}`;
    },
  }
})
</script>