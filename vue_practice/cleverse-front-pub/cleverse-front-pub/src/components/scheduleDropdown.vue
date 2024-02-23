<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<button type="button"
				v-bind="props"
			>
				<span class="schedule">체력단련휴가 (반차-오전)</span>
			</button>
		</template>
		<div class="tooltip-b v2 tl my">
			<p class="msg">근태정보 텍스트는 최대 20자까지 표시되며 그 이후 데이터가 있을 경우 마우스 오버시 글자수 제한없이 볼 수 있습니다.</p>
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
			
		}
	}
})
</script>
