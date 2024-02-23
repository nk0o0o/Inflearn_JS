<template>
  <base-popup 
    :propShowModal="showModal"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="즐겨찾기 게시판 설정"
    class="ly-pop-type1 subscribe"
  >
    <template v-slot:body>
      <div class="subscribe-pop">
        <div class="tab-type3">
          <ul class="tab-menu">
            <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
              <button type="button" @click="currentTab = index">{{tab}}</button>
            </li>
          </ul>
          <div class="tab-content">
            <!-- <div class="input-chk square subscribe-pop_all">
              <input type="checkbox" name="chk" id="chk0"><label for="chk0">전체구독</label>
            </div> -->
            <div v-show="currentTab == 0">
              <div class="scroll">
                <ul class="input-chk square subscribe-pop_list">
                  <li class="" 
                    v-for="(nav, index) in navigation" 
                    :key="index" 
                    :class="{ depicon: nav.dep2, active: nav.isActive }"
                  >
                    <button 
                      type="button" 
                      @click="nav.isToggle ? nav.isActive = !nav.isActive : ''"
                    >
                    <span>{{nav.title}}</span></button>
                    <div class="chk">
                      <input type="checkbox" name="chk" :id="`chk${nav.id}`"><label :for="`chk${nav.id}`"><span>구독하기</span><em>구독중</em></label>
                    </div>
                    <ul class="dep" v-if="nav.dep2">
                      <li class="" 
                        v-for="(nav2, index) in nav.dep2" 
                        :key="index" 
                        :class="{ depicon: nav2.dep3, active: nav2.isActive }"
                      >
                        <button 
                          type="button" 
                          @click="nav2.isToggle ? nav2.isActive = !nav2.isActive : ''"
                        ><span>{{nav2.title}}</span></button>
                        <div class="chk">
                          <input type="checkbox" name="chk" :id="`chk${nav2.id}`"><label :for="`chk${nav2.id}`"><span>구독하기</span><em>구독중</em></label>
                        </div>
                        <ul class="dep" v-if="nav2.dep3">
                          <li 
                            v-for="(nav3, index) in nav2.dep3" 
                            :key="index"
                          >
                            <button type="button"><span>{{nav3.title}}</span></button>
                            <div class="chk">
                              <input type="checkbox" name="chk" :id="`chk${nav3.id}`"><label :for="`chk${nav3.id}`"><span>구독하기</span><em>구독중</em></label>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div v-show="currentTab == 1">
              
            </div>
          </div>
        </div>
      </div>  
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">저장</button>
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
      follow: false,
      error: false,
      showModal: this.propShowModal,
      currentTab: 0,
      tabsType: ['그룹 게시판', '회사 게시판'],
      navigation: [
        { id: '1', 
          title:'공지사항', 
          dep2: [
            { id: '1-1', title: '공지사항' },
            { id: '1-2', title: '경조사' },
            { id: '1-3', 
              title: '인사발령', 
              dep3: [
                { id: '1-3-1', title: '공지사항' },
                { id: '1-3-2', title: '경조사' },
                { id: '1-3-3', title: '사이다' },
              ],
              isToggle: true,
              isActive: false,
            },
          ],
          isToggle: true,
          isActive: false,
        },
        { id: '2', title:'신HR제도 Q&A' },
        { id: '3', title:'사옥이전관련' },
        { id: '4', title:'사이다' },
        { id: '5', title:'채용' },
      ],
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
  },
  computed: {
  }
})
</script>