<template>
  <div class="guide-step__wrap">
    
    <div class="guide-step__nav">
      <div class="guide-step__nav__inner">
        <h2 class="logo"><img :src="require('@/assets/imgs/guide/img_stepguide_logo.png')" alt="Cleverse"></h2>
        <div class="main-menu"><img :src="require('@/assets/imgs/guide/img_stepguide_menu.png')" alt="main menu"></div>
        <div class="right-menu"><img :src="require('@/assets/imgs/guide/img_stepguide_rightmenu.png')" alt="right menu"></div>
      </div>
    </div>

    <div class="guide-step__content">
      <div class="cont"><img :src="require('@/assets/imgs/guide/img_stepguide_content.png')" alt="content"></div>
      <div class="quick-menu"><img :src="require('@/assets/imgs/guide/img_stepguide_quickmenu.png')" alt="quick menu"></div>
      <div class="guide-step__next step05">
        <img :src="require('@/assets/imgs/guide/img_guidestep_next_05.png')" alt="next">
        <button type="button" class="bn-prev"><i class="blind">이전</i></button>
        <button type="button" class="bn-start"><i class="blind">시작하기</i></button>
      </div>
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
    
    }
  },
  methods: {
    
  },
  computed: {

  }
})
</script>