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
                  :format="rangeFormat"
                  locale="ko"
                  cancelText="취소"
                  selectText="선택"
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
      <ul class="group-view_list">
        <li class="add">
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
                    <input type="text" required placeholder="Subtask명을 입력해 주세요">
                    <button type="reset" class="input-txt-del">입력 삭제</button>
                  </div>
                </form>
              </div>
              <div class="dates">
                <div class="date line-type f-18">
                  <Datepicker
                    placeholder="시작일 선택 - 종료일 선택"
                    v-model="rangeDate"
                    range
                    :format="rangeFormat2"
                    locale="ko"
                    cancelText="취소"
                    selectText="저장"
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
        <li v-for="(item, index) in groups" :key="index" :class="{ov: item.open}">
          <div class="group-view_list_inner">
            <div class="group-view_list_head">
              <span class="flag-icon" :class="item.state">진척도</span>
              <span class="member">
                <span class="img"><img :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name"></span>
                <div class="dropdown-collab-type3">
                  <personnel-numdropdown></personnel-numdropdown>
                </div>
              </span>
              <span class="txt">
                  <a href="#" class="ell-singleline">{{item.title}}</a>
                  <span class="num">{{item.count}}</span>
              </span>
              <span class="dates">{{item.date}}</span>
            </div>
            <ul class="task-view_list">
              <li v-for="(item, index) in item.checks" :key="index" :class="{ ov: item.isChecked }">
                <span class="check"><input type="checkbox" name="" :id="item.id" @click="item.isChecked = !item.isChecked"><label :for="item.id">{{item.id}}</label></span>
                <span class="txt">
                  <span class="important" v-if="item.important">중요</span>
                  <a href="#" :class="{ lock: item.lock }"><span class="ell-singleline" :class="{ 'new-icon': item.new }">{{item.text}}</span></a>
                </span>
                <span  class="comment" v-if="item.count">
                  <span v-if="item.count > 99">99+</span>
                  <span v-else>{{item.count}}</span>
                </span>
                <span class="update" v-if="item.update">
                  <span :class="{ warn: item.warn }"><em>{{item.update}}</em></span>
                </span>
                <span class="name" v-if="item.name">
                  <span>
                    <span class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="item.name"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type2'"
                      >
                      </dropdown-menu2>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div class="task-add_input" :class="{ ov: item.isActive }">
              <div class="input">
                <form action="">
                  <div class="input-box message-box">
                    <input type="text" required placeholder="Subtask를 입력해주세요" v-model="message">
                    <button type="reset" class="input-txt-del">입력 삭제</button>
                    <p class="message-count"><span>({{ message.length }}</span>/40)</p>
                  </div>
                </form>
              </div>
              <div class="dropdown-collab-type5 pub" v-if="item.openSelect">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      v-bind="props"
                    >
                      <span><i>공개</i></span>
                    </button>
                  </template>
                  <ul class="dropdown-collab-list-type5">
                    <li class="active"><button type="button">공개</button></li>
                    <li><button type="button">비공개</button></li>
                  </ul>
                </v-menu>
              </div>
              <div class="dropdown-collab-type5 pub" v-if="!item.openSelect">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button disabled
                      v-bind="props"
                    >
                      <span><i>비공개</i></span>
                    </button>
                  </template>
                </v-menu>
              </div>
              <div class="dropdown-type2 tooltip sm">
                <dropdown-menu2
                  :propItem="dropItem"
                  :propClass="'dropdown-type2-list'"
                  :propLocation="'start bottom'"
                >
                </dropdown-menu2>
              </div>
              <div class="dropdown-collab-type5 pub" v-if="item.editer">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      v-bind="props"
                    >
                      <span><i>생성자만 편집</i></span>
                    </button>
                  </template>
                  <ul class="dropdown-collab-list-type5 between">
                    <li class="active"><button type="button">생성자만 편집</button></li>
                    <li><button type="button">태스크멤버 편집</button></li>
                  </ul>
                </v-menu>
              </div>
              <div class="dates">
                <div class="date line-type f-18">
                  <Datepicker
                    placeholder="시작일 선택 - 종료일 선택"
                    v-model="rangeDate"
                    :format="rangeFormat2"
                    range
                    locale="ko"
                    cancelText="취소"
                    selectText="저장"
                    :enableTimePicker="false"/>
                </div>
              </div>
              <div class="bn">
                <button type="button" class="btn_cancel" @click="item.isActive = !item.isActive">취소</button>
                <button type="button" class="btn_regist">저장</button>
              </div>
            </div>
            <div class="task-add_btn" :class="{ hide: item.isActive }">
              <button type="button" class="btn_addtask" @click="item.isActive = !item.isActive">Add Subtask</button>
            </div>
          </div>
          <button type="button" class="btn_section_view" @click="item.open = !item.open">열기/닫기</button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Datepicker from '@vuepic/vue-datepicker';
