<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>SMS 쓰기 <span class="tx-warn">업무 외 사용을 자제하여 주십시오. (모니터링 실시 - 개인사용분은 급여공제 됨을 알려드립니다.)</span></h3>
      </div>
  </div>
	<div class="top-util-wrap">
    <div class="right">
        <button type="button" class="btn md">보내기</button>
    </div>
  </div>

  <div class="group-admin_wrap">
		<div class="tab-content sms-wrap"> 
			<table class="tbl">
				<colgroup>
					<col style="width:20%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">제목</th>
						<td>
							<div class="input-box type1">
								<input type="text" placeholder="내용을 입력해주세요." value="전송테스트">
								<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
								<div class="error" v-if="error">에러 내용입력</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">받는 사람</th>
						<td>
							<div class="ip-form">
								<div class="ip-align">
									<div class="input-box type1">
										<p>이 름</p>
										<input type="text" placeholder="내용을 입력해주세요." value="전송테스트">
										<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										<div class="error" v-if="error">에러 내용입력</div>
									</div>
									<div class="input-box type1">
										<p>번 호</p>
										<input type="text" placeholder="내용을 입력해주세요." value="전송테스트">
										<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										<div class="error" v-if="error">에러 내용입력</div>
									</div>
								</div>
								<button type="button" class="btn">입력</button>
							</div>
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
							<p class="btn-wrap right"><button type="button" class="btn sm">삭제</button></p>
						</td>
					</tr>
					<tr>
						<th scope="row">보낼 내용</th>
						<td>
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
							<div class="input-box type1">
								<input type="text" placeholder="내용을 입력해주세요." value="전송테스트">
								<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
								<div class="error" v-if="error">에러 내용입력</div>
							</div>
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

    <div class="group-admin_regist tbl">
      <div class="top-util-wrap">
        <p class="user">최근 발송SMS</p>
      </div>
      <div class="tbl_header">
        <div class="left">
          <div class="num">전체 <b>00</b>개</div>
        </div>
        <div class="right">
          <span class="list-num">목록개수</span>
					<select-view
						:propOptionList="optionLsit1"
						:propClass="'type1'"
						:propCloseOn="true"
						propPlaceholder="10개"
						propValue="10"
					/>
        </div>
      </div>
      <div class="table-wrap">
        <table-lite
					:is-loading="isLoading"
					:columns="columns"
					:rows="rows"
					:total="totalRecordCount"
					:sortable="sortable"
					:messages="messages"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableLite from "vue3-table-lite/ts";
import selectView from "@/components/selectView.vue";
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    TableLite,
		selectView,
		Datepicker,
  },
  data() {
    return {
      error: false,
      isLoading: false,
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
      totalRecordCount: 10,
      columns: [
        {
          label: "보낸 날짜",
          field: "date",
          width: "30%",
          sortable: true,
        },
        {
          label: "제목",
          field: "title",
          width: "",
          sortable: true,
        }
      ],
      rows: [
        {
          date: "2022-05-24 02:46",
          title: "테스트",
        }
      ],
      sortable: {
        order: "id",
        sort: "asc",
      },
      optionLsit1: [
        { value: '10', label: '10개' },
        { value: '20', label: '20개' },
        { value: '30', label: '30개' },
      ],
			date: new Date().toString(),
    }
  },
});
</script>