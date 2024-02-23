<template>
	<div class="drop-util" :class="{'active': active}">
		<button type="button" @click="dropUtil"><span class="blind">더보기</span></button>
		<div class="ly-dropbox">
			<ul>
				<li
					v-for="(item, index) in propItem"
					:key="index"
				>
					<button type="button" @click="onSelect">{{item.title}}</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	components: {
	},
	props:{
		propItem:{
			type: Array as PropType<Array<{title:string}>>,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return{
			active: false,
		}
	},
	methods: {
		onSelect(){
			this.$emit('selected')
		},
		dropUtil(){
			this.active = !this.active
		},
	}
});
</script>
