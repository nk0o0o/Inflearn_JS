<template>
  <div class="coming-soon-box" :class="propComingTypeClass">
    <div class="coming-soon-header">
      <p class="coming-soon-title" :class="propComingImgClass">Coming Soon</p>
    </div>
    <p class="coming-soon-text" v-html="propComingText"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  props:{
    propComingTypeClass:{
      type: String,
      default: ''
    },
    propComingImgClass:{
      type: String,
      default: ''
    },
    propComingText:{
      type: String,
      default: ''
    }
  },
  data() {
    return { 
      
    };
  },  
  methods: { 
  },
});
</script>