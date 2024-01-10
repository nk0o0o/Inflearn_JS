<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="받은 메모"
    class="ly-pop-type1 admin memo scroll f-14"
  >
    <template v-slot:body>
      <div class="memo-pop-sand_wrap">
        <dl class="memo-pop-sand_to">
          <dt>받는 사람</dt>
          <dd>
            <span>김한화,</span>
            <span>이한화,</span>
            <span>정생명,</span> 
            <span>시스템개발노드,</span> 
            <span>노드클러스터부문명,</span>
            <span>노드 클러스터 부문명이 긴 경우 줄바꿈하고 최대범위까지 노출 한 줄내로 노출하고 이후 노드 클러스터 부문명이 긴 경우 줄바꿈하고 최대범위까지</span>
            <span>김이름,</span> 
            <span>손지현</span>
          </dd>
        </dl>
        <dl class="memo-pop-sand_from">
          <dt>보낸 사람</dt>
          <dd>
            <div class="memo-pop-sand_info">
              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt=" 프로필 이미지"></span>
              <span class="name">김이름</span>
              <span class="time">2021.09.07 오전 11:23</span>
            </div>
            <div class="txt">
              입력한 메모 내용이 표시됩니다.<br>
              받는사람 영역 / 내용영역 모두 필수 입력 항목입니다.<br><br>
              받는사람은 개인/조직 포함 갯수 제한 없습니다.<br>
              내용 영역은 한글기준 1000자 제한합니다. (디자인/개발 협의)<br><br>
              필수 항목 입력 완료 후 메모 보내기 버튼 활성화 됩니다.<br><br>
              링크 삽입 가능합니다.<br>
              <a>https://www.naver.com/</a><br><br>
              받는사람 영역 / 내용영역 모두 필수 입력 항목입니다. 받는사람 영역 / 내용영역 모두 필수 입력 항목입니다.<br>
              입력한 메모 내용이 표시됩니다.<br>
              이전 대화내용은 내용 최하단에 위치하며 스크롤이 있을 경우 스크롤을 해야 보입니다.<br>
              입력한 메모 내용이 표시됩니다.<br>
              이전 대화내용은 내용 최하단에 위치하며 스크롤이 있을 경우 스크롤을 해야 보입니다.
            </div>
          </dd>
        </dl>
        <div class="txt_wrap" :class="[classCase, {'active':selectActive, 'disabled':selectDisabled}]">
          <div class="txt">
            <div class="txt-head">
              <p><span class="tit">받는 사람 :</span> 시스템개발노드, 김생명, 이한화, 윤이름</p>
              <p><span class="tit">보낸 사람 :</span> 박이름<span class="time">ㆍ2021.09.07 오전 11:23</span></p>
            </div>
            입력한 메모 내용이 표시됩니다.<br>
            받는사람 영역 / 내용영역 모두 필수 입력 항목입니다.<br><br>
            받는사람은 개인/조직 포함 갯수 제한 없습니다.<br>
            내용 영역은 한글기준 1000자 제한합니다. (디자인/개발 협의)<br><br>
            필수 항목 입력 완료 후 메모 보내기 버튼 활성화 됩니다.<br><br>
            링크 삽입 가능합니다.<br>
            <a>https://www.naver.com/</a><br><br>
            받는사람 영역 / 내용영역 모두 필수 입력 항목입니다. 받는사람 영역 / 내용영역 모두 필수 입력 항목입니다.<br>
            입력한 메모 내용이 표시됩니다. 
          </div>
          <div class="txt">
            <div class="txt-head">
              <p><span class="tit">받는 사람 :</span> 시스템개발노드, 김생명, 이한화, 윤이름</p>
              <p><span class="tit">보낸 사람 :</span> 박이름<span class="time">ㆍ2021.09.07 오전 11:23</span></p>
            </div>
            입력한 메모 내용이 표시됩니다.<br>
            받는사람 영역 / 내용영역 모두 필수 입력 항목입니다.<br><br>
            받는사람은 개인/조직 포함 갯수 제한 없습니다.<br>
            내용 영역은 한글기준 1000자 제한합니다. (디자인/개발 협의)<br><br>
            필수 항목 입력 완료 후 메모 보내기 버튼 활성화 됩니다.<br><br>
            링크 삽입 가능합니다.<br>
            <a>https://www.naver.com/</a><br><br>
            받는사람 영역 / 내용영역 모두 필수 입력 항목입니다. 받는사람 영역 / 내용영역 모두 필수 입력 항목입니다.<br>
            입력한 메모 내용이 표시됩니다. 
          </div>
        </div>
        <button type="button" class="memo-pop-sand_more_bn" @click="clickSelect">더보기</button>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn lg">답장하기</button>
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
    propClass: {
        type: String,
        default: '',
    },
  },
  data(){
    return{
      isActive: false,
      showModal: this.propShowModal,
      selectActive: false,
      selectDisabled: this.propSelectDisabled,
      classCase: this.propClass,
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
    clickSelect(){
      this.selectActive = !this.selectActive
    },
  }
})
</script>