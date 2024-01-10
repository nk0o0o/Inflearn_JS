<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <askLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <div class="board-common_header">
            <h2>문의하기</h2>
          </div>
          <div class="board-common_header_foot f-14">
            <p class="msg-imp">Cleverse 관련 문의만 남겨주시기 바랍니다.</p>
            <p class="msg-imp">
              <strong class="fc org">기타문의</strong>는 각 시스템별 담당자를 참조하여 주시기 바랍니다.
              <button type="button" class="icon-btn link va-m mg-l10">바로가기</button>
            </p>
            <p class="msg-imp">문의하신 사항은 이메일로 답변되며, <strong class="fc org">내문의내역</strong> 에서도 확인이 가능합니다.</p>
          </div>
          <!-- write -->
          <div class="board-notice_write">
            <div class="board_wrap tbl data-type">
              <table>
                <colgroup>
                  <col style="width:120px;">
                  <col>
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">분류</th>
                    <td>
                      <select-view
                        :propOptionList="optionLsit"
                        :propPlaceholder="'Help & Support'"
                        :propClass="'type3 mg-r10'">
                      </select-view>
                      <select-view
                        :propOptionList="optionLsit"
                        :propPlaceholder="'공통'"
                        :propClass="'type3'">
                      </select-view>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">제목</th>
                    <td>
                      <form action="">
                        <div class="input-box type3 round-type full">
                            <input type="text" required placeholder="제목을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="file-edit">
                      <div class="file-edit-area">파일편집기영역</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">첨부파일</th>
                    <td>
                      <div class="bn_list">
                        <div>
                          <button type="button" class="icon-btn del">항목제거</button>
                          <button type="button" class="icon-btn del">전체 항목제거</button>
                          <button type="button" class="icon-btn doc">전송하기</button>
                        </div>
                        <div>
                          <button type="button" class="icon-btn file">파일추가</button>
                        </div>
                      </div>
                      <div class="file-area">첨부파일영역</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- //write -->
          <!-- btn -->
          <div class="btn-wrap mg-t30">
            <button type="button" class="btn md">저장</button>
          </div>
          <!-- //btn -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import askLeft from "./askLeft.vue"
import selectView from "@/components/selectView.vue";

export default defineComponent({
  components: {
    askLeft,
    selectView,
  },
  data() {
    return {
       optionLsit: [
        { value: '공통', label: '공통' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
    };
  },
  methods: {
  },
  computed: {
  }
})
</script>