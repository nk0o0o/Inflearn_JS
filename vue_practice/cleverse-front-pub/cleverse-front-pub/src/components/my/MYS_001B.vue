<template>
  <div class="task-content import-task">
    <div class="skeleton-content_head">
      <div class="task-date_wrap">
        <span class="btn_prev"><button type="button">이전</button></span>
        <dl>
          <dt>Today</dt>
          <dd class="week">
            <div class="date">
              <Datepicker
                  v-model="date"
                  :format="format"
                  @update:modelValue="onUpdateDate"
                  :enableTimePicker="false"
                  locale="ko"
                  cancelText="취소"
                  selectText="선택"
                  weekStart="0"
                  />
            </div>
          </dd>
        </dl>
        <span class="btn_next"><button type="button">이후</button></span>
      </div>
      <div>
        <div class="dropdown-collab-type6">
          <filter-list
            proplocation='bottom end'
          />
        </div>
        <button type="button" class="btn_view group">Group View</button>
      </div>
    </div>
    <ul class="task-view_list indi">
      <li v-for="(item, index) in tasks" :key="index" :class="{ ov: item.isChecked }">
        <span class="check"><input type="checkbox" name="" :id="item.id" @click="item.isChecked = !item.isChecked"><label :for="item.id">{{item.id}}</label></span>
        <span class="role" v-if="item.role" :class="{ lock: item.lock }">
          <span class="ell-singleline">{{item.role}}</span>
        </span>
        <span class="txt">
          <span class="important" v-if="item.important">중요</span>
          <a href="#" class="ell-singleline" :class="{ lock: item.lockText }">{{item.text}}</a>
        </span>
        <span  class="comment" v-if="item.count">
          <span v-if="item.count > 99">99+</span>
          <span v-else>{{item.count}}</span>
        </span>
        <span class="update" v-if="item.update">
          <span :class="{ warn: item.warn }"><em>{{item.update}}</em></span>
        </span>
      </li>
    </ul>
    <!-- <div class="mytask-banner">
      <a href="#"><img :src="require('@/assets/imgs/collaboration/img/banner_node.png')" alt="두근두근 파도타기 - 지난주 가장 활동적인 노드는? START"></a>
    </div> -->
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import filterList from '@/components/filterList.vue';


export default defineComponent({
  components: {
    filterList,
    Datepicker,
  },
  data() {
    return {
      date: new Date().toString(),
      rangeDate: [new Date(),new Date()],
      tasks: [
        {
          id: 'task1',
          important: true,
          lock: true,
          role: '시스템 개발',
          text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
          count: 120,
          warn: true,
          update: '어제',
          isChecked: false,
        },
        {
          id: 'task2',
          role: '마음건강 서비스',
          text: 'A사 비즈니스 모델 분석',
          count: 81,
          update: '어제',
          isChecked: false,
        },
        {
          id: 'task3',
          role: 'Side Task',
          lockText: true,
          text: 'A사 비즈니스 모델 분석',
          count: 110,
          update: '4.15',
          isChecked: false,
        },
      ],
    };
  },
  methods: {
    format(date:any) {
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      return `${month}.${day}`;
    },
    rangeFormat(date :any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();
      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();
      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  },
});
</script>