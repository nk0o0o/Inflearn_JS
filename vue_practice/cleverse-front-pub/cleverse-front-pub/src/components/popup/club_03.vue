<template>
  <base-popup 
    :propShowModal="showModal"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="즐겨찾기 게시판 설정"
    class="ly-pop-type1 subscribe"
  >
    <template v-slot:body>
      <div class="subscribe-pop club">
        <div class="subscribe-pop__select">
          <select-view
              :propOptionList="optionLsit"
              :propPlaceholder="'공개'"
              :propClass="'type1'"
              >
          </select-view>
        </div>

        <div class="scroll">
          <ul class="input-chk square subscribe-pop_list">
            <li v-for="(nav, index) in navigation" :key="index">
              <span>{{nav.title}}</span>
              <div class="chk">
                <input type="checkbox" name="chk" :id="`chk${nav.id}`"><label :for="`chk${nav.id}`"><span>구독하기</span><em>구독중</em></label>
              </div>
            </li>
          </ul>
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
import selectView from "@/components/selectView.vue"


export default defineComponent({
  components: {
    basePopup,
    selectView,
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
      error: false,
      showModal: this.propShowModal,
      navigation: [
        { id: '1', title:'동호회명' },
        { id: '2', title:'동호회명2' },
        { id: '3', title:'동호회명3' },
        { id: '4', title:'동호회명4' },
        { id: '5', title:'동호회명5' },
      ],
      optionLsit: [
          { value: 'test menu1', label: 'test menu1' },
          { value: 'test hover', label: 'test hover' },
          { value: 'test Selected', label: 'test Selected', disabled: true },
          { value: 'test menu4', label: 'test menu4' },
          { value: 'test menu5', label: 'test menu5' },
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