import personnelNumdropdown from '@/components/personnelNumdropdown.vue';
import personnelSetdropdown from '@/components/personnelSetdropdown.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue";


export default defineComponent({
    components: {
      Datepicker,
      personnelNumdropdown,
      personnelSetdropdown,
      dropdownMenu2,
    },
    data() {
      return {
        message: '',
        rangeDate: [new Date(),new Date()],
        dropItem: {
          title: `
            공개 : 임직원 전체에게 공개됩니다<br>
            비공개 : taskgroup멤버에게만 공개됩니다
          `,
        },
        groups: [
          {
            open: true,
            isActive: false,
            state: 'state01',
            src: 'img_dummy1.png',
            name: '김한화',
            title: '업무공유 시스템 사업 추진',
            count: '8',
            date: '2020.01.01 - 2021.12.31',
            openSelect: true,
            editer: true,
            checks: [
              {
                id: 'task1',
                isChecked: false,
                important: true,
                lock: true,
                new: true,
                text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
                count: 120,
                update: '어제',
                warn: true,
                name: '김한화',
              },
              {
                id: 'task2',
                isChecked: true,
                important: false,
                lock: false,
                new: true,
                text: 'A사 비즈니스 모델 분석2',
                count: 120,
                update: '4.3',
                warn: false,
                name: '이한화',
              },
            ]
          },
          {
            open: false,
            isActive: false,
            state: 'state02',
            src: 'img_dummy2.png',
            name: '김한화',
            title: '업무공유 시스템 사업 추진2',
            count: '12',
            date: '2020.01.01 - 2021.12.31',
            openSelect: true,
            checks: [
              {
                id: 'task2-1',
                isChecked: false,
                important: true,
                lock: true,
                new: true,
                text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
                count: 120,
                update: '어제',
                warn: true,
                name: '김한화',
              },
            ]
          },
          {
            open: false,
            isActive: false,
            state: 'state03',
            src: 'img_dummy1.png',
            name: '김한화',
            title: '업무공유 시스템 사업 추진3',
            count: '118',
            date: '2020.01.01 - 2021.12.31',
            checks: [
              {
                id: 'task3-1',
                isChecked: false,
                important: true,
                lock: true,
                new: true,
                text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
                count: 120,
                update: '어제',
                warn: true,
                name: '김한화',
              },
            ]
          },
          {
            open: false,
            isActive: false,
            state: 'state04',
            src: 'img_dummy2.png',
            name: '김한화',
            title: '업무공유 시스템 사업 추진4',
            count: '18',
            date: '2020.01.01 - 2021.12.31',
            checks: [
              {
                id: 'task4-1',
                isChecked: false,
                important: true,
                lock: true,
                new: true,
                text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
                count: 120,
                update: '어제',
                warn: true,
                name: '김한화',
              },
            ]
          },
        ],
        dropItem2: {
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
      rangeFormat2(date :any) {
        const dayStart = ('0' + date[0].getDate()).slice(-2);
        const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
        const yearStart = date[0].getFullYear();
        const dayEnd = ('0' + date[1].getDate()).slice(-2);
        const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
        const yearEnd = date[1].getFullYear();
        return `${yearStart}.${monthStart}.${dayStart} - ${yearStart}.${monthEnd}.${dayEnd}`;
      },

    },
});
</script>