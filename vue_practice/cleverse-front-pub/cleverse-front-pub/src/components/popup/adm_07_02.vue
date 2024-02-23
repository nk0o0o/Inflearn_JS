<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="태그 변경/삭제"
    class="ly-pop-type1 admin"
  >
    <template v-slot:body>
		<div class="tbl">
			<table>
				<colgroup>
					<col style="width:20%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">구분</th>
						<td>
							<select-view 
								:propOptionList="optionLsit"
								:propPlaceholder="'(202020300) 전략 부문'"
								:propClass="'type1 full'"
							>
							</select-view>
						</td>
					</tr>
					<tr>
						<th scope="row">유형</th>
						<td>
							<div class="input-box type3 full">
								<p class="data">회사동력</p>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">태그명</th>
						<td>
							<div class="form-wrap bs">
								<div>
									<form action="">
										<div class="input-box type3 full">
											<input type="text" required placeholder="#을 포함한 태그명을 입력해주세요.">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
											<div class="error" v-if="error">에러 내용입력</div>
										</div>
									</form>
								</div>
								<div><button type="button" class="btn md line-type1">저장</button></div>
							</div>
							<div class="tagname-list">
								<ul>
									<li>#태그1<button type="button">x</button></li>
									<li>#태그2<button type="button">x</button></li>
									<li>#태그3<button type="button">x</button></li>
									<li>#태그4<button type="button">x</button></li>
									<li>#태그5<button type="button">x</button></li>
									<li>#태그6<button type="button">x</button></li>
									<li>#태그7<button type="button">x</button></li>
									<li>#태그8<button type="button">x</button></li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md line-type1">삭제</button>
			<button type="button" class="btn md">저장</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue"


export default defineComponent({
  components: {
    basePopup,
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
  }
})
</script>