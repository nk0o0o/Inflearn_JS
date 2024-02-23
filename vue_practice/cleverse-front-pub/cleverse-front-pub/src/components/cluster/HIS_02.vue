<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
				<p class="arrow">전략 부문·중점 Task</p>
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
					<tr>
						<td class="nodt" colspan="15">
							<div class="nodata">
								<p>중점 Task 정보가 없습니다.</p>
							</div>
						</td>
					</tr>
					</tbody>
					</table>
				</div>
			</div>
		</div>

	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import selectView from "@/components/selectView.vue";
import filterTask from '@/components/filterTask.vue';
import dropdownMenu3 from "@/components/dropdownMenu3.vue";
export default defineComponent({
		components: {
			selectView,
			filterTask,
			dropdownMenu3,
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