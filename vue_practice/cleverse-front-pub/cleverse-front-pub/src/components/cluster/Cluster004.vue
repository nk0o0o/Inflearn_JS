<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
				<p class="arrow">신사업부문</p>
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

		<div class="weekly-report">
			<div class="skeleton-content_list">
				<div class="skeleton-content_head">
					<strong class="content-num">Weekly Report <span>123</span></strong>
					<div>
						<div class="board-common_search">
							<div>
								<select-view 
									:propOptionList="optionLsit"
									:propPlaceholder="'2021년'"
									:propClass="'type1'"
									>
								</select-view>
							</div>
							<div>
								<form action="">
									<div class="input-box search-type4">
										<input type="text" required placeholder="제목 검색">
										<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										<button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
										<div class="list">
											<ul>
												<li>내 과제/내가 속한 과제 리스트 전체 노출</li>
												<li>Digital C.P.C. 기반 구축 </li>
												<li>Digital Infra 구축</li>
												<li>Digital Infra 구축</li>
											</ul>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				
				<div class="skeleton-content_list_wrap">
					<div class="list-box_wr" v-for="(item, index) in reports" :key="index">
							<div class="box_l">
								<h2 class="tit">{{item.title}}</h2>
								<span class="date">{{item.date}}</span>
							</div>
							<div>
								<div class="cont">
									<span class="img"><img :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name"></span>
									<div class="dropdown-collab-type3">
										<personnel-weekdropdown></personnel-weekdropdown>
									</div>
								</div>
							</div>
					</div>
				</div>
				<Paging
					v-model="page" 
					:records="500" 
					:per-page="25" 
					:options="{hideCount: true}" 
					@paginate="myCallback"
				/>
			</div>
		</div>

	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import selectView from "@/components/selectView.vue"
import personnelWeekdropdown from '@/components/personnelWeekdropdown.vue';
import dropdownMenu3 from "@/components/dropdownMenu3.vue";
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
		components: {
			selectView,
			personnelWeekdropdown,
			dropdownMenu3,
			Paging,
		},
		data() {
			return {
				page: 2,
				selectSlotText: '클러스터명',
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
				optionLsit: [
					{ value: '2021년', label: '2021년' },
					{ value: '2022년', label: '2022년' },
					{ value: '2023년', label: '2023년' },
					{ value: '2024년', label: '2024년' },
					{ value: '2025년', label: '2025년' },
				],
				reports: [
					{
						title: '7월 4주차 주간보고 7월 4주차 주간보고7월 4주차 주간보고 7월 4주차 주간보고', 
						date: '2021.07.11 - 2021.07.17', 
						name: '김이름', 
						src: 'img_dummy1.png' 
					},
					{
						title: '7월 4주차 주간보고2', 
						date: '2021.07.11 - 2021.07.17', 
						name: '김이름', 
						src: 'img_dummy1.png' 
					},
					{
						title: '7월 4주차 주간보고3', 
						date: '2021.07.11 - 2021.07.17', 
						name: '김이름', 
						src: 'img_dummy1.png' 
					},
					{
						title: '7월 4주차 주간보고4', 
						date: '2021.07.11 - 2021.07.17', 
						name: '김이름', 
						src: 'img_dummy1.png' 
					},
					{
						title: '7월 4주차 주간보고5', 
						date: '2021.07.11 - 2021.07.17', 
						name: '김이름', 
						src: 'img_dummy1.png' 
					},
				]
			
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