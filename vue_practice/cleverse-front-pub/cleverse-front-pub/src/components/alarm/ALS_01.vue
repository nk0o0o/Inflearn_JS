<template>
  <div>
    <div class="header-content_wrap">
      <div class="header-content_inner">
        <div class="header-content_header">
          <h2 class="tit">알림</h2>
          <!-- <label class="switch ty2">
            <span class="tit">이메일 푸시</span>
            <input type="checkbox">
            <span class="slider"></span>
          </label> -->
          <button type="button" class="btn-alarm-setting">알림 설정</button>
        </div>
        <div class="header-content_tab">
          <div class="tab-type4" id="tabsType4">
            <ul class="tab-menu">
              <li v-for="(tab, index) in tabsType4" v-bind:class="{active:currentTab===index}" :key="index">
                <button type="button" v-on:click="currentTab = index">
                  <span :class="tab.tabIcon"></span>
                  <span class="tit">{{tab.tabName}}</span>
                  <span class="num">{{tab.tabAlarmNum}}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content_wrap">
      <div class="tab-content">
        <div v-show="currentTab == 0">
          <div class="btn_alarm_area">
            <p>※ 한달 이내 100개 알림만 표시됩니다.</p>
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
            <button type="button" class="btn-primary-small roundChk" disabled>전체 읽음 처리</button> <!-- disabled 시 -->
          </div>

          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt" v-if="item.cont">
                        <p>
                          <b class="search_keyword">{{item.name}}</b> 님이 
                          <span v-html="item.cont"></span>
                        </p>
                      </div>
                      <div class="txt" v-if="item.category"><p>{{item.category}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.10</h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList2" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt" v-if="item.cont"><p><b class="search_keyword">{{item.name}}</b> 님이 {{item.cont}}</p></div>
                      <div class="txt" v-if="item.category"><p>{{item.category}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <!-- 알림이 없는 경우 -->
          <section class="alarm_wpt_wrap">
            <div class="nodata">
              <p>알림이 없습니다</p>
            </div>
          </section>
          <!-- //알림이 없는 경우 -->
          <!-- 검색결과 없는 경우 -->
          <section class="alarm_wpt_wrap">
            <div class="nodata v2">
              <p>검색결과가 없습니다.</p>
            </div>
          </section>
          <!-- //검색결과 없는 경우 -->
          <div class="btn-active-wrap">
            <button type="button">더보기</button>
          </div>
        </div>

        <div v-show="currentTab == 1">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
                <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList3" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt">
                        <p>
                          <b class="search_keyword">{{item.name}}</b> 
                          <span v-html="item.cont"></span>
                        </p>
                      </div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.09</h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList3" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div v-show="currentTab == 2">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
                <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList4" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.10</h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList4" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div v-show="currentTab == 3">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList5" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div v-show="currentTab == 4">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList6" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div v-show="currentTab == 5">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList7" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div v-show="currentTab == 6">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList7" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div v-show="currentTab == 7">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList8" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div v-show="currentTab == 8">
          <div class="btn_alarm_area">
            <alarmsearch/>
            <button type="button" class="btn-primary-small roundChk">전체 읽음 처리</button>
          </div>
          <section class="alarm_wpt_wrap">
            <div class="wpt_header">
              <h3 class="tit">05.11 <span class="today">Today</span></h3>
            </div>
            <div class="wpt_body">
              <ul class="alarm_list">
                <li v-for="(item, index) in alarmList9" :key="index">
                  <div class="left">
                    <div class="thumb" :class="{ico_new: item.new}">
                      <div class="img">
                        <img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)">
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="cont" :class="{disabled: item.read}">
                      <p class="tit">{{item.sort}}<em>{{item.date}}</em></p>
                      <div class="txt"><p><b class="search_keyword">{{item.name}}</b> {{item.cont}}</p></div>
                      <p class="desc" v-if="item.msg"><b v-if="item.callName">@{{item.callName}}</b> {{item.msg}}</p>
                      <div class="desc" v-if="item.stepList">
                        <ul class="step_desc_list">
                          <li class="before" v-for="(item, index) in item.stepList" :key="index">{{item.step}}</li>
                        </ul>
                      </div>
                      <div class="btn_area">
                        <button type="button" class="btn-primary-small roundChk" :class="{disabled: item.readChk}">{{item.readBtn}}</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

      </div>
    </div>

    <div class="toast-wrap">
      <div class="toast-lyr">
        <p>지금부터 알림 내역을 이메일로 받아보실 수 있습니다.</p>
      </div>
      <!-- <div class="toast-lyr">
        <p>지금부터 알림 메일이 발송되지 않습니다.</p>
      </div>
      <div class="toast-lyr">
        <p>지금부터 알림 내역을 이메일로 받아보실 수 있습니다.</p>
      </div>
      <div class="toast-lyr">
        <p>지금부터 알림 메일이 발송되지 않습니다.</p>
      </div> -->
    </div>
    <memo/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import memo from "@/components/alarm/memo.vue";
import alarmsearch from "@/components/alarm/alarmsearch.vue";

export default defineComponent({
  components: {
    memo,
    alarmsearch,
  },
  data() {
    return {
      currentTab: 0,
      tabsType4: [
        { id:0, tabIcon:'', tabName:'전체', tabAlarmNum:'+'+99 },
        { id:1, tabIcon:'ico_tab_task', tabName:' Task협업보드', tabAlarmNum:'+'+99 },
        { id:2, tabIcon:'ico_tab_call_opinion', tabName:'의견&요청', tabAlarmNum:3 },
        { id:3, tabIcon:'ico_tab_share', tabName:'정보공유', tabAlarmNum:2 },
        { id:4, tabIcon:'ico_tab_board', tabName:'게시판', tabAlarmNum:2 },
        { id:5, tabIcon:'ico_tab_club', tabName:'동호회', tabAlarmNum:2 },
        { id:6, tabIcon:'ico_tab_elecpay', tabName:'전자결재', tabAlarmNum:2 },
        { id:7, tabIcon:'ico_tab_mail', tabName:'메일', tabAlarmNum:2 },
        { id:8, tabIcon:'ico_tab_calendar', tabName:'일정', tabAlarmNum:2 },
        { id:9, tabIcon:'ico_tab_etc', tabName:'기타', tabAlarmNum:2 },
        // { id:9, tabIcon:'ico_tab_memo', tabName:'설문', tabAlarmNum:2 },
        // { id:10, tabIcon:'ico_tab_facilitiy', tabName:'시설물', tabAlarmNum:2 },
        // { id:11, tabIcon:'ico_tab_servcenter', tabName:' 고객센터', tabAlarmNum:2 },
      ],
      alarmList: [
				{ 
					new: true,
					src: 'img_dummy1.png',
					sort: '요청',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 <b class="search_keyword">A사 비즈니스 모델 분석</b> 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          stepList: [
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
          ],
          readBtn: '읽음 처리',
				},
        { 
					new: true,
					src: 'img_elecpay_36x36_on.png',
					sort: '의견',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 <b class="search_keyword">A사 비즈니스 모델 분석</b> 협업보드에서 호출했습니다.',
          msg: '마이페이지 구성안 작업은 B안으로 고도화 진행 해주세요!',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_club_36x36_on.png',
					sort: '추가',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 <b class="search_keyword">A사 비즈니스 모델 분석</b> 협업보드에서 호출했습니다.',
          stepList: [
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
          ],
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_board_36x36_on.png',
					sort: '승인',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 <b class="search_keyword">A사 비즈니스 모델 분석</b> 협업보드에서 호출했습니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_infoshare_36x36_on.png',
					sort: '공지',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 <b class="search_keyword">A사 비즈니스 모델 분석</b> 협업보드에서 호출했습니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_opinion_36x36_on.png',
					sort: '보낸 메모',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님에게 메시지를 보냈습니다.',
          msg: '메시지 내용 앞부분이 노출됩니다. 글자수는 최대 150자까지 가능합니다. 글자수는 최대 150자까지 가능합니다. 현재 작성된 글자수가 공백포함 150자입니다. 텍스트 최대 영역까지 한 줄~두 줄로 노출합니다. 글자수는 현재 작성 된 글자수가 공백 포함 150자 입니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_task_36x36_on.png',
					sort: '받은 메모',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 보낸 메시지가 도착했습니다.',
          msg: '메시지 내용 앞부분이 노출됩니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_mail_36x36_on.png',
					sort: '보낸 메일',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 <b class="search_keyword">‘Global Business Culture’</b> 에 정보를 공유했습니다.',
          msg: '정보공유 내용이 노출됩니다. 글자수는 최대 150자까지 가능합니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_etc_36x36_on.png',
					sort: '기타',
					date: '2021.05.11 09:21',
					category: '공지사항 타이틀이 노출 됩니다. 공지사항의 타이틀은 글자수 제한 50자 입니다. 50자 전부 한 줄에 들어갑니다.',
          readBtn: '읽음 처리',
				},
      ],
      alarmList2: [
				{ 
					new: false,
          read: true,
					src: 'img_elecpay_36x36_off.png',
					sort: '승인',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          readBtn: '읽지 않음',
				},
        { 
					new: false,
          read: true,
					src: 'img_club_36x36_off.png',
					sort: '제외',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          readBtn: '읽지 않음',
				},
        { 
					new: false,
          read: true,
					src: 'img_board_36x36_off.png',
					sort: '제외',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          readBtn: '읽지 않음',
				},
        { 
					new: false,
          read: true,
					src: 'img_infoshare_36x36_off.png',
					sort: '제외',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          readBtn: '읽지 않음',
				},
        { 
					new: false,
          read: true,
					src: 'img_opinion_36x36_off.png',
					sort: '제외',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          readBtn: '읽지 않음',
				},
        { 
					new: false,
          read: true,
					src: 'img_task_36x36_off.png',
					sort: '제외',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          readBtn: '읽지 않음',
				},
        { 
					new: false,
          read: true,
					src: 'img_pp_36x36_nodata.png',
					sort: '의견',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 ‘Global Business Culture’ 정보공유에 의견을 남겼습니다.',
          msg: '정보공유에 남긴 의견 내용이 표시됩니다.',
          readBtn: '읽지 않음',
				}
      ],
      alarmList3: [
				{ 
					new: true,
					src: 'img_dummy1.png',
					sort: '요청',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 <b class="search_keyword">A사 비즈니스 모델 분석</b> 협업보드에서 호출했습니다.',
          callName: '김이름',
          msg: '어드민 페이지 구성안 어떤지 의견 주세요.',
          stepList: [
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
            { step: '업무 공유 시스템 사업 추진 1.0' },
          ],
          readBtn: '읽음 처리',
				},
        { 
					new: false,
          read: true,
					src: 'img_pp_36x36_nodata.png',
					sort: '의견',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 ‘Global Business Culture’ 정보공유에 의견을 남겼습니다.',
          msg: '정보공유에 남긴 의견 내용이 표시됩니다.',
          readBtn: '읽지 않음',
				},
      ],
      alarmList4: [
				{ 
					new: false,
					src: 'img_memo_36x36_on.png',
					sort: '보낸 메모',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님에게 메시지를 보냈습니다.',
          msg: '메시지 내용 앞부분이 노출됩니다. 글자수는 최대 150자까지 가능합니다. 글자수는 최대 150자까지 가능합니다. 현재 작성된 글자수가 공백포함 150자입니다. 텍스트 최대 영역까지 한 줄~두 줄로 노출합니다. 글자수는 현재 작성 된 글자수가 공백 포함 150자 입니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_memo2_36x36_on.png',
					sort: '받은 메모',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 보낸 메시지가 도착했습니다.',
          msg: '메시지 내용 앞부분이 노출됩니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
					src: 'img_memo_36x36_off.png',
					sort: '받은 메모',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 보낸 메시지가 도착했습니다.',
          msg: '메시지 내용 앞부분이 노출됩니다.',
          readBtn: '읽음',
          readChk: true,
				},
      ],
      alarmList5: [
				{ 
					new: false,
					src: 'img_share_36x36_on.png',
					sort: '그룹 공유',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 ‘Global Business Culture’ 에 정보를 공유했습니다.',
          msg: '정보공유 내용이 노출됩니다. 글자수는 최대 150자까지 가능합니다.',
          readBtn: '읽음 처리',
				},
        { 
					new: false,
          read: true,
					src: 'img_share_36x36_off.png',
					sort: '그룹 공유',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 ‘Global Business Culture’ 에 정보를 공유했습니다.',
          msg: '정보공유 내용이 노출됩니다. 글자수는 최대 150자까지 가능합니다.',
          readBtn: '읽지 않음',
				},
      ],
      alarmList6: [
				{ 
					new: true,
					src: 'img_change_36x36_on.png',
					sort: '승인',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          readBtn: '읽음',
          readChk: true,
				},
        { 
					new: false,
          read: true,
					src: 'img_change_36x36_off.png',
					sort: '추가',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 ‘Global Business Culture’ 에 정보를 공유했습니다.',
          msg: '정보공유 내용이 노출됩니다. 글자수는 최대 150자까지 가능합니다.',
          readBtn: '읽지 않음',
				},
        { 
					new: false,
          read: true,
					src: 'img_change_36x36_off.png',
					sort: '삭제',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 ‘Global Business Culture’ 에 정보를 공유했습니다.',
          msg: '정보공유 내용이 노출됩니다. 글자수는 최대 150자까지 가능합니다.',
          readBtn: '읽지 않음',
				},
      ],
      alarmList7: [
				{ 
          new: false,
					src: 'img_noti_36x36_on.png',
					sort: '공지',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          readBtn: '읽음 처리',
				},
        { 
          new: false,
          read: true,
					src: 'img_noti_36x36_off.png',
					sort: '공지',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          readBtn: '읽지 않음',
				},
      ],
      alarmList8: [
				{ 
          new: false,
					src: 'img_mail_36x36_on.png',
					sort: '받은메일',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          readBtn: '읽음 처리',
				},
        { 
          new: false,
          read: true,
					src: 'img_mail_36x36_on.png',
					sort: '보낸메일',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          readBtn: '읽지 않음',
				},
      ],
      alarmList9: [
				{ 
          new: false,
					src: 'img_etc_36x36_on.png',
					sort: '기타',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          readBtn: '읽음 처리',
				},
        { 
          new: false,
          read: true,
					src: 'img_etc_36x36_on.png',
					sort: '기타',
					date: '2021.05.11 09:21',
					name: '김한화',
					cont: '님이 A사 비즈니스 모델 분석 협업보드에서 호출했습니다.',
          readBtn: '읽지 않음',
				},
      ],
    }
  },
});
</script>