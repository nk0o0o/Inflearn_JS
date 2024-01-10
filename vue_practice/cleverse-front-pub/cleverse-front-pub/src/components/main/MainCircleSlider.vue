<template>
    <div class="main-slider_wrap">
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :navigation="navigation"
        :pagination="pagination"
        >
        <swiper-slide>
          <ul class="main-swiper_list">
            <li><button type="button">LIfe SolutionLIfe SolutionLIfe SolutionLIfe SolutionLIfe Solution</button></li>
            <li><button type="button">Health Care</button></li>
            <li><button type="button">상품/제조</button></li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="main-swiper_list">
            <li><button type="button">LIfe SolutionLIfe SolutionLIfe SolutionLIfe Solution</button></li>
            <li><button type="button">Health Care2</button></li>
            <li><button type="button">상품/제조2</button></li>
          </ul>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot:pagination></div>
      <div class="main-swiper-button-prev" slot:button-prev></div>
      <div class="main-swiper-button-next" slot:button-next></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.main-swiper-button-next',
        prevEl: '.main-swiper-button-prev',
      },
      scrollbar:{ draggable: true },
      modules: [ Navigation, Pagination ],
    };
  },
  data() {
    return {

    }
  },
  methods: {

  },
});
</script>