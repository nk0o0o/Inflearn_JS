<template>
  <div class="dropdown-type2 tooltip text">
    <dropdown-menu2
      :propisSlotMode="true"
      :propItem="dropItem2"
      :propLocation="'bottom start'"
      :propClass="'dropdown-type2-list type3'"
    >
      <template v-slot:head>
        <span class="profile">
          <span class="img sit-02 no-state"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
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
  <div class="board-reply_write" :class="{focus: isFocus}" v-show="isActive">
    <span class="reply-to">김한화님에게 답변</span>
    <!-- <div class="input-chk square"><input type="checkbox" name="chk" id="chk12-1"><label for="chk12-1">김한화님에게 답변</label></div> -->
    <span class="len"><b>11</b>/1000</span>
    <!-- <textarea name="" id="" class="txt-area" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false"></textarea> -->
    <div contenteditable="true" class="txt-area" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false">
      내용영역입니다. 내용영역입니다.
    </div>
    <div class="foot">
      <div class="dropdown-type1 add-file">
        <dropdown-menu3
          :propisSlotMode="false"
          :propItem="dropItem"
          :propSelectText="selectText"
          :propClass="'task-log'"
          :propDropSelectItem="dropSelectItem.itemId"
          @selected="selectValue"
          :propLocation="'end top'"
        />
      </div>
      <div>
        <button type="button" class="bn_cancel">취소</button>
        <button type="button" class="bn_regit">수정</button>
      </div>
    </div>
  </div>
  <div class="foot">
    <!-- <span class="favor" @click="isFavor = !isFavor" :class="{active: isFavor}">7</span> -->
    <button type="button" class="bn_reply" @click="isActive = !isActive" :class="{active: isActive}">답변하기</button>
  </div>
  <div class="board-reply_write" :class="{focus: isFocus}" v-show="isActive">
    <span class="reply-to">김한화님에게 답변</span>
    <!-- <div class="input-chk square"><input type="checkbox" name="chk" id="chk12-1"><label for="chk12-1">김한화님에게 답변</label></div> -->
    <span class="len"><b>11</b>/1000</span>
    <!-- <textarea name="" id="" class="txt-area" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false"></textarea> -->
    <div contenteditable="true" class="txt-area" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false">
      내용내용
    </div>
    <div class="foot">
      <div class="dropdown-type1 add-file">
        <dropdown-menu3
          :propisSlotMode="false"
          :propItem="dropItem"
          :propSelectText="selectText"
          :propClass="'task-log'"
          :propDropSelectItem="dropSelectItem.itemId"
          @selected="selectValue"
          :propLocation="'end top'"
        />
      </div>
      <!-- <div>
        <button type="button" class="bn_file">파일첨부</button>
      </div> -->
      <div>
        <button type="button" class="bn_cancel">취소</button>
        <button type="button" class="bn_regit">저장</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

export default defineComponent({
  components: {
    dropdownMenu2,
    dropdownMenu3,
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
      dropItem: [
        { title: '내 PC에서 선택', itemId: 'selected1'},
        { title: '그룹 파일함에서 선택', itemId: 'selected2'},
      ],
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