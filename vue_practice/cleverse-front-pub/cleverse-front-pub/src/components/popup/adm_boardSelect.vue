<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="게시판 선택"
    class="ly-pop-type1 admin org_03"
  >
    <template v-slot:body>
		<div class="tbl">
			<div>
				<p class="scrumb">게시판을 선택해 주십시오.</p>
				<div class="treeselect">
					<treeselect
						v-model="treeSelected"
						:max-height="295"
						:options="treeData"
						:default-expand-level="0"
						:always-open="true"
						:load-options="handleLoadOptions"
						@select="onSelect"
						@deselect="onDeselect"
						:multiple="isMultiple"
						:autoSelectDescendants="false"
						:flat="true"
					></treeselect>
				</div>
			</div>
		</div>
    </template>

	<template v-slot:btnWrap>
		<div class="btn-wrap c">
			<button type="button" class="btn md">선택</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
// @ts-ignore 
import Treeselect from 'vue3-treeselect';

export default defineComponent({
  components: {
    basePopup,
	Treeselect,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      treeSelected: null,
		// define options
		treeData: [ 
			{
				id: 'a',
				label: 'a',
				children: [ 
					{
						id: 'aa',
						label: 'aa',
					}, {
						id: 'ab',
						label: 'ab',
					} 
				],
			}, {
				id: 'b',
				label: 'b',
			}, {
				id: 'c',
				label: 'c',
			},
			{
				id: 'e',
				label: 'e',
				children: [ 
					{
						id: 'f',
						label: 'f',
						children: [ 
							{
								id: 'j',
								label: 'j',
							}, {
								id: 'k',
								label: 'k',
								children: [ 
									{
										id: 'j',
										label: 'j',
									}, {
										id: 'k',
										label: 'k',
									} 
								],
							} 
						],
					}, {
						id: 'g',
						label: 'g',
					} 
				],
			}, {
				id: 'h',
				label: 'h',
			}, {
				id: 'i',
				label: 'i',
			}, {
				id: 'h',
				label: 'h',
			}
		],
    isMultiple: true,
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
    },
  }
})
</script>