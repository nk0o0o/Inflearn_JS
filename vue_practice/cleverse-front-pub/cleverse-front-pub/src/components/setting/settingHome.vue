<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <settingLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>홈화면 설정</h2>
          </div>
          <!-- //header -->
          <!-- notice info -->
          <div class="setting-wrap">
            <div class="home-setting_wrap">
              <p class="tit">섹션 정렬 설정</p>
              <p class="notice">※ 아래 리스트 이동을 통해 홈화면에 노출되는 섹션 순서를 변경할 수 있습니다.</p>

              <div class="home-setting_list">
                <draggable
                  class="list"
                  tag="ul"
                  handle=".handle"
                  v-model="list"
                  @start="isDragging = true"
                  @end="checkMove"
                >
                  <template #item="{ element }">
                    <li>
                      <i class="handle"></i>
                      <em>{{element.title}}</em>
                    </li>
                  </template>
                </draggable>
              </div>
            </div>
              

            <div class="setting-foot">
              <button type="button" class="btn lg line-type2">취소</button>
              <button type="button" class="btn lg">저장</button>
            </div>
          </div>
          <!-- //notice info -->
        </div>


      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import settingLeft from "./settingLeft.vue"
import draggable from "vuedraggable";


export default defineComponent({
  components: {
    settingLeft,
    draggable,
  },
  data() {
    return {
      currentTab: 0,
      tabsType: ['인사팀', '인사운영팀(ICT)'],
      list: [
        { title: 'Task' },
        { title: 'Sche' },
        { title: 'Info' },
        { title: 'My' },
        { title: 'Team' },
      ],
    };
  },
  methods: {

  },
})
</script>