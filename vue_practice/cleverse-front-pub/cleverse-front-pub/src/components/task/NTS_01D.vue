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
          <button type="button" class="btn_view comp">Complete</button>
          <button type="button" class="btn bk plus">New Task</button>
        </div>
      </div>
      <draggable
        class="group-view_list"
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
          <li class="item" :class="element.class">
            <div class="group-view_list_inner">
              <div class="group-view_list_head">
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
                  <div class="dropdown-collab-type10 t2">
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
            listId: '1',
            src: 'img_dummy1.png',
            name: '김이름',
            txt:'업무공유 시스템 사업 추진111', 
            flagClass:'state01', 
            disabled: false, 
            checked: false, 
            class: 'move-item',
            count: 5,
          },
          {
            order: 1,
            listId: '2',
            src: 'img_dummy2.png',
            name: '김이름',
            txt:'업무공유 시스템 사업 추진222', 
            flagClass:'state01', 
            disabled: false, 
            checked: true, 
            class: 'move-item',
            count: 6,
          },
          {
            order: 2,
            listId: '3',
            src: 'img_dummy1.png',
            name: '김이름',
            txt:'업무공유 시스템 사업 추진333', 
            flagClass:'state02', 
            disabled: true, 
            checked: true, 
            class: 'move-item',
            count: 12,
          },
          {
            order: 3,
            listId: '4',
            src: 'img_dummy2.png',
            name: '김이름',
            txt:'업무공유 시스템 사업 추진444', 
            flagClass:'state03', 
            disabled: true, 
            checked: true, 
            class: 'move-item',
            count: 11,
          },
          {
            order: 4,
            listId: '5',
            // src: 'img_dummy1.png',
            // name: '김이름',
            txt:'업무공유 시스템 사업 추진555', 
            flagClass:'state04', 
            disabled: true, 
            checked: true, 
            class: 'move-item',
            count: 1,
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
          // ghostClass: "ghost",
          drag: true,
          draggable: '.move-item'
        };
      }
    }
});
</script>