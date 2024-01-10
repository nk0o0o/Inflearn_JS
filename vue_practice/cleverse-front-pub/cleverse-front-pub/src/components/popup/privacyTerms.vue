<template>
  <base-popup
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="개인정보 처리방침"
    class="ly-pop-type1 terms"
  >
    <template v-slot:body>
      <div class="terms-wrap">
        <p>
          저희 한화시스템 주식회사(이하 ‘회사’)는 이용자들의 개인정보를 소중히 다루고 ‘개인정보보호법’에 따라 개인정보와 관련된 법규를 준수하고 있습니다.
          <br><br>
          본 방침은 고객의 개인정보를 보호하기 위하여 당사가 취하고 있는 개인정보의 처리에 관한 사항을 담고 있습니다. 당사의 개인정보처리방침은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인정보처리방침의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 그리고 개인정보처리방침이 변경될 경우 홈페이지(hsi.cleverse.kr)를 통해 고지하고 있습니다. 이용자들께서는 사이트 방문 시 수시로 확인하시기 바랍니다.
          <br><br>
          <em>회사의 「개인정보처리방침」은 아래와 같은 내용을 담고 있습니다.</em>
        </p>
        <ol class="tit-box">
          <li>1. 개인정보의 처리 목적</li>
          <li>2. 개인정보의 처리 및 보유 기간</li>
          <li>3. 개인정보의 제3자 제공에 관한 사항</li>
          <li>4. 개인정보처리의 위탁에 관한 사항</li>
          <li>5. 정보주체와 법정대리인의 권리∙의무 및 그 행사방법에 관한 사항</li>
          <li>6. 개인정보 파기절차 및 방법</li>
          <li>7. 개인정보의 안전성 확보조치에 관한 사항</li>
          <li>8. 개인정보 자동수집 장치의 설치운영 및 거부에 관한 사항</li>
          <li>9. 의견수렴 및 불만 처리</li>
          <li>10. 개인정보 보호책임자에 관한 사항</li>
          <li>11. 영상정보처리기기 운영∙관리에 관한 사항</li>
          <li>12. 개인정보 처리방침의 변경에 관한 사항</li>
        </ol>
        <h2>1. 개인정보의 처리 목적</h2>
        <p>회사는 고객의 개인정보를 고객께 서비스를 제공하는 기간(이용기간) 또는 분쟁처리기간 (보유기간) 동안에 한하여 보유하고 이를 활용합니다. 다만, 법률에 특별한 규정이 있는 경우에는 관계 법령에 따라 보관 됩니다.</p>
        <ol>
          <li><span class="num">가.</span>개인정보"라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.</li>
          <li>
            <span class="num">나.</span>당사는 개인정보처리 목적에 필요한 최소한의 개인정보를 처리하고 있으며, 목적은 다음과 같습니다.
            <ol>
              <li><span class="num">-</span>서비스 가입/변경/해지 처리, 서비스 문의 등을 포함한 이용계약 관련 사항의 처리</li>
              <li><span class="num">-</span>기타 개인정보처리방침(https://hsi.cleverse.kr)에 고지된 수탁자에게 서비스 제공 등 계약의 이행에 필요한 업무의 위탁</li>
            </ol>
          </li>
        </ol>
        <h2>2. 개인정보의 처리 및 보유 기간</h2>
        <ol>
          <li><span class="num">가.</span>회사는 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않습니다. 그리고, 어떤 경우에라도 입력하신 정보를 이용자들에게 사전에 밝힌 목적 이외에 다른 목적으로는 사용하지 않으며 외부로 유출하지 않습니다.</li>
          <li><span class="num">나.</span>회사는 다음과 같이 개인 정보를 처리합니다.</li>
        </ol>
        <table class="term-board">
        <colgroup>
        <col style="width:160px;">
        <col>
        </colgroup>
        <thead>
        <tr>
          <th scope="col">유형</th>
          <th scope="col">수집 항목</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>필수</td>
          <td class="txt-l">이름, 사용자아이디, 비밀번호, 소속회사명, 이메일, 휴대폰번호, 사진, 직위(직책), 사원번호, 소속, 입사일, 근무지, 회사/팩스번호</td>
        </tr>
        </tbody>
        </table>
        <ol>
          <li>
            <span class="num">다.</span>회사는 고객의 개인정보를 고객께 서비스를 제공하는 기간(이용기간) 또는 분쟁처리기간 (보유기간) 동안에 한하여 보유하고 이를 활용합니다. 다만, 법률에 특별한 규정이 있는 경우에는 관계 법령에 따라 보관 됩니다.
            <ol>
              <li><span class="num">-</span>이용기간 : 서비스 가입기간(가입일~해지일 또는 서비스를 위한 일련의 절차 종료시점까지) 또는 분쟁기간 동안</li>
              <li><span class="num">-</span>보유기간 : 고객의 개인정보는 회사가 고객에게 서비스를 제공하는 기간 동안에 보유합니다 . 회원 탈퇴 시 수집된 개인 정보는 열람 또는 이용될 수 없도록 파기 처리 됩니다.</li>
              <li><span class="num">-</span>기타 : 고객님의 동의를 받아 보유하고 있는 개인정보에 대해 고객님께서 열람을 요구하는 경우에는 지체 없이 그 열람, 확인할 수 있도록 조치합니다.</li>
            </ol>
          </li>
        </ol>
        <h2>3. 개인정보의 제3자 제공에 관한 사항</h2>
        <ol>
          <li><span class="num">가.</span>회사는 고객님의 개인정보를 가입신청서, 서비스이용약관, 「개인정보처리방침」의 「개인정보의 수집 및 이용목적」에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업 · 기관에 제공하지 않습니다. 단, 다음의 경우에는 주의를 기울여 개인정보를 이용 및 제공할 수 있습니다.
            <ol>
              <li><span class="num">-</span>매각·인수합병 : 영업의 전부 또는 일부를 양도하거나, 합병·상속 등으로 서비스제공자의 권리·의무를 이전 승계하는 경우 개인정보보호 관련 고객의 권리를 보장하기 위하여 반드시 그 사실을 고객에게 통지합니다.</li>
            </ol>
          </li>
          <li><span class="num">나.</span>회사는 개인정보를 고객에게 고지한 범위 또는 서비스이용약관에 명시한 범위를 넘어 이용하거나 제3자에게 제공하지 않습니다. 다만, 고객의 동의가 있거나 다음에 해당하는 경우에는 예외로 처리할 수 있습니다.
            <ol>
              <li><span class="num">-</span>서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적·기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우</li>
              <li><span class="num">-</span>서비스 제공에 따른 요금정산을 위하여 필요한 경우</li>
              <li><span class="num">-</span>통신비밀보호법, 국세기본법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 금융실명거래 및 비밀보장에 관한 법률, 신용정보의 이용 및 보호에 관한 법률, 전기통신기본법, 전기통신사업법, 지방세법, 소비자기본법, 한국은행법, 형사소송법 등 다른 법률에 특별한 규정이 있는 경우. 단, `법률에 특별한 규정이 있는 경우’로 행정목적이나 수사목적으로 행정관청 또는 수사기관이 요구해 온 경우라도 무조건 고객의 개인정보를 제공하지 않으며, 법률에 규정된 바에 따라 영장 또는 기관장의 직인이 날인된 서면에 의한 경우 등 적법한 절차에 따라 제공합니다.</li>
            </ol>
          </li>
          <li><span class="num">다.</span>인정보 제공 현황 : 개인정보 제공 현황은 제휴관계의 개시 또는 종료에 따라 변동이 가능하며 개인정보 제공과 함께 목록에 게시되고 제휴관계 종료 등으로 인한 개인정보의 파기와 함께 목록에서 삭제됩니다.</li>
        </ol>
        <h2>4. 개인정보처리의 위탁에 관한 사항</h2>
        <ol>
          <li><span class="num">가.</span>개인정보의 처리업무를 위탁하는 업체가 없으며, 향후 발생 시 위탁에 관한 사항이 업데이트됩니다.</li>
        </ol>
        <h2>5. 정보주체와 법정대리인의 권리∙의무 및 그 행사방법에 관한 사항</h2>
        <ol>
          <li>
            <span class="num">가.</span>개인정보 열람 요구권
            <ol>
              <li><span class="num">-</span>정보주체는 회사가 처리하는 자신의 개인정보에 대한 열람을 요구할 수 있습니다.</li>
              <li><span class="num">-</span>회사는 정보주체로부터 열람을 요구 받았을 때 10일 이내에 정보주체에게 해당 개인정보를 열람할 수 있도록 하여야 합니다. 열람할 수 없는 정당한 사유가 있을 때에는 정보주체에게 그 사유를 알리고 열람을 연기할 수 있으며, 그 사유가 소멸하면 지체 없이 열람하게 하여야 합니다.</li>
              <li>
                <span class="num">-</span>회사는 다음의 사유에 해당하는 경우에는 정보주체에게 그 사유를 알리고 열람을 제한하거나 거절할 수 있습니다.
                <ol>
                  <li><span class="num">①</span>법률에 따라 열람이 금지되거나 제한되는 경우</li>
                  <li><span class="num">②</span>다른 사람의 생명, 신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <span class="num">나.</span>개인정보 정정∙삭제 요구권
            <ol>
              <li><span class="num">-</span>정보주체는 회사에게 자기 개인정보의 정정 또는 삭제를 요구할 수 있습니다. 다만, 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 삭제를 요구할 수 없습니다.</li>
              <li><span class="num">-</span>회사는 정보주체가 자기 개인정보의 정정 또는 삭제를 요구할 경우 법령에 특별한 절차가 규정되어 있는 경우를 제외하고는 지체 없이 정정, 삭제 등 필요한 조치를 취한 후 그 결과를 정보주체에게 알려야 합니다.</li>
              <li><span class="num">-</span>정보주체가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 당해 개인 정보를 이용 또는 제공하지 않습니다.</li>
              <li><span class="num">-</span>잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정하도록 조치하겠습니다.</li>
              <li><span class="num">-</span>회사가 개인정보를 삭제할 때에는 복구 또는 재생되지 않도록 조치하여야 합니다.</li>
              <li><span class="num">-</span>회사는 필요한 경우 해당 정보주체에게 정정, 삭제 요구사항의 확인에 필요한 증거자료를 제출하게 할 수 있습니다.</li>
            </ol>          
          </li>
          <li>
            <span class="num">다.</span>개인정보 처리정지 요구권
            <ol>
              <li><span class="num">-</span>정보주체는 회사에게 자기 개인정보 처리의 정지를 요구할 수 있습니다.</li>
              <li>
                <span class="num">-</span>회사는 정보주체가 자기 개인정보 처리의 정지를 요구할 경우 지체 없이 개인정보 처리의 전부를 정지하거나 일부를 정지하여야 합니다. 다만 다음의 경우에는 정보주체의 처리정지 요구를 거절할 수 있습니다.
                <ol>
                  <li><span class="num">①</span>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                  <li><span class="num">②</span>다른 사람의 생명, 신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우</li>
                  <li><span class="num">③</span>개인정보를 처리하지 아니하면 정보주체와의 근로 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지의사를 명확하게 밝히지 아니한 경우</li>
                </ol>
              </li>
              <li><span class="num">-</span>회사는 정보주체의 요구에 따라 처리가 정지된 개인정보에 대하여 지체없이 해당 개인정보의 파기 등 필요한 조치를 하여야 합니다.</li>
            </ol>   
          </li>
          <li>
            <span class="num">라.</span>개인정보 열람/정정/삭제/처리정지 요청 방법
            <ol>
              <li><span class="num">-</span>정보주체는 열람/정정/삭제/처리정지 요청을 할 경우 개인정보보호 담당자에게 메일로 전송해 주시면 즉시 처리해 드리도록 하겠습니다.</li>
            </ol>
          </li>
          <li>
            <span class="num">마.</span>만14세 미만 아동의 개인정보 수집
            <ol>
              <li><span class="num">-</span>회사는 만14세 미만 아동의 개인정보를 수집하지 않습니다.</li>
            </ol>
          </li>
        </ol>
        <h2>6. 개인정보 파기절차 및 방법</h2>
        <ol>
          <li>
            <span class="num">가.</span>회사는 수집한 개인정보의 이용목적이 달성된 후에는 보관기간 및 이용기간에 따라 해당 정보를 지체 없이 파기합니다. 파기절차, 방법, 시점은 다음과 같습니다.
            <ol>
              <li><span class="num">-</span>파기절차 및 시점 : 고객이 서비스 가입 등을 위해 기재한 개인정보는 서비스 해지 등 이용목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유(위 개인정보의 보유 및 이용기간 참조)에 따른 보유기간이 경과한 후에 삭제되거나 파기합니다. 일반적으로 회사가 회원가입 시 수집되어 전자적 파일형태로 관리하는 개인정보는 회원 탈퇴 시점에 바로 삭제 됩니다.</li>
              <li><span class="num">-</span>파기방법 : 종이에 출력된 개인정보는 분쇄기로 분쇄 또는 소각하거나 화학약품 처리를 하여 용해하여 파기하고, 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
            </ol>
          </li>
        </ol>
        <h2>7. 개인정보의 안전성 확보조치에 관한 사항</h2>
        <ol>
          <li>
            <span class="num">가.</span>회사는 개인정보가 분실, 도난, 유출, 변조, 훼손되지 아니하도록 안전성 확보에 필요한 관리적, 기술적, 물리적 조치를 다음과 같이 실시 하고 있습니다.
            <ol>
              <li>
                <span class="num">-</span>관리적 조치
                <ol>
                  <li><span class="num">①</span>개인정보의 안전한 처리를 위한 내부관리계획 수립 및 시행 (내부관리계획에 따른 개인정보보호 교육 및 정기적인 내부점검 진행)</li>
                </ol>              
              </li>
              <li>
                <span class="num">-</span>기술적 조치
                <ol>
                  <li><span class="num">①</span>개인정보에 대한 접근 통제 및 접근 권한의 제한 조치</li>
                  <li><span class="num">②</span>개인정보를 안전하게 저장∙전송할 수 있는 암호화 기술의 적용 또는 이에 상응하는 조치</li>
                  <li><span class="num">③</span>개인정보 침해사고에 대응하기 위한 접속기록의 보관 및 위/변조 방지를 위한 조치</li>
                  <li><span class="num">④</span>개인정보에 대한 보안프로그램의 설치 및 주기적 갱신</li>
                </ol>
              </li>
              <li>
                <span class="num">-</span>물리적 조치
                <ol>
                  <li><span class="num">①</span>비인가자에 대한 출입통제 및 문서 및 장비 보관을 위한 잠금장치 사용</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
        <h2>8. 개인정보 자동수집 장치의 설치운영 및 거부에 관한 사항</h2>
        <ol>
          <li><span class="num">가.</span>회사가 제공하는 인터넷서비스를 통하여 고객의 정보를 저장하고 수시로 찾아내는 쿠키(cookie)를 설치·운용할 경우도 있습니다. 쿠키란 웹 서버가 웹 브라우저에 보내어 저장했다가 서버의 부가적인 요청이 있을 때 다시 서버로 보내주는 문자열 정보를 말합니다. 고객이 웹사이트에 접속을 하면 고객의 브라우저에 있는 쿠키의 내용을 읽고, 추가정보를 찾아 접속에 따른 성명 등의 추가 입력 없이 서비스를 제공할 수 있습니다.</li>
          <li><span class="num">나.</span>고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저 상단의 “도구 -> 인터넷옵션 -> 개인정보 -> 고급”에서 모든 쿠키를 다 받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면 모든 쿠키를 거부할 수 있습니다. 단, 고객이 쿠키 설치를 거부하였을 경우 서비스 이용에 불편이 있거나, 서비스 제공에 어려움이 있을 수 있습니다.</li>
          <li><span class="num">다.</span>브라우저의 종료 시나 로그아웃 시 만료됩니다</li>
        </ol>
        <h2>9. 의견수렴 및 불만 처리</h2>
        <ol>
          <li><span class="num">가.</span>회사는 고객의 의견을 매우 소중하게 생각하며, 고객은 의문사항으로부터 언제나 성실한 답변을 받을 권리가 있습니다.</li>
          <li>
            <span class="num">나.</span>회사는 고객과의 원활한 의사소통을 위해 Help Desk 등 고객상담창구를 운영하고 있으며 고객님께서 문의사항이 있을 경우 아래의 연락처로 문의하시면 언제든 성실한 답변을 받으실 수 있습니다.
            <ol>
              <li><span class="num">-</span>개인정보 관련 Help Desk(TEL: 02-6313-3114)</li>
            </ol>
          </li>
          <li><span class="num">다.</span>타 개인정보 침해에 관한 상담이 필요한 경우에는 아래의 기관으로 문의하실 수 있습니다.</li>
        </ol>
        <table class="term-board">
        <colgroup>
        <col style="width:230px;">
        <col style="width:200px;">
        <col>
        </colgroup>
        <thead>
        <tr>
          <th scope="col">기관</th>
          <th scope="col">전화번호</th>
          <th scope="col">홈페이지</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="txt-l">개인정보침해신고센터</td>
          <td class="txt-l">(국번없이)118</td>
          <td class="txt-l">http://privacy.kisa.or.kr</td>
        </tr>
        <tr>
          <td class="txt-l">개인정보 분쟁조정위원회</td>
          <td class="txt-l">(국번없이)1833-6972</td>
          <td class="txt-l">https://www.kopico.go.kr/main/main.do</td>
        </tr>
        <tr>
          <td class="txt-l">대검찰청 과학수사부 사이버수사과</td>
          <td class="txt-l">(국번없이)1301</td>
          <td class="txt-l">https://cybercid.spo.go.kr/</td>
        </tr>
        <tr>
          <td class="txt-l">경찰청 사이버수사국</td>
          <td class="txt-l">(국번없이)182</td>
          <td class="txt-l">https://cyberbureau.police.go.kr/</td>
        </tr>
        </tbody>
        </table>
        <h2>10. 개인정보 보호책임자에 관한 사항</h2>
        <ol>
          <li><span class="num">가.</span>회사는 고객의 개인정보보호를 매우 소중하게 생각하며, 고객의 개인정보가 훼손, 침해 또는 누설되지 않도록 최선을 다하고 있습니다. 그러나 기술적인 보완조치를 했음에도 불구하고, 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 방문자가 작성한 게시물에 의한 각종 분쟁에 관해서는 책임이 없습니다.</li>
          <li><span class="num">나.</span>고객의 개인정보보호 관련 문의 시 Help Desk에서 신속하고 성실하게 답변을 드리도록 하고 있습니다. 또한 고객이 회사의 개인정보보호 담당자와 연락을 원하실 경우 아래의 연락처 또는 이메일로 연락을 주시면 개인정보 관련 문의사항에 대하여 신속하고 성실하게 답변해 드리겠습니다.</li>
        </ol>
        <table class="term-board">
        <colgroup>
        <col style="width:120px;">
        <col>
        <col style="width:120px;">
        <col>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" colspan="2">개인정보보호 책임자</th>
          <th scope="col" colspan="2">개인정보보호 담당자</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row" class="txt-l">담당부서</th>
          <td class="txt-l">정보보호실</td>
          <th scope="row" class="txt-l">담당부서</th>
          <td class="txt-l">정보보호실</td>
        </tr>
        <tr>
          <th scope="row" class="txt-l">성명/직급</th>
          <td class="txt-l">박관순 상무</td>
          <th scope="row" class="txt-l">성명/직급</th>
          <td class="txt-l">강태욱 차장</td>
        </tr>
        <tr>
          <th scope="row" class="txt-l">전화번호</th>
          <td class="txt-l">02-6313-3114</td>
          <th scope="row" class="txt-l">전화번호</th>
          <td class="txt-l">02-6313-3114</td>
        </tr>
        <tr>
          <th scope="row" class="txt-l">E-Mail</th>
          <td class="txt-l">privacy@hanwha.com</td>
          <th scope="row" class="txt-l">E-Mail</th>
          <td class="txt-l">privacy@hanwha.com</td>
        </tr>
        </tbody>
        </table>
        <h2>11. 영상정보처리기기 운영∙관리에 관한 사항</h2>
        <ol>
          <li><span class="num">가.</span>회사는 아래와 같이 영상정보처리기기를 설치∙운영하고 있습니다.</li>
          <li><span class="num">나.</span>영상정보처리기기 설치근거∙목적: 회사에서 시설안전∙화재예방∙증거확보∙범죄예방 등 공익을 위하여 CCTV를 설치∙운영하고 있습니다.</li>
          <li><span class="num">다.</span>CTV 설치현황</li>
        </ol>
        <table class="term-board">
        <colgroup>
        <col style="width:85px;">
        <col style="width:125px;">
        </colgroup>
        <thead>
        <tr>
          <th scope="col" rowspan="2">구분</th>
          <th scope="col" rowspan="2">총설치대수 (EA)</th>
          <th scope="col" colspan="7">설치장소</th>
        </tr>
        <tr>
          <th scope="col">E/V</th>
          <th scope="col">옥외</th>
          <th scope="col">PH</th>
          <th scope="col">1F~6F</th>
          <th scope="col">E/V</th>
          <th scope="col">기반설비</th>
          <th scope="col">기타</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>IDC센터</td>
          <td>148</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>85</td>
          <td>14</td>
          <td>39</td>
          <td></td>
        </tr>
        </tbody>
        </table>
        <ol>
          <li><span class="num">다.</span>관리책임자, 담당부서 및 영상정보에 대한 접근 권한자: IDC기획팀 이웅 사원</li>
          <li>
            <span class="num">라.</span>영상정보 촬영시간, 보관기간, 보관장소, 처리방법
            <ol>
              <li><span class="num">-</span>촬영시간 : 24시간 촬영</li>
              <li><span class="num">-</span>보관기간 : 촬영시부터 70일</li>
              <li><span class="num">-</span>보관장소 및 처리방법 : 죽전데이터센터</li>
            </ol>
          </li>
          <li><span class="num">마.</span>영상정보 확인 방법 및 장소: 관리책임자 영상정보에 요구</li>
          <li><span class="num">바.</span>정보주체의 영상정보 열람 등 요구에 대한 조치: 귀사/귀하의 개인영상정보에 관하여 열람 또는 삭제를 원하는 경우 영상정보처리기기 운영자에게 요구할 수 있습니다. 단, 귀하/귀사가 촬영된 개인영상정보 및 정보주체의 급박한 생명, 신체, 재산의 손실, 법적 자료제출의무가 있는 경우에 상황에 한정됩니다. 영상정보에 관련된 열람 또는 존재확인, 삭제를 요구한 경우 지체없이 필요한 조치를 취합니다.</li>
          <li>
            <span class="num">사.</span>영상정보 보호를 위한 기술적.관리적.물리적 조치: 
            <ol>
              <li><span class="num">-</span>영상정보보호를 위한 내부 관리지침 개정 및 직무수행</li>
              <li><span class="num">-</span>영상정보에 대한 물리적 접근통제 및 접근권한의 제한 조치</li>
              <li><span class="num">-</span>영상정보를 안전하게 저장하는 기술의 적용</li>
              <li><span class="num">-</span>영상정보의 안전한 관리를 위한 영상정보 담당자 교육 시행</li>
              <li><span class="num">-</span>영상정보 보관 및 변조 방지를 위한 조치 (열람할 경우의 목적, 열람자, 열람 일시 등 기록 관리조치)</li>
            </ol>
          </li>
        </ol>
        <h2>12. 개인정보 처리방침의 변경에 관한 사항</h2>
        <p>현 개인정보처리방침은 2023년 3월 1일에 제정되었으며 정부의 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 경우에는 일반적인 내용의 경우 개정 최소 7일 전부터, 중요한 내용의 경우 개정 최소 30일 전부터 홈페이지(https://hsi.cleverse.kr)를 통해 고지할 것입니다.</p>
        
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