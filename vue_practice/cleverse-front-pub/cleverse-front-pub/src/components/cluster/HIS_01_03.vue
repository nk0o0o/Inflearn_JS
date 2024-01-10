<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
				<p class="arrow">Intitiative</p>
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
				<div class="dropdown-type2 tooltip assign">
					<dropdown-menu2
						:propItem="dropItem2"
						:propClass="'dropdown-type2-list'"
					>
					</dropdown-menu2>
				</div>
				<span class="assign-dates">2020.01.01~2021.12.31</span>

			</div>
		</div>

		<div class="history">
			<div class="skeleton-content_list">
				<div class="skeleton-content_head">
					<div class="assign-head_wrap">
						<div
							class="flag-filter assign assign-head"
							:class="[{ 'default': stateDefault, 'no-permission': noPermission }, state]"
						>
							<filter-flag-assign2></filter-flag-assign2>
						</div>
					</div>
				</div>

				<div class="skeleton-content_list_wrap">
					<table class="board-history assign">
					<colgroup>
					<col style="width:705px;">
					<col style="width:240px;">
					<col>
					</colgroup>
					<thead>
					<tr>
						<th scope="col" class="txt_c">추진과제</th>
						<th scope="col">진행기간</th>
						<th scope="col">담당 부서</th>
					</tr>
					</thead>
					<tbody>
					<template v-for="(item, index) in assigns" :key="index">
            <tr class="blank-for-design">
              <th scope="row"></th>
              <td></td>
            </tr>
            <tr>
              <td class="tit"><em>{{item.assign}}</em></td>
              <td class="dates">{{item.dates}}</td>
              <td class="depart"><span>{{item.depart}}</span></td>
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
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue";
import filterFlagAssign2 from "@/components/filterFlagAssign2.vue";


//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
		components: {
			Paging,
			dropdownMenu3,
			dropdownMenu2,
			filterFlagAssign2,
		},
		data() {
			return {
				noPermission: false,
				stateDefault: true,
				state: 'state02',
				page: 2,
				selectSlotText: '세일즈 플랫폼 구축',
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
				dropItem2: {
					title: `
						<dl class="tooltipmsg-assign">
							<dt>경영혁신부문 : </dt>
							<dd> 글로벌 성장성 제고를 위한 해외 신사업 및 디지털 경쟁력 강화</dd>
						</dl>
					`,
				},
				assigns: [
					{
						assign: '제휴혜택 가망 제휴사 롱리스트/숏리스트 확보 제휴혜택 가망 제휴사 롱리스트/숏리스트 확보 제휴혜택 가망 제휴사 롱리스트/숏리스트 확보',
						dates: '2022.01.03 ~ 2022.12.31',
						depart: '디지털솔루션',
					},
					{
						assign: '라이프솔루션 가망 제휴사 롱리스트/숏리스트 확보',
						dates: '2022.01.03 ~ 2022.12.31',
						depart: '보험기획',
					},
					{
						assign: '세일즈 플래폼 POC 오픈 및 홍보 (FP 교육 등)',
						dates: '2022.01.03 ~ 2022.12.31',
						depart: '브랜드 운영',
					},
					{
						assign: '메시지 자동발송 요건 정의',
						dates: '2022.01.03 ~ 2022.12.31',
						depart: 'IT 운영',
					},
					{
						assign: '섀도잉 인터뷰 수행 및 결과 분석',
						dates: '2022.01.03 ~ 2022.12.31',
						depart: '디지털솔루션',
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