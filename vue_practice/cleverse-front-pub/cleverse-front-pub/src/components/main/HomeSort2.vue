<template>
  <div class="home-sector-02_box">
    <div
      class="board-home-slider"
      v-for="(item, index) in sorts"
      :key="index"
    >
        <!--  -->
      <swiper
        :modules="modules"
        :pagination="pagination"
        class="board-home-swiper"
        :effect="'fade'"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        v-if="item.slides.length !== 0 && !item.hanwhaDays"
        >
        <swiper-slide
          v-for="(item1, index) in item.slides"
          :key="index"
        >
          <div class="board-home-slider_box">
            <div>
              <span class="img">
                <span class="thumb"><img :src="require(`@/assets/imgs/${item1.src}`)" :alt="item1.ImgName"></span>
              </span>
              <p class="txt" v-html="item1.title"></p>
              <div class="board-home-slider_box_sort">
                <span class="pick" v-if="item1.pick">Pick</span>
                <span class="connect" v-if="item1.connect">Connect</span>
                <!-- <span class="info">
                  {{item.name}}<span v-if="item.name && item.date">・</span>{{item.date}}
                </span> -->
                <!-- <div class="sns">
                  <button type="button" class="nblog" v-if="item.nblog"><i class="blind">NAVER blog</i></button>
                  <button type="button" class="facebook" v-if="item.facebook"><i class="blind">Facebook</i></button>
                </div> -->
              </div>
            </div>
            <div class="board-home-slider_box_foot">
              <span class="hplus" v-if="item.hplus">채널Hplus</span>
              <span class="share" v-if="item.share">정보공유</span>
              <span class="days" v-if="item.days">한화데이즈</span>
              <div class="sns">
                <button type="button" class="nblog" v-if="item.nblog"><i class="blind">NAVER blog</i></button>
                <button type="button" class="facebook" v-if="item.facebook"><i class="blind">Facebook</i></button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="board-hanwha-days" v-else-if="item.hanwhaDays">
        <h2 class="title">한화데이즈</h2>
        <ul>
          <li v-for="(item, index) in item.lists" :key="index">
            <span class="txt">{{item.text}}</span>
            <span class="dates">{{item.date}}</span>
          </li>
        </ul>
        <div class="btn-wrap">
          <button type="button" class="n-blog" v-if="item.nblog"><i class="blind">NAVER blog</i></button>
          <button type="button" class="fb" v-if="item.facebook"><i class="blind">facebook</i></button>
        </div>
      </div>
      <div class="board-home-slider_box" v-else>
        <div class="nodata board">
          <span>콘텐츠가 없습니다.</span>
        </div>
        <div class="board-home-slider_box_foot">
          <span class="hplus" v-if="item.hplus">채널Hplus</span>
          <span class="share" v-if="item.share">정보공유</span>
          <span class="days" v-if="item.days">한화데이즈</span>
          <div class="sns">
            <button type="button" class="nblog" v-if="item.nblog"><i class="blind">NAVER blog</i></button>
            <button type="button" class="facebook" v-if="item.facebook"><i class="blind">Facebook</i></button>
          </div>
        </div>
      </div>
    </div>
    <coming-soon
      propComingTypeClass="coming-soon-type1 ly-01"
      propComingImgClass="coming-soon-imgBanner1"
      propComingText="채널H 최근 콘텐츠를<br>미리 볼 수 있어요"
    />
    <coming-soon
      propComingTypeClass="coming-soon-type1 ly-02_02"
      propComingImgClass="coming-soon-imgBanner2"
      propComingText="정보공유 최근 콘텐츠를<br>미리 볼 수 있어요"
    />
    <a href="main/comingSoonShare" style="position:absolute;top:0;right:0px;display:block;width:580px;height:323px;z-index:12;"></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EffectFade, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    Swiper,
		SwiperSlide,
    comingSoon,
  },
  data() {
    return {
      nodata: false,
      pagination: {
        dynamicBullets: false,
        clickable: true,
      },
      modules: [ EffectFade, Pagination, Autoplay ],
      sorts: [
        {
          hanwhaDays: false,
          slides: [
            {
              src: 'img_thumb_01.png',
              ImgName: '이미지 이름',
              title: '드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5',
              pick: true,
            },
            {
              src: 'img_thumb_02.png',
              ImgName: '이미지 이름',
              title: '드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5 드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5 드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5',
              pick: true,
            },
            {
              src: 'img_thumb_03.png',
              ImgName: '이미지 이름',
              title: '드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5',
              pick: true,
            },
          ],
          hplus: true,
        },
        {
          hanwhaDays: false,
          slides: [
            {
              src: 'img_thumb_02.png',
              ImgName: '이미지 이름',
              title: '드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5 드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5 드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5',
              connect: true,
            },
            {
              src: 'img_thumb_01.png',
              ImgName: '이미지 이름',
              title: '드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5',
              connect: true,
            },
            {
              src: 'img_thumb_03.png',
              ImgName: '이미지 이름',
              title: '드라마&lt;서른, 아홉&gt; 속 위로가 되는 클래식 [Classic Class] #5',
              connect: true,
            },
          ],
          hplus: true,
        },
        {
          hanwhaDays: false,
          slides: [
            {
              src: 'img_thumb_03.png',
              ImgName: '이미지 이름',
              title: `MS "팀즈, '원격근무 개발자' 특화 협업툴로 진화"`,
              date: '2022.05.07',
            },
          ],
          share: true
        },
        {
          hanwhaDays: false,
          slides: [
            {
              src: 'img_thumb_05.png',
              ImgName: '이미지 이름',
              title: `MS "팀즈, '원격근무 개발자' 특화 협업툴로 진화"`,
              date: '2022.05.07',
            },
          ],
          share: true
        },
      ],
    }
  }
});
</script>