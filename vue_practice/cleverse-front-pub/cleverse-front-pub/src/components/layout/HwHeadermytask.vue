<template>
  <div class="header-my_content">
		<div class="header-my_inner">
			<p class="breadscr"><a href="#">이전</a></p>
			<div class="my-indiv_wrap">
				<span class="img">
					<svg v-if="randomNum == 0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Lyda Conley" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#2f52b8"></rect><rect x="0" y="0" width="36" height="36" transform="translate(0 0) rotate(324 18 18) scale(1)" fill="#f6cb47" rx="36"></rect><g transform="translate(-4 -1) rotate(4 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="black" fill="none" stroke-linecap="round"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
					<svg v-else-if="randomNum == 1" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Georgia O" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#faeb50"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 1) rotate(93 18 18) scale(1)" fill="#f6cb47" rx="6"></rect><g transform="translate(3.5 -1) rotate(-3 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="black" fill="none" stroke-linecap="round"></path><rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
					<svg v-else-if="randomNum == 2" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Babe Didrikson" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#2f52b8"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-5 9) rotate(249 18 18) scale(1)" fill="#f6cb47" rx="36"></rect><g transform="translate(-1 4.5) rotate(9 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="black"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
					<svg v-else-if="randomNum == 3" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Coretta Scott" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#2f52b8"></rect><rect x="0" y="0" width="36" height="36" transform="translate(9 -5) rotate(199 18 18) scale(1.1)" fill="#f6cb47" rx="6"></rect><g transform="translate(4.5 -5) rotate(9 18 18)"><path d="M15 20c2 1 4 1 6 0" stroke="black" fill="none" stroke-linecap="round"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="black"></rect></g></g></svg>
					<svg v-else-if="randomNum == 4" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" colors="#2f52b8,#faeb50,#2f52b8,#f6cb47,#f6cb47" name="Mahalia Jackson" size="60"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="20" fill="white"></rect></mask><g mask="url(#mask__beam)" fill="transparent"><rect width="36" height="36" rx="20" fill="#f6cb47"></rect><rect x="0" y="0" width="36" height="36" transform="translate(4 4) rotate(350 18 18) scale(1.2)" fill="#2f52b8" rx="6"></rect><g transform="translate(6 -2) rotate(0 18 18)"><path d="M15 21c2 1 4 1 6 0" stroke="white" fill="none" stroke-linecap="round"></path><rect x="14" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect><rect x="20" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect></g></g></svg>
					<div v-else-if="randomNum == 5" class="img"><img src="@/assets/img/v2/img_dummy1.png" alt=""></div>
					<div v-else-if="randomNum == 6" class="img"><img src="@/assets/img/v2/img_dummy2.png" alt=""></div>
				</span>
				<dl>
					<dt>
						김한화
						<span class="pos">과장 / Assistant Manager</span>
					</dt>
					<dd>
						<span class="cnum">2020203010</span>
						<span class="phone">010-1234-5603</span>
						<span class="email">hanhwasystem@hanhwa.com</span>
					</dd>
				</dl>
				<a href="#" class="logout">Logout</a>
			</div>
			<div class="my-task_input">
				<form action="">
					<div class="input-box">
						<label for="myTask">나의 소개</label>
						<input type="text" required placeholder="김한화님을 자유롭게 소개해 주세요! (70자 내외)" id="myTask" :class="{'size-adjustment': !modify}">
						<button type="reset" class="input-txt-del">입력 삭제</button>
						<button type="button" class="btn_modify" v-show="modify" @click="modifyBtn">수정</button>
						<button type="button" class="btn_delete" v-show="delete1">취소</button>
						<button type="button" class="btn_save" style="display:none;" v-show="save" @click="saveBtn">저장</button>
					</div>
				</form>
			</div>
	</div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  name: '',
  data () {
    return {
      randomNum: this.randomNumFun(),
			modify: true,
			save: false,
			delete1: false,
			ipt: false,
			isSticky: false,
			isHidden: true,
    }
  },
  methods: {  
		randomNumFun(){
			let rN = Math.floor(Math.random() * 7);
			return rN;
		},
		modifyBtn(){
			this.modify = false;
			this.save = true;
			this.delete1 = true;
			this.ipt = true;
		},
		saveBtn(){
			this.modify = true;
			this.save = false;
			this.delete1 = false;
			this.ipt = false;
		},
		isScroll(event :any){
			let _scrollY = window.scrollY || window.pageYOffset;
			if(_scrollY >= 83){
					this.isSticky = true;
			}else if(_scrollY <= 5){
					this.isSticky = false;
			}
		},
		update(){
			this.isHidden = !this.isHidden;
		},
  },
	created () {
		window.addEventListener('scroll', this.isScroll);
	},
	unmounted () {
		window.removeEventListener('scroll', this.isScroll);
	},
});
</script>
