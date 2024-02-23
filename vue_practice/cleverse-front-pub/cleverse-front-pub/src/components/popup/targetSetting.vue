<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="대상설정"
    class="ly-pop-type1 admin xl"
  >
    <template v-slot:body>
      <div class="designation-wrap access-setting">
        <!-- 조직도 -->
        <div class="cnt-org">
          <div class="title sub bd0">조직도</div>
          <!-- search -->
          <div class="board-write-search">
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
              <strong>총 <span class="fc org">3</span>명</strong>
              <ul class="list">
                <li>
                  <div class="input-chk">
                    <input type="checkbox" name="chk1" id="chk1-1" checked>
                    <label for="chk1-1">
                      <span class="thumb"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                      <p class="info">
                        <span class="name">
                          <em>김한화 <span>직위</span></em>
                          <span>직책</span>
                        </span>
                        <span class="txt">idididididididididididididdididididdidididid</span>
                        <span>한화시스템 / ICT</span>
                        <span>SharedService 담당</span>
                      </p>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="input-chk">
                    <input type="checkbox" name="chk1" id="chk1-2">
                    <label for="chk1-2">
                      <span class="thumb"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                      <p class="info">
                        <span class="name">
                          <em>김한화 <span>직위</span></em>
                          <span>직책</span>
                        </span>
                        <span class="txt">ididididididi</span>
                        <span>한화시스템 / ICT</span>
                        <span>SharedService 담당</span>
                      </p>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="input-chk">
                    <input type="checkbox" name="chk1" id="chk1-3">
                    <label for="chk1-3">
                      <span class="thumb"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                      <p class="info">
                        <span class="name">
                          <em>김한화 <span>직위</span></em>
                          <span>직책</span>
                        </span>
                        <span class="txt">ididididididi</span>
                        <span>한화시스템 / ICT</span>
                        <span>SharedService 담당</span>
                      </p>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- //조직도 -->
        <div class="cnt-btn">
          <button type="button" class="btn sm round-type">추가</button>
          <button type="button" class="btn sm line-type2 round-type">삭제</button>
        </div>
        <div class="cnt-right type2">
          <div class="cnt-refer">
            <div class="half">
              <ul class="list">
                <li>
                  <div>
                    <div class="input-chk square">
                      <input type="checkbox" name="chk1" id="chk1-1">
                      <label for="chk1-1">선택대상</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="input-chk square">
                      <input type="checkbox" name="chk1" id="chk2-1">
                      <label for="chk2-1">DSI팀</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="input-chk square">
                      <input type="checkbox" name="chk1" id="chk3-1">
                      <label for="chk3-1">어성철 사장</label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap pd-t20">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">저장</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue"
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'

export default defineComponent({
  components: {
    basePopup,
    selectView,
    Treeselect,
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
      optionLsit: [
        { value: '이름', label: '이름' },
        { value: '아이디', label: '아이디' },
        { value: '사번', label: '사번' },
        { value: '직책', label: '직책' },
        { value: '직무', label: '직무' },
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