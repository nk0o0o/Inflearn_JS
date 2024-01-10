<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="정렬 설정"
    class="ly-pop-type1 sm scroll"
  >
    <template v-slot:body>
      <div class="ta-r mg-b10">
        <button type="button" class="ico-reset">설정 초기화</button>
      </div>
      <div class="tbl data-type inp-round-type">
        <table>
          <colgroup>
            <col style="width:22%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">결재함</th>
              <td>
                <div class="flex jc-sb">
                  <span>결재할문서</span>
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'받은시간'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                    <select-view
                      :propOptionList="optionLsit2"
                      :propPlaceholder="'내림차순'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                  </div>
                </div>
                <div class="flex jc-sb mg-t10">
                  <span>일괄결재함</span>
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'받은시간'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                    <select-view
                      :propOptionList="optionLsit2"
                      :propPlaceholder="'내림차순'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                  </div>
                </div>
                <div class="flex jc-sb mg-t10">
                  <span>결재진행문서</span>
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'받은시간'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                    <select-view
                      :propOptionList="optionLsit2"
                      :propPlaceholder="'내림차순'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                  </div>
                </div>
                <div class="flex jc-sb mg-t10">
                  <span>결재예정문서</span>
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'받은시간'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                    <select-view
                      :propOptionList="optionLsit2"
                      :propPlaceholder="'내림차순'"
                      :propClass="'type3 h40'"
                      >
                    </select-view>
                  </div>
                </div>
                <div class="flex jc-sb mg-t10">
                  <span>참조문서</span>
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'받은시간'"
                      :propClass="'type3 h40'"
                      openDirection="top"
                      >
                    </select-view>
                    <select-view
                      :propOptionList="optionLsit2"
                      :propPlaceholder="'내림차순'"
                      :propClass="'type3 h40'"
                      openDirection="top"
                      >
                    </select-view>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">완료함</th>
              <td>
                <div class="flex jc-sb">
                  <span>승인문서</span>
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'받은시간'"
                      :propClass="'type3 h40'"
                      openDirection="top"
                      >
                    </select-view>
                    <select-view
                      :propOptionList="optionLsit2"
                      :propPlaceholder="'내림차순'"
                      :propClass="'type3 h40'"
                      openDirection="top"
                      >
                    </select-view>
                  </div>
                </div>
                <div class="flex jc-sb mg-t10">
                  <span>수신문서</span>
                  <div>
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'받은시간'"
                      :propClass="'type3 h40'"
                      openDirection="top"
                      >
                    </select-view>
                    <select-view
                      :propOptionList="optionLsit2"
                      :propPlaceholder="'내림차순'"
                      :propClass="'type3 h40'"
                      openDirection="top"
                      >
                    </select-view>
                  </div>
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
    selectView
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
        { value: '받은시간', label: '받은시간' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
       optionLsit2: [
        { value: '내림차순', label: '내림차순' },
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