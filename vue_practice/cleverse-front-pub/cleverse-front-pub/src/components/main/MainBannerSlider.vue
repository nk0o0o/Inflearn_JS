<template>
  <section class="main-box main-box__banner_slider">
    <div class="main-box__inner main-banner">
      <swiper
        :slides-per-view="1"
        :modules="modules"
        :pagination="pagination"
      >
        <swiper-slide>
          <a 
            href="#"
            class="item"
            :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
          >
            <span>배너</span>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a 
            href="#"
            class="item"
            :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
          >
            <span>배너</span>
          </a>
        </swiper-slide>
      </swiper>
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
      pagination: { 
        dynamicBullets: true,
        clickable: true,
      },
      modules: [Pagination],
    };
  }
})
</script>