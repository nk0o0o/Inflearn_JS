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
				<span class="personnel">+99</span>			
			</button>
		</template>
		<div class="dropdown-collab-list-type2 t4">
			<div class="mem_num">멤버 (2)</div>
			<button type="button" class="bn-mem_num">Edit</button>
			<button type="button" class="setting" v-if="propCollaboMem"><i class="blind">설정</i></button>
			<ul>
				<li>
					<a href="#">
						<div class="img round"><img :src="require('@/assets/imgs/collaboration/svg/ic-08-profile-default-img-34.svg')" alt="김이름"></div>
						<dl>
							<dt>김이름
								<span class="pos">직위 / 직책</span>
							</dt>
							<dd>부문명 / 노드명</dd>
						</dl>
						<span class="operator" v-if="propCollaboMem">운영자</span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="img"><img :src="require('@/assets/imgs/collaboration/svg/ic-08-profile-default-img-34.svg')" alt="김이름"></div>
						<dl>
							<dt>김이름
								<span class="pos">직위 / 직책</span>
							</dt>
							<dd>부문명 / 노드명</dd>
						</dl>
					</a>
				</li>
			</ul>
		</div>
	</v-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDropdownGroup from '@/plugins/use/useDropdownGroup';

export default defineComponent({
	components: {

	},
	props:{
		propCollaboMem: {
			type: Boolean,
			default: false,
		},
		propLocation:{
			type: String,
			default:'bottom end'
		},
	},
	data() {
		return {
			modelValue: false,
			dropdownGroup: {} as any,
			personnel: [
			],
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
});
</script>
