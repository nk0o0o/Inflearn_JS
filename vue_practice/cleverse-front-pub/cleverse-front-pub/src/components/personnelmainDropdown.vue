<template>
	<v-menu
		v-model="modelValue"
		:anchor="propLocation"
	>
		<template v-slot:activator="{ props }">
			<button
				type="button"
				v-bind="props"
				@click="clickSample"
			>
				<span class="personnel">김한화 직위/직책 +N(조직원수)</span>
			</button>
		</template>
		<div class="dropdown-collab-list-type2 t5">
			<div class="mem_num">People (2)</div>
			<ul>
				<li v-for="(item, index) in personnel" :key="index">
					<a href="#">
						<div class="img" :class="{round: item.leader}"><img :src="require(`@/assets/imgs/collaboration/svg/${item.src}`)" :alt="item.name"></div>
						<dl>
							<dt>
								{{item.name}}
								<span class="pos">{{item.spot}} / {{item.pos}}</span>
							</dt>
							<dd>{{item.sector}}</dd>
							<!-- <dd>{{item.sector}} / {{item.node}}</dd> -->
						</dl>
					</a>
				</li>
			</ul>
		</div>
	</v-menu>



</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import useDropdownGroup from '@/plugins/use/useDropdownGroup';

export default defineComponent({
	components: {
	},
	props:{
		propLocation:{
			type: String,
			default: ''
		},
	},
	data() {
		return {
			modelValue: false,
			personnel: [
				{
					leader: true,
					src: 'profile-default-img-34.svg',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '소속조직명(최하위 level)',
					//node: '노드명',
				},
				{
					leader: false,
					src: 'profile-default-img-34.svg',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '디지털워크그룹',
					//node: '노드명',
				},
			],
			dropdownGroup: {} as any
		}
	},
	created() {
		this.dropdownGroup = useDropdownGroup('global.dropdown', (payload: any) => {
			if (this.modelValue) {
				this.modelValue = false;
			}
		});
	},
	methods: {
		clickSample() {
			if (!this.modelValue) {
				this.modelValue = false;
				return;
			}
			this.dropdownGroup?.emit('close');
			this.modelValue = true;
		}
	}
})
</script>
