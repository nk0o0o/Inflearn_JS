<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="동호회 개설 신청"
    class="ly-pop-type1 lg"
  >
    <template v-slot:body>
      <p class="fc gray ta-r mg-b10"><i class="vital">*</i> 표시는 필수 입력항목입니다.</p>
      <div class="tbl data-type">
        <table>
          <colgroup>
            <col style="width:26%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">동호회 명<i class="vital">*</i></th>
              <td>
                <form action="">
                  <div class="input-box type3 full byte">
                    <input type="text" required placeholder="입력하세요.">
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                    <span class="num"><i>0</i>/50</span>
                  </div>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="row">동호회 종류<i class="vital">*</i></th>
              <td>
                <div class="input-radio h16">
                  <input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">공식</label>
                </div>
                <div class="input-radio h16">
                  <input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">비공식</label>
                </div>
                <p class="fc gray mg-t10">
                  공식 동호회는 회비 운영이 필요한 동호회로 별도 개설요청이 필요합니다.<br>비공식 동호회는 제한없이 바로 개설 가능합니다.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">공개 여부<i class="vital">*</i></th>
              <td>
                <div class="input-radio h16">
                  <input type="radio" name="radio2" id="radio2-1"><label for="radio2-1">사내공개</label>
                </div>
                <div class="input-radio h16">
                  <input type="radio" name="radio2" id="radio2-2"><label for="radio2-2">비공개</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">운영회장<i class="vital">*</i></th>
              <td>김한화 차장/디지털워크그룹</td>
            </tr>
            <tr>
              <th scope="row">운영자<i class="vital">*</i><button type="button" class="btn-add">운영자 추가</button></th>
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
              <th scope="row">동호회 소개글<i class="vital">*</i></th>
              <td>
                <form action="">
                  <div class="input-box type3 full byte">
                    <input type="text" required placeholder="입력하세요." value="입력하세요.">
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                    <span class="num"><i>0</i>/100</span>
                  </div>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="row">개설 취지</th>
              <td>
                <textarea name="" id=""></textarea>
              </td>
            </tr>
            <tr>
              <th scope="row">동호회 썸네일</th>
              <td>
                <form action="">
                  <div class="atch-box-wrap">
                    <input type="file" id="atchfile" @change="handleFileChange">
                    <label for="atchfile" class="atch-file">
                      <p class="tit">
                        <span class="file-name" v-if="file">
                          {{file_name}}
                          <button type="button" class="input-txt-del" @click="del" v-if="file">삭제</button>
                        </span>
                      </p>
                      <span class="btn md line-type1">파일 첨부</span>
                    </label>
                  </div>
                </form> 
                <p class="fc org mg-t5">* 사이즈 : 580px x 360px / 용량 : 500kbps 미만 (jpg 파일만 등록해주세요!)</p>
              </td>
            </tr>
            <tr>
              <th scope="row">탑 배너 이미지</th>
              <td>
                <form action="">
                  <div class="atch-box-wrap">
                    <input type="file" id="atchfile" @change="handleFileChange">
                    <label for="atchfile" class="atch-file">
                      <p class="tit">
                        <span class="file-name" v-if="file">
                          {{file_name}}
                          <button type="button" class="input-txt-del" @click="del" v-if="file">삭제</button>
                        </span>
                      </p>
                      <span class="btn md line-type1">파일 첨부</span>
                    </label>
                  </div>
                </form>
                <p class="fc org mg-t5">* 사이즈 : 1800px x 540px / 용량 : 500kbps 미만 (jpg 파일만 등록해주세요!)</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap pd-t20">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">신청</button>
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
      optionLsit: [
        { value: '이름', label: '이름' },
        { value: '아이디', label: '아이디' },
        { value: '사번', label: '사번' },
        { value: '직책', label: '직책' },
        { value: '직무', label: '직무' },
      ],
      file_name: '',
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
    handleFileChange(e:any) {
      this.file_name = e.target.files[0].name;
      this.file = true;
    },
    del(){
      this.file = false;
    }
  }
})
</script>