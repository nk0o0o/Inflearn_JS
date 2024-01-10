<template>
  <div class="header-search_content">
		<div class="header-search_inner">

			<div class="tab-type5" id="tabsType5">
				<ul class="tab-menu">
					<li v-for="(tab, index) in tabsType5" v-bind:class="{active:currentTab===index}" :key="index">
						<button type="button" v-on:click="currentTab = index">{{tab}}</button>
					</li>
				</ul>
			</div>

			<div v-show="currentTab == 0">
				<div class="people-total-search_wrap">
					<p class="info">스킬, 직무 태그로 멤버를 검색할 수 있어요.</p>
					<div class="tag">
						<form action="" :class="{'hid':isHid}">
							<div class="search-type3">
								<input type="text" required placeholder="EX) # 영업기획" :value="iptLen" @input="iptLen = $event.target.value">
								<button type="reset" class="input-txt-del">입력 삭제</button>
								<button type="button" class="btn_search">검색</button>
								<div class="list scroll" v-show="aaa">
										<tag-searchhint></tag-searchhint>
								</div>
							</div>
						</form>
						<div class="value-box" :class="{'hid': !isHid}">
							<div class="tag">
								<span v-for="(item,index) in tagList" :key="index"># {{item}}</span>
							</div>
							<button type="reset" class="input-txt-del" @click="inputView" >입력 삭제</button>
						</div>
						<div class="bn">
							<button class="btn line">#태그 더보기</button>
						</div>
					</div>
				</div>
			</div>
			<div v-show="currentTab == 1">
				<div class="people-total-search_wrap">
					<p class="info">멤버 이름을 직접 검색할 수 있어요.</p>
					<form action="">
						<div class="search-type3">
							<input type="text" required placeholder="&quot;이름 2자 이상 입력&quot; EX) 김한화">
							<button type="reset" class="input-txt-del">입력 삭제</button>
							<button type="button" class="btn_search">검색</button>
							<div class="list scroll">
								<tag-searchhint></tag-searchhint>
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import tagSearchhint from '@/components/tagSearchhint.vue';

export default defineComponent({
  components: {
		tagSearchhint
  },
  name: '',
  data () {
    return {
      currentTab: 0,
			tabsType5: ['태그검색', '이름검색'],
			iptLen: '',
			tagList:['Photoshop', 'Sketch', 'UI 디자이너'],
			isTagSearch: true,
			isSticky: false,
			isHid: true,
    }
  },
	computed: {
		aaa():boolean {
			return this.iptLen.length > 3
		}
	},
  methods: {
		inputView(){
			this.isHid = false
			if(this.iptLen.length <= 0){
				this.$emit('update', this.isTagSearch = false);
			}
		},
  },
});
</script>
