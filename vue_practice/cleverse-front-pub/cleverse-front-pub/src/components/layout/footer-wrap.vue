<template>
   <footer class="gw-footer">
    <div>
      <p class="copyright">©Hanwha. All Right reserved.</p>
      <ul class="info-list">
          <li><a href="">고객센터</a></li>
          <li><a href="" class="f-bold">개인정보 처리방침</a></li>
      </ul>
      <button type="button" class="btn sm line-type2" @click="toggle">계열사 전체보기</button>
      <div class="subsidiary-box" :class="{active: isActive}">
        <div class="subsidiary-box-inner">
          <dl class="subsidiary-list fir">
            <dt>제조/건설</dt>
            <dd>(주)한화</dd>
            <dd>한화케미칼</dd>
            <dd>한화큐셀&amp;첨단소재</dd>
            <dd>한화정밀기계</dd>
            <dd>한화에어로스페이스</dd>
            <dd>한화종합화학</dd>
            <dd>한화에너지</dd>
            <dd>한화파워시스템</dd>
            <dd>한화테크윈</dd>
            <dd>한화토탈</dd>
            <dd>여천NCC</dd>
            <dd>한화솔루션</dd>
            <dd>한화시스템</dd>
            <dd>한화건설</dd>
            <dd>한화컴파운드</dd>
            <dd>한화임팩트</dd>
            <dd>한화디펜스</dd>
            <dd>한화큐셀</dd>
            <dd>한화도시개발</dd>
          </dl>
          <dl class="subsidiary-list sec">
            <dt>금융</dt>
            <dd>한화생명</dd>
            <dd>한화손해보험</dd>
            <dd>한화투자증권</dd>
            <dd>한화자산운용</dd>
            <dd>한화저축은행</dd>
          </dl>
          <dl class="subsidiary-list thi">
            <dt>서비스/레저</dt>
            <dd>한화호텔앤드리조트</dd>
            <dd>한화역사</dd>
            <dd>한화갤러리아</dd>
            <dd>한화이글스</dd>
            <dd class="w100">한화갤러리아타임월드</dd>
            <dd class="w100">한화63시티</dd>
            <dd class="w100">한화시스템/ICT</dd>
          </dl>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    pageInfo: null,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods:{
    toggle(){
      this.isActive = !this.isActive;
    },

  }
})
</script>
