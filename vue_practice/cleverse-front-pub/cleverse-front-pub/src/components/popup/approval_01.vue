<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="발송정보 내용조회"
    class="ly-pop-type1 md scroll"
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
						<th scope="row">발송일자</th>
						<td>2022.09.16</td>
					</tr>
					<tr>
						<th scope="row">발송주체</th>
						<td>날인 후 발신부서에서 직접발송</td>
					</tr>
          <tr>
						<th scope="row">인장선택</th>
						<td>인장없음</td>
					</tr>
          <tr>
						<th scope="row">발송방법</th>
						<td>
              [기타] <p class="fc gray">담당자 메일 전송</p>
            </td>
					</tr>
          <tr>
						<th scope="row">자동발송</th>
						<td>예</td>
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
      <button type="button" class="btn lg line-type2">날인반려</button>
			<button type="button" class="btn lg">날인</button>
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