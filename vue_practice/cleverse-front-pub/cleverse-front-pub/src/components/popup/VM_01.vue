<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    :propIsScrollClass="true"
    title="화상회의 예약"
    class="ly-pop-type1 xl vmr-wrap"
  >
    <template v-slot:body>
      <div class="video-meeting-reserv">
        <p class="txt_essen">*필수 입력 항목입니다.</p>
        <div class="tbl data-type">
          <table>
            <colgroup>
            <col style="width:150px">
            <col>
            </colgroup>
            <tbody>
              <tr>
                <th><em>회의일시</em></th>
                <td>
                  <div class="vm_schedule">
                    <div>
                      <div>
                        <Datepicker
                          v-model="rangeDate"
                          range
                          inline
                          autoApply
                          locale="ko"
                          :format="rangeFormat"
                          :enableTimePicker="false"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="vm_totime">
                        <div>
                          <span>시작 시간</span>
                          <select-view
                            :propOptionList="startOption"
                            :propPlaceholder="'오전 8:00'"
                            :propClass="'type3 h40'"
                            :disabled="true"
                            >
                          </select-view>
                        </div>
                        <div>
                          <span>종료 시간</span>
                          <select-view
                            :propOptionList="endOption"
                            :propPlaceholder="'오전 8:00'"
                            :propClass="'type3 h40'"
                            >
                          </select-view>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="vm_reserv">
                        <div class="header">
                          <div>
                            <div class="input-chk square"><input type="checkbox" name="" id="offline" v-model="isChecked"><label for="offline">오프라인 회의실 예약</label></div>
                          </div>
                          <div>
                              1403 회의실
                              <span class="posi1">예약불가</span>
                              <!-- <span class="posi2">예약가능</span> -->
                          </div>
                        </div>
                        <div class="select">
                          <select-view
                            :propOptionList="locationOption"
                            :propPlaceholder="'회의실 장소를 선택해주세요.'"
                            :propClass="'type3 h40'"
                            :disabled="!isChecked"
                            >
                          </select-view>
                        </div>
                        <div class="location">
                          <ul v-if="locations.length > 0">
                            <li
                              v-for="(item, index) in locations"
                              :key="index"
                              :class="{'ov':item.check}"
                            >
                              <button type="button" :id="`location${item.id}`">{{item.location}}</button>
                            </li>
                          </ul>
                          <span class="nodata" v-else>
                            장소를 선택하시면<br>
                            선택 가능한 회의실 목록이 노출됩니다.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>화상방식</th>
                <td>
                  <div class="vm_type">
                    <div class="input-radio h16 team"><input type="radio" name="vm" id="vm01"><label for="vm01">Teams</label></div>
                    <div class="input-radio h16 zoom"><input type="radio" name="vm" id="vm02" checked><label for="vm02">Zoom</label></div>
                    <span class="txt_noroom">해당 시간에 사용 가능한 Zoom 회의실이 없습니다.</span>
                    <!-- <span class="posi1">예약불가</span> -->
                    <!-- <span class="posi2">예약가능</span> -->
                  </div>
                </td>
              </tr>
              <tr>
                <th><em>회의제목</em></th>
                <td>
                  <form action="">
                    <div class="input-box type3 full">
                      <input type="text" required placeholder="제목을 입력하세요.">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <th>회의내용</th>
                <td>
                  <textarea name="" id="" cols="30" rows="10" placeholder="회의내용을 입력하세요."></textarea>
                </td>
              </tr>
              <tr>
                <th>참석자</th>
                <td>
                  <div class="vm_attendees-wrap">
                    <div class="vm_attendees">

                      <div v-for="(item, index) in address" :key="index">
                        <div class="comp" :class="{'self':item.self}">
                          {{item.label}}
                          <button type="button" class="bn_del"><i class="blind">지우기</i></button>
                        </div>
                      </div>

                      <div>
                        <div class="write" id="vm_attendees-input">
                          <input type="text" required @click="layerPos($event)" @input="changeValueLen($event)" :placeholder="address.length > 0 ? '' : '참석자의 이름이나 팀이름을 입력하세요.'">
                        </div>
                      </div>
                    </div>
                    <div class="vm_attendees-layer">
                      <div class="scroll">
                        <em>SharedService 1팀</em>
                        <ul>
                          <li><input type="radio" name="gp1" id="group0"><label for="group0">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                        </ul>
                        <ul>
                          <li><input type="radio" name="gp1" id="group1"><label for="group1">김광현/인사팀 (kim.gh@hanwha.com)김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group2"><label for="group2">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group3"><label for="group3">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group4"><label for="group4">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group5"><label for="group5">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group6"><label for="group6">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group7"><label for="group7">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group8"><label for="group8">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group9"><label for="group9">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group10"><label for="group10">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group11"><label for="group11">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group12"><label for="group12">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                          <li><input type="radio" name="gp1" id="group13"><label for="group13">김광현/인사팀 (kim.gh@hanwha.com)</label></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- <div class="bn_organization">
                    <button type="button" class="btn sm">조직도에서 추가</button>
                  </div> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">예약</button>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import Datepicker from '@vuepic/vue-datepicker'
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    basePopup,
    Datepicker,
    selectView,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      address:[
        { self: true, label: '김한화/구매 1팀' },
        { label: '홍길동/인사팀' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
        { label: 'abcd@gmail.com' },
      ],
      offsetTop: 0,
      getValueLen: "",
      isChecked: false,
      showModal: this.propShowModal,
      rangeDate: [new Date(),new Date()],
      startOption: [
        { value: '오전 8:00', label: '오전 8:00' },
        { value: '오전 8:30', label: '오전 8:30' },
        { value: '오전 9:00', label: '오전 9:00' },
        { value: '오전 9:30', label: '오전 9:30' },
      ],
      endOption: [
        { value: '오전 8:00', label: '오전 8:00' },
        { value: '오전 8:30', label: '오전 8:30' },
        { value: '오전 9:00', label: '오전 9:00' },
        { value: '오전 9:30', label: '오전 9:30' },
      ],
      locationOption: [
        { value: '63빌딩', label: '63빌딩' },
        { value: '불광 한화생명빌딩', label: '불광 한화생명빌딩' },
        { value: '신설 한화손보빌딩', label: '신설 한화손보빌딩' },
        { value: '여의도 한화손보빌딩', label: '여의도 한화손보빌딩' },
        { value: '장교 한화빌딩', label: '장교 한화빌딩' },
      ],
      locations: [
        { id: 1, check: true, location: '1401 회의실' },
        { id: 2, check: false, location: '1402 회의실' },
        { id: 3, check: false, location: '1403 회의실' },
        { id: 4, check: false, location: '1404 회의실' },
        { id: 5, check: false, location: '1405 회의실' },
        { id: 6, check: false, location: '1406 회의실' },
        { id: 7, check: false, location: '1407 회의실' },
      ]
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
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
    changeValueLen(event:any) {
      const iptWrap = document.querySelector('#vm_attendees-input') as HTMLElement
      const layer = document.querySelector('.vm_attendees-layer') as HTMLElement
      const layerH = layer.getBoundingClientRect().height + 5
      const layerW = layer.getBoundingClientRect().width
      const ipt = document.querySelector('#vm_attendees-input') as  HTMLElement
      const iptW = ipt.getBoundingClientRect().width
      const layerWrap = document.querySelector('.vmr-wrap .vfm__content.modal-content') as HTMLElement
      const layerWrapW = layerWrap.getBoundingClientRect().width
      const pos = layerW + iptWrap.offsetLeft > layerWrapW ? true : false
      const posR = iptWrap.offsetLeft - iptW
      let reslutPos

      this.getValueLen = event.target.value;

      if(pos){
        reslutPos = `top:${this.offsetTop - layerH}px;left:${posR}px`
      }else{
        reslutPos = `top:${this.offsetTop - layerH}px;left:${iptWrap.offsetLeft}px`
      }

      layer.style.cssText = reslutPos

      if(this.getValueLen.length > 1){
        layer.style.visibility = 'visible'
      }else{
        layer.removeAttribute('style')
      }
    },
    layerPos(event:any){
      const html = document.querySelector('html') as HTMLElement
      const modal = document.querySelector('.vmr-wrap .modal-content') as HTMLElement
      this.offsetTop = event.pageY - ((html.offsetHeight - modal.offsetHeight)/2) - 17
    }
  }
})
</script>