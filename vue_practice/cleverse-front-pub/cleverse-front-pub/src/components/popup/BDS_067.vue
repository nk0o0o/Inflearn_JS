<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="표 추가"
    class="ly-pop-type1 md"
  >
    <template v-slot:body>
      <div class="title sub">표 만들기</div>
      <div class="tbl data-type">
        <table>
          <colgroup>
           <col style="width:25%">
           <col>
          </colgroup>
          <tbody>
            <tr>
              <th>행/열 개수</th>
              <td>
                <div class="flex space">
                  <div class="flex space">
                    <span>행 개수</span>
                    <div class="input-box type3 round-type w120">
                      <input type="number" required placeholder="">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    </div>
                  </div>
                  <div class="flex space">
                    <span>열 개수</span>
                    <div class="input-box type3 round-type w120">
                      <input type="number" required placeholder="">
                      <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>표 형식</th>
              <td>
                <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-1"><label for="radio1-1">제목줄 없음<var></var></label></div>
                <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-2"><label for="radio1-2">위쪽 제목줄</label></div>
                <div class="input-radio h16"><input type="radio" name="radio1" id="radio1-3"><label for="radio1-3">왼쪽 제목칸</label></div>
              </td>
            </tr>
            <tr>
              <th>제목줄 색상</th>
              <td>
                <div class="draw-table-color">
                  <button type="button" style="background-color: #000"></button>
                  <button type="button" style="background-color: #666"></button>
                  <button type="button" style="background-color: #999"></button>
                  <button type="button" style="background-color: #b8814c"></button>

                  <button type="button" style="background-color: #f97723"></button>
                  <button type="button" style="background-color: #eca90f"></button>
                  <button type="button" style="background-color: #f3da33"></button>
                  <button type="button" style="background-color: #ff0000"></button>

                  <button type="button" style="background-color: #0024ff"></button>
                  <button type="button" style="background-color: #34a6db"></button>
                  <button type="button" style="background-color: #794ccd"></button>
                  <button type="button" style="background-color: #682007"></button>

                  <button type="button" style="background-color: #15a293"></button>
                  <button type="button" style="background-color: #a2c10b"></button>
                  <button type="button" style="background-color: #259c00"></button>
                  <button type="button" style="background-color: #ed67cc"></button>
                </div>
              </td>
            </tr>
            <tr>
              <th>예시</th>
              <td>
                <div class="tbl">
                  <table>
                    <colgroup>
                      <col>
                      <col>
                      <col>
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="ta-c">구분자1</th>
                        <th class="ta-c">구분자2</th>
                        <th class="ta-c">구분자3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>내용이 들어갑니다.</td>
                        <td>내용이 들어갑니다.</td>
                        <td>내용이 들어갑니다.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
      showModal: this.propShowModal,
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