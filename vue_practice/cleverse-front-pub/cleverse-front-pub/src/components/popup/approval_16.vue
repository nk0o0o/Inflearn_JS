<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="발송요청 정보편집"
    class="ly-pop-type1 md"
  >
    <template v-slot:body>
		<div class="tbl data-type inp-round-type">
			<table>
				<colgroup>
					<col style="width:22%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">부재기간</th>
						<td>
              <div class="date w160">
                <Datepicker
                  v-model="date"
                  :format="format"
                  @update:modelValue="onUpdateDate"
                  :enableTimePicker="false"
                  locale="ko"
                  cancelText="취소"
                  selectText="선택"
                />
              </div>
            </td>
					</tr>
					<tr>
						<th scope="row">부재기간</th>
						<td>
              <div class="input-radio h16">
                <input type="radio" name="radio1" id="radio1-1" checked=""><label for="radio1-1">사용인감으로 날인</label>
                <img :src="require('@/assets/imgs/icon/stamp-01.png')" alt="인감 이미지" class="mg-l5">
              </div>
              <div class="input-radio h16">
                <input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">직인으로 날인</label>
                <img :src="require('@/assets/imgs/icon/stamp-02.png')" alt="직인 이미지" class="mg-l5">
              </div>
              <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-3"><label for="radio1-3">직인생략</label></div>
            </td>
					</tr>
          <tr>
						<th scope="row">의견</th>
						<td>
              <textarea name="" id=""></textarea>
              <p class="msg-imp fc org mg-t10">완료 후 인쇄만 가능합니다.</p>
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
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    basePopup,
    Datepicker
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
      date: new Date().toString(),
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
    format(date:any) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${year}.${month}.${day}`;
    },
    
  }
})
</script>