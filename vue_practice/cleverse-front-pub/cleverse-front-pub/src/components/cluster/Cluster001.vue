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
					<!-- <div class="dropdown-collab-type1">
            <v-menu>
							<template v-slot:activator="{ props }">
								<button type="button"
									color="primary"
									v-bind="props"
								>
									<span class="set">
										<img class="img-sector" :src="require('@/assets/imgs/collaboration/svg/cluster-sector-building.svg')" alt="아이콘">
										<span class="sector-name">신사업 부문</span>
									</span>
								</button>
							</template>
							<div class="dropdown-collab-list-type1">
								<div class="item"
									v-for="(item, index) in dropItem"
									:key="index"
									:value="index"
									:class="{ active: item.isActive }"
								>
									<button type="button">
										{{ item.title }}
									</button>
									<span v-if="item.me" class="me">ME</span>
								</div>
							</div>
						</v-menu>
          </div> -->
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
							<strong class="content-num">중점 Task<span>87</span></strong>
							<button type="button">History</button>
						</div>
						<div class="dropdown-collab-type6">
							<filter-task />
						</div>
					</div>
					<ul class="group-view_list t1">
						<li v-for="(item, index) in groups" :key="index" :class="{ov: item.open}">
							<div class="group-view_list_inner">
								<div class="group-view_list_head">
									<div class="flag-filter" :class="[{ 'default': item.stateDefault }, item.state]">
										<filter-flag></filter-flag>
									</div>
									<div class="group-task">
										<span class="member" v-if="item.src">
											<span class="img"><img :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name"></span>
											<div class="dropdown-collab-type3">
												<personnel-numdropdown></personnel-numdropdown>
											</div>
										</span>
										<span class="txt">
											<a href="#" class="ell-singleline">
												<span class="tit">
													{{item.title}}
													<span class="num">{{item.count}}</span>
												</span>
												<ul class="list">
													<li v-for="(item, index) in item.relateds" :key="index">{{item}}</li>
												</ul>
											</a>
										</span>
										<span class="dates">{{item.dateRange}}</span>
									</div>
								</div>
								<ul class="task-view_list">
									<li v-for="(item, index) in item.checks" :key="index" :class="{ ov: item.isChecked }">
										<span class="check"><input type="checkbox" name="" :id="item.id" @click="item.isChecked = !item.isChecked"><label :for="item.id">{{item.id}}</label></span>
										<span class="txt">
											<span class="important" v-if="item.important">중요</span>
											<span><a href="#" class="ell-singleline" :class="{ lock: item.lock }">{{item.text}}</a></span>
										</span>
										<span  class="comment" v-if="item.count">
											<span v-if="item.count > 99">99+</span>
											<span v-else>{{item.count}}</span>
										</span>
										<span class="update" v-if="item.update">
											<span :class="{ warn: item.warn }"><em>{{item.update}}</em></span>
										</span>
										<span class="name" v-if="item.name">
											<span>
												<span class="dropdown-type2 tooltip text">
													<dropdown-menu2
														:propName="item.name"
														:propItem="dropItem3"
														:propClass="'dropdown-type2-list type2'"
													>
													</dropdown-menu2>
												</span>
											</span>
										</span>
									</li>
								</ul>
								<div class="task-add_input" :class="{ ov: item.isActive }">
									<div class="input">
										<form action="">
											<div class="input-box">
												<input type="text" required placeholder="Task를 입력해주세요">
												<button type="reset" class="input-txt-del">입력 삭제</button>
											</div>
										</form>
									</div>
									<div class="dropdown-collab-type5 pub" v-if="item.openSelect">
										<v-menu>
											<template v-slot:activator="{ props }">
												<button
													v-bind="props"
												>
													<span><i>공개</i></span>
												</button>
											</template>
											<ul class="dropdown-collab-list-type5">
												<li class="active"><button type="button">공개</button></li>
												<li><button type="button">비공개</button></li>
											</ul>
										</v-menu>
									</div>
									<div class="dropdown-collab-type5 pub" v-if="!item.openSelect">
										<v-menu>
											<template v-slot:activator="{ props }">
												<button disabled
													v-bind="props"
												>
													<span><i>비공개</i></span>
												</button>
											</template>
										</v-menu>
									</div>
									<div class="dropdown-type2 tooltip sm">
										<dropdown-menu2
											:propItem="dropItem2"
											:propClass="'dropdown-type2-list'"
											:propLocation="'start bottom'"
										>
										</dropdown-menu2>
									</div>
									<div class="dropdown-collab-type5 pub" v-if="item.editer">
										<v-menu>
											<template v-slot:activator="{ props }">
												<button
													v-bind="props"
												>
													<span><i>생성자만 편집</i></span>
												</button>
											</template>
											<ul class="dropdown-collab-list-type5 between">
												<li class="active"><button type="button">생성자만 편집</button></li>
												<li><button type="button">태스크멤버 편집</button></li>
											</ul>
										</v-menu>
									</div>
									<div class="dates">
										<div class="date line-type f-18">
											<Datepicker
												placeholder="시작일 선택 - 종료일 선택"
												v-model="rangeDate"
												:format="rangeFormat2"
												range
												locale="ko"
												cancelText="취소"
												selectText="저장"
												:enableTimePicker="false"/>
										</div>
									</div>
									<div class="bn">
										<button type="button" class="btn_cancel" @click="item.isActive = !item.isActive">취소</button>
										<button type="button" class="btn_regist">저장</button>
									</div>
								</div>
								<div class="task-add_btn" :class="{ hide: item.isActive }">
									<button type="button" class="btn_addtask" @click="item.isActive = !item.isActive">Add Subtask</button>
								</div>
							</div>
							<button type="button" class="btn_section_view" @click="item.open = !item.open">열기/닫기</button>
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
		<sticky-alarm></sticky-alarm>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Datepicker from '@vuepic/vue-datepicker'
