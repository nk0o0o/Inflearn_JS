<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="전달"
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
						<th scope="row">부재기간</th>
						<td>
              <div class="communicator-wrap">
                <div class="communicator-list">
                  <span>전달자 1</span>
                  <span>전달자 2</span>
                  <span>전달자 3</span>
                  <span>전달자 4</span>
                  <span>전달자 5</span>
                  <span>전달자 6</span>
                  <span>전달자 7</span>
                  <span>전달자 8</span>
                  <span>전달자 9</span>
                </div>
                <button type="button" class="btn sm2 line-type2 round-type">전달자 찾기</button>
              </div> 
            </td>
					</tr>
					<tr>
						<th scope="row">부재기간</th>
						<td>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1" checked=""><label for="radio1-1">재전달 허용</label></div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">재전달 비허용</label></div>
            </td>
					</tr>
          <tr>
						<th scope="row">의견</th>
						<td>
              <textarea name="" id=""></textarea>
              <p class="msg-imp fc org mg-t10">전달의견은 전달한 사람과 전달받은 사람만 볼 수 있습니다.</p>
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