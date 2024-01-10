<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>공용메일관리</h3>
      </div>
  </div>

  <div class="group-admin_wrap">
    <div class="tab-content auth-sel-wrap">
      <div class="tab-menu_wrap">
        <div class="tab-type1" id="tabs-type1">
          <ul class="adm-tab-menu">
            <li :class="{'active':currentTab1===index}" v-for="(tab, index) in tabsType1" :key="index">
              <button type="button" @click="currentTab1 = index">{{tab}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont tbl">
        <div class="mail-list" v-show="currentTab1 == 0">
          <div class="auth-form">
            <div class="form-box">
              <label class="select-default">
                <span class="txt-lab">회사 선택</span>
                <select>
                  <option>한화시스템/ICT</option>
                  <option>옵션명</option>
                  <option>옵션명</option>
                </select>
              </label>
              <button class="btn md">추가</button>
            </div>
            <form action="">
              <div class="form-box">
                <div class="input-box type3 w100p">
                  <input type="text" class="w100p" required="" placeholder="검색어 입력">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                </div>
                <button type="button" class="btn md">검색</button>
                <button type="button" class="btn md line-type2">초기화</button>
              </div>
            </form>
          </div>
          
          <div class="basic-list">
            <ul>
              <li>클래버스공용메일01(mail100@hanwha.com)</li>
              <li>클래버스공용메일02(mail100@hanwha.com)</li>
              <li>클래버스공용메일03(mail100@hanwha.com)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="group-admin_regist tbl mg-l30">
      <h4 class="tit-sub">공용메일</h4>
      <ul class="list-dash mg-t10 f-14">
        <li>공용메일은 대표메일을 일반사용자들이 공유하는 기능입니다.</li>
        <li>새로운 공용메일 등록은 회사선택 우측의 [추가]버튼을 누르십시오.</li>
        <li>공용메일의 속성 또는 사용자를 변경하고자 할 경우는 공용메일을 선택하고 해당 내용을 변경하면 됩니다.</li>
        <li class="fc org">관리자화면에서는 데이터베이스에만 등록되므로 Exchange 계정은 별도로 등록해야합니다.<br>(사용자는 AD의 hanwha.com/Hanwha/회사명/Etc 하위에 등록)</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';

export default defineComponent({
  components: {
  },
  data () {
    return {
      optionLsit1: [
        { value: '한화시스템/ICT', label: '한화시스템/ICT' },
        { value: '옵션명', label: '그옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      currentTab1: 0,
      tabsType1: ['공용메일목록'],
      error: false,
      show : false,
    }
  },
  methods: {
  },
})
</script>