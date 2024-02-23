<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <supportLeft/>
      <div class="layout-contents">
        <!-- searchbar -->
        <div class="board-searchbar">
          <div>
            <select-view
              :propOptionList="optionLsit1"
              :propPlaceholder="'전체'"
              >
            </select-view>
          </div>
          <div>
            <select-view
              :propOptionList="optionLsit2"
              :propPlaceholder="'1개월'"
              >
            </select-view>
          </div>
          <div>
            <form action="">
              <div class="input-box">
                <input type="text" required placeholder="검색어를 입력하세요.">
                <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
              </div>
            </form>
          </div>
        </div>
        <!-- //searchbar -->
        <!-- contents -->
        <div class="board-common_wrap">
          <div class="staff-service">
            <div class="sv-list">
              <strong>인사</strong>
              <ul>
                <li>
                  <button type="button">휴가</button>
                  <button type="button" class="btn-set">설정</button>
                  <button type="button" class="btn-apply">신청</button>
                </li>
                <li><button type="button">직급/호칭 및 승진 체계</button><span class="ico-new">New</span></li>
                <li><button type="button">성과관리 체계</button><span class="ico-new">New</span></li>
                <li><button type="button">급여체계</button></li>
                <li><button type="button">복장규정</button></li>
                <li><button type="button">일&middot;가정 양립 지원제도</button></li>
                <li><button type="button">퇴직연금 중간정산</button></li>
                <li><button type="button">4대 보험</button></li>
                <li><button type="button">휴직/복직/퇴직</button></li>
              </ul>
            </div>
            <div class="sv-list">
              <strong>채용</strong>
              <ul>
                <li>
                  <button type="button">채용 프로세스</button>
                  <button type="button" class="btn-set">설정</button>
                  <button type="button" class="btn-apply">신청</button>
                </li>
                <li><button type="button">전문 계약직</button></li>
                <li><button type="button">내부추천 프로세스</button></li>
              </ul>
            </div>
            <div class="sv-list">
              <strong>복지</strong>
              <ul>
                <li>
                  <button type="button">리조트 이용</button>
                  <button type="button" class="btn-set">설정</button>
                  <button type="button" class="btn-apply">신청</button>
                </li>
                <li><button type="button">승마 이용</button></li>
                <li><button type="button">우리사주조합</button></li>
                <li><button type="button">경조사 지원</button></li>
                <li><button type="button">장기 근속 포상</button></li>
                <li><button type="button">학자금 지원</button></li>
                <li><button type="button">건강검진</button></li>
                <li><button type="button">단체상해보험</button></li>
                <li><button type="button">Refresh Room</button></li>
                <li><button type="button">심리상담 서비스</button></li>
                <li><button type="button">지방근무자 지원제도</button></li>
                <li><button type="button">한화태평로어린이집</button></li>
                <li><button type="button">휴대폰 비용지원</button></li>
              </ul>
            </div>
          </div>

          <div class="staff-service">
            <div class="sv-list">
              <strong>육성</strong>
              <ul>
                <li>
                  <button type="button">경력개발계획</button>
                  <button type="button" class="btn-set">설정</button>
                  <button type="button" class="btn-apply">신청</button>
                </li>
                <li><button type="button">전문자격 취득 지원</button></li>
                <li><button type="button">CDP</button></li>
                <li><button type="button">학습조직</button></li>
                <li><button type="button">어학지원</button></li>
                <li><button type="button">동호회</button></li>
                <li><button type="button">멘토링</button></li>
                <li><button type="button">사내강사제도</button></li>
                <li><button type="button">HRD센터이용</button></li>
              </ul>
            </div>
            <div class="sv-list">
              <strong>노무</strong>
              <ul>
                <li>
                  <button type="button">근로시간제도</button>
                  <button type="button" class="btn-set">설정</button>
                  <button type="button" class="btn-apply">신청</button>
                </li>
                <li><button type="button">괴롭힘 금지</button></li>
                <li><button type="button">성희롱 금지</button></li>
                <li><button type="button">징계체계</button></li>
                <li><button type="button">ICT 협의체</button></li>
                <li><button type="button">도급운영개선</button></li>
                <li><button type="button">산업안전 안내</button></li>
                <li><button type="button">최저임금 안내</button></li>
              </ul>
            </div>
            <div class="sv-list">
              <strong>비품</strong>
              <ul>
                <li>
                  <button type="button">사원증(재)발급</button>
                  <button type="button" class="btn-set">설정</button>
                  <button type="button" class="btn-apply">신청</button>
                </li>
                <li><button type="button">임시출입카드(재)발급</button></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- //contents -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import supportLeft from "./supportLeft.vue"
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    supportLeft,
    selectView,
  },
  data() {
    return {
      optionLsit1: [
        { value: '전체', label: '전체' },
        { value: '게시판', label: '게시판' },
        { value: '제목', label: '제목' },
        { value: '작성자', label: '작성자' },
        { value: '내용', label: '내용' },
      ],
      optionLsit2: [
        { value: '전체', label: '전체' },
        { value: '1주일', label: '1주일' },
        { value: '1개월', label: '1개월' },
        { value: '2개월', label: '2개월' },
        { value: '3개월', label: '3개월' },
        { value: '4개월', label: '4개월' },
        { value: '5개월', label: '5개월' },
        { value: '6개월', label: '6개월' },
        { value: '7개월', label: '7개월' },
        { value: '8개월', label: '8개월' },
        { value: '9개월', label: '9개월' },
        { value: '10개월', label: '10개월' },
        { value: '11개월', label: '11개월' },
        { value: '1년', label: '1년' },
      ],
    };
  },
  methods: {
  },
  computed: {
  }
})
</script>