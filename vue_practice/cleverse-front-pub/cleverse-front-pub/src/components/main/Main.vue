<template>
  <div class="home-wrap">
    <div class="home-wrap_inner">
      <div class="home-nav">
        <ul v-scroll-spy-active="{selector: null, class: setClass}" v-scroll-spy-link>
          <li v-for="(item, index) in navs" :key="index"><a :href="`#${item}`" @click="clickTop(index)">{{item}}</a></li>
        </ul>
      </div>
      <div v-scroll-spy="{offset: wh}" class="home-sector">
        <div class="home-sector-01 active" id="TASK">
          <div class="flex jc-sb">
            <div class="home-sector-01_mytask">
              <home-mytask/>
              <home-updateboard/>
            </div>
            <div>
              <home-email/>
              <home-approval/>
            </div>
            <home-roll-banner/>
          </div>
        </div>
        <div class="home-sector-01 no-bnr-type active" id="SCHE">
          <div class="flex jc-sb">
            <home-calendar/>
            <div>
              <home-schedule/>
              <home-members/>
            </div>
            <home-roll-banner/>
          </div>
        </div>
        <div class="home-sector-02 active" id="INFO">
          <home-sort/>
          <div class="flex jc-sb w100p">
            <home-budget
              :propStep="currentScene"
            />
            <div class="flex col notice">
              <home-notice-board/>
              <home-banner/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import HomeMytask from './HomeMytask.vue';
import HomeUpdateboard from './HomeUpdateboard.vue';
import HomeEmail from './HomeEmail.vue';
import HomeApproval from './HomeApproval.vue';
import HomeCalendar from './HomeCalendar.vue';
import HomeSchedule from './HomeSchedule.vue';
import HomeMembers from './HomeMembers.vue';
import HomeSort from './HomeSort.vue';
import HomeBudget from './HomeBudget.vue';
import HomeNoticeBoard from './HomeNoticeBoard.vue';
import HomeBanner from './HomeBanner.vue';
import HomeRollBanner from './HomeRollBanner.vue';

export default defineComponent({
  components: {
    HomeMytask,
    HomeUpdateboard,
    HomeEmail,
    HomeApproval,
    HomeCalendar,
    HomeSchedule,
    HomeMembers,
    HomeSort,
    HomeBudget,
    HomeNoticeBoard,
    HomeBanner,
    HomeRollBanner,
  },
  data() {
    return {
      setClass: 'active',
      wh: 60,
      navs: ['TASK', 'SCHE', 'INFO'],
      loaded: false,
      currentScene: 0, // 현재 활성화된 컨텐츠
      sceneInfo: [
        {
          eleTarget: '.home-sector-01_mytask',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-01_email',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-01_approval',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-01_calendar',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-01_schedule',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-01_members',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-02_box',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-02_budget',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-02_notice_board',
          scrollTop: 0,
        },
        {
          eleTarget: '.home-sector-02_banner',
          scrollTop: 0,
        }
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {

      // window.addEventListener('wheel', this.onWheel,{passive : false});

      window.addEventListener('scroll', ()=>{
        this.scrollLoop();

        document.querySelectorAll('.home-nav li').forEach((ele,index)=>{
          if(ele.classList.contains('active')){
            return this.currentScene = index
          }
        })
      })

      window.addEventListener('load',() => {
        this.eleScrollTop()
      })
      // setTimeout(()=>{ this.wh = 0 },100)
    })
    setTimeout(() => this.loaded = true, 500)
  },
  // beforeUnmount() {
  //   window.removeEventListener('wheel', this.onWheel);
  // },
  methods: {
    clickTop(idx:number){
      // let arr = [60, 60, 10]
      this.wh = 60

      // console.log(idx, this.wh)
    },
    initActive(val:any){
      if (!this.loaded) {
        return ''
      }

      // return 'active'
    },
    eleScrollTop(){
      this.sceneInfo.forEach((ele,index) => {
        let target = document.querySelector(ele.eleTarget)?.getBoundingClientRect().top
        let winScrollTop = window.pageYOffset
        let scrollSum = winScrollTop + Number(target)
        ele.scrollTop = scrollSum
      })
    },
    scrollLoop(){
      this.wh = window.innerHeight - 120
      console.log(window.innerHeight)
      // this.sceneInfo.forEach((ele,index) => {
      //   Number(ele.eleTarget) > window.scrollY ? 'active' : ''
      // })
      // console.log(window.scrollY)
    },
    onWheel(e:any) {
      // if(e.deltaY>0) {
      //   this.wh = window.innerHeight - 230
      // }else{
      //   this.wh = 0
      // }
    },

  }
});
</script>
