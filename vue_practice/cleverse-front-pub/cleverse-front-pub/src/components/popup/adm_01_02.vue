<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="부문 정보 변경"
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
											<p class="data">업무공유 신사업부문</p>
										</div>
									</form>
								</div>
								<div><button type="button" class="btn md line-type1">연계부문선택</button></div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">연계부문</th>
						<td>
							<div class="form-wrap bs">
								<div>
									<form action="">
										<div class="input-box full">
											<em class="data"><span>(2020020300) 신사업부문</span></em>
										</div>
									</form>
								</div>
								<div><button type="button" class="btn md line-type1">Clear</button></div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">정규/비정규</th>
						<td>
							
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