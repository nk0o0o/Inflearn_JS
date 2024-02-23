<template>
  <!-- <div class="profile">
    <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
    <span class="pos"><em>김한화</em> 차장</span>
    <span class="dates">2021.01.31 10:11</span>
  </div> -->

  <div class="dropdown-type2 tooltip text">
    <dropdown-menu2
      :propisSlotMode="true"
      :propItem="dropItem2"
      :propClass="'dropdown-type2-list type3'"
      propLocation="bottom start"
    >
      <template v-slot:head>
        <span class="profile off">
          <span class="img no-state"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
          <span class="pos"><em>김한화</em> 차장</span>
          <span class="dates">2021.01.31 10:11</span>
        </span>
      </template>
    </dropdown-menu2>
  </div>

  <div class="bn_list">
    <button type="button" class="bn_del"><span class="blind">삭제</span></button>
    <button type="button" class="bn_edit"><span class="blind">수정</span></button>
  </div>
  <p class="txt"><span class="to">to 김주희</span> 내용영역입니다. 내용영역입니다.</p>
  <div class="foot">
    <!-- <span class="favor" @click="isFavor = !isFavor" :class="{active: isFavor}">7</span> -->
    <button type="button" class="bn_reply" @click="isActive = !isActive" :class="{active: isActive}">답변하기</button>
  </div>
  <div class="board-reply_write" :class="{focus: isFocus}" v-show="isActive">
    <span class="reply-to">김한화님에게 답변</span>
    <!-- <div class="input-chk square"><input type="checkbox" name="chk" id="chk11-1"><label for="chk11-1">김한화님에게 답변</label></div> -->
    <span class="len"><b>11</b>/1000</span>
    <!-- <textarea name="" id="" class="txt-area" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false"></textarea> -->
    <div contenteditable="true" class="txt-area" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false">
      내용내용 윤영귀
    </div>
    <ul class="file_list">
      <li>
        <span class="ico-file pdf txt">한화생명_ppt파일_첨부시이렇게_보여집니다.pptx</span>
        <span class="bn_del">
          <button type="button"><span class="blind">삭제</span></button>
        </span>
      </li>
    </ul>
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