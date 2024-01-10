<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title=""
    class="ly-pop-type1 admin pp no-title"
  >
    <template v-slot:body>
      <div class="title sub">함께할 멤버는</div>
      <!-- search -->
      <div>
        <form action="">
          <div class="input-box search-type1 full h50">
            <input type="text" required placeholder="이름 검색">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
            <div class="error" v-if="error">에러 내용입력</div>
          </div>
        </form>
      </div>
      <!-- //search -->

      <!-- slider -->
      <div class="member-slider mg-t30 mg-b30">
        <swiper
          :slides-per-view="7"
          :space-between="10"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="modules"
          :navigation="navigation"
          class="mySwiper"
          >
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
              <button type="button" class="btn-del_people"></button>
              <span class="name">김한화</span>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot:button-prev></div>
        <div class="swiper-button-next" slot:button-next></div>
      </div>
      <!-- //slider -->
      <ol class="pop-prog_list">
        <li><em>1</em></li>
        <li><em>2</em></li>
        <li class="ov"><em>3</em></li>
      </ol>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">이전</button>
        <button type="button" class="btn lg">제출</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import basePopup from "@/components/layout/basePopup.vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default defineComponent ({
	components: {
		Swiper,
        SwiperSlide,
		basePopup,
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
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
            scrollbar:{ draggable: true },
            modules: [Navigation, Scrollbar, A11y],
        };
    },
	props: {
		pageInfo: null,
		propShowModal: {
			type: Boolean,
			default: false,
		},
	},
	data(){
		return{
			show: false,
			isActive: false,
			error: false,
			showModal: this.propShowModal,
		}
	},
	watch: {
		'propShowModal': function(){
			this.showModal = this.propShowModal
		}
	},
	methods:{
		onHideModal(){
			this.$emit('popClose');
		},
	}
});
</script>