<template>
  <base-popup 
    :propShowModal="showModal"
		:propIsScrollClass="isScrollClass"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="SMS 쓰기"
    class="ly-pop-type1 md admin"
  >
    <template v-slot:body>
		<div class="tbl sms-wrap">
			<table>
				<colgroup>
					<col style="width:20%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">수신자</th>
						<td>
							<form action="">
								<div class="input-box type1 full">
									<input type="text" required placeholder="내용을 입력해주세요." value="수신5">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<th scope="row">번호</th>
						<td>
							<form action="">
								<div class="input-box type1 full">
									<input type="text" required placeholder="내용을 입력해주세요." value="01012345678">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<td colspan="2" class="tc">
							<button type="button" class="btn sm line-type1">입력</button>
							<button type="button" class="btn sm line-type1">삭제</button>
						</td>
					</tr>
					<tr>
						<th>이름(번호)</th>
						<td>
							<div class="board-select-wrap">
								<div class="board-multi-select">
									<select class="board-select" multiple="multiple">
										<option value="1">수신1(01012345657)</option>
										<option value="2" selected="selected" >수신2(01012345657)</option>
										<option value="3">수신3(01012345657)</option>
										<option value="4">수신401012345657)</option>
									</select>
								</div>
							</div>
							<p class="btn-wrap right"><button type="button" class="btn sm">초기화</button></p>
						</td>
					</tr>
					<tr>
						<th scope="row">제목</th>
						<td>
							<form action="">
								<div class="input-box type1 full">
									<input type="text" required placeholder="내용을 입력해주세요." value="전송테스트">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="sms-form">
								<div class="msgbox">
									<textarea name="" id="" placeholder="808byte 초과 시, 장문 문자로 자동 전환됩니다. (최대 1900Byte) 입력창.. 오른쪽 이모티콘"></textarea>
									<p>97 / 1900Byte</p>
								</div>
								<ul class="icon-box">
									<li v-for="item in lists" :key="item.icon">
										<button type="button" class="txt-btn">{{item.icon}}</button>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">회신번호</th>
						<td>
							<form action="">
								<div class="input-box type1 full">
									<input type="text" required placeholder="내용을 입력해주세요." value="">
									<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
									<div class="error" v-if="error">에러 내용입력</div>
								</div>
							</form>
							<p class="gd-txt">"-"없이 숫자만 입력</p>
						</td>
					</tr>
					<tr>
						<th scope="row">선택사항</th>
						<td>
							<div class="board-chk-warp">
								<div class="input-chk square"><input type="checkbox" name="chk1" id="chk1"><label for="chk1"> 예약 전송</label></div>
							</div>
							<Datepicker
								v-model="date"
								:enableTimePicker="false"
								locale="ko"
								autoApply
							/>
							<label class="select-default">
								<select>
									<option>14</option>
								</select>
							</label> 시
							<label class="select-default">
								<select>
									<option>41</option>
								</select>
							</label> 분
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md line-type1">취소</button>
			<button type="button" class="btn md">보내기</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
import Datepicker from '@vuepic/vue-datepicker';


export default defineComponent({
  components: {
    basePopup,
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
			date: new Date().toString(),
			lists:  [ 
				{ icon: "#" }, { icon: "&" }, { icon: "*" }, { icon: "@" }, { icon: "§" }, { icon: "※" }, { icon: "☆" }, { icon: "★" },
				{ icon: "○" }, { icon: "●" }, { icon: "◎" }, { icon: "◇" }, { icon: "◆" }, { icon: "□" }, { icon: "■" }, { icon: "△" },
				{ icon: "▲" }, { icon: "▽" }, { icon: "▼" }, { icon: "→" }, { icon: "←" }, { icon: "↑" }, { icon: "↓" }, { icon: "↔" },
				{ icon: "〓" }, { icon: "◁" }, { icon: "◀" }, { icon: "▷" }, { icon: "▶" }, { icon: "♤" }, { icon: "♠" }, { icon: "♡" },
				{ icon: "♥" }, { icon: "♧" }, { icon: "♣" }, { icon: "⊙" }, { icon: "◈" }, { icon: "▣" }, { icon: "◐" }, { icon: "◑" },
				{ icon: "▒" }, { icon: "▤" }, { icon: "▥" }, { icon: "▨" }, { icon: "▧" }, { icon: "▦" }, { icon: "▩" }, { icon: "♨" },
				{ icon: "☏" }, { icon: "☎" }, { icon: "☜" }, { icon: "☞" }, { icon: "¶" }, { icon: "†" }, { icon: "‡" }, { icon: "↕" },
				{ icon: "↗" }, { icon: "↙" }, { icon: "↖" }, { icon: "↘" }, { icon: "♭" }, { icon: "♩" }, { icon: "♪" },
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