<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="주요 업무 이력"
    class="ly-pop-type1 admin lg"
  >
    <template v-slot:body>
      <div class="scroll_pd">
        <ul class="mytask-list_wrap">
          <li v-for="(item, index) in mysList" :key="index" :class="{modify: item.modify}">
            <div v-show="item.list" class="mytask-list_default">
              <span class="date">{{item.date}}</span>
              <span class="txt">
                <span class="ell-singleline">{{item.title}}</span>
              </span>
              <span class="role">
                <span class="ell-singleline">{{item.role}}</span>
              </span>
              <span class="edit">
                <button type="button">편집</button>
              </span>
              <span class="delete">
                <button type="button">삭제</button>
              </span>
            </div>
            <div v-show="item.regist" class="mytask-list_regist">
              <div class="flex jc-sb">
                <div class="flex">
                  <div class="date h40">
                    <Datepicker 
                      weekStart="0"
                      v-model="rangeDate"
                      range 
                      :format="rangeFormat"
                      :enableTimePicker="false"/>
                  </div>
                  <div class="input-chk mg-l20"><input type="checkbox" name="chk" id="chk1-1"><label for="chk1-1">진행중</label></div>
                </div>
                <div class="bn">
                  <button type="button" class="bn_cancel">취소</button>
                  <button type="button" class="bn_regist">저장</button>
                </div>
              </div>
              <div class="flex jc-sb as mg-t10">
                <div class="input-box full h50">
                  <input type="text" required placeholder="프로젝트명 입력(40자 내외)">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
                <div class="input-box h50">
                  <input type="text" required placeholder="역할 입력(10자 내외)">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </div>
            </div>

          </li>
          
        </ul>
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
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    basePopup,
    Datepicker,
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
      rangeDate: [new Date(),new Date()],
      mysList: [
        {
          modify: false,
          regist: false,
          list: true,
          date: '2020.11.05 -  2021.01.30',
          title: '업무공유 시스템 화면 설계2',
          role: '시스템 개발 담당',
        },
        {
          modify: true,
          regist: true,
          list: true,
          date: '2020.11.05 -  2021.01.30',
          title: '업무공유 시스템 화면 설계',
          role: '시스템 개발 담당',
        },
        {
          modify: false,
          regist: false,
          list: true,
          date: '2020.11.05 -  2021.01.30',
          title: '업무공유 시스템 화면 설계2',
          role: '시스템 개발 담당',
        },
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
    rangeFormat(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();

      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();

      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  }
})
</script>