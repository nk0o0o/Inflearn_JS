<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title=""
    class="ly-pop-type1 admin no-title"
  >
    <template v-slot:body>
      <div class="tab-type3" id="tabs-type">
        <ul class="tab-menu line-type">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
        <div class="tooltip-b tutorial skill" v-if="tutorialClose">
          <ul class="list-dot">
            <li>스킬 태그도 함께 선택 후 저장해주세요</li>
          </ul>
          <button type="button" class="tutorial-close" @click="tutorialBtn"><span class="hide">닫기</span></button>
        </div>
      </div>
      <div class="cont tbl">
        <div v-show="currentTab == 0">
          <div class="myteam-tag_wrap">
            <p class="info">나의 직무 태그를 선택해 주세요</p>
            <div class="tag-my_team_list">
              <span v-for="(item) in checkedValue" :key="item.id">
                {{item.txt}}
                <button type="button" class="del" @click="tagDel(item)">삭제</button>
              </span>
              <span class="nodata" v-if="checkedValue.length == 0"># 직무 태그</span>
            </div>
            <div>
              <form action="">
                <div class="input-box search-type1 h50 full">
                  <input type="text" required placeholder="태그 검색">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
            </div>
            <div class="tag-my_search_list">
              <span v-for="(item) in unCheckedValue" :key="item.id">
                  <input type="checkbox" name="" :id="item.id" :value="item.value">
                  <label :for="item.id" @click="item.selected = !item.selected">{{item.txt}}</label>
              </span>
              <span v-show="show" class="nodata">해당 검색어와 일치하는<br>태그가 없습니다.</span>
            </div>
        </div>
        </div>
        <div v-show="currentTab == 1">
          <div class="myteam-tag_wrap">
            <p class="info">나의 스킬 태그를 선택해 주세요</p>
            <div class="tag-my_team_list">
              <span v-for="(item) in checkedValue2" :key="item.id">
                {{item.txt}}
                <button type="button" class="del" @click="tagDel(item)">삭제</button>
              </span>
            </div>
            <div>
              <form action="">
                <div class="input-box search-type1 h50 full">
                  <input type="text" required placeholder="태그 검색">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
            </div>
            <div class="tag-my_search_list">
              <span v-for="(item) in tagList2" :key="item.id">
                <input type="checkbox" name="" :id="item.id" :value="item.value">
                <label :for="item.id" @click="item.selected = !item.selected">{{item.txt}}</label>
              </span>
            </div>
        </div>
        </div>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">저장</button>
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
  computed:{
    checkedValue(){
      return this.tagList.filter(item => item.selected == true)
    },
    unCheckedValue(){
      return this.tagList.filter(item => item.selected == false)
    },
    checkedValue2(){
      return this.tagList2.filter(item => item.selected == true)
    },
    unCheckedValue2(){
      return this.tagList2.filter(item => item.selected == false)
    }
  },
  data(){
    return{
      isActive: false,
      showModal: this.propShowModal,
      currentTab: 0,
      tabsType: ['직무', '스킬'],
      tutorialClose: true,
      tagList: [
            { id: 'filter4', value: '1', txt: '# 사업기획', selected: false,},
            { id: 'filter5', value: '2', txt: '# UI/UX', selected: false,},
            { id: 'filter6', value: '3', txt: '# 키워드길어도다보여요', selected: false,},
            { id: 'filter7', value: '4', txt: '# 키워드', selected: false,},
            { id: 'filter8', value: '5', txt: '# 디자이너', selected: false,},
            { id: 'filter9', value: '6', txt: '# 서비스기획자', selected: false,},
            { id: 'filter10', value: '7', txt: '# M&A 전략투자', selected: false,},
            { id: 'filter11', value: '8', txt: '# 계열사 관리 체계 개선', selected: false,},
            { id: 'filter12', value: '9', txt: '# 잉여자본 관리', selected: false,},
            { id: 'filter13', value: '10', txt: '# 투자재원관리',  selected: false,},
      ],
      tagList2: [
            { id: 'filter14', value: '11', txt: '# 사업기획',  selected: false,},
            { id: 'filter15', value: '12', txt: '# UI/UX', selected: false,},
            { id: 'filter16', value: '13', txt: '# 키워드길어도다보여요', selected: false,},
            { id: 'filter17', value: '14', txt: '# 키워드', selected: false,},
            { id: 'filter18', value: '15', txt: '# 디자이너', selected: false,},
            { id: 'filter19', value: '16', txt: '# 서비스기획자', selected: false,},
            { id: 'filter20', value: '17', txt: '# M&A 전략투자', selected: false,},
            { id: 'filter21', value: '18', txt: '# 계열사 관리 체계 개선', selected: false,},
            { id: 'filter22', value: '19', txt: '# 잉여자본 관리', selected: false,},
            { id: 'filter23', value: '20', txt: '# 투자재원관리',  selected: false,},
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
    tutorialBtn(){
      this.tutorialClose = false;
    },
    tagDel(item:any){
        item.selected = false;
    },
  }
})
</script>