<template>
  <div class="layout-wrap" :class="{'active': isActive}">
    <div class="layout-body">
      <boardLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">

          <div class="btn-wrap between">
            <div>
              <button type="button" class="btn md line-type1">목록</button>
            </div>
            <div>
              <button type="button" class="btn md line-type1">삭제</button>
              <button type="button" class="btn md line-type1">수정</button>
              <button type="button" class="btn md line-type1">답글</button>
              <button type="button" class="icon-btn scale" :class="{'active': isActive}" @click="wrapFull">
                <i class="blind">{{isActive ? '접기' : '펼쳐보기'}}</i>
              </button>
            </div>
          </div>

          <!-- notice view -->
          <div class="board-notice_view">
            <div class="head_location">
              <span>게시판</span>
              <span>회사게시판</span>
              <span>공지사항</span>
              <em>공지사항</em>
            </div>
            <div class="favor active"><span class="blind">관심</span></div>
            <div class="best" @click="best=!best" :class="{'active':best}"><span class="blind">추천</span></div>
            <h3 class="tit">[교육] 우리 모두의 지속가능한 내일을 만들어 갑니다.</h3>
            <div class="head">
              <div>
                <span class="view">185</span>
                <span class="ico best active">26</span>
                <!-- <span class="ico favorite active">26</span> -->
                <span class="dates">2021.10.30 11:26</span>
                <span class="kind"><em>분류</em> [분류명 최대 15자 출력후분류명 최대 15자 출력후]</span>
                <span class="authority"><em>조회권한</em> 디지털워크팀, 김한화차장  23자 출력후디지털워크팀, 김한화차장  23자 출력후</span>
                <span class="situation"><em>상태</em> 대기</span>
              </div>
            </div>
            <div class="profile_wrap">
              <div>
                <div class="dropdown-type2 tooltip text">
                  <dropdown-menu2
                    :propisSlotMode="true"
                    :propItem="dropItem2"
                    :propClass="'dropdown-type2-list type3'"
                  >
                    <template v-slot:head>
                      <span class="profile">
                        <span class="img sit-01 no-state"><img :src="require('@/assets/imgs/img_dummy3.png')" alt="김한화"></span>
                        <span class="pos"><em>김한화</em> 차장 / Assistant Manager</span>
                        <span class="team">디지털워크그룹</span>
                      </span>
                    </template>
                  </dropdown-menu2>
                </div>
              </div>
              <div>
                <div class="btn-set">
                  <button type="button" class="btn sm line-type2">게시글 이동</button>
                  <button type="button" class="only-icon-btn print">프린트</button>
                  <button type="button" class="only-icon-btn new-win">새창</button>
                </div>
              </div>
            </div>

            <div class="download">
              <ul>
                <li class="ico-file pdf">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file hwp">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file ppt">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file word">IT Academy 과정상세 과정 과정상세과정.pptx (2387.6KB) <button type="button">파일저장</button></li>
                <li class="ico-file jpg">IT Academy 과정상세 과정].pptx (2387.6KB) <button type="button">파일저장</button></li>
              </ul>
              <button type="button" class="icon-btn download">전체 다운로드</button>
            </div>
            <div class="content">
              1952년 설립된 한화는 제조ㆍ건설, 금융, 서비스·레저 사업군에서 일류 경쟁력을 강화하고 있습니다.<br>
              총 자산규모 기준 국내 재계 순위 7위, &lt;포춘&gt;지 선정 글로벌 500대 기업의 위상을 가지고 있으며<br>
              변화하는 시장 환경에 선제적으로 대응해 각 사업군에서 리더십을 발휘하고 있습니다.<br><br>
              또한 화학, 기계ㆍ항공ㆍ방산, 태양광, 금융 등 핵심 사업에 대한 선택과 집중, 지속적인 투자와 도전으로 내실 있는 성장과
              지속가능한 인류의 미래를 약속하고 있습니다.<br><br>
              제조ㆍ건설 사업군은 태양광, 항공우주기계, 2차 전지 등 미래형 첨단산업 부문에 집중적으로 투자하며<br>
              글로벌 한화의 비전을 실현하기 위한 핵심적인 역할을 담당하고 있습니다.<br>
              특히, 태양광 사업은 그룹이 지구와 인류의 지속가능한 미래에 기여하고자 하는 중장기 비전 아래<br>
              2010년 이후 적극적으로 추진 중인 미래 성장사업입니다.<br><br>
              최근 그룹 성장을 선도하고 있는 금융 사업군은 한화생명, 한화투자증권, 한화손해보험을 중심으로<br>
              한화금융네트워크를 구축 하여 사업부문 간 시너지를 극대화함으로써 금융 관련 토털 솔루션을 제공하고 있습니다.<br><br>
              그룹 브랜드 가치 향상에 주도적인 역할을 담당하고 있는 서비스ㆍ레저 사업군은 고급화 및 집중화 전략을 통해<br>
              타 업체와의 차별화를 추구하는 한편, 다양한 고객 맞춤형 서비스를 제공함으로써 21세기 생활ㆍ레저 문화를 선도해 가고 있습니다.
            </div>
          </div>
          <!--//notice view -->

          <!--reply -->
          <div class="board-reply">
            <div class="board-reply_head">
              <strong>댓글 12</strong>
            </div>
            <!-- reply write -->
            <div class="board-reply_writer">
              <div class="name_field">
                <form action="">
                  <label for="writerName">작성자</label>
                  <div class="input-box type3">
                    <input type="text" required placeholder="이름을 입력해주세요." id="writerName">
                    <button type="reset" class="input-txt-del readonly"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                </form>
              </div>
              <div class="pass_field">
                <form action="">
                  <label for="writerPass">비밀번호</label>
                  <div class="input-box type3">
                    <input type="password" required placeholder="비밀번호를 입력해주세요." id="writerPass">
                    <button type="reset" class="input-txt-del readonly"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                </form>
              </div>
            </div>
            <div class="board-reply_write" :class="{focus: isFocus}">
              <div class="num"><em>11</em>/1000</div>
              <!-- <textarea name="" id="" class="txt-area first" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false"></textarea> -->
              <div contenteditable="true" class="txt-area" placeholder="댓글을 입력하세요." @focus="isFocus = true" @blur="isFocus = false">
                <span class="to">to 김주희</span> 내용내용
              </div>
              <div class="preview_img">
                <span><img :src="require('@/assets/imgs/img_dummy3.png')" alt="김한화"></span>
              </div>
              <ul class="file_list">
                <li v-for="(list, index) in fileList" :key="index">
                  <span class="ico" :class="list.form">{{list.name}}</span>
                  <span class="bn_del">
                    <button type="button"><span class="blind">삭제</span></button>
                  </span>
                </li>
              </ul>
              <div class="foot">
                <div class="dropdown-type1 add-file">
                  <dropdown-menu3
                    :propisSlotMode="false"
                    :propItem="dropItem"
                    :propSelectText="selectText"
                    :propClass="'task-log'"
                    :propDropSelectItem="dropSelectItem.itemId"
                    @selected="selectValue"
                    :propLocation="'end top'"
                  />
                </div>
                <!-- <div><button type="button" class="bn_file">파일첨부</button></div> -->
                <div>
                  <button type="button" class="bn_cancel">취소</button>
                  <button type="button" class="bn_regit">저장</button>
                </div>
              </div>
            </div>
            <!-- //reply write -->
            <!-- board reply -->
            <div class="board-reply_view">
              <board-anony></board-anony>
              <div class="board-reply_view dep2">
                <board-reply></board-reply>
              </div>
              <div class="board-reply_view dep2">
                <board-modify></board-modify>
              </div>
              <div class="board-reply_view dep2">
                <board-anony2></board-anony2>
              </div>
              <div class="board-reply_view dep2">
                <board-reply></board-reply>
              </div>
            </div>
            <div class="board-reply_view">
              <board-reply></board-reply>
            </div>
            <!-- //board reply -->
          </div>
          <!--//reply -->

          <Paging
            v-model="page"
            :records="500"
            :per-page="25"
            :options="{hideCount: true}"
            @paginate="myCallback"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import boardLeft from "./boardLeft.vue";
