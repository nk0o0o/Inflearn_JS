<template>
  <div class="comment_area opinion_search new-board side-task-secret" id="paperAllComment" :class="{'active':Visiable}">
      <h2 class="blind">의견 작성 레이어</h2>
      <button type="button" class="opinion_search_closed" @click="sideShowHide()"></button>
      <div class="opinion-search_area">
        <button class="comment-all-view"><span>전체 의견 보기</span></button>
        <form action="">
          <div class="input-box search-type">
            <input type="text" required placeholder="작성자, 의견내용을 검색하세요.">
            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
            <div class="list member">
              <memberSearch-list/>
            </div>
          </div>
        </form>
      </div>

      <div class="scroll_box">
        <!-- 검색내용없음 S -->
        <div class="no-data">
          검색 결과가 없습니다.
        </div>
        <!-- //검색내용없음 E -->
        <!-- 검색 내용 S -->
        <div class="opinion_box">
          <div class="name">
            <div class="dropdown-type2 tooltip text img">
              <dropdown-menu2
                :propImg="'img_dummy1.png'"
                :propName="'김한화'"
                :propItem="dropItem"
                :propClass="'dropdown-type2-list type3'"
              >
              </dropdown-menu2>
            </div>
            <span class="date">2021.01.31 09:11</span>
          </div>
          <div class="txt">테스트를 입력합니다.테스트를 입력합니다.</div>
          <dl class="reply_box">
            <dt>
              <b>답변 3</b>
              <button type="button" class="btn-txt-underline">답변하기</button>
            </dt>
            <dd>
              <div class="opinion_box">
                <div class="name">
                  <div class="dropdown-type2 tooltip text">
                    <dropdown-menu2
                      :propName="'김한화'"
                      :propItem="dropItem"
                      :propClass="'dropdown-type2-list type3'"
                    >
                    </dropdown-menu2>
                  </div>
                  <span class="date">2021.01.31 10:11</span>
                  <div class="btn_box top">
                    <button type="button" class="btn-ico-del_ty1">삭제</button>
                    <button type="button" class="btn-ico-edit">수정</button>
                  </div>
                </div>
                <div class="txt"><span class="mention">@박생명</span> 네 참고하겠습니다. 네 참고하겠습니다.</div>
              </div>
              <div class="opinion_box">
                <div class="name">
                  <div class="dropdown-type2 tooltip text">
                    <dropdown-menu2
                      :propName="'김한화'"
                      :propItem="dropItem"
                      :propClass="'dropdown-type2-list type3'"
                    >
                    </dropdown-menu2>
                  </div>
                  <span class="date">2020.08.05 10:11</span>
                  <div class="btn_box top">
                    <button type="button" class="btn-ico-del_ty1">삭제</button>
                    <button type="button" class="btn-ico-edit">수정</button>
                  </div>
                </div>
                <div class="txt"><span class="mention">@김영철</span> 확인했습니다.</div>
              </div>
              <div class="opinion_box">
                <div class="name">
                  <div class="dropdown-type2 tooltip text">
                    <dropdown-menu2
                      :propName="'김한화'"
                      :propItem="dropItem"
                      :propClass="'dropdown-type2-list type3'"
                    >
                    </dropdown-menu2>
                  </div>
                  <span class="date">2020.08.05 10:11</span>
                  <div class="btn_box top">
                    <button type="button" class="btn-ico-del_ty1">삭제</button>
                      <button type="button" class="btn-ico-edit">수정</button>
                  </div>
                </div>
                <div class="txt"><span class="mention">@김영철</span> 네 참고하겠습니다.</div>
            </div>
          </dd>
        </dl>
      </div><!-- //opinion_box -->

      <div class="opinion_box block">
        <div class="block-txt-wrap"><div class="block-txt"><span>블록의견</span></div></div>
        <div class="name">
          <div class="dropdown-type2 tooltip text img">
            <dropdown-menu2
              :propImg="'img_dummy1.png'"
              :propName="'김한화'"
              :propItem="dropItem"
              :propClass="'dropdown-type2-list type3'"
            >
            </dropdown-menu2>
          </div>
          <span class="date">2021.01.31 09:11</span>
        </div>
        <div class="txt">삭제된 의견입니다.</div>
        <dl class="reply_box">
          <dt>
            <b>답변 3</b>
          </dt>
          <dd>
            <div class="opinion_box">
              <div class="name">
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="'김한화'"
                    :propItem="dropItem"
                    :propClass="'dropdown-type2-list type3'"
                  >
                  </dropdown-menu2>
                </div>
                <span class="date">2020.08.05 10:11</span>
                <div class="btn_box top">
                  <button type="button" class="btn-ico-del_ty1">삭제</button>
                  <button type="button" class="btn-ico-edit">수정</button>
                </div>
              </div>
              <div class="txt"><span class="mention">@김영철</span> 네 참고하겠습니다. 네 참고하겠습니다.</div>
            </div>
            <div class="opinion_box">
              <div class="name">
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="'김한화'"
                    :propItem="dropItem"
                    :propClass="'dropdown-type2-list type3'"
                  >
                  </dropdown-menu2>
                </div>
                <span class="date">2020.08.05 10:11</span>
                <div class="btn_box top">
                  <button type="button" class="btn-ico-del_ty1">삭제</button>
                  <button type="button" class="btn-ico-edit">수정</button>
                </div>
              </div>
              <div class="txt"><span class="mention">@김영철</span> 확인했습니다.</div>
            </div>
            <div class="opinion_box">
              <div class="name">
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="'김한화'"
                    :propItem="dropItem"
                    :propClass="'dropdown-type2-list type3'"
                  >
                  </dropdown-menu2>
                </div>
                <span class="date">2020.08.05 10:11</span>
                <div class="btn_box top">
                  <button type="button" class="btn-ico-del_ty1">삭제</button>
                  <button type="button" class="btn-ico-edit">수정</button>
                </div>
              </div>
              <div class="txt"><span class="mention">@김영철</span> 네 참고하겠습니다.</div>
            </div>
          </dd>
        </dl>
      </div>

      <div class="opinion_box del">
        <div class="name">
          <div class="dropdown-type2 tooltip text img">
            <dropdown-menu2
              :propImg="'img_pp_default.png'"
              :propName="'김한화'"
              :propItem="dropItem"
              :propClass="'dropdown-type2-list type3'"
            >
            </dropdown-menu2>
          </div>
          <span class="date">2021.01.31 09:11</span>
        </div>
        <div class="txt">삭제된 의견입니다.</div>
        <dl class="reply_box">
          <dt>
            <b>답변 31</b>
          </dt>
          <dd>
            <div class="opinion_box">
              <div class="name">
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="'김한화'"
                    :propItem="dropItem"
                    :propClass="'dropdown-type2-list type3'"
                  >
                  </dropdown-menu2>
                </div>
                <span class="date">2020.08.05 10:11</span>
                <div class="btn_box top">
                  <button type="button" class="btn-ico-del_ty1">삭제</button>
                  <button type="button" class="btn-ico-edit">수정</button>
                </div>
              </div>
              <div class="txt"><span class="mention">@김영철</span> 네 참고하겠습니다.</div>
            </div>
            <div class="opinion_box">
              <div class="name">
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="'김한화'"
                    :propItem="dropItem"
                    :propClass="'dropdown-type2-list type3'"
                  >
                  </dropdown-menu2>
                </div>
                <span class="date">2020.08.05 10:11</span>
                <div class="btn_box top">
                  <button type="button" class="btn-ico-del_ty1">삭제</button>
                  <button type="button" class="btn-ico-edit">수정</button>
                </div>
              </div>
              <div class="txt"><span class="mention">@김영철</span> 확인했습니다.</div>
            </div>
            <div class="opinion_box del">
              <div class="name">
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propName="'김한화'"
                    :propItem="dropItem"
                    :propClass="'dropdown-type2-list type3'"
                  >
                  </dropdown-menu2>
                </div>
                <span class="date">2020.08.05 10:11</span>
                <div class="btn_box top">
                  <button type="button" class="btn-ico-del_ty1">삭제</button>
                    <button type="button" class="btn-ico-edit">수정</button>
                </div>
              </div>
              <div class="txt">삭제된 의견입니다.</div>
            </div>
          </dd>
        </dl>
        <div class="opinion-input_ty1">
          <div class="textarea placeholder">답변을 입력하고 @사용자이름으로 대상자를 지정하세요.</div>
          <memberCall/>
          <div class="btn_box txtr">
            <button type="button" class="btn-txt-secondary">취소</button>
            <button type="button" class="btn-txt-primary black">등록</button>
          </div>
        </div>
      </div>
      <!-- 검색 내용 E -->
      </div> <!-- //scroll_box -->
      <div class="opinion-input_ty1">
        <div class="block-usage textarea placeholder">
          <div class="side-task-template">의견을 입력하세요<br> (Side Task 비공개 상태일 때는 @요청 기능 <br>사용이 제한됩니다.)</div>
        </div>
        <div class="btn_box txtr">
          <button type="button" class="btn-txt-secondary">취소</button>
            <button type="button" class="btn-txt-primary black">등록</button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import memberSearchList from "@/components/taskLog/memberSearchList.vue"
import memberCall from "@/components/taskLog/memberCall.vue"

export default defineComponent({
  components: {
    dropdownMenu2,
    memberSearchList,
    memberCall,
},
  data() {
    return {
      Visiable: false,
      dropItem: {
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
    sideShowHide(){
			this.Visiable = !this.Visiable
      this.$emit('boardActive')
		},
  },
  computed: {

  }
});
</script>