<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title=""
    class="ly-pop-type1 admin xl no-title share pb0 scroll"
  >
    <template v-slot:body>
      <div class="share-info_header">
        <div class="flex jc-sb pd-b10">
          <div class="indiv">
            <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
            <div class="info">
              <em>고아라<span>Assistant Manager / Assistant Manager</span></em>
              <div class="date">
                <span><button type="button">2021.09.07 11:23</button></span>
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="'· 그룹공유'"
                    :propItem="dropItem2"
                    :propClass="'dropdown-type2-list share'"
                  >
                  </dropdown-menu2>
                </div>
              </div>
            </div>
          </div>
          <div class="flex mg-r30">
            <em class="share-tab_tit">Global Business Culture</em>
            <div class="drop">
              <div class="dropdown-type1">
                <dropdown-menu
                  :propItem="dropItem"
                  :propClass="'right'"
                ></dropdown-menu>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="share-info_cont_wrap">
        <div class="share-info_cont_info">
          <div class="cont">
            <div class="scroll">
              <div class="share-pop_cont">
                <div class="txt_box">
                  내용영역입니다. (필수입력) 사용자가 작성한 내용이 보입니다.삽입된 링크가 없는경우/파일첨부(사진포함) 표현안함. 입력한 내용이 다보입니다. 한글 기준 1000자. 글자수 넘으면 입력 안됨. 영역내 스크롤 발생합니다.
                  <br><br>
                  링크를 붙여넣기 한 경우(링크1)- 링크 모듈 삽입 적용<br>
                  <a href="#">https://www.chosun.com/economy/economy_general/2022/02/04/NHKDMDRNAZAEZKNP3RC4GHF4QA/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news</a>
                  <br><br>
                  링크를 붙여넣기 한 경우(링크2)- 링크 모듈 적용 안됨<br>
                  (<a href="#"> https://www.chosun.com/economy/economy_general/2022/02/04/NHKDMDRNAZAEZKNP3RC4GHF4QA/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news </a>)
                  <br>
                  <a href="#">https://www.collabee.co/project/76444/ /postDetail/1228069</a>
                </div>
                <div class="img_box">
                  <div id="linkModule">
                    <span class="img"><img :src="require('@/assets/imgs/collaboration/img/share_cate0.jpg')" alt="lifeplus"></span>
                    <div class="info">
                      <span class="txt">HANWHA.COM</span>
                      <span class="tit ell-multiline2">콘텐츠 타이틀 영역 두줄까지 표현됩니다. 타이틀 못불러올 경우 URL정보가 표시됩니다. 콘텐츠 타이틀 영역 두줄까지 표현됩니다. 타이틀 못불러올 경우 URL정보가 표시됩니다.</span>
                    </div>
                  </div>
                  <button type="button" class="del">삭제</button>
                </div>
                <div class="row_box">    
                  <div class="ico-file pdf"><span class="ell-singleline">협업서비스 디자인 시안 B타입</span><span>.pdf</span></div>
                  <div class="right">
                    <div class="drop">
                      <div class="dropdown-type1">
                        <dropdown-menu
                          :propItem="dropItem3"
                        ></dropdown-menu>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row_box">    
                  <div class="ico-file excel"><span class="ell-singleline">협업서비스 디자인 시안 B타입</span><span>.pdf</span></div>
                  <div class="right">
                    <div class="drop">
                      <div class="dropdown-type1">
                        <dropdown-menu
                          :propItem="dropItem3"
                        ></dropdown-menu>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="img_attachment">
                  <img :src="require('@/assets/imgs/collaboration/img/share_test2.png')">
                </div>
              </div>

              <div class="share-reply_wrap_in">
                <div class="reply_wrap">
                  <div class="reply">
                    <div class="reply_head">
                      <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                      <span class="name">박생명</span>
                      <span class="date">2021.01.31 10:11</span>
                    </div>
                    <p class="reply_cont">1A안과 B안에 대한 비교 내용을 입력했습니다.</p>
                    <div class="reply_foot">
                      <span>답변<em>2</em></span>
                      <button type="button" class="bn_reply active">답변하기</button>
                    </div>
                    <div class="reply-write_inner focus"><!-- 답변하기 활성화 focus 시[foucs class 추가] -->
                      <div class="reply-write_input" contenteditable="true" @keydown="posLayer"><span class="hl">@김한화</span></div>
                      <div class="reply-write_bn">
                        <button type="button">취소</button>
                        <button type="button">저장</button>
                      </div>
                    </div>
                  </div>
                  <div class="reply re">
                    <div class="reply_head">
                      <span class="name">김한화</span>
                      <span class="date">2021.01.31 10:11</span>
                    </div>
                    <p class="reply_cont"><span class="mention">@박생명</span> 네, 확인해보겠습니다. 감사합니다.</p>
                    <div class="reply_bn">
                      <button type="button" class="bn_del">삭제</button>
                      <button type="button" class="bn_re">답글</button>
                    </div>
                  </div>
                  <div class="reply">
                    <div class="reply_head">
                      <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                      <span class="name">박생명</span>
                      <span class="date">2021.01.31 10:11</span>
                    </div>
                    
                    <div class="reply-write_modi">
                      <div class="reply-write_inner"><!-- 답변하기 활성화 focus 시[foucs class 추가] -->
                        <div class="reply-write_input" contenteditable="true"><span class="hl">@김한화</span></div>
                        <div class="reply-write_bn">
                          <button type="button">취소</button>
                          <button type="button">저장</button>
                        </div>
                      </div>
                    </div>
                    <div class="reply_bn">
                      <button type="button" class="bn_del">삭제</button>
                      <button type="button" class="bn_re">답글</button>
                    </div>

                    <div class="reply_foot">
                      <span>답변<em>2</em></span>
                      <button type="button" class="bn_reply">답변하기</button>
                    </div>
                    <div class="reply-write_inner"><!-- 답변하기 활성화 focus 시[foucs class 추가] -->
                      <div class="reply-write_input" contenteditable="true"><span class="hl">@김한화</span></div>
                      <div class="reply-write_bn">
                        <button type="button">취소</button>
                        <button type="button">저장</button>
                      </div>
                    </div>
                  </div>
                  <div class="reply re">
                    <div class="reply_head">
                      <span class="name">김한화</span>
                      <span class="date">2021.01.31 10:11</span>
                    </div>
                    <p class="reply_cont"><span class="mention">@박생명</span> 네, 확인해보겠습니다. 감사합니다.</p>
                    <div class="reply_bn">
                      <button type="button" class="bn_del">삭제</button>
                      <button type="button" class="bn_re">답글</button>
                    </div>
                  </div>
                  <div class="reply">
                    <div class="reply_head">
                      <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                      <span class="name">박생명</span>
                      <span class="date">2021.01.31 10:11</span>
                    </div>
                    <p class="reply_cont">A안과 B안에 대한 비교 내용을 입력했습니다.</p>
                    <div class="reply_foot">
                      <span>답변<em>2</em></span>
                      <button type="button" class="bn_reply">답변하기</button>
                    </div>
                    <div class="reply-write_inner"><!-- 답변하기 활성화 focus 시[foucs class 추가] -->
                      <div class="reply-write_input" contenteditable="true"><span class="hl">@김한화</span></div>
                      <div class="reply-write_bn">
                        <button type="button">취소</button>
                        <button type="button">저장</button>
                      </div>
                    </div>
                  </div>
                  <div class="reply re">
                    <div class="reply_head">
                      <span class="name">김한화</span>
                      <span class="date">2021.01.31 10:11</span>
                    </div>
                    <p class="reply_cont"><span class="mention">@박생명</span> 네, 확인해보겠습니다. 감사합니다.</p>
                    <div class="reply_bn">
                      <button type="button" class="bn_del">삭제</button>
                      <button type="button" class="bn_re">답글</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="share-reply-write_wrap">
            <div class="share-reply-write_head">
              <div class="dropdown-type2 tooltip text view">
                <dropdown-menu2
                  :propName="'34,500'"
                  :propItem="dropItem4"
                  :propClass="'dropdown-type2-list share'"
                >
                </dropdown-menu2>
              </div>
              <div class="info">
                <span class="bn_good"><button type="button" @click="clickSelect" :class="{'active':selectActive}">좋아요</button> 78</span>
                <span class="reply_num">4</span>
              </div>
            </div>
            <div class="share-reply-write">
              <div class="share-reply-write_inner"><!-- 의견 입력 focus 시[foucs class 추가] -->
                <div contenteditable="true" class="footer-comment">
                  <span class="comment-placeholder">의견 입력</span>
                </div>
                <div class="share-sand_search_list">
                  <div class="share-sand_search_list_inner">
                    <strong>검색결과</strong>
                    <p class="no-data" v-if="list">해당 검색어와 일치하는 조직이 없습니다.</p>
                    <ul class="list" v-else>
                      <li>
                        <dl>
                          <dt class="ell-singleline">김이 검색어가 포함된 부문명</dt>
                          <dd class="ell-singleline">한화생명</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt class="ell-singleline">김이 검색어가 포함된 부문명</dt>
                          <dd class="ell-singleline">소속 클러스터명</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt class="ell-singleline">김이 검색어가 포함된 노드명이 노출됩니다 김이 검색어가 포함된 노드명이 노출됩니다 </dt>
                          <dd class="ell-singleline">소속 부문명 / 소속 클러스터명</dd>
                        </dl>
                      </li>
                    </ul>
                    <p class="nodata" v-if="mix">해당 검색어와 일치하는 조직이 없습니다.</p>
                    <ul class="list_mix" v-else>
                      <li class="cp">
                        <div class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></div>
                        <dl>
                          <dt class="ell-singleline">
                              김이름<span class="pos">직위 / 직책</span>
                          </dt>
                          <dd class="ell-singleline">부문명 / 노드명</dd>
                        </dl>
                      </li>
                      <li>
                        <div class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></div>
                        <dl>
                          <dt class="ell-singleline">
                              김이름<span class="pos">직위 / 직책</span>
                          </dt>
                          <dd class="ell-singleline">부문명 / 노드명</dd>
                        </dl>
                      </li>
                      <li>
                        <div class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></div>
                        <dl>
                          <dt class="ell-singleline">
                              김이름<span class="pos">직위 / 직책</span>
                          </dt>
                          <dd class="ell-singleline">부문명 / 노드명</dd>
                        </dl>
                      </li>
                      <li>
                        <div class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></div>
                        <dl>
                          <dt class="ell-singleline">
                              김이름<span class="pos">직위 / 직책</span>
                          </dt>
                          <dd class="ell-singleline">부문명 / 노드명</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>                
              </div>
            </div>
          </div>

        </div>
        <div class="share-info_cont_relation">
          <div class="cont">
            <div class="scroll">
              <strong class="tit">Digital Finance</strong>
              <span class="txt">연관 콘텐츠</span>
              <div class="img-box">
                <span class="img"><img :src="require('@/assets/imgs/collaboration/img/share_cate0.jpg')" alt="lifeplus"></span>
                <span class="tit ell-multiline2 difin">작성한 내용이 보여집니다. 내용영역 2줄 보여주고 이후는 말줄임 처리가 됩니다. 작성한 내용이 보여집니다.</span>
              </div>
              <div class="img-box">
                <span class="img"><img :src="require('@/assets/imgs/collaboration/img/share_cate0.jpg')" alt="lifeplus"></span>
                <span class="tit ell-multiline2 difin">작성한 내용이 보여집니다.</span>
              </div>
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
import dropdownMenu from "@/components/dropdownMenu.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

export default defineComponent({
  components: {
    basePopup,
    dropdownMenu,
    dropdownMenu2,
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
      list: true,
      mix: false,
      showModal: this.propShowModal,
      dropItem: [
        { title: 'URL 복사' },
        { title: '편집' },
        { title: '삭제' },
      ],
      dropItem2: {
        title: `
          <div class="dropdown-share-list">
            <strong>공유 대상</strong>
            <div class="scroll">
              <span>@김이름</span>
              <span>@장한화</span>
              <span>@시스템개발노드</span>
              <span>@노드클러스트부문명이 긴경우 최대 범위까지 노출후</span>
              <span>@김이름</span>
              <span>@장한화</span>
              <span>@시스템개발노드</span>
              <span>@노드클러스트부문명이 긴경우 최대 범위까지 노출후</span>
            </div>
          </div>
        `,
      },
      dropItem3: [
        { title: '다운로드' },
        { title: 'URL 복사' },
      ],
      dropItem4: {
        title: `
          <div class="dropdown-people_list share">
            <div class="mem_num">조회한 사람들</div>
            <ul>
              <li>
                <div class="img round"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></div>
                <dl>
                  <dt class="ell-singleline">
                      김이름<span class="pos">직위 / 직책</span>
                  </dt>
                  <dd class="ell-singleline">부문명 / 노드명</dd>
                </dl>
              </li>
              <li>
                <div class="img"><img src="${require('@/assets/imgs/icon/ico-profile.png')}" alt="프로필 이미지"></div>
                <dl>
                  <dt class="ell-singleline">
                      김이름<span class="pos">직위 / 직책</span>
                  </dt>
                  <dd class="ell-singleline">부문명 / 노드명</dd>
                </dl>
              </li>
            </ul>
          </div>
        `,
      },
      personnel: [
				{ 
					leader: true,
					src: 'profile-default-img-34.svg',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
				{ 
					leader: false,
					src: 'profile-default-img-34.svg',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
			],
      selectActive: false,
      classCase: this.propClass,
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
  }
})
</script>