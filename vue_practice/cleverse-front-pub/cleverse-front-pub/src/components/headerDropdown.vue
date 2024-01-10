<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<button type="button"
				color="primary"
				v-bind="props"
			>
				<span class="set">
					<img class="img-sector" :src="require('@/assets/imgs/collaboration/svg/cluster-sector-building.svg')" alt="아이콘">
					<span class="sector-name">신사업 부문</span>			
				</span>
			</button>
		</template>
		<div class="dropdown-collab-list-type1">
			<div class="item"
				v-for="(item, index) in items"
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		propItem: {
			type: Array,
			default() {
					return []
			}
		},
	},
    components: {
    },
    data() {
			return {
				items: this.propItem,
			}
    }
})
</script>
