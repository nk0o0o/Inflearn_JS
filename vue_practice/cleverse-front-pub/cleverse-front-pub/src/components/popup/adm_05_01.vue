<template>
  <base-popup 
    :propShowModal="showModal"
		:propIsScrollClass="isScrollClass"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="노드생성 승인/반려"
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
						<th scope="row">신청구분</th>
						<td>신규 생성</td>
					</tr>
					<tr>
						<th scope="row">노드명</th>
						<td>Big Data 노드</td>
					</tr>
					<tr>
						<th scope="row">진행기간</th>
						<td>2021. 08. 16 부터 - 2021. 00.00 까지</td>
					</tr>
					<tr>
						<th scope="row">캡틴</th>
						<td>
							<span class="data" v-for="item in captainCheck" :key="item.id">{{item.name}}</span>
						</td>
					</tr>
					<tr>
						<th scope="row">구성원</th>
						<td>
							<span class="data" v-for="item in memberCheck" :key="item.id">{{item.name}}</span>
						</td>
					</tr>
					<tr>
						<th scope="row">정규/비정규</th>
						<td>정규</td>
					</tr>
					<tr>
						<th scope="row">공개구분</th>
						<td>공개</td>
					</tr>
					<tr>
						<th scope="row">노출여부</th>
						<td>노출</td>
					</tr>
					<tr>
						<th scope="row"><em>정규/비정규</em></th>
						<td>
							<div class="input-radio h16">
								<input type="radio" name="radio1" id="radio1_1" checked><label for="radio1_1">없음</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio1" id="radio1_2"><label for="radio1_2">협력</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio1" id="radio1_3"><label for="radio1_3">지원</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio1" id="radio1_4"><label for="radio1_4">단독</label>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">조직태그</th>
						<td>
							<span class="data orgtag" v-for="item in orgTagCheck" :key="item.id">{{item.name}}</span>
						</td>
					</tr>
					<tr>
						<th scope="row">첨부파일</th>
						<td>
							<div class="data atchfile" v-for="item in atchFileCheck" :key="item.id">
								<span class="atchfile-name">{{item.name}}</span> 
								<button type="button">다운로드</button>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">업무내용</th>
						<td>새로운 아이디어로 노드 생성 신청합니다!</td>
					</tr>
					<tr>
						<th scope="row"><em>승인/반려 의견</em></th>
						<td>
							<textarea name="" id="" placeholder="승인/반려 의견을 입력합니다."></textarea>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md line-type1">반려</button>
			<button type="button" class="btn md">승인</button>
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
			captainCheck: [
					{ id: 1, name: '김한화1' + ',' },
					{ id: 2, name: '김한화2' + ',' },
					{ id: 3, name: '김한화3' + ',' },
					{ id: 4, name: '김한화4' + ',' },
			],
			memberCheck: [
					{ id: 1, name: '김한화1' + ',' },
					{ id: 2, name: '김한화2' + ',' },
					{ id: 3, name: '김한화3' + ',' },
					{ id: 4, name: '김한화4' + ',' },
					{ id: 5, name: '김한화5' + ',' },
					{ id: 6, name: '김한화6' + ',' },
					{ id: 7, name: '김한화7' + ',' },
					{ id: 8, name: '김한화8' + ',' },
					{ id: 9, name: '김한화9' + ',' },
					{ id: 10, name: '김한화10' + ',' }
			],
			orgTagCheck: [
					{ id: 1, name: '태그1' + ',' },
					{ id: 2, name: '태그2' + ',' },
					{ id: 3, name: '태그3' + ',' },
					{ id: 4, name: '태그4' + ',' },
					{ id: 5, name: '태그5' + ',' },
					{ id: 6, name: '태그6' + ',' }
			],
			atchFileCheck: [
					{ id: 1, name: '첨부파일명1' },
					{ id: 2, name: '첨부파일명2' },
					{ id: 3, name: '첨부파일명3' },
					{ id: 4, name: '첨부파일명4' },
					{ id: 5, name: '첨부파일명5' },
					{ id: 6, name: '첨부파일명6' }
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