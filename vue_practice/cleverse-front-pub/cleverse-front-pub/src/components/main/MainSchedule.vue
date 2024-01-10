<template>
  <section class="main-box main-box__schedule">
    <div class="main-box__inner">
      <h2 class="main-box--title">일정</h2>

      <!-- <p class="no-data no-data__schedule">일정이 없습니다</p> -->

      <div class="main-schedule__header">
        <button @click="btn(-1)" class="btn-date-prev"><span class="blind">하루 전</span></button>
        <Datepicker
          weekStart="0"
          v-model="date"
          :format="format"
        />
        <button @click="btn(+1)" class="btn-date-next"><span class="blind">하루 후</span></button>
      </div>
      <div class="main-schedule__list">
        <ul>
          <li class="row" v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link">
              <span class="row-contxt">{{row.contxt}}</span>
              <span class="row-snippet">
                <span class="date_time">{{row.dateTime}}</span>
                <span class="location">{{row.location}}</span>
                <span class="member">{{row.member}}</span>
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
import Datepicker from '@vuepic/vue-datepicker';
export default defineComponent({
  components: {
    Datepicker,
  },
  data() {
    return {
      date: new Date(),
      list: [
        {
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
          dateTime: "13:23 - 15:00",
          location: "여의도 63빌딩 6층 9pod",
          member: "김한화 외 10명"
        },
        {
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
          dateTime: "2022.03.01(월) 13:30 - 2022.03.02(화) 13:30",
          location: "여의도 63빌딩 6층 9pod",
          member: "김한화 외 10명"
        },
        {
          contxt: "asdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfaasdfasdfasdfasfasdfasdfasdfasfasdfasdfa",
          dateTime: "2022.03.01(월) 13:30 - 2022.03.02(화) 13:30",
          location: "여의도 63빌딩 6층 9pod",
          member: "김한화 외 10명"
        },
      ],
      btn(date: number) {
        let today = new Date(this.date);
        this.date = new Date(today.setDate(today.getDate() + date));
      },
      format(date:any) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);

        return `${month}.${day}`;
      },
    }
  }
})
</script>