<template>
  <div class="task-content import-task">
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
        <div class="dropdown-collab-type6">
          <filter-list
            proplocation='bottom end'
          />
        </div>
        <button type="button" class="btn_view task">Task View</button>
      </div>
    </div>
    <ul class="group-view_list">
      <li v-for="(item, index) in groups" :key="index" :class="{ov: item.open}">
        <div class="group-view_list_inner">
          <div class="group-view_list_head">
            <span class="flag-icon" :class="item.state">진척도</span>
            <span class="member" v-if="item.src">
              <span class="img"><img :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name"></span>
              <div class="dropdown-collab-type3">
                <personnel-numdropdown></personnel-numdropdown>
              </div>
            </span>
            <span class="role" :class="{ lock: item.lock }" v-if="item.sort">
              <span class="ell-singleline">{{item.sort}}</span>
            </span>
            <span class="txt">
              <a href="#" class="ell-singleline">{{item.title}}</a>
              <span class="num">{{item.count}}</span>
            </span>
            <span class="dates">{{item.dateRange}}</span>
          </div>
          <ul class="task-view_list">
            <li v-for="(item, index) in item.checks" :key="index" :class="{ ov: item.isChecked }">
              <span class="check"><input type="checkbox" name="" :id="item.id" @click="item.isChecked = !item.isChecked"><label :for="item.id">{{item.id}}</label></span>
              <span class="txt">
                <span class="important" v-if="item.important">중요</span>
                <span><a href="#" class="ell-singleline" :class="{ lock: item.lock }">{{item.text}}</a></span>
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
                      :anchor="'bottom end'"
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
                <div class="input-box">
                  <input type="text" required placeholder="Task를 입력해주세요">
                  <button type="reset" class="input-txt-del">입력 삭제</button>
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
                :propLocation="'bottom start'"
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
            <button type="button" class="btn_addtask"  @click="item.isActive = !item.isActive">Add Subtask</button>
          </div>
        </div>
        <button type="button" class="btn_section_view" @click="item.open = !item.open">열기/닫기</button>
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
import personnelNumdropdown from '@/components/personnelNumdropdown.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue";

export default defineComponent({
  components: {
    filterList,
    Datepicker,
    personnelNumdropdown,
    dropdownMenu2,
  },
  data() {
    return {
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
          stateDefault: false,
          //state: 'state01',
          src: 'img_dummy1.png',
          name: '김한화',
          sort: '시스템 개발',
          title: '업무공유 시스템 사업 추진',
          count: 8,
          dateRange: '2020.01.01 - 2021.12.31',
          checks: [
            {
              id: 'task1',
              important: true,
              lock: true,
              text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
              count: 120,
              warn: true,
              update: '어제',
              name: '김이름',
              isChecked: false,
            },
            {
              id: 'task2',
              text: 'A사 비즈니스 모델 분석',
              count: 81,
              update: '어제',
              name: '김이름',
              isChecked: false,
            },
            {
              id: 'task3',
              text: 'A사 비즈니스 모델 분석',
              update: '4.15',
              name: '김이름',
              isChecked: false,
            },
          ],
          openSelect: false,
          editer: false,
        },
        {
          open: false,
          isActive: false,
          stateDefault: true,
          src: 'img_dummy1.png',
          name: '이한화',
          sort: '마음건강 서비스',
          title: '업무공유 시스템 사업 추진2',
          count: 18,
          dateRange: '2020.01.01 - 2021.10.31',
          checks: [
            {
              id: 'task2-1',
              important: true,
              lock: true,
              text: 'A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석A사 비즈니스 모델 분석 A사 비즈니스 모델 분석 A사 비즈니스 모델 분석',
              count: 120,
              warn: true,
              update: '어제',
              name: '김이름',
              isChecked: false,
            },
          ],
          openSelect: true,
          editer: true,
        },
        {
          open: false,
          isActive: false,
          stateDefault: false,
          //state: 'state03',
          src: 'img_dummy1.png',
          name: '박한화',
          sort: '마음건강 서비스',
          title: '업무공유 시스템 사업 추진3',
          count: 23,
          dateRange: '2020.01.01 - 2021.10.31',
          checks: [],
          openSelect: true,
          editer: false,
        },
        {
          open: false,
          isActive: false,
          stateDefault: false,
          src: 'img_dummy1.png',
          name: '최한화',
          sort: '마음건강 서비스',
          title: '업무공유 시스템 사업 추진4',
          count: 11,
          relateds: ['ICT부문', '서비스혁신센터'],
          dateRange: '2020.01.01 - 2021.10.31',
          checks: [],
          openSelect: false,
          editer: false,
        },
        {
          open: false,
          isActive: false,
          title: '업무공유 시스템 사업 추진5',
          count: 11,
          checks: [],
          openSelect: false,
          editer: false,
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
  },
});
</script>