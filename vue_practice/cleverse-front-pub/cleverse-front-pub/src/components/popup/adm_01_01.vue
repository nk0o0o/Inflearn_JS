<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="신규 부문 등록"
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
						<th scope="row">부문명</th>
						<td>
						<div class="form-wrap bs">
							<div>
								<form action="">
									<div class="input-box type3 full">
										<input type="text" required placeholder="내용을 입력해주세요.">
										<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										<div class="error" v-if="error">에러 내용입력</div>
									</div>
								</form>
							</div>
							<div><button type="button" class="btn md line-type1">연계부문선택</button></div>
						</div>
						</td>
					</tr>
					<tr>
						<th scope="row">조직도 연계</th>
						<td>
							<div class="form-wrap bs">
								<div>
									<form action="">
										<div class="input-box full">
											<input type="text" readonly required placeholder="연계 부문 선택시 자동 노출">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										</div>
									</form>
								</div>
								<div><button type="button" class="btn md line-type1">Clear</button></div>
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