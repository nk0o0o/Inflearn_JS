<template>
	<div class="inner">
		<div class="sect-header">
			<div class="left">
				<h3>회사별 설정</h3>
			</div>
		</div>

		<div class="tbl">
      <div class="tbl_header">
        <div class="classification">
          <select-view
            :propOptionList="optionList"
            :propClass="'type1'"
            :propCloseOn="true"
            propPlaceholder="이글오피스운영"
            propValue="이글오피스운영"
          />
          <button type="button" class="btn sm line-type1">저장</button>
          <button type="button" class="btn sm line-type1">삭제</button>
        </div>
      </div>

      <div class="tbl">
        <table>
          <colgroup>
            <col style="width:20%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
          <tr>
              <th scope="row">회사게시판 초기화면 설정</th>
              <td>
                <label class="select-default">
                  <select>
                    <option>최근 게시글 또는 특정 게시판의 목록 표시</option>
                    <option>옵션명</option>
                    <option>옵션명</option>
                  </select>
                </label>
              </td>
          </tr>
          <tr>
              <th scope="row">게시판 트리 영역</th>
              <td></td>
          </tr>
          <tr>
              <th scope="row">첫번째 레벨 게시판 펼쳐 보기</th>
              <td>
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_1">
                  <label for="radCont1_1">사용</label>
                </div>
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_2" checked>
                  <label for="radCont1_2">사용안함</label>
                </div>
              </td>
          </tr>
          <tr>
              <th scope="row">펼칠 게시판 선택</th>
              <td>
                <form action="">
                  <div class="input-box type1">
                    <input type="text" required placeholder="">
                  </div>
                  <button type="button" class="btn md line-type2">추가</button>
                  <button type="button" class="btn md line-type2">삭제</button>
                </form>
              </td>
          </tr>
          <tr>
              <th scope="row">최근 게시글 영역</th>
              <td></td>
          </tr>
          <tr>
              <th scope="row">목록 형식</th>
              <td>
                
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_3">
                  <label for="radCont1_3">모든 게시판(회사)에 대한 최근 게시글 목록 표시</label>
                </div>
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_4">
                  <label for="radCont1_4">펼친 게시판의 리스트를 최근 게시글 영역에 표시(첫번째 레벨 펼쳐보기가 사용이거나 선택된 게시판이 없을 경우 최신 게시글 목록 표시)</label>
                </div>
              </td>
          </tr>
          </tbody>
        </table>
      </div>
				
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import selectView from "@/components/selectView.vue";

export default defineComponent({
  components: {
    selectView
  },
	data() {
    return {
      optionList: [
        { value: '이글오피스운영', label: '이글오피스운영' },
        { value: '옵선명', label: '옵선명' },
        { value: '옵선명', label: '옵선명' },
      ],
    }
	},
})
</script>
