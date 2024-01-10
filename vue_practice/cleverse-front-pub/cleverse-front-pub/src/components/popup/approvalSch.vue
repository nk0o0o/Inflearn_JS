<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="상세검색"
    class="ly-pop-type1 sm"
  >
    <template v-slot:body>
		<div class="tbl data-type">
			<table>
				<colgroup>
					<col style="width:24%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">문서제목</th>
						<td>
							<form action="">
                <div class="input-box type3 full">
                  <input type="text" required placeholder="제목을 입력해주세요.">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
						</td>
					</tr>
					<tr>
						<th scope="row">기안자</th>
						<td>
							<form action="">
                <div class="input-box type3 full">
                  <input type="text" required placeholder="">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
						</td>
					</tr>
					<tr>
						<th scope="row">기안부서</th>
						<td>
							<form action="">
                <div class="input-box type3 full">
                  <input type="text" required placeholder="">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
						</td>
					</tr>
          <tr>
						<th scope="row">기안일</th>
						<td>
							<div class="date h40">
                <Datepicker 
                  weekStart="0"
                  v-model="rangeDate"
                  range 
                  :format="rangeFormat"
                  :enableTimePicker="false"/>
              </div>
						</td>
					</tr>
          <tr>
						<th scope="row">완료일</th>
						<td>
							<div class="date h40">
                <Datepicker 
                  weekStart="0"
                  v-model="rangeDate2"
                  range 
                  :format="rangeFormat"
                  :enableTimePicker="false"/>
              </div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md">검색</button>
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
      rangeDate: [new Date(),new Date()],
      rangeDate2: [new Date(),new Date()],
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
    rangeFormat(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();

      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();

      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  }
})
</script>