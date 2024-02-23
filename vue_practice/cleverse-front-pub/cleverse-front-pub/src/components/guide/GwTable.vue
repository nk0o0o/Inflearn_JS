<template>
  <section class="table">
<pre>

&lt;table-lite
  :is-slot-mode="true" // v-slot을 사용하기 위한 옵션
  :rowClasses="rowClasses" // tr 태그에 class 추가를 위한 옵션
  :columns="columns" // [필수] thead 정보
  :rows="rows" // [필수] tbody 정보
  :total="100" // [필수] 총 rows 정보
  :messages="messages" // [필수] 페이지 정보
  @row-clicked="rowClicked" //tr 행 클릭 이벤트 옵션
/&gt;

/* thead 정보 */
columns: [
  // 각 th 마다 정의
  {
    label: "제목", // 필드 명칭
    headerClasses: ["class-name", "class-name"], // 각 th 클래스
    columnClasses: ["class-name"], // 각 td 클래스 - display 속성과 함께 사용 할때는 []없이 "class-name"문자열로만 사용가능
    field: "title", // tbody의 td 매칭 값
    width: "3%", // width값 정의
    sortable: true, // 정렬 사용 여부
    isKey: true,
  },
]

/* tbody 정보 */
rows: [
  {
    title: '1.금융차세대TF팀 김한화 대리의 왕자님이 탄생했습니다~~',
    trClass: true, // key : value 형태로 지정해서 rowClasses: (row:any) 내에서 조건문으로 분기 하기.
  },

/* 페이징 정보 */
messages: {
  pagingInfo: "Showing {0}-{1} of {2}", //빈 값이면 노출 안됌
  pageSizeChangeLabel: "Row count:",// rows data 노출 갯수
  gotoPageLabel: "Go to page:",// 페이지 이동
  noDataAvailable: "No data", // no data 문구
},
</pre>
    <h1> table type 1</h1>
    <div class="tbl type1">
      <table-lite
        :columns="columns"
        :rows="rows"
        :total="100"
        :messages="messages"
        @row-clicked="rowClicked"
        />
    </div>

    <h1> table type 2</h1>
    <div class="tbl type2">
      <table-lite
        :is-slot-mode="true"
        :columns="columns3"
        :rowClasses="rowClasses"
        :rows="rows3"
        :total="100"
        :messages="messages"
        @row-clicked="rowClicked"
        >
        <template v-slot:btnSample="data">
          {{data.value.width}}
          <button type="button" class="btn md" @click="btnClickSample"><span>button</span></button>
        </template>
      </table-lite>
    </div>

    <h1> table type 2 - 디자인 적용</h1>
    <div class="tbl type2">
    <table-lite
        :is-slot-mode="true"
        :columns="columns2"
        :rows="rows2"
        :total="100"
        :messages="messages"
    />
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableLite from "vue3-table-lite/ts";

export default defineComponent({
  components: {
    TableLite,
  },
  data() {
    return {
      columns: [
        {
          label: "",
          field: "kind",
          width: "10%",
          columnClasses: ["kind"],
        },
        {
          label: "제목",
          field: "title",
          width: "15%",
          columnClasses: "tl",
          display: function (row:any) {
            return (
              `<span class="tit-sub">${row.titleSub}</span>
              <a href="javascript:void(0)" data-id="${row.id}">${row.title}</a>`
            );
          },
        },
        {
          label: "작성자",
          field: "writer",
          width: "10%",
          columnClasses: ['writer'],
        },
        {
          label: "작성일",
          field: "date",
          width: "15%",
          columnClasses: ['date'],
        },
        {
          label: "조회",
          field: "hit",
          width: "15%",
          columnClasses: ['hit'],
        },
        {
          label: "버튼",
          field: "btnSample",
          width: "15%",
          display: function (row:any) {
            return (
            `<button type="button" data-id="${row.id}" class="btn md">Button</button>`
            );
          },
        },
      ],
      rows: [
        {
          id: 0,
          kind: '경조사',
          titleSub: '[축탄생]',
          title: '1.금융차세대TF팀 김한화 대리의 왕자님이 탄생했습니다~~',
          writer: "TEST0",
          date: "15:23",
          hit: '0',
        },
        {
          id: 1,
          kind: '공지사항',
          titleSub: '[공지]',
          title: '2.금융차세대TF팀 김한화 대리의 왕자님이 탄생했습니다~~',
          writer: "TEST1",
          date: "2021.12.31",
          hit: '10'
        },
        {
          id: 2,
          kind: '공지사항',
          titleSub: '[안내]',
          title: '3.금융차세대TF팀 김한화 대리의 왕자님이 탄생했습니다~~',
          writer: "TEST1",
          date: "2021.12.31",
          hit: '10'
        }
      ],
      //style
      columns2: [
        {
          label: '',
          field: 'favor',
          width: '7%',
          headerClasses: ['favor'],
          display: function (row2:any): any {
            const favorIcon = row2.favorIcon ? '<span class="ico-favor"><em class="blind">Good</em></span>': row2.favor
            return ( `${favorIcon}` );
          },
        },
        {
          label: '게시판',
          field: 'kind',
          width: '12%',
          columnClasses: ['kind'],
        },
        {
          label: '번호',
          field: 'number',
          width: '5%',
          display: function (row2:any): any {
            const flagIcon = row2.flagIcon ? '<span class="ico-flag">flag</span>': row2.number
            return ( `${flagIcon}` );
          },
        },
        {
          label: '첨부',
          field: 'attach',
          width: "7%",
          display: function (row2:any): any {
            return (
              `<button type="button" class="btn-attach">첨부</button>`
            );
          },
        },
        {
          label: '제목',
          field: 'subject',
          width: '41%',
          columnClasses: ['subject'],
          display: function (row2:any): any {
            const newAlarm = row2.newAlarm ? `<em class="ico-alarm">alarm</em>`: ``,
                  newIcon = row2.newIcon ? `<em class="ico-new">NEW</em>`: ``,
                  reply = row2.reply ? `<em class="ico-reply">reply</em>`: ``,
                  replyNum = row2.replyNum ? `<em class="txt-num">[${row2.replyNum}]</em>`: ``,
                  subject = row2.subject ? `<span class="txt">${row2.subject}</span>`: ``
            return (
              `
                <div>
                  ${reply}
                  ${newAlarm}
                  ${subject}
                  ${replyNum}
                  ${newIcon}
                </div>
              `
            );
          },
        },
        {
          label: '작성자',
          field: 'writer',
          width: '12%',
        },
        {
          label: '등록일',
          field: 'date',
          width: '20%',
        },
        {
          label: '조회',
          field: 'check',
          width: '8%',
        },
      ],
      rows2: [
        {
          id: 0,
          kind: '공지사항',
          subject: '게시판 타이틀 영역1 게시판 타이틀 영역1 게시판 타이틀 영역1 게시판 타이틀 영역1 게시판 타이틀 영역1',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          newAlarm: true,
          flagIcon: true,
          newIcon: true,
          favorIcon: true,
          replyNum: 0,
          trClass: true,
        },
        {
          id: 1,
          favor: '',
          kind: '공지사항',
          number: 2,
          subject: '게시판 타이틀 영역2',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          txtNum: 120,
          replyNum: 30,
        },
        {
          id: 2,
          favor: '',
          kind: '공지사항',
          number: 3,
          subject: '게시판 타이틀 영역3',
          writer: '작성자명',
          date: '2022.02.22 13:00',
          check: '432',
          txtNum: 1,
          reply: true,
          replyNum: 0,
        },
      ],
      rowClasses: (row:any) => {
        if (row.trClass) {
          return ["del", "is-id-one"]; //조건문으로 분기 할 경우
        }
        return ["bbb", "other"];// default로 클래스 추가 하고 싶을 경우
      },
      rowClicked: (row:any) => {
        alert('Row click');
        console.log("Row clicked!", row);
      },
      columns3: [
        {
          label: "",
          field: "kind",
          width: "10%",
          columnClasses: ["kind"],
        },
        {
          label: "제목",
          field: "title",
          width: "15%",
          columnClasses: "tl",
          display: function (row:any) {
            return (
              `<span class="tit-sub">${row.titleSub}</span>
              <a href="javascript:void(0)" data-id="${row.id}">${row.title}</a>`
            );
          },
        },
        {
          label: "작성자",
          field: "writer",
          width: "10%",
          columnClasses: ['writer'],
        },
        {
          label: "작성일",
          field: "date",
          width: "15%",
          columnClasses: ['date'],
        },
        {
          label: "조회",
          field: "hit",
          width: "15%",
          columnClasses: ['hit'],
        },
        {
          label: "버튼",
          field: "btnSample",
          width: "15%",
          columnClasses: "tc",
          // display: function (row:any) {
          //   return (
          //   `<button type="button" data-id="${row.id}" class="btn md">Button</button>`
          //   );
          // },
        },
      ],
      rows3: [
        {
          id: 0,
          kind: '경조사',
          titleSub: '[축탄생]',
          title: '1.금융차세대TF팀 김한화 대리의 왕자님이 탄생했습니다~~',
          writer: "TEST0",
          date: "15:23",
          hit: '0',
          trClass: true,
        },
        {
          id: 1,
          kind: '공지사항',
          titleSub: '[공지]',
          title: '2.금융차세대TF팀 김한화 대리의 왕자님이 탄생했습니다~~',
          writer: "TEST1",
          date: "2021.12.31",
          hit: '10',
          trClass: false,
        },
        {
          id: 2,
          kind: '공지사항',
          titleSub: '[안내]',
          title: '3.금융차세대TF팀 김한화 대리의 왕자님이 탄생했습니다~~',
          writer: "TEST1",
          date: "2021.12.31",
          hit: '10',
          trClass: false,
        }
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
    }
  },
  methods:{
    btnClickSample($event:any){
      alert('버튼 클릭');

      $event.stopPropagation();//이벤트 전파 중단 추가
    }
  }
});
</script>
<style lang="css" scoped>
h1 {font-size: 30px; color: #000}
pre + h1 { margin-top: 50px; }
h1 ~ h1 {margin-top: 50px;}
pre{white-space: pre;font-size: 14px;}
</style>