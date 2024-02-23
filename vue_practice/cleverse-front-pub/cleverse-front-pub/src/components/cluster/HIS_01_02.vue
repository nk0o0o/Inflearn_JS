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
					<strong class="content-num">추진과제 <span>25</span></strong>
					<div class="history-select_wrap">
						<div>
							<div class="dropdown-collab-type6">
								<filter-assign></filter-assign>
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
						<th scope="col">추진과제</th>
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
										:propItem="item.dropItem"
										:propClass="'dropdown-type2-list'"
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
import filterAssign from '@/components/filterAssign.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue";

//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
		components: {
			Paging,
			filterAssign,
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
				tasks: [
					{
						title: 'Task Group Title',
						dropItem: {
							title: `
								<dl class="tooltipmsg-assign">
                  <dt>태그 : </dt>
                  <dd>중점과제</dd>
                  <dd>주요과제</dd>
                </dl>
							`,
						},
						status: [
							'<span class="set c01">좋음</span>',
							'<span class="set c02">미흡</span>',
							'<span class="set c03">종료</span>',
							'<span class="set c01">좋음</span>',
							'<span class="set c02">미흡</span>',
							'<span class="set c03">종료</span>',
							'',
							'',
							'',
							'',
							'',
							'',
							'',
							'<span class="set">미선택</span>',
						],
					},
					{
						title: '이름순 정렬 노출 가능한 최대 범주까지 노출이 가능합니다 이름순 정렬 노출 가능한 최대 범주까지 노출이 가능합니다',
						dropItem: {
							title: `
								<dl class="tooltipmsg-assign">
                  <dt>태그 : </dt>
                  <dd>중점과제</dd>
                  <dd>주요과제</dd>
                </dl>
							`,
						},
						status: [
							'<span class="set c01">좋음</span>',
							'<span class="set c02">미흡</span>',
							'<span class="set c03">종료</span>',
							'<span class="set">미선택</span>',
							'',
							'',
							'',
							'',
							'',
							'',
							'<span class="set c01">좋음</span>',
							'<span class="set c02">미흡</span>',
							'<span class="set c03">종료</span>',
							'<span class="set c01">좋음</span>',
						],
					},
					{
						title: '신규 보험 분석 및 설계',
						dropItem: {
							title: `
								<dl class="tooltipmsg-assign">
                  <dt>태그 : </dt>
                  <dd>중점과제</dd>
                  <dd>주요과제</dd>
                </dl>
							`,
						},
						status: [
							'<span class="set c01">좋음</span>',
							'<span class="set c02">미흡</span>',
							'<span class="set c03">종료</span>',
							'<span class="set">미선택</span>',
							'',
							'',
							'',
							'<span class="set c03">종료</span>',
							'',
							'',
							'',
							'<span class="set c03">종료</span>',
							'',
							'',
						],
					},
					{
						title: '시스템 설계를 위한 노드 대시보드 화면 분석',
						dropItem: {
							title: `
								<dl class="tooltipmsg-assign">
                  <dt>태그 : </dt>
                  <dd>중점과제</dd>
                  <dd>주요과제</dd>
                </dl>
							`,
						},
						status: [
							'',
							'<span class="set c01">좋음</span>',
							'<span class="set c02">미흡</span>',
							'<span class="set c03">종료</span>',
							'<span class="set">미선택</span>',
							'',
							'',
							'',
							'',
							'',
							'',
							'<span class="set c02">미흡</span>',
							'',
							'',
						],
					},
					{
						title: '신사업 프로젝트',
						dropItem: {
							title: `
								<dl class="tooltipmsg-assign">
                  <dt>태그 : </dt>
                  <dd>중점과제</dd>
                  <dd>주요과제</dd>
                </dl>
							`,
						},
						status: [
							'',
							'',
							'',
							'',
							'',
							'<span class="set c01">좋음</span>',
							'<span class="set c02">미흡</span>',
							'<span class="set c03">종료</span>',
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