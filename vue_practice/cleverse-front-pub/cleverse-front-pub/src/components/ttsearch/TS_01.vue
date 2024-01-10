<template>
  <div>
    <div class="ttsearch-tab" id="ttTabs">
      <ul class="tab-menu">
        <li v-for="(tab, index) in ttTabs" v-bind:class="{active:currentTab===index}" :key="index">
          <button type="button" v-on:click="currentTab = index">{{tab}}</button>
        </li>
      </ul>
    </div>
    <div class="task-content ttsearch">

      <div v-show="currentTab == 0">
        <div class="skeleton-content_list total">
          <div class="nodata ttsearch v1" v-if="show">
              <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            
            <div class="skeleton-content_head">
              <span class="tit">Task</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in tasks" :key="index">
                <span class="tit" :class="{lock: item.titLock}" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span class="part">{{item.part}}</span>
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
            
            <div class="skeleton-content_head">
              <span class="tit">협업보드</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in boards" :key="index">
                <span class="tit" :class="{lock: item.titLock}" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>

            <div class="skeleton-content_head">
              <span class="tit">정보공유</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in shares" :key="index">
                <span class="tit" :class="{lock: item.titLock}" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>

            <div class="skeleton-content_head">
              <span class="tit">전자결재</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-payment_list_wrap" v-for="(item, index) in payments" :key="index">
                <span class="tit ell-multiline2" v-html="item.title"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>

            <div class="skeleton-content_head">
              <span class="tit">지원업무</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in supplys" :key="index">
                <span class="tit" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
            
            <div class="skeleton-content_head">
              <span class="tit">게시판</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in notices" :key="index">
                <span class="tit" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>

            <div class="skeleton-content_head">
              <span class="tit">의견</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-opinion_list_wrap" v-for="(item, index) in opinions" :key="index">
                <span class="tit ell-singleline">
                  {{item.title}}
                  <span class="date">{{item.date}}</span>
                </span>
                <span class="txt ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.part}}</span>
                  <span v-if="item.category">{{item.category}}</span>
                  <span :class="{lock: item.infoLock}">{{item.partTitle}}</span>
                </div>
              </div>
            </div>
            
            <div class="skeleton-content_head">
              <span class="tit">파일</span>
              <span>
                <button type="button" class="bn_moreview">더보기</button>
              </span>
            </div>
            <div class="skeleton-content_list_wrap">
              <div class="tt-file_list_wrap" v-for="(item, index) in taskNboards" :key="index">
                <span class="tit ell-multiline2" v-html="item.title"></span>
                <span class="board_tit" :class="{lock: item.lock}">{{item.boardTitle}}</span>
                <div class="info">
                  <span class="name" v-if="item.name">{{item.name}}</span>
                  <span v-if="item.date">{{item.date}}</span>
                  <span class="share" v-if="item.shareInfo">{{item.shareInfo}}</span>
                </div>
                <span class="txt ell-multiline2" v-html="item.searchText"></span>
              </div> 
            </div>

          </div>
        </div>
      </div>

      <div v-show="currentTab == 1">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v4" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in tasks" :key="index">
                <span class="tit" :class="{lock: item.titLock}" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span class="part">{{item.part}}</span>
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
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

      <div v-show="currentTab == 2">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v4" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in boards" :key="index">
                <span class="tit" :class="{lock: item.titLock}" v-html="item.title"></span>
                <span class="end" v-if="item.end">종료</span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
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

      <div v-show="currentTab == 3">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v1" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in shares" :key="index">
                <span class="tit" :class="{lock: item.titLock}" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
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

      <div v-show="currentTab == 4">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v2" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-payment_list_wrap" v-for="(item, index) in payments" :key="index">
                <span class="tit ell-multiline2" v-html="item.title"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
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

      <div v-show="currentTab == 5">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v1" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in supplys" :key="index">
                <span class="tit" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
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

      <div v-show="currentTab == 6">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v1" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-task_list_wrap" v-for="(item, index) in notices" :key="index">
                <span class="tit" v-html="item.title"></span>
                <span class="ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.name}}</span>
                  <span>{{item.date}}</span>
                </div>
              </div>
            </div>
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

      <div v-show="currentTab == 7">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v1" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-opinion_list_wrap" v-for="(item, index) in opinions" :key="index">
                <span class="tit ell-singleline">
                  {{item.title}}
                  <span class="date">{{item.date}}</span>
                </span>
                <span class="txt ell-multiline2" v-html="item.text"></span>
                <div class="info">
                  <span>{{item.part}}</span>
                  <span v-if="item.category">{{item.category}}</span>
                  <span :class="{lock: item.infoLock}">{{item.partTitle}}</span>
                </div>
              </div>
            </div>
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

      <div v-show="currentTab == 8">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">검색결과 <span>0</span></strong>
          </div>
          <div class="nodata ttsearch v1" v-if="show">
            <p>검색결과가 없어요!</p>
          </div>
          <div class="cont" v-else>
            <div class="skeleton-content_list_wrap">
              <div class="tt-file_list_wrap" v-for="(item, index) in taskNboards" :key="index">
                <span class="tit ell-multiline2" v-html="item.title"></span>
                <span class="board_tit" :class="{lock: item.lock}">{{item.boardTitle}}</span>
                <div class="info">
                  <span class="name" v-if="item.name">{{item.name}}</span>
                  <span v-if="item.date">{{item.date}}</span>
                  <span class="share" v-if="item.shareInfo">{{item.shareInfo}}</span>
                </div>
                <span class="txt ell-multiline2" v-html="item.searchText"></span>
              </div> 
            </div>
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
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({    
    components: {
      Paging,
    },
    data() {
      return {
        page: 1,
        currentTab: 2,
        ttTabs: ['통합', 'Task', '협업보드', '정보공유', '전자결재', '지원업무', '게시판', '의견', '파일'],
        show: false,
        tasks: [
          {
            titLock: true,
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진1',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            part: '시스템개발',
            name: '김이름',
            date: '2021.05.01',
          },
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진2',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            part: '시스템개발',
            name: '김이름',
            date: '2021.05.01',
          },
        ],
        boards: [
          {
            titLock: true,
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진1',
            end: true,
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            part: '시스템개발',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진2',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            part: '시스템개발',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
        ],
        shares: [
          {
            titLock: true,
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진1',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진2',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
        ],
        supplys: [
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진1',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진2',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
        ],
        payments: [
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진 업무공유 시스템 <em class="tt">검색어</em> 사업 추진 업무공유 시스템 <em class="tt">검색어</em> 사업 추진 사업 추진 업무공유 시스템 <em class="tt">검색어</em> 사업 추진',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진 업무공유 시스템 <em class="tt">검색어</em> 사업 추진 업무공유 시스템 <em class="tt">검색어</em> 사업 추진',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진 업무공유 시스템 <em class="tt">검색어</em> 사업 추진 업무공유 시스템 <em class="tt">검색어</em> 사업 추진',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
        ],
        notices: [
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진1',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
          {
            title: '업무공유 시스템 <em class="tt">검색어</em> 사업 추진2',
            text: '내용영역 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.  내용영역 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 검색어 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 검색어 데이터가 표시됩니다. 내용영역 데이터가 표시됩니다. 내용은 최대 2줄까지 표시됩니다.',
            name: '김이름',
            date: '2021.05.01 11:23',
          },
        ],
        opinions: [
          {
            title: '검색어',
            date: '2021.01.31 10:11',
            text: '<em class="tt">검색어</em> 표시됩니다. <em class="tt">검색어</em> 내용영역 <em class="tt">검색어</em> 데이터가 표시됩니다.',
            part: '협업보드',
            infoLock: true,
            partTitle: '보드제목 최대 20자까지표시 이후는 보드제목 최대 20자까지표시 이후는',
          },
          {
            title: '검색어',
            date: '2021.01.31 10:11',
            text: '<em class="tt">검색어</em> 표시됩니다. <em class="tt">검색어</em> 내용영역 <em class="tt">검색어</em> 데이터가 표시됩니다.',
            part: '협업보드',
            category: '카테고리',
            partTitle: '보드제목 최대 20자까지표시 이후는 보드제목 최대 20자까지표시 이후는',
          },
          {
            title: '검색어',
            date: '2021.01.31 10:11',
            text: '<em class="tt">검색어</em> 표시됩니다. <em class="tt">검색어</em> 내용영역 <em class="tt">검색어</em> 데이터가 표시됩니다.',
            part: '협업보드',
            infoLock: true,
            partTitle: '보드제목 최대 20자까지표시 이후는 보드제목 최대 20자까지표시 이후는',
          },
        ],
        taskNboards: [
          {
            title: '최대 두줄로 2021_구독 솔루션 <em class="tt">파일명</em>이 이곳에 보여집니다.',
            lock: true,
            boardTitle: '보드제목보드제목보드제목 보드제목보드제목보드제목 보드제목보드제목보드제목',
            name: '김이름',
            date: '2021.05.01',
            searchText: '<em class="tt">검색어</em> 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 <em class="tt">검색어</em> 데이터가 표시됩니다.',
          },
          {
            title: '최대 두줄로 2021_구독 솔루션 <em class="tt">파일명</em>이 이곳에 보여집니다.',
            boardTitle: '보드제목보드제목보드제목',
            shareInfo: '정보공유내용열자까지 정보공유내용열자까지 정보공유내용열자까지',
            searchText: '<em class="tt">검색어</em> 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 <em class="tt">검색어</em> 데이터가 표시됩니다.',
          },
          {
            title: '최대 두줄로 2021_구독 솔루션 <em class="tt">파일명</em>이 이곳에 보여집니다.',
            lock: true,
            boardTitle: '보드제목보드제목보드제목',
            name: '김이름',
            date: '2021.05.01',
            searchText: '<em class="tt">검색어</em> 표시됩니다. 내용은 최대 2줄까지 표시됩니다. 내용영역 <em class="tt">검색어</em> 데이터가 표시됩니다.',
          },
        ],
      };
    },
    methods: {
        
    },
});
</script>