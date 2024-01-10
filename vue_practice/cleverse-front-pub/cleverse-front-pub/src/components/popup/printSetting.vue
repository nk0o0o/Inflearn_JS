<template>
  <base-popup
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="인쇄하기"
    class="ly-pop-type1"
  >
    <template v-slot:body>
      <div class="print-setting-pop">
        <dl class="print-setting-pop_option">
          <dt>프린트 옵션</dt>
          <dd>
            <div class="input-chk square">
              <input type="checkbox" name="chk" id="chk1"><label for="chk1">제목</label>
            </div>
            <div class="input-chk square">
              <input type="checkbox" name="chk" id="chk2"><label for="chk2">작성자</label>
            </div>
            <div class="input-chk square">
              <input type="checkbox" name="chk" id="chk3"><label for="chk3">등록일</label>
            </div>
            <div class="input-chk square">
              <input type="checkbox" name="chk" id="chk4"><label for="chk4">첨부</label>
            </div>
          </dd>
        </dl>
        <div class="tbl-view type1">
          <table>
            <colgroup>
            <col style="width: 106px;"><col>
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">제목</th>
                <td class="subject">[교육] IT Academy 5월과정 수강신청 안내</td>
              </tr>
              <tr>
                <th scope="row">작성자</th>
                <td>인사팀(교육)매니저/인사팀(02-6392-0044)</td>
              </tr>
              <tr>
                <th scope="row">등록일</th>
                <td>2022.01.01 19:29 - 보존</td>
              </tr>
              <tr>
                <th scope="row">첨부</th>
                <td>
                  <ul class="print-setting-pop_file_list">
                    <li class="ico-file pdf">한화생명_ppt파일_첨부시이렇게_보여집니다.pptx</li>
                    <li class="ico-file pdf">한화생명_ppt파일_첨부시이렇게_보여집니다.pptx</li>
                    <li class="ico-file pdf">한화생명_ppt파일_첨부시이렇게_보여집니다.pptx</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="print-setting-pop_zone">
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          인쇄하기화면<br>
          12121212인쇄하기화면<br>
        </div>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn lg" @click="print">인쇄하기</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"


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
      error: false,
      showModal: this.propShowModal,
      printTest: false,
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
    print(){
      const html = document.querySelector('html') as any;
      const printContents = document.querySelector('.print-setting-pop')?.innerHTML;
      const printDiv = document.createElement('DIV') as any;
      // printDiv.className = 'print-div'; 클래스명으로 컨트롤 필요시 추가하기

      html.appendChild(printDiv);
      printDiv.innerHTML = `
      <style type="text/css">
      @media print {
        *{margin:0;padding:0;}
        html { font-size: 62.5% !important; }
        .print-setting-pop_option{display:none;}
      }
      .modal__content.is-scroll{overflow-y: visible;}
      </style>
      ${printContents}
      `
      document.body.style.display = 'none';
      window.print();
      document.body.style.display = 'block';
      printDiv.style.display = 'none';
      const isScroll = document.querySelector('.modal__content.is-scroll') as HTMLElement
      isScroll.style.overflow = 'visible'
      setTimeout(()=>{
        isScroll.style.overflow = 'auto'
      },100)
    },
  },
  computed: {
  }
})
</script>