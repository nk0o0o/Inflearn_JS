<template>
	<v-menu :close-on-content-click="false">
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span>Filter (0)</span>
			</button>
		</template>
		<div class="dropdown-collab-list-type13">
			<div class="bn-tag_init_wrap"><button type="button" class="bn-tag_init">선택 초기화</button></div>
			<div class="dropdown-list_inner">
				<em>태그선택</em>
				<ul>
					<li><input type="checkbox" value="1" name="filter1" v-model="filterCheck" id="filter1" checked="checked"><label for="filter1">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="2" name="filter2" v-model="filterCheck" id="filter2"><label for="filter2">제조방산프로젝트팀</label></li>
					<li><input type="checkbox" value="3" name="filter3" v-model="filterCheck" id="filter3"><label for="filter3">팀명 최대 18자까지 표시 후 말줄임 팀명 최대 18자까지 표시 후</label></li>
					<li><input type="checkbox" value="4" name="filter4" v-model="filterCheck" id="filter4" checked="checked"><label for="filter4">방산팀</label></li>
					<li><input type="checkbox" value="5" name="filter5" v-model="filterCheck" id="filter5"><label for="filter5">시스템프로잭트팀</label></li>
					<li><input type="checkbox" value="6" name="filter6" v-model="filterCheck" id="filter6"><label for="filter6">서비스혁신팀</label></li>
					<li><input type="checkbox" value="7" name="filter7" v-model="filterCheck" id="filter7"><label for="filter7">금융팀</label></li>
					<li><input type="checkbox" value="8" name="filter8" v-model="filterCheck" id="filter8"><label for="filter8">제조방산팀</label></li>
					<li><input type="checkbox" value="9" name="filter9" v-model="filterCheck" id="filter9"><label for="filter9">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="10" name="filter10" v-model="filterCheck" id="filter10"><label for="filter10">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="11" name="filter11" v-model="filterCheck" id="filter11"><label for="filter11">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="12" name="filter12" v-model="filterCheck" id="filter12"><label for="filter12">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="13" name="filter13" v-model="filterCheck" id="filter13"><label for="filter13">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="14" name="filter14" v-model="filterCheck" id="filter14"><label for="filter14">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="15" name="filter15" v-model="filterCheck" id="filter15"><label for="filter15">팀명이 노출됩니다</label></li>
					<li><input type="checkbox" value="16" name="filter16" v-model="filterCheck" id="filter16"><label for="filter16">팀명이 노출됩니다</label></li>
				</ul>
			</div>
			<p class="txt_notice">※ 태그 추가는 어드민에서 가능합니다.</p>
			<div class="btn_wrap">
				<button type="button" class="btn lg line-type2">취소</button>
				<button type="button" class="btn lg" :disabled="filterCheck.length  == 0">필터 적용</button>
			</div>
		</div>
	</v-menu>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			filterCheck: [],
		};
	},
	watch: {
		filterCheck(){
			console.log(this.filterCheck.length);
		}
	},
}
</script>