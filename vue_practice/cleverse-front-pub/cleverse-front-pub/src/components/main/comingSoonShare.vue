<template>
  <div class="coming-soon">
    <MainHead/>
    <div class="coming-soon-wrap">
      <div class="coming-soon-head">
        <p class="illust"><i class="blind">폭풍 개발중</i></p>
        <p class="tit">
          <span class="category">정보공유</span>
          <em>Coming Soon</em>
          <span class="txt">IT트렌드와 다양한 소식, 인사이트를 공유하는 공간이 신설되요</span>
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
          src: 'img-coming-thumb-03-01.png',
          imgAlt: '정보공유',
          text: '카테고리를 선택해 원하는 분야의 정보를 모아보고, 새로운 인사이트를 공유할 수 있어요',
          icon: true,
          iconClass: 'com01',
        },
        {
          src: 'img-coming-thumb-03-02.png',
          imgAlt: '정보공유',
          text: '카드를 클릭하면 내용을 확인하고 의견을 남길수 있어요',
          icon: true,
          iconClass: 'com02',
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