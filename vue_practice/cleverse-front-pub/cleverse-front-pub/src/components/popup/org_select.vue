<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="조직도 선택"
    class="ly-pop-type1 xl f-14"
  >
    <template v-slot:body>
      <div class="designation-wrap org-select">
        <div class="cnt-org sm">
          <div class="tab-type3">
            <ul class="tab-menu">
              <li :class="{'active':currentTab===idx}" v-for="(tab, idx) in tabsType" :key="idx">
                <button type="button" @click="currentTab = idx" class="fc dark">
                  {{tab.title}}
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <!-- 조직도 -->
              <div>
                <!-- search -->
                <div class="board-write-search flex col">
                  <div class="flex mg-b15">
                    <select-view
                      :propOptionList="optionLsit"
                      :propPlaceholder="'한화시스템/ICT'"
                      :propClass="'type1 w260 mg-r15'"
                      >
                    </select-view>
                    <div class="input-chk square"><input type="checkbox" name="chk" id="chk1-1"><label for="chk1-1">전사</label></div>
                  </div>
                  <div class="flex">
                    <div>
                      <select-view
                        :propOptionList="optionLsit2"
                        :propPlaceholder="'이름'"
                        :propClass="'type1'"
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
                    <!-- <button type="button" class="ico-reset mg-l15">설정 초기화</button> -->
                  </div>
                </div>
                <!-- //search -->
                <div class="board-write-tree-form">
                  <div class="treeselect">
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

                  <div class="member">
                    <div class="flex jc-sb">
                      <strong>총 <span class="fc org">13</span>명</strong>
                      <div class="input-chk after"><input type="checkbox" name="chk3" id="chk3" checked><label for="chk3">전체선택</label></div>
                    </div>
                    <ul class="list">
                      <!-- 체크박스 타입 -->
                      <li v-for="(item, index) in profile" :key="index">
                        <div class="input-chk">
                          <input type="checkbox" name="chk2" :id="`chk2-${index}`">
                          <label :for="`chk2-${index}`">
                            <span class="thumb"><img :src="require(`@/assets/imgs/${item.img}`)" alt="프로필 이미지"></span>
                            <div class="info">
                              <p class="name">
                                <span><b>{{item.name}}</b></span>
                                <span>{{item.companySpot}}</span>
                                <i>|</i>
                                <span>{{item.company}}</span>
                                <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.name}} {{item.companySpot}} {{item.company}}
                                </v-tooltip>
                              </p>
                              <p>
                                {{item.companyId}}
                                <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.companyId}}
                                </v-tooltip>
                              </p>
                              <!-- <p>
                                {{item.part}}
                                <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.part}}
                                </v-tooltip>
                              </p> -->
                              <p>
                                {{item.work}}
                                 <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.work}}
                                </v-tooltip>
                              </p>
                            </div>
                          </label>
                        </div>
                      </li>
                      <!-- 라디오 타입 -->
                      <li v-for="(item, index) in profile2" :key="index">
                        <div class="input-radio">
                          <input type="radio" name="radio1" :id="`radio1-${index}`">
                          <label :for="`radio1-${index}`">
                            <span class="thumb"><img :src="require(`@/assets/imgs/${item.img}`)" alt="프로필 이미지"></span>
                            <div class="info">
                              <p class="name">
                                <span><b>{{item.name}}</b></span>
                                <span>{{item.companySpot}}</span>
                                <i>|</i>
                                <span>{{item.company}}</span>
                                <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.name}} {{item.companySpot}} {{item.company}}
                                </v-tooltip>
                              </p>
                              <p>
                                {{item.companyId}}
                                <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.companyId}}
                                </v-tooltip>
                              </p>
                              <!-- <p>
                                {{item.part}}
                                <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.part}}
                                </v-tooltip>
                              </p> -->
                              <p>
                                {{item.work}}
                                 <v-tooltip
                                  activator='parent'
                                  anchor='bottom'
                                  content-class='bottom mw-200'
                                >
                                {{item.work}}
                                </v-tooltip>
                              </p>
                            </div>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- //조직도 -->
            </div>
          </div>
        </div>

        <!-- 받는사람/참조/수신참조 -->
        <div class="cnt-right third">
          <p class="subtitle fc org">※ 부서 선택 시 하위 부서는 자동 선택됩니다.</p>
          <div class="flex">
            <div class="cnt-btn third">
              <div>
                <button type="button" class="btn sm round-type">추가</button>
                <button type="button" class="btn sm line-type2 round-type">삭제</button>
              </div>
              <div>
                <button type="button" class="btn sm round-type">추가</button>
                <button type="button" class="btn sm line-type2 round-type">삭제</button>
              </div>
              <div>
                <button type="button" class="btn sm round-type">추가</button>
                <button type="button" class="btn sm line-type2 round-type">삭제</button>
              </div>
            </div>
            <div class="cnt-refer">
              <div class="half"> 
                <div class="title sub">
                  <div class="input-chk square">
                    <input type="checkbox" name="chk3" id="chk3-00"><label for="chk3-00">받는 사람</label>
                  </div>
                </div>
                <ul class="list">
                  <li v-for="(item, index) in people1" :key="index">
                    <div class="input-chk square">
                      <input type="checkbox" name="chk3" :id="`chk3-${index}`">
                      <label :for="`chk3-${index}`">{{item.name}}</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="half">
                <div class="title sub">
                  <div class="input-chk square">
                    <input type="checkbox" name="chk4" id="chk4-00"><label for="chk4-00">참조</label>
                  </div>
                </div>
                <ul class="list">
                  <li v-for="(item, index) in people2" :key="index">
                    <div class="input-chk square">
                      <input type="checkbox" name="chk4" :id="`chk4-${index}`">
                      <label :for="`chk4-${index}`">{{item.name}}</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="half"> 
                <div class="title sub">
                  <div class="input-chk square">
                    <input type="checkbox" name="chk5" id="chk5-00"><label for="chk5-00">숨은 참조</label>
                  </div>
                </div>
                <ul class="list">
                  <li v-for="(item, index) in people3" :key="index">
                    <div class="input-chk square">
                      <input type="checkbox" name="chk5" :id="`chk5-${index}`">
                      <label :for="`chk5-${index}`">{{item.name}}</label>
                    </div>
                  </li>
                </ul>
                <!-- 데이터 없는 경우 -->
                <!-- <p class="nodata">등록된 데이터가 없습니다.</p> -->
              </div>
            </div>
          </div>
        </div>
        <!-- //받는사람/참조/수신참조 -->
      </div>
    </template>

    <template v-slot:btnWrap>
		<div class="btn-wrap pd-t20 flex jc-e">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">확인</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue"
