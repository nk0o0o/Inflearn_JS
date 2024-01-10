<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span><i class="blind">소속 노드명</i></span>			
			</button>
		</template>
		<div class="dropdown-collab-list-type7">
			<div class="tooltipmsg">
				<div class="tooltip-b v2 tl">
					<dl class="msg lock">
						<dt>소속 노드명이 20자까지 보여집니다</dt>
						<dd>
							<span class="name">김한화 외 15명</span> 
							<span>2021.09.08 -  2021.12.31</span>
						</dd>
					</dl>
				</div>
			</div>
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
				
			]
		}
	}
})
</script>
