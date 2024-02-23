<template>
  <div class="board-conts" :class="{'active':isActive}">
    <div class="board-select-set flex">
      <div class="board-tit">협업공간명 노출 영역</div>
      <div class="board-tit">테스크의 그룹명</div>
      <div class="dropdown-type1 select-box disabled" id="select-box1">
        <dropdown-menu
          :propisSlotMode="true"
          :propSelectText="selectSlotText"
          :propId="'select-box1'"
          @selected="selectSlotValue"
          :propLocation="'bottom'"
        >
          <template v-slot:body={on}>
            <ul class="dropdown-type1-list select-box-inner" :style="`width:${on.width}px`">
              <li
                v-for="(item, index) in dropItem"
                :key="index"
              >
                <div class="select-group-1">
                  <button type="button" v-on="on" :class="[`${item.class}`, dropSelectItem.itemId === item.itemId ? 'active' : '']" @click="dropClickItem(item)">
                    {{item.title}}
                  </button>
                  <span v-if="item.me" class="me">ME</span>
                </div>
              </li>
            </ul>
          </template>
        </dropdown-menu>
      </div>
    </div>

    <div class="edit_tit">
      <div class="board_tit_box">
        <input type="text" required class="h1" placeholder="보드의 제목을 입력해주세요.">
        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
      </div>
      <div class="calendar_box_grp">
        <div class="date">
          <Datepicker
            weekStart="0"
            v-model="rangeDate"
            range
            :format="rangeFormat"
            disabled="true"
            :enableTimePicker="false"/>
        </div>
      </div>
    </div><!-- //edit_tit -->

    <div class="board_txt">
      이미지, 파일, 표를 자유롭게 추가하여 테스크 로그를 작성해보세요.
    </div>

    <!-- <div class="board_txt">
      ↓↓↓아래의 본문 영역을 클릭하여 이미지,파일,표를 자유롭게 추가하여 작성해보세요.↓↓↓
    </div> -->

    <!-- <div class="board_txt">
      '@사용자이름'을 입력하여 대상자를 호출한 후 내용을 입력하거나 아래 툴바를 사용하여 이미지, 파일, 할 일 등을 등록할 수 있습니다.
    </div> -->

    <!-- <BoardTab1Cnt @toggledClass="getChildClass"/> -->
    <boardTab1-cnt/>

    <!-- 편집툴 S -->
    <ul class="edit_tool active">
      <li><button type="button" class="img">이미지 삽입</button></li>
      <li><button type="button" class="addfile">파일 추가</button></li>
      <li><button type="button" class="table">표 추가</button></li>
      <li><button type="button" class="division">구분선</button></li>
      <li><button type="button" class="colabo-board">협업 보드 링크</button></li>
    </ul>
    <!-- 편집툴 E -->

    <!-- 표 편집툴 S -->
    <ul class="tb-editor-tool active">
      <li class="division"><button class="tb-editor-tool-btn btn1"><span>상단행</span></button></li> <!-- 위행추가 -->
      <li><button class="tb-editor-tool-btn btn2"><span>하단행</span></button></li> <!-- 아래행추가 -->
      <li><button class="tb-editor-tool-btn btn3"><span>행삭제</span></button></li>
      <li class="division"><button class="tb-editor-tool-btn btn4"><span>좌측열</span></button></li> <!-- 앞열추가 -->
      <li><button class="tb-editor-tool-btn btn5"><span>우측열</span></button></li> <!-- 뒷열추가 -->
      <li><button class="tb-editor-tool-btn btn6"><span>열삭제</span></button></li>
      <li class="division"><button class="tb-editor-tool-btn btn7"><span>셀병합</span></button></li>
      <li><button class="tb-editor-tool-btn btn8"><span>셀분할</span></button></li>
      <li class="cell-background-box">
        <button class="tb-editor-tool-btn btn9"><span>셀배경</span></button>
        <div class="cell-background">
          <button style="background-color:#000"></button>
          <button style="background-color:#666" class="active"></button>
          <button style="background-color:#999"></button>
          <button style="background-color:#b8814c"></button>

          <button style="background-color:#f97723"></button>
          <button style="background-color:#eca90f"></button>
          <button style="background-color:#f3da33"></button>
          <button style="background-color:#ff0000"></button>

          <button style="background-color:#0024ff"></button>
          <button style="background-color:#34a6db"></button>
          <button style="background-color:#794ccd"></button>
          <button style="background-color:#682007"></button>

          <button style="background-color:#15a293"></button>
          <button style="background-color:#a2c10b"></button>
          <button style="background-color:#259c00"></button>
          <button style="background-color:#ed67cc"></button>
      </div>
      </li>
      <li class="division"><button class="tb-editor-tool-btn btn10"><span>측정렬</span></button></li>
      <li><button class="tb-editor-tool-btn btn11"><span>중앙정렬</span></button></li>
      <li><button class="tb-editor-tool-btn btn12"><span>우측정렬</span></button></li>
      <li class="division"><button class="tb-editor-tool-btn btn13"><span>볼드</span></button></li>
      <li><button class="tb-editor-tool-btn btn14"><span>이탤릭</span></button></li>
      <li><button class="tb-editor-tool-btn btn15"><span>취소선</span></button></li>
      <li><button class="tb-editor-tool-btn btn16"><span>언더라인</span></button></li>
      <li class="division"><button class="tb-editor-tool-btn btn17"><span>표삭제</span></button></li> <!-- 테이블삭제 -->
    </ul>
    <!-- 표 편집툴 E -->

    <opinion-search
      @boardActive="boardActive"
    />
    <board-comment
      @boardActive="boardActive"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import boardComment from "@/components/taskLog/boardComment.vue";
