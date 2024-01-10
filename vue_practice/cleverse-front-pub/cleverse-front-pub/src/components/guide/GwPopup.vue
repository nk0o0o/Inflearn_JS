<template>
    <section class="popup">
        <h1>layer popup, alert</h1>
        <table>
          <thead>
            <tr>
                <th>팝업 정의</th>
                <th>경고창 정의</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre>
                  부모페이지에서 호출 할 팝업 컴포넌트 정의
                  &lt;팝업 컴포넌트 명
                      <strong>:propShowModal="showModal"</strong> - 팝업 노출 여부(필수)
                      <strong>@popClose="onHideModal"</strong> - 팝업 닫기 여부(필수)
                  &lt;/팝업 컴포넌트 명&gt;

                  팝업 컨텐츠 컴포넌트 정의
                  &lt;base-popup
                    <strong>:propShowModal="showModal"</strong> - 팝업 노출 여부(필수)
                    <strong>@popClose="onHideModal"</strong> - 팝업 닫기 여부(필수)
                    <strong>:propIsScrollClass="true"</strong> - 팝업 컨텐츠 스크롤 여부
                    <strong>:propBodyClass="'pwClass'"</strong> - 팝업 컨텐츠 클래스 추가 여부
                    <strong>title="비밀번호 재발급 안내"</strong> - 팝업 타이틀
                    <strong>class="ly-pop-type1 pwreissue"</strong> - 팝업 공통 클래스(필수), 사용자 정의 클래스
                  &gt;
                </pre>
              </td>
              <td>
                <pre>
                  부모페이지에서 호출 할 Alert 팝업 컴포넌트 정의
                  &lt;Alert 팝업 컴포넌트 명
                      <strong>:propAlertShowModal="alertShowModal"</strong> - 팝업 노출 여부(필수)
                      <strong>@alertClose="onAlertHideModal"</strong> - 팝업 닫기 여부(필수)
                  &lt;/Alert 팝업 컴포넌트 명&gt;

                  Alert 팝업 컨텐츠 컴포넌트 정의
                  &lt;base-popup
                    <strong>:propAlertShowModal="alertShowModal"</strong> - 팝업 노출 여부(필수)
                    <strong>@alertClose="onAlertHideModal"</strong> - 팝업 닫기 여부(필수)
                    <strong>:propIsScrollClass="true"</strong> - 팝업 컨텐츠 스크롤 여부
                    <strong>:propBodyClass="'pwAlertClass'"</strong>  - 팝업 컨텐츠 클래스 추가 여부
                    <strong>title="인증번호발급안내"</strong> - 팝업 타이틀
                    <strong>class="ly-alert-type1 pwalert"</strong> - 팝업 공통 클래스(필수), 사용자 정의 클래스
                  &gt;
                </pre>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
            <colgroup>
                <col style="width:100px">
            </colgroup>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>default</th>
                    <th>이름</th>
                    <th>default</th>
                    <th>이름</th>
                    <th>default</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>레이어 팝업</th>
                    <td>
                        <button type="button" class="btn md line-type1" @click="pwResissue">레이어 팝업</button>
                    </td>
                    <th>레이어 팝업 - iframe 사용 할 경우</th>
                    <td>
                        <button type="button" class="btn md line-type1" @click="frameMode">레이어 팝업</button>
                    </td>
                    <th>레이어 알럿</th>
                    <td>
                        <button type="button" class="btn md line-type1" @click="pwAlert">레이어 경고창</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h1>toast popup</h1>
        <table>
            <tbody>
                <tr>
                    <td><button class="btn line-type1" @click="showToastSuccess">show Success toast</button></td>
                    <td><button class="btn line-type1" @click="showToastInfo">show info toast</button></td>
                    <td><button class="btn line-type1" @click="showToastError">show error toast</button></td>
                    <td><button class="btn line-type1" @click="showToastWarning">show warning toast</button></td>
                </tr>
            </tbody>
        </table>

        <h1>tooltip popup</h1>
        <table>
            <tbody>
                <tr>
                    <td>
                        <button type="button" class="btn line-type1">
                          <span>Tooltip end</span>
                          <v-tooltip
                            activator='parent'
                            anchor='end'
                          >
                          Tooltip end
                          </v-tooltip>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn line-type1">
                          <span>Tooltip start</span>
                          <v-tooltip
                            activator='parent'
                            anchor='start'
                            content-class='start'
                          >
                          Tooltip start
                          </v-tooltip>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn line-type1">
                          <span>Tooltip top</span>
                          <v-tooltip
                            activator='parent'
                            anchor='top'
                            content-class='top'
                          >
                          Tooltip top
                          </v-tooltip>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn line-type1">
                          <span>Tooltip bottom</span>
                          <v-tooltip
                            activator='parent'
                            anchor='bottom'
                            content-class='bottom'
                          >
                          Tooltip bottom
                          </v-tooltip>
                        </button>
                    </td>
                </tr>

            </tbody>
        </table>

        <!-- s: 비밀번호 재발급 팝업 -->
        <pw-reissue
            :propShowModal="showModal"
            @popClose="onHideModal"
        ></pw-reissue>
        <!-- //e: 비밀번호 재발급 팝업 -->

        <!-- s: 비밀번호 재발급 팝업 - ifame 모드-->
        <frame-mode
            :propShowModal="frameShowModal"
            propFrameUrl="/approvalView.html"
            @popClose="onframeHideModal"
        ></frame-mode>
        <!-- //e: 비밀번호 재발급 팝업 - ifame 모드 -->

        <!-- s: 알럿창 팝업 -->
        <pw-alert
            :propAlertShowModal="alertShowModal"
            @alertClose="onAlertHideModal"
        ></pw-alert>
        <!-- //e: 알럿창 팝업 -->
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import pwReissue from "@/components/popup/pwReissue.vue"
import frameMode from "@/components/popup/frameMode.vue"
import pwAlert from "@/components/popup/pwAlert.vue"

export default defineComponent({
    components: {
        pwReissue,
        frameMode,
        pwAlert,
    },
    props: {
        pageInfo: null,
    },
    data(){
        return{
            showModal: false,
            frameShowModal: false,
            alertShowModal: false,
        }
    },
    methods:{
        pwResissue(){
          this.showModal = true
        },
        frameMode(){
          this.frameShowModal = true
        },
        pwAlert(){
          this.alertShowModal = true
        },
        onHideModal(){
          this.showModal = false
        },
        onframeHideModal(){
          this.frameShowModal = false
        },
        onAlertHideModal(){
          this.alertShowModal = false
        },
        showToastSuccess(){
          this.$toast.success(
            "새로운 데이터를 불러왔습니다.\n최신 데이터를 확인해주세요.",
            {toastClassName: "toast-txt_left",} // 커스텀 필요시 추가 class 정의 해주세요.
          );
        },
        showToastInfo(){
          this.$toast.info("새로운 데이터를 불러왔습니다. 최신 데이터를 확인해주세요.");
        },
        showToastError(){
          this.$toast.error("error");
        },
        showToastWarning(){
          this.$toast.warning("warning");
        },
    }
})
</script>
<style lang="css" scoped>
h1 {
    margin-bottom: 20px;
    font-family: 'Lifeplus'; font-weight:600; font-size: 36px; color: #000;
}
table + h1 {margin-top:30px;}
table {margin-top: 10px;}
thead th {border-bottom: 2px solid #adadad;}
th, td {padding: 15px 10px; border:1px solid #ccc;font-size: 15px;}
th {
    line-height: 1.6em;
    color: #000;
    background-color: #f1f1f1;
}
strong{font-weight: bold;}
pre{font-size: 14px;}
</style>