<template>
	<transition name="">
		<section class="viewer history" id="ViewerVersion" :class="{'active':propClass}">
			<h2 class="blind">활동내역 레이어</h2>
			<button type="button" class="opinion_search_closed" @click="viewerHistory_closed()"><span>닫기</span></button>

			<div class="scroll_box">
				<div class="day" v-for="(item, index) in day" :key="index">
					<div class="day_tit" v-on:click="item.open = !item.open">{{item.date}} <span class="today" v-if="item.today">Today</span></div>
					<div v-if="item.open">
						<div class="box" :class="{active: item.isActive}" v-for="(item, index) in list" :key="index">
							<div class="point"><div></div></div>
							<div class="tit">
								<i class="ico-unlock" v-if="item.unlock"></i>
								<i class="ico-lock" v-if="item.lock"></i>
								{{item.tit}}
								<div class="dividing_line_ty3" v-if="item.update"></div>
								<button type="button" v-if="item.update">버전 업데이트</button>
							</div>
							<div class="member">
								<div class="dropdown-type2 tooltip text">
									<dropdown-menu2
										:propName="'김한화'"
										:propItem="dropItem"
										:propClass="'dropdown-type2-list type2'"
									>
									</dropdown-menu2>
								</div>
								<span class="date">{{item.date}}</span>
							</div>
						</div>
					</div>
				</div>

				<!-- <div class="day" :class="{'active':Visiable}">
					<div class="day_tit" @click="toggle()">05.21</div>
					<div class="box">
						<div class="point"><div></div></div>
						<div class="tit"><i class="ico-unlock"></i> 편집 잠금 해제</div>
						<div class="member">
							<div class="dropdown-type2 tooltip text">
								<dropdown-menu2
									:propName="'김한화'"
									:propItem="dropItem"
									:propClass="'dropdown-type2-list type2'"
								>
								</dropdown-menu2>
							</div>
							<span class="date">2020.07.20</span>
						</div>
					</div>
					<div class="box">
						<div class="point"><div></div></div>
						<div class="tit"><i class="ico-lock"></i> 편집 잠금</div>
						<div class="member">
							<div class="dropdown-type2 tooltip text">
								<dropdown-menu2
									:propName="'김한화'"
									:propItem="dropItem"
									:propClass="'dropdown-type2-list type2'"
								>
								</dropdown-menu2>
							</div>
							<span class="date">2020.07.20</span>
						</div>
					</div>
					<div class="box">
						<div class="point"><div></div></div>
						<div class="tit">버전 3.1</div>
						<div class="member">
							<div class="dropdown-type2 tooltip text">
								<dropdown-menu2
									:propName="'김한화'"
									:propItem="dropItem"
									:propClass="'dropdown-type2-list type2'"
								>
								</dropdown-menu2>
							</div>
							<span class="date">2020.07.20</span>
						</div>
					</div>
				</div> -->
					
				<!-- <div class="day" :class="{'active':Visiable}">
					<div class="day_tit" @click="toggle()">05.20</div>
					<div class="box">
						<div class="point"><div></div></div>
						<div class="tit">
							버전 3.2
							<div class="dividing_line_ty3"></div>
							<button type="button">버전 업데이트</button>
						</div>
						<div class="member">
							<div class="dropdown-type2 tooltip text">
								<dropdown-menu2
									:propName="'김한화'"
									:propItem="dropItem"
									:propClass="'dropdown-type2-list type2'"
								>
								</dropdown-menu2>
							</div>
							<span class="date">2020.07.20</span>
						</div>
					</div>
					<div class="box">
						<div class="point"><div></div></div>
						<div class="tit">버전 3.1</div>
						<div class="member">
							<div class="dropdown-type2 tooltip text">
								<dropdown-menu2
									:propName="'김한화'"
									:propItem="dropItem"
									:propClass="'dropdown-type2-list type2'"
								>
								</dropdown-menu2>
							</div>
							<span class="date">2020.07.20</span>
						</div>
					</div>
					<div class="box">
						<div class="point"><div></div></div>
						<div class="tit">버전 3.1</div>
						<div class="member">
							<div class="dropdown-type2 tooltip text">
								<dropdown-menu2
									:propName="'김한화'"
									:propItem="dropItem"
									:propClass="'dropdown-type2-list type2'"
								>
								</dropdown-menu2>
							</div>
							<span class="date">2020.07.20</span>
						</div>
					</div>
					<div class="box">
						<div class="point"><div></div></div>
						<div class="tit">버전 3.1</div>
						<div class="member">
							<div class="dropdown-type2 tooltip text">
								<dropdown-menu2
									:propName="'김한화'"
									:propItem="dropItem"
									:propClass="'dropdown-type2-list type2'"
								>
								</dropdown-menu2>
							</div>
							<span class="date">2020.07.20</span>
						</div>
					</div>
				</div> -->
			</div> <!-- //scroll_box -->
			
			<div class="btn_wrap_box">
				<button type="button" class="btn-more-ico_small1 down">더보기</button>
			</div>
		</section>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

export default defineComponent({
	components: {
		dropdownMenu2,
	},
	props: {
		propClass: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			//Visiable: false,
			show: true,
			day: [
				{ 
					open: true,
					today: true,
					date: '05.22',
				},
				{ 
					open: true,
					date: '05.21',
				},
				{ 
					open: true,
					date: '05.20',
				},
			],
			list: [
				{ 
					isActive: true,
					tit: '버전 3.2',
					date: '2020.07.20',
					update: true,
				},
				{ 
					tit: '편집 잠금 해제',
					date: '2020.07.20',
					unlock: true,
				},
				{ 
					tit: '편집 잠금',
					date: '2020.07.20',
					lock: true,
				},
			],
			dropItem: {
        title: `
          <div class="tooltip-member">
						<div>
							<span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
							<p><b>김한화</b> <span class="pos">직위/직책</span></p>
						</div>
						<p class="cp">회사명 <span></span> 소속조직명</p>
						<p class="phone">010-1234-2336</p>
						<p class="email">mail@hanwha.com</p>
					</div>
        `,
      },
		};
	},
	methods: {
		//toggle(){
		//	this.Visiable = !this.Visiable
		//},
		viewerHistory_closed(){
			this.$emit('viewerClose')
		},
	}
});
</script>