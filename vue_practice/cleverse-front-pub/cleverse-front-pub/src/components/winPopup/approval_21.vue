<template>
  <div class="winPop-wrap hcal">
    <h1 class="title flex jc-sb">
      조직도 / 사원찾기
      <button type="button" class="btn sm f-13 f-normal">나의 부서로 이동</button>
    </h1>
    <div class="designation-wrap jc-sb">
      <!-- 조직도 -->
      <div class="cnt-org">
        <!-- <div class="title sub pd-b10">
          <button type="button" class="btn sm f-13 f-normal">나의 부서로 이동</button>
        </div> -->
        <!-- search -->
        <div class="board-write-search">
          <div class="input-chk square"><input type="checkbox" name="chk" id="chk1-1"><label for="chk1-1">전사</label></div>
          <div>
            <select-view
              :propOptionList="optionLsit"
              :propPlaceholder="'이름'"
              :propClass="'type1 mg-l20'"
              >
            </select-view>
          </div>
          <div>
            <form action="">
              <div class="input-box search-type4">
                <input type="text" required placeholder="검색어를 입력하세요.">
                <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                <div class="list">
                  <ul>
                    <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                    <li>Digital C.P.C. 기반 구축 </li>
                    <li>Digital Infra 구축</li>
                    <li>Digital Infra 구축</li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- //search -->
        <div class="board-write-tree-form type2">
          <vue-resizable
            :fit-parent="true"
            min-width="225"
            max-width="800"
            width="225"
          >
          <div class="treeselect">
            <div>
              <select-view
                :propOptionList="optionLsit"
                :propPlaceholder="'한화시스템/ICT'"
                :propClass="'type1'"
                >
              </select-view>
            </div>
            <treeselect
              v-model="treeSelected"
              :max-height="500"
              :options="treeData"
              :default-expand-level="0"
              :always-open="true"
              :load-options="handleLoadOptions"
              @select="onSelect"
              @deselect="onDeselect"
              :multiple="isMultiple"
              :autoSelectDescendants="false"
              :flat="true"
            ></treeselect>
          </div>
          </vue-resizable>

          <div class="member">
            <div class="flex jc-sb">
              <strong>디지털워크그룹</strong>
              <strong>총 <span class="fc org">12</span>명</strong>
            </div>
            <ul class="list">
              <li v-for="(item, index) in profile" :key="index">
                <button type="button" class="input-radio">
                  <label>
                    <span class="thumb"><img :src="require(`@/assets/imgs/${item.img}`)" alt="프로필 이미지"></span>
                    <div class="info">
                      <p class="name">
                        <span><b>{{item.name}}</b></span>
                        <span>{{item.companySpot}}</span>
                        <i>|</i>
                        <span>{{item.company}}</span>
                      </p>
                      <p>{{item.office}} / {{item.mobile}}</p>
                      <p class="email">{{item.email}}</p>
                      <p>{{item.part}}</p>
                      <p class="tag">
                        <span>{{item.tag1}}</span>
                        <span>{{item.tag2}}</span>
                      </p>
                    </div>
                  </label>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- //조직도 -->

      <div class="cnt-right flex-1 mg-l40">
        <!-- <div class="title sub">Detail View</div> -->
        <div class="cnt-refer staff-detail">
          <button type="button" class="btn sm line-type1 task">Task 보기</button>
          <div class="staff-info sit-01"> <!-- off: 오프라인, sit-01: 온라인, sit-02: 다른용무중, sit-03: 자리비움, sit-04: 방해금지 -->
            <div class="img-zoom">
              <span class="img">
                <span>
                  <img :src="require('@/assets/imgs/img_profile_01.png')" alt="프로필 이미지">
                </span>
              </span>
              <button type="button" class="btn-photo-view">사진크게보기</button>
            </div>
            <div>
              <strong class="name">김한화 과장</strong>
              <p>070-4162-5989 / 010-8936-5655</p>
              <p class="email"><a href="mailto:emailididid@hanwha.com">emailididid@hanwha.com</a></p>
              <p>근무장소 : 예약없음</p>
              <p class="fc org">
                시차출근, 08시 30분 출근<br>
                출근지연/현지직출, 2022.01.18 -  2022.12.31
              </p>
            </div>
          </div>
          <div class="tbl data-type sm">
            <table>
              <colgroup>
                <col width="22%">
                <col>
              </colgroup>
              <tr>
                <th scope="row">직위</th>
                <td>과장</td>
              </tr>
              <tr>
                <th scope="row">직책</th>
                <td>팀원</td>
              </tr>
              <tr>
                <th scope="row">담당업무</th>
                <td>IT 관련 UX/UI 디자인 설계 및 구축, 운영</td>
              </tr>
              <tr>
                <th scope="row">소속</th>
                <td>한화시스템/ICT > ICT부문 > 데이터 센터 > SharedService담당 > SharedService 1팀 > 디지털워크그룹</td>
              </tr>
              <tr>
                <th scope="row">직무 및 스킬</th>
                <td class="tag">
                  <span>#UI/UX 기획</span>
                  <span>#디자인</span>
                  <span>#프로토타이핑 이해</span>
                  <span>#화면설계</span>
                  <span>#직무 및 스킬 정보 노출</span>
                </td>
              </tr>
              <tr>
                <th scope="row">사원번호</th>
                <td>201303564</td>
              </tr>
              <tr>
                <th scope="row">아이디</th>
                <td>ididididid</td>
              </tr>
              <tr>
                <th scope="row">입사일</th>
                <td>2013.10.28</td>
              </tr>
              <tr>
                <th scope="row">팩스번호</th>
                <td>02-1234-5000</td>
              </tr>
              <tr>
                <th scope="row">근무지</th>
                <td>여의도 금융센터</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import selectView from "@/components/selectView.vue"
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'
// @ts-ignore
import VueResizable from 'vue-resizable'

