<template>
  <div>
    <div class="task-content">
      <div class="skeleton-content_head">
        <div class="task-date_wrap">
          <span class="btn_prev"><button type="button">이전</button></span>
          <dl>
            <dt>This week</dt>
            <dd class="week range">
              <div class="date">
                <Datepicker 
                  v-model="rangeDate"
                  range 
                  locale="ko"
                  cancelText="취소"
                  selectText="선택"
                  :format="rangeFormat"
                  :enableTimePicker="false"
                  weekStart="0"
                />
              </div>
            </dd>
          </dl>
          <span class="btn_next"><button type="button">이후</button></span>
          <button type="button" class="btn_refresh"><i class="blind">새로고침</i></button>
        </div>
        <div>
          <button type="button" class="btn_view group">Group View</button>
        </div>
      </div>
      <ul class="task-view_list"> 
        <li v-for="(item, index) in tasks" :key="index" :class="{ ov: item.isChecked }">
          <span class="check"><input type="checkbox" name="" :id="item.id" @click="item.isChecked = !item.isChecked"><label :for="item.id">{{item.id}}</label></span>
          <span class="txt">
            <span class="important" v-if="item.important">중요</span>
            <a href="#" :class="{ lock: item.lock }"><span class="ell-singleline" :class="{ 'new-icon': item.new }">{{item.text}}</span></a>
          </span>
          <span  class="comment">
            <span v-if="item.count > 99">99+</span>
            <span v-else>{{item.count}}</span>
          </span>
          <span class="update">
            <span :class="{ warn: item.warn }"><em>{{item.update}}</em></span>
          </span>
          <a class="member">
            <span class="img"><img :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name"></span>
            <span class="name">              
              <span class="dropdown-type2 tooltip text">
                <dropdown-menu2
                  :propName="item.name"
                  :propItem="dropItem"
                  :propClass="'dropdown-type2-list type2'"
                >
                </dropdown-menu2>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

export default defineComponent({
    components: {
      Datepicker,
      dropdownMenu2,
    },
    data() {
      return {
        rangeDate: [new Date(),new Date()],
        tasks: [
          {
            id: 'task1',
            important: true,
            lock: true,
            new: true,
            text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
            count: 20,
            warn: true,
            update: '어제',
            src: 'img_dummy1.png',
            name: '김이름',
            isChecked: false,
          },
          {
            id: 'task2',
            important: false,
            lock: false,
            new: true,
            text: 'A사 비즈니스 모델 분석2',
            count: 120,
            warn: true,
            update: '어제',
            src: 'img_dummy2.png',
            name: '김이름',
            isChecked: false,
          },
          {
            id: 'task3',
            important: false,
            lock: true,
            new: false,
            text: 'A사 비즈니스 모델 분석3',
            count: 3,
            warn: false,
            update: '어제',
            src: 'img_dummy2.png',
            name: '김이름',
            isChecked: false,
          },
        ],
        dropItem: {
          title: `
            <div class="tooltip-member">
              <div>
                <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
                <p><b>김한화</b> <span class="pos">직위/직책</span></p>
              </div>
              <p class="cp">회사명 <span></span> 소속조직명</p>
              <p class="phone">010-1234-2336</p>
              <p class="email">mail@hanwha.com</p>
            </div>
          `,
        },
      };
    },
    methods: {
      rangeFormat(date :any) {
        const dayStart = ('0' + date[0].getDate()).slice(-2);
        const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
        const yearStart = date[0].getFullYear();
        const dayEnd = ('0' + date[1].getDate()).slice(-2);
        const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
        const yearEnd = date[1].getFullYear();
        return `${monthStart}.${dayStart} - ${monthEnd}.${dayEnd}`;
      },
    },
});
</script>