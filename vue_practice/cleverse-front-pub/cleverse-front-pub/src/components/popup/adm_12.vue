<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="신규 태그 등록"
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
						<th scope="row"><em>태그명</em></th>
						<td>
							<form>
								<div class="input-box type3 full">
									<input type="text" required placeholder="태그명을 입력해주세요.">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>부문선택</em></th>
						<td>
							<select-view 
								:propOptionList="optionLsit"
								:propPlaceholder="'부문을 선택해주세요.'"
								:propClass="'type1'"
							>
							</select-view>
						</td>
					</tr>
					<tr>
						<th scope="row">정렬순서</th>
						<td>
							<form>
								<div class="input-box type3 full">
									<input type="number" required placeholder="정렬순서를 입력해주세요.">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>색상</em></th>
						<td>
							<div class="tag-color_wrap">
								<div class="tag-color pop" :class="radioValues" @click="isActive = !isActive"></div>
								<div class="tag-color_select_wrap" :class="{ 'active' : isActive }">
									<div class="tag-color_select">
										<!--
										// color value
										.c01 - #ffe5b4;
										.c02 - #ffd3f2;
										.c03 - #f9cece;
										.c04 - #fff16f;
										.c05 - #cff0f7;
										.c06 - #ecf9ba;
										.c07 - #eac9ba;
										.c08 - #b8f2cf;
										.c09 - #c9ceff;
										.c10 - #e5d7fd;
										.c11 - #f6ff8c;
										.c12 - #ffa1a1;
										.c13 - #e7e7e7;
										.c14 - #d0d0d0;
										.c15 - #b6b6d8;
										.c16 - #a5efff;
										-->
										<div class="c01"><input type="radio" v-model="radioValues" value="c01" name="tagcolor" id="c01"><label for="c01"></label></div>
										<div class="c02"><input type="radio" v-model="radioValues" value="c02" name="tagcolor" id="c02"><label for="c02"></label></div>
										<div class="c03"><input type="radio" v-model="radioValues" value="c03" name="tagcolor" id="c03" checked><label for="c03"></label></div>
										<div class="c04"><input type="radio" v-model="radioValues" value="c04" name="tagcolor" id="c04"><label for="c04"></label></div>
										<div class="c05"><input type="radio" v-model="radioValues" value="c05" name="tagcolor" id="c05"><label for="c05"></label></div>
										<div class="c06"><input type="radio" v-model="radioValues" value="c06" name="tagcolor" id="c06"><label for="c06"></label></div>
										<div class="c07"><input type="radio" v-model="radioValues" value="c07" name="tagcolor" id="c07"><label for="c07"></label></div>
										<div class="c08"><input type="radio" v-model="radioValues" value="c08" name="tagcolor" id="c08"><label for="c08"></label></div>
										<div class="c09"><input type="radio" v-model="radioValues" value="c09" name="tagcolor" id="c09"><label for="c09"></label></div>
										<div class="c10"><input type="radio" v-model="radioValues" value="c10" name="tagcolor" id="c10"><label for="c10"></label></div>
										<div class="c11"><input type="radio" v-model="radioValues" value="c11" name="tagcolor" id="c11"><label for="c11"></label></div>
										<div class="c12"><input type="radio" v-model="radioValues" value="c12" name="tagcolor" id="c12"><label for="c12"></label></div>
										<div class="c13"><input type="radio" v-model="radioValues" value="c13" name="tagcolor" id="c13"><label for="c13"></label></div>
										<div class="c14"><input type="radio" v-model="radioValues" value="c14" name="tagcolor" id="c14"><label for="c14"></label></div>
										<div class="c15"><input type="radio" v-model="radioValues" value="c15" name="tagcolor" id="c15"><label for="c15"></label></div>
										<div class="c16"><input type="radio" v-model="radioValues" value="c16" name="tagcolor" id="c16"><label for="c16"></label></div>
									</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
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
			radioValues: 'c03',
      isActive: false,
      error: false,
      showModal: this.propShowModal,
			optionLsit: [
        { value: 'test menu1', label: 'test menu1' },
        { value: 'test hover', label: 'test hover' },
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