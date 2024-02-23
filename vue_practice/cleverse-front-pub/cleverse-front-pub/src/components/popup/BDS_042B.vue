<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="새 협업보드 만들기"
    class="ly-pop-type1 md"
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
                  <input type="text" required placeholder="제목 입력">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                </div>
              </td>
            </tr>
            <tr>
              <th>협업 멤버</th>
              <td>
                <div class="mix-list_area node">
                  <div class="info-l">
                    <div class="cont flex">
                      <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="프로필 이미지"></span>
                      <div class="dropdown-collab-type10 num">
                        <personnel-setdropdown
                          :propNum="'+99'"
                        >
                        </personnel-setdropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>날짜입력</th>
              <td>
                <div class="date h40">
                  <Datepicker 
                    weekStart="0"
                    v-model="rangeDate"
                    range 
                    :format="rangeFormat"
                    :enableTimePicker="false"/>
                </div>
              </td>
            </tr>
            <tr>
              <th>공개설정</th>
              <td>
                <div class="flex">
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'공개'"
                    :propClass="'type1 h40'"
                    >
                  </select-view>
                  <div class="dropdown-type2 tooltip mg-l10">
                    <dropdown-menu2
                      :propItem="dropItem"
                      :propClass="'dropdown-type2-list'"
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
import Datepicker from '@vuepic/vue-datepicker'
import selectView from "@/components/selectView.vue"
import personnelSetdropdown from '@/components/personnelSetdropdown.vue';

export default defineComponent({
  components: {
    basePopup,
    dropdownMenu2,
    Datepicker,
    selectView,
    personnelSetdropdown
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
      optionLsit: [
        { value: '공개', label: '공개' },
        { value: '비공개', label: '비공개' },
      ],
      dropItem: { 
        title: `
          <b>공개 / 비공개란?</b>
          <ul>
            <li>공개노드는 조직원 전체가 조회 가능한 노드 형태입니다.</li> 
            <li>비공개 노드를 선택하시면, 해당 멤버와 위원회 및 임원들만 조회 가능한 시크릿 노드로 신청됩니다.</li>
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