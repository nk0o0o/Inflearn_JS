<template>
  <div class='layout-wrap'>
    <div class='layout-body'>
      <approvalLeft/>
      <div class='layout-contents'>
        <div class='board-common_wrap'>
          <!-- 결재할문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>결재할문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
                <div>
                  <button type='button' class='btn line-type1 md'>상세검색</button>
                </div>
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
              </div>
              <div class='row jc-sb'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk1-1'><label for='chk1-1'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk1-2'><label for='chk1-2'>받은시간</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk1-3'><label for='chk1-3'>진행상태</label></div>
                </div>
              </div>
              <div class="row jc-e">
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box1">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box1'"
                      :propLocation="'bottom end'"
                    />

                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode='true'
                  :rowClasses="rowClasses"
                  :columns='columns'
                  :rows='rows'
                  :total='100'
                  :messages='messages'>
                  <template v-slot:msg="data">
                    {{data.value.msg}}
                    <button type="button" class="ico-comment mg-t3" v-if="data.value.comment">첨언</button>
                  </template>
                  <template v-slot:state>
                    <span class="ico history">상태</span>
                  </template>
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //결재할문서 -->

          <!-- 일괄결재함 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>일괄결재함</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
              </div>
              <div class='row jc-sb'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk2-1'><label for='chk2-1'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk2-2'><label for='chk2-2'>받은시간</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk2-3'><label for='chk2-3'>진행상태</label></div>
                </div>
              </div>
              <div class='row'>
                <span class='data-tit'>선택결재</span>
                <div class='input-box type3 w180'>
                    <input type='password' required placeholder='비밀번호를 입력하세요.' disabled>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm line-type2' disabled>반려</button>
                <button type='button' class='btn sm line-type2' disabled>승인</button>
              </div>
              <div class="row jc-e">
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box2">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box2'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :columns='columns2'
                  :rows='rows2'
                  :has-checkbox="true"
                  :total='100'
                  :messages='messages'
                  >
                    <template v-slot:subject="data">
                      <em class="label-tag org" v-if="data.value.type1">보류</em>
                      <a class="txt" v-if="data.value.subject" href="javascript:void(0)" :data-id="data.value.id">{{data.value.subject}}</a>
                    </template>
                    <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //일괄결재함 -->

          <!-- 결재예정문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>결재예정문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
                <select-view
                  :propOptionList='optionLsit3'
                  :propPlaceholder='`2018-현재`'
                  :propClass='`type3`'
                  >
                </select-view>
              </div>
              <div class='row jc-sb'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk3-1'><label for='chk3-1'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk3-2'><label for='chk3-2'>현결재자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk3-3'><label for='chk3-3'>진행상태</label></div>
                </div>
              </div>
              <div class="row jc-e">
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box3">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box3'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :columns='columns3'
                  :rows='rows3'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //결재예정문서 -->

          <!-- 참조문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>참조문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
                <select-view
                  :propOptionList='optionLsit3'
                  :propPlaceholder='`2018-현재`'
                  :propClass='`type3`'
                  >
                </select-view>
              </div>
              <div class='row jc-sb'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk4-1'><label for='chk4-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk4-2'><label for='chk4-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk4-3'><label for='chk4-3'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk4-4'><label for='chk4-4'>수신일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk4-5'><label for='chk4-5'>형태</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk4-6'><label for='chk4-6'>진행상태</label></div>
                </div>
              </div>
              <div class="row jc-e">
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box4">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box4'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode='true'
                  :columns='columns4'
                  :rows='rows4'
                  :total='100'
                  :messages='messages'>
                    <template v-slot:favor="data">
                      <span :class="data.value.favorIcon?'ico-favor':'ico-favor-default'"><em class="blind">Good</em></span>
                    </template>
                    <template v-slot:writer="data">
                      <div class="dropdown-type2 tooltip text">
                        <dropdown-menu2
                          :propName="data.value.writer"
                          :propItem="dropItem2"
                          :propClass="'dropdown-type2-list type3'"
                          propLocation="bottom start"
                        >
                        </dropdown-menu2>
                      </div>
                    </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //참조문서 -->

          <!-- 승인문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>승인문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <div>
                  <button type='button' class='btn line-type1 md'>상세검색</button>
                </div>
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row jc-sb'>
                <div class='flex'>
                  <span class='data-tit'>문서종류</span>
                  <select-view
                    :propOptionList='optionLsit2'
                    :propPlaceholder='`전체`'
                    :propClass='`type3`'>
                  </select-view>
                  <span class='data-tit'>양식</span>
                  <div class='input-box type3 w180'>
                      <input type='text' required placeholder='선택하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <div class='error' v-if='error'>에러 내용입력</div>
                  </div>
                  <button type='button' class='btn sm'>선택</button>
                  <select-view
                    :propOptionList='optionLsit3'
                    :propPlaceholder='`2018-현재`'
                    :propClass='`type3`'
                    >
                  </select-view>
                </div>
                <button type='button' class='btn sm line-type2'>숨김양식 보이기</button>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk5-1'><label for='chk5-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk5-2'><label for='chk5-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk5-3'><label for='chk5-3'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk5-4'><label for='chk5-4'>완료일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk5-5'><label for='chk5-5'>이력</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='btn sm line-type2'>삭제</button>
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box5">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box5'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns5'
                  :rows='rows5'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //승인문서 -->

          <!-- 반송문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>반송문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
                <div>
                  <button type='button' class='btn line-type1 md'>상세검색</button>
                </div>
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row jc-sb'>
                <div class='flex'>
                  <span class='data-tit'>문서종류</span>
                  <select-view
                    :propOptionList='optionLsit2'
                    :propPlaceholder='`전체`'
                    :propClass='`type3`'>
                  </select-view>
                  <span class='data-tit'>양식</span>
                  <div class='input-box type3 w180'>
                      <input type='text' required placeholder='선택하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <div class='error' v-if='error'>에러 내용입력</div>
                  </div>
                  <button type='button' class='btn sm'>선택</button>
                  <select-view
                    :propOptionList='optionLsit3'
                    :propPlaceholder='`2018-현재`'
                    :propClass='`type3`'
                    >
                  </select-view>
                </div>
                <button type='button' class='btn sm line-type2'>숨김양식 숨기기</button>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk6-1'><label for='chk6-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk6-2'><label for='chk6-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk6-3'><label for='chk6-3'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk6-4'><label for='chk6-4'>반송일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk6-5'><label for='chk6-5'>반송자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk6-6'><label for='chk6-6'>이력</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='btn sm line-type2'>삭제</button>
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box6">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box6'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns6'
                  :rows='rows6'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //반송문서 -->

          <!-- 수신문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>수신문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
                <div>
                  <button type='button' class='btn line-type1 md'>상세검색</button>
                </div>
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row jc-sb'>
                <div class='flex'>
                  <span class='data-tit'>문서종류</span>
                  <select-view
                    :propOptionList='optionLsit2'
                    :propPlaceholder='`전체`'
                    :propClass='`type3`'>
                  </select-view>
                  <span class='data-tit'>양식</span>
                  <div class='input-box type3 w180'>
                      <input type='text' required placeholder='선택하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <div class='error' v-if='error'>에러 내용입력</div>
                  </div>
                  <button type='button' class='btn sm'>선택</button>
                  <select-view
                    :propOptionList='optionLsit3'
                    :propPlaceholder='`2018-현재`'
                    :propClass='`type3`'
                    >
                  </select-view>
                </div>
                <button type='button' class='btn sm line-type2'>숨김양식 숨기기</button>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>수신방식</span>
                  <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">전체</label></div>
                  <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">참조</label></div>
                  <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-3"><label for="radio1-3">수신</label></div>
                  <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-4"><label for="radio1-4">전달</label></div>
                  <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-5"><label for="radio1-5">미확인</label></div>
                </div>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk7-1'><label for='chk7-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk7-2'><label for='chk7-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk7-3'><label for='chk7-3'>수신일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk7-4'><label for='chk7-4'>형태</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk7-5'><label for='chk7-5'>이력</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='btn sm line-type2'>삭제</button>
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box7">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box7'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns7'
                  :rows='rows7'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //수신문서 -->

          <!-- 기안문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>기안문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
                <div>
                  <button type='button' class='btn line-type1 md'>상세검색</button>
                </div>
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
                <select-view
                  :propOptionList='optionLsit3'
                  :propPlaceholder='`2018-현재`'
                  :propClass='`type3`'
                  >
                </select-view>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk8-1'><label for='chk8-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk8-2'><label for='chk8-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk8-3'><label for='chk8-3'>완료일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk8-4'><label for='chk8-4'>현결재자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk8-5'><label for='chk8-5'>상태</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='btn sm line-type2'>삭제</button>

                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box8">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box8'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode='true'
                  :has-checkbox="true"
                  :columns='columns8'
                  :rows='rows8'
                  :total='100'
                  :messages='messages'>
                  <template v-slot:msg="data">
                    {{data.value.msg}}
                    <button type="button" class="ico-comment mg-t3" v-if="data.value.comment">첨언</button>
                  </template>
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //기안문서 -->

          <!-- 전달한문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>전달한문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
                <select-view
                  :propOptionList='optionLsit3'
                  :propPlaceholder='`2018-현재`'
                  :propClass='`type3`'
                  >
                </select-view>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk9-1'><label for='chk9-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk9-2'><label for='chk9-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk9-3'><label for='chk9-3'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk9-4'><label for='chk9-4'>전달일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk9-5'><label for='chk9-5'>상태</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk9-6'><label for='chk9-6'>수신처</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='btn sm line-type2'>삭제</button>
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box9">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box9'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns9'
                  :rows='rows9'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //전달한문서 -->

          <!-- 협조문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>협조문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`등록일`'
                    :propValue="`등록일`"
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div class="date line-type">
                  <Datepicker
                    v-model="rangeDate"
                    range
                    :format="rangeFormat"
                    :enableTimePicker="false"
                    locale="ko"
                    autoApply
                    weekStart="0"
                    placeholder="시작일 선택 &nbsp;- &nbsp; 종료일 선택"
                    />
                    <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                </div>

                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row jc-sb'>
                <div class='flex'>
                  <span class='data-tit'>문서종류</span>
                  <select-view
                    :propOptionList='optionLsit2'
                    :propPlaceholder='`전체`'
                    :propClass='`type3`'>
                  </select-view>
                  <span class='data-tit'>양식</span>
                  <div class='input-box type3 w180'>
                      <input type='text' required placeholder='선택하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <div class='error' v-if='error'>에러 내용입력</div>
                  </div>
                  <button type='button' class='btn sm'>선택</button>
                  <select-view
                    :propOptionList='optionLsit3'
                    :propPlaceholder='`2018-현재`'
                    :propClass='`type3`'
                    >
                  </select-view>
                </div>
                <button type='button' class='btn sm line-type2'>숨김양식 보이기</button>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk10-1'><label for='chk10-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk10-2'><label for='chk10-2'>기안자/기안부서</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk10-3'><label for='chk10-3'>등록일</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='icon-btn download'>다운로드</button>

                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box10">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box10'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns10'
                  :rows='rows10'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //협조문서 -->

          <!-- 최상위 문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>최상위 문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
              </div>
              <div class="row jc-e">
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box11">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box11'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns11'
                  :rows='rows11'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //최상위 문서 -->

          <!-- 임시보관문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>임시보관문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
                <div>
                  <button type='button' class='btn line-type1 md'>상세검색</button>
                </div>
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk11-1'><label for='chk11-1'>작성일</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='btn sm line-type2'>삭제</button>
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box12">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box12'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :has-checkbox='true'
                  :columns='columns12'
                  :rows='rows12'
                  :total='100'
                  :messages='messages' />
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //임시보관문서 -->

          <!-- 즐겨찾기 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>즐겨찾기</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
                <div>
                  <button type='button' class='btn line-type1 md'>상세검색</button>
                </div>
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
              </div>
              <div class='row'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk12-1'><label for='chk12-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk12-2'><label for='chk12-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk12-3'><label for='chk12-3'>기안일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk12-4'><label for='chk12-4'>완료일</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk12-5'><label for='chk12-5'>이력</label></div>
                </div>
              </div>
              <div class='row jc-sb'>
                <button type='button' class='btn sm line-type2'>즐겨찾기 해제</button>
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box13">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box13'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns13'
                  :rows='rows13'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //즐겨찾기 -->

          <!-- 공시문서 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>공시문서</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row jc-sb'>
                <div class='flex'>
                  <span class='data-tit'>문서종류</span>
                  <select-view
                    :propOptionList='optionLsit2'
                    :propPlaceholder='`전체`'
                    :propClass='`type3`'>
                  </select-view>
                  <span class='data-tit'>양식</span>
                  <div class='input-box type3 w180'>
                      <input type='text' required placeholder='선택하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <div class='error' v-if='error'>에러 내용입력</div>
                  </div>
                  <button type='button' class='btn sm'>선택</button>
                  <select-view
                    :propOptionList='optionLsit3'
                    :propPlaceholder='`2018-현재`'
                    :propClass='`type3`'
                    >
                  </select-view>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata'>
                <table-lite
                  :is-slot-mode="true"
                  :columns='columns14'
                  :rows='rows14'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //공시문서 -->

          <!-- nodata 예시 -->
          <!-- header -->
          <div class='board-common_header'>
            <h2>_nodata</h2>
          </div>
          <div class='board-common_header_foot'>
            <!-- search -->
            <div class='board-header_search'>
              <div class='board-common_search'>
                <div>
                  <select-view
                    :propOptionList='optionLsit'
                    :propPlaceholder='`문서제목`'
                    :propClass='`type1`'
                    >
                  </select-view>
                </div>
                <div>
                  <form action=''>
                    <div class='input-box search-type4'>
                      <input type='text' required placeholder='검색어를 입력하세요.'>
                      <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                      <button type='button' class='btn-ico-single search-type1'><span class='blind'>상세검색</span></button>
                      <div class='list'>
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
                <!-- <div class="drop">
                  <div class="dropdown-type1">
                    <dropdown-menu
                      :propItem="dropItem"
                    ></dropdown-menu>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- //search -->
            <!-- form -->
            <div class='board-header_data'>
              <div class='row'>
                <span class='data-tit'>문서종류</span>
                <select-view
                  :propOptionList='optionLsit2'
                  :propPlaceholder='`전체`'
                  :propClass='`type3`'>
                </select-view>
                <span class='data-tit'>양식</span>
                <div class='input-box type3 w180'>
                    <input type='text' required placeholder='선택하세요.'>
                    <button type='reset' class='input-txt-del'><span class='blind'>입력 삭제</span></button>
                    <div class='error' v-if='error'>에러 내용입력</div>
                </div>
                <button type='button' class='btn sm'>선택</button>
                <select-view
                  :propOptionList='optionLsit3'
                  :propPlaceholder='`2018-현재`'
                  :propClass='`type3`'
                  >
                </select-view>
              </div>
              <div class='row jc-sb'>
                <div>
                  <span class='data-tit'>칼럼숨김</span>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk13-1'><label for='chk13-1'>문서번호</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk13-2'><label for='chk13-2'>기안자</label></div>
                  <div class='input-chk square'><input type='checkbox' name='chk' id='chk13-3'><label for='chk13-3'>기안일</label></div>
                </div>
              </div>
              <div class="row jc-e">
                <div class="drop">
                  <div class="dropdown-type1 sort" id="select-box14">
                    <dropdown-menu3
                      :propisSlotMode="false"
                      :propItem="dropItem"
                      propClass="sort"
                      :propSelectText="selectText"
                      :propDropSelectItem="dropSelectItem.itemId"
                      @selected="selectValue"
                      :propId="'select-box14'"
                      :propLocation="'bottom end'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //form -->
          </div>
          <!-- //header -->
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2' v-if='!nodata2'>
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox='true'
                  :columns='columns13'
                  :rows='rows13'
                  :total='100'
                  :messages='messages'
                >
                  <template v-slot:writer="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.writer"
                        :propItem="dropItem2"
                        :propClass="'dropdown-type2-list type3'"
                        propLocation="bottom start"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata2'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
          <!-- //nodata 예시 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import approvalLeft from "./approvalLeft.vue"
