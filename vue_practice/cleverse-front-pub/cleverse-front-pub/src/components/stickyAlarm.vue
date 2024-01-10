<template>
    <div>
       <div class="sticky-alarm_wrap" :class='{sticky: isSticky}' @scroll='isScroll'>
           <ul class="sticky-alarm_list">
              <li>
                <div>
                  <strong>의견요청</strong>
                  <span>김한화님(의견작성자)이 업무공유 테스크에 의견을 남겼습니다남겼습니다남겼김한화님(의견작성자)이 업무공유 테스크에 의견을 남겼습니다남겼습니다남겼</span>
                </div>
                <button type="button" class="redef-alarm"><span>close</span></button>
              </li>
              <li>
                <div>
                  <strong>공지사항</strong>
                  <span>공지사항 타이틀이 노출됩니다. 최소 1줄 ~ 최대 2줄 노출됩니다. 높이값 변동 있습니다.</span>
                </div>
                <button type="button" class="redef-alarm"><span>close</span></button>
              </li>
              <li>
                <div>
                  <strong>카테고리</strong>
                  <span>알림 내역별 내용 값이 노출됩니다.</span>
                </div>
                <button type="button" class="redef-alarm"><span>close</span></button>
              </li>
              <li>
                <div>
                  <strong>메모</strong>
                  <span>김한화님(받는 사람)에게 메모를 보냈습니다.</span>
                </div>
                <button type="button" class="redef-alarm"><span>close</span></button>
              </li>
              <li>
                <div>
                  <strong>메모</strong>
                  <span>김한화님(받는 사람)에게 메모를 보냈습니다.</span>
                </div>
                <button type="button" class="redef-alarm"><span>close</span></button>
              </li>
           </ul>
           <!-- <button type="button">Scroll</button> -->
       </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
  },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    isScroll(e :any){
      let _scrollY = window.scrollY || window.pageYOffset;
      if(_scrollY >= 83){
        this.isSticky = true;
      }else if(_scrollY <= 5){
        this.isSticky = false;
      }
    },
  },
});
</script>
