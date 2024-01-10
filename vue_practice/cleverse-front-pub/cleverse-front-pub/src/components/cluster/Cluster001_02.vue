<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
					<div class="head_location">
						<span><a href="#">한화시스템</a></span>
						<em><a href="#">ICT부문</a></em>
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
			<div class="right">
				<div class="tab-collab-type1">
					<ul class="tab-menu">
						<li v-for="(tab, index) in tabsType1" :class="{ active: currentTab===index }" :key="index">
							<button type="button" @click="currentTab = index">{{tab}}</button>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="tab-content">
			<div v-show="currentTab == 0">
				<div class="skeleton-content_list">
					<strong class="content-num">조직 <span>8</span></strong>
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

			<div v-show="currentTab == 1">
				<div class="task-content import-task">
					<div class="skeleton-content_head">
						<div class="history-bn_wrap">
							<strong class="content-num">과제<span>40</span></strong>
							<button type="button">History</button>
						</div>
						<div class="dropdown-collab-type6">
							<filter-assign></filter-assign>
						</div>
					</div>
					<ul class="group-view_list t1 assign">
						<li v-for="(item, index) in groups" :key="index" :class="{ov: item.open}">
							<div class="group-view_list_inner">
								<div class="group-view_list_head">
									<div class="flag-filter assign" :class="[{ 'default': item.stateDefault, 'no-permission': item.noPermission }, item.state]">
										<filter-flag-assign></filter-flag-assign>
									</div>
									<div class="group-task">
										<!-- <span class="txt-assign">
											Company Build
										</span> -->
										<span class="txt">
											<a href="#" class="ell-singleline">
												<span class="tags">
													<span
														v-for="(item, index) in item.tags"
														:key="index"
														:class="[item.tagClass]"
													>
														{{item.tagName}}
													</span>
													<button type="button" class="bn_tag_more" v-if="item.btnView"><i class="blind">태그 더보기</i></button>
												</span>
												<span class="tit">
													{{item.title}}
												</span>
											</a>
										</span>
										<span class="dates">{{item.dateRange}}</span>
									</div>
								</div>
							</div>
							<button type="button" class="btn_section_view assign">자세히보기</button>
						</li>
					</ul>
				</div>

				<div class="task-content import-task">
					<div class="skeleton-content_head">
						<div class="history-bn_wrap">
							<strong class="content-num">중점 Task<span>0</span></strong>
							<button type="button">History</button>
						</div>
						<div class="dropdown-collab-type6">
							<filter-task />
						</div>
					</div>

					<div class="nodata">
						<p>중점 Task 정보가 없습니다.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import clusterList from "@/components/cluster/clusterList.vue";
import filterFlagAssign from "@/components/filterFlagAssign.vue";
import filterAssign from '@/components/filterAssign.vue';
import personnelmainDropdown from "@/components/personnelmainDropdown.vue";
import dropdownMenu3 from "@/components/dropdownMenu3.vue"



