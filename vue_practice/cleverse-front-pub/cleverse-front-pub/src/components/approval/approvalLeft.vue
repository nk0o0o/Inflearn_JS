<template>
  <div class='layout-left'>
    <div class='left-navi'>
      <h2 class='left-navi-tit'>전자결재</h2>
      <button type='button' class='btn round-type'>결재작성하기</button>
      <ul class='left-navi-list approval'>
        <li class='menu-01 active'>
          <button type='button' class='group-first-menu'>
            <span>결재함</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            결재함
            </v-tooltip>
          </button>
          <ul class='dep2'>
            <li>
              <button type='button' class='single-menu'>
                <span>결재할문서(일반문서)<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                결재할문서(일반문서)
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>결재할문서(회계포함)<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                결재할문서(회계포함)
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>일괄결재함(일반문서)<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                일괄결재함(일반문서)
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>주)한화 결재할문서<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                주)한화 결재할문서
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>결재진행문서<em>1</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                결재진행문서
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>결재예정문서<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                결재예정문서
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>참조문서<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                참조문서
                </v-tooltip>
              </button>
            </li>
          </ul>
        </li>
        <li class='menu-02 active'>
          <button type='button' class='group-first-menu'>
            <span>완료함</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            완료함
            </v-tooltip>
          </button>
          <ul class='dep2'>
            <li>
              <button type='button' class='single-menu'>
                <span>승인문서<em>203</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                승인문서
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>반송문서<em>14</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                반송문서
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>수신문서<em><i>2</i>/52</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                수신문서
                </v-tooltip>
              </button>
            </li>
          </ul>
        </li>
        <li class='menu-03 active'>
          <button type='button' class='group-first-menu'>
            <span>개인함</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            개인함
            </v-tooltip>
          </button>
          <ul class='dep2'>
            <li>
              <button type='button' class='single-menu'>
                <span>기안문서<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                기안문서
                </v-tooltip>
              </button>
            </li>
            <li>
              <button type='button' class='single-menu'>
                <span>전달한문서<em>0</em></span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                전달한문서
                </v-tooltip>
              </button>
            </li>
          </ul>
        </li>
        <li class='menu-05 active'>
          <button type='button' class='group-first-menu'>
            <span>공시문서</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            공시문서
            </v-tooltip>
          </button>
        </li>
        <li class='menu-04' :class="{ 'active': !isActive }">
          <button type='button' class='group-first-menu' @click="isActive = !isActive">
            <span>문서함</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            문서함
            </v-tooltip>
          </button>
          <!-- <ul class='dep2'>
            <li class='active'>
              <button type='button' class='active'>
                <span>디지털워크그룹</span>
                <v-tooltip
                  activator='parent'
                  anchor='end'
                  content-class='end tooltip-w mw-200'
                >
                디지털워크그룹
                </v-tooltip>
              </button>
              <ul class='dep3'>
                <li>
                  <button type='button' class='single-menu'>
                    <span>전체문서</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                  content-class='end tooltip-w mw-200'
                    >
                    전체문서
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button' class='single-menu'>
                    <span>기안문서</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                  content-class='end tooltip-w mw-200'
                    >
                    전체문기안문서서
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button' class='single-menu'>
                    <span>협조문서</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                  content-class='end tooltip-w mw-200'
                    >
                    협조문서
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button' class='single-menu'>
                    <span>수신문서</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                  content-class='end tooltip-w mw-200'
                    >
                    수신문서
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button' class='single-menu'>
                    <span>근태</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                  content-class='end tooltip-w mw-200'
                    >
                    근태
                    </v-tooltip>
                  </button>
                </li>
                <li>
                  <button type='button' class='single-menu'>
                    <span>대외발신문서</span>
                    <v-tooltip
                      activator='parent'
                      anchor='end'
                  content-class='end tooltip-w mw-200'
                    >
                    대외발신문서
                    </v-tooltip>
                  </button>
                </li>
              </ul>
            </li>
          </ul> -->
          <div class="treeselect approval-left_menu" :class="{ 'isActive': !isActive }">
            <treeselect
              v-model="treeSelected"
              :max-height="550"
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

        </li>
        <li class="etc-menu">
          <button type='button' class='single-menu gray-type doc'>
            <span>임시보관문서<em><i>2</i></em></span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            임시보관문서
            </v-tooltip>
          </button>
        </li>
        <li class="etc-menu">
          <button type='button' class='single-menu gray-type pay'>
            <span>그룹사결재 바로가기</span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
            그룹사결재 바로가기
            </v-tooltip>
          </button>
        </li>
      </ul>
      <div class='left-navi_foot'>
        <button type='button' class='favor'>
          <span>즐겨찾기</span>
          <v-tooltip
            activator='parent'
            anchor='end'
            content-class='end tooltip-w mw-200'
          >
          즐겨찾기
          </v-tooltip>
        </button>
        <button type='button' class='setting'>
          <div class="dropdown-type1 add-file">
            <dropdown-menu3
              :propisSlotMode="false"
              :propSelectText="selectText"
              :propItem="dropItem"
              :propClass="'select-box-inner'"
              :propDropSelectItem="dropSelectItem.itemId"
              @selected="selectValue"
              :propLocation="'top'"
            />
          </div>
          <v-tooltip
            activator='parent' 
            anchor='end'
            content-class='end tooltip-w mw-200'
          >
          {{selectText}}
          </v-tooltip>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import dropdownMenu3 from "@/components/dropdownMenu3.vue"
// @ts-ignore
import Treeselect from 'vue3-treeselect'

export default defineComponent({
  components: {
    dropdownMenu3,
    Treeselect,
  },
  data() {
    return {
      isActive: true,
      selectText:'설정',
      dropSelectItem:{
        itemId: 'selected1'
      },
      dropItem: [
        { title: '기본설정', class: 'menu1', itemId: 'selected1' },
        { title: '목록정렬 설정', class: 'menu2', itemId: 'selected2' },
        { title: '비밀번호 설정', class: 'menu3', itemId: 'selected3' },
        { title: '알림 설정', class: 'menu4', itemId: 'selected4' },
        { title: '개인 결재선 설정', class: 'menu5', itemId: 'selected5' },
        { title: '부재 설정', class: 'menu6', itemId: 'selected6' },
      ],
      treeSelected: null,
      treeData:[
        {
          id: '1',
          label: '디지털워크그룹',
          children: [
            {
              id: '1-2',
              label: '전체문서',
            },
            {
              id: '1-3',
              label: '기안문서',
            },
            {
              id: '1-4',
              label: '협조문서',
            },
            {
              id: '1-5',
              label: '수신문서',
            },
          ],
        },
        {
          id: '2',
          label: '보안운영팀',
        },
        {
          id: '3',
          label: 'ICT부문',
          children: [
            {
              id: '3-1',
              label: '데이터센터',
              children: [
                {
                  id: '3-2',
                  label: 'SharedService담당SharedService담당',
                  children: [
                    {
                      id: '3-2-1',
                      label: 'EP',
                    },
                    {
                      id: '3-2-2',
                      label: '디지털워크그룹디지털워크그룹디지털워크그룹디지털워크그룹',
                    }
                  ],
                },
                {
                  id: '3-3',
                  label: 'SharedService2담당',
                }
              ],
            },
            {
              id: '3-2',
              label: '시스템운영팀',
            }
          ],
        },
      ],
    }
  },
  methods:{
    selectValue(val:any){
      this.selectText = val.title
      this.dropSelectItem.itemId = val.selected
    },

  },
})
</script>