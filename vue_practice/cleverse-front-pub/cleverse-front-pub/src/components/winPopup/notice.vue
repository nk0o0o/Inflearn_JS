<template>
  <div class="ly-pop-type1 main-noti">
    <div class="pop-cnt">
      <img :src="require('@/assets/imgs/collaboration/img/cardnews_00.jpg')" alt="공지사항이미지" style="width:600px;height:600px">
      <div class="pop-btm">
        <div class="input-chk">
          <input type="checkbox" name="chk" id="chk1-1"><label for="chk1-1">오늘 하루 이 창을 열지 않음</label>
        </div>
        <button type="button" class="modal__close">닫기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

  },
  data() {
    return {
    }
  }
})
</script>