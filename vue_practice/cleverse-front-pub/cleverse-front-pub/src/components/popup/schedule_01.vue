<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    class="ly-pop-type1 schedule"
  >
    <template v-slot:body>
      <h2 class="schedule-h2">[프로젝트] 업무공유시스템 구축 프로젝트팀 주간협의 일정입니다. 이벤트 제목 최대 2줄 표시. 긴 경우 … 처리 이벤트 제목 최대 2줄 표시. 긴 경우 … 처리 이벤트…</h2>
      <div class="schedule-cont">
        <ul>
          <li>
            <em class="dates">일시</em>
            <span>2022.03.01(월) 13:30 - 15:00</span>
          </li>
          <li>
            <em class="location">장소</em>
            <span>여의도 63빌딩 6층 9pod</span>
          </li>
          <li>
            <em class="member">참석자</em>
            <div class="member-list" :class="{active: isClass}">
              <button type="button" @click="toggleClass">김한화 외 4명</button>
              <ul>
                <li>
                    <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                    <span class="name">김한화 과장님과장님과장님과장님과장님과장님과장님과장님과장님과장님과장님</span>
                </li>
                <li>
                    <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                    <span class="name">김한화</span>
                </li>
                <li>
                    <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                    <span class="name">김한화</span>
                </li>
                <li>
                    <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                    <span class="name">김한화</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <p class="txt">
          내용영역입니다. 내용영역입니다. 내용영역입니다. 내용영역입니다. 내용영역입니다. 내용영역입니다. 내용영역입니다.<br><br>
          줄바꿈 적용됩니다.<br>
          줄바꿈 적용됩니다.<br><br>
          링크가 있는 경우 하이퍼링크 기능 적용됩니다.<br>
          Zoom 회의 참가<br>
          <a>https://zoom.us/dlfkdlfskldsfkf/sdfdlfkdjsfldskfjdlksfjldskfjdlskfjdslkfds/sdfkldskfjsdlfkdslfkdsflsdkflsdkfsldfkdslfkdslfdskfldskfdslfkdsfldksflsdkfdkkdn/abdlfkdlfkslfkelfklefk</a>
        </p>
      </div>
    </template>
    
	<template v-slot:btnWrap>
    <div class="btn-wrap right">
      <button type="button" class="btn lg line-type2">취소</button>
      <button type="button" class="btn lg">확인</button>
    </div>
	</template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
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
      isActive: false,
      isClass: false,
      error: false,
      showModal: this.propShowModal,
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
    parentPwAlert(){
      // @ts-ignore 
      this.$parent.pwAlert()
    },
    toggleClass(){
      this.isClass = !this.isClass;
    }
  }
})
</script>