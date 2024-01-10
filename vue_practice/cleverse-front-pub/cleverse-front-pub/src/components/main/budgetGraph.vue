<template>
  <span class="graph">
    <em class="line" :style="propStep >= 2 ?`width:${this.percent}%`:`width:0%`"></em>
    <span class="num"><em>{{this.propNumer}}원</em> / {{this.propDenom}}원</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  props:{
    propPercent:{
      type: Number,
      default: 0
    },
    propNumer:{
      type: String,
      default: ''
    },
    propDenom:{
      type: String,
      default: ''
    },
    propStep:{
      type: Number,
      default: 2
    },
  },
  data() {
    return {
      percent: 0
    };
  },
  methods: {
  },
  mounted(){
    this.percent = this.propPercent
  }
});
</script>