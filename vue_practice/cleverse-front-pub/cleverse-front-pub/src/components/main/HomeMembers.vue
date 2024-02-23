<template>
  <div class="home-sector-01_members">

    <div class="members-flex_wrap">

      <h2 class="title">
        Team Members
        <select-view
            :propOptionList="optionLsit"
            :propPlaceholder="'팀명을노출'"
            :propClass="'type2'"
        ><!-- disabled 시 propClass에 disabled 클래스 추가 -->
        </select-view>
      </h2>

      <div class="members_slider" v-if="tabs.length > 1">
        <swiper
          :slides-per-view="6"
          :space-between="10"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="modules"
          :navigation="navigation"
          class="mySwiper"
          >
          <swiper-slide
            v-for="(item, index) in slides"
            :key="index"
            :class="{'active':currentTab===index}"
          >
            <button type="button" @click="currentTab = index">{{item.title}}</button>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot:button-prev></div>
        <div class="swiper-button-next" slot:button-next></div>
      </div>

      <div class="tab-members_content">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          v-show="currentTab == index"
        >
          <ul class="members_list over">
            <li
              v-for="(item, index) in item.members"
              :key="index"
              :class="{ off: item.off }"
            >
              <!-- <span class="img" :class="item.situationIcon">
                <img v-if="item.src" :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name">
              </span>
              <dl>
                <dt>
                  <span class="dropdown-type2 tooltip text">
                    <dropdown-menu2
                      :propName="item.name"
                      :propItem="dropItem"
                      :propClass="'dropdown-type2-list type3'"
                      propLocation="bottom start"
                    >
                    </dropdown-menu2>
                  </span>
                  <span>{{item.classes}}</span>
                </dt>
                <dd>{{item.situation}}・{{item.location}}</dd>
              </dl> -->
              <span class="dropdown-type2 tooltip text">
                <dropdown-menu2
                  :propisSlotMode="true"
                  :propItem="dropItem"
                  :propClass="'dropdown-type2-list type3 team-member-tip__left'"
                  propLocation="bottom start"
                  :contained="true"
                >
                  <template #head>
                    <span class="img" :class="item.situationIcon">
                      <span>
                        <img v-if="item.src" :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name">
                      </span>
                    </span>
                    <dl>
                      <dt>
                        {{item.name}}
                        <span>{{item.classes}}</span>
                      </dt>
                      <dd>{{item.situation}}・{{item.location}}</dd>
                    </dl>
                  </template>
                </dropdown-menu2>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    <!-- coming-soon
      propComingTypeClass="coming-soon-type1"
      propComingImgClass="coming-soon-member"
      propComingText="우리 팀원들의 출근현황과<br>휴가 일정을 알 수 있어요"
    /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import comingSoon from "@/components/main/comingSoon.vue";
import selectView from "@/components/selectView.vue"
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

export default defineComponent({
  components: {
    // comingSoon,
    selectView,
    Swiper,
		SwiperSlide,
    dropdownMenu2,
  },
  setup() {
    return {
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      scrollbar:{ draggable: true },
      modules: [Navigation],
    };
  },
   data() {
    return {
      nodata: false,
      currentTab: 0,
      slides: [
        { title: 'LF1조직명' },
        { title: 'LF2조직명조직명' },
        { title: 'LF3조직명' },
        { title: 'LF4조직명' },
        { title: 'LF5조직명' },
        { title: 'LF6조직명' },
        { title: 'LF7조직명' },
      ],
      tabs: [
        {
          members: [
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화1',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'before-inquiry',
              off: false,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화1',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
          ],
        },
        {
          members: [
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화2',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
          ],
        },
        {
          members: [
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화3',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
          ],
        },
        {
          members: [
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화4',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
          ],
        },
        {
          members: [
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화5',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
          ],
        },
        {
          members: [
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화6',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
          ],
        },
        {
          members: [
            {
              situationIcon: 'sit-01 ',
              src: 'img_dummy3.png',
              name: '김한화7',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-01 ',
              src: 'img_profile_01.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-02 ',
              src: 'img_profile_03.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-03 ',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'sit-04 ',
              src: 'img_profile_02.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
            {
              situationIcon: 'off',
              off: true,
              src: 'img_dummy3.png',
              name: '김한화',
              classes: '차장',
              situation: '현지직출',
              location: '63빌딩',
            },
          ],
        },
      ],

      optionLsit: [
        { value: 'menu1', label: 'menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1' },
        { value: 'hover', label: 'hover' },
        { value: 'Selected', label: 'Selected' },
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
    }
  },
});
</script>
