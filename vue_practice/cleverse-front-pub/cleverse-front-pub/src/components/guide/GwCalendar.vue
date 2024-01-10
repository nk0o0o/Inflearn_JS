<template>
    <section class="carendar">
        <h1>date picker</h1>
        <table>
            <colgroup>
                <col style="width:100px">
                <col>
                <col style="width:100px">
                <col>
                <col style="width:100px">
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>default</th>
                    <th>이름</th>
                    <th>default</th>
                    <th>이름</th>
                    <th>default</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>date single</th>
                    <td>
                        <div class="date" data-title="ㅁㅇㄴㄹㄴㅁㅇㄹdasfad">
                            <Datepicker
                                :menuClassName="pickerClass"
                                v-model="date"
                                :format="format"
                                @update:modelValue="onUpdateDate"
                                :enableTimePicker="false"
                                locale="ko"
                                autoApply
                                @click="test"
                              />
                              <br>
                              <Datepicker
                                v-model="date"
                                :format="format"
                                @update:modelValue="onUpdateDate"
                                :enableTimePicker="false"
                                locale="ko"
                                cancelText="취소"
                                selectText="선택"
                                weekStart="0"
                              >
                              <template #year="{ year }">
                                {{ year }}
                              </template>
                              <template #month="{ value }">
                                {{ value+1 < 10 ? '0'+parseInt(value+1) : value+1}}
                              </template>
                              </Datepicker>
                              <br>
                              <Datepicker
                                v-model="date"
                                :format="format"
                                @update:modelValue="onUpdateDate"
                                :enableTimePicker="false"
                                monthNameFormat="long"
                                weekStart="0"
                              />
                        </div>
                    </td>
                    <th>range</th>
                    <td>
                        <div class="date">
                            <Datepicker
                                v-model="rangeDate"
                                range
                                :format="rangeFormat"
                                :enableTimePicker="false"
                                weekStart="0"
                                />
                        </div>
                    </td>
                    <th>month</th>
                    <td>
                        <div class="date time">
                            <Datepicker
                                v-model="month"
                                monthPicker
                                weekStart="0"
                                />
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>time </th>
                    <td>
                        <div class="date time">
                            <Datepicker
                                v-model="time"
                                timePicker
                                @update:modelValue="onUpdateTime"
                                weekStart="0"
                                />
                        </div>
                    </td>
                    <th>time range</th>
                    <td>
                        <div class="date time">
                            <Datepicker
                              v-model="timeRangeData"
                              timePicker
                              range
                              weekStart="0"
                              />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <h1>date scheduler</h1>
        <div>
            scheduler sampe area
        </div>

        <Calendar
            class="custom-calendar max-w-full"
            :masks="masks"
            :attributes="attributes"
            disable-page-swipe
            is-expanded
            :locale="'en'"
        >
          <template v-slot:day-content="{ day, attributes }">
            <div class="flex flex-col h-full z-10 overflow-hidden">
              <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
              <div class="flex-grow overflow-y-auto overflow-x-auto">
                <p
                    v-for="attr in attributes"
                    :key="attr.key"
                    class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                    :class="attr.customData.class"
                >
                  {{ attr.customData.title }}
                </p>
              </div>
            </div>
          </template>
        </Calendar>

    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'

import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';

export default defineComponent({
    components: {
        Datepicker,
        Calendar
    },
    data() {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        return {
            pickerClass: '',
            date: new Date().toString(),
            rangeDate: [new Date(),new Date()],
            month: {
                month: new Date().getMonth(),
                year: new Date().getFullYear()
            },
            time: {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            },
            timeRangeData: [
              {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
              },
              {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
              }
            ],
            masks: {
              title: 'MMMM YYYY',
              weekdays: 'WWW',
            },
            attributes: [
              {
                key: 1,
                customData: {
                  title: 'Lunch with mom.',
                  class: 'bg-red-600 text-white',
                },
                dates: new Date(year, month, 1),
              },
              {
                key: 9,
                customData: {
                  title: '샘플입니다.',
                  class: 'bg-red-600 text-white',
                },
                dates: new Date(year, month, 1),
              },
              {
                key: 2,
                customData: {
                  title: 'Take Noah to basketball practice',
                  class: 'bg-blue-500 text-white',
                },
                dates: new Date(year, month, 2),
              },
              {
                key: 3,
                customData: {
                  title: "Noah's basketball game.",
                  class: 'bg-blue-500 text-white',
                },
                dates: new Date(year, month, 5),
              },
              {
                key: 4,
                customData: {
                  title: 'Take car to the shop',
                  class: 'bg-indigo-500 text-white',
                },
                dates: new Date(year, month, 5),
              },
              {
                key: 4,
                customData: {
                  title: 'Meeting with new client.',
                  class: 'bg-teal-500 text-white',
                },
                dates: new Date(year, month, 7),
              },
              {
                key: 5,
                customData: {
                  title: "Mia's gymnastics practice.",
                  class: 'bg-pink-500 text-white',
                },
                dates: new Date(year, month, 11),
              },
              {
                key: 6,
                customData: {
                  title: 'Cookout with friends.',
                  class: 'bg-orange-500 text-white',
                },
                dates: { months: 5, ordinalWeekdays: { 2: 1 } },
              },
              {
                key: 7,
                customData: {
                  title: "Mia's gymnastics recital.",
                  class: 'bg-pink-500 text-white',
                },
                dates: new Date(year, month, 22),
              },
              {
                key: 8,
                customData: {
                  title: 'Visit great grandma.',
                  class: 'bg-red-600 text-white',
                },
                dates: new Date(year, month, 25),
              },
            ],
        }
    },
    created() {
        // console.log("now timezone is : "+new Date().getUserTimeZone());
        // console.log("now time is : "+new Date().toString());
    },
    methods: {
        selectValue(val:any){
            console.log(val)
        },
        format(date:any) {
            const day = ('0' + date.getDate()).slice(-2);
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();
            return `${year}.${month}.${day}`;
        },
        rangeFormat(date:any) {
            const dayStart = ('0' + date[0].getDate()).slice(-2);
            const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
            const yearStart = date[0].getFullYear();

            const dayEnd = ('0' + date[1].getDate()).slice(-2);
            const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
            const yearEnd = date[1].getFullYear();

            return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
        },
        timeFormat(){
            return `Selected date is 10:10`;
        },
        onUpdateDate(){
            console.log("change date");
            // @ts-ignore
            // console.log(this.$utils.date.getUserTimeZone() + " : " + this.$utils.date.toString(this.date));
            // console.log("Asia/Seoul : " + this.$utils.date.transToAsiaSeoulDate(this.date).format("YYYY-MM-DD[T]HH:mm:ss"))
        },
        onUpdateTime() {
            console.log("change time");
            console.log(this.time);
        },
        test(){
          this.$nextTick(() => {
            this.pickerClass = 'yyk'
          })
        }
    }
})
</script>
<style lang="css" scoped>
h1 {
    margin-bottom: 20px;
    font-family: 'Lifeplus'; font-weight:600; font-size: 36px; color: #000;
}
table + h1 {margin-top:30px;}
table {margin-top: 10px;}
thead th {border-bottom: 2px solid #adadad;}
th, td {padding: 15px 10px; border:1px solid #ccc;font-size: 15px;}
th {
    line-height: 1.6em;
    color: #000;
    background-color: #f1f1f1;
}
</style>
<style lang="css" scoped>
  .bg-red-600 {
    background-color: red;
  }
  .bg-blue-500 {
    background-color: blue;
  }
</style>

