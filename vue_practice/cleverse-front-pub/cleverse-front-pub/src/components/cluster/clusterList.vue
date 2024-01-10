<template>
	<ul class="box-list">
		<li v-for="(item, index) in propClusterList" :key="index">
			<a href="#" :title="item.title">
				<span class="txt">
					<!-- <span v-if="item.prog" class="ico-prog"
						:class="`p${item.prog}`"
					>
						Phase{{item.prog}}
					</span> -->
					<span v-if="item.src" class="img"><img :src="require(`@/assets/imgs/collaboration/svg/${item.src}`)" :alt="item.name"></span>
					{{item.title}}
				</span>
			</a>
			<div class="dropdown-collab-type2">
				<personnel-dropdown
					propLocation="bottom end"
				/>
			</div>
		</li>
	</ul>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import personnelDropdown from "@/components/personnelmainDropdown.vue";


export default defineComponent({
	props: {
		propClusterList: {
			type: Array,
			default() {
					return []
			}
		},
	},
	components: {
		personnelDropdown,
	},
	data() {
			return {
				//clusterLists: this.propClusterList,
			};
	},
	methods: {

	},
});
</script>