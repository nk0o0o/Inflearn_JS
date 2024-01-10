<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="용량변경요청"
    class="ly-pop-type1 sm"
  >
    <template v-slot:body>
		<div class="tbl data-type">
			<table>
				<colgroup>
					<col style="width:25%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">요청 용량</th>
						<td>
              <div class="flex">
                <div class="input-box type3 w200">
                  <input type="text" required placeholder="">
                </div>
                <span class="mg-l5">MB</span>
              </div>
            </td>
					</tr>
          <tr>
						<th scope="row">사유</th>
						<td>
              <textarea name="" id="" class="h140"></textarea>
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