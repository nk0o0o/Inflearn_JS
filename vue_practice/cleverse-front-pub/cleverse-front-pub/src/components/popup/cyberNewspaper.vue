<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="사이버신문고"
    class="ly-pop-type1 cyber-newspaper"
  >
    <template v-slot:body>
      <p class="cyber-newspaper_header">
        <img :src="require('@/assets/imgs/icon-svg/txt-system-b.svg')" alt="한화시스템">
        임직원의 불공정한 엄무처리나 직위를 이용한<br><em>부당한 요구 및 비리 사실에 대한 제보</em>를 받으며 <em>비공개 방식</em>으로 처리됩니다.
      </p>
      <div class="cyber-newspaper_cont">
        <table>
        <colgroup>
          <col style="width:177px;">
          <col>
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">제보유형</th>
          <td>
            <ul>
              <li>
                <img :src="require('@/assets/imgs/icon-svg/txt-system-m.svg')" alt="한화시스템">
                (임직원)의 공정거래법 및 하도급법 위반행위
              </li>
              <li>임직원이 공정거래법 및 하도급법 위반행위 지시나 참여, 이를 묵인하는 행위</li>
              <li>임직원의 이중 취업 사례</li>
              <li>임직원의 공금횡령 및 수뢰 사실</li>
              <li>임직원의 부당한 업무 처리</li>
              <li>기타법규의 중대한 위반행위 및 회사의 규정 위반행위</li>
              <li>비상장 거래업체 부당 지분 참여</li>
              <li>금품, 접대 요구나 제공 사실</li>
              <li>성희롱에 따른 풍기문란 사례</li>
              <li>기타 윤리강령에 위배되는 사항</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">제보운영</th>
          <td>
            <ul>
              <li>준법/윤리경영에 위배되는 제보 시 신속하고 정확한 처리를 우선으로 합니다.</li>
              <li>처리 결과는 빠른 시일 안에 전화 또는 이메일로 알려드립니다.</li>
              <li>별도의 문의사항이나 답변이 필요한 경우에는 연락처를 남겨주십시오.</li>
              <li>제보자의 신변과 제보사항, 제보자의 비밀 등은 철저히 보호되고 있습니다.</li>
              <li>익명 제보도 가능하나 사실 확인과 내용의 정확성을 위하여 가급적 제보자의 성명, 연락처를 기재 바랍니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row" class="bd_n">연락처</th>
          <td class="bd_n">
            <ul>
              <li><strong>주소</strong>45451 서울특별시 중구 청계천로 86 한화빌딩 13F 경영진단팀</li>
              <li><strong>이메일</strong><a href="mailto:ethics.hsc@hanwha.com">ethics.hsc@hanwha.com</a></li>
              <li><strong>전화</strong>02-729-4642</li>
              <li><strong>팩스</strong>02-729-1957</li>
            </ul>
          </td>
        </tr>
        </tbody>
        </table>
      </div>
    </template>
    
	<template v-slot:btnWrap>
    <div class="btn-wrap">
      <button type="button" class="btn lg">제보하기</button>
    </div>
	</template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
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
      error: false,
      showModal: this.propShowModal,
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
    parentPwAlert(){
      // @ts-ignore 
      this.$parent.pwAlert()
    },
  }
})
</script>