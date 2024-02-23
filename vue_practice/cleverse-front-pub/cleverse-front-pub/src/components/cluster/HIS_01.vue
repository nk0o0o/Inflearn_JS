<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
				<p class="arrow">전략 부문·중점 Task</p>
				<div class="dropdown-collab-type1 disabled" id="select-box2">
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
			</div>
		</div>

		<div class="history">
			<div class="skeleton-content_list">
				<div class="skeleton-content_head">
					<strong class="content-num">중점 Task <span>25</span></strong>
					<div class="history-select_wrap">
						<div>
							<select-view
								:propOptionList="optionLsit"
								:propPlaceholder="'2021년 1분기'"
								:propClass="'type1'"
								>
							</select-view>
						</div>
						<div>
							<div class="dropdown-collab-type6">
								<filter-task />
							</div>
						</div>
					</div>
				</div>

				<div class="skeleton-content_list_wrap">
					<table class="board-history">
					<colgroup>
					<col style="width:460px;">
					</colgroup>
					<thead>
					<tr>
						<th scope="col">중점 Task</th>
						<th scope="col">07/01</th>
						<th scope="col">07/08</th>
						<th scope="col">07/15</th>
						<th scope="col">07/22</th>
						<th scope="col">07/29</th>
						<th scope="col">08/05</th>
						<th scope="col">08/12</th>
						<th scope="col">08/19</th>
						<th scope="col">08/26</th>
						<th scope="col">09/02</th>
						<th scope="col">09/09</th>
						<th scope="col">09/16</th>
						<th scope="col">09/23</th>
						<th scope="col">09/30</th>
					</tr>
					</thead>
					<tbody>
					<template v-for="(item, index) in tasks" :key="index">
            <tr class="blank-for-design">
              <th scope="row"></th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">
                <span class="ell-singleline">{{item.title}}</span>
                <div class="dropdown-type2 tooltip board">
                  <dropdown-menu2
                    :propName="'김한화'"
                    :propItem="item.dropItem"
                    :propClass="'dropdown-type2-list type2 board'"
                  >
                  </dropdown-menu2>
                </div>
              </th>
              <td v-for="(item, index) in item.status" :key="index" v-html="item"></td>
            </tr>
          </template>
					</tbody>
					</table>
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
import selectView from "@/components/selectView.vue";
import filterTask from '@/components/filterTask.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue";

//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
		components: {
			selectView,
			Paging,
			filterTask,
			dropdownMenu3,
			dropdownMenu2,
		},
		data() {
			return {
				page: 2,
				selectSlotText: 'History',
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
					{ value: '2021년 1분기', label: '2021년 1분기' },
					{ value: '2021년 2분기', label: '2021년 2분기' },
					{ value: '2021년 3분기', label: '2021년 3분기' },
					{ value: '2021년 4분기', label: '2021년 4분기' },
					{ value: '2022년 1분기', label: '2022년 1분기' },
				],
				tasks: [
					{
						title: 'Task Group Title',
						dropItem: {
							title: `
								<dl class="msg lock">
									<dt>소속 노드명이 20자까지 보여집니다</dt>
									<dd>
										<span class="name">김한화 외 1명</span>
										<span>2021.09.08 -  2021.12.31</span>
									</dd>
								</dl>
							`,
						},
						status: [
							'<span class="set c01">미설정</span>',
							'<span class="set c02">좋음</span>',
							'<span class="set c03">보통</span>',
							'<span class="set c04">미흡</span>',
							'<span class="set c01">미설정</span>',
							'<span class="set c02">좋음</span>',
							'<span class="set c03">보통</span>',
							'<span class="set c04">미흡</span>',
							'',
							'',
							'',
							'',
							'',
							'<span class="set c04">미흡</span>',
						],
					},
					{
						title: '이름순 정렬 노출 가능한 최대 범주까지 노출이 가능합니다 이름순 정렬 노출 가능한 최대 범주까지 노출이 가능합니다',
						dropItem: {
							title: `
								<dl class="msg lock">
									<dt>소속 노드명이 20자까지 보여집니다</dt>
									<dd>
										<span class="name">김한화 외 2명</span>
										<span>2021.09.08 -  2021.12.31</span>
									</dd>
								</dl>
							`,
						},
						status: [
							'<span class="set c01">미설정</span>',
							'<span class="set c02">좋음</span>',
							'<span class="set c03">보통</span>',
							'<span class="set c04">미흡</span>',
							'',
							'',
							'',
							'',
							'',
							'',
							'<span class="set c01">미설정</span>',
							'<span class="set c02">좋음</span>',
							'<span class="set c03">보통</span>',
							'<span class="set c04">미흡</span>',
						],
					},
					{
						title: '신규 보험 분석 및 설계',
						dropItem: {
							title: `
								<dl class="msg lock">
									<dt>소속 노드명이 20자까지 보여집니다</dt>
									<dd>
										<span class="name">김한화 외 3명</span>
										<span>2021.09.08 -  2021.12.31</span>
									</dd>
								</dl>
							`,
						},
						status: [
							'<span class="set c01">미설정</span>',
							'<span class="set c02">좋음</span>',
							'<span class="set c03">보통</span>',
							'<span class="set c04">미흡</span>',
							'',
							'',
							'',
							'<span class="set c01">미설정</span>',
							'',
							'',
							'',
							'<span class="set c02">좋음</span>',
							'',
							'',
						],
					},
					{
						title: '시스템 설계를 위한 노드 대시보드 화면 분석',
						dropItem: {
							title: `
								<dl class="msg lock">
									<dt>소속 노드명이 20자까지 보여집니다</dt>
									<dd>
										<span class="name">김한화 외 4명</span>
										<span>2021.09.08 -  2021.12.31</span>
									</dd>
								</dl>
							`,
						},
						status: [
							'',
							'<span class="set c02">좋음</span>',
							'<span class="set c03">보통</span>',
							'<span class="set c04">미흡</span>',
							'',
							'',
							'',
							'',
							'',
							'',
							'',
							'<span class="set c02">좋음</span>',
							'',
							'',
						],
					},
					{
						title: '신사업 프로젝트',
						dropItem: {
							title: `
								<dl class="msg lock">
									<dt>소속 노드명이 20자까지 보여집니다</dt>
									<dd>
										<span class="name">김한화 외 5명</span>
										<span>2021.09.08 -  2021.12.31</span>
									</dd>
								</dl>
							`,
						},
						status: [
							'',
							'',
							'',
							'',
							'',
							'<span class="set c02">좋음</span>',
							'<span class="set c03">보통</span>',
							'<span class="set c04">미흡</span>',
							'',
							'',
							'',
							'',
							'',
							'',
						],
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