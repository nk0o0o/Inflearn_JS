<template>
  <div class="mass-file-layout">
    <div class="mass-file-cnt">
      <h3>메일 본문의 '대용량 파일 영역'에 표기된<br>인증코드 6자리를 입력해 주세요.</h3>
      <p>Please enter 6 digit verification code shown on 'Large File Area' in the body of the mail.</p>
      <div class="round-box">
        <div class="title">
          <strong>인증번호</strong>(Certification Number)
        </div>
        <form action="">
          <div class="input-box type3">
            <input type="text" required placeholder="인증번호를 입력하세요.">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <div class="error" v-if="error">에러 내용입력</div>
          </div>
        </form>
        <button type="button" class="btn md">다운로드</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';

export default defineComponent({
  components: {
  },
  data () {
    return {
      error: false,
    }
  },
  methods: {
  },
})
</script>