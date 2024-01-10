<template>
<v-menu :close-on-content-click="false">
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<button type="button" class="member-counter">+99</button>
			</button>
		</template>
		
		<div class="member-list-dropdown">
			<div class="member-list-edit">
				<div class="edit-member">
					<p class="txt">멤버 (12)</p>
					<button type="button" class="edit-btn">Edit</button>
				</div>
				<div class="input-chk square">
					<input type="checkbox" name="editMy" id="editMy">
					<label for="editMy">나 혼자 편집</label>
				</div>
			</div>
			<ul class="member-list-people">
				<li v-for="(item, index) in personnel" :key="index">
					<!-- <a href="#"> -->
						<div class="img"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.name"></div>
						<dl>
							<dt>
								{{item.name}}
								<span class="pos">{{item.spot}} / {{item.pos}}</span>
								<em class="operator" v-show="item.leader">운영자</em>
							</dt>
							<dd class="team ell-singleline">{{item.sector}} / {{item.node}}</dd>
						</dl>
					<!-- </a> -->
				</li>
			</ul>
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

