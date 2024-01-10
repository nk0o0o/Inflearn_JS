<template>
  <div class="coming-soon">
    <MainHead/>
    <div class="coming-soon-wrap">
      <div class="coming-soon-head">
        <p class="illust"><i class="blind">폭풍 개발중</i></p>
        <p class="tit">
          <span class="category">전자결재</span>
          <em>Coming Soon</em>
          <span class="txt">시원한 레이아웃, 깔끔한 클레버스 디자인으로 개편되고<br>오피스 문서에 대한 호환성이 좋아져요</span>
        </p>
      </div>
      <div class="coming-soon-cont">
        <div class="coming-soon-slider-wrap">
					<swiper
						:space-between="0"
						:modules="modules"
            :autoHeight="true"
						:navigation="navigation"
            :pagination="pagination"
						class="coming-swiper"
						>
						<swiper-slide v-for="(item, index) in slides" :key="index">
							<div class="slide-wrap">
								<span class="img"><img :src="require(`@/assets/imgs/coming/${item.src}`)" :alt="item.imgAlt"></span>
								<p><span v-if="item.text" :class="[{'ico': item.icon}, item.iconClass]">{{item.text}}</span></p>
							</div>
						</swiper-slide>
					</swiper>
					<div class="swiper-button-prev" slot:button-prev></div>
					<div class="swiper-button-next" slot:button-next></div>
				</div>
      </div>
    </div>
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
  data() {
    return {
      pagination: {
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			scrollbar:{ draggable: true },
			modules: [ Navigation, Pagination ],
      slides: [
        {
          src: 'img-coming-thumb-02-01.png',
          imgAlt: '협업보드1',
        },
        {
          src: 'img-coming-thumb-02-02.png',
          imgAlt: '협업보드2',
        },
      ],
    }
  },
  methods: {
    
  },
  computed: {

  }
})
</script>