<template>
  <section class="table">

    <h1> pagination type 1</h1>
    <Paging
      v-model="page" 
      :records="500" 
      :per-page="25" 
      :options="{hideCount: true}" 
      @paginate="myCallback"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    Paging,
  },
  data() {
    return {
      page: 2,
    }
  },
});
</script>
<style lang="css" scoped>
h1 {font-size: 30px; color: #000}
pre + h1 { margin-top: 50px; }
h1 ~ h1 {margin-top: 50px;}
pre{white-space: pre;font-size: 14px;}
</style>