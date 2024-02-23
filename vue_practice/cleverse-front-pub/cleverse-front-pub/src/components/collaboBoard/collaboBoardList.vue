<template>
  <div class="layout-wrap collabo-board-wrap">
    <div class="layout-body">
      <collabo-board-left/>
      <div class="layout-contents">
        <div class="board-common_wrap no-cnt" v-if="noData">
          <!-- No Data -->
        </div>
        <div class="board-common_wrap" v-else>
          <!-- header -->
          <div class="board-common_header">
            <h2 class="add_icon">
              <span class="tit">차세대 그룹웨어 구축 (협업공간명)</span>
              <span class="end">종료</span>
            </h2>
            <div class="flex collabo-board_header">
              <div>
                <span class="member-img-Combination">
                  <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                  <div class="dropdown-collab-type9">
                  <personnel-taskdropdown
                    :propCollaboMem="true"
                  />
                </div>
                </span>
              </div>
              <div>
                <div class="dropdown-type1 select-box disabled">
                  <dropdown-menu3
                    :propisSlotMode="false"
                    :propSelectText="selectText"
                    :propItem="dropItem"
                    :propDropSelectItem="dropSelectItem.itemId"
                    @selected="selectValue"
                    :propLocation="'bottom end'"
                  />
                </div>
              </div>
              <div>
                <div class="dropdown-type1">
                  <dropdown-menu3
                    :propisSlotMode="false"
                    :propItem="dropItem2"
                    :propDropSelectItem="dropSelectItem2.itemId"
                    @selected="selectValue2"
                    :propLocation="'bottom end'"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- //header -->

          <!-- content -->
          <div class="collabo-board_content">
            <div class="tab-type3">
              <ul class="tab-menu">
                <li v-for="(tab, index) in tabsType1" :class="{ active: currentTab===index }" :key="index">
                  <button type="button" @click="currentTab = index">{{tab}}</button>
                </li>
              </ul>
            </div>

            <div v-show="currentTab == 0">
              <div class="collabo-board_list">
                <div class="collabo-board_list_header">
                  <div>
                    <button type="button" class="bn_folder_close" :class="{ 'active': isFold }" @click="folderClose">
                      <span>폴더 전체 접기</span>
                      <span>폴더 전체 펼치기</span>
                    </button>
                  </div>
                  <div class="search">
                    <form action="">
                      <div class="input-box search-type3" :class="{ 'active' : isActive }">
                        <input type="text" required placeholder="검색어를 입력하세요.">
                        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                        <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                      </div>
                    </form>
                    <button type="button" class="bn_active" :class="{ 'active' : isActive }" @click="isActive = !isActive"><i class="blind">검색 활성화</i></button>
                  </div>
                  <div class="favor_wrap">
                    <span class="favor" @click="isFavor = !isFavor" :class="{ 'active' : isFavor }"><i class="blind">즐겨찾기</i></span>
                  </div>
                  <div class="drop_wrap">
                    <div class="dropdown-type1 select-box">
                      <dropdown-menu3
                        :propisSlotMode="false"
                        :propSelectText="selectText3"
                        :propItem="dropItem3"
                        :propDropSelectItem="dropSelectItem3.itemId"
                        @selected="selectValue3"
                        :propLocation="'bottom'"
                      />
                    </div>
                  </div>
                  <div class="bn_wrap">
                    <button type="button" class="btn">폴더</button>
                  </div>
                </div>

                <div class="search-result mg-t10">
                  <div>
                    <b class="word">"김한화"</b> 검색 결과 총 <b class="num">12</b> 건
                  </div>
                  <button type="button" class="btn-refresh">새로고침</button>
                </div>

                <div class="collabo-board_folder_header">
                  <div>
                    <form action="">
                      <div class="input-box type1">
                        <input type="text" required placeholder="폴더명 입력">
                        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      </div>
                    </form>
                  </div>
                  <div class="folder_bn_wrap">
                    <button type="button" class="cancel">취소</button>
                    <button type="button" class="save">저장</button>
                  </div>
                </div>

                <ul class="collabo-board_folder_list">
                  <li v-for="(item, index) in folders" :key="index" :class="{ 'open' : item.open }">
                    <div class="head" :class="{ 'editting' : !item.folderName }">
                      <div class="txt" v-show="item.folderName">
                        <span>{{item.info}}</span>
                      </div>
                      <div class="collabo-board_folder_header" v-show="!item.folderName">
                        <div>
                          <form action="">
                            <div class="input-box type1">
                              <input type="text" required placeholder="폴더명 입력" :value="item.info">
                              <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            </div>
                          </form>
                        </div>
                        <div class="folder_bn_wrap">
                          <button type="button" class="cancel" @click="item.folderName = !item.folderName">취소</button>
                          <button type="button" class="save" @click="item.folderName = !item.folderName">저장</button>
                        </div>
                      </div>

                    </div>
                    <div class="section_view" :class="{ 'open' : item.open }">
                      <draggable
                        class="list"
                        tag="ul"
                        handle=".handle"
                        group="collabo-list"
                        v-model="item.list"
                        @start="isDragging = true"
                        @end="checkMove"
                        v-bind="dragOptions"
                      >
                        <template #item="{ element }">
                          <li>
                            <i class="handle"></i>
                            <div class="board">
                              <span class="favor_wrap">
                                <span class="favor s" @click="element.isFavor = !element.isFavor" :class="{ 'active' : element.isFavor }"><i class="blind">즐겨찾기</i></span>
                              </span>
                              <span class="txt">{{element.info}}</span>
                            </div>
                            <div class="member" v-if="element.member">{{element.member}}</div>
                            <div v-if="element.count">
                              <span class="comment" v-if="element.count > 99">99+</span>
                              <span class="comment" v-else>{{element.count}}</span>
                            </div>
                            <div class="update" v-if="element.update">
                              <span :class="{ 'warn': element.warn }"><em :class="{ 'current': element.current }">{{element.update}}</em></span>
                            </div>
                            <div class="name" v-if="element.name">
                              <span class="dropdown-type2 tooltip text">
                                <dropdown-menu2
                                  :propName="element.name"
                                  :propItem="dropItem5"
                                  :propClass="'dropdown-type2-list type2'"
                                >
                                </dropdown-menu2>
                              </span>
                            </div>
                          </li>
                        </template>
                      </draggable>
                      <!-- 드래그앤드랍 없는 경우 -->
                      <!-- <ul class="list">
                        <li v-for="(item, index) in item.list" :key="index">
                          <div class="board">
                            <span class="favor_wrap">
                              <span class="favor s" @click="item.isFavor = !item.isFavor" :class="{ 'active' : item.isFavor }"><i class="blind">즐겨찾기</i></span>
                            </span>
                            <span class="txt">{{item.info}}</span>
                          </div>
                          <div class="member" v-if="item.member">{{item.member}}</div>
                          <div v-if="item.count">
                            <span class="comment" v-if="item.count > 99">99+</span>
                            <span class="comment" v-else>{{item.count}}</span>
                          </div>
                          <div class="update" v-if="item.update">
                            <span :class="{ 'warn': item.warn }"><em :class="{ 'current': item.current }">{{item.update}}</em></span>
                          </div>
                          <div class="name" v-if="item.name">
                            <span class="dropdown-type2 tooltip text">
                              <dropdown-menu2
                                :propName="item.name"
                                :propItem="dropItem5"
                                :propClass="'dropdown-type2-list type2'"
                              >
                              </dropdown-menu2>
                            </span>
                          </div>
                        </li>
                      </ul> -->
                      <!-- //드래그앤드랍 없는 경우 -->
                      <div class="collabo-board_folder_foot" :class="{'active': item.active}">
                        <div class="txt_field">
                          <form action="">
                            <div class="input-box type1">
                              <input type="text" required placeholder="협업보드명 입력">
                              <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            </div>
                          </form>
                        </div>
                        <div>
                          <div class="dropdown-type1 select-box">
                            <dropdown-menu3
                              :propisSlotMode="false"
                              :propSelectText="selectText"
                              :propItem="dropItem"
                              :propDropSelectItem="dropSelectItem.itemId"
                              @selected="selectValue"
                              :propLocation="'bottom end'"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <div class="date line-type f-18">
                              <Datepicker
                                placeholder="시작일 선택 - 종료일 선택"
                                v-model="rangeDate"
                                :format="rangeFormat2"
                                range
                                locale="ko"
                                cancelText="취소"
                                selectText="저장"
                                :enableTimePicker="false"/>
                            </div>
                          </div>
                        </div>
                        <div class="folder_bn_wrap">
                          <button type="button" class="cancel" @click="item.active = !item.active">취소</button>
                          <button type="button" class="save">저장</button>
                        </div>
                      </div>
                      <div class="collabo-board_folder_add" :class="{'active': item.active}">
                        <button type="button" @click="item.active = !item.active">협업보드 추가</button>
                        <button type="button" disabled>협업보드 추가</button>
                      </div>
                    </div>
                    <button type="button" class="btn_section_view" @click="item.open = !item.open" v-show="item.folderName"><i class="blind">열기/닫기</i></button>
                    <!-- <div class="edit">
                      <div class="dropdown-type1">
                        <dropdown-menu3
                          :propisSlotMode="false"
                          :propItem="dropItem4"
                          :propDropSelectItem="dropSelectItem4.itemId"
                          @selected="selectValue4"
                          :propLocation="'bottom end'"
                          propClass="folder_editing"
                        >
                          <template v-slot:body>
                            <ul class="dropdown-type1-list">
                              <li>
                                <button type="button">편집</button>
                              </li>
                            </ul>
                          </template>
                        </dropdown-menu3>
                      </div>
                    </div> -->
                    <div class="sort" v-if="item.folderName" :id="`select-box${index}`">
                      <div class="dropdown-collab-type1 sort-select">
                        <dropdown-menu3
                          :propisSlotMode="true"
                          :propId="`select-box${index}`"
                          :propType="true"
                          :propLocation="'bottom end'"
                          :clickToHide="true"
                          @selectedId="selectSlotValue"
                        >
                          <template v-slot:img>
                            <img class="img-sector" :src="require(`@/assets/imgs/icon-svg/${item.imgSector}`)" alt="아이콘">
                          </template>
                          <template v-slot:body={on}>
                            <div class="sort-select__list" :style="`width:${on.width}px`">
                              <div
                                class="item"
                                v-for="(item, idx) in item.dropItem"
                                :key="idx"
                                :value="idx"
                                :class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
                              >
                                <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item, index)">
                                  {{ item.title }}
                                </button>
                              </div>
                            </div>
                          </template>
                        </dropdown-menu3>
                      </div>
                    </div>
                    <div class="edit" v-if="item.folderName">
                      <div class="dropdown-type1"  id="select-box2">
                        <dropdown-menu3
                          :propisSlotMode="true"
                          :propLocation="'bottom end'"
                          :propId="'select-box2'"
                        >
                          <template v-slot:body>
                            <ul class="dropdown-type1-list folder_editing">
                              <li><button type="button" @click="item.folderName = !item.folderName">편집</button></li>
                              <li><button type="button">삭제</button></li>
                            </ul>
                          </template>
                        </dropdown-menu3>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="collabo-board_folder_header">
                  <div>
                    <form action="">
                      <div class="input-box type1">
                        <input type="text" required placeholder="폴더명 입력">
                        <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      </div>
                    </form>
                  </div>
                  <div class="folder_bn_wrap">
                    <button type="button" class="cancel">취소</button>
                    <button type="button" class="save">저장</button>
                  </div>
                </div>

                <!-- <div class="collabo-board_folder_add center">
                  <button type="button">폴더 추가</button>
                  <button type="button" disabled>폴더 추가</button>
                </div> -->

              </div>
              <Paging
                v-model="page"
                :records="150"
                :per-page="25"
                :options="{hideCount: true}"
                @paginate="myCallback"
              />
            </div>
            <div v-show="currentTab == 1">
              <div class="collabo-board_list_header">
                <div>
                  <button type="button" class="btn sm line-type2">다운로드</button>
                  <span class="num">총 <em>10</em>건</span>
                </div>
                <div class="search">
                  <form action="">
                    <div class="input-box search-type3" :class="{ 'active' : isActive }">
                      <input type="text" required placeholder="검색어를 입력하세요.">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                      <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                      <div class="error" v-if="error">에러 내용입력</div>
                    </div>
                  </form>
                  <button type="button" class="bn_active" :class="{ 'active' : isActive }" @click="isActive = !isActive"><i class="blind">검색 활성화</i></button>
                </div>
                <div class="drop_wrap">
                  <div class="dropdown-type1 file_list">
                    <dropdown-menu3
                      :propisSlotMode="true"
                      :propLocation="'bottom end'"
                    >
                      <template v-slot:body={on}>
                        <div class="dropdown-type1-list select-file-inner" :style="`width:${on.width}px`">
                          <strong>파일 유형</strong>
                          <ul>
                            <li
                              v-for="(item, index) in dropItem7"
                              :key="index"
                            >
                              <div class="input-chk square">
                                <input type="checkbox" :id="`chk${item.id}`">
                                <label :for="`chk${item.id}`">{{item.title}}</label>
                              </div>
                            </li>
                          </ul>
                          <div class="file_list_bn">
                            <button type="button" class="btn sm line-type1" v-on="on">취소</button>
                            <button type="button" class="btn sm">적용</button>
                          </div>
                        </div>
                      </template>
                    </dropdown-menu3>
                  </div>
                </div>
              </div>

              <div class="tbl type4">
                <table-lite
                  :has-checkbox="true"
                  :is-slot-mode="true"
                  :columns="columns"
                  :rows="rows"
                  :total="100"
                  :messages="messages"
                  :sortable="sortable"
                >
                  <template v-slot:subject="data">
                    <i class="ico-file inline ppt" v-if="data.value.ppt"></i>
                    <a class="txt" v-if="data.value.subject" href="javascript:void(0)" :data-id="data.value.id">{{data.value.subject}}</a>
                  </template>
                  <template v-slot:manager="data">
                    <div class="dropdown-type2 tooltip text">
                      <dropdown-menu2
                        :propName="data.value.manager"
                        :propItem="dropItem5"
                        :propClass="'dropdown-type2-list type2'"
                      >
                      </dropdown-menu2>
                    </div>
                  </template>
                  <template v-slot:more="data">
                    {{data.value.more}}
                    <div class="dropdown-type1">
                      <dropdown-menu3
                        :propisSlotMode="false"
                        :propItem="dropItem6"
                        :propLocation="'bottom end'"
                      />
                    </div>
                  </template>

                </table-lite>
              </div>
            </div>
            <div v-show="currentTab == 2">
              <div class="collabo-board_schedule_wrap">

                <div class="collabo-board_schedule_section" v-for="(item, index) in schedules" :key="index" :class="{'hidden': item.hidden}">
                  <div class="schedule_select">
                    <button type="button" @click="item.hidden = !item.hidden">{{item.date}}</button>
                  </div>
                  <div class="cont_wrap" v-for="(item, index) in item.section" :key="index">
                    <div class="cont">
                      <span class="update" :class="{ 'current' : item.current }"><em>UPDATE</em>{{item.update}}</span>
                      <span class="classification">{{item.class}}</span>
                      <span class="tit">{{item.title}}</span>
                      <span class="date_name">
                        <span class="dates">
                          {{item.date}}
                          <span class="ico new" v-if="item.new"><i class="blind">NEW</i></span>
                        </span>
                        <span>{{item.name}}</span>
                      </span>
                      <span class="history" v-if="item.history">
                        <button type="button" @click="item.isActive =! item.isActive" :class="{ 'active' : item.isActive }"><em>{{item.history}}</em>개의 히스토리</button>
                      </span>
                      <div class="history_list" v-if="item.history" :class="{ 'active' : item.isActive }">
                        <ul>
                          <li v-for="(item, index) in item.historyLists" :key="index">
                            <span class="update">{{item.update}}</span>
                            <span class="txt">{{item.txt}}</span>
                            <span class="dates">{{item.date}}</span>
                            <span class="name">{{item.name}}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <!-- //content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import collaboBoardLeft from "./collaboBoardLeft.vue"
