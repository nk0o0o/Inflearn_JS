<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="결재처리"
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
						<th scope="row">제목</th>
						<td>
              <div class="input-box type3 full">
                <input type="text" required placeholder="">
              </div>
            </td>
					</tr>
					<tr>
						<th scope="row">발송방법</th>
						<td>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">승인</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">반려</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-3"><label for="radio1-3">보류</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-4"><label for="radio1-4">전결</label></div>
              <p class="fc org f-normal mg-t10">※ 결재형태를 반드시 선택하여 주시기 바랍니다.</p>
            </td>
					</tr>
          <tr>
						<th scope="row">비밀번호</th>
						<td>
              <div class="input-box type3 w200">
                <input type="password" required placeholder="">
              </div>
            </td>
					</tr>
          <tr>
						<th scope="row">의견</th>
						<td>
              <textarea name="" id=""></textarea>
            </td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">확인</button>
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