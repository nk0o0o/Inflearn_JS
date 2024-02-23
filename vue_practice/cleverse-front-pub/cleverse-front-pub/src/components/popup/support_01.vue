<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="국내출장"
    class="ly-pop-type1 xl share support pb0"
  >
    <template v-slot:body>
      <div class="share-info_cont_wrap">
        <div class="share-info_cont_info">
          <div class="cont">
            <div class="scroll">
              <div class="support-pop_cont">
                <div class="detail-cont-wrap">
                  <div class="content">
                    <!-- 상세내용영역 -->
                    <div class="process-set-cnt other">
                      <div class="step-wrap">
                        <div class="group">
                          <table class="single-type">
                            <tbody>
                              <tr>
                                <td class="process-title">
                                  <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc">
                                  <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="process-arrow">&nbsp;</div>
                        <div class="group">
                          <table class="single-type">
                            <tbody>
                              <tr>
                                <td class="process-title pick-color">
                                  <div contenteditable="true" class="stepRowEdit">Step 02 타이틀</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc">
                                  <div contenteditable="true" class="stepRowEdit">해외출장 품의 작성</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="process-arrow">&nbsp;</div>
                        <div class="group">
                          <table class="multi-type">
                            <tbody>
                              <tr>
                                <td class="process-title">
                                  <div contenteditable="true" class="stepRowEdit">Step 03</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc">
                                  <div contenteditable="true" class="stepRowEdit">품의 승인</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc-info">
                                  <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="group">
                          <table class="multi-type">
                            <tbody>
                              <tr>
                                <td class="process-title">
                                  <div contenteditable="true" class="stepRowEdit">Step 03-1</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc">
                                  <div contenteditable="true" class="stepRowEdit">품의 승인</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc-info">
                                  <div contenteditable="true" class="stepRowEdit">텍스트 입력</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="group">
                          <table class="single-type">
                            <tbody>
                              <tr>
                                <td class="process-title">
                                  <div contenteditable="true" class="stepRowEdit">Step 03-2</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc">
                                  <div contenteditable="true" class="stepRowEdit">품의 작성</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="group">
                          <table class="single-type">
                            <tbody>
                              <tr>
                                <td class="process-title">
                                  <div contenteditable="true" class="stepRowEdit">전결 권한</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="process-desc">
                                  <div contenteditable="true" class="stepRowEdit">[결재] 본부장(2주일 이하)<br>부문장(2주일 초과)<br>[협조] 인사운영팀장<br>경영기획팀장</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="test" style="width: 1500px;height: 200px; background: red;">asdfsdaf</div>
                  </div>
                </div>
                <!-- 첨부파일 -->
                <div class="addfile-cont">
                  <h3 class="tit">첨부파일</h3>
                  <ul class="file-list">
                    <li v-for="(item, index) in fileList" :key="index">
                      <span class="ico" :class="item.form">{{item.name}}</span>
                      <button type="button" class="bn_down"><span class="blind">다운로드</span></button>
                    </li>
                  </ul>
                </div>
                <!-- //첨부파일 -->

                <!-- faq -->
                <div class="faq-cont">
                  <h3 class="tit">자주하는 질문 FAQ</h3>
                  <ul class="faq-list">
                    <li v-for="(item, index) in faq" :key="index">
                      <p v-on:click="item.open = !item.open" :class="{ 'open': item.open }">{{item.title}}</p>
                      <div v-if="item.open">{{item.content}}</div>
                    </li>
                  </ul>
                </div>
                <!-- //faq -->
              </div>
              <!--reply -->
              <div class="board-reply board-common_wrap">
                <div class="board-reply_view">
                  <board-reply></board-reply>
                  <div class="board-reply_view dep2">
                    <board-reply></board-reply>
                  </div>
                  <div class="board-reply_view dep2">
                    <board-reply></board-reply>
                  </div>
                </div>
                <div class="board-reply_view">
                  <board-reply></board-reply>
                </div>
              </div>
              <!--//reply -->
            </div>
          </div>

          <div class="share-reply-write_wrap">
            <div class="share-reply-write_head">
              <div class="info">
                <span class="reply_num" @click="replayPos">35</span>
              </div>
            </div>
            <div class="share-reply-write">
              <div class="share-reply-write_inner"><!-- 의견 입력 focus 시[foucs class 추가] -->
                <div contenteditable="true" class="footer-comment">
                  <span class="comment-placeholder">의견을 입력합니다</span>
                </div>
                <div class="reply-write_bn">
                  <button type="button">취소</button>
                  <button type="button">저장</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="share-info_cont_relation">
          <div class="cont">
            <div class="scroll">
              <div class="staff-list">
                <strong class="tit">업무담당자</strong>
                <!-- <ul>
                  <li v-for="(item, index) in person" :key="index">
                    <div class="img-box">
                      <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.imgName">
                    </div>
                    <div class="info">
                      <strong class="name">{{item.name}} <span>{{item.spot}}</span></strong>
                      <p class="part">{{item.pos}}</p>
                      <p class="tel">{{item.tel}} / {{item.mob}}</p>
                    </div>
                  </li>
                </ul> -->
                <div v-if="noData" class="no-data">
                  담당자가 없습니다.
                </div>
              </div>
              <div class="staff-list">
                <strong class="tit">시스템담당자</strong>
                <ul>
                  <li v-for="(item, index) in person" :key="index">
                    <div class="img-box">
                      <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.imgName">
                    </div>
                    <div class="info">
                      <strong class="name">{{item.name}} <span>{{item.spot}}</span></strong>
                      <p class="part">{{item.pos}}</p>
                      <p class="tel">{{item.tel}} / {{item.mob}}</p>
                    </div>
                  </li>
                </ul>
                <!-- <div v-if="noData" class="no-data">
                  담당자가 없습니다.
                </div> -->
              </div>
            </div>
            <div class="btn-set">
              <button type="button">신청서 작성</button>
              <button type="button">바로가기 버튼 최대 한줄로 바로가기 버튼 최대 한줄로</button>
              <button type="button">신청서 작성</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import boardReply from "@/components/board/boardReply.vue";