export default defineComponent({
  components: {
    selectView,
    Treeselect,
    VueResizable,
  },
  data() {
    return {
      optionLsit: [
        { value: '회사명회사명회사명회사명회사명회사명회사명회사명', label: '회사명회사명회사명회사명회사명회사명회사명회사명' },
        { value: '이름', label: '이름' },
        { value: '아이디', label: '아이디' },
        { value: '사번', label: '사번' },
        { value: '직책', label: '직책' },
        { value: '직무', label: '직무' },
        { value: '휴대전화', label: '휴대전화' },
      ],
      profile: [
        {
          img: 'icon-svg/profile-default.svg',
          name: '김한화',
          companySpot: '직위',
          company: '직책',
          office: '02-6313-3487',
          mobile: '010-2721-4030',
          email: 'kimychul@hanwha.com',
          part: '디지털워크그룹',
          tag1: '#대표직무',
          tag2: '#대표스킬',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          company: '직책',
          office: '02-6313-3487',
          mobile: '010-2721-4030',
          email: 'kimychul@hanwha.com',
          part: '디지털워크그룹',
          tag1: '#UI/UX 기획',
          tag2: '#디자인',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          company: '직책',
          office: '02-6313-3487',
          mobile: '010-2721-4030',
          email: 'kimychul@hanwha.com',
          part: '디지털워크그룹',
          tag1: '#UI/UX 기획',
          tag2: '#디자인',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          company: '직책',
          office: '02-6313-3487',
          mobile: '010-2721-4030',
          email: 'kimychul@hanwha.com',
          part: '디지털워크그룹',
          tag1: '#UI/UX 기획',
          tag2: '#디자인',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          company: '직책',
          office: '02-6313-3487',
          mobile: '010-2721-4030',
          email: 'kimychul@hanwha.com',
          part: '디지털워크그룹',
          tag1: '#UI/UX 기획',
          tag2: '#디자인',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          company: '직책',
          office: '02-6313-3487',
          mobile: '010-2721-4030',
          email: 'kimychul@hanwha.com',
          part: '디지털워크그룹',
          tag1: '#UI/UX 기획',
          tag2: '#디자인',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          company: '직책',
          office: '02-6313-3487',
          mobile: '010-2721-4030',
          email: 'kimychul@hanwha.com',
          part: '디지털워크그룹',
          tag1: '#UI/UX 기획',
          tag2: '#디자인',
        }
      ],
      treeSelected: null,
        // define options
        treeData: [
          {
            id: 'a',
            label: 'a',
            children: [
              {
                id: 'aa',
                label: 'aa',
              }, {
                id: 'ab',
                label: 'ab',
              }
            ],
          }, {
            id: 'b',
            label: 'b',
          }, {
            id: 'c',
            label: 'c',
          },
          {
            id: 'e',
            label: 'e',
            children: [
              {
                id: 'f',
                label: 'f',
                children: [
                  {
                    id: 'j',
                    label: 'j',
                  }, {
                    id: 'k',
                    label: 'k',
                    children: [
                      {
                        id: 'ja',
                        label: 'ja',
                      },
                      {
                        id: 'ka',
                        label: 'ka',
                        children: [
                          {
                            id: 'jb',
                            label: 'jb',
                          },
                          {
                            id: 'kb',
                            label: 'kb',
                          },
                          {
                            id: 'jbc',
                            label: 'jbc',
                          },
                        ],
                      }, {
                          id: 'kah',
                          label: 'kah',
                          children: [
                            {
                              id: 'jbh',
                              label: 'jbh',
                            },
                            {
                              id: 'jbhc',
                              label: 'jbhc',
                            },
                          ]
                      }
                    ],
                  }
                ],
              },
              {
                id: 'n',
                label: 'n',
                children: [
                  {
                    id: 'aac',
                    label: 'aac',
                  }, {
                    id: 'abc',
                    label: 'abc',
                  }
                ],
              },
              {
                id: 'g',
                label: 'g',
              }
            ],
          }, {
              id: 'h',
              label: 'h',
          }, {
              id: 'i',
              label: 'i',
          }, {
              id: 'l',
              label: 'l',
          }
      ],
    }
  }
})
</script>