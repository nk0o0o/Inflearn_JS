<template>
	<v-menu
		v-model="modelValue"
		:anchor="propLocation"
		:location="propLocation"
	>
		<template v-slot:activator="{ props }">
			<v-btn
				v-if="!propisSlotMode"
				color="primary"
				v-bind="props"
				@click="clickSample"
			>
				<span class="img" v-if="propImg"><img :src="require(`@/assets/imgs/collaboration/img/${propImg}`)" alt="프로필 사진"></span>
				<span class="txt" v-if="propName">{{propName}}</span>
				<span class="spot" v-if="propSpot">{{propSpot}}</span>
				<span class="blind">정렬 선택</span>
			</v-btn>
			<v-btn
				v-else
				color="primary"
				v-bind="props"
				@click="clickSample"
			>
				<slot name="head"></slot>
			</v-btn>
		</template>
		<div :class="`${propClass}`">
			<div v-html="propItem.title"></div>
		</div>
	</v-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDropdownGroup from '@/plugins/use/useDropdownGroup';

export default defineComponent({
	modelValue: false,
	props: {
		propModalValue:{
			type: Boolean,
			default:false
		},
		propLocation:{
			type: String,
			default:'bottom end'
		},
		propisSlotMode:{
			type: Boolean,
			default:false
		},
		propItem: {
			type: String,
			default:''
		},
		propClass: {
			type: String,
			default:'dropdown-type1-list'
		},
		propName: {
			type: String,
			default:''
		},
		propSpot: {
			type: String,
			default:''
		},
		propImg: {
			type: String,
			default:''
		},
	},
	components: {
	},
	data() {
		return {
			modelValue: this.propModalValue,
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
			this.$nextTick(() => {
				this.modelValue = true;
			})
		}
	}
})
</script>
