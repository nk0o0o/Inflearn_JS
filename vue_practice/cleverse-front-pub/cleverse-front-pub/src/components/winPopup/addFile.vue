<template>
  <div class="winPop-wrap hcal">
    <h1 class="title">
      대용량 파일 첨부
    </h1>
    <div class="tbl data-type">
			<table>
				<colgroup>
					<col style="width:15%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">파일첨부</th>
						<td>
              <div><p style="height:200px;background:#eee;">첨부파일 영역</p></div>
              <div class="flex jc-sb  mg-t10">
                <div>
                  <p class="msg-imp fc org">대용량 첨부파일은 발송 후 7일이 지나면 자동삭제 됩니다.</p>
                  <p class="msg-imp fc org">단 첨부파일이 100M가 넘을 경우 용량변경요청을 하시면 첨부용량이 원하는 사이즈로 변경됩니다.<br>(단 기간은 하루입니다.)</p>
                </div>
                <button type="button" class="btn sm line-type2 mg-t20">용량변경요청</button>
              </div>
            </td>
					</tr>
				</tbody>
			</table>
		</div>
    <div class="btn-wrap">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">확인</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

  },
  data() {
    return {

    }
  }
})
</script>