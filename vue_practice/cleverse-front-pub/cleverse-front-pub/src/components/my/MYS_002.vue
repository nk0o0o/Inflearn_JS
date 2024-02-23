<template>
  <div>
    <div class="task-content">
      <div class="skeleton-content_list">
        <div class="skeleton-content_head tutorial-wrap">
          <h2 class="tit"># MY TAG</h2>
          <div class="addtag"><button type="button">태그 추가</button></div>
        </div>
        <div class="mytag-list_wrap edit">
          <div class="mytag-list edit">
            <h3 class="tit ic-1">소속</h3>
            <div class="tag">
              <template v-for="(item, index) in settings" :key="index">
                <input 
                  type="checkbox" 
                  name="" 
                  :id="`filterEdit${item.id}`" 
                  :checked="item.checked"
                >
                <label :for="`filterEdit${item.id}`">
                  # {{item.label}}
                </label>
              </template>
            </div>
            <div class="bn">
              <button type="button" class="bn_cancel">취소</button>
              <button type="button" class="bn_set">저장</button>
            </div>
          </div>
          <div class="mytag-list tutorial-wrap">
            <h3 class="tit ic-1">소속</h3>
            <div class="tag">
              <template v-for="(item, index) in groups" :key="index">
                <input 
                  type="checkbox" 
                  name=""
                  :checked="item.checked"
                  :id="`group${item.id}`" 
                  disabled
                >
                <label :for="`group${item.id}`">
                  # {{item.label}}
                </label>
              </template>
            </div>
            <div class="bn">
              <button type="button" class="bn_setting">대표 설정</button>
              <div class="tooltip-b cr tutorial" v-if="tutorialClose">
                <ul class="list-dot">
                  <li>나의 대표 직무 1개를 선택해주세요.</li>
                </ul>
                <button type="button" class="tutorial-close" @click="tutorialBtn"><span class="hide">닫기</span></button>
              </div>
            </div>
          </div>
          <div class="mytag-list tutorial-wrap">
            <h3 class="tit ic-2">직무</h3>
            <div class="tag">
              <template v-for="(item, index) in roles" :key="index">
                <input 
                  type="checkbox" 
                  name=""
                  :checked="item.checked"
                  :id="`role${item.id}`" 
                  disabled
                >
                <label :for="`role${item.id}`">
                  # {{item.label}}
                </label>
              </template>
            </div>
            <div class="bn">
              <button type="button" class="bn_setting">대표 설정</button>
              <div class="tooltip-b cr tutorial" v-if="tutorialClose">
                <ul class="list-dot">
                  <li>나의 대표 직무 1개를 선택해주세요.</li>
                </ul>
                <button type="button" class="tutorial-close" @click="tutorialBtn"><span class="hide">닫기</span></button>
              </div>
            </div>
          </div>
          <div class="mytag-list">
            <h3 class="tit ic-3">스킬</h3>
            <div class="tag">
              <template v-for="(item, index) in skills" :key="index">
                <input 
                  type="checkbox" 
                  name=""
                  :checked="item.checked"
                  :id="`skill${item.id}`" 
                  disabled
                >
                <label :for="`skill${item.id}`">
                  # {{item.label}}
                </label>
              </template>
            </div>
            <div class="bn">
              <button type="button" class="bn_setting">대표 설정</button>
            </div>
          </div>
        </div>
      </div>
      <div class="skeleton-content_head">
        <h2 class="tit">주요 업무 이력</h2>
        <div class="addtag"><button type="button">이력 추가</button></div>
      </div>
      <ul class="mytask-list">
        <li v-for="(item, index) in records" :key="index">
          <span class="date">{{item.date}}</span>
          <span class="subject">{{item.subject}}</span>
          <span class="role">{{item.role}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  data() {
    return {
      settings: [
        {
          id: 1,
          checked: true,
          label: '시스템 개발',
        },
        {
          id: 2,
          label: 'Side Project',
        },
        {
          id: 3,
          label: '마음건강 서비스',
        },
        {
          id: 4,
          label: '노드명이ㅣ 길어도 다 보여요',
        },
      ],
      groups: [
        {
          id: 1,
          label: '시스템 개발',
        },
        {
          id: 2,
          label: 'Side Project',
        },
        {
          id: 3,
          label: '마음건강 서비스',
        },
        {
          id: 4,
          checked: true,
          label: '노드명이ㅣ 길어도 다 보여요',
        },
      ],
      roles: [
        {
          id: 1,
          label: '사업기획',
        },
        {
          id: 2,
          checked: true,
          label: 'UI/UX',
        },
        {
          id: 3,
          label: 'Sketch',
        },
      ],
      skills: [
        {
          id: 1,
          label: 'Photoshop',
        },
        {
          id: 2,
          checked: true,
          label: 'Illustrator',
        },
        {
          id: 3,
          label: 'XD',
        },
        {
          id: 4,
          label: 'Zeplin',
        },
        {
          id: 5,
          checked: true,
          label: 'UI/UX',
        },
        {
          id: 6,
          label: 'Jira',
        },
        {
          id: 7,
          label: 'Protopie',
        },
        {
          id: 8,
          checked: true,
          label: 'Figma',
        },
        {
          id: 9,
          label: 'Premier',
        },
        {
          id: 10,
          label: 'CSS',
        },
      ],
      records: [
        {
          date: '2021.03 -  진행중',
          subject: '업무공유시스템 2.0 개발',
          role: '개발 PM',
        },
        {
          date: '2021.02 -  진행중',
          subject: '원격근무도입 TF',
          role: '시스템 개발 담당',
        },
        {
          date: '2020.11 -  2021.01',
          subject: '온슈어 Toss 미니 보험 화면 설계',
          role: '서비스 개발 담당',
        },
        {
          date: '2020.11 -  2021.01',
          subject: '사내 메신저 구축',
          role: '개발 PM',
        },
        {
          date: '2020.06 -  2021.10',
          subject: '업무공유시스템 1.0 개발',
          role: '개발 PM',
        },
      ],
    };
  },
  methods: {
    
  },
});
</script>