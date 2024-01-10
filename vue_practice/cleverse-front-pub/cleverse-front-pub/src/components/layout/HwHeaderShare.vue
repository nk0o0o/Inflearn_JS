<template>
	<div class="header-task_content">
		<div class="header-content_wrap share">
			<div class="flex jc-sb">
				<div class="dropdown-collab-type1" id="select-box">
					<dropdown-menu3
						:propisSlotMode="true"
						:propSelectText="selectSlotText"
						:propId="'select-box'"
						@selected="selectSlotValue"
						:propType="true"
					>
						<template v-slot:body={on}>
							<div class="dropdown-collab-list-type1" :style="`width:${on.width}px`">
								<div 
									class="item"
									v-for="(item, index) in dropItem"
									:key="index"
									:value="index"
									:class="{ active: item.isActive }"
								>
									<button type="button" v-on="on" :class="`${item.class}`" @click="test(item)">
										{{ item.title }}
									</button>
								</div>
							</div>
						</template>
					</dropdown-menu3>
				</div>
				<div>
					<button type="button" class="btn bk plus">새 정보 공유하기</button>
				</div>
			</div>
		
			<div class="share-slide_wrap" id="slideTab" :class="{'active':wrVisiable}">
				<div class="rank-rolling_wrap">
					<h2>Ranking</h2>
					<div class="roll-slider_wrap">
						<p class="nodata" v-if="show">랭킹 산출 중입니다.</p>
						<swiper
							:direction="'vertical'"
							:autoplay="{
								delay: 3000,
								disableOnInteraction: false,
							}"
							:pagination="{
								clickable: true,
							}"
							:modules="modules"
							class="verticalSwiper"
							>
							<swiper-slide>
								<div class="share-slider_cont_wrap">
									<div class="share-slider_cont_inner">
										<div class="share-slider_cont">
											<span class="classif">Node</span>
											<em class="rank t01">1위</em>
											<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능 노드명은 한글 기준 20자까지 노출가능1</span>
											<span class="num">9999건</span>
											<span class="up">10</span>
										</div>
									</div>
									<div class="share-slider_cont_inner">
										<div class="share-slider_cont">
											<span class="classif">People</span>
											<em class="rank t01">1위</em>
											<span class="ell-singleline txt pp">
												김한화
												<span class="pos">Assistant Manager</span>
												<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
											</span>
											<span class="num">9999건</span>
											<span class="new">NEW</span>
										</div>
									</div>	
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="share-slider_cont_wrap">
									<div class="share-slider_cont_inner">
										<div class="share-slider_cont">
											<span class="classif">Node</span>
											<em class="rank t01">2위</em>
											<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능 노드명은 한글 기준 20자까지 노출가능1</span>
											<span class="num">9999건</span>
											<span class="down">10</span>
										</div>
									</div>
									<div class="share-slider_cont_inner">
										<div class="share-slider_cont">
											<span class="classif">People</span>
											<em class="rank t01">2위</em>
											<span class="ell-singleline txt pp">
												김한화
												<span class="pos">Assistant Manager</span>
												<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
											</span>
											<span class="num">9999건</span>
											<span class="not-rank">-</span>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="share-slider_cont_wrap">
									<div class="share-slider_cont_inner">
										<div class="share-slider_cont">
											<span class="classif">Node</span>
											<em class="rank t01">3위</em>
											<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능 노드명은 한글 기준 20자까지 노출가능1</span>
											<span class="num">9999건</span>
											<span class="down">10</span>
										</div>
									</div>
									<div class="share-slider_cont_inner">
										<div class="share-slider_cont">
											<span class="classif">People</span>
											<em class="rank t01">3위</em>
											<span class="ell-singleline txt pp">
												김한화
												<span class="pos">Assistant Manager</span>
												<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
											</span>
											<span class="num">9999건</span>
											<span class="not-rank">-</span>
										</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
					<button type="button" @click="slideShowHide()" class="week-box_open_bn">열기</button>
				</div>

				<div class="week-ranking_wrap">
						<h2>Weekly Ranking <span>(10.10 - 10.16)</span></h2>
						<div class="tab-type7" id="tabsType7">
								<ul class="tab-menu">
									<li v-for="(tab, index) in tabsType7" v-bind:class="{active:currentTab7===index}" :key="index">
										<button type="button" v-on:click="currentTab7 = index">{{tab}}</button>
									</li>
								</ul>
						</div>
				
						<div v-show="currentTab7 == 0" class="tab-content">
							<div class="wr-slider_wrap">
								<swiper
									:slides-per-view="1"
									:space-between="0"
									@swiper="onSwiper"
									@slideChange="onSlideChange"
									:modules="modules"
									:navigation="navigation"
									class="mySwiper"
									>
									<swiper-slide>
											<div class="share-slider_cont_wrap">
													<div class="share-slider_cont_inner">
															<div class="share-slider_cont">
																	<em class="rank t01">1위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">9999건</span>
																	<span class="up">10</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank t02">2위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="down">10</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank t03">3위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="not-rank">-</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">4위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">5위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
													</div>
													<div class="share-slider_cont_inner">
															<div class="share-slider_cont">
																	<em class="rank">6위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">7위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">8위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="not-rank">-</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">9위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">10위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
													</div>
											</div>
									</swiper-slide>
									<swiper-slide>
											<div class="share-slider_cont_wrap">
													<div class="share-slider_cont_inner">
															<div class="share-slider_cont">
																	<em class="rank t01">1위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">9999건</span>
																	<span class="up">10</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank t02">2위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="down">10</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank t03">3위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">4위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">5위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="not-rank">-</span>
															</div>
													</div>
													<div class="share-slider_cont_inner">
															<div class="share-slider_cont">
																	<em class="rank">6위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">7위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">8위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="not-rank">-</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">9위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
															<div class="share-slider_cont">
																	<em class="rank">10위</em>
																	<span class="ell-singleline txt">노드명은 한글 기준 20자까지 노출가능</span>
																	<span class="num">302건</span>
																	<span class="new">NEW</span>
															</div>
													</div>
											</div>
									</swiper-slide>
									</swiper>
									<div class="swiper-button-prev" slot:button-prev></div> 
									<div class="swiper-button-next" slot:button-next></div>
							</div>
						</div>

					<div v-show="currentTab7 == 1" class="tab-content">
						<div class="wr-slider_wrap">
							<swiper
								:slides-per-view="1"
								:space-between="0"
								@swiper="onSwiper"
								@slideChange="onSlideChange"
								:modules="modules"
								:navigation="navigation"
								class="mySwiper"
								>
								<swiper-slide>
									<div class="share-slider_cont_wrap">
											<div class="share-slider_cont_inner">
												<div class="share-slider_cont">
													<em class="rank t01">1위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">9999건</span>
													<span class="up">10</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank t02">2위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="down">10</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank t03">3위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="not-rank">-</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank">4위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="new">NEW</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank">5위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="not-rank">-</span>
												</div>
											</div>
											<div class="share-slider_cont_inner">
												<div class="share-slider_cont">
													<em class="rank">6위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="new">NEW</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank">7위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="new">NEW</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank">8위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="new">NEW</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank">9위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="new">NEW</span>
												</div>
												<div class="share-slider_cont">
													<em class="rank">10위</em>
													<span class="ell-singleline txt">
														김한화
														<span class="pos">Assistant Manager</span>
														<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
													</span>
													<span class="num">302건</span>
													<span class="new">NEW</span>
												</div>
										</div>
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="share-slider_cont_wrap">
										<div class="share-slider_cont_inner">
											<div class="share-slider_cont">
												<em class="rank t01">1위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">9999건</span>
												<span class="up">10</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank t02">2위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="down">10</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank t03">3위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="new">NEW</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank">4위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="not-rank">-</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank">5위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="new">NEW</span>
											</div>
										</div>
										<div class="share-slider_cont_inner">
											<div class="share-slider_cont">
												<em class="rank">6위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="new">NEW</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank">7위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="not-rank">-</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank">8위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="new">NEW</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank">9위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="new">NEW</span>
											</div>
											<div class="share-slider_cont">
												<em class="rank">10위</em>
												<span class="ell-singleline txt">
													김한화
													<span class="pos">Assistant Manager</span>
													<span class="node">&middot; 대표 노드명 한글기준 최대 20자</span>
												</span>
												<span class="num">302건</span>
												<span class="new">NEW</span>
											</div>
										</div>
									</div>
								</swiper-slide>
								</swiper>
								<div class="swiper-button-prev" slot:button-prev></div> 
								<div class="swiper-button-next" slot:button-next></div>
						</div>
					</div>
					<button type="button" @click="slideShowHide()" class="week-box_close_bn">닫기</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

export default defineComponent({
  components: {
		Swiper,
    SwiperSlide,
		dropdownMenu3,
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
				nextEl: '.swiper-button-prev',
				prevEl: '.swiper-button-next',
			},
			scrollbar:{ draggable: true },
			modules: [Navigation, Scrollbar, A11y, Autoplay],
		};
	},	
	methods: {
		slideShowHide(){
			this.wrVisiable = !this.wrVisiable
		},
		selectSlotValue(val:any){
      this.selectSlotText = val
    },
  },
  data() {
    return {
			currentTab7: 0,
			tabsType7: ['Node', 'People'],
      selectSlotText:'전체 정보 공유',
			dropItem: [
				{ title: '전체 정보 공유', isActive: true },
				{ title: '나의 정보 공유', isActive: false },
			],
			wrVisiable: false,
			
    }
  }
});
</script>
