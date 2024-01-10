<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="임직원 서비스 내용 편집"
    class="ly-pop-type1 lg"
  >
    <template v-slot:body>
      <div class="guide-box gry">
        <p class="tit">작성팁</p>
        <dl class="edit-tip">
          <dt>프로세스 적용</dt>  
          <dd>사내 규정/프로세스 등 단계별 전차 소개가 필요한 경우 도식화하여 등록 할 수 있습니다.</dd>
          <dt>타이틀 적용</dt> 
          <dd>규정 및 프로세스 타이틀을 강조할 수 있습니다.</dd>
          <dt>들여쓰기 적용</dt> 
          <dd>하위 목록을 인지하기 쉽게 정렬 할 수 있습니다.</dd>
        </dl>
        <div class="msg-imp mg-t10 f-13">제공되는 에디터의 가로폭은 상세화면에서 제공되는 컨텐츠의 가로폭과 일치합니다.<br>
          <span class="fc org">현재 제공되는 에디터에 가로폭에 따라 컨텐츠를 작성해 주세요.</span>
        </div>
      </div>

      <div class="editor-wrap">
        <div style="background: #ebebeb;line-height:220px;text-align:center;">에디터 영역</div>
      </div>

      <div class="tbl data-type">
        <table>
          <colgroup>
            <col style="width:18%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">링크등록</th>
              <td class="flex-col-gap">
                <div class="mg-b15 fc gray">
                  ※ 서비스 상세페이지에 제공될 링크 버튼(Max 3개 제공)이며,<br>
                  <span class="fc org mg-l15">체크한 항목의 경우 임직원서비스 메인에 링크가 노출됩니다.</span>
                </div>
                <div class="flex space">
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'메인화면 노출여부'"
                      :propClass="'type3 w150'"
                      >
                    </select-view>
                  </div>
                  <div class="input-box type3 w150">
                    <input type="text" required placeholder="" value="복지몰 사이트">
                  </div>
                  <div class="input-box type3 flex-1">
                    <input type="text" required placeholder="" value="http://hsnc.ezwel.com">
                  </div>
                </div>
                <div class="flex space">
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'메인화면 노출여부'"
                      :propClass="'type3 w150'"
                      :propDisabled="true"
                      >
                    </select-view>
                  </div>
                  <div class="input-box type3 w150">
                    <input type="text" required placeholder="" value="나의 휴가 조회">
                  </div>
                  <div class="input-box type3 flex-1">
                    <input type="text" required placeholder="" value="http://hsnc.ezwel.com">
                  </div>
                </div>
                <div class="flex space">
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'노출'"
                      :propClass="'type3 w150'"
                      >
                    </select-view>
                  </div>
                  <div class="input-box type3 w150">
                    <input type="text" required placeholder="" value="">
                  </div>
                  <div class="input-box type3 flex-1">
                    <input type="text" required placeholder="" value="">
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">업무담당자<button type="button" class="btn-add">운영자 추가</button></th>
              <td>
                <div class="box-list-del">
                  <div>
                    <span>김한화 차장</span>
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  </div>
                  <div>
                    <span>박한화 차장</span>
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">시스템담당자<button type="button" class="btn-add">운영자 추가</button></th>
              <td>
                <div class="box-list-del">
                  
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">첨부</th>
              <td>
                <div class="flex">
                  <button type="button" class="icon-btn file">파일추가</button>
                  <button type="button" class="icon-btn del">항목제거</button>
                </div>
                <div class="file-area">첨부파일영역</div>
              </td>
            </tr>
            <tr>
              <th scope="row">FAQ</th>
              <td class="faq-register">
                <div class="flex jc-sb">
                  <div class="msg-imp">
                    항목 추가 버튼을 클릭 하시면 FAQ 항목을 추가하실 수 있습니다.
                  </div>
                  <button type="button" class="btn sm">항목추가</button>
                </div>
                <div>
                  <p class="case-q">질문등록</p>
                  <div class="input-box type3 full">
                    <input type="text" required placeholder="">
                  </div>
                </div>
                <div>
                  <p class="case-a">답변등록</p>
                  <textarea name="" id=""></textarea>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">저장</button>
		</div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    basePopup,
    selectView,
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
      optionLsit: [
        { value: '메인화면', label: '메인화면' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
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