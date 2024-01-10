<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="전자결재 인쇄"
    class="ly-pop-type1"
  >
    <template v-slot:body>
      <div class="print-setting-pop">
        <div class="flex jc-sb as">
          <dl class="print-setting-pop_option flex-1">
            <dt>프린트 옵션</dt>
            <dd>
              <div class="input-chk square">
                <input type="checkbox" name="chk" id="chk1"><label for="chk1">제목</label>
              </div>
              <div class="input-chk square">
                <input type="checkbox" name="chk" id="chk2"><label for="chk2">작성자</label>
              </div>
              <div class="input-chk square">
                <input type="checkbox" name="chk" id="chk3"><label for="chk3">등록일</label>
              </div>
              <div class="input-chk square">
                <input type="checkbox" name="chk" id="chk4"><label for="chk4">첨부</label>
              </div>
            </dd>
            <dd class="flex-1 ta-r pd-r20">
              <select-view
                :propOptionList="optionLsit"
                :propPlaceholder="'크기 100%'"
                :propClass="'type3'"
                >
              </select-view>
            </dd>
          </dl>
            <button type="button" class="btn lg mg-l20">인쇄하기</button>
        </div>
        <div class="print-setting-pop_zone approval">
          <div class="print-wrap">
            <div class="approval-line-list">
              <ul>
                <li class="pay-type">
                  <div class="type">
                    <span>기안</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 과장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
                <li class="type">
                  <div class="type">
                    <span>열람</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 그룹파트장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
                <li>
                  <div class="type">
                    <span>미결</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 과장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
                <li>
                  <div class="type">
                    <span>미결</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 과장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
                <li>
                  <div class="type">
                    <span>미결</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 과장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
                <li>
                  <div class="type">
                    <span>미결</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 과장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
                <li>
                  <div class="type">
                    <span>미결</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 과장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
                <li>
                  <div class="type">
                    <span>미결</span>
                  </div>
                  <div class="staff-info">
                    <strong class="staff"><b>김한화</b> 과장</strong>
                    <p>디지털워크그룹</p>
                    <span>2022.02.09 10:55</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="print-cnt">인쇄하기화면</div>
            <div class="tbl data-type">
              <table>
                <colgroup>
                  <col style="width:18%;">
                  <col style="width:auto;">
                  <col style="width:18%;">
                  <col style="width:auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th colspan="4" class="title sub">문서</th>
                  </tr>
                  <tr>
                    <th scope="row">작성자</th>
                    <td>디지털워크그룹 김한화</td>
                    <th scope="row">결재일시</th>
                    <td>2022.04.19 10:28</td>
                  </tr>
                  <tr>
                    <th scope="row">문서종류</th>
                    <td>근태</td>
                    <th scope="row">문서번호</th>
                    <td>근태-2204-4097</td>
                  </tr>
                  <tr>
                    <th scope="row">문서등급</th>
                    <td>일반문서</td>
                    <th scope="row">보존기간</th>
                    <td>1년</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="tbl list-type4">
              <table>
                <colgroup>
                  <col style="width:14%;">
                  <col style="width:13%;">
                  <col style="width:auto;">
                  <col style="width:13%;">
                  <col style="width:13%;">
                  <col style="width:22%;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">결재상태</th>
                    <th scope="col">부서</th>
                    <th scope="col">이름</th>
                    <th scope="col">직위</th>
                    <th scope="col">처리시간</th>
                  </tr>
                  <tr>
                    <td>협조결재</td>
                    <td class="tc">미결</td>
                    <td>영업지원팀</td>
                    <td>이**</td>
                    <td>사원</td>
                    <td>2022.07.14 16:33</td>
                  </tr>
                  <tr>
                    <td>협조결재</td>
                    <td class="tc">미결</td>
                    <td>영업지원팀</td>
                    <td>이**</td>
                    <td>사원</td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="tbl data-type">
              <table>
                <colgroup>
                  <col style="width:18%;">
                  <col style="width:24%;">
                  <col style="width:16%;">
                  <col style="width:auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th colspan="4" class="title sub">결재의견</th>
                  </tr>
                  <tr>
                    <th scope="row">결재</th>
                    <td>차세대 시스템 사원 / 시스템</td>
                    <td>2022.07.14 16:33</td>
                    <td>결재 의견을 입력합니다.</td>
                  </tr>
                  <tr>
                    <th scope="row">기안자</th>
                    <td>차세대 시스템 사원 / 시스템</td>
                    <td>2022.07.14 16:33</td>
                    <td>결재 의견을 입력합니다.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="tbl data-type">
              <table>
                <colgroup>
                  <col style="width:18%;">
                  <col style="width:auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">수신처</th>
                    <td>
                        참조 : 김한화(인사팀)<br>
                        수신 : 김한화(인사팀), 김한화(인사팀), 김한화(인사팀)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="tbl data-type">
              <table>
                <colgroup>
                  <col style="width:18%;">
                  <col style="width:auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">첨부</th>
                    <td>
                        <div class="attach-file">
                          <span>attach&#41;text01.xlsx&#40;9995 Byte&#41;</span>
                          <span>attach&#41;text01.xlsx&#40;9995 Byte&#41;</span>
                          <span>attach&#41;text01.xlsx&#40;9995 Byte&#41;</span>
                          <span>attach&#41;text01.xlsx&#40;9995 Byte&#41;</span>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
    selectView
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
       optionLsit: [
        { value: '크기 100%', label: '크기 100%' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
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