import opinionSearch from "@/components/taskLog/opinionSearch.vue";
import BoardTab1Cnt from "@/components/taskLog/BoardTab1Cnt.vue";
import dropdownMenu from "@/components/dropdownMenu3.vue"
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
    components: {
      opinionSearch,
      boardComment,
      BoardTab1Cnt,
      dropdownMenu,
      Datepicker,
    },
    data() {
      return {
        isActive: false,
        selectSlotText: '테스크의 그룹명',
        dropSelectItem:{
          itemId: 'selected1'
        },
        dropItem: [
          {
            title: '테스크의 그룹명테스크의 그룹명테스크의 그룹명',
            me:true,
            class: '',
            itemId: 'selected1'
          },
          {
            title: 'FINANCIAL SOLUTION1',
            me:false,
            class: '',
            itemId: 'selected2'
          },
          {
            title: '클러스터명',
            me:false,
            class: '',
            itemId: 'selected3'
          },
          {
            title: 'FINANCIAL SOLUTION4',
            me:false,
            class: '',
            itemId: 'selected4'
          },
          {
            title: 'BIG DATA / LENDING5',
            me:false,
            class: '',
            itemId: 'selected5'
          },
          {
            title: '클러스터명6',
            me:false,
            class: '',
            itemId: 'selected6'
          },
        ],

        dropItem4: [
          { title: '내 컴퓨터'},
          { title: '구글 드라이브' },
        ],
        rangeDate: [new Date(),new Date()],
      };
    },
    methods: {
      boardActive(){
        this.isActive = !this.isActive
      },
      dropClickItem(item: any){
        this.dropSelectItem.itemId = item.itemId
      },
      selectSlotValue(val:any){
        this.selectSlotText = val
      },
      rangeFormat(date:any) {
        const dayStart = ('0' + date[0].getDate()).slice(-2);
        const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
        const yearStart = date[0].getFullYear();

        const dayEnd = ('0' + date[1].getDate()).slice(-2);
        const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
        const yearEnd = date[1].getFullYear();

        return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
      },
    },
    computed: {

    }
});
</script>