import clusterList from "@/components/cluster/clusterList.vue";
import filterFlag from "@/components/filterFlag.vue";
import personnelNumdropdown from '@/components/personnelNumdropdown.vue';
import filterTask from '@/components/filterTask.vue';
import stickyAlarm from '@/components/stickyAlarm.vue';
import personnelmainDropdown from "@/components/personnelmainDropdown.vue";
import dropdownMenu3 from "@/components/dropdownMenu3.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue";



export default defineComponent({
		components: {
			clusterList,
			filterFlag,
			personnelNumdropdown,
			Datepicker,
			filterTask,
			stickyAlarm,
			personnelmainDropdown,
			dropdownMenu3,
			dropdownMenu2,
		},
		data() {
				return {
					rangeDate: [new Date(),new Date()],
					currentTab: 1,
					tabsType1: ['조직', '중점 Task'],
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
						// {
						// 	title: 'Idea Farm' ,
						// 	idea: true,
						// 	subTitle: [
						// 		{
						// 			src: 'profile-default-img-34.svg',
						// 			title: '구독 솔루션 (게임)구독 솔루션 (게임)구독 솔루션 (게임)111',
						// 			name: '김한화'
						// 		},
						// 		{
						// 			src: 'profile-default-img-34.svg',
						// 			title: '구독 솔루션 (게임) 2',
						// 			name: '김한화'
						// 		},
						// 		{
						// 			src: 'profile-default-img-34.svg',
						// 			title: '구독 솔루션 (게임) 3',
						// 			name: '김한화'
						// 		},
						// 		{
						// 			src: 'profile-default-img-34.svg',
						// 			title: '구독 솔루션 (게임) 4',
						// 			name: '김한화'
						// 		},
						// 	],
						// 	counts: [
						// 		{title: '조직', count: '2'},
						// 	]
						// },
					],
					groups: [
						{
							open: true,
							isActive: false,
							stateDefault: false,
							state: 'state01',
							src: 'img_dummy1.png',
							name: '김한화',
							title: '업무공유 시스템 사업 추진',
							count: 8,
							relateds: ['ICT부문', '서비스혁신센터', '제조방산담당', '제조방산프로젝트팀', '방산'],
							dateRange: '2020.01.01 - 2021.12.31',
							checks: [
								{
									id: 'task1',
									important: true,
									lock: true,
									text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
									count: 120,
									warn: true,
									update: '어제',
									name: '김이름',
									isChecked: false,
								},
								{
									id: 'task2',
									text: 'A사 비즈니스 모델 분석',
									count: 81,
									update: '어제',
									name: '김이름',
									isChecked: false,
								},
								{
									id: 'task3',
									text: 'A사 비즈니스 모델 분석',
									update: '4.15',
									name: '김이름',
									isChecked: false,
								},
							],
							openSelect: false,
							editer: false,
						},
						{
							open: false,
							isActive: false,
							stateDefault: true,
							state: 'state02',
							src: 'img_dummy1.png',
							name: '이한화',
							title: '업무공유 시스템 사업 추진2',
							count: 18,
							relateds: ['ICT부문', '서비스혁신센터', '제조방산담당'],
							dateRange: '2020.01.01 - 2021.10.31',
							checks: [
								{
									id: 'task2-1',
									important: true,
									lock: true,
									text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
									count: 120,
									warn: true,
									update: '어제',
									name: '김이름',
									isChecked: false,
								},
							],
							openSelect: true,
							editer: true,
						},
						{
							open: false,
							isActive: false,
							stateDefault: false,
							state: 'state03',
							src: 'img_dummy1.png',
							name: '박한화',
							title: '업무공유 시스템 사업 추진3',
							count: 23,
							relateds: ['ICT부문', '서비스혁신센터'],
							dateRange: '2020.01.01 - 2021.10.31',
							checks: [],
							openSelect: true,
							editer: false,
						},
						{
							open: false,
							isActive: false,
							stateDefault: false,
							state: 'state04',
							src: 'img_dummy1.png',
							name: '최한화',
							title: '업무공유 시스템 사업 추진4',
							count: 11,
							relateds: ['ICT부문', '서비스혁신센터'],
							dateRange: '2020.01.01 - 2021.10.31',
							checks: [],
							openSelect: false,
							editer: false,
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