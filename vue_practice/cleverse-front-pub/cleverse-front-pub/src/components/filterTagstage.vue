<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span>Filter (4)</span>
			</button>
		</template>
		<div class="dropdown-collab-list-type12">
			<div class="dropdown-list_wrap">
				<div class="filter-head_wrap">
					<p class="info">해당 필터와 일치하는 노드를 확인할 수 있어요!</p>
					<button type="button" class="bn-tag_init">선택 초기화</button>
				</div>
				<div class="dropdown-list_inner">
					<div class="sector" v-for="(item, index) in nodes" :key="index">
						<strong>{{item.title}}</strong>
						<ul>
							<li v-for="(item, index) in item.checks" :key="index">
								<input type="checkbox" :name="`filterCheck${item.value}`" :disabled="item.disabled" :value="item.value" v-model="filterCheck" :id="item.id">
								<label :for="item.id">{{item.title}}</label>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="btn_wrap">
				<button type="button" class="btn lg line-type2">취소</button>
				<button type="button" class="btn lg bk" :disabled="filterCheck.length == 0">필터 적용</button>
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
			nodes: [
				{
					title: '목표',
					checks: [
						{
							value: 1,
							id: 'filter1',
							title: '# 자산관리',
						},
						{
							value: 2,
							id: 'filter2',
							title: '# 고객확대',
						},
						{
							disabled: true,
							value: 3,
							id: 'filter3',
							title: '# PF/자본효율화',
						},
						{
							value: 4,
							id: 'filter4',
							title: '# 인재확보',
						},
					],
				},
				{
					title: '역할',
					checks: [
						{
							value: 5,
							id: 'filter2-1',
							title: '# 그룹 관리',
						},
						{
							value: 6,
							id: 'filter2-2',
							title: '# 미국 사업 개발 구축',
						},
						{
							disabled: true,
							value: 7,
							id: 'filter2-3',
							title: '# Valuation',
						},
					],
				},
			],
		};
	},
	watch: {
		filterCheck(){
			console.log(this.filterCheck.length);
		}
	},
}
</script>