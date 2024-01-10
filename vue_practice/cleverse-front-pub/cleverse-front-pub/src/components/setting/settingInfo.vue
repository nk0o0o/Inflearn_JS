<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <settingLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>개인정보</h2>
          </div>
          <!-- //header -->
          <!-- notice info -->
          <div class="setting-wrap">
            <div class="indiv-info-modify">
              <div class="indiv-info-modify_head">
                <span class="img"><img :src="require('@/assets/imgs/default-img-120.png')" alt="프로필이미지"></span>
                <span class="state sit-01 no-state"></span>
              </div>
              <div class="ta-r msg-imp f-14 mg-b10">사진은 GHR에 등록된 사진이 연동됩니다.</div>
              <table class="tbl">
              <colgroup>
              <col style="width:100px;">
              <col>
              <col style="width:100px;">
              <col>
              </colgroup>
              <tbody>
              <tr>
                <th scope="row">사원번호</th>
                <td>200012345</td>
                <th scope="row">입사일</th>
                <td>2022.01.01</td>
              </tr>
              <tr>
                <th scope="row">이름</th>
                <td>
                  <form action="">
                    <div class="input-box type3">
                      <input type="text" required placeholder="이름을 입력해주세요." value="김한화">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
                <th scope="row">영문이름</th>
                <td>
                  <form action="">
                    <div class="input-box type3">
                      <input type="text" required placeholder="영문이름을 입력해주세요." value="Kim hanwha">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th scope="row">아이디</th>
                <td>
                  <div class="flex jc-sb space">
                    <span class="flex-1">hanwha0505</span>
                    <button type="button" class="btn sm line-type1">비밀번호 변경</button>
                  </div>
                </td>
                <th scope="row">이메일</th>
                <td>hanwha0505hanwha0505@hanwha.com</td>
              </tr>
              <tr>
                <th scope="row">회사번호</th>
                <td>
                  <form action="">
                    <div class="input-box type3">
                      <input type="text" required placeholder="회사번호를 입력해주세요." value="02-3333-4444">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
                <th scope="row">팩스번호</th>
                <td>
                  <form action="">
                    <div class="input-box type3">
                      <input type="text" required placeholder="팩스번호를 입력해주세요." value="02-3333-4444">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th scope="row">이동전화</th>
                <td colspan="3">
                  <form action="">
                    <div class="input-box type3">
                      <input type="text" required placeholder="이동전화를 입력해주세요." value="010-3333-4444">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th scope="row">근무처</th>
                <td colspan="3">
                </td>
              </tr>
              <tr>
                <th scope="row">담당업무</th>
                <td colspan="3">
                </td>
              </tr>
              </tbody>
              </table>
              <div class="msg-imp org f-14 mg-t15 mg-b30">
                입사일, 근무처, 담당업무는 HR에 등록된 정보와 연동됩니다.<br>
                (담당업무는 기본사항&gt;인사기본(이력정보)&gt;직무이력&gt;세부 직무이력&gt;대표직무이력의 세부직무 정보 제공)
              </div>
              <div class="tab-type3">
                <ul class="tab-menu">
                  <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
                    <button type="button" @click="currentTab = index">{{tab}}</button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div v-show="currentTab == 0">
                    <table class="tbl bottom">
                    <colgroup>
                    <col style="width:100px;">
                    <col>
                    </colgroup>
                    <tbody>
                    <tr>
                      <th scope="row">직위</th>
                      <td>과장</td>
                    </tr>
                    <tr>
                      <th scope="row">직무</th>
                      <td>#사업운영 #교육 #시스템운영</td>
                    </tr>
                    <tr>
                      <th scope="row">소속</th>
                      <td>한화시스템/ICT > ICT부문 > 데이터센터 > SharedService담당 > SharedService1팀 > 디지털워크그룹</td>
                    </tr>
                    </tbody>
                    </table>
                  </div>
                  <div v-show="currentTab == 1">
                    <table class="tbl bottom">
                    <colgroup>
                    <col style="width:100px;">
                    <col>
                    </colgroup>
                    <tbody>
                    <tr>
                      <th scope="row">직위</th>
                      <td>과장</td>
                    </tr>
                    <tr>
                      <th scope="row">직무</th>
                      <td>#사업운영 #교육 #시스템운영</td>
                    </tr>
                    <tr>
                      <th scope="row">소속</th>
                      <td>한화시스템/ICT > ICT부문 > 데이터센터 > SharedService담당 > SharedService1팀 > 디지털워크그룹</td>
                    </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="setting-foot">
                <button type="button" class="btn lg line-type2">취소</button>
                <button type="button" class="btn lg">저장</button>
              </div>
            </div>
          </div>
          <!-- //notice info -->
        </div>


      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import settingLeft from "./settingLeft.vue"


export default defineComponent({
  components: {
    settingLeft,
  },
  data() {
    return {
      currentTab: 0,
      tabsType: ['인사팀', '인사운영팀(ICT)'],
    };
  },
  methods: {

  },
})
</script>