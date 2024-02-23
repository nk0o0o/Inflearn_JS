<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="기본 설정"
    class="ly-pop-type1 md"
  >
    <template v-slot:body>
		<div class="tbl data-type inp-round-type">
			<table>
				<colgroup>
					<col style="width:26%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">리스트 개수</th>
						<td>
							<div class="input-box type3 full">
								<input type="text" required class="w80"><span class="inp-txt">개</span>
								<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
								<div class="error" v-if="error">에러 내용입력</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">자동 임시저장</th>
						<td>
							<div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">사용안함</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">5분</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-3"><label for="radio1-3">10분</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-4"><label for="radio1-4">15분</label></div>
						</td>
					</tr>
          <tr>
						<th scope="row">첫화면 설정</th>
						<td>
							<div class="input-radio h16"><input type="radio" name="radio2" id="radio2-1"><label for="radio2-1">결재할문서</label></div>
              <div class="input-radio h16"><input type="radio" name="radio2" id="radio2-2"><label for="radio2-2">기안문서</label></div>
						</td>
					</tr>
          <tr>
						<th scope="row">에디터 설정</th>
						<td>
							<div class="input-radio h16"><input type="radio" name="radio3" id="radio3-1"><label for="radio3-1">Html5</label></div>
              <div class="input-radio h16"><input type="radio" name="radio3" id="radio3-2"><label for="radio3-2">IEplugin</label></div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">저장</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";

export default defineComponent({
  components: {
    basePopup,
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