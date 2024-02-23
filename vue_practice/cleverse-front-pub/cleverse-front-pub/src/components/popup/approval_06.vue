<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="결재자 지정"
    class="ly-pop-type1 xl f-14"
  >
    <template v-slot:body>
      <div class="designation-wrap">
        <div class="cnt-org sm">
          <!-- <div class="tab-right">
            <div class="input-chk square"><input type="checkbox" name="chk" id="chk1-1"><label for="chk1-1">전사</label></div>
            <button type="button" class="icon reset">설정 초기화</button>
          </div> -->
          <div class="tab-type3">
            <ul class="tab-menu">
              <li :class="{'active':currentTab===idx}" v-for="(tab, idx) in tabsType" :key="idx">
                <button type="button" @click="currentTab = idx">
                  {{tab.title}}
                  <span class="num">{{tab.num}}</span>
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <!-- 조직도 -->
              <div v-show="currentTab == 0">
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
                    <button type="button" class="ico-reset mg-l15">설정 초기화</button>
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
              <!-- 공용그룹 -->
              <div v-show="currentTab == 1">
                <!-- search -->
                <div class="board-write-search">
                  <div>
                    <select-view
                      :propOptionList="optionLsit4"
                      :propPlaceholder="'그룹명'"
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
                </div>
                <!-- //search -->
                <div class="treeselect w100p">
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
              </div>
              <!-- //공용그룹 -->
              <!-- 개인결재선 -->
              <div v-show="currentTab == 2">
                <!-- search -->
                <!-- <div class="board-write-search">
                  <div>
                    <select-view
                      :propOptionList="optionLsit5"
                      :propPlaceholder="'문서제목'"
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
                </div> -->
                <!-- //search -->
                <!-- <div class="tbl list-type3 scroll mh500 no-paging" v-if="!nodata">
                  <table-lite
                    :has-checkbox="true"
                    :columns="columns"
                    :rows="rows"
                    :total="100"
                    :messages="messages"/>
                </div>
                <p class="nodata" v-if="nodata">등록된 데이터가 없습니다.</p> -->

                <div class="tbl list-type3 scroll mh580">
                  <div class="indi-apprline-head">
                    <div class="input-chk square"><input type="checkbox" name="chk" id="chk1-1"></div>
                    <!-- <div class="input-radio h16"><input type="radio" name="rd1" id="rd1-1"><label for="rd1-1"></label></div> -->
                    <div>No.</div>
                    <div>결재선명</div>
                    <div>편집</div>
                  </div>
                  <ul class="indi-apprline-list">
                    <li>
                      <div class="input-chk square"><input type="checkbox" name="chk" id="chk1-2"></div>
                      <!-- <div class="input-radio h16"><input type="radio" name="rd1" id="rd1-2"><label for="rd1-2"></label></div> -->
                      <div></div>
                      <div>팀장님</div>
                      <div>
                        <button type="button" class="btn sm line-type2 round-type">미리보기</button>
                        <button type="button" class="btn-ico-del">삭제</button>
                      </div>
                    </li>
                    <li>
                      <div class="input-chk square"><input type="checkbox" name="chk" id="chk1-3"></div>
                      <!-- <div class="input-radio h16"><input type="radio" name="rd1" id="rd1-3"><label for="rd1-3"></label></div> -->
                      <div></div>
                      <div>팀장님</div>
                      <div>
                        <button type="button" class="btn sm line-type2 round-type">미리보기</button>
                        <button type="button" class="btn-ico-del">삭제</button>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- 데이터 없는 경우 -->
                <!-- <p class="nodata" v-if="nodata2">등록된 데이터가 없습니다.</p> -->
              </div>
              <!-- //개인결재선 -->
            </div>
          </div>
        </div>

        <!-- 결재선/참조수신-->
        <div class="cnt-right">
          <div class="tab-type3">
            <ul class="tab-menu">
              <li :class="{'active':currentTab2===index}" v-for="(tab, index) in tabsType2" :key="index">
                <button type="button" @click="currentTab2 = index">
                  {{tab.title}}
                  <span class="num">{{tab.num}}</span>
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <!-- 결재선 -->
              <div v-show="currentTab2 == 0">
                <div class="cnt-btn">
                  <button type="button" class="btn sm round-type">추가</button>
                  <button type="button" class="btn sm line-type2 round-type">삭제</button>
                </div>
                <div class="cnt-line">
                  <div class="tr"><button type="button" class="btn sm">결재선 저장</button></div>
                  <div class="group">
                    <div class="box on">  <!-- 클래스 추가: 활성화 on, 좌측화살표 right, 아래화살표 down -->
                      <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                      <p class="name">
                        <strong><b>김한화</b> 과장</strong>
                        <span>디지털워크그룹</span>
                      </p>
                      <div class="state">
                        <span>미결</span>
                        <span>
                          <select-view
                            :propOptionList="optionLsit3"
                            :propPlaceholder="'일반결재'"
                            :propClass="'type2'"
                            >
                          </select-view>
                        </span>
                      </div>
                      <button type="button" class="down active"><span class="blind">아래로</span></button>
                      <button type="button" class="right active"><span class="blind">오른쪽으로</span></button>
                    </div>
                  </div>
                  <!-- row-group : bg-wht type -->
                  <div class="group bg-wht">
                    <!-- col-group : bg-gry type -->
                    <div class="group bg-gry">
                      <div class="group">
                        <div class="box activeError">  <!-- 클래스 추가: 활성화 on, 좌측화살표 right, 아래화살표 down -->
                          <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                          <p class="name">
                            <strong><b>김한화1</b> 과장</strong>
                            <span>디지털워크그룹</span>
                          </p>
                          <div class="state">
                            <span>미결</span>
                            <span>
                              <select-view
                                :propOptionList="optionLsit3"
                                :propPlaceholder="'일반결재'"
                                :propClass="'type2'"
                                >
                              </select-view>
                            </span>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>
                      </div>
                      <div class="group">
                        <div class="box">  <!-- 클래스 추가: 활성화 on, 좌측화살표 right, 아래화살표 down -->
                          <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                          <p class="name">
                            <strong><b>김한화</b> 과장</strong>
                            <span>디지털워크그룹</span>
                          </p>
                          <div class="state">
                            <span>미결</span>
                            <span>
                              <select-view
                                :propOptionList="optionLsit3"
                                :propPlaceholder="'일반결재'"
                                :propClass="'type2'"
                                >
                              </select-view>
                            </span>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>
                      </div>

                      <button type="button" class="down"><span class="blind">아래로</span></button>
                      <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                    </div>
                    <!-- //bg-gry type -->
                    <div class="group">
                      <div class="box">
                        <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                        <p class="name">
                          <strong><b>김한화</b> 과장</strong>
                          <span>디지털워크그룹</span>
                        </p>
                        <div class="state">
                          <span>미결</span>
                          <span>
                            <select-view
                              :propOptionList="optionLsit3"
                              :propPlaceholder="'일반결재'"
                              :propClass="'type2'"
                              >
                            </select-view>
                          </span>
                        </div>
                        <button type="button" class="down"><span class="blind">아래로</span></button>
                        <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                      </div>
                    </div>
                    <div class="group">
                      <div class="box">
                        <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                        <p class="name">
                          <strong><b>김한화</b> 과장</strong>
                          <span>디지털워크그룹</span>
                        </p>
                        <div class="state">
                          <span>미결</span>
                          <span>
                            <select-view
                              :propOptionList="optionLsit3"
                              :propPlaceholder="'일반결재'"
                              :propClass="'type2'"
                              >
                            </select-view>
                          </span>
                        </div>
                        <button type="button" class="down"><span class="blind">아래로</span></button>
                        <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                      </div>
                    </div>

                    <button type="button" class="down"><span class="blind">아래로</span></button>
                    <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                  </div>
                  <!-- //bg-wht type -->

                  <!-- bg-wht type -->
                  <div class="group bg-wht">
                    <!-- bg-gry type -->
                    <div class="group bg-gry">
                      <div class="group">
                        <div class="box">
                          <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                          <p class="name">
                            <strong><b>김한화</b> 과장</strong>
                            <span>디지털워크그룹</span>
                          </p>
                          <div class="state">
                            <span>미결</span>
                            <span>
                              <select-view
                                :propOptionList="optionLsit3"
                                :propPlaceholder="'일반결재'"
                                :propClass="'type2'"
                                >
                              </select-view>
                            </span>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>
                      </div>
                      <div class="group">
                        <div class="box">
                          <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                          <p class="name">
                            <strong><b>김한화</b> 과장</strong>
                            <span>디지털워크그룹</span>
                          </p>
                          <div class="state">
                            <span>미결</span>
                            <span>
                              <select-view
                                :propOptionList="optionLsit3"
                                :propPlaceholder="'일반결재'"
                                :propClass="'type2'"
                                >
                              </select-view>
                            </span>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>
                      </div>
                      <div class="group">
                        <div class="box">
                          <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                          <p class="name">
                            <strong><b>김한화</b> 과장</strong>
                            <span>디지털워크그룹</span>
                          </p>
                          <div class="state">
                            <span>미결</span>
                            <span>
                              <select-view
                                :propOptionList="optionLsit3"
                                :propPlaceholder="'일반결재'"
                                :propClass="'type2'"
                                >
                              </select-view>
                            </span>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>
                      </div>
                      <div class="group bg-wht">
                        <div class="group bg-gry">
                          <div class="group">
                            <div class="box">
                              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                              <p class="name">
                                <strong><b>김한화</b> 과장</strong>
                                <span>디지털워크그룹</span>
                              </p>
                              <div class="state">
                                <span>미결</span>
                                <span>
                                  <select-view
                                    :propOptionList="optionLsit3"
                                    :propPlaceholder="'일반결재'"
                                    :propClass="'type2'"
                                    >
                                  </select-view>
                                </span>
                              </div>
                              <button type="button" class="down"><span class="blind">아래로</span></button>
                              <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                            </div>
                          </div>
                          <div class="group">
                            <div class="box">
                              <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                              <p class="name">
                                <strong><b>김한화</b> 과장</strong>
                                <span>디지털워크그룹</span>
                              </p>
                              <div class="state">
                                <span>미결</span>
                                <span>
                                  <select-view
                                    :propOptionList="optionLsit3"
                                    :propPlaceholder="'일반결재'"
                                    :propClass="'type2'"
                                    >
                                  </select-view>
                                </span>
                              </div>
                              <button type="button" class="down"><span class="blind">아래로</span></button>
                              <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                            </div>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>

                        <div class="group">
                          <div class="box">
                            <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                            <p class="name">
                              <strong><b>김한화</b> 과장</strong>
                              <span>디지털워크그룹</span>
                            </p>
                            <div class="state">
                              <span>미결</span>
                              <span>
                                <select-view
                                  :propOptionList="optionLsit3"
                                  :propPlaceholder="'일반결재'"
                                  :propClass="'type2'"
                                  >
                                </select-view>
                              </span>
                            </div>
                            <button type="button" class="down"><span class="blind">아래로</span></button>
                            <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                          </div>
                        </div>
                        <div class="group">
                          <div class="box">
                            <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                            <p class="name">
                              <strong><b>김한화</b> 과장</strong>
                              <span>디지털워크그룹</span>
                            </p>
                            <div class="state">
                              <span>미결</span>
                              <span>
                                <select-view
                                  :propOptionList="optionLsit3"
                                  :propPlaceholder="'일반결재'"
                                  :propClass="'type2'"
                                  >
                                </select-view>
                              </span>
                            </div>
                            <button type="button" class="down"><span class="blind">아래로</span></button>
                            <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                          </div>
                        </div>

                        <button type="button" class="down"><span class="blind">아래로</span></button>
                        <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                      </div>

                      <button type="button" class="down"><span class="blind">아래로</span></button>
                      <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                    </div>
                    <!-- //bg-gry type -->

                    <!-- bg-gry type -->
                    <div class="group bg-gry">
                      <div class="group">
                        <div class="box">
                          <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                          <p class="name">
                            <strong><b>김한화</b> 과장</strong>
                            <span>디지털워크그룹</span>
                          </p>
                          <div class="state">
                            <span>미결</span>
                            <span>
                              <select-view
                                :propOptionList="optionLsit3"
                                :propPlaceholder="'일반결재'"
                                :propClass="'type2'"
                                >
                              </select-view>
                            </span>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>
                      </div>
                      <div class="group">
                        <div class="box">
                          <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                          <p class="name">
                            <strong><b>김한화</b> 과장</strong>
                            <span>디지털워크그룹</span>
                          </p>
                          <div class="state">
                            <span>미결</span>
                            <span>
                              <select-view
                                :propOptionList="optionLsit3"
                                :propPlaceholder="'일반결재'"
                                :propClass="'type2'"
                                >
                              </select-view>
                            </span>
                          </div>
                          <button type="button" class="down"><span class="blind">아래로</span></button>
                          <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                        </div>
                      </div>

                      <button type="button" class="down"><span class="blind">아래로</span></button>
                      <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                    </div>
                    <!-- //bg-gry type -->

                    <div class="group">
                      <div class="box">
                        <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="프로필 이미지"></span>
                        <p class="name">
                          <strong><b>김한화</b> 과장</strong>
                          <span>디지털워크그룹</span>
                        </p>
                        <div class="state">
                          <span>미결</span>
                          <span>
                            <select-view
                              :propOptionList="optionLsit3"
                              :propPlaceholder="'일반결재'"
                              :propClass="'type2'"
                              >
                            </select-view>
                          </span>
                        </div>
                        <button type="button" class="down"><span class="blind">아래로</span></button>
                        <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                      </div>
                    </div>

                    <button type="button" class="down"><span class="blind">아래로</span></button>
                    <button type="button" class="right"><span class="blind">오른쪽으로</span></button>
                  </div>
                  <!-- //bg-wht type -->
                </div>
              </div>
              <!-- //결재선 -->
              <!-- 참조/수신 -->
              <div v-show="currentTab2 == 1">
                <!-- <button type="button" class="btn xs round-type tab-right">결재선 저장</button> -->
                <div class="cnt-btn two">
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
                  <div class="half"> <!-- 클래스: 참조/수신 둘다 노출시 half, 한개만 노출시 full -->
                    <div class="title sub">참조</div>
                    <ul class="list">
                      <li class="select-target">
                        <div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-3"><label for="chk2-3">선택대상</label></div>
                        <span>하위부서포함</span>
                      </li>
                      <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-3"><label for="chk2-3">재무실</label></div></li>
                      <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-1"><label for="chk2-1">김한화 부장</label></div></li>
                      <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-2"><label for="chk2-2">김한화 전무부장</label></div></li>
                    </ul>
                    <!-- 데이터 없는 경우 -->
                    <!-- <p class="nodata">등록된 데이터가 없습니다.</p> -->
                  </div>
                  <div class="half">
                    <div class="title sub">수신</div>
                    <!-- <ul class="list">
                      <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-1"><label for="chk3-1">김한화 부장</label></div></li>
                      <li><div class="input-chk square"><input type="checkbox" name="chk3" id="chk3-2"><label for="chk3-2">김한화 부장</label></div></li>
                    </ul> -->
                    <!-- 데이터 없는 경우 -->
                    <p class="nodata">등록된 데이터가 없습니다.</p>
                  </div>
                </div>
              </div>
              <!-- //참조/수신 -->
            </div>
          </div>
        </div>
        <!-- //결재선/참조수신-->
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
      optionLsit3: [
        { value: '일반결재', label: '일반결재' },
        { value: '협조결재', label: '협조결재' },
        { value: '협조담당', label: '협조담당' },
        { value: '결재참조', label: '결재참조' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit4: [
        { value: '그룹명', label: '그룹명' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit5: [
        { value: '문서제목', label: '문서제목' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      currentTab: 0,
      currentTab2: 0,
      tabsType: [
        { title: '조직도' },
        { title: '공용그룹' },
        { title: '개인결재선' },
      ],
      tabsType2: [
        { title: '결재선' },
        { title: '참조/수신' },
      ],
      columns: [
        {
          label: 'No.',
          field: 'num',
          width: '15%',
        },
        {
          label: '결재선명',
          field: 'subject',
          width: '',
          columnClasses: "tl",
        },
        {
          label: '편집',
          field: 'edit',
          width: '30%',
          display: function (row:any) {
            return (
              '<button type="button" class="btn xs line-type2 round-type">' +
              '미리보기' +
              '</button>' +
              '<button type="button" class="btn-ico-del mg-l20">' +
              '삭제' +
              '</button>'
            );
          },
        },
      ],
      rows: [
        {
          id: 0,
          num: '00',
          subject: '팀장님',
          edit: '',
        },
        {
          id: 1,
          num: '00',
          subject: '팀장님',
          edit: '',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
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