import draggable from "vuedraggable";
import personnelTaskdropdown from '@/components/personnelTaskdropdown.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue";
import dropdownMenu3 from "@/components/dropdownMenu3.vue"
import Datepicker from '@vuepic/vue-datepicker'
import TableLite from "vue3-table-lite/ts"

//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    collaboBoardLeft,
    draggable,
    personnelTaskdropdown,
    Paging,
    Datepicker,
    dropdownMenu2,
    dropdownMenu3,
    TableLite,
  },
  data() {
    return {
      error: false,
      noData: false,
      isDragging: false,
      rangeDate: [new Date(),new Date()],
      isActive: false,
      isFavor: false,
      isFold: false,
      page: 1,
      currentTab: 0,
      tabsType1: ['목록', ' 파일', ' 히스토리'],
      selectText:'전체공개',
      selectText3:'최신순',
      dropSelectItem:{
        itemId: 'selected1'
      },
      dropItem: [
        { title: '전체공개', itemId: 'selected1' },
        { title: '멤버공개', itemId: 'selected2' },
      ],
      dropSelectItem2:{
        itemId: 'selected1'
      },
      dropItem2: [
        { title: '협업공간 URL 복사', itemId: 'selected1'  },
        { title: '설정', itemId: 'selected2'  },
      ],
      dropSelectItem3:{
        itemId: 'selected1'
      },
      dropItem3: [
        { title: '기본순', itemId: 'selected1' },
        { title: '최신순', itemId: 'selected2' },
        { title: '이름순', itemId: 'selected3' },
      ],
      // dropSelectItem4:{
      //   itemId: 'selected1'
      // },
      // dropItem4: [
      //   { title: '편집', itemId: 'selected1' },
      //   { title: '삭제', itemId: 'selected2' },
      // ],
      dropItem5: {
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
      dropItem6: [
        { title: '다운로드', itemId: 'selected1'  },
        { title: '파일 삭제', itemId: 'selected2'  },
      ],
      dropItem7: [
        {
          id: 0,
          title: 'PPT',
          class: 'menu1',
          itemId: 'selected1'
        },
        {
          id: 1,
          title: 'EXCEL',
          class: 'menu2',
          itemId: 'selected2'
        },
        {
          id: 2,
          title: 'WORD',
          class: 'menu3',
          itemId: 'selected3'
        },
        {
          id: 3,
          title: 'HWP',
          class: 'menu4',
          itemId: 'selected4'
        },
        {
          id: 4,
          title: 'PDF',
          class: 'menu5',
          itemId: 'selected5'
        },
        {
          id: 5,
          title: 'IMG',
          class: 'menu6',
          itemId: 'selected6'
        },
      ],
      optionLsit: [
          { value: 'menu1', label: '어제' },
          { value: 'menu2', label: '오늘' },
          { value: 'menu3', label: '2022.05.12' },
          { value: 'menu4', label: '2022.05.13' },
          { value: 'menu5', label: '2022.05.14' },
      ],
      folders: [
        {
          open: true,
          info: '미지정 폴더',
          listName: 'list1',
          folderName: true,
          active: false,
          imgSector: 'icon-navigation-sortbyname.svg',
          // dropSelectItem:{
          //   itemId: 'selected1'
          // },
          dropItem: [
            {
              title: '최신순',
              class: 'menu1',
              itemId: 'selected1-1',
              img: 'icon-navigation-sortbylatest.svg'
            },
            {
              title: '이름순',
              class: 'menu2',
              itemId: 'selected1-2',
              img: 'icon-navigation-sortbyname.svg'
            },
          ],
          list: [
            {
              isFavor: false,
              info: '협업보드명111111111111',
              member: '멤버 공개',
              count: 10,
              warn: true,
              current: false,
              update: '어제',
              name: '김한화',
              
            },
            {
              isFavor: true,
              info: '협업보드명222222222222222',
              member: '일반 공개',
              count: 999,
              current: true,
              warn: true,
              update: '2021.03.18',
              name: '강한화',
            },
            {
              isFavor: true,
              info: '협업보드명222222222222222',
              member: '일반 공개',
              count: 999,
              current: false,
              warn: false,
              update: '2021.03.18',
              name: '강한화',
            },
          ],
        },
        {
          open: false,
          info: '00.사전준비',
          listName: 'list2',
          folderName: true,
          active: false,
          imgSector: 'icon-navigation-sortbyname.svg',
          // dropSelectItem:{
          //   itemId: 'selected1'
          // },
          dropItem: [
            {
              title: '최신순',
              class: 'menu1',
              itemId: 'selected2-1',
              img: 'icon-navigation-sortbylatest.svg'
            },
            {
              title: '이름순',
              class: 'menu2',
              itemId: 'selected2-2',
              img: 'icon-navigation-sortbyname.svg'
            },
          ],
          list: [
            {
              isFavor: false,
              info: '협업보드명33333333333333',
              member: '멤버 공개',
              count: 10,
              warn: true,
              update: '어제',
              name: '김한화',
            },
          ],
        },
        {
          open: false,
          info: '01. 아키텍쳐 설계',
          folderName: true,
          active: false,
          imgSector: 'icon-navigation-sortbyname.svg',
          // dropSelectItem:{
          //   itemId: 'selected1'
          // },
          dropItem: [
            {
              title: '최신순',
              class: 'menu1',
              itemId: 'selected3-1',
              img: 'icon-navigation-sortbylatest.svg'
            },
            {
              title: '이름순',
              class: 'menu2',
              itemId: 'selected3-2',
              img: 'icon-navigation-sortbyname.svg'
            },
          ],
          list: [
            {
              isFavor: false,
              info: '협업보드명444444444444444',
              member: '멤버 공개',
              count: 10,
              warn: true,
              update: '어제',
              name: '김한화',
            },
          ],
        }
      ],
      columns: [
        {
          label: '구분',
          field: 'division',
          width: '15%',
          columnClasses: ['division'],
        },
        {
          label: '파일명',
          field: 'subject',
          width: '45%',
          columnClasses: ['subject'],
          sortable: true,
          isKey: true,
        },
        {
          label: '마지막 업데이트',
          field: 'update',
          width: '15%',
          sortable: true,
          isKey: true,
        },
        {
          label: '생성/수정자',
          field: 'manager',
          width: '13%',
          sortable: true,
          isKey: true,
        },
        {
          label: '더보기',
          field: 'more',
          width: '11%',
        },
      ],
      rows: [
        {
          id: 0,
          division : '보드',
          ppt: true,
          subject: '한화생명_ppt파일_첨부시이렇게표시됩니다.pptx',
          update: '2021.04.23',
          manager: '김한화',
          more: '',
        },
        {
          id: 1,
          division : '보드',
          ppt: true,
          subject: '한화생명_ppt파일_첨부시이렇게표시됩니다.pptx',
          update: '2021.04.23',
          manager: '김한화',
          more: '',
        },
        {
          id: 2,
          division : '보드',
          ppt: true,
          subject: '한화생명_ppt파일_첨부시이렇게표시됩니다.pptx',
          update: '2021.04.23',
          manager: '김한화',
          more: '',
        },
      ],
      totalRecordCount: 100,
      sortable: {
        order: "id",
        sort: "asc",
      },
      messages: {
        pagingInfo: '',
        pageSizeChangeLabel: 'Row count: 10',
        gotoPageLabel: 'Go to page: 3',
        noDataAvailable: '파일이 없습니다.',
      },
      schedules: [
        {
          hidden: false,
          date: '어제',
          section: [
            {
              current: true,
              update: '호출 추가',
              class: '03. 디자인',
              title: '[디자인] 02. Home',
              date: '2022.05.13',
              new: true,
              name: '김주희',
              history: 51,
              isActive: false,
              historyLists: [
                {
                  update: 'UPDATE',
                  txt: '이미지 추가',
                  date: '2022-05-13',
                  name: '김주희'
                },
                {
                  update: 'UPDATE',
                  txt: '이미지 삭제',
                  date: '2022-05-13',
                  name: '김주희'
                },
                {
                  update: 'UPDATE',
                  txt: '이미지 추가',
                  date: '2022-05-13',
                  name: '김주희'
                },
                {
                  update: 'UPDATE',
                  txt: 'URL 삭제',
                  date: '2022-05-13',
                  name: '김주희'
                },
                {
                  update: 'UPDATE',
                  txt: '파일 추가',
                  date: '2022-05-13',
                  name: '김주희'
                },
                {
                  update: 'UPDATE',
                  txt: '파일 추가',
                  date: '2022-05-13',
                  name: '김주희'
                },
                {
                  update: 'UPDATE',
                  txt: '파일 추가',
                  date: '2022-05-13',
                  name: '김주희'
                },
              ],
            },
          ],
        },
        {
          hidden: false,
          date: '2022.05.12',
        },
        {
          hidden: false,
          date: '2022.05.11',
        },
      ],
    };
  },
  methods: {
    // folderClose(){
    //   this.folders.forEach(function(item, index){ item.open = false; });
    // },
    folderClose(){
      this.isFold = !this.isFold;
      if(this.isFold === true){
        this.folders.forEach(function(item, index){ item.open = false; });
      }else{
        this.folders.forEach(function(item, index){ item.open = true; });
      }
    },
    selectValue(val:any){
      this.selectText = val.title
      this.dropSelectItem.itemId = val.selected
    },
    selectValue2(val:any){
      this.dropSelectItem2.itemId = val.selected
    },
    selectValue3(val:any){
      this.selectText3 = val.title
      this.dropSelectItem3.itemId = val.selected
    },
    dropClickItem(item: any, index: number){
      if(item.img) this.folders[index].imgSector = item.img
      // if(item.img) this.folders.forEach(function(foldersItem, index){ foldersItem.imgSector = item.img; });
      this.dropSelectItem.itemId = item.itemId
    },
    // selectValue4(val:any){
    //   this.dropSelectItem4.itemId = val.selected
    // },
    rangeFormat2(date:any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();
      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();
      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
    checkMove: function(e:any) {
      this.isDragging = false;
      const boxs = e.to
      let nodes:any[] = [];
      document.querySelectorAll('.section_view').forEach(v=>{nodes.push(v)})
      const listIndex = Array.prototype.indexOf.call(nodes, boxs.parentElement);
      this.folders[listIndex].open = true;
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: true ,
        // ghostClass: "ghost",
        drag: true,
        draggable: '.move-item'
      };
    }
  }
})
</script>