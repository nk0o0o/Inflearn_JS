<template>
  <div class="layout-wrap">
    <div class="layout-body">
      <settingLeft/>
      <div class="layout-contents">
        <div class="board-common_wrap">
          <!-- header -->
          <div class="board-common_header">
            <h2>알림 설정</h2>
          </div>
          <!-- //header -->
          <!-- notice info -->
          <div class="setting-wrap notice">
            <div class="set-group" :class="{'hide':open}">
              <div class="tit-dropdown"  @click="open=!open">메일</div>
              <div class="section">
                <h2 class="title">메일수신시 알림 설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:200px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">메일수신시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-1" id="radio1"><label for="radio1">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-1" id="radio2" checked><label for="radio2">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>

            <div class="set-group" :class="{'hide':open2}">
              <div class="tit-dropdown" @click="open2=!open2">전자결재</div>
              <div class="section">
                <h2 class="title">기안문서 알림 설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:200px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">결재완료시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-2" id="radio3"><label for="radio3">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-2" id="radio4"><label for="radio4">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-2" id="radio5" checked><label for="radio5">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">결재반려시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-3" id="radio6"><label for="radio6">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-3" id="radio7"><label for="radio7">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-3" id="radio8" checked><label for="radio8">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">결재보류시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-4" id="radio9"><label for="radio9">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-4" id="radio10"><label for="radio10">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-4" id="radio11" checked><label for="radio11">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">첨언등록시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-5" id="radio12"><label for="radio12">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-5" id="radio13"><label for="radio13">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-5" id="radio14" checked><label for="radio14">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">첨언수정시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-6" id="radio15"><label for="radio15">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-6" id="radio16"><label for="radio16">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-6" id="radio17" checked><label for="radio17">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <div class="section">
                <h2 class="title">결재할문서 알림 설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:200px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">결재할문서도착시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-7" id="radio18"><label for="radio18">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-7" id="radio19"><label for="radio19">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-7" id="radio20" checked><label for="radio20">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">미결문서 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-8" id="radio21"><label for="radio21">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-8" id="radio22"><label for="radio22">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-8" id="radio23" checked><label for="radio23">수신거부</label></div>
                    <div class="send-time">
                      <p>※ 미결문서 주기 알림 : 정해진 시간에 결재할문서 목록을 띄어주는 서비스</p>
                      <p class="time-txt">- 미결문서 주기 알림 <em>[발송시간]</em> (하루 5번 발송됨)</p>
                      <ul>
                        <li>
                          <em>1차</em>
                          <span>09:00 ~ 10:50</span>
                        </li>
                        <li>
                          <em>2차</em>
                          <span>11:00 ~ 12:50</span>
                        </li>
                        <li>
                          <em>3차</em>
                          <span>13:00 ~ 14:50</span>
                        </li>
                        <li>
                          <em>4차</em>
                          <span>15:00 ~ 16:50</span>
                        </li>
                        <li>
                          <em>5차</em>
                          <span>17:00 ~ 18:50</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <div class="section">
                <h2 class="title">결재한문서(기결문서) 알림 설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:200px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">결재완료/반려시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-9" id="radio24"><label for="radio24">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-9" id="radio25"><label for="radio25">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-9" id="radio26" checked><label for="radio26">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">결재보류시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-10" id="radio27"><label for="radio27">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-10" id="radio28"><label for="radio28">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-10" id="radio29" checked><label for="radio29">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">첨언등록시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-11" id="radio30"><label for="radio30">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-11" id="radio31"><label for="radio31">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-11" id="radio32" checked><label for="radio32">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">첨언수정시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-12" id="radio33"><label for="radio33">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-12" id="radio34"><label for="radio34">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-12" id="radio35" checked><label for="radio35">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <div class="section">
                <h2 class="title">수신/참조/전달문서 알림 설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:200px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">수신문서 도착시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-13" id="radio36" checked><label for="radio36">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-13" id="radio37"><label for="radio37">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-13" id="radio38"><label for="radio38">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">참조문서 도착시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-14" id="radio39" checked><label for="radio39">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-14" id="radio40"><label for="radio40">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-14" id="radio41"><label for="radio41">수신거부</label></div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">전달문서 도착시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-15" id="radio42" checked><label for="radio42">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-15" id="radio43"><label for="radio43">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-15" id="radio44"><label for="radio44">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>

              <div class="section">
                <h2 class="title">대결 알림 설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:200px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">대결 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-16" id="radio45"><label for="radio45">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-16" id="radio46"><label for="radio46">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-16" id="radio47" checked><label for="radio47">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>

            <div class="set-group" :class="{'hide':open3}">
              <div class="tit-dropdown" @click="open3=!open3">게시판</div>
              <div class="section">
                <h2 class="title">새글 알림설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:250px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">즐겨찾기 게시판 새글 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-17" id="radio48" checked><label for="radio48">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-17" id="radio49"><label for="radio49">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-17" id="radio50"><label for="radio50">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <div class="section">
                <h2 class="title">댓글 알림설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:250px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">즐겨찾기게시판/게시글 댓글 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-18" id="radio52" checked><label for="radio52">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-18" id="radio53"><label for="radio53">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>

            <div class="set-group" :class="{'hide':open4}">
              <div class="tit-dropdown" @click="open4=!open4">동호회</div>
              <div class="section">
                <h2 class="title">새글 알림설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:250px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">즐겨찾기 게시판 새글 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-19" id="radio54" checked><label for="radio54">메신저알림</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-19" id="radio55"><label for="radio55">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-19" id="radio56"><label for="radio56">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <div class="section">
                <h2 class="title">댓글 알림설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:250px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">즐겨찾기게시판/게시글 댓글 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-20" id="radio57" checked><label for="radio57">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-20" id="radio58"><label for="radio58">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>

            <div class="set-group" :class="{'hide':open5}">
              <div class="tit-dropdown" @click="open5=!open5">기타</div>
              <div class="section">
                <h2 class="title">과제 상태 알림설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:250px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">과제 상태 변경시 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-21" id="radio59" checked><label for="radio59">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-21" id="radio60"><label for="radio60">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <div class="section">
                <h2 class="title">의견/요청 알림설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:250px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">의견/요청 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-22" id="radio61" checked><label for="radio61">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-22" id="radio62"><label for="radio62">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <!-- <div class="section">
                <h2 class="title">화상회의 알림설정</h2>
                <table class="tbl">
                <colgroup>
                <col style="width:250px;">
                <col>
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">화상회의 알림</th>
                  <td>
                    <div class="input-radio h16"><input type="radio" name="radio-23" id="radio63" checked><label for="radio63">메일</label></div>
                    <div class="input-radio h16"><input type="radio" name="radio-23" id="radio64"><label for="radio64">수신거부</label></div>
                  </td>
                </tr>
                </tbody>
                </table>
              </div> -->
            </div>

            <div class="setting-foot">
              <button type="button" class="btn lg line-type2">취소</button>
              <button type="button" class="btn lg">저장</button>
            </div>
          </div>
          <!-- //notice info -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import settingLeft from "./settingLeft.vue"


export default defineComponent({
  components: {
    settingLeft,
  },
  data() {
    return {
      open: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
    };
  },
  methods: {

  },
})
</script>