export default defineComponent({
  components: {
    basePopup,
    boardReply,
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
      showModal: this.propShowModal,
      noData: true,
      person: [
				{
					src: 'img_dummy1.png',
          imgName: '김이름',
					name: '김이름',
					spot: '직위',
					pos: '소속부서명소속부서명소속부서명소속부서명소속부서',
					tel: '02-2345-6789',
					mob: '010-2345-6789',
				},
        {
					src: 'img_dummy1.png',
          imgName: '김이름',
					name: '김이름',
					spot: '직위',
					pos: '소속부서명',
					tel: '02-2345-6789',
					mob: '010-2345-6789',
				},
        {
					src: 'img_ppb_default.png',
          imgName: '김이름',
					name: '김이름',
					spot: '직위',
					pos: '소속부서명',
					tel: '02-2345-6789',
					mob: '010-2345-6789',
				},
			],
      fileList: [
        { form:'pdf', name: '한화생명_ppt파일_첨부시이렇게_보여집니다.pdf' },
        { form:'img', name: '한화생명_ppt파일_첨부시이렇게_보여집니다.img' },
      ],
      faq: [
				{
					title: '장기출장시 정신이 매우 번거롭습니다. 수당으로 지급받을 수는 없나요?',
          content: '모든 출장여비는 실비정산 원칙으로 100% 예산한도내 실비정산 하셔야 합니다. 모든 출장여비는 실비정산 원칙으로 100% 예산한도내 실비 정산 하셔야합니다.',
          open: false,
				},
        {
					title: '당일출장도 출장 품의를 작성해야하나요?',
          content: '답변 내용입니다.',
          open: false,
				},
        {
					title: '출장 일자가 6/35 - 7/15일 입니다. 마감은 어떻게 하면 되나요?',
          content: '모든 출장여비는 실비정산 원칙으로 100% 예산한도내 실비정산 하셔야 합니다. 모든 출장여비는 실비정산 원칙으로 100% 예산한도내 실비 정산 하셔야합니다.',
          open: false,
				},
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
    replayPos(){
      const contsEle = document.querySelector('.cont') as HTMLElement
      const scrollT = document.querySelector('.board-reply') as HTMLElement
      this.$nextTick(() => {
        contsEle.scroll({
          top: scrollT.offsetTop,
          behavior: 'smooth'
        })
      })
    }
  }
})
</script>