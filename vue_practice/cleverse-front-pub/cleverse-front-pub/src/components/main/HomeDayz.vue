<template>  
  <div class="home-sector-02_dayz">
    <h2 class="title">한화데이즈</h2>
    <div class="sns">
      <button type="button" class="nblog"><i class="blind">NAVER blog</i></button>
      <button type="button" class="facebook"><i class="blind">Facebook</i></button>
    </div>
    <div class="daz-list__wrap" v-if="!nodata">
      <ul class="daz-list">
        <li
          v-for="(item, index) in lists"
          :key="index"
        >
          <span class="txt">{{item.title}}</span>
          <span class="dates">{{item.date}}</span>
        </li>
      </ul>
    </div>
    <div class="nodata file" v-if="nodata">
      <span>한화데이즈 콘텐츠가 없습니다.</span>
    </div>

    <coming-soon
      propComingTypeClass="coming-soon-type1 ly-03_02"
      propComingImgClass="coming-soon-imgBanner3"
      propComingText="한화데이즈 최근 콘텐츠를<br>미리 볼 수 있어요"
    />
    <a href="main/comingSoonShare" style="position:absolute;top:0;right:0;display:block;width:580px;height:312px;z-index:12;"></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    comingSoon,
  },
  data() {
    return {
      nodata: false,
      lists: [
        {
          title: '한화와 함께하는 서울세계불꽃축제 2022!한화와 함께하는 서울세계불꽃축제 2022!한화와 함께하는 서울세계불꽃축제 2022!한화와 함께하는 서울세계불꽃축제 2022!',
          date: '2022.03.14'
        },
        {
          title: '한화와 함께하는 서울세계불꽃축제 2022!',
          date: '2022.03.14'
        },
        {
          title: '서울세계불꽃축제 2022! 최고 명당에서 관람할 수 있는 골든티켓',
          date: '2022.03.14'
        },
        {
          title: '한화와 함께하는 서울세계불꽃축제 2022!한화와 함께하는 서울세계불꽃축제 2022!',
          date: '2022.03.14'
        },
        {
          title: '서울세계불꽃축제 2022! 최고 명당에서 관람할 수 있는 골든티켓',
          date: '2022.03.14'
        },
      ],
    }
  }
});
</script>