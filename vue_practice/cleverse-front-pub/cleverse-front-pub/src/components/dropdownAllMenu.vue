<template>
	<v-menu
		:anchor="propLocation"
	>
		<template v-slot:activator="{ props }">
			<button
				type="button"
				v-bind="props"
			>
				<span class="blind">전체 메뉴</span>
			</button>
		</template>
		<div class="dropdown-all">
			<div class="dropdown-all_inner">
				<div
					class="dropdown-all_menu"
					v-for="(item, index) in propItem"
					:key="index"
				>
					<strong class="tit" v-if="item.title">{{item.title}}</strong>
					<span class="text" v-if="item.text">{{item.text}}</span>
					<ul class="list">
						<li
							v-for="(item, index) in item.list"
							:key="index"
							:class="item.iconClass"
						>
							<span v-html="item.title" @click="item.isActive = !item.isActive"></span>
							<button
								type="button"
								class="favor"
								@click="item.isActive = !item.isActive"
								:class="{ active: item.isActive }"
							>
								좋아요
							</button>
						</li>
					</ul>
					<div class="other-menu" v-if="index === 0">
						<button type="button" class="all-survey">설문</button>
						<button type="button" class="all-facility">시설물 예약</button>
						<button type="button" class="all-service-center">고객센터</button>
					</div>
					<coming-soon
						v-if="item.coming1"
						propComingTypeClass="coming-soon-type1"
						propComingImgClass="coming-soon-email"
						propComingText="화상회의 공간으로 바로 이동할 수 있어요"
					/>
					<coming-soon
						v-if="item.coming2"
						propComingTypeClass="coming-soon-type1 ly-04"
						propComingImgClass="coming-soon-email"
						propComingText="자주 사용하는 시스템 링크도<br>메뉴로 등록해 사용할 수 있어요"
					/>
				</div>
			</div>
			<div class="dropdown-all_foot">
				<span>
					<span class="profile">
						<span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
						<span class="pos"><em>김한화</em> 차장</span>
						<span class="team">디지털워크그룹</span>
					</span>
				</span>
				<span>
					<button type="button" class="btn-set">환경설정</button>
					<button type="button" class="btn-logout">로그아웃</button>
				</span>
			</div>
		</div>
	</v-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
	props: {
		propItem: {
			type: Array,
			default() {
					return []
			}
		},
		propClass: {
			type: String,
			default: ''
		},
		propLocation:{
			type: String,
			default:'bottom'
		},
	},
    components: {
			comingSoon,
    },
    data() {
			return {

			}
    }
})
</script>
