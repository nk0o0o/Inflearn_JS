<template>
  <section class="main-box main-box__channel">
    <div class="main-box__inner">
      <h2 class="main-box--title">채널Hplus</h2>

      <!-- <p class="no-data no-data__contents">콘텐츠가 없습니다</p> -->

      <div class="main-channel">
        <swiper
          :slides-per-view="1"
          :space-between="16"
          :modules="modules"
          :pagination="pagination"
        >
          <swiper-slide v-for="(swiperItem, swiperIdx) in this.division(2, this.list)" :key="swiperIdx">
            <a href="#" class="row" v-for="(row, idx) in swiperItem" :key="idx">
              <span
                class="row-thumb"
                :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
              />
              <span class="row-sort">
                <span class="sort1" v-if="row.sort === 'sort1'">Connect</span>
                <span class="sort2" v-if="row.sort === 'sort2'">Pick</span>
              </span>
              <span class="row-contxt">
                {{row.contxt}}
              </span>
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <a href="#" class="main-box--more">더보기</a>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      list: [
        {
          sort: "sort1",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfasadfsadf"
        },
        {
          sort: "sort2",
          contxt: "asdfasdfasd"
        },
        {
          sort: "sort1",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfasadfsadf"
        }
      ],
      pagination: { 
        dynamicBullets: true,
        clickable: true,
      },
      modules: [Pagination],
    };
  },
  methods: {
    division(n: number, argArr = 'everyone') {
      let arr = JSON.parse(JSON.stringify(argArr));
      let len = arr.length;
      let cnt = Math.floor(len / n);
      let tmp = [];
      if(len % n == 0 ) {
        cnt = cnt - 1;
      }
      for (let i = 0; i <= cnt; i++) {
        tmp.push(arr.splice(0, n));
      }
      return tmp;
    },
  }
})
</script>