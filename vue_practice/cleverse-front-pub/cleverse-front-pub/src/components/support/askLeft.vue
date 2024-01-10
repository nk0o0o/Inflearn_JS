<template>
  <div class="layout-left">
    <div class="left-navi">
      <h2 class="left-navi-tit">문의하기</h2>
      <ul class="left-navi-list ask">
        <li class="menu-01 active">
          <button type="button" class="group-first-menu">
            <span>문의하기</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            문의하기
            </v-tooltip>
          </button>
        </li>
        <li class="menu-02">
          <button type="button" class="group-first-menu">
            <span>내문의내역</span>
            <v-tooltip
              activator="parent"
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            내문의내역
            </v-tooltip>
          </button>
        </li>
      </ul>
      <button type="button" class="btn-asklist">
        문의내역
         <v-tooltip
            activator="parent"
            anchor='end'
            content-class='end tooltip-w mw-200'
          >
          문의내역
          </v-tooltip>
      </button>
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