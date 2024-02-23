<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="새 협업공간 만들기"
    class="ly-pop-type1 collab-board-pop"
  >
    <template v-slot:body>
      <div class="tbl data-type">
        <table>
          <colgroup>
           <col style="width:25%">
           <col>
          </colgroup>
          <tbody>
            <tr>
              <th>협업공간</th>
              <td>
                <div class="input-box full">
                  <input type="text" required placeholder="협업공간명">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
              </div>
              </td>
            </tr>
            <tr>
              <th>멤버</th>
              <td>
                <div class="mix-list_area node">
                  <div class="info-l">
                    <div class="cont flex">
                      <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="프로필 이미지"></span>
                      <div class="dropdown-collab-type10">
                        <personnel-setdropdownv2></personnel-setdropdownv2>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>공개설정</th>
              <td>
                <div class="flex">
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'멤버공개'"
                    :propClass="'type1 h40'"
                    >
                  </select-view>
                  <div class="dropdown-type2 tooltip mg-l10">
                    <dropdown-menu2
                      :propItem="dropItem"
                      :propClass="'dropdown-type2-list type3'"
                      :propLocation="'bottom start'"
                    >
                    </dropdown-menu2>
                </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">만들기</button>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import selectView from "@/components/selectView.vue"
import personnelSetdropdownv2 from '@/components/personnelSetdropdownv2.vue';

export default defineComponent({
  components: {
    basePopup,
    dropdownMenu2,
    selectView,
    personnelSetdropdownv2
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
      optionLsit: [
        { value: 'select1', label: '전체 공개' },
        { value: 'select2', label: '멤버 공개' },
      ],
      dropItem: { 
        title: `
          <b>전체 공개 / 멤버 공개란?</b>
          <ul>
            <li>전체 공개 - 조직원 전체 조회 가능</li> 
            <li>멤버 공개 - 멤버만 조회 가능</li>
          </ul>
        `,
      },
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