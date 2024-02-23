<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <settingLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>모바일 초기화</h2>
          </div>
          <!-- //header -->
          <div class="setting-wrap mob-reset">
            <div class="explan">
              <p class="msg-imp">모바일 초기화는 단말기 분실 및 양도 등의 사유로 기존 단말기에서 모바일 이글 오피스를 사용하지 못하게 하는 기능입니다.</p>
              <p class="msg-imp">초기화 이후에도 기존 단말기에서 모바일 이글오피스 사용이 필요하신 경우, <span class="fc org">어플 삭제 및 재설치를 통해 재인증</span>을 받으신 후 사용하시기 바랍니다.</p>
              <p class="msg-imp">초기화 방법 : 목록에서 단말 선택 후 우측의 <span class="fc org">기기 초기화</span> 버튼 클릭</p>
            </div>
            <div class="tbl type2">
              <table-lite
                :has-checkbox="true"
                :columns="columns"
                :rows="rows"
                :messages="messages"
              />
            </div>
            <div class="setting-foot">
              <button type="button" class="btn lg">기기초기화</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import settingLeft from "./settingLeft.vue"
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    settingLeft,
    TableLite,
  },
  data() {
    return {
      columns: [
        {
          label: '기기OS',
          field: 'os',
          width: '9%',
          columnClasses: 'fc dark',
        },
        {
          label: '어플명',
          field: 'app',
          width: '14%',
          columnClasses: 'fc dark',
        },
        {
          label: '기기종류',
          field: 'kind',
          width: '8%',
          columnClasses: 'fc dark',
        },
        {
          label: '모델명',
          field: 'model',
          width: '',
          columnClasses: 'fc dark',
        },
        {
          label: '기기명',
          field: 'name',
          width: '14%',
        },
        {
          label: 'OS버전',
          field: 'ver',
          width: '6%',
        },
        {
          label: '인증일',
          field: 'date',
          width: '19%',
        },
      ],
      rows: [
        {
          os: 'Android',
          app: 'APPROVAL',
          kind: 'Phone',
          model: 'Android SDK Built for x86',
          name: 'galaxy 00',
          ver: '10.1',
          date: '2022.11.23 11:23:38:0',
        },
        {
          os: 'Android',
          app: 'APPROVAL',
          kind: 'Phone',
          model: 'Android SDK Built for x86',
          name: 'galaxy 00',
          ver: '10.1',
          date: '2022.11.23 11:23:38:0',
        },
        {
          os: 'Android',
          app: 'APPROVAL',
          kind: 'Phone',
          model: 'Android SDK Built for x86',
          name: 'galaxy 00',
          ver: '10.1',
          date: '2022.11.23 11:23:38:0',
        },
        {
          os: 'Android',
          app: 'APPROVAL',
          kind: 'Phone',
          model: 'Android SDK Built for x86',
          name: 'galaxy 00',
          ver: '10.1',
          date: '2022.11.23 11:23:38:0',
        },
        {
          os: 'Android',
          app: 'APPROVAL',
          kind: 'Phone',
          model: 'Android SDK Built for x86',
          name: 'galaxy 00',
          ver: '10.1',
          date: '2022.11.23 11:23:38:0',
        },
      ],
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: '',
        gotoPageLabel: '',
        noDataAvailable: "No data",
      },
    };
  },
  methods: {

  },
})
</script>