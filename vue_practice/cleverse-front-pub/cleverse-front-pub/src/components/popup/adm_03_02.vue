<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="클러스터 정보 변경"
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
						<th scope="row">부문</th>
						<td>
							<span class="data">(2020020300) 신사업부문</span>
						</td>
					</tr>
					<tr>
						<th scope="row">클러스터명</th>
						<td>
							<form action="">
								<div class="input-box type3 full">
									<p class="data">Big Data Lending</p>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<th scope="row">클러스터ID</th>
						<td>
							<span class="data">456789123</span>
						</td>
					</tr>
					<tr>
						<th scope="row">노드수</th>
						<td>
							<span class="data">99개</span>
						</td>
					</tr>
					<tr>
						<th scope="row">생성일시</th>
						<td>
							<span class="data">2021.02.01 16:39</span>
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