<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="임직원서비스 프로세스 세팅"
    class="ly-pop-type1 lg scroll"
  >
    <template v-slot:body>
      <div class="guide-box gry">
        <p class="list-txt fc dark">
          유형과 단계를 선택 후 적용 버튼을 눌러주세요.<br>
          <span class="fc gray">(프로세스 편집시 TAB을 사용하지 말고 마우스로 클릭하여 편집해 주시기 바랍니다.)</span>
        </p>
      </div>

      <div class="process-set-head">
        <div>
          <input type="text" class="input-box" required value="1단계">
          <button type="button" class="btn-up">위로</button>
          <button type="button" class="btn-down" disabled>아래로</button>
          <button type="button" class="btn sm">적용</button>
        </div>
        <div class="set-btn">
          <button type="button" class="add" title="Step 추가"></button>
          <button type="button" class="bg" title="선택영역 배경색 변경"></button>
          <button type="button" class="row2" title="2단박스로 변경"></button>
          <button type="button" class="row3" title="3단박스로 변경"></button>
          <button type="button" class="del" title="선택한 단계 삭제"></button>
        </div>
      </div>
      
      <div class="process-set-cnt">
        <div class="step-wrap">
          <div class="group">
            <table class="single-type">
              <tbody>
                <tr>
                  <td class="process-title">
                    <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc">
                    <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="process-arrow">&nbsp;</div>
          <div class="group">
            <table class="single-type">
              <tbody>
                <tr>
                  <td class="process-title pick-color">
                    <div contenteditable="true" class="stepRowEdit">Step 02 타이틀</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc">
                    <div contenteditable="true" class="stepRowEdit">해외출장 품의 작성</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="process-arrow">&nbsp;</div>
          <div class="group">
            <table class="multi-type">
              <tbody>
                <tr>
                  <td class="process-title">
                    <div contenteditable="true" class="stepRowEdit">Step 03</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc">
                    <div contenteditable="true" class="stepRowEdit">품의 승인</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc-info">
                    <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="group">
            <table class="multi-type">
              <tbody>
                <tr>
                  <td class="process-title">
                    <div contenteditable="true" class="stepRowEdit">Step 03-1</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc">
                    <div contenteditable="true" class="stepRowEdit">품의 승인</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc-info">
                    <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="group">
            <table class="single-type">
              <tbody>
                <tr>
                  <td class="process-title">
                    <div contenteditable="true" class="stepRowEdit">Step 03-2</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc">
                    <div contenteditable="true" class="stepRowEdit">품의 작성</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="group">
            <table class="single-type">
              <tbody>
                <tr>
                  <td class="process-title">
                    <div contenteditable="true" class="stepRowEdit">전결 권한</div>
                  </td>
                </tr>
                <tr>
                  <td class="process-desc">
                    <div contenteditable="true" class="stepRowEdit">[결재] 본부장(2주일 이하)<br>부문장(2주일 초과)<br>[협조] 인사운영팀장<br>경영기획팀장</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn lg">완료</button>
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
      file: false,
      error: false,
      showModal: this.propShowModal,
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