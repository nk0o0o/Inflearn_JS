<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="맴버 검색"
    class="ly-pop-type1 admin pp"
  >
    <template v-slot:body>
		<div>
			<form action="">
				<div class="input-box search-type1 full">
					<input type="text" required placeholder="이름 검색">
					<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
					<button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
					<div class="error" v-if="error">에러 내용입력</div>
				</div>
			</form>
		</div>
		<div class="member-slider">
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
			</swiper>
			<div class="swiper-button-prev" slot:button-prev></div>
			<div class="swiper-button-next" slot:button-next></div>
		</div>
		<div class="result-list">
			<strong>검색결과</strong>
			<ul>
				<li>
					<div class="all">All Member</div>
					<div class="input-chk">
						<input type="checkbox" name="chk1" id="chk1_1"><label for="chk1_1">김이름</label>
					</div>
				</li>
				<li class="host">
					<div class="info">
						<span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김이름"></span>
						<dl>
							<dt>김이름<span class="pos">직위 / 직책</span></dt>
							<dd>부문명 / 협력사 관련 정보 기획서 협력사 관련 정보 기획서 업데이트 예정</dd>
						</dl>
					</div>
					<div class="input-chk">
						<input type="checkbox" name="chk1" id="chk1_2"><label for="chk1_2">김이름</label>
					</div>
				</li>
				<li>
					<div class="info">
						<span class="img"><img :src="require('@/assets/imgs/img_dummy2.png')" alt="김이름"></span>
						<dl>
							<dt>김이름<span class="pos">직위 / 직책</span></dt>
							<dd>부문명 / 협력사 관련 정보 기획서 협력사 관련 정보 기획서 업데이트 예정</dd>
						</dl>
					</div>
					<div class="input-chk">
						<input type="checkbox" name="chk1" id="chk1_3"><label for="chk1_3">김이름</label>
					</div>
				</li>
				<li>
					<div class="info">
						<span class="img"><img :src="require('@/assets/imgs/img_dummy2.png')" alt="김이름"></span>
						<dl>
							<dt>김이름<span class="pos">직위 / 직책</span></dt>
							<dd>부문명 / 협력사 관련 정보 기획서 협력사 관련 정보 기획서 업데이트 예정</dd>
						</dl>
					</div>
					<div class="input-chk">
						<input type="checkbox" name="chk1" id="chk1_4"><label for="chk1_4">김이름</label>
					</div>
				</li>
			</ul>
			<div class="nodata" v-if="show"><span>해당 검색어와 일치하는<br />사용자가 없습니다.</span></div>
		</div>
    </template>

    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md line-type1">취소</button>
			<button type="button" class="btn md">저장</button>
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