export default defineComponent({
		components: {
			clusterList,
			filterFlagAssign,
			filterAssign,
			personnelmainDropdown,
			dropdownMenu3,
		},
		data() {
				return {
					rangeDate: [new Date(),new Date()],
					currentTab: 1,
					tabsType1: ['조직', '과제'],
					selectSlotText: '서비스혁신센터',
					dropSelectItem:{
						itemId: 'selected5'
						},
						dropItem: [
						{
							title: '사업운영담당',
							itemId: 'selected1',
						},
						{
							title: '금융사업본부',
							itemId: 'selected2',
						},
							{
							title: '제조방산사업본부',
							itemId: 'selected3',
						},
							{
							title: '유화서비스사업본부',
							itemId: 'selected4',
						},
							{
							title: '서비스혁신센터',
							itemId: 'selected5',
						},
					],
					dropItem2: {
						title: `
							공개 : 임직원 전체에게 공개됩니다<br>
							비공개 : taskgroup멤버에게만 공개됩니다
						`,
					},
					//imgSector: 'cluster-sector-building.svg',
					clusters: [
						{
							title: '제조방산담당',
							subTitle: [
								{ title: '구독 솔루션 (게임) 1', prog: 1 },
								{ title: '구독 솔루션 (게임) 2', prog: 2 },
								{ title: '구독 솔루션 (게임) 3', prog: 3 },
								{ title: '구독 솔루션 (게임) 4', prog: 2 },
							],
							counts: [
								{title: '조직', count: '2'},
								{title: 'People', count: '256'}
							]
						},
						{
							title: '유화서비스담당' ,
							subTitle: [
								{ title: '구독 솔루션 (게임)구독 솔루션 (게임)구독 솔루션 (게임)111'},
								{ title: '구독 솔루션 (게임) 2'},
								{ title: '구독 솔루션 (게임) 3'},
								{ title: '구독 솔루션 (게임) 4'},
								{ title: '구독 솔루션 (게임) 5'},
								{ title: '구독 솔루션 (게임) 6'},
							],
							counts: [
								{title: 'People', count: '256'}
							]
						},
						{
							title: '금융담당' ,
							subTitle: [
								{ title: '구독 솔루션 (게임)구독 솔루션 (게임)구독 솔루션 (게임)111', prog: 2 },
								{ title: '구독 솔루션 (게임) 2', prog: 1 },
								{ title: '구독 솔루션 (게임) 3', prog: 1 },
								{ title: '구독 솔루션 (게임) 4', prog: 1 },
							],
							counts: [
								{title: '조직', count: '2'},
								{title: 'People', count: '256'}
							]
						},
						{
							title: '서비스혁신팀' ,
							//arrow: true,
							active: true,
							subTitle: [
								{ title: '구독 솔루션 (게임)구독 솔루션 (게임)구독 솔루션 (게임)111', prog: 2 },
								{ title: '구독 솔루션 (게임) 2', prog: 1 },
								{ title: '구독 솔루션 (게임) 3', prog: 1 },
								{ title: '구독 솔루션 (게임) 4', prog: 1 },
							],
							counts: [
								{title: 'People', count: '256'}
							]
						},
						{
							title: 'Digital Native TF' ,
							//side: true,
							active: true,
							subTitle: [
								{ title: '구독 솔루션 (게임)구독 솔루션 (게임)구독 솔루션 (게임)111' },
								{ title: '구독 솔루션 (게임) 2' },
								{ title: '구독 솔루션 (게임) 3' },
								{ title: '구독 솔루션 (게임) 4' },
							],
							counts: [
								//{title: '조직', count: '2'},
								{title: 'People', count: '256'}
							]
						},
					],
					groups: [
						{
							isActive: false,
							stateDefault: false,
							noPermission: false,
							state: 'state01',
							title: '업무공유 시스템 사업 추진111',
							dateRange: '2020.01.01 - 2021.12.31',
							tags: [
								{ tagClass: 'c01', tagName: '5' } ,
								{ tagClass: 'c02', tagName: '중점과제' },
								{ tagClass: 'c03', tagName: '주요 과제' },
								],
						},
						{
							isActive: false,
							stateDefault: false,
							noPermission: false,
							state: 'state02',
							title: '업무공유 시스템 사업 추진2',
							dateRange: '2020.01.01 - 2021.10.31',
							btnView: true,
							tags: [
								{ tagClass: 'c06', tagName: '5' } ,
								{ tagClass: 'c05', tagName: '중점과제중점과제중점과제중점과제중점과제중점과제중점과제중점과제중점과제중점과제' },
								{ tagClass: 'c04', tagName: '주요 과제주요 과제주요 과제주요 과제주요 과제주요 과제주요 과제주요 과제주요 과제주요 과제주요 과제' },
								{ tagClass: 'c03', tagName: '일상과제일상과제일상과제일상과제일상과제일상과제일상과제일상과제' },
								{ tagClass: 'c02', tagName: '제휴영업부문 과제제휴영업부문 과제제휴영업부문 과제제휴영업부문 과제제휴영업부문 과제제휴영업부문 과제제휴영업부문 과제' },
							],
						},
						{
							isActive: false,
							stateDefault: false,
							noPermission: false,
							state: 'state03',
							title: '업무공유 시스템 사업 추진3',
							dateRange: '2020.01.01 - 2021.10.31',
							tags: [
								{ tagClass: 'c01', tagName: '5' } ,
								{ tagClass: 'c02', tagName: '중점과제' },
								{ tagClass: 'c03', tagName: '주요 과제' },
								{ tagClass: 'c04', tagName: '일상과제' },
							],
						},
						{
							isActive: false,
							stateDefault: true,
							noPermission: false,
							state: '',
							title: '업무공유 시스템 사업 추진4',
							dateRange: '2020.01.01 - 2021.10.31',
							tags: [
								{ tagClass: 'c01', tagName: '5' } ,
								{ tagClass: 'c02', tagName: '중점과제' },
								{ tagClass: 'c03', tagName: '주요 과제' },
								{ tagClass: 'c04', tagName: '일상과제' },
								{ tagClass: 'c05', tagName: '제휴영업부문 과제 제휴영업부문 과제' },
							],
						},
						{
							isActive: false,
							stateDefault: true,
							noPermission: true,
							state: '',
							title: '업무공유 시스템 사업 추진5',
							dateRange: '2020.01.01 - 2021.10.31',
							tags: [
								{ tagClass: 'c01', tagName: '5' } ,
								{ tagClass: 'c02', tagName: '중점과제' },
								{ tagClass: 'c03', tagName: '주요 과제' },
								{ tagClass: 'c04', tagName: '일상과제' },
								{ tagClass: 'c05', tagName: '제휴영업부문 과제 제휴영업부문 과제' },
							],
						},
					],
					dropItem3: {
          title: `
            <div class="tooltip-member">
              <div>
                <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
                <p><b>김한화</b> <span class="pos">직위/직책</span></p>
              </div>
              <p class="cp">회사명 <span></span> 소속조직명</p>
              <p class="phone">010-1234-2336</p>
              <p class="email">mail@hanwha.com</p>
            </div>
          `,
        },
				};
		},
		methods: {
			selectSlotValue(val:any){
				this.selectSlotText = val
			},
			dropClickItem(item: any){
				this.dropSelectItem.itemId = item.itemId
			},
			rangeFormat2(date:any) {
				const dayStart = ('0' + date[0].getDate()).slice(-2);
				const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
				const yearStart = date[0].getFullYear();

				const dayEnd = ('0' + date[1].getDate()).slice(-2);
				const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
				const yearEnd = date[1].getFullYear();

				return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
			},
		},
});
</script>