<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="프로세스 이력"
    class="ly-pop-type1 admin xl scroll"
  >
    <template v-slot:body>
      <div class="title sub">수정이력</div>
      <div class="tbl list-type3 no-paging scroll mh460">
        <table-lite
          :is-slot-mode="true"
          :columns="columns2"
          :rows="rows2"
          :total="100"
          :messages="messages"
          >
            <template v-slot:search="data">
              {{data.value.search}}
              <button type="button" class="btn sm">조회</button>
            </template>
          </table-lite>
      </div>

      <div class="title sub">업무흐름도</div>
      <!-- <div class="work-flow-wrap">
        <div class="work-flow">
          <div class="box start">시작</div>
            <div class="box finish" :class="selectActive2 === 'select1' ? 'active' : ''"> -- 완료 --
            <button type="button" class="name" @click="clickSelect1('select1')"><b>김한화</b> 과장</button>
            <span>기안자</span>
            <strong>완료</strong>
            <ul>
              <li>
                <span>부서</span>
                <p>데이터센터</p>
              </li>
              <li>
                <span>시작일</span>
                <p>2019.05.31 10:24</p>
              </li>
              <li>
                <span>아이디</span>
                <p>myid000</p>
              </li>
              <li>
                <span>열람일</span>
                <p>2019.05.31 10:24</p>
              </li>
              <li>
                <span>완료일</span>
                <p>2019.05.31 10:24</p>
              </li>
              <li>
                <span>처리자</span>
                <p>이한화</p>
              </li>
            </ul>
          </div>
          <div class="group grp-on">
            <div class="col">
              <div class="box ing" :class="selectActive2 === 'select2' ? 'active' : ''"> -- 진행중 --
                <button type="button" class="name" @click="clickSelect1('select2')"><b>김한화</b> 과장</button>
                <span>결재</span>
                <strong>진행중</strong>
                <ul>
                  <li>
                    <span>부서</span>
                    <p>데이터센터</p>
                  </li>
                  <li>
                    <span>시작일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>아이디</span>
                    <p>myid000</p>
                  </li>
                  <li>
                    <span>열람일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>완료일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>처리자</span>
                    <p>이한화</p>
                  </li>
                </ul>
              </div>
              <div class="box reject" :class="selectActive2 === 'select6' ? 'active' : ''"> -- 반려 --
                <button type="button" class="name" @click="clickSelect1('select6')"><b>김한화</b> 과장</button>
                <span>결재</span>
                <strong>반려</strong>
                <ul>
                  <li>
                    <span>부서</span>
                    <p>데이터센터</p>
                  </li>
                  <li>
                    <span>시작일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>아이디</span>
                    <p>myid000</p>
                  </li>
                  <li>
                    <span>열람일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>완료일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>처리자</span>
                    <p>이한화</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="group grp-off">
            <div class="col">
              <div class="box" :class="selectActive2 === 'select3' ? 'active' : ''">
                <button type="button" class="name" @click="clickSelect1('select3')"><b>김한화</b> 과장</button>
                <span>협조담당</span>
                <strong>대기</strong>
                <ul>
                  <li>
                    <span>부서</span>
                    <p>데이터센터</p>
                  </li>
                  <li>
                    <span>시작일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>아이디</span>
                    <p>myid000</p>
                  </li>
                  <li>
                    <span>열람일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>완료일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>처리자</span>
                    <p>이한화</p>
                  </li>
                </ul>
              </div>
              <div class="box" :class="selectActive2 === 'select4' ? 'active' : ''">
                <button type="button" class="name" @click="clickSelect1('select4')"><b>김한화</b> 과장</button>
                <span>협조담당</span>
                <strong>대기</strong>
                <ul>
                  <li>
                    <span>부서</span>
                    <p>데이터센터</p>
                  </li>
                  <li>
                    <span>시작일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>아이디</span>
                    <p>myid000</p>
                  </li>
                  <li>
                    <span>열람일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>완료일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>처리자</span>
                    <p>이한화</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="group grp-off">
            <div class="row">
              <div class="box" :class="selectActive2 === 'select5' ? 'active' : ''">
                <button type="button" class="name" @click="clickSelect1('select5')"><b>김한화</b> 과장</button>
                <span>협조담당</span>
                <strong>대기</strong>
                <ul>
                  <li>
                    <span>부서</span>
                    <p>데이터센터</p>
                  </li>
                  <li>
                    <span>시작일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>아이디</span>
                    <p>myid000</p>
                  </li>
                  <li>
                    <span>열람일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>완료일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>처리자</span>
                    <p>이한화</p>
                  </li>
                </ul>
              </div>
              <div class="box" :class="selectActive2 === 'select7' ? 'active' : ''">
                <button type="button" class="name" @click="clickSelect1('select7')"><b>김한화</b> 과장</button>
                <span>협조담당</span>
                <strong>대기</strong>
                <ul>
                  <li>
                    <span>부서</span>
                    <p>데이터센터</p>
                  </li>
                  <li>
                    <span>시작일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>아이디</span>
                    <p>myid000</p>
                  </li>
                  <li>
                    <span>열람일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>완료일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>처리자</span>
                    <p>이한화</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="box" :class="selectActive2 === 'select8' ? 'active' : ''">
                <button type="button" class="name" @click="clickSelect1('select8')"><b>김한화</b> 과장</button>
                <span>협조담당</span>
                <strong>대기</strong>
                <ul>
                  <li>
                    <span>부서</span>
                    <p>데이터센터</p>
                  </li>
                  <li>
                    <span>시작일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>아이디</span>
                    <p>myid000</p>
                  </li>
                  <li>
                    <span>열람일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>완료일</span>
                    <p>2019.05.31 10:24</p>
                  </li>
                  <li>
                    <span>처리자</span>
                    <p>이한화</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="box" :class="selectActive2 === 'select9' ? 'active' : ''">
            <button type="button" class="name" @click="clickSelect1('select9')"><b>김한화</b> 과장</button>
            <span>협조담당</span>
            <strong>대기</strong>
            <ul>
              <li>
                <span>부서</span>
                <p>데이터센터</p>
              </li>
              <li>
                <span>시작일</span>
                <p>2019.05.31 10:24</p>
              </li>
              <li>
                <span>아이디</span>
                <p>myid000</p>
              </li>
              <li>
                <span>열람일</span>
                <p>2019.05.31 10:24</p>
              </li>
              <li>
                <span>완료일</span>
                <p>2019.05.31 10:24</p>
              </li>
              <li>
                <span>처리자</span>
                <p>이한화</p>
              </li>
            </ul>
          </div>
          <div class="box end">완료</div>
        </div>
      </div> -->


      <div class="work-flow-wrap">
        <div class="work-flow">
            <!-- ToDo. 병렬/직렬/결재자 flow component 구성 start -->
          <div class="box start">시작</div>
          <div>
            <div class="box finish" :class="selectActive2 === 'select1' ? 'active' : ''"><!-- 완료 -->
              <button type="button" class="name" @click="clickSelect1('select1')"><b>Muhammad Allif Firdaus bin Rohimanens</b> Specialist</button>
              <span>기안자</span>
              <strong>완료</strong>
              <ul>
                <li>
                  <span>부서</span>
                  <p>Hanwha Q CELLS Malaysia Cell Divison</p>
                </li>
                <li>
                  <span>시작일</span>
                  <p>2022.07.04 17:29</p>
                </li>
                <li>
                  <span>아이디</span>
                  <p>gw015</p>
                </li>
                <li>
                  <span>열람일</span>
                  <p>2022.07.04 17:29</p>
                </li>
                <li>
                  <span>완료일</span>
                  <p>2022.07.04 17:29</p>
                </li>
                <li>
                  <span>처리자</span>
                  <p>Muhammad Allif Firdaus bin Rohimanens</p>
                </li>
              </ul>
            </div><!-- 결재자 component -->
            <!--v-if-->
            <!-- 병렬 component   -->
            <!--v-if-->
            <!-- 직렬 component   -->
          </div>
          <div>
            <!--v-if-->
            <!-- 결재자 component -->
            <div class="group grp-off">
              <div class="col" kind="flow">
                <div class="grp-on" kind="flow">
                  <div class="row" kind="flow">
                    <div class="group grp-off" kind="flow">
                      <div class="col" kind="flow">
                        <div class="box ing" kind="signer" :class="selectActive2 === 'select2' ? 'active' : ''"><!-- 진행중 -->
                          <button type="button" class="name" @click="clickSelect1('select2')"><b>Muhammad Allif Firdaus bin Rohimanens</b> Specialist</button>
                          <span>기안자</span>
                          <strong>진행중</strong>
                          <ul>
                            <li>
                              <span>부서</span>
                              <p>SharedService1팀(EP)</p>
                            </li>
                            <li>
                              <span>시작일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>아이디</span>
                              <p>jungah</p>
                            </li>
                            <li>
                              <span>열람일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>완료일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>처리자</span>
                              <p>김이름</p>
                            </li>
                          </ul>
                        </div>
                        <div class="box reject" kind="signer" :class="selectActive2 === 'select3' ? 'active' : ''"><!-- 반려 -->
                          <button type="button" class="name" @click="clickSelect1('select3')"><b>장이름</b> 팀장</button>
                          <span>기안자</span>
                          <strong>반려</strong>
                          <ul>
                            <li>
                              <span>부서</span>
                              <p>Hanwha Q CELLS Malaysia Cell Divison</p>
                            </li>
                            <li>
                              <span>시작일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>아이디</span>
                              <p>alsdud970101</p>
                            </li>
                            <li>
                              <span>열람일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>완료일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>처리자</span>
                              <p>장이름</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="group grp-off" kind="flow">
                      <div class="col" kind="flow">
                        <div class="grp-on" kind="flow">
                          <div class="row" kind="flow">
                            <div class="box finish" kind="signer" :class="selectActive2 === 'select4' ? 'active' : ''">
                              <button type="button" class="name" @click="clickSelect1('select4')"><b>장이름</b> 팀장</button>
                              <span>기안자</span>
                              <strong>완료</strong>
                              <ul>
                                <li>
                                  <span>부서</span>
                                  <p>PL팀</p>
                                </li>
                                <li>
                                  <span>시작일</span>
                                  <p>2022.07.04 17:29</p>
                                </li>
                                <li>
                                  <span>아이디</span>
                                  <p>alsdud970101</p>
                                </li>
                                <li>
                                  <span>열람일</span>
                                  <p>2022.07.04 17:29</p>
                                </li>
                                <li>
                                  <span>완료일</span>
                                  <p>2022.07.04 17:29</p>
                                </li>
                                <li>
                                  <span>처리자</span>
                                  <p>장이름</p>
                                </li>
                              </ul>
                            </div>
                            <div class="box finish" kind="signer" :class="selectActive2 === 'select5' ? 'active' : ''">
                              <button type="button" class="name" @click="clickSelect1('select5')"><b>성이름</b> 대리</button>
                              <span>기안자</span>
                              <strong>완료</strong>
                              <ul>
                                <li>
                                  <span>부서</span>
                                  <p>SharedService1팀(EP)</p>
                                </li>
                                <li>
                                  <span>시작일</span>
                                  <p>2022.07.04 17:29</p>
                                </li>
                                <li>
                                  <span>아이디</span>
                                  <p>hj.sung</p>
                                </li>
                                <!--v-if-->
                                <!--v-if-->
                                <li>
                                  <span>처리자</span>
                                  <p>성이름</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="box" kind="signer" :class="selectActive2 === 'select6' ? 'active' : ''">
                          <button type="button" class="name" @click="clickSelect1('select6')"><b>김이름</b> 대리</button>
                          <span>기안자</span>
                          <strong>대기</strong>
                          <ul>
                            <li>
                              <span>부서</span>
                              <p>PL팀</p>
                            </li>
                            <li>
                              <span>시작일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>아이디</span>
                              <p>youngyu</p>
                            </li>
                            <li>
                              <span>열람일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>완료일</span>
                              <p>2022.07.04 17:29</p>
                            </li>
                            <li>
                              <span>처리자</span>
                              <p>김이름</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box" kind="signer" :class="selectActive2 === 'select7' ? 'active' : ''">
                  <button type="button" class="name" @click="clickSelect1('select7')"><b>최이름</b> 매니저</button>
                  <span>기안자</span>
                  <strong>대기</strong>
                  <ul>
                    <li>
                      <span>부서</span>
                      <p>PL팀</p>
                    </li>
                    <li>
                      <span>시작일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>아이디</span>
                      <p>rairao</p>
                    </li>
                    <li>
                      <span>열람일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>완료일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>처리자</span>
                      <p>최이름</p>
                    </li>
                  </ul>
                </div>
                <div class="box" kind="signer" :class="selectActive2 === 'select8' ? 'active' : ''">
                  <button type="button" class="name" @click="clickSelect1('select8')"><b>박이름</b> 매니저</button>
                  <span>기안자</span>
                  <strong>대기</strong>
                  <ul>
                    <li>
                      <span>부서</span>
                      <p>SharedService1팀(EP)</p>
                    </li>
                    <li>
                      <span>시작일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>아이디</span>
                      <p>okrm05</p>
                    </li>
                    <li>
                      <span>열람일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>완료일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>처리자</span>
                      <p>박이름</p>
                    </li>
                  </ul>
                </div>
                <div class="box" kind="signer" :class="selectActive2 === 'select9' ? 'active' : ''">
                  <button type="button" class="name" @click="clickSelect1('select9')"><b>권이름</b> 대리</button>
                  <span>기안자</span>
                  <strong>대기</strong>
                  <ul>
                    <li>
                      <span>부서</span>
                      <p>SharedService1팀(EP)</p>
                    </li>
                    <li>
                      <span>시작일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>아이디</span>
                      <p>kitae0921</p>
                    </li>
                    <!--v-if-->
                    <!--v-if-->
                    <li>
                      <span>처리자</span>
                      <p>권이름</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div><!-- 병렬 component   -->
            <!--v-if-->
            <!-- 직렬 component   -->
          </div>
          <div>
            <div class="box finish" :class="selectActive2 === 'select10' ? 'active' : ''"><!-- 완료 -->
              <button type="button" class="name" @click="clickSelect1('select10')"><b>이이름</b> 대리</button>
              <span>기안자</span>
              <strong>완료</strong>
              <ul>
                <li>
                  <span>부서</span>
                  <p>SharedService1팀(EP)</p>
                </li>
                <li>
                  <span>시작일</span>
                  <p>2022.07.04 17:29</p>
                </li>
                <li>
                  <span>아이디</span>
                  <p>millenniumgame</p>
                </li>
                <!--v-if-->
                <!--v-if-->
                <li>
                  <span>처리자</span>
                  <p>이이름</p>
                </li>
              </ul>
            </div><!-- 결재자 component -->
            <!--v-if-->
            <!-- 병렬 component   -->
            <!--v-if-->
            <!-- 직렬 component   -->
          </div>
          <div>
            <!--v-if-->
            <!-- 결재자 component -->
            <div class="group grp-off">
              <div class="col" kind="flow">
                <div class="box finish" kind="signer" :class="selectActive2 === 'select11' ? 'active' : ''">
                  <button type="button" class="name" @click="clickSelect1('select11')"><b>박이름</b> 대리</button>
                  <span>기안자</span>
                  <strong>완료</strong>
                  <ul>
                    <li>
                      <span>부서</span>
                      <p>PL팀</p>
                    </li>
                    <li>
                      <span>시작일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>아이디</span>
                      <p>thisismyrace</p>
                    </li>
                    <!--v-if-->
                    <!--v-if-->
                    <li>
                      <span>처리자</span>
                      <p>박이름</p>
                    </li>
                  </ul>
                </div>
                <div class="box finish" kind="signer" :class="selectActive2 === 'select12' ? 'active' : ''">
                  <button type="button" class="name" @click="clickSelect1('select12')"><b>이이름</b> 대리</button>
                  <span>기안자</span>
                  <strong>완료</strong>
                  <ul>
                    <li>
                      <span>부서</span>
                      <p>SharedService1팀(EP)</p>
                    </li>
                    <li>
                      <span>시작일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>아이디</span>
                      <p>leejoon</p>
                    </li>
                    <!--v-if-->
                    <!--v-if-->
                    <li>
                      <span>처리자</span>
                      <p>이이름</p>
                    </li>
                  </ul>
                </div>
                <div class="box finish" kind="signer" :class="selectActive2 === 'select13' ? 'active' : ''">
                  <button type="button" class="name" @click="clickSelect1('select13')"><b>양이름</b> 대리</button>
                  <span>기안자</span>
                  <strong>완료</strong>
                  <ul>
                    <li>
                      <span>부서</span>
                      <p>SharedService1팀(EP)</p>
                    </li>
                    <li>
                      <span>시작일</span>
                      <p>2022.07.04 17:29</p>
                    </li>
                    <li>
                      <span>아이디</span>
                      <p>yangkyu</p>
                    </li>
                    <!--v-if-->
                    <!--v-if-->
                    <li>
                      <span>처리자</span>
                      <p>양이름</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div><!-- 병렬 component   -->
            <!--v-if-->
            <!-- 직렬 component   -->
          </div>
          <div>
            <div class="box finish" :class="selectActive2 === 'select14' ? 'active' : ''">
              <button type="button" class="name" @click="clickSelect1('select14')"><b>황이름</b> 과장</button>
              <span>기안자</span>
              <strong>완료</strong>
              <ul>
                <li>
                  <span>부서</span>
                  <p>PL팀</p>
                </li>
                <li>
                  <span>시작일</span>
                  <p>2022.07.04 17:29</p>
                </li>
                <li>
                  <span>아이디</span>
                  <p>sangsik.hwang</p>
                </li>
                <!--v-if-->
                <!--v-if-->
                <li>
                  <span>처리자</span>
                  <p>황이름</p>
                </li>
              </ul>
            </div><!-- 결재자 component -->
            <!--v-if-->
            <!-- 병렬 component   -->
            <!--v-if-->
            <!-- 직렬 component   -->
          </div>
          <div class="box end">완료</div><!-- ToDo. 병렬/직렬/결재자 flow component 구성 end -->
        </div>
      </div>

      <div class="title sub">업무수행 히스토리</div>
      <div class="tbl list-type3 grid">
        <table>
          <colgroup>
            <col style="width:15%;">
            <col >
          </colgroup>
          <thead>
            <tr>
              <th scope="col">담당자</th>
              <th scope="col">09</th>
              <th scope="col">10</th>
              <th scope="col">11</th>
              <th scope="col">12</th>
              <th scope="col">13</th>
              <th scope="col">14</th>
              <th scope="col">15</th>
              <th scope="col">16</th>
              <th scope="col">17</th>
              <th scope="col">18</th>
              <th scope="col">19</th>
              <th scope="col">20</th>
              <th scope="col">21</th>
              <th scope="col">22</th>
              <th scope="col">23</th>
              <th scope="col">24</th>
              <th scope="col">25</th>
              <th scope="col">26</th>
              <th scope="col">27</th>
              <th scope="col">28</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>김한화(기안자)</td>
              <td class="full"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>김한화(결재)</td>
              <td class="full"></td>
              <td class="full"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>김한화(협조결재)</td>
              <td class="full"></td>
              <td class="full"></td>
              <td class="full"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="title sub">참조</div>
      <div class="tbl list-type3 no-paging">
        <table-lite
          :columns="columns"
          :rows="rows"
          :total="100"
          :messages="messages"/>
      </div>
      <div class="title sub">수신</div>
      <div class="tbl list-type3 no-paging mg-b30">
        <table-lite
          :columns="columns"
          :rows="rows"
          :total="100"
          :messages="messages"/>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    basePopup,
    TableLite
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
      selectActive: false,
      isToggle: false,
      columns: [
        {
          label: "수신처",
          field: "part",
          width: "",
          columnClasses: ['subject'],
        },
        {
          label: "열람자",
          field: "name",
          width: "10%",
        },
        {
          label: "참조상태",
          field: "state",
          width: "10%",
        },
        {
          label: "참조일",
          field: "date",
          width: "15%",
        },
        {
          label: "알림여부",
          field: "show",
          width: "10%",
        },
        {
          label: "열람시간",
          field: "time",
          width: "15%",
        },
      ],
      rows: [
        {
          part: "이선희(디지털워크그룹)",
          name: "최소영",
          state: "참조",
          date: "2022.02.24 13:00",
          show: "열람",
          time: "2022.02.24 13:00",
        },
        {
          part: "이선희(디지털워크그룹)",
          name: "최소영",
          state: "참조",
          date: "2022.02.24 13:00",
          show: "열람",
          time: "2022.02.24 13:00",
        },
      ],
      columns2: [
        {
          label: "버전",
          field: "ver",
          width: "12%",
        },
        {
          label: "작성일",
          field: "date",
          width: "24%",
          columnClasses: ['fc gray'],
        },
        {
          label: "작성자",
          field: "name",
          width: "",
          columnClasses: ['tl'],
          headerClasses: ['tl'],
        },
        {
          label: "결재선",
          field: "search",
          width: "24%",
        },
      ],
      rows2: [
        {
          ver: "1",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "2",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "3",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "4",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "5",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "6",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "7",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "8",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "9",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
        {
          ver: "10",
          date: "2022.07.07 18:45:02",
          name: "김한화",
        },
      ],
      selectActive2: 'select1'
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
    clickSelect(){
			this.selectActive = !this.selectActive
		},
    clickSelect1(selectItem:string){
			this.selectActive2 = selectItem
		},
  }
})
</script>