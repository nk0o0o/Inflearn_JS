<template>
  <header class="gnb-header">
    <div class="gnb-header-logo">
        <a href="#"><img :src="require('@/assets/imgs/icon-svg/logo-gnb.svg')" class="logo-svg" alt="Cleverse"></a>
    </div>

    <nav class="gnb-header-menu">
      <ul>
        <li v-for="item in menulist" :key="item.title" :class="[{ov: item.ov}, item.isVisible]" :data-key="item.title"><button type="button">{{item.title}}</button></li>
      </ul>
      <div class="dropdown-type1 menu-hide-wrap" :class="menuHideList.length>0?'active':''">
        <dropdown-menu
          :propItem="menuHideList"
          :propClass="'menu-hide'"
        ></dropdown-menu>
      </div>
    </nav>

    <div class="gnb-header-help">
      <div class="channel"><button type="button" @click="helpTooltip(0)">채널 바로가기</button></div>
      <div class="search"><button type="button" @click="helpTooltip(1)">검색</button></div>
      <div class="alram">
        <button type="button" @click="helpTooltip(2)">알림</button>
        <em>+99</em>
      </div>
      <help-toolip
        :propArrayValue="propArrValue"
        @close="closeTooltip"
      />
      <div class="all-menu">
        <dropdown-all-menu
          :propItem="dropItem"
          :propLocation="'bottom end'"
        ></dropdown-all-menu>
      </div>
    </div>
    <!-- <div>헤더11</div>
    <span>{{ pageInfo.title }}</span> -->
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import dropdownMenu from "@/components/dropdownMenu.vue"
import dropdownAllMenu from "@/components/dropdownAllMenu.vue"
import helpToolip from "@/components/helpToolip1.vue"

