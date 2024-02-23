<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
					<div class="head_location">
						<span>한화시스템</span>
						<em>ICT부문</em>
					</div>
					<div class="dropdown-collab-type1">
            <v-menu>
							<template v-slot:activator="{ props }">
								<button type="button"
									color="primary"
									v-bind="props"
								>
									<span class="set">
										<span class="sector-name">LIFE SOLUTION</span>
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
					<strong class="content-num">Node <span>8</span></strong>
					<div class="nodata">
						<p>노드가 없어요!<br>노드를 등록해주세요!</p>
					</div>
				</div>
			</div>

			<div v-show="currentTab == 1">
				<div class="skeleton-content_list">
					<div class="skeleton-content_head">
							<strong class="content-num">People <span>254</span></strong>
							<div class="dropdown-collab-type6">
								<filter-task />
							</div>
					</div>
					<div class="skeleton-content_list_wrap pp">
						<div class="people-list_wrap" v-for="(item, index) in peoples" :key="index">
							<div class="people-list">
								<span class="img" :class="{round: item.leader}"><img :src="require(`@/assets/imgs/collaboration/svg/${item.src}`)" :alt="item.name"></span>
								<em class="name">
									<span class="nm">{{item.name}}</span>
									<span class="pos">{{item.spot}} / {{item.position}}</span>
								</em>
							</div>
							<ul class="people-tag">
								<li v-for="(item, index) in item.tags" :key="index">
									<span v-if="item.tag1">{{item.tag1}}</span>
									<span v-if="item.tag2">{{item.tag2}}</span>
								</li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import filterTask from '@/components/filterTask.vue';


export default defineComponent({
		components: {
			filterTask,
		},
		data() {
				return {
					currentTab: 1,
					tabsType1: ['Node', 'People'],
					dropItem: [
            { title: 'LIFE SOLUTION', me: true, isActive: true },
            { title: 'FINANCIAL SOLUTION', me: false, isActive: false },
            { title: 'BIG DATA / LENDING', me: false, isActive: false },
            { title: '클러스터명', me: false, isActive: false },
          ],
					peoples: [
						{
							leader: true,
							src: 'profile-default-img-60.svg',
							name: '김한화',
							spot: '직위명',
							position: '직책명',
							tags: [
								{
									tag1: '#신사업부문신사업부문신사업부문',
									tag2: '#Side ProjectSide ProjectSide Project',
								},
								{
									tag1: '#구독 솔루션 (홈트)',
									tag2: '#PM',
								}
							]
						},
						{
							src: 'profile-default-img-60.svg',
							name: '이한화',
							spot: '직위명',
							position: '직책명',
							tags: [
								{
									tag1: '#신사업부문신사업부문신사업부문',
									tag2: '#Side ProjectSide ProjectSide Project',
								},
								{
									tag1: '#신사업부문신사업부문신사업부문',
								},
							]
						},
						{
							src: 'profile-default-img-60.svg',
							name: '박한화',
							spot: '직위명',
							position: '직책명',
							tags: [
								{
									tag1: '#신사업부문신사업부문신사업부문',
									tag2: '#Side ProjectSide ProjectSide Project',
								},
							]
						},
						{
							src: 'profile-default-img-60.svg',
							name: '최한화',
							spot: '직위명',
							position: '직책명',
							tags: [
								{
									tag1: '#신사업부문신사업부문신사업부문',
									tag2: '#Side ProjectSide ProjectSide Project',
								},
								{
									tag1: '#신사업부문신사업부문신사업부문',
								},
							]
						},
					],
				};
		},
		methods: {

		},
});
</script>