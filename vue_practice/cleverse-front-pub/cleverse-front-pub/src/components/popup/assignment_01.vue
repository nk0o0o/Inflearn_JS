<template>
  <base-popup
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="과제연결/해제"
    class="ly-pop-type1 lg"
  >
    <template v-slot:body>
      <div class="assign-connect_wrap">
        <div class="assign-connect_head">
          <h2 class="tit">현업 플랫폼 구축</h2>
          <div class="dropdown-collab-type6">
            <filter-assign></filter-assign>
          </div>
        </div>
        <div class="assign-connect_board">
          <table>
            <colgroup>
            <col>
            <col style="width: 356px;">
            </colgroup>
            <thead>
            <tr>
              <th scope="col">과제명</th>
              <th scope="col">태그</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in assigns" :key="index">
              <td>
                <div class="input-chk square">
                  <input type="checkbox" name="" :id="`assign${item.id}`"><label :for="`assign${item.id}`"><span>{{item.title}}</span></label>
                </div>
              </td>
              <td class="txt_r" v-html="item.tag"></td>
            </tr>
            </tbody>
          </table>
        </div>
        <h2 class="tit">연결된 과제</h2>
        <div class="assign-connect_list">
          <em
            class="nodata"
            v-if="lists.length == 0"
          >연결된 과제가 없습니다.</em>
          <span
            class="connect_item"
            v-else
            v-for="(item, index) in lists" :key="index"
          >
            {{item.title}}
            <button type="button" class="bn_del"><i class="blind">삭제</i></button>
          </span>
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
import filterAssign from '@/components/filterAssign.vue';


export default defineComponent({
  components: {
    basePopup,
    filterAssign,
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
      error: false,
      showModal: this.propShowModal,
      optionLsit: [
        { value: '메인화면', label: '메인화면' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      assigns: [
        {
          id: '1',
          title: 'CSR디지털 플랫폼 구축1',
          tag:
            `
              <span class="tag c01">중점과제중점과제중점과제중점과제중점과제중점과제중점과제중점과제</span>
              <span class="tag c02">주요과제주요과제주요과제주요과제주요과제주요과제주요과제주요과제</span>
            `
        },
        {
          id: '2',
          title: 'Sales 촉진을 위한 브랜드 마케팅',
          tag:
            `
              <span class="tag c04">주요과제</span>
              <span class="tag c05">일상과제</span>
            `
        },
        {
          id: '3',
          title: '기업PR 전략 및 캠페인',
          tag:
            `
              <span class="tag c06">주요과제</span>
            `
        },
        {
          id: '4',
          title: '세일즈 플랫폼 구축',
          tag:
            `
              <span class="tag c07">중점과제중점과제중점과제중점과제중점과제중점과제중점과제중점과제중점과제</span>
              <span class="tag c08">일상과제일상과제일상과제일상과제일상과제일상과제일상과제일상과제일상과제</span>
              <button type="button" class="bn_tag_more"><i class="blind">태그 더보기</i></button>
            `
        },
      ],
      lists: [
        { title: 'Sales 촉진을 위한 브랜드 마케팅' },
        { title: 'Sales 촉진을 위한 브랜드 마케팅' },
      ]
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