<template>
  <div>
    <div class="header-content_wrap">
      <div class="left">
        <p class="arrow">신사업부문 클러스터</p>
        <div class="dropdown-collab-type1" id="select-box2">
          <dropdown-menu3
            :propisSlotMode="true"
            :propSelectText="selectSlotText"
            :propId="'select-box2'"
            @selected="selectSlotValue"
            :propType="true"
            :propLocation="'bottom'"
          >
            <template v-slot:body={on}>
              <div class="dropdown-collab-list-type1" :style="`width:${on.width}px`">
                <div
                  class="item"
                  v-for="(item, index) in dropItem"
                  :key="index"
                  :value="index"
                  :class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
                >
                  <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
                    {{ item.title }}
                  </button>
                </div>
              </div>
            </template>
          </dropdown-menu3>
        </div>
      </div>
      <div class="right">
        <div class="tab-collab-type1">
          <ul class="tab-menu">
            <li v-for="(tab, index) in tabsType1" :class="{ active: currentTab===index }" :key="index">
              <button type="button" @click="currentTab = index">{{tab}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="node_input">
        <form action="">
          <div class="input-box" :class="{ resizing: isActive }">
            <label for="mission">Direction</label>
            <input type="text" required placeholder="우리 클러스터가 가야할 방향을 제시해주세요(50자 이내)" id="mission">
            <button type="reset" class="input-txt-del">입력 삭제</button>
            <button type="button" class="btn_modify" @click="isActive = !isActive" :class="{ none: isActive }">수정</button>
            <button type="button" class="btn_delete" :class="{ active: isActive }">취소</button>
            <button type="button" class="btn_save" @click="isActive = !isActive" :class="{ active: isActive }">저장</button>
            <!-- 등록된 자료 있을 때 : 공통 -->
            <button type="button" class="btn_introduction"><span>클러스터 소개 자료</span></button>
            <!--등록된 자료 없을 때 : 권한이 없는 사용자 -->
            <!-- <button type="button" class="btn_introduction" disabled="disabled"><span>클러스터 소개 자료</span></button> -->
            <!-- 등록된 자료 없을 때 : 권한이 있는 사용자 --> 
            <!-- <button type="button" class="btn_introduction upload"><span>클러스터 소개 자료</span></button> -->
          </div>
        </form>
      </div>
    </div>

    <div class="tab-content">
      <div v-show="currentTab == 0">
        <div class="skeleton-content_list" @scroll="testScroll">
          <strong class="content-num">Node <span>8</span></strong>
          <div class="skeleton-content_list_wrap">
            <div class="list-box_wrap side-new_mode">
              <p class="txt">자유롭게 노드를 생성하고<br>하고싶은 업무를 진행할 수 있어요!</p>
              <button type="button" class="btn bk plus">NEW NODE</button>
            </div>
            <div class="list-box_wrap node" v-for="(item, index) in nodes" :key="index">
              <h2 class="tit ell-singleline">
                <span class="ico-prog" :class="item.phase">{{item.phase}}</span>
                {{item.title}}
              </h2>
              <div class="mix-list_area node">
                <div class="info-l">
                  <div class="cont">
                    <span class="img"><img :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name"></span>
                    <div class="dropdown-collab-type3">
                      <personnel-numdropdown></personnel-numdropdown>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="box-list">
                <li v-for="(item, index) in item.list" :key="index">
                  <a href="#" :title="item.text">
                    <span class="txt ell-singleline" :class="{ lock: item.lock }">{{item.text}}</span>
                    <span class="num">{{item.date}}</span>
                  </a>
                </li>
              </ul>
              <a href="#" class="btn-view_more"><span>전체보기</span></a>
            </div>

          </div>
        </div>
      </div>
      <div v-show="currentTab == 1">
      </div>
    </div>


  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import personnelNumdropdown from '@/components/personnelNumdropdown.vue';
import dropdownMenu3 from "@/components/dropdownMenu3.vue";

export default defineComponent({
  components: {
    personnelNumdropdown,
    dropdownMenu3,
  },
  data() {
    return {
      isActive: false,
      currentTab: 0,
      tabsType1: ['Node', 'People'],
      selectSlotText: 'LIFE SOLUTION',
      dropSelectItem:{
        itemId: 'selected1'
        },
        dropItem: [
        {
          title: '전체 정보 공유',
          class: 'menu1',
          itemId: 'selected1',
        },
        {
          title: '나의 정보 공유',
          class: 'menu2',
          itemId: 'selected2',
        },
      ],
      nodes: [
        {
          phase: 'p1',
          title: '구독 솔루션 (생필품)',
          src: 'img_dummy1.png',
          name: '김이름',
          list: [
            {
              lock: true,
              text: '리서치 준비 자료리서치 준비 자료리서치 준비 자료',
              date: '내일',
            },
            {
              lock: false,
              text: '리서치 준비 자료',
              date: '어제',
            },
            {
              lock: true,
              text: '1차 보고안 작성',
              date: '3.4',
            },
            {
              lock: false,
              text: '2차 보고안 작성',
              date: '3.5',
            },
          ],
        },
        {
          phase: 'p2',
          title: '구독 솔루션 (생필품)',
          src: 'img_dummy2.png',
          name: '김한화',
          list: [
            {
              lock: false,
              text: '리서치 준비 자료리서치 준비 자료리서치 준비 자료',
              date: '내일',
            },
            {
              lock: false,
              text: '리서치 준비 자료',
              date: '어제',
            },
            {
              lock: true,
              text: '1차 보고안 작성',
              date: '3.4',
            },
            {
              lock: false,
              text: '2차 보고안 작성',
              date: '3.5',
            },
          ],
        },
        {
          phase: 'p3',
          title: '구독 솔루션 (생필품)',
          src: 'img_dummy1.png',
          name: '김이름',
          list: [
            {
              lock: false,
              text: '리서치 준비 자료리서치 준비 자료리서치 준비 자료',
              date: '내일',
            },
            {
              lock: false,
              text: '리서치 준비 자료',
              date: '어제',
            },
            {
              lock: false,
              text: '1차 보고안 작성',
              date: '3.4',
            },
            {
              lock: false,
              text: '2차 보고안 작성',
              date: '3.5',
            },
          ],
        },
        {
          phase: 'p2',
          title: '구독 솔루션 (생필품)',
          src: 'img_dummy2.png',
          name: '김한화',
          list: [
            {
              lock: false,
              text: '리서치 준비 자료리서치 준비 자료리서치 준비 자료',
              date: '내일',
            },
            {
              lock: false,
              text: '리서치 준비 자료',
              date: '어제',
            },
            {
              lock: false,
              text: '1차 보고안 작성',
              date: '3.4',
            },
            {
              lock: true,
              text: '2차 보고안 작성',
              date: '3.5',
            },
          ],
        },
      ]
    };
  },
  methods: {
   selectSlotValue(val:any){
      this.selectSlotText = val
    },
    dropClickItem(item: any){
      this.dropSelectItem.itemId = item.itemId
    },
  },
});
</script>