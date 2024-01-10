<template>
	<v-menu
		:anchor="'bottom end'"
	>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span class="theme-cl_bn">Theme</span>
			</button>
		</template>
		<div class="dropdown-collab-list-type10">
			<ul>
				<li v-for="(item, index) in themes" :key="index">
					<input type="radio" name="bgChange" :id="`bg${item.id}`" :value="`bg${item.id}`"><label :for="`bg${item.id}`"><span>{{item.id}}번컬러</span></label>
				</li>
			</ul>
	</div>
	</v-menu>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
	components: {
	},
	data() {
		return {
			themes: [
				{ id: 1 },
				{ id: 2 },
				{ id: 3 },
				{ id: 4 },
				{ id: 5 },
				{ id: 6 },
				{ id: 7 }
			]
		}
	}
})
</script>
