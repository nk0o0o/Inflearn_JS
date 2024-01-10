<template>
  <div class="dropdown-type2 tooltip text">
    <dropdown-menu2
      :propisSlotMode="true"
      :propItem="dropItem2"
      :propClass="'dropdown-type2-list type3'"
      propLocation="bottom start"
    >
      <template v-slot:head>
        <span class="profile">
          <span class="img sit-03 no-state"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
          <span class="pos"><em>김한화</em> 차장</span>
          <span class="dates">2021.01.31 10:11</span>
        </span>
      </template>
    </dropdown-menu2>
  </div> 
  <div class="board-reply_writer">
    <div class="pass_field">
      <form action="">
        <label for="writerPass">비밀번호</label>
        <div class="input-box type3">
          <input type="password" required placeholder="비밀번호를 입력해주세요." id="writerPass" v-model="passWriting">
          <button type="reset" class="input-txt-del readonly" @click="passWriting = ''"><span class="blind">입력 삭제</span></button>
          <div class="error" v-if="error">에러 내용입력</div>
        </div>
      </form>
    </div>
    <div class="bn_field">
      <button type="button" class="btn md" :disabled="passWriting.length == ''">확인</button>
    </div>
    <div class="bn_field">
      <button type="button" class="btn md line-type1">취소</button>
    </div>
  </div>
  <div class="bn_list">
    <button type="button" class="bn_del"><span class="blind">삭제</span></button>
    <button type="button" class="bn_edit"><span class="blind">수정</span></button>
  </div>
  <p class="txt"><span class="to">to 익명A</span> 내용영역입니다. 내용영역입니다.</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"


export default defineComponent({
  components: {
    dropdownMenu2,
  },
  data() {
    return {
      passWriting: '',
      isActive: false,
      isFavor: false,
      isFocus: false,
      dropSelectItem:{
        itemId: 'selected1'
      },
      selectText:'파일첨부',
      dropItem2: {
        title: `
          <div class="tooltip-member">
            <div>
              <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
              <p><b>김한화</b> <span class="pos">직위/직책</span></p>
            </div>
            <p class="cp">회사명 <span></span> 소속조직명</p>
            <p class="phone">010-1234-2336</p>
            <p class="email">mail@hanwha.com</p>
          </div>
        `,
      },
    };
  },
  methods: {
    selectValue(val:any){
      this.dropSelectItem.itemId = val.selected
    },
  },
  computed: {
  }
})
</script>