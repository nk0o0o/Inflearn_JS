<template>
	<v-menu>
			<template v-slot:activator="{ props }">
				<div class="droplayer icon flag">
					<button type="button"
						v-bind="props"
					>
						<span class="blind">필터</span>			
					</button>
				</div>
			</template>
			<div class="dropdown-collab-list-type3">
				<ul>
					<li class="ov"><button>좋음</button></li>
					<li><button>보통</button></li>
					<li><button>미흡</button></li>
        </ul>
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