///import TableLite from "vue3-table-lite/ts";
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'

export default defineComponent({
  components: {
    basePopup,
    selectView,
    Treeselect,
    //TableLite
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
      profile: [
        {
          img: 'icon-svg/profile-default.svg',
          name: '김한화',
          companySpot: '직위',
          companyId: 'id 들어가는 영역1 id 들어가는 영역1id 들어가는 영역1id 들어가는 영역1id 들어가는 영역1',
          company: '직책',
          //part: '한화시스템 / ICT',
          work: 'SharedService 담당',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          companyId: 'id 들어가는 영역2',
          company: '직책',
          //part: '한화시스템 / ICT',
          work: 'SharedService 담당',
        },
      ],
      profile2: [
        {
          img: 'icon-svg/profile-default.svg',
          name: '김한화',
          companySpot: '직위',
          companyId: 'id 들어가는 영역1 id 들어가는 영역1id 들어가는 영역1id 들어가는 영역1id 들어가는 영역1',
          company: '직책',
          //part: '한화시스템 / ICT',
          work: 'SharedService 담당',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          companyId: 'id 들어가는 영역2',
          company: '직책',
          //part: '한화시스템 / ICT',
          work: 'SharedService 담당',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          companyId: 'id 들어가는 영역3',
          company: '직책',
          //part: '한화시스템 / ICT',
          work: 'SharedService 담당',
        },
        {
          img: 'img_dummy1.png',
          name: '김한화',
          companySpot: '직위',
          companyId: 'id 들어가는 영역3',
          company: '직책',
          //part: '한화시스템 / ICT',
          work: 'SharedService 담당',
        }
      ],
      people1: [
        { name: '김한화' },
        { name: '법무실' },
        { name: '김한화1' },
      ],
      people2: [
        { name: '김한화' },
        { name: '박한화' },
      ],
      people3: [
        { name: '이한화' },
        { name: '박한화' },
      ],
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      nodata: false,
      nodata2: true,
      optionLsit: [
        { value: '한화시스템/ICT', label: '한화시스템/ICT' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit2: [
        { value: '이름', label: '이름' },
        { value: '아이디', label: '아이디' },
        { value: '사번', label: '사번' },
        { value: '직책', label: '직책' },
        { value: '직무', label: '직무' },
      ],
      tabsType: [
        { title: '조직도' },
      ],
      isMultiple: true,
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