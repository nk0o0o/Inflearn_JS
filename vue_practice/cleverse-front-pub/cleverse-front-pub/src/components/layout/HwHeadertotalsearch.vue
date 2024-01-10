<template>
  <div class="header-ttsearch_content">
    <div class="header-ttsearch_inner">
      <form action="">
        <div class="header-ttsearch">
          <input type="text" required placeholder="검색어를 입력하세요.">
          <button type="reset" class="input-txt-del">입력 삭제</button>
          <button type="button" class="btn_search">검색</button>
          <div class="list">
              <ttSearchhint/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ttSearchhint from '@/components/ttSearchhint.vue';

export default defineComponent({
  components: {
    //ttSearchList
    ttSearchhint,
  },
  data() {
    return {
    }
  },
  methods: {
      
  },
});
</script>
