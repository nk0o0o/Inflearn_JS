<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    class="ly-pop-type1 main-noti"
  >
    <template v-slot:body>
      <div class="pop-cnt">
        <div class="tab-type" id="tabsType" :class="{'active':tabActive}" v-if="isTab"> <!-- isTab: 탭 사용 유무 -->
          <ul class="tab-menu" id="heightCheck">
            <li v-for="(tab, index) in tabsType" v-bind:class="{active:currentTab===index}" :key="index">
              <button type="button" @click="currentTab = index"><span>{{tab}}</span></button>
            </li>
          </ul>
        </div>
        <div class="pop-cnt-img">
          <div v-show="currentTab == 0">
            <img :src="require('@/assets/imgs/collaboration/img/cardnews_00.jpg')" alt="공지사항이미지">
          </div>
          <div v-show="currentTab == 1">
            <img :src="require('@/assets/imgs/collaboration/img/cardnews_01.jpg')" alt="공지사항이미지">
          </div>
          <div v-show="currentTab == 2">
            <img :src="require('@/assets/imgs/collaboration/img/cardnews_03.jpg')" alt="공지사항이미지">
          </div>
          <div v-show="currentTab == 3">
            <img :src="require('@/assets/imgs/collaboration/img/cardnews_04.jpg')" alt="공지사항이미지">
          </div>
        </div>
        <div class="pop-btm">
          <div class="input-chk">
            <input type="checkbox" name="chk" id="chk1-1"><label for="chk1-1">오늘 하루 이 창을 열지 않음</label>
          </div>
        </div>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";

export default defineComponent({
  components: {
    basePopup,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      isTab: true,
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      currentTab: 0,
			tabsType: ['새로운 한화의 브랜드 비전', '채널 Hplus 2022년 10월 뉴스레터 최대 2줄까지 노출 채널 최대 2줄까지 노출', '채널 Hplus 2022년 10월 뉴스레터', '11월 오픽 그룹 정기평가 안내'],
			tabActive: false,
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
    },
    
  }
})
</script>