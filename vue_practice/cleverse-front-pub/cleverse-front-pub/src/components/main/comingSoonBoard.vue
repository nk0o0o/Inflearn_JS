<template>
  <div class="coming-soon">
    <MainHead/>
    <div class="coming-soon-wrap">
      <div class="coming-soon-head">
        <p class="illust"><i class="blind">폭풍 개발중</i></p>
        <p class="tit">
          <span class="category">협업보드</span>
          <em>Coming Soon</em>
          <span class="txt">협업보드를 활용해 업무를 기록하고 의견을 공유하며<br>파일도 클라우드에 보관할 수 있어요</span>
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
          src: 'img-coming-thumb-01-01.png',
          imgAlt: '협업보드1',
          text: '주제별 협업공간을 만들어 업무, 프로젝트를 관리할 수 있어요',
          icon: true,
          iconClass: 'com01',
        },
        {
          src: 'img-coming-thumb-01-02.png',
          imgAlt: '협업보드2',
          text: '협업공간의 보드를 활용해서 업무를 기록하고 의견을 공유할수 있어요',
          icon: true,
          iconClass: 'com02',
        },
        {
          src: 'img-coming-thumb-01-03.png',
          imgAlt: '협업보드3',
          icon: true,
          text: '업로드한 파일은 클라우드에 저장되어 언제 어디서나 쉽게 찾아볼 수 있어요',
          iconClass: 'com03',
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