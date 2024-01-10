<template>
	<base-popup 
		:propShowModal="showModal" 
		@popClose="onHideModal" 
		@confirm="onConfirm" 
		title="Weekly Report"
		class="ly-pop-type3"
	>
	<template v-slot:body>
		<div class="weekly-report">
			<table class="board type1">
			<colgroup>
			<col style="width:20%;">
			<col>
			</colgroup>
			<tbody>
			<tr>
				<th scope="row">제목</th>
				<td>
					<form action="">
						<div class="input-box type2">
							<input type="text" required placeholder="제목 입력" value="7월 5주차 주간보고">
							<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
							<div class="error" v-if="error">에러 내용입력</div>
						</div>
					</form>
				</td>
			</tr>
			<tr>
				<th scope="row">멤버</th>
				<td>
					<div class="flex-wrap">
						<span class="thumb-member"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김이름"></span>
						<drop-down 
							@selected="selectValue"
							:propDefaultOptionValue="'공개'">
						</drop-down>
					</div>
				</td>
			</tr>
			<tr>
				<th scope="row">날짜입력</th>
				<td>
					<Datepicker 
						weekStart="0"
						v-model="rangeDate"
						range 
						:enableTimePicker="false"/>
				</td>
			</tr>
			<tr>
				<th scope="row">공개설정</th>
				<td>
					<select-view 
						:propOptionList="optionLsit"
						:propPlaceholder="'공개'"
						:propClass="'type1'"
						>
					</select-view>
				</td>
			</tr>
			</tbody>
			</table>
		</div>
		
	</template>

	<template v-slot:btnWrap>
		<div class="btn-wrap right">
			<button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">만들기</button>
		</div>
	</template>
	</base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import Datepicker from '@vuepic/vue-datepicker';
import dropDown from "@/components/dropDown.vue";
import selectView from "@/components/selectView.vue";


export default defineComponent({
	components: {
		basePopup,
		Datepicker,
		dropDown,
		selectView,
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
			rangeDate: [new Date(),new Date()],
			selectDisabled: true,
			optionLsit: [
				{ value: 'test menu1', label: 'test menu1' },
				{ value: 'test hover', label: 'test hover' },
				{ value: 'test Selected', label: 'test Selected', disabled: true },
				{ value: 'test menu4', label: 'test menu4' },
				{ value: 'test menu5', label: 'test menu5' },
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
		parentPwAlert(){
			// @ts-ignore 
			this.$parent.pwAlert()
		},
	}
})
</script>