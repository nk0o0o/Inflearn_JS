<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="전자결재 부재설정"
    class="ly-pop-type1 md scroll"
  >
    <template v-slot:body>
      <div class="round-box">
        <p class="flex jc">지정된 부재설정이 존재하지 않습니다.</p>
      </div>
      <div class="tbl data-type inp-round-type mg-t15">
        <table>
          <colgroup>
            <col style="width:22%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">사용여부</th>
              <td>
                <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">사용하기</label></div>
                <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">사용하지 않기</label></div>
              </td>
            </tr>
            <tr>
              <th scope="row">대결자</th>
              <td class="flex space">
                <span>김한화 (디지털워크그룹)</span>
                <button type="button" class="btn sm2 line-type2 round-type">대결자 찾기</button>
              </td>
            </tr>
            <tr>
              <th scope="row">부재기간</th>
              <td>
                <div class="flex space">
                  <div class="date w-auto w130">
                    <Datepicker
                      v-model="date"
                      :format="format"
                      @update:modelValue="onUpdateDate"
                      :enableTimePicker="false"
                      locale="ko"
                      cancelText="취소"
                      selectText="선택"
                    />
                  </div>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'00'"
                    :propClass='`type3 w60`'
                    >
                  </select-view>
                  <span>시</span>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'00'"
                    :propClass='`type3 w60`'
                    >
                  </select-view>
                  <span>분 부터</span>
                </div>
                <div class="flex space mg-t10">
                  <div class="date w-auto w130">
                    <Datepicker
                      v-model="date2"
                      :format="format"
                      @update:modelValue="onUpdateDate"
                      :enableTimePicker="false"
                      locale="ko"
                      cancelText="취소"
                      selectText="선택"
                    />
                  </div>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'00'"
                    :propClass='`type3 w60`'
                    >
                  </select-view>
                  <span>시</span>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'00'"
                    :propClass='`type3 w60`'
                    >
                  </select-view>
                  <span>분 까지 총</span>
                  <div class="input-box type3 w60">
                    <input type="text" required>
                  </div>
                  <span>일</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">대결 알림 수신</th>
              <td>
                <div class="input-radio h16"><input type="radio" name="radio2" id="radio2-1"><label for="radio2-1">메일</label></div>
                <div class="input-radio h16"><input type="radio" name="radio2" id="radio2-2"><label for="radio2-2">수신거부</label></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title sub">결재할 문서 내보내기</div>
      <div class="tbl data-type inp-round-type">
        <table>
          <colgroup>
            <col style="width:22%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">결재할 문서<br>대결자 위임</th>
              <td>
                <button type="button" class="btn sm2 line-type2 round-type">결재할 문서 대결자 위임</button>
                <p class="msg-imp mg-t10">대결자가 지정이 되어있고 부재 기간이 유효할 경우에만 가능합니다.</p>
                <p class="msg-imp">현재 결재할 문서 리스트에 있는 문서가 사라지고, 대결자의 결재할 문서 리스트에 보입니다.</p>
                <p class="msg-imp">결재 문서가 많을 경우 시간이 걸립니다.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title sub">결재할 문서 가져오기</div>
      <div class="tbl data-type inp-round-type">
        <table>
          <colgroup>
            <col style="width:22%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">위임된 결재할<br>문서 가져오기</th>
              <td>
                <button type="button" class="btn sm2 line-type2 round-type">위임된 결재할 문서 가져오기</button>
                <p class="msg-imp mg-t10">대결자에게 문서를 위임하였을 경우에만 가능합니다.</p>
                <p class="msg-imp">대결자가 아직 결재를 안하였거나, 보류된 문서를 다시 결재할 문서 리스트로 가져옵니다.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btn-wrap mg-t20">
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
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    basePopup,
    selectView,
    Datepicker
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
        { value: '00', label: '00' },
        { value: '01', label: '01' },
        { value: '02', label: '02' },
        { value: '03', label: '03' },
        { value: '04', label: '04' },
        { value: '05', label: '05' },
      ],
      date: new Date().toString(),
      date2: new Date().toString(),
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
    format(date:any) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${year}.${month}.${day}`;
    },
  }
})
</script>