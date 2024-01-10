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
      </div>
      <div class="cont tbl">
        <div v-show="currentTab == 0">
          <div class="myteam-tag_wrap">
            <div class="tag-my_search_list">
              <span v-for="(item, index) in tagList" :key="index">
                <input type="checkbox" name="" :id="item.id" :value="item.value">
                <label :for="item.id" @click="addFind($event,index)">{{item.txt}}</label>
              </span>
              <span v-show="show" class="nodata">해당 검색어와 일치하는<br>태그가 없습니다.</span>
            </div>

            <div class="tag-my_team_list">
              <span v-for="(item, index) in checkedValue" :key="index">
                {{item.txt}}
                <button type="button" class="del" @click="tagDel(index, item.id)">삭제</button>
              </span>
              <span class="nodata" v-if="checkedValue.length == 1"># 최대 3개까지 선택 가능합니다</span>
            </div>
            <button type="button" class="bn-tag_init" v-if="checkedValue.length > 0" @click="tagReset">태그 초기화</button>
          </div>
        </div>
        <div v-show="currentTab == 1">
          <div class="myteam-tag_wrap">
            <div class="tag-my_search_list">
              <span v-for="(item, index) in tagList2" :key="index">
                <input type="checkbox" name="" :id="item.id" :value="item.value">
                <label :for="item.id" @click="addFind2($event,index)">{{item.txt}}</label>
              </span>
              <span v-show="show" class="nodata">해당 검색어와 일치하는<br>태그가 없습니다.</span>
            </div>

            <div class="tag-my_team_list">
              <span v-for="(item, index) in checkedValue2" :key="index">
                {{item.txt}}
                <button type="button" class="del" @click="tagDel2(index, item.id)">삭제</button>
              </span>
              <span class="nodata" v-if="checkedValue2.length == 0"># 최대 3개까지 선택 가능합니다</span>
            </div>
            <button type="button" class="bn-tag_init" v-if="checkedValue2.length > 0" @click="tagReset2">태그 초기화</button>
        </div>
        </div>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">적용</button>
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
      isActive: false,
      showModal: this.propShowModal,
      currentTab: 0,
      tabsType: ['스킬', '직무'],
      checkedValue: [{} as any],
      checkedValue2: [{} as any],
      tagList: [
            { id: 'filter4', value: '1', txt: '# 사업기획',},
            { id: 'filter5', value: '2', txt: '# UI/UX',},
            { id: 'filter6', value: '3', txt: '# 키워드길어도다보여요',},
            { id: 'filter7', value: '4', txt: '# 키워드',},
            { id: 'filter8', value: '5', txt: '# 디자이너',},
            { id: 'filter9', value: '6', txt: '# 서비스기획자',},
            { id: 'filter10', value: '7', txt: '# M&A 전략투자',},
            { id: 'filter11', value: '8', txt: '# 계열사 관리 체계 개선',},
            { id: 'filter12', value: '9', txt: '# 잉여자본 관리',},
            { id: 'filter13', value: '10', txt: '# 투자재원관리', },
             { id: 'filter14', value: '11', txt: '# 사업기획', },
            { id: 'filter15', value: '12', txt: '# UI/UX',},
            { id: 'filter16', value: '13', txt: '# 키워드길어도다보여요',},
            { id: 'filter17', value: '14', txt: '# 키워드',},
            { id: 'filter18', value: '15', txt: '# 디자이너',},
            { id: 'filter19', value: '16', txt: '# 서비스기획자',},
            { id: 'filter20', value: '17', txt: '# M&A 전략투자',},
            { id: 'filter21', value: '18', txt: '# 계열사 관리 체계 개선',},
            { id: 'filter22', value: '19', txt: '# 잉여자본 관리',},
      ],
      tagList2: [
            { id: 'filter14', value: '11', txt: '# 사업기획', },
            { id: 'filter15', value: '12', txt: '# UI/UX',},
            { id: 'filter16', value: '13', txt: '# 키워드길어도다보여요',},
            { id: 'filter17', value: '14', txt: '# 키워드',},
            { id: 'filter18', value: '15', txt: '# 디자이너',},
            { id: 'filter19', value: '16', txt: '# 서비스기획자',},
            { id: 'filter20', value: '17', txt: '# M&A 전략투자',},
            { id: 'filter21', value: '18', txt: '# 계열사 관리 체계 개선',},
            { id: 'filter22', value: '19', txt: '# 잉여자본 관리',},
            { id: 'filter23', value: '20', txt: '# 투자재원관리', },
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
    addFind(event:any,index:any){
      let target = event.target;
      this.checkedValue.push({
          id: target.htmlFor,
          txt: target.innerText
      })
        target.parentElement.classList.toggle('selected');
    },

    tagDel(idx:any, id:any){
        this.checkedValue.splice(idx, 1);
        let ele = document.querySelector('#'+id) as any;
        ele.parentElement.classList.toggle('selected');
        ele.checked = false;
    },
    addFind2(event:any, index:any){
        let target = event.target;
        this.checkedValue2.push({
            id: target.htmlFor,
            txt: target.innerText
        })
          target.parentElement.classList.toggle('selected');
    },
    tagDel2(idx:any, id:any){
        this.checkedValue2.splice(idx, 1);
        let ele = document.querySelector('#'+id) as any;
        ele.parentElement.classList.toggle('selected');
        ele.checked = false;
    },
    tagReset(){
      this.checkedValue = [];
      this.tagList.forEach(function(elem){
          var ele = document.querySelector('#'+elem.id) as any;
          ele.parentElement.classList.remove('selected');
          ele.checked = false;

      });
    },
    tagReset2(){
      this.checkedValue2 = [];
      this.tagList2.forEach(function(elem){
          var ele = document.querySelector('#'+elem.id) as any;
          ele.parentElement.classList.remove('selected');
          ele.checked = false;

      });
    },
  }
})
</script>