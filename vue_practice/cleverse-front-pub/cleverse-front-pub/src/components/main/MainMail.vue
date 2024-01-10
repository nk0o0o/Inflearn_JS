<template>
  <section class="main-box main-box__mail">
    <div class="main-box__inner">
      <h2 class="main-box--title">메일</h2>

      <!-- <p class="no-data no-data__mail">미확인 메일이 없습니다</p> -->

      <div class="main-mail_list">
        <ul>
          <li
            v-for="(row, idx) in list"
            :key="idx"
            class="row"
            :class="{ready : row.alerm === false}"
          >
            <a href="#" class="row-link">
              <span
                class="row-thumb"
                :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
              >
                <span class="row-alerm" v-if="row.alerm">미확인</span>
              </span>
              <span class="row-contxt">{{row.contxt}}</span>
              <span class="row-snippet">
                <span class="row-name">{{row.name}}</span>
                <span class="row-date">{{row.date}}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div class="main-mail__bot">

        <div class="main-mail__bot__size">
          <span class="number"><span>{{this.size}}MB</span> / {{this.maxSize}}MB</span>
          <div class="bar">
            <div :style="'width: '+sizePerCalc(this.size)">사용량 {{sizePerCalc(this.size)}}</div>
          </div>
        </div>

        <div class="main-mail__bot--btn">
          <button type="button" class="btn-icon btn-icon-backup"><span>메일백업</span></button>
        </div>

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
      size: 205.78,
      maxSize: 500,
      list: [
        {
          alerm: true,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
        {
          alerm: false,
          name: "김한화",
          date: "2022.03.14 09:23",
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
        },
      ],
    }
  },
  methods: {
    sizePerCalc(val: number) {
      const per = (val / this.maxSize * 100) + '%';
      return per;
    }
  }
})
</script>