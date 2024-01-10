<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="메일정책 대상자 추가"
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
						<th scope="row">대상추가</th>
						<td>
							<div class="board-setting mail-add">
                <ul class="classification_list">
                  <li>김한화 대리 / 시스템</li>
                  <li>테스트계정 사원 / 시스템</li>
                  <li>김한화 대리 / 시스템</li>
                  <li>테스트계정 사원 / 시스템</li>
                  <li>김한화 대리 / 시스템</li>
                  <li>테스트계정 사원 / 시스템</li>
                </ul>
                <button type="button" class="btn md line-type1">사용자 선택</button>
              </div>
						</td>
					</tr>
					<tr>
						<th scope="row">적용여부</th>
						<td>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">삭제대상</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">예외대상</label></div>
						</td>
					</tr>
					<tr>
						<th scope="row">본부여부</th>
						<td>
							<div class="input-radio h16"><input type="radio" name="radio2" id="radio2-1"><label for="radio2-1">적용</label></div>
              <div class="input-radio h16"><input type="radio" name="radio2" id="radio2-2"><label for="radio2-2">미적용</label></div>
						</td>
					</tr>
					<tr>
						<th scope="row">메일보관일</th>
						<td>
							<div class="input-radio h16"><input type="radio" name="radio3" id="radio3-1"><label for="radio3-1">10일</label></div>
              <div class="input-radio h16"><input type="radio" name="radio3" id="radio3-2"><label for="radio3-2">14일</label></div>
              <div class="input-radio h16"><input type="radio" name="radio3" id="radio3-3"><label for="radio3-3">15일</label></div>
              <div class="input-radio h16"><input type="radio" name="radio3" id="radio3-4"><label for="radio3-4">30일</label></div>
              <div class="input-radio h16"><input type="radio" name="radio3" id="radio3-5"><label for="radio3-5">60일</label></div>
              <div class="input-radio h16"><input type="radio" name="radio3" id="radio3-6"><label for="radio3-6">90일(증권)</label></div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md">저장</button>
			<button type="button" class="btn md">취소</button>
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
		file_name: "png, jpg, /  50MB 이하",
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods: {
	onHideModal(){
		this.$emit('popClose');
	},
	handleFileChange(e:any) {
		this.file_name = e.target.files[0].name;
	}
  }
})
</script>