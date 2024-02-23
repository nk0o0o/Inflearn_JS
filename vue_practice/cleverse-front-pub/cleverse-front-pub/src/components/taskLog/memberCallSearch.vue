<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span class="text">결정자 선택</span>			
			</button>
		</template>
		
		<div class="member-call-search">
			<form action="">
					<div class="input-box search-type1">
						<input type="text" required placeholder="결정자 이름으로 검색">
						<button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
					</div>
				</form>
			<div class="dropdown-collab-list-type2 t2">
				<div class="mem_num">멤버 검색 결과</div>
				<div class="nodata" v-if="show">해당 검색어와 일치하는<br>사용자가 없습니다.</div>
				<ul>
					<li v-for="(item, index) in personnel" :key="index">
						<a href="#">
							<div class="img" :class="{round: item.leader}"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.name"></div>
							<dl>
								<dt>
									{{item.name}}
									<span class="pos">{{item.spot}} / {{item.pos}}</span>
								</dt>
								<dd>{{item.sector}} / {{item.node}}</dd>
							</dl>
						</a>
					</li>
				</ul>
				<div class="mem_num">멤버 외 검색 결과<br>(등록 완료 시 멤버로 자동 추가됩니다.)</div>
				<div class="nodata" v-if="show">해당 검색어와 일치하는<br>사용자가 없습니다.</div>
				<ul>
					<li v-for="(item, index) in personnel2" :key="index">
						<a href="#">
							<div class="img" :class="{round: item.leader}"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.name"></div>
							<dl>
								<dt>
									{{item.name}}
									<span class="pos">{{item.spot}} / {{item.pos}}</span>
								</dt>
								<dd>{{item.sector}} / {{item.node}}</dd>
							</dl>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</v-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	components: {
	},
	data() {
		return {
			show : false,
			personnel: [
				{ 
					leader: true,
					src: 'img_dummy1.png',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명노드명노드명노드명노드명노드명노드명노드명',
				},
				{ 
					leader: false,
					src: 'img_dummy1.png',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
			],
			personnel2: [
				{ 
					leader: true,
					src: 'img_pp_default.png',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명노드명노드명노드명노드명노드명노드명노드명',
				},
				{ 
					leader: false,
					src: 'img_pp_default.png',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
				{ 
					leader: false,
					src: 'img_pp_default.png',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
			],
		}
	}
});
</script>
