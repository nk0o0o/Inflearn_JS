<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="공지대상그룹선택"
    class="ly-pop-type1 admin org_04"
  >
    <template v-slot:body> 
		<div class="org-area">
			<div class="tree-area">
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
		
			<div class="btn-area">
				<button class="btn md">추가</button>
				<button class="btn md line-type2">삭제</button>
			</div>

			<div class="selected-area">
				<dl>
					<dt><div class="input-chk square"><input type="checkbox" id="checkall"><label for="checkall">삭제선택</label></div></dt>
					<dd>
						<ul>
						<li><div class="input-chk square"><input type="checkbox" id="user_8093046" value="[object Object]"> <label for="user_8093046">박지연 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8093093" value="[object Object]"> <label for="user_8093093">김동영 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8083315" value="[object Object]"> <label for="user_8083315">신현동 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8049040" value="[object Object]"> <label for="user_8049040">이민영 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8084706" value="[object Object]"> <label for="user_8084706">정승영 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8086281" value="[object Object]"> <label for="user_8086281">이현수 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8086484" value="[object Object]"> <label for="user_8086484">김은정 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8087829" value="[object Object]"> <label for="user_8087829">이희범 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8087833" value="[object Object]"> <label for="user_8087833">조성후 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8088523" value="[object Object]"> <label for="user_8088523">김대율 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8088568" value="[object Object]"> <label for="user_8088568">김돌 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8089028" value="[object Object]"> <label for="user_8089028">김민호 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8090517" value="[object Object]"> <label for="user_8090517">정대진 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8092891" value="[object Object]"> <label for="user_8092891">김청운 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8093046" value="[object Object]"> <label for="user_8093046">박지연 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8093093" value="[object Object]"> <label for="user_8093093">김동영 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8083315" value="[object Object]"> <label for="user_8083315">신현동 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8049040" value="[object Object]"> <label for="user_8049040">이민영 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8084706" value="[object Object]"> <label for="user_8084706">정승영 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8086281" value="[object Object]"> <label for="user_8086281">이현수 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8086484" value="[object Object]"> <label for="user_8086484">김은정 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8087829" value="[object Object]"> <label for="user_8087829">이희범 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8087833" value="[object Object]"> <label for="user_8087833">조성후 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8088523" value="[object Object]"> <label for="user_8088523">김대율 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8088568" value="[object Object]"> <label for="user_8088568">김돌 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8089028" value="[object Object]"> <label for="user_8089028">김민호 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8090517" value="[object Object]"> <label for="user_8090517">정대진 ( 경영기획파트 )</label></div></li>
						<li><div class="input-chk square"><input type="checkbox" id="user_8092891" value="[object Object]"> <label for="user_8092891">김청운 ( 경영기획파트 )</label></div></li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
		<p class="noti">(*) 상위 그룹 선택시 공지대상은 해당 그룹의 하위 그룹 전체를 포함합니다.</p>
      
    </template>
    
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn">취소</button>
        <button type="button" class="btn line-type1">확인</button>
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