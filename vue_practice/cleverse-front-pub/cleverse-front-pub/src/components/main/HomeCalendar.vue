<template>
  <div class="home-sector-01_calendar">
    <h2 class="title">Calendar</h2>
    <div class="main-calendar">
      <Calendar
        class="custom-calendar"
        :masks="masks"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
        :locale="'en'"
      >
        <template v-slot:day-content="{ day, attributes }">
          <div>
            <span class="day-label">{{ day.day }}</span>
            <div class="day-schedule">
              <p
                v-for="attr in attributes"
                :key="attr.key"
                :class="attr.customData.class"
              >
                {{ attr.customData.title }}
              </p>
            </div>
          </div>
        </template>
      </Calendar>
    </div>
    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    <coming-soon
      propComingTypeClass="coming-soon-type3"
      propComingImgClass="coming-soon-calendar"
      propComingText="아웃룩과 연동된 나의 일정을<br>월/일 단위로 볼 수 있어요"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import comingSoon from "@/components/main/comingSoon.vue";
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';

export default defineComponent({
  components: {
    Calendar,
    comingSoon,
  },
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        title: 'MMMM YYYY',
        weekdays: 'WWW',
      },
      attributes: [
        {
          highlight: true,
          key: 1,
          customData: {
            title: '전자결재 2차',
            class: 'bg-calendar-pink',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 9,
          customData: {
            title: '차세대그룹웨어',
            class: 'bg-calendar-blue',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'bg-calendar-orange',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: 'bg-calendar-pink',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: 'bg-calendar-orange',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Meeting with new client.',
            class: 'bg-calendar-pink',
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'bg-calendar-orange',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Cookout with friends.',
            class: 'bg-calendar-blue',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: 'bg-calendar-blue',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: 'bg-calendar-blue',
          },
          dates: new Date(year, month, 25),
        },
        {
          key: 9,
          customData: {
            title: 'Canceled:cancel',
            class: 'bg-calendar-cancel',
          },
          dates: new Date(year, month, 25),
        },
      ],
    }
  },
});
</script>