import boardReply from "@/components/board/boardReply.vue";
import boardModify from "@/components/board/boardModify.vue";
import BoardAnony from '@/components/board/boardAnony.vue';
import BoardAnony2 from '@/components/board/boardAnony2.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

//@ts-ignore
import Paging from 'v-pagination-3';


export default defineComponent({
  components: {
    boardLeft,
    Paging,
    boardReply,
    boardModify,
    dropdownMenu2,
    dropdownMenu3,
    BoardAnony,
    BoardAnony2,
  },
  data() {
    return {
      //nodata: false,
      isFocus: false,
      best: false,
      page: 1,
      optionLsit: [
        { value: '전체', label: '전체' },
        { value: '게시판', label: '게시판' },
        { value: '제목', label: '제목' },
        { value: '작성자', label: '작성자' },
        { value: '내용', label: '내용' },
      ],
      dropSelectItem:{
        itemId: 'selected1'
      },
      selectText:'파일첨부',
      dropItem: [
        { title: '내 PC에서 선택', itemId: 'selected1'},
        { title: '그룹 파일함에서 선택', itemId: 'selected2'},
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
      noticeList: [
        {
          isDisabled: false,
          title: '[그룹공지]임직원 SNS 사용 가이드라인 배포 안내',
          date: '김한화・2022.03.14 오전 11:23',
          content: '내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다.',
          view: 185,
          reply: 15,
          import: true,
        },
        {
          isDisabled: false,
          title: '[그룹공지]임직원 SNS 사용 가이드라인 배포 안내2',
          date: '김한화・2022.03.14 오전 11:23',
          content: '내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다.',
          view: 185,
          reply: 15,
          import: false,
        },
        {
          isDisabled: true,
          title: '[그룹공지]임직원 SNS 사용 가이드라인 배포 안내 임직원 SNS 사용 가이드라인 배포 안내 임직원 SNS 사용 가이드라인 배포 안내',
          date: '김한화・2022.03.14 오전 11:23',
          content: '내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. 내용은 두줄만 출력합니다. ',
          view: 185,
          reply: 15,
          import: false,
        },
      ],
      fileList: [
        { form:'pdf', name: '한화생명_ppt파일_첨부시이렇게_보여집니다.pdf' },
        { form:'img', name: '한화생명_ppt파일_첨부시이렇게_보여집니다.img' },
      ],
      isActive: false,
    };
  },
  methods: {
    selectValue(val:any){
      this.dropSelectItem.itemId = val.selected
    },
    wrapFull() {
      this.isActive = !this.isActive
    }
  },
  computed: {

  }
})
</script>