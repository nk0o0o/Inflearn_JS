<template>
	<!--
		default class : bg5
		bg1 ~ bg7
	-->
  <div class="header-mytask_content bg5">
		<div class="header-mytask_inner">
			<p class="breadscr"><a href="#">구독솔루션 게임</a></p>
			<div class="theme-cl_wrap">
				<div class="dropdown-collab-type11">
					<colortheme-dropdown></colortheme-dropdown>
				</div>
			</div>
			<div class="tt-num">
				<span>Total</span>
				<em>3452</em>
				<span>Today</span>
				<em>21</em>
			</div>

			<div class="left">
				<div class="my-indiv_wrap">
					<span class="img" v-if="mind">
						<!-- 이미지 없을 경우 default img
							<img :src="require('@/assets/imgs/collaboration/img/img_ppbb_default.png')" alt="김한화"> 
						-->
						<img :src="require('@/assets/imgs/img_dummy1.png')" alt="">
					</span>
					<span class="img mind" v-else-if="!mind">
						<svg v-if="randomNum == 0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Lyda Conley" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#2f52b8"></rect><rect x="0" y="0" width="36" height="36" transform="translate(0 0) rotate(324 18 18) scale(1)" fill="#f6cb47" rx="36"></rect><g transform="translate(-4 -1) rotate(4 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="black" fill="none" stroke-linecap="round"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
						<svg v-else-if="randomNum == 1" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Georgia O" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#faeb50"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 1) rotate(93 18 18) scale(1)" fill="#f6cb47" rx="6"></rect><g transform="translate(3.5 -1) rotate(-3 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="black" fill="none" stroke-linecap="round"></path><rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
						<svg v-else-if="randomNum == 2" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Babe Didrikson" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#2f52b8"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-5 9) rotate(249 18 18) scale(1)" fill="#f6cb47" rx="36"></rect><g transform="translate(-1 4.5) rotate(9 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="black"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
						<svg v-else-if="randomNum == 3" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Coretta Scott" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#2f52b8"></rect><rect x="0" y="0" width="36" height="36" transform="translate(9 -5) rotate(199 18 18) scale(1.1)" fill="#f6cb47" rx="6"></rect><g transform="translate(4.5 -5) rotate(9 18 18)"><path d="M15 20c2 1 4 1 6 0" stroke="black" fill="none" stroke-linecap="round"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
						<svg v-else-if="randomNum == 4" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Mahalia Jackson" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#f6cb47"></rect><rect x="0" y="0" width="36" height="36" transform="translate(4 4) rotate(350 18 18) scale(1.2)" fill="#2f52b8" rx="6"></rect><g transform="translate(6 -2) rotate(0 18 18)"><path d="M15 21c2 1 4 1 6 0" stroke="white" fill="none" stroke-linecap="round"></path><rect x="14" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect><rect x="20" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect></g></g></svg>
						<div v-else-if="randomNum == 5" class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt=""></div>
						<div v-else-if="randomNum == 6" class="img"><img :src="require('@/assets/imgs/img_dummy2.png')" alt=""></div>
						<a href="#">마음건강 보기</a>
					</span>
					<dl>
						<dt>
							<span>
								김한화
								<span class="pos">Assistant Manager</span>
							</span>
							<div class="tooltipmsg">
								<schedule-dropdown></schedule-dropdown>
							</div>
						</dt>
						<dd><button type="button" class="bn_view">자세히 보기</button></dd>
					</dl>
				</div>
			</div>
			<div class="right">
				<ul class="mytask-info_list">
					<li class="task-1"><span><em class="ell-multiline2">#업무 공유 시스템 시스템개발 업무공 유시스템 시스 템개발</em></span></li>
					<li class="task-2"><span><em class="ell-multiline2">#시스템개발</em></span></li>
					<li class="task-3"><span><em class="ell-multiline2">#Vue/React</em></span></li>
					<li class="task-4"><span><em class="ell-multiline2">#Pigma</em></span></li>
				</ul>
			</div>
		</div>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import scheduleDropdown from '@/components/scheduleDropdown.vue';
import colorthemeDropdown from '@/components/colorthemeDropdown.vue';


export default defineComponent({
  components: {
		scheduleDropdown,
		colorthemeDropdown,
  },
  name: '',
  data () {
    return {
      randomNum: this.randomNumFun(),
			mind: true,
			tutorialClose: true,
			isSticky: false,
			isHidden: true,
    }
  },
	computed: {
	},
  methods: {
		randomNumFun(){
			let rN = Math.floor(Math.random() * 7);
			return rN;
		},
  },
});
</script>
