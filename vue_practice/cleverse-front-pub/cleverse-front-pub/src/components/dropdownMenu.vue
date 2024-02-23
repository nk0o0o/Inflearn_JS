<template>
	<v-menu
		:style="'z-index:'+zIndex"
	>
		<template v-slot:activator="{ props }">
			<v-btn
				color="primary"
				v-bind="props"
			>
				<span class="blind">정렬 선택</span>
			</v-btn>
		</template>
		<ul class="dropdown-type1-list" :class="propClass">
			<li
				v-for="(item, index) in propItem"
				:key="index"
				:value="index"
				:class="{ toggle: item.isToggle }"
			>
				<button type="button"
					@click="item.isToggle ? item.isActive = !item.isActive :''"
					:class="{ active: item.isActive }"
				>
					{{ item.title }}
				</button>
			</li>
		</ul>
	</v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	props: {
		propItem: {
			type: Array as PropType<Array<{title:string, isToggle?:boolean, isActive?:boolean}>>,
			required: true,
		},
		propClass: {
			type: String,
			default: ''
		},
		zIndex:{
			type: String,
			default: '99999'
		}
	},
    components: {
    },
    data() {
			return {

			}
    }
})
</script>
