<template>
  <header class="gnb-header">
    <div class="gnb-header-logo">
        <a href="#"><img :src="require('@/assets/imgs/icon-svg/bi-cleberse-color.svg')" class="logo-svg" alt="Cleverse"></a>
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
      <span>02-6313-3114</span>
      <button type="button">원격지원</button>
      <button type="button">시스템 담당자</button>
      <button type="button" class="icon-btn ask">문의내역</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//import dropdownMenu from "@/components/dropdownMenu.vue"
export default defineComponent({
  props: {
    pageInfo: null,
  },
  components: {
    //dropdownMenu,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      list: [],
      txt: '',
      menuHidePosition: 0,
      menulist:[
        { title: '매뉴얼', isVisible: '', },
        { title: '문의하기', isVisible: '', },
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
    this.menuInfo(this.menuHidePosition)
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
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
    }
  }
})
</script>