export default defineComponent({
  props: {
    pageInfo: null,
  },
  components: {
    dropdownMenu,
    dropdownAllMenu,
    helpToolip
  },
  data() {
    return {
      propArrValue: {},
      idx: -1,
      arrValue:[
        {
          id: 'channelH',
          text: "채널H로 이동해요",
          class: "pos-channel",
          visible: false
        },
        {
          id: 'search',
          text: "클레버스 내에 있는 모든 정보를<br>검색으로 찾아볼 수 있어요",
          class: "pos-search",
          visible: false
        },
        {
          id: 'alarm',
          text: "누군가 나를 호출한 내용이나<br>새롭게 등록, 변화된 내용이 있다면<br>알림에서 확인할 수 있어요",
          class: "pos-alram",
          visible: false
        }
      ],
      helpToolipActive1: false,
      helpToolipActive2: false,
      helpToolipActive3: false,
      windowWidth: window.innerWidth,
      list: [],
      txt: '',
      menuHidePosition: 0,
      menulist:[
        { title: 'My', isVisible: '', },
        { title: 'Team', isVisible: '', ov: true, },
        { title: 'Map', isVisible: '', },
        { title: '메일', isVisible: '', },
        { title: '전자결재', isVisible: '', },
        { title: '게시판', isVisible: '', },
        { title: '협업보드', isVisible: '', },
        { title: '정보공유', isVisible: '', },
        { title: '지원업무', isVisible: '', },
        { title: '사람찾기', isVisible: '', },
        { title: '복지사이트', isVisible: '', },
        { title: 'menu12', isVisible: '', },
        { title: 'menu13', isVisible: '', },
        { title: 'menu14', isVisible: '', },
        { title: 'menu15', isVisible: '', },
        { title: 'menu16', isVisible: '', },
        { title: 'menu17', isVisible: '', },
        { title: 'menu18', isVisible: '', },
        { title: 'menu19', isVisible: '', },
        { title: 'menu20', isVisible: '', },
        { title: 'menu21', isVisible: '', },
        { title: 'menu22', isVisible: '', },
        { title: 'menu23', isVisible: '', },
        { title: 'menu24', isVisible: '', },
        { title: 'menu25', isVisible: '', },
        { title: 'menu26', isVisible: '', },
        { title: 'menu27', isVisible: '', },
        { title: 'menu28', isVisible: '', },
        { title: 'menu29', isVisible: '', },
        { title: 'menu30', isVisible: '', },
        { title: 'menu31', isVisible: '', },
        { title: 'menu32', isVisible: '', },
        { title: 'menu33', isVisible: '', },
        { title: 'menu34', isVisible: '', },
        { title: 'menu35', isVisible: '', },
        { title: 'menu36', isVisible: '', },
        { title: 'menu37', isVisible: '', },
        { title: 'menu38', isVisible: '', },
        { title: 'menu39', isVisible: '', },
        { title: 'menu40', isVisible: '', },
      ],
      dropItem: [
        {
          title: '',
          list: [
            {
              title: '협업보드',
              isActive: false,
              iconClass: 'cooper'
            },
            {
              title: '정보공유',
              isActive: false,
              iconClass: 'share'
            },
            {
              title: '전자결재',
              isActive: true,
              iconClass: 'payment'
            },
            {
              title: '메일',
              isActive: true,
              iconClass: 'mail'
            },
            {
              title: '게시판',
              isActive: true,
              iconClass: 'board'
            },
            {
              title: '지원업무',
              isActive: false,
              iconClass: 'supply'
            },
            {
              title: '사람찾기',
              isActive: false,
              iconClass: 'people'
            },
					]
        },
        {
          coming1: true,
          title: '가상오피스',
          list: [
            {
              title: 'Zoom',
              isActive: false,
              iconClass: 'zoom'
            },
            {
              title: 'Teams',
              isActive: false,
              iconClass: 'teams'
            },
            {
              title: 'Meta Office',
              isActive: true,
              iconClass: 'meta'
            },
					]
        },
        {
          coming2: true,
          title: 'System Link',
          text: '업무 진행에 필요한 시스템으로 바로 접근 가능한 링크를 제공합니다.',
          list: [
            {
              title: 'GHR',
              isActive: false,
              iconClass: 'ghr'
            },
            {
              title: 'SMART ERP',
              isActive: true,
              iconClass: 'erp'
            },
            {
              title: '복지사이트',
              isActive: true,
              iconClass: 'welfare'
            },
            {
              title: '리조트 예약',
              isActive: true,
              iconClass: 'resort'
            },
            {
              title: '좌석예약시스템',
              isActive: false,
              iconClass: 'seat'
            },
            {
              title: '한화빌딩 회의실<br>예약 시스템',
              isActive: false,
              iconClass: 'room'
            },
            {
              title: 'EaglePMS',
              isActive: false,
              iconClass: 'Eagle-pms'
            },
            {
              title: 'PM포탈',
              isActive: false,
              iconClass: 'pm-portal'
            },
            {
              title: '업무지원시스템',
              isActive: false,
              iconClass: 'work-supply'
            },
            {
              title: 'E-ITSM',
              isActive: false,
              iconClass: 'e-itsm'
            },
            {
              title: 'ITSM',
              isActive: false,
              iconClass: 'itsm'
            },
            {
              title: '전산업무요청<br>FeedBack',
              isActive: false,
              iconClass: 'feedback'
            },
            {
              title: 'H-ITAM',
              isActive: false,
              iconClass: 'h-itam'
            },
            {
              title: '채널 Hplus',
              isActive: false,
              iconClass: 'hplus'
            },
            {
              title: 'ICT TV',
              isActive: false,
              iconClass: 'ict-tv'
            },
            {
              title: '우리사주',
              isActive: false,
              iconClass: 'stock'
            },
            {
              title: 'HOME Cloud',
              isActive: false,
              iconClass: 'home-cloud'
            },
            {
              title: 'Workplace',
              isActive: false,
              iconClass: 'workplace'
            },
            {
              title: '한화시스템<br>홈페이지',
              isActive: false,
              iconClass: 'homepage'
            },
					]
        },

      ],
    }
  },
  computed:{
    menuHideList(){
      return this.menulist.filter(item => item.isVisible !== 'active')
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      // console.log(`it changed to ${newWidth} from ${oldWidth}`)
      let menuHide = document.querySelectorAll('.dropdown-type1.menu-hide-wrap')[0].getBoundingClientRect().x
      this.menuInfo(menuHide)
    }
  },
  mounted() {
    this.menuHidePositionFn()

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('load', () => {
        this.menuInfo(this.menuHidePosition)
      })
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    helpTooltip(value:any) {
      this.$nextTick(() => {
        // if(this.idx !== value){
        //   this.arrValue.forEach(v => v.visible = false)
        //   this.arrValue[value].visible = !this.arrValue[value].visible
        // }else{
        //   this.arrValue[value].visible = false
        // }
        this.arrValue[value].visible = this.idx !== value
        this.propArrValue = this.arrValue[value]
        this.idx = this.arrValue[value].visible ? value : -1;
      })
    },
    closeTooltip() {
      this.arrValue.forEach(v => v.visible = false)
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.menuHidePosition = document.querySelectorAll('.dropdown-type1.menu-hide-wrap')[0].getBoundingClientRect().x
    },
    menuInfo(menuHide: any){
      const menuIfo = document.querySelectorAll('.gnb-header-menu li')

      menuIfo.forEach((item, index) =>{
        const menu = this.menulist.find(i=> i.title===item.getAttribute('data-key'))

        if(menu) {
          const menuX = item.getBoundingClientRect().x + item.getBoundingClientRect().width

          menu.isVisible = menuHide > menuX ? 'active' : ''
          if(menu.title === 'My' || menu.title === 'Team' || menu.title === 'Map'){
            menu.isVisible = 'active'
          }
        }
      })
    },
    menuHidePositionFn(){
      this.menuHidePosition = document.querySelectorAll('.dropdown-type1.menu-hide-wrap')[0].getBoundingClientRect().x
    },
  }
})
</script>