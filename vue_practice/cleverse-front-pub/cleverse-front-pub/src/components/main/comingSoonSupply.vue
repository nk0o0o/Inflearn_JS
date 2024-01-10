<template>
  <div class="coming-soon">
    <MainHead/>
    <div class="coming-soon-wrap">
      <div class="coming-soon-head">
        <p class="illust"><i class="blind">폭풍 개발중</i></p>
        <p class="tit">
          <span class="category">지원업무</span>
          <em>Coming Soon</em>
          <span class="txt">게시판과 시스템 링크에 흩어져 있는 지원업무 내용이 지원업무 메뉴로 이관해요<br>게시물에 담당자를 호출해서 문의를 할수 있어요</span>
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
          src: 'img-coming-thumb-04-01.png',
          imgAlt: '지원업무',
        },
        {
          src: 'img-coming-thumb-04-02.png',
          imgAlt: '지원업무',
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