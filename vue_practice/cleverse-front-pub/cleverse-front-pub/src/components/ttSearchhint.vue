<template>
	<div class="ttsearch_list">
		<ul>
			<li v-for="(item, index) in searchs" :key="index">
				<button type="button" class="txt_search">{{item.title}}</button>
				<button type="button" class="bn_del">삭제</button>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';   

export default defineComponent({
	data() {
		return { 
			searchs: [
				{ title: '업무공유시스템 화면 설계'},
				{ title: '과거에 검색한 검색 결과가 노출됩니다.'},
				{ title: '최근 검색한 순서대로 최대 10개 제공'},
				{ title: '정렬은 최신순 입니다'},
				{ title: '10개에서 1개 삭제시 9개만 보여집니다'},
				{ title: '개인별 최근 검색어'},
				{ title: '인풋 한글 기준 45자 제한 인풋 한글 기준 45자 제한 인풋 한글 기준 45자제인풋 한글 기준 45자 제한 인풋 한글 기준 45자 제한 인풋 한글 기준 45자제'},
			]
		};
	},
	methods: {

	}
});
</script>