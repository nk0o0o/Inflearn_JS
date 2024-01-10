<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="신규 클러스터 등록"
    class="ly-pop-type1 admin"
  >
    <template v-slot:body>
		<div class="admin-pop_header"><p class="tit">(2020020300) 신사업부문</p></div>
		<div class="tbl">
			<table>
				<colgroup>
					<col style="width:20%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">클러스터명</th>
						<td>
							<form action="">
								<div class="input-box type3 full">
									<input type="text" required placeholder="클러스터명 입력">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
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