<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="알림 설정"
    class="ly-pop-type1 md f-14 scroll-y"
  >
    <template v-slot:body>
      <div class="title sub">기안문서 알림 설정</div>
      <div class="tbl-write type1">
        <table>
          <colgroup>
            <col style="width:33%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">결재완료시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio01" :id="`radio01-${index}`"><label :for="`radio01-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">결재반려시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio02" :id="`radio02-${index}`"><label :for="`radio02-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">결재보류시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio03" :id="`radio03-${index}`"><label :for="`radio03-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">첨언등록시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio04" :id="`radio04-${index}`"><label :for="`radio04-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">첨언수정시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio05" :id="`radio05-${index}`"><label :for="`radio05-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="title sub">결재할문서 알림 설정</div>
      <div class="tbl-write type1">
        <table>
          <colgroup>
            <col style="width:33%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">결재할문서도착시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio06" :id="`radio06-${index}`"><label :for="`radio06-${index}`">{{item.text}}</label>
                </div>
                <div class="mg-t5">
                  <div class="input-chk square">
                    <input type="checkbox" name="chk" id="chk1-1"><label for="chk1-1">피드 알림 받기</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">미결문서 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio07" :id="`radio07-${index}`"><label :for="`radio07-${index}`">{{item.text}}</label>
                </div>
                <div class="mg-t15">
                  <p class="msg-imp fc gray">미결문서 주기 알림 :<br>정해진 시간에 결재할문서 목록을 띄어주는 서비스</p>
                  <p class="fc gray f-normal mg-l15 mg-t10">- 미결문서 주기 알림 <span class="fc org">[발송시간]</span> (하루 5번 발송됨)</p>
                  <div class="tbl data-type sm mg-t15 mg-b10">
                    <table>
                      <colgroup>
                        <col style="width:25%;">
                        <col style="width:auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">1차</th>
                          <td>09:00 - 10:50</td>
                        </tr>
                        <tr>
                          <th scope="row">2차</th>
                          <td>11:00 - 12:50</td>
                        </tr>
                        <tr>
                          <th scope="row">3차</th>
                          <td>13:00 - 14:50</td>
                        </tr>
                        <tr>
                          <th scope="row">4차</th>
                          <td>15:00 - 16:50</td>
                        </tr>
                        <tr>
                          <th scope="row">5차</th>
                          <td>17:00 - 18:50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title sub">결재한문서(기결문서) 알림 설정</div>
      <div class="tbl-write type1">
        <table>
          <colgroup>
            <col style="width:33%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">결재완료/반려시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio08" :id="`radio08-${index}`"><label :for="`radio08-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">결재보류시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio09" :id="`radio09-${index}`"><label :for="`radio09-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">첨언등록시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio10" :id="`radio10-${index}`"><label :for="`radio10-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">첨언수정시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio11" :id="`radio11-${index}`"><label :for="`radio11-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title sub">수신/참조/전달문서 알림 설정</div>
      <div class="tbl-write type1">
        <table>
          <colgroup>
            <col style="width:33%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">수신문서 도착시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio12" :id="`radio12-${index}`"><label :for="`radio12-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">참조문서 도착시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio13" :id="`radio13-${index}`"><label :for="`radio13-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">전달문서 도착시 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio14" :id="`radio14-${index}`"><label :for="`radio14-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title sub">대결 알림 설정</div>
      <div class="tbl-write type1">
        <table>
          <colgroup>
            <col style="width:33%;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">대결 알림 수신</th>
              <td>
                <div class="input-radio h16" v-for="(item,index) in radioList" :key="index">
                  <input type="radio" name="radio15" :id="`radio15-${index}`"><label :for="`radio15-${index}`">{{item.text}}</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </template>
      
      <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">저장</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";

export default defineComponent({
  components: {
    basePopup,
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
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      radioList: [
        { text: '메신저알림'},
        { text: '메일' },
        { text: '수신거부' },
      ],
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
    
  }
})
</script>