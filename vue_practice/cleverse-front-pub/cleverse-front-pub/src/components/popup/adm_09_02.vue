<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="공지사항등록"
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
						<th scope="row"><em>제목</em></th>
						<td>
							<form action="">
								<div class="input-box type3 full">
									<input type="text" required placeholder="제목을 50자 이내로 입력해 주세요." value="업무공유시스템 활성화를 위한 의견 청취 회의">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<th scope="row">내용</th>
						<td>
							<textarea name="" id="" placeholder="공지내용을 1000자 이내로 입력해 주세요.">업무공유시스템 활성화를 위한 의견 청취 회의를 아래와 같이 실시합니다.</textarea>
						</td>
					</tr>
					<tr>
						<th scope="row">배너 이미지</th>
						<td>
							<form action="">
								<div class="atch-box-wrap">
									<input type="file" id="atchfile" @change="handleFileChange">
									<label for="atchfile" class="atch-file">
										<span class="tit">{{file_name}}</span>
										<button type="button" class="btn-primary-medium">초기화</button>
										<span class="btn-atch">이미지첨부</span>
									</label>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<th scope="row"><em>공지대상그룹</em></th>
						<td>
							<div class="form-wrap bs">
								<div class="member-grp noscroll">
									<p title="전략부문 (부문) , 신사업부문(부문), 전략부문 (부문) , 신사업부문(부문)" class="data noscroll">전략부문 (부문) , 신사업부문(부문), 전략부문 (부문) , 신사업부문(부문)</p>
								</div>
								<div>
									<button type="button" class="btn md line-type1">대상선택</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">알림여부</th>
						<td>
							<span class="data">발송완료 (2021.11.15. 14:23:22)</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md">미리보기</button>
			<button type="button" class="btn md">공지알림</button>
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
		file_name: "png, jpg, /  50MB 이하",
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods: {
	onHideModal(){
		this.$emit('popClose');
	},
	handleFileChange(e:any) {
		this.file_name = e.target.files[0].name;
	}
  }
})
</script>