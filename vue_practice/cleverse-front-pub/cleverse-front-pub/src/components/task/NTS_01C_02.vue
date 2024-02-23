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
          <button type="button" class="btn_view edit">Edit</button>
          <button type="button" class="btn_view task">Task View</button>
          <button type="button" class="btn bk plus">New Task</button>
        </div>
      </div>
      <draggable
        class="group-view_list new"
        item-key="order"
        tag="transition"
        handle=".handle"
        :component-data="{ tag: 'ul', name: 'group-view_list', type: 'transition' }"
        v-model="list"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <template #item="{ element }">
          <li class="item sortable-ghost" :class="element.class">
            <i class="handle"></i>
            <div class="group-view_list_inner">
              <div class="group-view_list_head">
                <span class="assign">
                  <button type="button" :disabled="element.disabled">과제연결</button>
                </span>
                <span class="member" v-if="element.src">
                  <span class="img"><img :src="require(`@/assets/imgs/${element.src}`)" :alt="element.name"></span>
                  <div class="dropdown-collab-type3">
                    <personnel-numdropdown></personnel-numdropdown>
                  </div>
                </span>
                <span class="txt">
                  <a href="#" class="ell-singleline">{{element.txt}}</a>
                  <span class="num">{{element.count}}</span>
                </span>
                <span class="edit">
                  <button type="button">편집</button>
                </span>
                <span class="delete">
                  <button type="button">삭제</button>
                </span>
              </div>
            </div>
          </li>
        </template>
        <template #header>
          <li class="add tutorial-wrap" slot: header>
            <div class="group-view_list_inner">
              <div class="task-add_input">
                <div class="member">
                  <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김이름"></span>
                  <div class="dropdown-collab-type10">
                    <personnel-setdropdown></personnel-setdropdown>
                  </div>
                </div>
                <div class="input">
                  <form action="">
                    <div class="input-box">
                      <input type="text" required placeholder="Task명을 입력해 주세요">
                      <button type="reset" class="input-txt-del">입력 삭제</button>
                    </div>
                  </form>
                </div>
                <div>
                  <div class="date line-type f-18">
                    <Datepicker
                      v-model="rangeDate"
                      placeholder="시작일 선택 - 종료일 선택"
                      range
                      locale="ko"
                      cancelText="취소"
                      selectText="저장"
                      :format="rangeFormat2"
                      :enableTimePicker="false"/>
                  </div>
                </div>
                <div class="bn">
                    <button type="button" class="btn_cancel">취소</button>
                    <button type="button" class="btn_regist">저장</button>
                </div>
              </div>
            </div>
            <div class="tooltip-b bl tutorial" v-if="tutorialClose1">
              <ul class="list-dot">
                  <li>업무를 수행할 구성원+수행업무+수행기간을 입력하세요</li>
              </ul>
              <button type="button" class="tutorial-close" @click="tutorialBtn1"><span class="hide">닫기</span></button>
            </div>
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import draggable from "vuedraggable";
import personnelNumdropdown from '@/components/personnelNumdropdown.vue';
import personnelSetdropdown from '@/components/personnelSetdropdown.vue';


export default defineComponent({
    name: "transition-example",
    display: "Transition",
    components: {
      Datepicker,
      draggable,
      personnelNumdropdown,
      personnelSetdropdown,
    },
    data() {
      return {
        rangeDate: [new Date(),new Date()],
        list:[
          {
            order: 0,
            src: 'img_dummy1.png',
            name: '김이름',
            txt:'업무공유 시스템 사업 추진111',
            disabled: false,
            checked: false,
            class: 'move-item',
            count: 5,
          },
          {
            order: 1,
            name: '김이름',
            src: 'img_dummy2.png',
            txt:'업무공유 시스템 사업 추진222',
            disabled: false,
            checked: true,
            class: 'move-item',
            count: 6,
          },
          {
            order: 2,
            name: '김이름',
            src: 'img_dummy1.png',
            txt:'업무공유 시스템 사업 추진333',
            disabled: true,
            checked: true,
            class: 'move-item',
            count: 12,
          },
        ],
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
      rangeFormat2(date :any) {
        const dayStart = ('0' + date[0].getDate()).slice(-2);
        const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
        const yearStart = date[0].getFullYear();
        const dayEnd = ('0' + date[1].getDate()).slice(-2);
        const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
        const yearEnd = date[1].getFullYear();
        return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
      },
    },
    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: "description",
          disabled: false,
          ghostClass: "ghost",
          drag: true,
          draggable: '.move-item'
        };
      }
    }
});
</script>