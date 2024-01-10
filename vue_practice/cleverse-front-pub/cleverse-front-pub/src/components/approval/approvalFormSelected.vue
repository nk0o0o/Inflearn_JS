<template>
  <div class='layout-wrap'>
    <div class='layout-body'>
      <approvalLeft/>
      <div class='layout-contents'>
        <div class='board-common_wrap'>
          <!-- header -->
          <div class="head_location">
            <span>전자결재</span>
            <em>결재작성하기</em>
          </div>
          <div class='board-common_header'>
            <h2>결재작성하기</h2>
          </div>
          <!-- //header -->
          <h3 class="flex jc-sb as title sub">
            <div>양식함</div>
            <select-view
              :propOptionList="optionLsit"
              :propPlaceholder="'운영팀'"
              :propClass="'type1 mw120 f-normal'"
              >
            </select-view>
          </h3>
          <!-- search -->
          <div class="board-write-search">
            <div>
              <form action="">
                  <div class="input-box">
                      <input type="text" required placeholder="검색어를 입력하세요.">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                      <div class="list">
                          <ul>
                              <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                              <li>Digital C.P.C. 기반 구축 </li>
                              <li>Digital Infra 구축</li>
                              <li>Digital Infra 구축</li>
                          </ul>
                      </div>
                  </div>
              </form>
            </div>
          </div>
          <!-- //search -->
          <div class="board-write-tree-form box-form">
            <div class="treeselect">
              <treeselect
                v-model="treeSelected"
                :max-height="500"
                :options="treeData"
                :default-expand-level="0"
                :always-open="true"
                :load-options="handleLoadOptions"
                @select="onSelect"
                @deselect="onDeselect"
                :multiple="isMultiple"
                :autoSelectDescendants="false"
                :flat="true"
              ></treeselect>
            </div>
            
            <div class="form-tbl">
              <div class="tbl-thead-only">
                <table>
                  <colgroup>
                    <col style="width:45%;">
                    <col style="width:auto;">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">양식명</th>
                      <th scope="col">설명</th>
                    </tr>
                  </thead>
                </table>
              </div>
              
              <div class='tbl type3 no-thead no-paging'>
                <table-lite
                  :columns='columns'
                  :rows='rows'
                  :total='100'
                  :messages='messages'/>
              </div>
            </div>
          </div>

          <h3 class="title sub">최근 기안한 결재문서</h3>
          <!-- board -->
          <div class='board-data favor'>
            <div>
              <div class='tbl type2'>
                <table-lite
                  :is-slot-mode='true'
                  :columns='columns2'
                  :rows='rows2'
                  :total='100'
                  :messages='messages'>
                  <template v-slot:subject="data">
                    <span class='txt' v-if="data.value.subject">{{data.value.subject}}</span>
                  </template>
                  <template v-slot:view>
                    <button type="button" class="btn sm line-type2">보기</button>
                  </template>
                </table-lite>
              </div>
              <p class='nodata' v-if='nodata'>등록된 데이터가 없습니다.</p>
            </div>
          </div>
          <!-- //board -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import approvalLeft from "./approvalLeft.vue"
import TableLite from "vue3-table-lite/ts";
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    approvalLeft,
    TableLite,
    Treeselect,
    selectView,
  },
  data() {
    return {
      nodata: true,
      treeSelected: null,
      optionLsit: [
        { value: '운영팀', label: '운영팀' },
        { value: '테스트부서 1-1', label: '테스트부서 1-1' },
        { value: '옵션명', label: '옵션명' },
      ],
      // define options
      treeData: [ 
        {
          id: 'a',
          label: 'a',
          children: [ 
            {
              id: 'aa',
              label: 'aa',
            }, {
              id: 'ab',
              label: 'ab',
            } 
          ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        },
        {
          id: 'e',
          label: 'e',
          children: [ 
            {
              id: 'f',
              label: 'f',
              children: [ 
                {
                  id: 'j',
                  label: 'j',
                }, {
                  id: 'k',
                  label: 'k',
                  children: [ 
                    {
                      id: 'ja',
                      label: 'ja',
                    }, 
                    {
                      id: 'ka',
                      label: 'ka',
                      children: [ 
                        {
                          id: 'jb',
                          label: 'jb',
                        }, 
                        {
                          id: 'kb',
                          label: 'kb',
                        }, 
                        {
                          id: 'jbc',
                          label: 'jbc',
                        }, 
                      ],
                    }, {
                        id: 'kah',
                        label: 'kah',
                        children: [ 
                          {
                            id: 'jbh',
                            label: 'jbh',
                          }, 
                          {
                            id: 'jbhc',
                            label: 'jbhc',
                          }, 
                        ]
                    } 
                  ],
                } 
              ],
            },
            {
              id: 'n',
              label: 'n',
              children: [ 
                {
                  id: 'aac',
                  label: 'aac',
                }, {
                  id: 'abc',
                  label: 'abc',
                } 
              ],
            },
            {
              id: 'g',
              label: 'g',
            } 
          ],
        }, {
            id: 'h',
            label: 'h',
        }, {
            id: 'i',
            label: 'i',
        }, {
            id: 'l',
            label: 'l',
        }
      ],
      columns: [
        {
          label: '양식명',
          field: 'title',
          width: '45%',
          columnClasses:"subject tl",
        },
        {
          label: '설명',
          field: 'subject',
          width: '',
          columnClasses:"tl",
        },
      ],
      rows: [
        {
          title: '내부 거래명세서',
          subject: '내부 거래명세서',
        },
        {
          title: '유연근무 신청',
          subject: '유연근무 신청서',
        },
        {
          title: '동호회 지원금 신청서',
          subject: '동호회 지원금 신청서',
        },
        {
          title: '내부 거래명세서',
          subject: '내부 거래명세서',
        },
        {
          title: '유연근무 신청',
          subject: '유연근무 신청서',
        },
        {
          title: '동호회 지원금 신청서',
          subject: '동호회 지원금 신청서',
        },
        {
          title: '내부 거래명세서',
          subject: '내부 거래명세서',
        },
        {
          title: '유연근무 신청',
          subject: '유연근무 신청서',
        },
        {
          title: '동호회 지원금 신청서',
          subject: '동호회 지원금 신청서',
        },
      ],
      columns2: [
        {
          label: '문서제목',
          field: 'title',
          width: '',
          columnClasses:"subject tl",
        },
        {
          label: '양식명',
          field: 'subject',
          width: '26%',
          columnClasses: ['subject tc'],
        },
        {
          label: '작성시간',
          field: 'date',
          width: '15%',
        },
        {
          label: '상세보기',
          field: 'view',
          width: '12%',
          columnClasses: 'tc'
        },
      ],
      rows2: [
        {
          id: 0,
          title: '반반차 신청',
          subject: '근태계획',
          date: '2022.02.22 13:00',
        },
        {
          id: 1,
          title: '유연근무 신청',
          subject: '유연근무 신청서',
          date: '2022.02.22 13:00',
        },
      ],
      totalRecordCount: 100,
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: 'No data',
      },
      dropItem: [
        { title: '문서제목', isToggle: true, isActive: false },
        { title: '기안자', isToggle: true, isActive: false },
        { title: '기안일', isToggle: true, isActive: false },
        { title: '현결재자', isToggle: true, isActive: false },
      ],
    };
  },
  methods: {
  },
  computed: {

  }
})
</script>