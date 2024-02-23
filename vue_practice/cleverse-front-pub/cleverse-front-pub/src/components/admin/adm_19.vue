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
