<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal"
    :propIsScrollClass="true"
    title="퇴직 절차 Check-list"
    class="ly-pop-type1 xl retire-check-list"
  >
    <template v-slot:body>
     <table>
        <colgroup>
        <col style="width:160px;">
        <col style="width:160px;">
        <col style="width:100px;">
        <col>
        <col style="width:85px;">
        </colgroup>
        <thead>
        <tr>
          <th scope="col">담당부서</th>
          <th scope="col">구분</th>
          <th scope="col">담당자</th>
          <th scope="col">방법</th>
          <th scope="col">확인</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in CheckList" :key="index">
          <td v-if="item.charge" :rowspan="item.row">{{item.charge}}</td>
          <td v-html="item.division"></td>
          <td v-html="item.manager"></td>
          <td class="subject" v-html="item.method"></td>
          <td>
            <div class="input-chk square"> 
              <input type="checkbox" :id="`chk${item.check}`">
              <label :for="`chk${item.check}`"></label> 
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="txt_wrap"> 
        <p class="str">* 근속 1년 미만 퇴직자의 경우 연차사용에 유의 바랍니다.</p>
        <ul>
          <li>
            - 재직 1년 미만의 경우, 시스템에 입력된 일수가 아닌 1개월 만근 시 1개 사용 가능합니다.<br>
            (시스템 상 사용가능일수는 연말 재직 시까지 사용 가능한 일수입니다. )
          </li>
          <li>- 초과 연차 사용분은 퇴직정산시 공제되며, 해당 금액이 퇴직금/퇴직급여를 초과하였을 경우 입금요청이 있을 수 있습니다.</li>
        </ul>
        <p class="str">* 4대보험 : 퇴직일 익일 기준으로 상실 처리</p>
        <ul>
          <li>- 건강보험 : 퇴직 후 36개월 간 임의계속 가입자 가입 가능 (직장가입자 기준 보험료 납부)</li>
          <li>- 자세한 사항은 건강보험공단<em>(<span class="underline">1577-1000</span>)</em>으로 개별적으로 문의하시기 바랍니다.</li>
        </ul>
        <p class="str">* 퇴직관련서류(경력증명서, 원천징수영수증, 퇴직종합정산서 등)는 퇴직금 지급 시점<em>(<span class="underline">퇴직 후 14일 이내</span>)</em>에 사직서에 기입한 개인 E-mail로 전달드립니다.</p>
      </div>
      <div class="agree_wrap">
        <strong>동의사항</strong>
        <ol>
          <li>
            <span class="indent_wrap">
              <span class="indent">1.</span> 상기사항 外 4대보험 정산분, 복지몰 포인트 이용실적 등이 최종퇴직금에서 공제될 수 있습니다.<br>
              (퇴직금은 이를 포함한 모든 공제내역을 정산, 세금 계산 후 경비계좌로 입금됩니다.)
            </span>
          </li>
          <li>
            <span class="indent_wrap">
              <span class="indent">2.</span> 퇴직금 및 퇴직정산분은 4대보험 상실 이후 지급을 원칙으로 하며, 세법에 따른 세금 정산 과정 및 회사 내부 불가피한 사정 등에 따라<br>
              퇴직일 14일 이후 지급될 수 있음을 확인하였습니다.<br>
              (단, 14일 이후 지급되는 경우 사용자는 근로자에게 이를 사전에 공지하고, 퇴직금 지급시점을 협의하여 통보한다.)
            </span>
          </li>
          <li>
            <span class="indent_wrap">
              <em><span class="indent">3.</span> 퇴직정산분이 퇴직금/퇴직급여를 초과하였을 경우, 입금요청이 있을 수 있으며 이에 적극 협조하겠습니다.<br>
              본인은 상기 사항을 숙지하고 이를 성실히 준수 및 이행할 것을 동의합니다.</em>
            </span>
          </li>
          <li>
            <span class="indent_wrap">
              <em><span class="indent">4.</span> 퇴직금이 개인형퇴직연금계좌(IRP)(가상계좌)로 지급되는 것에 동의합니다.</em><br>
              본인은 상기 사항을 숙지하고 이를 성실히 준수 및 이행할 것을 동의합니다.
            </span>
          </li>
        </ol>
        <div class="input-chk square"> 
          <input type="checkbox" id="agreeCheck">
          <label for="agreeCheck">동의</label> 
        </div>
      </div>
      <p class="alert">*본 내용은 사직서 하단에서도 확인이 가능합니다.</p>
    </template>
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn lg">확인</button>
		</div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";

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
      CheckList: [
        {
          check: 1,
          charge: '본인',
          division: '<em class="cl_blue">경비계좌 등록</em>',
          manager: '<em>퇴사자 본인</em>',
          method: 
          `
            <em class="cl_blue">최소 일주일 전 등록 필수(경비계좌로 퇴직금 및 퇴직급여 지급)</em><br>
            <em>※ 계좌등록절차: 서클>지원업무>자금기타>매뉴얼참고(담당자: 금융팀 유형래)</em>
          `,
        },
        {
          check: 2,
          row: 5,
          charge: '인사운영팀(ICT)',
          division: '우리사주 인출',
          manager: '조휘제',
          method: 
          `
          <div class="indent_wrap">
            <span class="indent">1)</span> 19년 IPO 우리사주 : 퇴직 전 인출신청(우리사주 시스템)<br>
            <span class="indent">2)</span> 21년 유상증자 우리사주 : 퇴직 전 인출신청, 퇴직 후 한국증권금융 시스템에서 매도상환 진행
          </div>
          `,
        },
        {
          check: 3,
          division: '출입카드 반납',
          manager: '인사운영팀',
          method: 
          `
            퇴직일 전 반납(여의도 손해보험빌딩 15층)
          `,
        },
        {
          check: 4,
          division: '퇴직급',
          manager: '권수영',
          method: 
          `
            퇴직일로부터 14일 이내 개인 경비계좌로 지급
          `,
        },
        {
          check: 5,
          division: '복지몰 이용 실적',
          manager: '권수영',
          method: 
          `
            포인트 이용 실적 확인<br>
            <em>※ 리프레시포인트 기준 미충족 시 사용금액 회수할 수 있음</em>
          `,
        },
        {
          check: 6,
          division: '프로젝트 수당',
          manager: '권수영',
          method: 
          `
            프로젝트 수행중인 퇴직예정자의 경우 퇴직일 前 사업본부(센터, 실)장 승인을 받아 본인이 퇴직당월 수당 품의 상신<br>
            *수당 품의 양식 및 결재선은 게시판 공지 참고<br>
            (http://snc.eagleoffice.co.kr/neo/sc/0163d7cb2956a31751)
          `,
        },
        {
          check: 7,
          row: 2,
          charge: '금융팀',
          division: '법인카드 해지',
          manager: '김지민',
          method: 
          `
          <div class="indent_wrap">
            <span class="indent">1)</span> Smart ERP 內 사용내역 전표 처리 (미처리시 개인사용분으로 처리)<br>
            <span class="indent">2)</span> 미결제분에 대해 카드사 ARS로 연결 후 개인비용으로 선결제 처리<br>
            (법인카드 담당자 확인요청)<br>
            -> 차주 수요일에 선결제 처리금액 경비통장으로 지급<br>
            <span class="indent">3)</span> 퇴직 1일전까지 선결제 영수증 법인카드 담당자에게 메일 송부 후 법인카드 자체 폐기
          </div>
          `,
        },
        {
          check: 8,
          division: '우리은행 담보대출 상환<br>(유상증자 신주인수권 관련)',
          manager: '이상욱',
          method: 
          `
          <div class="indent_wrap">
            <span class="indent">1)</span> 담보대출 미이용자: 금융팀 담당자 확인<br>
            <span class="indent">2)</span> 담보대출 이용자<br>
            ①우리은행 대출금 상환 완료<br>
            ②상환 완료 증빙 캡처본 금융팀 제출(finance2@hanwha.com)
          </div>
          `,
        },
        {
          check: 9,
          charge: '회계팀(ICT)',
          division: '선급금 정산',
          manager: '주민식',
          method: 
          `
            퇴직 1일 전까지 회계팀 담당자에게 확인
          `,
        },
        {
          check: 10,
          charge: 'PI팀',
          division: 'PC 및 관리자산 반납',
          manager: '이광민',
          method: 
          `
          <div class="indent_wrap">
            <span class="indent">퇴직 전까지 반납/이관 완료</span><br>
            <span class="indent">1)</span> 반납 신청 : 전자결재 → 자산 관련 → PC 반납 신청서<br>
            (사직서 상신 後 작성)<br>
            <span class="indent">2)</span> 자산 이관 : 전자결재 → 자산 관련 → PC 이관 신청서<br>
            (사직서 상신 後 작성)<br>
            <span class="indent">3)</span> PC(H/W 및 S/W 포함) 방문 반납<br>
            ① PC : CMOS 암호해제 및 포맷 후 반납<br>
            ② MACBOOK, 테블릿 : 메일계정해제(암호해제) 및 공장초기화 후 반납
          </div>
          `,
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
    
  }
})
</script>