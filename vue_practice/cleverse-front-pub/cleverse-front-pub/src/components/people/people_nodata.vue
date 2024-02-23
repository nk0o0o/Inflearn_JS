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
							<strong class="content-num">People <span>0</span></strong>
							<div class="dropdown-collab-type6">
								<filter-task />
							</div>
					</div>
					<div class="nodata">
						<p>노드가 아직 등록된 멤버정보가 없습니다.</p>
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

					],
				};
		},
		methods: {

		},
});
</script>