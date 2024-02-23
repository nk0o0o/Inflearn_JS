<template>
	<v-menu
		:anchor="proplocation"
		:location="proplocation"
	>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span>Filter (4)</span>
			</button>
		</template>
		<div class="dropdown-collab-list-type11">
			<ul class="dropdown_inner">
				<li class="active"><button type="button">전체</button></li>
				<li><button type="button">시스템 개발</button></li>
				<li><button type="button">마음건강 서비스</button></li>
				<li><button type="button">최대10자까지 노출됩니다</button></li>
				<li><button type="button">Side Task</button></li>
			</ul>
		</div>
	</v-menu>
</template>

<script>
export default {
	props: {
		proplocation: {
			type: String,
			default: 'bottom end'
		}
	},
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