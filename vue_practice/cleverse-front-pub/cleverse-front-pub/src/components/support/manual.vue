<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <div class="manual-wrap">
        <div class="manual-head">
          <h2>Customer Service Center</h2>
          <p>Cleverse에서 제공하는 다양한 기능들을 알아보세요.</p>
        </div>
        <h3 class="tit">처음 사용자 가이드 <button type="button" class="ico-set">무선랜(LAN) 설정가이드</button></h3>
        <div class="flex jc-sb as col-3">
          <div class="box">
            <strong>아웃룩 (메일,일정 등)</strong>
            <ul class="list-down">
              <li v-for="(item, index) in guide1" :key="index">
                <button type="button" class="download">{{item.name}}</button>
              </li>
            </ul>
          </div>
          <div class="box">
            <strong>메신저</strong>
            <ul class="list-down">
              <li v-for="(item, index) in guide2" :key="index">
                <button type="button" class="download">{{item.name}}</button>
              </li>
            </ul>
          </div>
          <div class="box">
            <strong>Cleverse</strong>
            <ul class="list-down">
              <li v-for="(item, index) in guide3" :key="index">
                <button type="button" class="download">{{item.name}}</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex as col-2 box-2">
          <div class="box">
            <strong>모바일 앱 설치</strong>
            <ul class="list-down">
              <li v-for="(item, index) in guide4" :key="index">
                <button type="button" class="download">{{item.name}}</button>
              </li>
            </ul>
          </div>
          <div class="box qr">
            <strong>모바일 웹 브라우저에 아래 <b class="fc org">URL을 입력</b>하시거나<br><b class="fc org">QR코드를 스캔</b>하여 접속하세요.</strong>
            <div>
              <div class="input-box type3 round-type">
                <input type="text" required value="appstore.hawha.com" disabled class="pd-l10">
              </div>
            </div>
            <div class="sms">
              <strong>SMS로 설치 경로 받기</strong>
              <div class="input-box type3 round-type">
                <input type="number" required placeholder="010-2345-6789" disabled class="pd-l10">
              </div>
              <button type="button" class="btn sm round-type">전송</button>
              <p class="msg-imp mg-t10">위 번호가 맞지 않을 경우, 개인정보에서 모바일 번호를 수정하세요.</p>
            </div>
            <div class="qr-code">
              <img :src="require('@/assets/imgs/guide_qr.png')" alt="QR코드 스캔이미지">
            </div>
          </div>
        </div>
        <h3 class="tit">PC 사용자 가이드</h3>
        <div>
          <div class="box">
            <ul class="list-down type2">
              <li v-for="(item, index) in guide5" :key="index">
                <button type="button" class="download">{{item.name}}</button>
              </li>
            </ul>
          </div>
        </div>
        <h3 class="tit">Mobile 사용자 가이드</h3>
        <div>
          <div class="box">
            <ul class="list-down type2">
              <li v-for="(item, index) in guide6" :key="index">
                <button type="button" class="download">{{item.name}}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  data() {
    return {
      guide1: [
        { name: '설치 매뉴얼' },
        { name: 'Add-in 확장기능' },
      ],
      guide2: [
        { name: '설치 매뉴얼' },
        { name: 'Add-in 확장기능' },
      ],
      guide3: [
        { name: 'PC 설정' },
        { name: '설치 프로그램' },
      ],
      guide4: [
        { name: 'Mobile 설정' },
      ],
      guide5: [
        { name: '아웃룩 (메일, 일정 등)' },
        { name: '메신저' },
        { name: '전자결재' },
        { name: '게시판' },
        { name: '지원업무' },
        { name: 'My, Team, Map' },
        { name: '설문' },
        { name: '정보공유' },
        { name: '협업공간' },
        { name: '알림' },
        // { name: '홈/공통 유틸' },
      ],
      guide6: [
        { name: '앱스토어' },
        { name: '포탈' },
        { name: '메일' },
        { name: '전자결재' },
        { name: '게시판' },
        { name: '일정' },
        { name: '연락처' },
        { name: '알림설정' },
        { name: '협업공간' },
        { name: 'Active Sync (IOS)' },
        { name: 'Active Sync (Android)' },
      ],
    };
  },
  methods: {
  },
  computed: {
  }
})
</script>