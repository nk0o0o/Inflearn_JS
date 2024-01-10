<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
					<div class="head_location">
						<span><a href="#">한화시스템</a></span>
						<span><a href="#">ICT부문</a></span>
						<em><a href="#">서비스혁신센터</a></em>
					</div>
					<div class="dropdown-collab-type1" id="select-box2">
						<dropdown-menu3
							:propisSlotMode="true"
							:propSelectText="selectSlotText"
							:propId="'select-box2'"
							@selected="selectSlotValue"
							:propType="true"
							:propLocation="'bottom'"
						>
							<template v-slot:body={on}>
								<div class="dropdown-collab-list-type1" :style="`width:${on.width}px`">
									<div
										class="item"
										v-for="(item, index) in dropItem"
										:key="index"
										:value="index"
										:class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
									>
										<button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
											{{ item.title }}
										</button>
									</div>
								</div>
							</template>
						</dropdown-menu3>
					</div>
					<div class="personnel-info">조직담당자명 직위/직책</div>
			</div>
		</div>

		<div class="skeleton-content_list">
			<div class="skeleton-content_head">
				<strong class="content-num">조직 <span>8</span></strong>
				<!-- <button class="btn_wreport">Weekly Report</button> -->
			</div>
			<div class="skeleton-content_list_wrap">
				<div class="list-box_wrap cluster" v-for="(item, index) in clusters" :key="index" :class="{ side: item.side, idea: item.idea, active: item.active }">
					<div class="list-box_header">
						<h2 class="tit ell-singleline">{{ item.title }}</h2>
						<div class="dropdown-collab-type2 t1">
							<personnelmain-dropdown
								propLocation="bottom start"
							/>
						</div>
					</div>
					<cluster-list
						:propClusterList="item.subTitle"
						:propPersonnel="item.subTitle.personnel"
					>
					</cluster-list>
					<ul class="list-box_foot">
						<li v-for="(item, index) in item.counts" :key="index">
							<em>{{item.title}}</em>
							<span>{{item.count}}</span>
						</li>
					</ul>
					<a href="#" class="btn-view_more" :class="{ arrow: item.arrow }"><span>전체보기</span></a>
				</div>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import clusterList from "@/components/cluster/clusterList.vue";
import personnelmainDropdown from "@/components/personnelmainDropdown.vue";
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

export default defineComponent({
		components: {
			clusterList,
			personnelmainDropdown,
			dropdownMenu3,
		},
		data() {
				return {
					currentTab: 0,
					//tabsType1: ['조직', 'Stage'],
					selectSlotText: '제조방산담당',
					dropSelectItem:{
						itemId: 'selected1'
						},
						dropItem: [
						{
							title: '전체 정보 공유',
							class: 'menu1',
							itemId: 'selected1',
						},
						{
							title: '나의 정보 공유',
							class: 'menu2',
							itemId: 'selected2',
						},
					],
					clusters: [
						{
							active: true,
							title: '노드 활성화' ,
							subTitle: [
								{ title: '잉여자본 관리' },
								{ title: '거버넌스 전략' },
								{ title: 'M&A 전략투자' },
								{ title: '계열사 관리 체계 개선' },
							],
							counts: [
								{title: 'People', count: '256'}
							]
						},
						{
							active: true,
							title: '해외' ,
							subTitle: [
								{ title: '구독 솔루션 (생필품)' },
								{ title: '구독 솔루션 (게임) 2' },
								{ title: '구독 솔루션 (게임) 3' },
								{ title: '구독 솔루션 (게임) 4' },
							],
							counts: [
								{title: 'People', count: '256'}
							]
						},
						{
							active: true,
							title: 'SG Company Building' ,
							subTitle: [
								{ title: '구독 솔루션 (게임)구독 솔루션 (게임)구독 솔루션 (게임)111' },
								{ title: '구독 솔루션 (게임) 2' },
								{ title: '구독 솔루션 (게임) 3' },
								{ title: '구독 솔루션 (게임) 4' },
							],
							counts: [
								{title: 'People', count: '256'}
							]
						},
						{
							active: true,
							title: '커버넌스' ,
							subTitle: [
								{ title: '구독 솔루션 (게임)구독 솔루션 (게임)구독 솔루션 (게임)111' },
								{ title: '구독 솔루션 (게임) 2' },
								{ title: '구독 솔루션 (게임) 3' },
								{ title: '구독 솔루션 (게임) 4' },
							],
							counts: [
								{title: 'People', count: '256'}
							]
						},
					],
				};
		},
		methods: {
			selectSlotValue(val:any){
				this.selectSlotText = val
			},
			dropClickItem(item: any){
				this.dropSelectItem.itemId = item.itemId
			},
		},
});
</script>