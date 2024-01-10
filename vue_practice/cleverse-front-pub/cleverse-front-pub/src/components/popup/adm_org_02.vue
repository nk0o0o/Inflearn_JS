<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="부서 선택"
    class="ly-pop-type1 admin org_02"
  >
    <template v-slot:body>
		<div class="tbl">
			<div>
				<div class="org-form form-wrap">
					<div class="f1">
						<form action="">
							<div class="input-box type3 full">
								<input type="text" required placeholder="검색어">
								<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
								<div class="error" v-if="error">에러 내용입력</div>
							</div>
						</form>
					</div>
					<div><button type="button" class="btn md">검색</button></div>
					<div><button type="button" class="btn md line-type2">초기화</button></div>
				</div>
				<div class="treeselect">
					<treeselect
						v-model="treeSelected"
						:max-height="145"
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