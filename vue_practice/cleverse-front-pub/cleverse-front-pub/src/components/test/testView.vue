<template>
  <section class="swiper">
    <swiper
      :slides-per-view="3"
      :space-between="0"
      :modules="modules"
      :pagination="pagination"
      :centered-slides="true"
      :grab-cursor="true"
      class="mySwiper"
      >
      <swiper-slide v-for="(item, index) in slides" :key="index">
        <div class="slide-wrap">
          <button type="button" class="dotted" @click="btnSlide">{{item.num}}</button>
          <div class="group">{{item.num}}팀</div>
        </div>
      </swiper-slide>
    </swiper>
        <button type="button" @click="onSwiper">button</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination, Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import "swiper/css/free-mode";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          num: "01"
        },
        {
          num: "02"
        },
        {
          num: "03"          
        },
        {
          num: "04"          
        },
        {
          num: "05"          
        },
        {
          num: "06"          
        },
        {
          num: "07"          
        },
        {
          num: "08"          
        },
        {
          num: "09"          
        },
        {
          num: "10"          
        },
      ]
    }
  },
  setup() {
    const onSwiper = (swiper:any) => {
      swiper.slideNext();
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    // const aaa = (swiper:any) => {
    //   swiper.slideNext();
    // };
    return {
      onSwiper,
      onSlideChange,
      pagination: { 
        dynamicBullets: false,
        clickable: true,
      },
      scrollbar:{ draggable: true },
      modules: [Pagination, Scrollbar, FreeMode],
    };
  },
  methods: {
    btnSlide() {
      alert('click')
    }
  }

})
</script>

<style lang="css" scoped>
.swiper {overflow: hidden;}
.swiper:before {content: ""; position: absolute; left: 0; top: 0; display: block; height: 100%; width: 160px; background: linear-gradient(to right, #ddd, transparent); z-index: 9;}
.swiper:after {content: ""; position: absolute; right: 0; top: 0; display: block; height: 100%; width: 160px; background: linear-gradient(to left, #ddd, transparent); z-index: 9;}
.mySwiper {padding: 130px 0; border: 1px solid #ddd;}
.swiper-slide {height: 300px;}
.dotted {width: 40px; height: 40px; border-radius: 50%; background: #333; font-size: 14px; color: #fff; font-weight: 700;}
.slide-wrap {text-align: center;}
.slide-wrap:after {content: ""; position: absolute; top: 20px; left: 50%; display: block; width: 100%; height: 1px; background: #000; z-index: -1;}
.swiper-slide:last-child .slide-wrap:after {display: none;}
.group {margin-top: 15px; font-size: 15px;}
.btn-next {margin: 0 auto}
</style>