import selectView from "@/components/selectView.vue"
import TableLite from "vue3-table-lite/ts";
// import dropdownMenu from "@/components/dropdownMenu.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue"
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
  components: {
    approvalLeft,
    selectView,
    TableLite,
    // dropdownMenu,
    dropdownMenu2,
    dropdownMenu3,
    Datepicker,
  },
  data() {
    return {
      rangeDate: [new Date(),new Date()],
      nodata: false,
      nodata2: true,
      optionLsit: [
        { value: '문서제목', label: '문서제목' },
        { value: '등록일', label: '등록일' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit2: [
        { value: '전체', label: '전체' },
        { value: '옵션명 옵션명', label: '옵션명 옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      optionLsit3: [
        { value: '2018-현재', label: '2018-현재' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      rowClasses: (row:any) => {
        if (row.trClass == true) {
          return ["read-n"];
        } else {
          return ["read-y"];
        }
      },
      columns: [
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '10%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '15%',
        },
        {
          label: '받은시간',
          field: 'date2',
          width: '15%',
        },
        {
          label: '',
          field: 'msg',
          width: '4%',
          columnClasses: ['tc'],
        },
        {
          label: '진행상태',
          field: 'state',
          width: '10%',
          columnClasses: ['tc'],
          // display: function (row:any) {
          //   return (
          //     '<button type="button" class="btn-state wait">' +
          //     '결재대기' +
          //     '</button>'
          //   );
          // },
          // display: function (row:any): any {
          //   return (
          //     `<span class="ico history">상태</span>`
          //   );
          // },
        },
      ],
      rows: [
        {
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화 mysqL',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          comment: true,
          trClass: true,
        },
        {
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          comment: true,
          trClass: false,
        },
      ],
      columns2: [
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
        },
        {
          label: '기안자',
          field: 'writer',
          width: '10%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '15%',
        },
        {
          label: '받은시간',
          field: 'date2',
          width: '15%',
        },
        {
          label: '진행상태',
          field: 'state',
          width: '10%',
          display: function (row:any): any {
            return (
              `<span class="ico history">상태</span>`
            );
          },
        },
      ],
      rows2: [
        {
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
        },
        {
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          type1: true,
        },
      ],
      columns3: [
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '10%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '15%',
        },
        {
          label: '현결재자',
          field: 'writer2',
          width: '10%',
        },
        {
          label: '진행상태',
          field: 'state',
          width: '10%',
          display: function (row:any): any {
            return (
              `<span class="ico history">상태</span>`
            );
          },
        },
      ],
      rows3: [
        {
          id: 0,
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          writer2: '김한화',
          state: '결재대기',
        },
        {
          id: 1,
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          writer2: '김한화',
          state: '결재대기',
        },
      ],
      columns4: [
        {
          label: '',
          field: 'favor',
          width: '6%',
          headerClasses: ['favor'],
          columnClasses: 'tc',
          // display: function (row2:any): any {
          //   const favorIcon = row2.favorIcon ? '<span class="ico-favor"><em class="blind">Good</em></span>': row2.favor
          //   return ( `${favorIcon}` );
          // },
        },
        {
          label: '문서번호',
          field: 'num',
          width: '16%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '8%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '14%',
        },
        {
          label: '수신일',
          field: 'date2',
          width: '14%',
        },
        {
          label: '형태',
          field: 'type',
          width: '7%',
          display: function (row2:any): any {
            let type = '';
            if(row2.typeA){
              type = `<span><em class="fc blue bold">수신</em></span>`
            }else if(row2.typeB){
              type = `<span><em class="fc yel bold">전달</em></span>`
            }else{
              type = `<span><em class="fc dark bold">참조</em></span>`
            }
            return (
              `
                ${type}
              `
            );
          },
        },
        {
          label: '진행상태',
          field: 'state',
          width: '8%',
          display: function (row:any): any {
            return (
              `<span class="ico history">상태</span>`
            );
          },
        },
      ],
      rows4: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          typeA: true,
          favorIcon: false,
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          typeB: true,
          favorIcon: true,
        },
        {
          id: 2,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          typeC: true,
          favorIcon: true,
        },
      ],
      columns5: [
        {
          label: '',
          field: 'favor',
          width: '4%',
          headerClasses: ['favor'],
          display: function (row2:any): any {
            const favorIcon = row2.favorIcon ? '<span class="ico-favor"><em class="blind">Good</em></span>': row2.favor
            return ( `${favorIcon}` );
          },
        },
        {
          label: '문서번호',
          field: 'num',
          width: '17%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '8%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '14%',
        },
        {
          label: '완료일',
          field: 'date2',
          width: '14%',
        },
        {
          label: '이력',
          field: 'history',
          width: '8%',
          display: function (row:any): any {
            return (
              `<span class="ico history">이력</span>`
            );
          },
        },
      ],
      rows5: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          favorIcon: true,
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          favorIcon: true,
        },
      ],
      columns6: [
        {
          label: '문서번호',
          field: 'num',
          width: '16%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '7%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '14%',
        },
        {
          label: '반송일',
          field: 'date2',
          width: '14%',
        },
        {
          label: '반송자',
          field: 'writer2',
          width: '7%',
        },
        {
          label: '이력',
          field: 'history',
          width: '7%',
          display: function (row:any): any {
            return (
              `<span class="ico history">이력</span>`
            );
          },
        },
      ],
      rows6: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          writer2: '김한화',
          history: '형태',
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          writer2: '김한화',
          history: '형태',
        },
      ],
      columns7: [
        {
          label: '문서번호',
          field: 'num',
          width: '17%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '8%',
          columnClasses: ['writer'],
        },
        {
          label: '수신일',
          field: 'date',
          width: '14%',
        },
        {
          label: '형태',
          field: 'type',
          width: '8%',
          display: function (row2:any): any {
            let type = '';
            if(row2.typeA){
              type = `<span><em class="fc blue bold">수신</em></span>`
            }else if(row2.typeB){
              type = `<span><em class="fc yel bold">전달</em></span>`
            }else{
              type = `<span><em class="fc dark bold">참조</em></span>`
            }
            return (
              `
                ${type}
              `
            );
          },
        },
        {
          label: '이력',
          field: 'history',
          width: '7%',
          display: function (row:any): any {
            return (
              `<span class="ico history">이력</span>`
            );
          },
        },
      ],
      rows7: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          history: '',
          typeA: true,
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          history: '',
          typeB: true,
        },
        {
          id: 2,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 무선통신비',
          writer: '김한화',
          date: '2022.02.22 13:00',
          history: '',
          typeC: true,
        },
      ],
      columns8: [
        {
          label: '문서번호',
          field: 'num',
          width: '16%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안일',
          field: 'date',
          width: '14%',
        },
        {
          label: '완료일',
          field: 'date2',
          width: '14%',
        },
        {
          label: '현결재자',
          field: 'writer',
          width: '10%',
          columnClasses: ['writer'],
          //columnClasses: ['writer'],
          // display: function (row2:any): any {
          //   const writer = row2.writer ? `${row2.writer}`: ``,
          //         commentIcon = row2.commentIcon ? `<button class="ico-comment">코멘트</button>`: ``
          //   return (
          //     `
          //       <span>
          //         ${writer}
          //         ${commentIcon}
          //       </span>
          //     `
          //   );
          // },
        },
        {
          label: '',
          field: 'msg',
          width: '4%',
          columnClasses: ['tc'],
        },
        {
          label: '상태',
          field: 'state',
          width: '8%',
          display: function (row2:any): any {
            let type = '';
            if(row2.typeA){
              type = `<span><em class="fc blue bold">진행중</em></span>`
            }else if(row2.typeB){
              type = `<span><em class="fc yel bold">반려</em></span>`
            }else{
              type = `<span><em class="fc dark bold">결재완료</em></span>`
            }
            return (
              `
                ${type}
              `
            );
          },
        },
      ],
      rows8: [
        {
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          writer: '김한화',
          comment: true,
          typeA: true,
        },
        {
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          writer: '김한화',
          comment: false,
          typeB: true,
        },
        {
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          writer: '김한화',
          comment: false,
          typeC: true,
        },
      ],
      columns9: [
        {
          label: '문서번호',
          field: 'num',
          width: '17%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '8%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '14%',
        },
        {
          label: '전달일',
          field: 'date2',
          width: '14%',
        },
        {
          label: '상태',
          field: 'state',
          width: '7%',
          display: function (row:any): any {
            return (
              `<span class="ico history">상태</span>`
            );
          },
        },
        {
          label: '수신처',
          field: 'receive',
          width: '7%',
          display: function (row:any) {
            return (
              '<button type="button" class="ico-receive"></button>'
            );
          },
        },
      ],
      rows9: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          receive: '',
          receiveIcon: true,
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '결재대기',
          receive: '',
          receiveIcon: true,
        },
      ],
      columns10: [
        {
          label: '문서번호',
          field: 'num',
          width: '18%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자/기안부서',
          field: 'writer',
          width: '24%',
          columnClasses: ['writer'],
        },
        {
          label: '등록일',
          field: 'date',
          width: '14%',
        },
      ],
      rows10: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화(디지털워크그룹)',
          date: '2022.02.22 13:00',
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화(디지털워크그룹)',
          date: '2022.02.22 13:00',
        },
      ],
      columns11: [
        {
          label: '문서번호',
          field: 'num',
          width: '18%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '14%',
          columnClasses: ['writer'],
        },
        {
          label: '등록일',
          field: 'date',
          width: '16%',
        },
      ],
      rows11: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
        },
      ],
      columns12: [
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '작성일',
          field: 'date',
          width: '20%',
        },
      ],
      rows12: [
        {
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          date: '2022.02.22 13:00',
        },
        {
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          date: '2022.02.22 13:00',
        },
      ],
      columns13: [
        {
          label: '문서번호',
          field: 'num',
          width: '17%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '10%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '14%',
        },
        {
          label: '완료일',
          field: 'date2',
          width: '14%',
        },
        {
          label: '이력',
          field: 'state',
          width: '7%',
          display: function (row:any): any {
            return (
              `<span class="ico history">상태</span>`
            );
          },
        },
      ],
      rows13: [
        {
          id: 0,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '',
        },
        {
          id: 1,
          num: 'PIERP-2022-16014',
          subject: '[PI ERP] [통신비] [디지털워크그룹] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          state: '',
        },
      ],
      columns14: [
        {
          label: '문서번호',
          field: 'num',
          width: '15%',
        },
        {
          label: '문서제목',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const subject = row2.subject ? `<span class='txt'>${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${subject}
                </div>
              `
            );
          },
        },
        {
          label: '기안자',
          field: 'writer',
          width: '12%',
          columnClasses: ['writer'],
        },
        {
          label: '기안일',
          field: 'date',
          width: '14%',
        },
        {
          label: '완료일',
          field: 'date2',
          width: '14%',
        },
        {
          label: '이력',
          field: 'history',
          width: '7%',
          display: function (row:any): any {
            return (
              `<span class="ico history">이력</span>`
            );
          },
        },
      ],
      rows14: [
        {
          num: '품의-2208-0062',
          subject: '[품의] [통신비] 전자결재 타이틀 영역 전자결재 타이틀 영역 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          history: '',
        },
        {
          num: '품의-2208-0062',
          subject: '[품의] [통신비] 전자결재 타이틀 영역',
          writer: '김한화',
          date: '2022.02.22 13:00',
          date2: '2022.02.22 13:00',
          history: '',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      selectText:"정렬방식",
      dropSelectItem:{
        itemId: 'selected1'
      },
      dropItem: [
        { title: '문서제목', isToggle: false, isActive: false, itemId: 'selected1' },
        { title: '기안자', isToggle: true, isActive: false, itemId: 'selected2' },
        { title: '기안일', isToggle: true, isActive: false, itemId: 'selected3' },
        { title: '현결재자', isToggle: true, isActive: false, itemId: 'selected4' },
      ],
      dropItem2: {
        title: `
          <div class="tooltip-member">
            <div>
              <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
              <p><b>김한화</b> <span class="pos">직위/직책</span></p>
            </div>
            <p class="cp">회사명 <span></span> 소속조직명</p>
            <p class="phone">010-1234-2336</p>
            <p class="email">mail@hanwha.com</p>
          </div>
        `,
      },
    };
  },
  methods: {
    rangeFormat(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();

      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();

      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
    selectValue(val:any){
      this.dropSelectItem.itemId = val.selected
      this.selectText = val.title
      this.dropItem[0].isToggle = !val.isToggle
      // console.log(val.isToggle)
      // this.dropItem[0].isToggle
    },
  },
  computed: {

  }
})
</script>