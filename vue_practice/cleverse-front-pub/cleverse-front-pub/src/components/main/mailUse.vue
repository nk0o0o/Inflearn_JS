<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <div class="mail-use-wrap">
        <h2>메일 사용현황</h2>
        <!-- graph -->
        <div class="graph-cnt">
          <div class="chart-wrap">
            <div class="chart-wrap_inner">
              <DoughnutChart />
              <div class="chart-wrap_txt">
                <em>100.4</em>
                <span>/ 500MB</span>
              </div>
            </div>
            <ul class="chart-wrap_list">
              <li
                v-for="(item, index) in mails"
                :key="index"
              >
                {{item.name}} {{item.percent}}%
              </li>
            </ul>
          </div>
          <div class="guide">
            <ul class="list-dot">
              <li>사용량 그래프를 참고하여 편지함 용량을 관리 하세요.</li>
              <li>편지함 다운로드시 하위 편지함은 포함하지 않습니다.<br>지정한 편지함만 다운로드가 됩니다.</li>
              <li>[삭제] 수행시 하위 편지함도 함께 삭제가 됩니다.<br>삭제된 편지함 및 메일은 복원이 되지않습니다.</li>
              <li>[비우기] 수행시 해당 편지함의 전체 메일이 삭제가 됩니다.</li>
            </ul>
          </div>
        </div>
        <!-- tbl-list -->
        <div class="tbl type2 no-paging">
          <table-lite
              :is-slot-mode="true"
              :rowClasses="rowClasses"
              :columns="columns"
              :rows="rows"
              :total="100"
              :messages="messages"
            >
              <template v-slot:subject="data">
                <div class="title" :class="data.value.dep">
                  <div class="txt">{{ data.value.subject }}</div>
                </div>
              </template>

              <template v-slot:num="data">
                <span class="num-slash">
                  <em>{{data.value.num}}</em>{{data.value.num2}}
                </span>
              </template>

              <template v-slot:size="data">
                <span class="fc dark">{{data.value.size}}</span> 
                <span class="fc lgray mg-l10">{{data.value.size2}}</span>
              </template>

              <template v-slot:manage="data">
                <button type="button" class="btn sm" v-if="data.value.add">추가</button>
                <button type="button" class="btn sm line-type1" v-if="data.value.change">이름변경</button>
                <button type="button" class="btn sm line-type1" v-if="data.value.empty">비우기</button>
                <button type="button" class="btn sm line-type1" v-if="data.value.del">삭제</button>
                <button type="button" class="btn sm line-type2" v-if="data.value.down">다운로드</button>
                <button type="button" class="btn sm line-type2" v-if="data.value.listDown">목록다운로드</button>
              </template>
            </table-lite>
        </div>

        <!-- tbl-list -->
        <h3 class="tit-sub">메일외 사용량</h3>
        <div class="tbl list-type3 no-paging">
          <table-lite
              :is-slot-mode="true"
              :columns="columns2"
              :rows="rows2"
              :total="100"
              :messages="messages"
            >
              <template v-slot:subject="data">
                <div class="title" :class="data.value.dep">
                  <div class="txt">{{ data.value.subject }}</div>
                </div>
              </template>

              <template v-slot:num="data">
                <span class="num-slash" :class="data.value.single">
                  <em>{{data.value.num}}</em>{{data.value.num2}}
                </span>
              </template>

              <template v-slot:size="data">
                <span>{{data.value.size}}</span> 
                <span class="fc lgray mg-l10">{{data.value.size2}}</span>
              </template>
            </table-lite>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableLite from "vue3-table-lite/ts";
import DoughnutChart from './doughnutChart.vue'


export default defineComponent({
  components: {
    TableLite,
    DoughnutChart,
  },
  data() {
    return {
      columns: [
        {
          label: '이름',
          field: 'subject',
          width: '',
          columnClasses: ['subject'],
        },
        {
          label: '편지통수',
          field: 'num',
          width: '8%',
          columnClasses: ['tc'],
        },
        {
          label: '용량',
          field: 'size',
          width: '13%',
          columnClasses: ['tc'],
        },
        {
          label: '관리',
          field: 'manage',
          width: '43%',
          columnClasses: ['tl'],
        },
      ],
      rows: [
        {
          subject: '받은편지함',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          empty: true,
          down: true,
          listDown: true,
        },
        {
          dep: 'dep lv-1',
          subject: '1Depth',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          manage: '',
          add: true,
          empty: true,
          del: true,
          down: true,
          listDown: true,
        },
        {
          dep: 'dep lv-2',
          subject: '2Depth',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          add: true,
          change: true,
          del: true,
          empty: true,
          down: true,
          listDown: true,
        },
        {
          dep: 'dep lv-3',
          subject: '3Depth',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          add: true,
          change: true,
          del: true,
          empty: true,
          down: true,
          listDown: true,
        },
        {
          dep: 'dep lv-4',
          subject: '4Depth',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          add: true,
          change: true,
          del: true,
          empty: true,
          down: true,
          listDown: true,
        },
        {
          dep: 'dep lv-5',
          subject: '5Depth',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          empty: true,
          down: true,
          listDown: true,
        },
        {
          dep: 'dep lv-6',
          subject: '6Depth',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          empty: true,
          down: true,
          listDown: true,
        },
        {
          dep: 'dep lv-7',
          subject: '7Depth',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          empty: true,
          down: true,
          listDown: true,
        },
        {
          subject: '받은편지함',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
          empty: true,
          down: true,
          listDown: true,
        },
      ],
      columns2: [
        {
          label: '이름',
          field: 'subject',
          width: '',
          columnClasses: ['subject tl'],
        },
        {
          label: '개체수',
          field: 'num',
          width: '15%',
        },
        {
          label: '용량',
          field: 'size',
          width: '20%',
        },
      ],
      rows2: [
        {
          subject: '일정',
          num2: '13',
          size: '1.1MB',
          size2: '0.2%',
          single: 'single',
        },
        {
          dep: '',
          subject: '주소록',
          num2: '10',
          size: '1.1MB',
          size2: '0.2%',
          single: 'single',
        },
        {
          dep: 'dep lv-1',
          subject: '비즈니스용 Skype 대화 상대',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
        },
        {
          dep: 'dep lv-2',
          subject: '회사',
          num: '0',
          num2: '3',
          size: '1.1MB',
          size2: '0.2%',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      mails: [
        {
          name: '받은 편지함',
          percent: 12.5
        },
        {
          name: '보낸 편지함',
          percent: 12.5
        },
        {
          name: '임시 보관함',
          percent: 12.5
        },
        {
          name: '정크 메일',
          percent: 12.5
        },
        {
          name: '대화 내용',
          percent: 12.5
        },
        {
          name: '기타 사서함 용량',
          percent: 12.5
        },
        {
          name: '남은 용량',
          percent: 12.5
        },
      ]
    };
  },
  methods: {

  },
  computed: {
      
  }
})
</script>