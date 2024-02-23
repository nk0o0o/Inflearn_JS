<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <approvalLeft/>
      <div class="layout-contents">
        <iframe 
          src="/approvalWrite.html" 
          class="approvalFrame" 
          name="frame" 
          frameborder='0' 
          framespacing='0' 
          marginheight='0' 
          marginwidth='0' 
          scrolling='yes' 
          vspace='0'>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import approvalLeft from "./approvalLeft.vue"


export default defineComponent({
  components: {
    approvalLeft,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  computed: {

  }
})
</script>