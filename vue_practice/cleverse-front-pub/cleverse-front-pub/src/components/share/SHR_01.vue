<template>
	<div>
		<div class="header-content_wrap share">
			<div class="dropdown-collab-type1" id="select-box">
				<dropdown-menu3
					:propisSlotMode="true"
					:propSelectText="selectSlotText"
					:propId="'select-box'"
					@selected="selectSlotValue"
					:propType="true"
				>
					<template v-slot:body={on}>
						<div class="dropdown-collab-list-type1" :style="`width:${on.width}px`">
							<div
								class="item"
								v-for="(item, index) in dropItem"
								:key="index"
								:value="index"
								:class="{ active: item.isActive }"
							>
								<button type="button" v-on="on" :class="`${item.class}`" @click="test(item)">
									{{ item.title }}
								</button>
							</div>
						</div>
					</template>
				</dropdown-menu3>
			</div>
			<div>
				<button type="button" class="btn md bk plus">새 정보 공유하기</button>
			</div>
		</div>

		<div class="task-content share">
			<div class="tab-type6" id="tabsType" :class="{'active':tabActive}">
				<ul class="tab-menu" id="heightCheck">
					<li v-for="(tab, index) in tabsType" v-bind:class="{active:currentTab===index}" :key="index">
						<button type="button" @click="currentTab = index">{{tab}}</button>
					</li>
				</ul>
				<button type="button" class="tab-toggle" @click="tabToggle()">탭토글</button>
			</div>

			<div v-show="currentTab == 0">
				<div class="skeleton-content_list">
					<div class="skeleton-content_head">
						<strong class="content-num">임시 저장 중인 정보 <span>4</span></strong>
						<div class="flex">
							<div>
								<form action="">
									<div class="input-box search-type-1">
										<input type="text" required placeholder="검색어를 입력하세요.">
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
							<div>
								<select-view
									:propOptionList="optionLsit"
									:propPlaceholder="'최신순'"
									:propClass="'type2 bg-none f-16 mg-l10'"
									>
								</select-view>
							</div>
						</div>
					</div>

					<div class="skeleton-content_list_wrap3">
						<div class="share-info_box_list" v-for="(item, index) in shareList" :key="index">
							<span class="new" v-if="item.new">new</span>
							<div class="info_head">
								<span class="tip">
									<span class="dropdown-type2 tooltip text">
										<dropdown-menu2
											:propImg="item.img"
											:propName="item.name"
											:propSpot="item.companySpot"
											:propItem="dropItem3"
											:propClass="'dropdown-type2-list type3'"
											propLocation="bottom start"
										>
										</dropdown-menu2>
									</span>
								</span>

							</div>

							<div class="txt"><p class="ell-multiline2">{{item.title}}</p></div>
							<div class="date flex">
								<button type="button">{{item.date}}</button>
								<div class="dropdown-type2 tooltip text gray">
									<dropdown-menu2
										:propName="'· 전체공유'"
										:propItem="dropItem2"
										:propClass="'dropdown-type2-list share'"
									>
									</dropdown-menu2>
								</div>
							</div>
							<span class="img"><img :src="require(`@/assets/imgs/collaboration/img/${item.thumb}`)" alt="IMAGE"></span>
							<div class="info_foot">
								<div class="num_view">
									<span>{{item.numView}}</span>
								</div>
								<div class="nums">
									<span class="bn_good"><button type="button" :class="item.good ? 'active' : ''" @click="goodToggle(item)">좋아요</button> {{item.numGood}}</span>
									<span class="rep">{{item.numReply}}</span>
								</div>
							</div>
						</div>
					</div>

					<div>
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

			<div v-show="currentTab == 1">

      </div>
		</div>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import selectView from "@/components/selectView.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue"
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
	components: {
		selectView,
		dropdownMenu2,
		dropdownMenu3,
		Paging,
	},
	data() {
		return {
			selectSlotText:'전체 정보 공유',
			dropItem: [
				{ title: '전체 정보 공유', isActive: true },
				{ title: '나의 정보 공유', isActive: false },
			],
			currentTab: 0,
			tabsType: ['All', 'Blockchain', 'AI', 'Big Data', 'Cloud', 'DevOps', '오픈소스', 'SW엔지니어링', '인프라 (데이터센터)', 'SAP', 'KRG/IDC/Gartner', '디지털금융'],
			page: 1,
			tabActive: false,
			shareList: [
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '블록체인 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_01.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: true,
					good: true,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '블록체인 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_02.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: true,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'AI 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_03.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'AI 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_04.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'Big Data 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_05.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'Big Data 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_06.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'Cloud 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_07.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'Cloud 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_08.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'DevOps 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_09.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'DevOps 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_10.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '오픈소스 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_11.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: true,
					good: true,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '오픈소스 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_12.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: true,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'SW엔지니어링 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_13.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'SW엔지니어링 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_14.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '인프라(데이터센터) 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_15.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '인프라(데이터센터) 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_16.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'SAP 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_17.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'SAP 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_18.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'KRG/IDC/Gartner 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_19.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: 'KRG/IDC/Gartner 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_20.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '디지털금융 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_21.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
				{
					img: 'img_dummy1.png',
					name: '김한화',
					companySpot: '직위',
					title: '디지털금융 디폴트 이미지입니다. 내용영역입니다. 최대 2줄까지 노출됩니다.',
					date: '2021.09.07 오전 11:23',
					thumb: 'img_share_default_22.png',
					numView: '124',
					numGood: '79',
					numReply: '3',
					new: false,
					good: false,
				},
			],
			optionLsit: [
        { value: '최신순', label: '최신순' },
        { value: '조회순', label: '조회순' },
        { value: '좋아요순', label: '좋아요순' },
        { value: '의견순', label: '의견순' },
      ],
			dropItem2: {
        title: `
          <div class="dropdown-share-list">
            <strong>공유 대상</strong>
            <div class="scroll">
              <span>@김이름</span>
              <span>@장한화</span>
              <span>@시스템개발노드</span>
              <span>@노드클러스트부문명이 긴경우 최대 범위까지 노출후</span>
              <span>@김이름</span>
              <span>@장한화</span>
              <span>@시스템개발노드</span>
              <span>@노드클러스트부문명이 긴경우 최대 범위까지 노출후</span>
            </div>
          </div>
        `,
      },
			dropItem3: {
        title: `
          <div class="tooltip-member">
            <div>
							<button type="button">
								<span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
								<p><b>김한화</b> <span class="pos">직위/직책</span></p>
							</button>
            </div>
            <p class="cp">회사명 <span></span> 소속조직명</p>
            <p class="phone">010-1234-2336</p>
            <p class="email">mail@hanwha.com</p>
          </div>
        `,
      },
		}
	},
	methods: {
		tabToggle(){
			this.tabActive = !this.tabActive
		},
		selectSlotValue(val:any){
      this.selectSlotText = val
    },
		goodToggle(item:any){
			item.good = !item.good
		}
	},
});
</script>