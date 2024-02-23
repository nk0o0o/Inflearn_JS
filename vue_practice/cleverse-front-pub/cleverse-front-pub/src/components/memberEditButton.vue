<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<button type="button"
				class="btn sm round-type"
				v-bind="props"
			>
				멤버 추가
			</button>
		</template>
		<div class="dropdown-collab-list-type9 button-type">
			<div class="inner">
        <span class="fc lgray">멤버(21)</span>
        <div class="member-slider mg-t10 mg-b10">
					<swiper
						:slides-per-view="5"
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
								<span class="img"><img :src="require('@/assets/imgs/icon-svg/profile-default.svg')" alt="김한화"></span>
								<button type="button" class="btn-del_people"></button>
								<span class="name">김한화</span>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div>
								<span class="img"><img :src="require('@/assets/imgs/icon-svg/profile-default.svg')" alt="김한화"></span>
								<button type="button" class="btn-del_people"></button>
								<span class="name">김한화</span>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div>
								<span class="img"><img :src="require('@/assets/imgs/icon-svg/profile-default.svg')" alt="김한화"></span>
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

				<div>
					<form action="">
						<div class="input-box search-type1 h40 full">
							<input type="text" required placeholder="이름/조직명 검색">
							<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
							<button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
							<div class="error" v-if="error">에러 내용입력</div>
						</div>
					</form>
				</div>

				<div class="result-list member">
					<strong>검색결과</strong>
          <ul v-if="show">
						<li v-for="(item, index) in personnel" :key="index">
							<div class="info">
								<dl>
									<dt>{{item.name}}</dt>
									<dd>{{item.spot}}</dd>
								</dl>
							</div>
							<div class="input-chk">
								<input type="checkbox" name="chk1" :id="`chk1-${index}`"><label :for="`chk1-${index}`"></label>
							</div>
						</li>
					</ul>
					<ul v-if="show" class="thumb">
						<li v-for="(item, index) in personnel2" :key="index" :class="{host: item.leader}">
							<div class="info">
								<span class="img"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.name"></span>
								<dl>
									<dt>{{item.name}}<span class="pos">{{item.spot}} / {{item.pos}}</span></dt>
									<dd>{{item.sector}} / {{item.node}}</dd>
								</dl>
							</div>
							<div class="input-chk">
								<input type="checkbox" name="chk2" :id="`chk2-${index}`"><label :for="`chk2-${index}`"></label>
							</div>
						</li>
					</ul>
					<div class="nodata" v-if="!show"><span>이름을 검색하고 멤버를 추가하세요</span></div>
				</div>
			</div>
			<div class="btn-wrap">
				<button type="button" class="btn lg line-type2">취소</button>
				<button type="button" class="btn lg">저장</button>
			</div>
		</div>
	</v-menu>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default defineComponent({
	components: {
		Swiper,
		SwiperSlide,
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
	data() {
		return {
			show: true,
      personnel: [
				{
					name: '김이사님직속팀',
					spot: '소속조직명(최하위level)',
				},
				{
					name: '한화김이조직명',
					spot: '소속조직명(최하위level)소속조직명(최하위level)소속조직명(최하위level)',
				},
			],
			personnel2: [
				{
					leader: true,
					src: 'img_dummy1.png',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '협력사 관련 정보 기획서 협력사 관련 정보 기획서 업데이트 예정',
				},
				{
					leader: false,
					src: 'img_dummy1.png',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
			]
		}
	},
	props: {
		propNum: {
			type: String,
			default:''
		},
	},
})
</script>
