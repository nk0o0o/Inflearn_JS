<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span class="personnel-num">+5</span>			
			</button>
		</template>
		<div class="dropdown-collab-list-type2 t2">
			<div class="mem_num">멤버 (2)</div>
			<ul>
				<li v-for="(item, index) in personnel" :key="index">
					<a href="#">
						<div class="img" :class="{round: item.leader}"><img :src="require(`@/assets/imgs/collaboration/svg/${item.src}`)" :alt="item.name"></div>
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
	</v-menu>



</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	components: {
	},
	data() {
		return {
			personnel: [
				{ 
					leader: true,
					src: 'profile-default-img-34.svg',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
				{ 
					leader: false,
					src: 'profile-default-img-34.svg',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
			]
		}
	}
})
</script>
