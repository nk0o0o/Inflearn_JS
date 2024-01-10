<template>
  <base-popup
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="게시판 설정"
    class="ly-pop-type1"
  >
    <template v-slot:body>
      <div class="tab-type3 board-setting pop-tab" id="tabs-type">
        <ul class="tab-menu">
          <li :class="{'active':currentTab===index}" v-for="(tab, index) in tabsType" :key="index">
            <button type="button" @click="currentTab = index">{{tab}}</button>
          </li>
        </ul>
        <div class="tab-content">
          <div v-show="currentTab == 0">
            <div class="board-setting_basic">
              <table class="tbl-write type1">
                <colgroup>
                  <col style="width:26%;">
                  <col style="width:auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">게시판 ID</th>
                    <td>12345678</td>
                  </tr>
                  <tr>
                    <th scope="row">제목(Korean)</th>
                    <td>
                      <form action="">
                        <div class="input-box type3 full">
                          <input type="text" required placeholder="입력하세요." value="입력하세요.">
                          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                          <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">제목(English)</th>
                    <td>
                      <form action="">
                        <div class="input-box type3 full">
                          <input type="text" required placeholder="입력하세요." value="">
                          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                          <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">첫화면 설정</th>
                    <td>
                      <div class="input-radio h16">
                        <input type="radio" name="radio2" id="radio2-1"><label for="radio2-1">활성</label>
                      </div>
                      <div class="input-radio h16">
                        <input type="radio" name="radio2" id="radio2-2"><label for="radio2-2">비활성</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">링크 여부</th>
                    <td>
                      <div class="link">
                        <div class="input-chk square">
                          <input type="checkbox" name="chk5" id="chk5">
                          <label for="chk5">링크</label>
                        </div>
                        <span class="txt-or">※ 체크된 경우 아래 URL페이지와 링크됩니다.</span>
                      </div>
                      <form action="">
                        <div class="input-box type3 full">
                          <input type="text" required placeholder="입력하세요." value="">
                          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                          <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-show="currentTab == 1">
            <div class="board-setting_add">
              <table class="tbl-write type1">
                <colgroup>
                  <col style="width:130px;">
                  <col style="width:auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">속성</th>
                    <td>
                      <div class="property">
                        <div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk1" checked>
                            <label for="chk1">기간 지정</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk2">
                            <label for="chk2">누구나 수정가능</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk3" checked>
                            <label for="chk3">답변 (Reply)기능</label>
                          </div>
                          <div class="inline">
                            <div class="input-radio h16">
                              <input type="radio" name="radio4" id="radio4-1" checked>
                              <label for="radio4-1">메신저 알림</label>
                            </div>
                            <div class="input-radio h16">
                              <input type="radio" name="radio4" id="radio4-2">
                              <label for="radio4-2">메일 알림</label>
                            </div>
                          </div>
                          <div class="etc">
                            <div class="input-chk square inline">
                              <input type="checkbox" name="chk" id="chk5" checked>
                              <label for="chk5">첨부파일</label>
                            </div>
                            <form action="">
                              <div class="input-box type3">
                                <input type="text" required placeholder="0" value="">
                              </div>
                            </form>
                            MByte(최대 50MB)
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk6">
                            <label for="chk6">즐겨찾기 사용</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk7">
                            <label for="chk7">HTML제목허용</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk8">
                            <label for="chk8">게시글 열람권한 설정</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk9">
                            <label for="chk9">회사공지 사용</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk10">
                            <label for="chk10">인쇄금지</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk11">
                            <label for="chk11">작성자 비공개</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk12">
                            <label for="chk12">컨텐츠 이동 제한</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk13">
                            <label for="chk13">임직원서비스 공지사항 등록 허용</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk14">
                            <label for="chk14">컨텐츠 비공개</label>
                          </div>
                        </div>
                        <div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk15">
                            <label for="chk15">수정금지</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk16">
                            <label for="chk16">긴급표시 사용</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk17" checked>
                            <label for="chk17">글 등록시 알림</label>
                          </div>
                          <div class="inline dep">
                            <div class="input-chk square">
                              <input type="checkbox" name="chk" id="chk18" checked>
                              <label for="chk18">관리자알림</label>
                            </div>
                            <div class="input-chk square">
                              <input type="checkbox" name="chk" id="chk19">
                              <label for="chk19">게시글별</label>
                            </div>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk20">
                            <label for="chk20">익명 설정</label>
                          </div>
                          <div class="inline dep">
                            <div class="input-chk square">
                              <input type="checkbox" name="chk" id="chk21" checked>
                              <label for="chk21">비밀번호제외</label>
                            </div>
                            <div class="input-chk square">
                              <input type="checkbox" name="chk" id="chk22">
                              <label for="chk22">중복닉네임금지</label>
                            </div>
                            <div class="input-chk square mgl0">
                              <input type="checkbox" name="chk" id="chk23">
                              <label for="chk23">작성자게시글수정가능</label>
                            </div>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk24">
                            <label for="chk24">추천하기</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk25">
                            <label for="chk25">공지글 등록 허용</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk26">
                            <label for="chk26">답변시 SNS알림</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk27">
                            <label for="chk27">링크 URL 설정</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk28">
                            <label for="chk28">임직원용 글 등록 허용</label>
                          </div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk29">
                            <label for="chk29">첨부파일 다운로드 금지</label>
                          </div>
                        </div>
                      </div>
                      <div class="classification">
                        <div>
                          <div class="input-chk square">
                            <input type="checkbox" name="chk" id="chk24" checked>
                            <label for="chk24">게시글분류</label>
                          </div>
                          <div class="dep">
                            <div class="input-chk square">
                              <input type="checkbox" name="chk" id="chk24-1">
                              <label for="chk24-1">다중분류</label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <ul class="classification_list">
                            <li>분류1</li>
                            <li>분류2</li>
                            <li>분류3</li>
                            <li>분류4</li>
                            <li>분류5</li>
                          </ul>
                          <div class="classification_foot">
                            <div>
                              <form action="">
                                <div class="input-box type3">
                                  <input type="text" required placeholder="" value="">
                                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                                  <div class="error" v-if="error">에러 내용입력</div>
                                </div>
                              </form>
                            </div>
                            <div>
                              <button type="button" class="btn md">추가</button>
                            </div>
                            <div>
                              <button type="button" class="btn md line-type1">수정</button>
                            </div>
                            <div>
                              <button type="button" class="btn md line-type1">삭제</button>
                            </div>
                            <button type="button" class="bn up"><i class="blind">위로</i></button>
                            <button type="button" class="bn down"><i class="blind">아래로</i></button>
                          </div>
                        </div>
                      </div>

                    </td>
                  </tr>
                  <tr>
                    <th scope="row">등록 승인여부</th>
                    <td>
                      <select-view
                        :propOptionList="optionLsit"
                        :propPlaceholder="'사용안함'"
                        :propClass="'type3'"
                      >
                      </select-view>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">등록 알림대상</th>
                    <td>
                      <ul class="classification_list">
                        <!-- <li>분류1</li> -->
                      </ul>
                      <div class="bn-list">
                        <button type="button" class="btn md">추가</button>
                        <button type="button" class="btn md line-type1">삭제</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">본문유형</th>
                    <td>
                      <select-view
                        :propOptionList="optionLsit"
                        :propPlaceholder="'기본(에디터사용)'"
                        :propClass="'type3'"
                      >
                      </select-view>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">목록설정</th>
                    <td>
                      <p class="list-setting-txt">※ 사용자 기본 레이아웃이 리스트인 경우만 변경내용이 적용됩니다.</p>
                      <div class="list-setting">
                        <div>
                          <ul>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk25-1">
                                <label for="chk25-1">종료일</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk25-2">
                                <label for="chk25-2">분류</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk25-3">
                                <label for="chk25-3">추천</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="bn">
                          <button type="button" class="btn sm f-13">칼럼추가</button>
                          <button type="button" class="btn sm line-type1 f-13">칼럼삭제</button>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk26-1">
                                <label for="chk26-1">즐겨찾기</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk26-2" disabled>
                                <label for="chk26-2">번호</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk26-3">
                                <label for="chk26-3">첨부</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk26-4" disabled>
                                <label for="chk26-4">제목</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk26-5" disabled>
                                <label for="chk26-5">작성자</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk26-6" disabled>
                                <label for="chk26-6">등록일</label>
                              </div>
                            </li>
                            <li>
                              <div class="input-chk square">
                                <input type="checkbox" name="chk" id="chk26-7" disabled>
                                <label for="chk26-7">조회</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- <div class="column-apply">
                        칼럼너비
                        <div class="input-box type3">
                          <input type="text" required placeholder="" value="">
                        </div>
                        %
                        <button type="button" class="btn sm">적용</button>
                      </div> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-show="currentTab == 2">
            <div class="board-setting_add">
              <table class="tbl-write type1">
                <colgroup>
                  <col style="width:130px;">
                  <col style="width:auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">관리자</th>
                    <td>
                      <ul class="classification_list">
                        <!-- <li>분류1</li> -->
                      </ul>
                      <div class="bn-list">
                        <button type="button" class="btn md">추가</button>
                        <button type="button" class="btn md line-type1">삭제</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">세부 권한</th>
                    <td>
                      <ul class="tbl-in-list">
                        <li>
                          <strong>관리 권한</strong>
                          <div>
                            <select-view
                              :propOptionList="optionLsit"
                              :propPlaceholder="'운영회장'"
                              :propClass="'type3'"
                            >
                            </select-view>
                            이상
                          </div>
                        </li>
                        <li>
                          <strong>쓰기 권한</strong>
                          <div>
                            <select-view
                              :propOptionList="optionLsit"
                              :propPlaceholder="'회원'"
                              :propClass="'type3'"
                            >
                            </select-view>
                            이상
                          </div>
                        </li>
                        <li>
                          <strong>읽기 권한</strong>
                          <div>
                            <select-view
                              :propOptionList="optionLsit"
                              :propPlaceholder="'회원'"
                              :propClass="'type3'"
                            >
                            </select-view>
                            이상
                          </div>
                        </li>
                        <li>
                          <strong>리스트 권한</strong>
                          <div>
                            <select-view
                              :propOptionList="optionLsit"
                              :propPlaceholder="'손님'"
                              :propClass="'type3'"
                            >
                            </select-view>
                            이상
                          </div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:btnWrap>
		<div class="btn-wrap right">
      <button type="button" class="btn lg line-type2">닫기</button>
			<button type="button" class="btn lg">저장</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    basePopup,
    selectView,
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
      currentTab: 0,
      showModal: this.propShowModal,
      tabsType: ['기본설정', '부가설정', '권한설정'],
      optionLsit: [
        { value: 'menu1', label: 'menu1menu1' },
        { value: 'hover', label: 'hover' },
        { value: 'Selected', label: 'Selected' },
        { value: 'menu4', label: 'menu4' },
        { value: 'menu5', label: 'menu5' },
        { value: 'hover1', label: 'hover1' },
        { value: 'Selected2', label: 'Selected2' },
        { value: 'menu41', label: 'menu41' },
        { value: 'menu51', label: 'menu51' },
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