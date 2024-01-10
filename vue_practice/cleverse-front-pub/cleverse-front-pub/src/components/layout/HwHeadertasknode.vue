<template>
  <div class="header-task_content">
    <div class="header-content_wrap">
      <div class="left no-history">
        <div class="head_location">
          <span><a href="#">한화시스템</a></span>
          <span><a href="#">ICT부문</a></span>
          <span><a href="#">서비스혁신센터</a></span>
          <em><a href="#">제조방산담당</a></em>
        </div>
        <div class="dropdown-collab-type1 disabled" id="select-box2">
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
        <div class="dropdown-collab-type1" id="select-box3">
          <dropdown-menu3
            :propisSlotMode="true"
            :propSelectText="selectSlotText2"
            :propId="'select-box3'"
            @selected="selectSlotValue2"
            :propType="true"
            :propLocation="'bottom'"
          >
            <template v-slot:body={on}>
              <div class="dropdown-collab-list-type1" :style="`width:${on.width}px`">
                <div
                  class="item"
                  v-for="(item, index) in dropItem2"
                  :key="index"
                  :value="index"
                  :class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
                >
                  <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem2(item)">
                    {{ item.title }}
                  </button>
                </div>
              </div>
            </template>
          </dropdown-menu3>
        </div>
        <!-- <em class="private">비공개</em> -->
        <div class="tt-num">
            <span>Total</span>
            <em>3,452</em>
            <span>Today</span>
            <em>21</em>
        </div>
        <!-- <div class="dropdown-collab-type8">
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                v-bind="props"
              >
                <span class="p1">Phase1</span>
              </button>
            </template>
            <ul class="dropdown-collab-list-type8">
              <li class="active"><button type="button"><span class="p1">Phase 1</span></button></li>
              <li><button type="button"><span class="p2">Phase 2</span></button></li>
              <li><button type="button"><span class="p3">Phase 3</span></button></li>
            </ul>
          </v-menu>
        </div> -->
      </div>
      <ul class="task-people_list">
        <li v-for="(item, index) in peronnels" :key="index" :class="{ct: item.leader}">
          <div class="dropdown-type2 tooltip text">
            <dropdown-menu2
              :propLocation="'bottom start'"
              :propisSlotMode="true"
              :propItem="dropItem3"
              :propClass="'dropdown-type2-list type3'"
            >
              <template v-slot:head>
                <a>
                  <span class="img"><img :src="require(`@/assets/imgs/collaboration/svg/${item.src}`)" :alt="item.name"></span>
                  <span class="name">{{item.name}}</span>
                </a>
              </template>
            </dropdown-menu2>
          </div>
        </li>
        <li>
          <div class="dropdown-collab-type9">
            <personnel-taskdropdown
              :propLocation="'bottom start'"
            />
          </div>
          <span class="name">더보기</span>
        </li>
      </ul>
      <!-- <div class="task-people_input cancel">
        <form action="">
          <div class="input-box">
            <label for="mission">Direction</label>
            <input type="text" required placeholder="우리가 가야할 방향을 제시해 주세요 (50자 이내)" id="mission">
            <button type="reset" class="input-txt-del">입력 삭제</button>
            <button type="button" class="btn_modify" @click="isActive = !isActive" v-show="!isActive">수정</button>
            <button type="button" class="btn_save" @click="isActive = !isActive"  v-show="isActive">저장</button>
          </div>
        </form>
      </div> -->
      <!-- <div class="right">
				<div class="tab-collab-type1">
					<ul class="tab-menu">
						<li class="active"><button type="button" disabled>조직</button></li>
						<li><button type="button">과제</button></li>
					</ul>
				</div>
			</div> -->

    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import personnelTaskdropdown from '@/components/personnelTaskdropdown.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue";

export default defineComponent({
  components: {
    personnelTaskdropdown,
    dropdownMenu2,
    dropdownMenu3,
  },
  name: '',
  data () {
    return {
      isActive: false,
      selectSlotText: '구독 솔루션 (게임)',
      dropSelectItem: {
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
      selectSlotText2: '방산',
      dropSelectItem2: {
        itemId: 'selected1'
      },
      dropItem2: [
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
      peronnels: [
        {
          leader: true,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'img_dummy1.png',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
        {
          leader: false,
          src: 'ic-08-profile-default-img-34.svg',
          name: '김한화'
        },
      ],
      dropItem3: {
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
    }
  },
  methods: {
    selectSlotValue(val:any){
      this.selectSlotText = val
    },
    dropClickItem(item: any){
      this.dropSelectItem.itemId = item.itemId
    },
    selectSlotValue2(val:any){
      this.selectSlotText2 = val
    },
    dropClickItem2(item: any){
      this.dropSelectItem2.itemId = item.itemId
    },
  },
});
</script>
