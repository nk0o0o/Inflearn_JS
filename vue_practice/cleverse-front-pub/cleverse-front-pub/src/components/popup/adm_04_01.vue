<template>
  <base-popup 
    :propShowModal="showModal"
		:propIsScrollClass="isScrollClass"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="신규 노드 등록"
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
						<th scope="row"><em>부문/클러스터</em></th>
						<td>
							<div class="form-wrap mm">
								<div>
									<select-view 
										:propOptionList="optionLsit"
										:propPlaceholder="'(202020300) 전략 부문'"
										:propClass="'type1'"
									>
									</select-view>
								</div>
								<div>
									<select-view 
										:propOptionList="optionLsit"
										:propPlaceholder="'Big Data Lending'"
										:propClass="'type1'"
									>
									</select-view>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>노드명</em></th>
						<td>
							<div class="input-box type3 full">
								<input type="text" required placeholder="노드명 입력">
								<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
								<div class="error" v-if="error">에러 내용입력</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>진행기간</em></th>
						<td>
							<Datepicker
								weekStart="0"
								v-model="rangeDate"
								range 
								:enableTimePicker="false"/>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>캡틴</em></th>
						<td>
							<div class="form-wrap bs">
								<div class="member-grp">
									<div class="scroll">
										<p class="nodata"><span>캡틴 선택</span></p>
									</div>
								</div>
								<div>
									<button type="button" class="btn md line-type1">조직도에서 선택</button>
								</div>
							</div>

						</td>
					</tr>
					<tr>
						<th scope="row"><em>구성원</em></th>
						<td>
							<div class="form-wrap bs">
								<div class="member-grp">
									<div class="scroll">
										<p class="nodata"><span>구성원 선택</span></p>
									</div>
								</div>
								<div>
									<button type="button" class="btn md line-type1">조직도에서 선택</button>
								</div>
							</div>

						</td>
					</tr>
					<tr>
						<th scope="row"><em>정규/비정규</em></th>
						<td>
							<div class="input-radio h16">
								<input type="radio" name="radio1" id="radio1_1" checked><label for="radio1_1">정규</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio1" id="radio1_2"><label for="radio1_2">비정규</label>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>공개구분</em></th>
						<td>
							<div class="input-radio h16">
								<input type="radio" name="radio2" id="radio2_1" checked><label for="radio2_1">정규</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio2" id="radio2_2"><label for="radio2_2">비정규</label>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>노출여부</em></th>
						<td>
							<div class="input-radio h16">
								<input type="radio" name="radio3" id="radio3_1" checked><label for="radio3_1">Y</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio3" id="radio3_2"><label for="radio3_2">N</label>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">유형</th>
						<td>
							<div class="input-radio h16">
								<input type="radio" name="radio4" id="radio4_1" checked><label for="radio4_1">없음</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio4" id="radio4_2"><label for="radio4_2">협력</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio4" id="radio4_2"><label for="radio4_2">지원</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio4" id="radio4_2"><label for="radio4_2">단독</label>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">조직태그</th>
						<td>
							<div class="form-wrap bs">
								<div class="member-grp">
									<div class="scroll">
										<p class="nodata"><span>관련 조직태그 선택</span></p>
									</div>
								</div>
								<div>
									<button type="button" class="btn md line-type1">태그 선택</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">첨부파일</th>
						<td>
							<div class="form-wrap bs">
								<div class="member-grp">
									<div class="scroll">
										<p class="nodata"><span>첨부 파일 등록(용량 100MB)</span></p>
									</div>
								</div>
								<div>
									<button type="button" class="btn md line-type1">파일첨부</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">신청내용</th>
						<td>
							<textarea name="" id="" placeholder="신규 신청한 경우 기입한 내용이 노출됩니다."></textarea>
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
import basePopup from "@/components/layout/basePopup.vue"
import selectView from "@/components/selectView.vue"
import Datepicker from '@vuepic/vue-datepicker';


export default defineComponent({
  components: {
    basePopup,
		selectView,
		Datepicker,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
		propIsScrollClass: {
      type: String,
      default: '',
    },
  },
  data(){
    return{
      isActive: false,
      error: false,
      showModal: this.propShowModal,
			isScrollClass: this.propIsScrollClass,
      rangeDate: [new Date(),new Date()],
			optionLsit: [
        { value: 'test menu1', label: 'test menu1' },
        { value: 'test hover', label: 'test hover' },
        { value: 'test Selected', label: 'test Selected', disabled: true },
        { value: 'test menu4', label: 'test menu4' },
        { value: 'test menu5', label: 'test menu5' },
      ],
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