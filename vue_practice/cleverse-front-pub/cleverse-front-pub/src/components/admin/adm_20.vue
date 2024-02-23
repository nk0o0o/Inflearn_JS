<template>
	<div class="inner">
		<div class="sect-header">
			<div class="left">
				<h3>회사별 설정</h3>
			</div>
		</div>

		<div class="tbl">
      <div class="tbl_header">
        <div class="classification">
          <select-view
            :propOptionList="optionList"
            :propClass="'type1'"
            :propCloseOn="true"
            propPlaceholder="이글오피스운영"
            propValue="이글오피스운영"
          />
          <button type="button" class="btn sm line-type1">저장</button>
          <button type="button" class="btn sm line-type1">삭제</button>
        </div>
      </div>

      <div class="tbl">
        <table>
          <colgroup>
            <col style="width:20%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
          <tr>
              <th scope="row">회사게시판 초기화면 설정</th>
              <td>
                <label class="select-default">
                  <select>
                    <option>선택된 게시판 제외 또는 권한체크를 예외로 한 최근 게시글 목록 표시</option>
                    <option>옵션명</option>
                    <option>옵션명</option>
                  </select>
                </label>
              </td>
          </tr>
          <tr>
              <th scope="row">게시판 트리 영역</th>
              <td></td>
          </tr>
          <tr>
              <th scope="row">첫번째 레벨 게시판 펼쳐 보기</th>
              <td>
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_1">
                  <label for="radCont1_1">사용</label>
                </div>
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_2" checked>
                  <label for="radCont1_2">사용안함</label>
                </div>
              </td>
          </tr>
          <tr>
              <th scope="row">펼칠 게시판 선택</th>
              <td>
                <form action="">
                  <div class="input-box type1">
                    <input type="text" required placeholder="">
                  </div>
                  <button type="button" class="btn md line-type2">추가</button>
                  <button type="button" class="btn md line-type2">삭제</button>
                </form>
              </td>
          </tr>
          <tr>
              <th scope="row">최근 게시글 영역</th>
              <td></td>
          </tr>
          <tr>
              <th scope="row">권한체크 예외 설정</th>
              <td>
                
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_3">
                  <label for="radCont1_3">사용</label>
                </div>
                <div class="input-radio h16">
                  <input type="radio" name="radCont1" id="radCont1_4">
                  <label for="radCont1_4">사용안함</label>
                </div>
                <span class="fc-red mg-l10">* [사용]을 선택하면 읽기 권한이 없어도 게시글이 최근 게시글 리스트에  표시, 조회되며 [제외할 게시판 선택]은 사용할 수 없습니다.</span>
              </td>
          </tr>
          </tbody>
        </table>
        <div class="tbl-treeselect">
          <div class="tit">제외할 게시판 선택</div>
          <div class="tree-wrap">
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
            <div class="treeselect-move_btn">
              <button type="button" class="btn right">우측으로 이동</button>
              <button type="button" class="btn left">좌측으로 이동</button>
            </div>
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
          </div>
        </div>
      </div>
				
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import selectView from "@/components/selectView.vue";
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'

export default defineComponent({
  components: {
    selectView,
    Treeselect,
  },
	data() {
    return {
      optionList: [
        { value: '이글오피스운영', label: '이글오피스운영' },
        { value: '옵선명', label: '옵선명' },
        { value: '옵선명', label: '옵선명' },
      ],
      // define the default value
					treeSelected: null,
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
      isMultiple: true,
    }
	},
})
</script>
