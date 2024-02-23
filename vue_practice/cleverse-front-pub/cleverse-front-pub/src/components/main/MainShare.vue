<template>
  <section class="main-box main-box__share">
    <div class="main-box__inner">
      <h2 class="main-box--title">정보공유</h2>
      
      <!-- <p class="no-data no-data__contents">콘텐츠가 없습니다</p> -->
      <div class="main-share">
        <ul>
          <li class="row" v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link">
              <span
                class="row-thumb"
                :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
              />
              <span class="row-contxt">{{row.contxt}}</span>
              <span class="row-snippet">
                <span class="row-name">{{row.name}}</span>
                <span class="row-date">{{row.date}}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      list: [
        {
          name: "김한화",
          date: "2022.03.14",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          name: "김한화",
          date: "2022.03.14",
          contxt: "asdfasdfasd",
        },
        {
          name: "김한화",
          date: "2022.03.14",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
      ]
    }
  }
})
</script>