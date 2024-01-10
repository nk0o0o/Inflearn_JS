<template>
	<v-menu
		:close-on-content-click="false"
	>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span class="personnel-set"><i class="blind">setting</i></span>
				<span class="personnel-num" v-if="propNum">{{ propNum }}</span>
			</button>
		</template>
		<div class="dropdown-collab-list-type9 v2">
			<div class="inner">
				<span class="member-num">멤버(1)</span>
				<div class="member-slider">
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
				<div class="input-box-search-wrap">
					<form action="">
						<div class="input-box search-type1 full">
							<input type="text" required placeholder="이름/조직명 검색">
							<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
							<button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
							<div class="error" v-if="error">에러 내용입력</div>
						</div>
					</form>
				</div>
				<div class="result-list">
					<strong>검색결과</strong>
					<ul v-if="show">
						<li>
							<div class="info">
								<dl>
									<dt>김이사님직속팀</dt>
									<dd>소속조직명(최하위level)</dd>
								</dl>
							</div>
							<div class="input-chk">
								<input type="checkbox" name="chk1" id="chk1_1"><label for="chk1_1">김이름</label>
							</div>
						</li>
						<li class="team-last">
							<div class="info">
								<dl>
									<dt>김이사님직속팀</dt>
									<dd>소속조직명(최하위level)</dd>
								</dl>
							</div>
							<div class="input-chk">
								<input type="checkbox" name="chk1" id="chk1_2"><label for="chk1_2">김이름</label>
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
					<div class="nodata" v-if="!show"><span>해당 검색어와 일치하는<br />사용자가 없습니다.</span></div>
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
					leader: true,
					src: 'profile-default-img-34.svg',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
				{
					leader: false,
					src: 'profile-default-img-34.svg',
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
