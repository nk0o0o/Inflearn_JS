<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title=""
    class="ly-pop-type1 admin lg no-title share"
  >
    <template v-slot:body>
      <div class="share-shr-layout">
        <div class="share-info_header">
          <div class="indiv">
            <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
            <div class="info">
              <em>고아라<span>Assistant Manager / Assistant Manager</span></em>
              <div>
                <select-view
                  :propOptionList="optionLsit"
                  :propPlaceholder="'전체 공유'"
                  :propClass="'type2 f-14'"
                  >
                </select-view>
              </div>
            </div>
          </div>
          <div class="search">
            <div class="share-sand_search">
              <div class="flex">
                <strong>공유 대상 검색 :</strong>
                <div class="flex-1 mg-l10">
                  <form action="">
                    <div class="input-box search-type1 full h50">
                      <input type="text" required placeholder="@이름, @조직명">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="dropdown-collab-list-type2">
                <div class="mem_num">
                  <strong class="fc dark">검색결과</strong>
                  <p class="nodata">해당 검색어와 일치하는 조직이 없습니다.</p>
                </div>
                <ul>
                  <li v-for="(item, index) in personnel" :key="index">
                    <a href="#">
                      <div class="img" :class="{round: item.leader}"><img :src="require(`@/assets/imgs/collaboration/svg/${item.src}`)" :alt="item.name"></div>
                      <dl>
                        <dt>
                          {{item.name}}
                          <span class="pos">{{item.spot}} / {{item.pos}}</span>
                        </dt>
                        <dd>{{item.sector}}</dd>
                      </dl>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="share-sand_addr">
            <span>@김이름
              <button type="button">닫기</button>
            </span>
            <span>@장한화
              <button type="button">닫기</button>
            </span>
            <span>@시스템개발노드
              <button type="button">닫기</button>
            </span>
            <span>@노드클러스트부문명이 긴경우 최대 범위까지 노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후노출후
              <button type="button">닫기</button>
            </span>
          </div>
          <div class="share-info_cont_head flex jc-sb">
            <div>
              <select-view
                :propOptionList="optionLsit2"
                :propPlaceholder="'카테고리 선택'"
                :propClass="'type1 f-14'"
                >
              </select-view>
            </div>
            <button type="button" class="icon-btn file">파일첨부</button>
          </div>
        </div>

        <div class="share-sand_txt">
          <div class="share-sand_txtarea">
            <div class="txt_box" contenteditable="true" placeholder="공유할 정보 내용을 입력해 주세요!">
              내용영역입니다. (필수입력) 사용자가 작성한 내용이 보입니다.삽입된 링크가 없는경우/파일첨부(사진포함) 표현안함. 입력한 내용이 다보입니다. 한글 기준 1000자. 글자수 넘으면 입력 안됨. 영역내 스크롤 발생합니다.
              <br><br>
              링크를 붙여넣기 한 경우(링크1)- 링크 모듈 삽입 적용<br>
              <a href="#">https://www.collabee.co/project/76444/ /postDetail/1228069</a>
              <br><br>
              링크를 붙여넣기 한 경우(링크2)- 링크 모듈 적용 안됨<br>
              <a href="#">https://www.collabee.co/project/76444/ /postDetail/1228069</a>
            </div>
            <div class="share-pop_cont">
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
              <div class="img_box">
                <div id="linkModule">
                  <span class="img"><img :src="require('@/assets/imgs/collaboration/img/share_cate0.jpg')" alt="No Image"></span>
                  <div class="info">
                    <span class="txt">HANWHA.COM</span>
                    <span class="tit ell-multiline2">콘텐츠 타이틀 영역 두줄까지 표현됩니다. 타이틀 못불러올 경우 URL정보가 표시됩니다. 콘텐츠 타이틀 영역 두줄까지 표현됩니다. 타이틀 못불러올 경우 URL정보가 표시됩니다.</span>
                  </div>
                </div>
                <button type="button" class="del">삭제</button>
              </div>
              <div class="row_box">    
                <div class="ico-file pdf"><span class="ell-singleline">협업서비스 디자인 시안 B타입</span><span>.pdf</span></div>
                <button type="button" class="bn_rb_del">삭제</button>
              </div>
              <div class="row_box">    
                <div class="ico-file excel"><span class="ell-singleline">협업서비스 디자인 시안 B타입</span><span>.pdf</span></div>
                <button type="button" class="bn_rb_del">삭제</button>
              </div>
              <div class="img_attachment">
                <img :src="require('@/assets/imgs/collaboration/img/share_test2.png')">
                <button type="button" class="del">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap pd-t20">
        <button type="button" class="btn lg line-type2">삭제</button>
        <button type="button" class="btn lg line-type2">임시저장</button>
        <button type="button" class="btn lg">공유하기</button>
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
      isActive: false,
      showModal: this.propShowModal,
      optionLsit: [
        { value: '전체 공유', label: '전체 공유' },
        { value: '그룹 공유', label: '그룹 공유' },
        { value: '나만 공유', label: '나만 공유' },
      ],
      optionLsit2: [
        { value: '카테고리 선택', label: '카테고리 선택' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
      personnel: [
				{ 
					leader: true,
					src: 'profile-default-img-34.svg',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '소속조직명노출(디지털워크그룹) 최대 25자이후…',
					//node: '노드명',
				},
				{ 
					leader: false,
					src: 'profile-default-img-34.svg',
					name: '김한화',
					spot: '직위',
					pos: '직책',
					sector: '디지털워크그룹',
					//node: '노드명',
				},
			]
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