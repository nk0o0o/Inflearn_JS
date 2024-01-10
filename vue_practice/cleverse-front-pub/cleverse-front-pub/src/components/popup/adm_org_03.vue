<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="그룹 이동/복사"
    class="ly-pop-type1 admin org_03"
  >
    <template v-slot:body>
		<div class="tbl">
			<div>
				<p class="scrumb">한화생명 &gt; 전략부문 &gt; <em>투자솔루션</em></p>
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
			<button type="button" class="btn md line-type1">취소</button>
			<button type="button" class="btn md">이동</button>
			<button type="button" class="btn md">복사</button>
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