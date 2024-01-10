<template>
  <div class='layout-left'>
    <div class='left-navi'>
      <h2 class='left-navi-tit'>환경 설정</h2>
      <div class="left-navi-btn_pass">
        <button type="button" class="btn md">비밀번호변경</button>
      </div>
      <ul class='left-navi-list'>
        <li class='indiv-info'>
          <button type='button' class='group-first-menu no-dep'><span>개인정보</span></button>
        </li>
        <li class='elect-payment active'>
          <button type='button' class='group-first-menu'>
            <span>전자결재</span>
          </button>
          <ul class='dep2'>
            <li>
              <button type='button' class='single-menu'><span>기본설정</span></button>
            </li>
            <li>
              <button type='button' class='single-menu'><span>부재설정</span></button>
            </li>
          </ul>
        </li>
        <li class='schedule'>
          <button type='button' class='group-first-menu'><span>일정</span></button>
        </li>
        <li class='etc active'>
          <button type='button' class='group-first-menu'><span>기타</span></button>
          <ul class='dep2'>
            <li>
              <button type='button' class='single-menu'><span>알림설정</span></button>
            </li>
            <li>
              <button type='button' class='single-menu'><span>홈화면 설정</span></button>
            </li>
            <li>
              <button type='button' class='single-menu'><span>모바일 초기화</span></button>
            </li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>
