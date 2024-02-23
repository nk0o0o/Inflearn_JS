<template>
  <div class="home-rolling-bnr" :class="{'active':wrVisiable}">
    <!-- <div class="bnr-rolling_wrap">
      <div class="bnr-slider_wrap">
        <swiper
          :direction="'vertical'"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="verticalSwiper"
          >
          <swiper-slide>
            <p class="txt"><a href="#">[채널H 이벤트] 당첨 인원수 3배 확대 누리호 발사 성공 축하 이벤트 당첨 인원수 3배 확대 누리호 발사 성공 축하 이벤트 당첨 인원수 3배 확대 누리호 발사 성공 축하 이벤트</a></p>
          </swiper-slide>
          <swiper-slide>
            <p class="txt"><a href="#">영화 설국열차처럼 시물을 재배하는 곳이 있다? 식물공장과 태양의 숲 이야기</a></p>
          </swiper-slide>
          <swiper-slide>
            <p class="txt"><a href="#">MS "팀즈, '원격근무 개발자' 특화 협업툴로 진화"</a></p>
          </swiper-slide>
        </swiper>
      </div>
      <button type="button" @click="slideShowHide()" class="bnr-open_btn">열기</button>
    </div> -->
    <div class="bnr-slide_wrap">
      <div class="bnr-rolling_wrap">
        <div class="bnr-slider_wrap">
          <swiper
            :direction="'vertical'"
            :autoplay="{
              delay: 3500,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="verticalSwiper"
            >
            <swiper-slide v-for="(item, idx) in rollList" :key="idx">
              <p class="txt"><a href="#">{{item.title}}</a></p>
            </swiper-slide>
          </swiper>
        </div>
        <button type="button" @click="slideShowHide()" class="bnr-open_btn">열기</button>
      </div>

      <div class="news-wrap" :class="{'active':wrVisiable}">
        <h3>주요소식</h3>
        <ul class="list">
          <li v-for="(item, idx) in list" :key="idx">
            <div class="img">
              <div class="thumb"><img :src="require(`@/assets/imgs/${item.src}`)"></div>
            </div>
            <p class="txt">{{item.title}}</p>
          </li>
        </ul>
        <button type="button" @click="slideShowHide()" class="bnr-close_btn">닫기</button>
      </div>
    </div>
    <coming-soon
      propComingTypeClass="coming-soon-type2"
      propComingImgClass="coming-soon-banner"
      propComingText="채널 H 최근 소식을 배너로 확인 할 수 있어요"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    comingSoon,
  },
  setup() {
		const onSwiper = (swiper:any) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log('slide change');
		};
		return {
			onSwiper,
			onSlideChange,
			scrollbar:{ draggable: true },
			modules: [Navigation, Scrollbar, A11y, Autoplay],
      rollList: [
        {
          title: "[채널H 이벤트] 당첨 인원수 3배 확대 누리호 발사 성공 축하 이벤트 당첨 인원수 3배 확대 누리호 발사 성공 축하 이벤트 당첨 인원수 3배 확대 누리호 발사 성공 축하 이벤트",
        },
        {
        title: "영화 설국열차처럼 시물을 재배하는 곳이 있다? 식물공장과 태양의 숲 이야기",
        },
        {
        title: "MS 팀즈, '원격근무 개발자' 특화 협업툴로 진화",
        },
      ],
      list: [
        {
          src: "img_thumb_01.png",
          title: "드라마 서른, 아홉 속 위로가 되는 클래식 [Classic Class] #6 드라마 서른, 아홉 속 위로가 되는 클래식",
        },
        {
        src: "img_thumb_02.png",
        title: "MS 팀즈, '원격근무 개발자' 특화 협업툴로 진화",
        },
        {
        src: "img_thumb_03.png",
        title: "MS 팀즈, '원격근무 개발자' 특화 협업툴로 진화",
        },
        {
        src: "img_thumb_04.png",
        title: "MS 팀즈, '원격근무 개발자' 특화 협업툴로 진화",
        },
        {
        src: "img_thumb_01.png",
        title: "MS 팀즈, '원격근무 개발자' 특화 협업툴로 진화",
        },
        {
        src: "img_thumb_02.png",
        title: "MS 팀즈, '원격근무 개발자' 특화 협업툴로 진화",
        },
      ]
    };
  },
  methods: {
    slideShowHide(){
      this.wrVisiable = !this.wrVisiable
    },
  },
  data() {
    return {
      wrVisiable: false,
    }
  }
});
</script>