<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="직무 태그 변경"
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
						<th scope="row">직군</th>
						<td>
							<div class="input-box type3 full">
								<p class="data">직군명</p>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">직렬</th>
						<td>
							<div class="input-box type3 full">
								<p class="data">직렬명</p>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">직무태그</th>
						<td>
							<div class="input-box type3 full">
								<p class="data tag"><span>#직무태그,</span><span>#직무태그,</span><span>#직무태그,</span><span>#직무태그</span></p>
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