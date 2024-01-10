<template>
  <div>
    <dl class="ttsearch-popularity_list">
      <dt>인기 검색어</dt>
      <dd>
        <ul>
          <li v-for="(item, index) in searchs" :key="index">{{item}}</li>
        </ul>
      </dd>
    </dl>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
    },
    data() {
      return {
        searchs: [
          '# 구독솔루션(건강)',
          '# 시스템개발',
          '# 키워드글자수열자까지보임',
          '# healthcare',
          '# 한화',
          '# 키워드글자수열자까지보임',
          '# 2022디렉션',
          '# 한화생명프로젝트',
          '# 키워드글자수열자까지보임',
          '# 키워드글자수열자까지',
        ]
      };
    },
    methods: {
    },
});
</script>