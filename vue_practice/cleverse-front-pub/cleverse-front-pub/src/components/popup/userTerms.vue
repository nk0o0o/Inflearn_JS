<template>
  <base-popup
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="이용약관"
    class="ly-pop-type1 terms"
  >
    <template v-slot:body>
      <div class="terms-wrap">
        <h2>제 1조 (목적)</h2>
        <p>본 차세대그룹웨어 Cleverse 이용약관(이하 "약관")은 회원(이하 별도 정의한 바와 같음)이 한화시스템/ 주식회사(이하 "회사")가 운영하는 그룹웨어를 이용함에 있어 회사와 회원간의 제반 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        <h2>제 2조 (용어의 정의)</h2>
        <ol>
          <li><span class="num">1.</span>"한화시스템 차세대그룹웨어"(hsi.cleverse.kr; 이하 "Cleverse")이란 원할한 업무협업 및 정보공유를 통해 일하는 방식 변화와 업무효율성 제고할 수 있도록 구축된 업무공유시스템과 고도화된 기존 그룹웨어가 통합된 회사가 구축 · 운영하는 시스템을 말합니다.</li>
          <li><span class="num">2.</span>"회원"이란 Cleverse에 접속하여 본 약관에 대한 동의 절차, 회사가 요구하는 각종 정보제공 절차 등 회원등록과 관련하여 회사가 정한 제반 절차를 거친 후 회사로부터 최종 승인을 획득한 법인의 담당자 또는 개인사업자를 말합니다.</li>
          <li><span class="num">3.</span>"회원 아이디(ID)"란 회원의 식별을 위하여 회원이 선정하고 회사가 승인한 문자와 숫자 아이템 조합을 말합니다.</li>
          <li><span class="num">4.</span>"회원 비밀번호(Password)"는 회원의 동일성 확인과 회원의 권익 및 비밀 보호를 위하여 회원이선정하고 회사가 승인한 문자와 숫자 아이템 조합을 말합니다.</li>
          <li><span class="num">5.</span>기타 본 약관에서 사용하는 용어의 의미는 관계법령과 일반적인 상거래 관행에 의합니다.</li>
        </ol>
        <h2>제 3조 (약관의 적용 및 개정)</h2>
        <ol>
          <li><span class="num">1.</span>본 약관은 회원이 회원등록을 위하여 본 약관에 동의하는 것으로 효력을 발생합니다.</li>
          <li><span class="num">2.</span>회사는 Cleverse의 원활한 운영을 위하여 본 약관을 수시로 개정할 수 있습니다. 본 약관이 개정된 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 Cleverse 홈페이지에 적용일자 7일 이전부터 적용일자 전일까지 공고합니다. 단, 긴급을 요할 경우 변경 즉시 이를 공고하고 적용할 수 있습니다.</li>
          <li><span class="num">3.</span>본 조 제2항에 따라 개정된 약관은 개정 내용이 관계 법령에 위배되지 않고 별도의 경과규정이 없는 한 개정 이전에 등록한 회원에게도 적용됩니다.</li>
          <li><span class="num">4.</span>회원은 개정된 약관에 동의하지 않는 경우 제5조 제1항에 정한 방법으로 회원탈퇴를 요청할 수 있으며 회원이 적용일자 전일까지 이의를 제기하지 않는 경우에는 개정된 약관에 동의한 것으로 봅니다.</li>
          <li><span class="num">5.</span>본 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관계법령과 일반적인 상거래 관행에 따릅니다.</li>
        </ol>
        <h2>제 4조 (회원등록절차)</h2>
        <ol>
          <li><span class="num">1.</span>Cleverse 이용계약은 회원이 되고자 하는 자(이하 "신청인")가 회원등록 신청을 하고 그 등록신청에 대하여 회사가 승인한 때에 성립합니다.</li>
          <li><span class="num">2.</span>회원으로 가입하고자 하는 자는 회사가 Cleverse 홈페이지에 제공하는 회원등록 신청양식에 아래 사항을 정확하고 사실과 다름이 없이 기입하여야 합니다. 소속회사, 성명, 휴대폰번호, 이메일주소 등</li>
          <li><span class="num">3.</span>회사는 다음 각 호의 1에 해당하는 사항을 인지하는 경우 회원등록 신청에 대한 승낙을 거부할 수 있습니다.
            <ol>
              <li><span class="num">1)</span>이미 등록된 회원의 회사명, 성명과 동일한 경우</li>
              <li><span class="num">2)</span>등록신청내용에 허위, 기재누락, 오기가 있는 경우</li>
              <li><span class="num">3)</span>본 시스템 운영을 방해할 의도로 등록신청하는 경우</li>
              <li><span class="num">4)</span>기타 회사 소정의 이용신청요건을 충족하지 못하는 경우</li>
            </ol>
          </li>
          <li><span class="num">4.</span>회원은 등록시 기입한 정보의 변경이 발생한 경우 지체없이 변경사항을 수정해야 합니다. 만약 변경사항이 수정되지 않아 발생하는 회원의 어떠한 손해에 대해서도 회사는 책임지지 않습니다.</li>
        </ol>
        <h2>제 5조 (회원탈퇴 및 자격상실)</h2>
        <ol>
          <li>
            <span class="num">1.</span>회원의 탈퇴
            <ol>
              <li><span class="num">1)</span>회원은 언제든지 회원탈퇴의사를 e-mail, Fax., 기타의 방법으로 회사에 통지함으로써 탈퇴할 수 있습니다.</li>
            </ol>
          </li>
          <li>
            <span class="num">2.</span>회원자격 상실
            <ol>
              <li><span class="num">1)</span>회사는 회원에게 다음과 같은 사유가 발생하는 경우 회원자격을 상실 시킬 수 있습니다.
                <ol>
                  <li><span class="num">①</span>타인의 아이디 또는 비밀번호를 도용하거나 회원 자신의 아이디 또는 비밀번호를 타인에게 제공하였을 경우</li>
                  <li><span class="num">②</span>허위 가입자임이 밝혀진 경우</li>
                  <li><span class="num">③</span>회사가 제공하는 서비스의 원활한 진행을 방해하는 경우</li>
                  <li><span class="num">④</span>기타 본 약정을 위반한 경우</li>
                </ol>
              </li>
              <li><span class="num">2)</span>회사는 전 호의 사유 발생시 회원에게 e-mail, Fax, 전화 또는 기타의 방법으로 회원자격을 상실한 사실 및 그 사유를 통지하며 이 경우 회원과 회사간 Cleverse 이용계약은 해지됩니다.</li>
              <li><span class="num">3)</span>회사는 본 조 제2항의 사유로 인한 회원자격 상실시 회원에게 발생하는 손해에 대하여 일체 책임지지 않습니다.</li>
            </ol>
          </li>
        </ol>
        <h2>제 6조 (회원 ID및 비밀번호 관리책임)</h2>
        <ol>
          <li><span class="num">1.</span>회원은 회원 .아이디와 회원 비밀번호를 통하여 Cleverse에 접속함으로써 동 시스템을 이용할 수 있습니다.</li>
          <li><span class="num">2.</span>회원은 회원 아이디와 회원 비밀번호를 스스로의 책임 아래 관리하여야 하며 회원 아이디와 회원 비밀번호를 타인에게 양도하거나 사용하게 할 수 없습니다.</li>
          <li><span class="num">3.</span>회사는 회사의 고의 또는 과실에 의하지 않은 회원 아이디나 회원 비밀번호의 유출에 대하여 책임지지 않으며 이로 인하여 발생하는 어떠한 손해에 대하여도 책임지지 않습니다.</li>
        </ol>
        <h2>제 7조 (회원/이용자의 의무)</h2>
        <ol>
          <li><span class="num">1.</span>회원은 본 약관, 관계법령, 기타 Cleverse 이용과 관련하여 회사가 수시로 통보하는 사항을 준수하여야 합니다.</li>
          <li><span class="num">2.</span>회원은 Cleverse을 이용하여 얻은 정보를 회사의 사전 서면동의 없이 복사, 복제, 변경하거나 이를 타인에게 제공할 수 없습니다.</li>
          <li><span class="num">3.</span>회원은 Cleverse 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.
            <ol>
              <li><span class="num">1)</span>다른 회원의 아이디나 비밀번호를 부정 사용하는 행위</li>
              <li><span class="num">2)</span>회사 및 회사 임·직원을 포함하여 타인의 명예를 훼손하거나 모욕 하는 행위</li>
              <li><span class="num">3)</span>회사의 사전 서면동의 없이 광고물을 게재하거나 타인의 의사에 반하여 광고성 메일 등 일정한 내용을 지속적으로 전송하는 행위</li>
              <li><span class="num">4)</span>기타 관계법령에 위배되는 행위</li>
            </ol>
          </li>
          <li><span class="num">4.</span>회원이 Cleverse을 통하여 게시한 게시물에 대한 모든 권리 및 책임은 회원에게 있으며 회사는 회원이 게시한 게시물의 내용이 본 조 제3항에 정해진 바에 해당하는 경우 회원에 대한 사전통지나 동의 없이 이를 삭제할 수 있습니다.</li>
        </ol>
        <h2>제 8조 (회사의 역할과 책임)</h2>
        <ol>
          <li><span class="num">1.</span>회사는 본 약관이 정하는 바에 따라 지속적이고 안정적이며, 이용자가 신뢰할 수 있는 서비스를 제공하기 위해서 노력합니다.</li>
          <li><span class="num">2.</span>회사는 회원등록을 위하여 회원의 정보를 수집할 수 있으며, 수집된 정보는 회원에 대한 알림발송 및 로그인 2단계 인증절차에 사용됩니다.</li>
          <li><span class="num">3.</span>회사의 고의 또는 중대한 과실로 인해 Cleverse 회원이 입은 손해의 배상책임은 회사에 있습니다. 단, 본 약관 제9조의 시스템의 운영 중단 또는 시스템 장애의 경우에는 책임이 면제됩니다. </li>
        </ol>
        <h2>제 9조 (Cleverse의 운영중단 및 시스템 장애)</h2>
        <ol>
          <li><span class="num">1.</span>회사는 컴퓨터 등 전산장비의 보수점검, 교체, 외부 해킹발생 등의 사유로 서비스 제공을 일시적으로 중단할 수 있습니다</li>
        </ol>
        <h2>제 10조(면책조항)</h2>
        <ol>
          <li><span class="num">1.</span>회사는 천재지변, 전쟁, 폭동, 내란, 법령의 개폐 및 제정, 공권력에 의한 명령 및 처분, 노동쟁의, 기간통신사업아이템 전기통신 서비스의 중지, 정전, 번개, 홍수, 태풍, 지진, 공장의 사고, 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 책임을 지지 아니합니다.</li>
          <li><span class="num">2.</span>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
          <li><span class="num">3.</span>회사는 고의 또는 중대한 과실로 인한 경우를 제외하고는 회원이 Cleverse상에 게재된 정보, 자료, 사실의 정확성 등을 신뢰함으로써 입은 손해에 관하여 책임을 지지 않습니다.</li>
        </ol>
        <h2>제 11조 (저작권 귀속 및 이용제한)</h2>
        <ol>
          <li><span class="num">1.</span>회사가 작성한 저작물에 대한 저작권 기타 일체의 지적재산권은 회사에 귀속됩니다.</li>
          <li><span class="num">2.</span>회원은 서비스를 이용하는 과정에서 얻은 정보를 회사의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 어떠한 방법에 의하여도 재화나 용역의 판매 이외의 다른 목적으로 이용하거나 제3자에게 이를 이용하게 하여서는 안됩니다.</li>
        </ol>
        <h2>제 12조 (관할)</h2>
        <ol>
          <li><span class="num">1.</span>본 약관과 관련하여 회사와 회원간 분쟁이 발생한 경우에는 서울지방법원을 제1심 관할법원으로 합니다.</li>
        </ol>
        <dl>
          <dt>부 칙</dt>
          <dd>본 약관은 2022년 12월 31일부터 시행합니다.</dd>
        </dl>
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