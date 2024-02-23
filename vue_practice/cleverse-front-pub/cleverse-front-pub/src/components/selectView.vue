<template>
	<Multiselect
		v-model="selectedValue"
		:options="options"
		:placeholder="placeholder"
		:disabled="disabled"
		:class="classCase"
		:close-on-select="closeOn"
		:canClear="dataClear"
		:create-option="true"
		:canDeselect="false"
		:id="id"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
/*
* https://www.npmjs.com/package/@vueform/multiselect
*/
import Multiselect from '@vueform/multiselect'
export default defineComponent({
	props: {
		propOptionList: {
			type: Array,
			default() {
					return []
			}
		},
		propPlaceholder: {
			type: String,
			default: ''
		},
		propDisabled: {
			type: Boolean,
			default: false
		},
		propClass: {
			type: String,
			default: '',
		},
		propValue: {
			type: String,
			default: '',
		},
		propCloseOn: {
			type: Boolean,
			default: true
		},
		propDataClear: {
			type: Boolean,
			default: false
		},
		propId: {
			type: String,
			default: '',
		},
	},
    components: {
      Multiselect,
    },
    data() {
			return {
				options: this.propOptionList,
				placeholder: this.propPlaceholder,
				disabled: this.propDisabled,
				classCase: this.propClass,
				value: this.propValue,
				closeOn: this.propCloseOn,
				dataClear: this.propDataClear,
				id: this.propId,
				selectedValue: this.propValue
			}
    }
})
</script>
