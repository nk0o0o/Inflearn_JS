<template>
  <div class="tag-search_list">
    <ul>
      <li class="nodata" v-if="show"><span>해당 검색어와 일치하는<br />태그가 없습니다.</span></li>
      <li><button type="button"><em>#</em> <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> 웹 <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> UI <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> UX <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> 기획 <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> 웹 <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> UI <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> UX <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> 기획 <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> 웹 <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> UI <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> UX <em>디자</em>이너</button></li>
      <li><button type="button"><em>#</em> 기획 <em>디자</em>이너</button></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return { 
        show: false,
      };
    },
    methods: {  }
  }
</script>