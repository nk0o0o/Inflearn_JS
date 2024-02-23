<template>
  <div class="layout-left">
    <div class="left-navi external">
      <h2 class="left-navi-tit">대외문서 관리</h2>
      <ul class="left-navi-list">
        <li class="menu-01 active">
          <button type="button" class="group-first-menu">
            <span>대외발신</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            대외발신
            </v-tooltip>
          </button>
          <ul class="dep2">
            <li>
              <button type="button" class="single-menu">
                <span>진행중문서<em>10</em></span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                진행중문서
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>완료된문서<em>275</em></span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                완료된문서 
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type="button" class="single-menu">
                <span>반려된문서<em>0</em></span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                반려된문서 
                </v-tooltip>
              </button>
            </li>
          </ul>
        </li>
        <li class="menu-02 active">
          <button type="button" class="group-first-menu">
            <span>대장관리</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            대장관리
            </v-tooltip>
          </button>
          <ul class="dep2">
            <li>
              <button type="button" class="single-menu">
                <span>대외발신함<em>203</em></span>
                <v-tooltip
                  activator="parent"
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                대외발신함
                </v-tooltip>
              </button>
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
  components: {
  },
  data() {
    return {
      isActive: true,

    }
  },
  methods:{
   
  },
})
</script>