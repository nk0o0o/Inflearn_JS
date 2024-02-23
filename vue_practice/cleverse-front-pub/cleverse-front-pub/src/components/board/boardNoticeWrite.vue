<template>
  <div class="layout-wrap" :class="{'active': isActive}">
    <div class="layout-body">
      <boardLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <div class="btn-wrap between">
            <div>
              <button type="button" class="btn md line-type2">취소</button>
            </div>
            <div>
              <button type="button" class="btn md line-type1">임시저장</button>
              <button type="button" class="btn md">저장</button>
              <button type="button" class="icon-btn scale" :class="{'active': isActive}" @click="wrapFull">
                <i class="blind">{{isActive ? '접기' : '펼쳐보기'}}</i>
              </button>
            </div>
          </div>
          <!-- notice write -->
          <div class="board-notice_write">
            <div class="head_location">
              <span>게시판</span>
              <span>회사게시판</span>
              <span>공지사항</span>
              <em>공지사항</em>
            </div>
            <h2 class="title">게시글 작성</h2>
            <div class="board_wrap">
              <table class="synap-editor">
              <colgroup>
              <col style="width:120px;">
              <col>
              </colgroup>
              <tbody>
              <tr>
                <th scope="row">제목</th>
                <td>
                  <form action="">
                    <div class="input-box type3 full">
                      <input type="text" required placeholder="제목을 입력해주세요.">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th scope="row">작성자</th>
                <td>
                  <form action="">
                    <div class="input-box type3 name">
                      <input type="text" required placeholder="작성자를 입력하세요.">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th scope="row">분류</th>
                <td>
                  <div class="input-chk square">
                    <input type="checkbox" name="chk1" id="chk1-1">
                    <label for="chk1">분류1</label>
                  </div>
                  <div class="input-chk square">
                    <input type="checkbox" name="chk1" id="chk1-2">
                    <label for="chk2">분류2</label>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">종료일</th>
                <td>
                  <select-view
                    :propOptionList="optionLsit"
                    :propPlaceholder="'사용자정의'"
                    :propClass="'type3'">
                  </select-view>
                  <div class="date">
                    <Datepicker
                      weekStart="0"
                      v-model="date"
                      :format="format"
                      @update:modelValue="onUpdateDate"
                      :enableTimePicker="false"

                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">링크URL</th>
                <td>
                  <div class="input-chk square">
                    <input type="checkbox" name="chk2" id="chk2-1">
                    <label for="chk2-1">사용</label>
                  </div>
                  <form action="">
                    <div class="input-box type3 link">
                      <input type="text" required placeholder="게시글에 연결할 링크를 입력하세요." value="">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th scope="row">링크URL</th>
                <td>
                  <div class="input-chk square">
                    <input type="checkbox" name="chk2" id="chk2-1">
                    <label for="chk2-1">사용</label>
                  </div>
                  <form action="">
                    <div class="input-box type3 link">
                      <input type="text" required placeholder="게시글에 연결할 링크를 입력하세요." disabled value="">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  조회권한
                  <button type="button" class="bn_authority"><i class="blind">조회권한</i></button>
                </th>
                <td>
                  <em class="list">DSI팀 <button type="button" class="del"><i class="blind">삭제</i></button></em>
                  <em class="list">테스트999 상무/이글오피스운영 <button type="button" class="del"><i class="blind">삭제</i></button></em>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  알림대상
                  <button type="button" class="bn_authority"><i class="blind">알림대상</i></button>
                </th>
                <td>
                </td>
              </tr>
              <tr>
                <th scope="row">옵션</th>
                <td>
                  <div class="input-chk square noti">
                    <input type="checkbox" name="chk3" id="chk3-1">
                    <label for="chk3-1">공지</label>
                  </div>
                  <!-- <div class="input-chk square emergency">
                    <input type="checkbox" name="chk3" id="chk3-2">
                    <label for="chk3-2">긴급표시</label>
                  </div> -->
                  <div class="input-chk square urgency">
                    <input type="checkbox" name="chk3" id="chk3-2">
                    <label for="chk3-2">긴급표시</label>
                  </div>
                  <div class="input-chk square com-noti">
                    <input type="checkbox" name="chk3" id="chk3-3">
                    <label for="chk3-3">회사공지 게시</label>
                  </div>
                  <div class="input-chk square">
                    <input type="checkbox" name="chk3" id="chk3-4">
                    <label for="chk3-4">답변시 SNS알림</label>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">첨부</th>
                <td>
                  <div class="bn_list">
                    <div>
                      <button type="button" class="icon-btn del">항목제거</button>
                    </div>
                    <div>
                      <button type="button" class="icon-btn file">파일추가</button>
                    </div>
                  </div>
                  <div class="file-area"></div>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="file-edit">
                  <div class="file-edit-area"></div>
                </td>
              </tr>
              </tbody>
              </table>
            </div>
            <!-- <div class="btn-wrap">
              <button type="button" class="btn md line-type1">취소</button>
              <button type="button" class="btn md line-type1">임시저장</button>
              <button type="button" class="btn md">저장</button>
            </div> -->
          </div>
          <!--//notice write -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import boardLeft from "./boardLeft.vue";
import Datepicker from '@vuepic/vue-datepicker';
import selectView from "@/components/selectView.vue";

export default defineComponent({
  components: {
    boardLeft,
    Datepicker,
    selectView,
  },
  data() {
    return {
      isActive: false,
      nodata: false,
      date: new Date().toString(),
      time: {
          hours: new Date().getHours(),
          minutes: new Date().getMinutes()
      },
      optionLsit: [
        { value: '1주', label: '1주' },
        { value: '30일', label: '30일' },
        { value: '사용자정의', label: '사용자정의' },
        { value: '보존', label: '보존' },
      ],
    };
  },
  methods: {
    selectValue(val:any){
      console.log(val)
    },
    format(date:any) {
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      return `${year}.${month}.${day}`;
    },
    timeFormat(){
      return `10:10`;
    },
    onUpdateDate(){
      console.log("change date");
      // @ts-ignore
      // console.log(this.$utils.date.getUserTimeZone() + " : " + this.$utils.date.toString(this.date));
      // console.log("Asia/Seoul : " + this.$utils.date.transToAsiaSeoulDate(this.date).format("YYYY-MM-DD[T]HH:mm:ss"))
    },
    onUpdateTime() {
      console.log("change time");
      console.log(this.time);
    },
    wrapFull() {
      this.isActive = !this.isActive
    }
  },
  computed: {

  }
})
</script>