<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>부문별 구성원</h3>
      </div>
  </div>

  <div class="top-util-wrap">
      <div class="left">
    <select-view 
      :propOptionList="optionLsit"
      :propPlaceholder="'공개'"
      :propClass="'type1'"
      >
    </select-view>
      </div>
      <div class="right">
          <button type="button" class="btn md" @click="admOrg">신규 사용자 추가</button>
      </div>
  </div>

  <div class="tbl">
    <div class="tbl_header">
      <div class="left">
          <div class="num">총 <b>00</b>건</div>
      </div>
      <div class="right">
          <form action="">
            <div class="input-box search-type5">
                <input type="text" required placeholder="사용자명 검색">
                <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                <div class="list">
                    <ul>
                        <li>내 과제/내가 속한 과제 리스트</li>
                        <li>Digital C.P.C. 기반 구축 </li>
                        <li>Digital Infra 구축</li>
                        <li>Digital Infra 구축</li>
                    </ul>
                </div>
            </div>
            <button type="button" class="btn md line-type1">삭제</button>
        </form>
      </div>
    </div>

    <table-lite
      :has-checkbox="true"
      :is-loading="isLoading"
      :columns="columns"
      :rows="rows"
      :total="totalRecordCount"
      :sortable="sortable"
      :messages="messages"
    />
  </div>

  <!-- s:조직도 팝업 -->
  <adm-org 
    :propShowModal="showModal"
    @popClose="onHideModal"
  ></adm-org>
  <!-- //e:조직도 팝업 -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';
import TableLite from "vue3-table-lite/ts";
import selectView from "@/components/selectView.vue";
import admOrg from "@/components/popup/admOrg.vue";

export default defineComponent({
    components: {
    TableLite,
    selectView,
    admOrg,
    },
    data () {
      return {
        error: false,
        show : false,
        optionLsit: [
          { value: 'test menu1', label: 'test menu1' },
          { value: 'test hover', label: 'test hover' },
          { value: 'test Selected', label: 'test Selected', disabled: true },
          { value: 'test menu4', label: 'test menu4' },
          { value: 'test menu5', label: 'test menu5' },
        ],
        showModal: false,
        isLoading: false,
        columns: [
          {
            label: "사용자ID",
            field: "id",
            width: "20%",
            sortable: false,
            isKey: true,
          },
          {
            label: "사용자명",
            field: "name",
            width: "20%",
            sortable: false,
          },
          {
            label: "대표부문",
            field: "content",
            width: "",
            sortable: true,
          },
          {
            label: "변경",
            field: "btn",
            width: "10%",
            sortable: false,
            display: function (row:any) {
              return (
                '<button type="button" class="btn sm line-type1">' +
                '변경' +
                '</button>'
              );
            },
          },
        ],
        rows: [
          {
            id: 22020202,
            name: "박준현",
            content: "신사업부문신사업부문신사업부문신사업부문",
          },
          {
            id: 22020202,
            name: "박준현",
            content: "신사업부문신사업부문신사업부문신사업부문",
          },
          {
            id: 22020202,
            name: "박준현",
            content: "신사업부문신사업부문신사업부문신사업부문",
          }
        ],
        totalRecordCount: 50,
        sortable: {
          order: "id",
          sort: "asc",
        },
      }
    },
    methods: {
      onHideModal(){
        this.showModal = false
      },
      admOrg(){
        this.showModal = true
      },
    },
})
</script>