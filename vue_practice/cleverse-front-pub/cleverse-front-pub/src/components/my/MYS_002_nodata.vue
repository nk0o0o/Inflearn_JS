<template>
  <div>
    <div class="task-content">
      <div class="skeleton-content_list">
        <div class="skeleton-content_head">
          <h2 class="tit"># MY TAG</h2>
          <div class="addtag"><button type="button">태그 추가</button></div>
        </div>
        <div class="mytag-list_wrap edit">
          <div class="mytag-list">
            <h3 class="tit ic-1">소속</h3>
            <div class="tag">
              <span class="nodata"># 소속 노드가 없습니다.</span>
            </div>
          </div>
          <div class="mytag-list">
            <h3 class="tit ic-2">직무</h3>
            <div class="tag">
              <span class="nodata"># 직무 태그가 없습니다.</span>
            </div>
          </div>
          <div class="mytag-list">
            <h3 class="tit ic-3">스킬</h3>
            <div class="tag">
              <span class="nodata"># 스킬 태그가 없습니다.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="skeleton-content_head">
        <h2 class="tit">주요 업무 이력</h2>
        <div class="addtag"><button type="button">이력 추가</button></div>
      </div>
      <ul class="mytask-list">
        <li class="nodata">업무 이력을 추가해 주세요</li>
      </ul>
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
      
    };
  },
  methods: {
    
  },
});
</script>