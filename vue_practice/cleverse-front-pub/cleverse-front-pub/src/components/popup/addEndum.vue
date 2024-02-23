<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="첨언등록"
    class="ly-pop-type1"
  >
    <template v-slot:body>
      <div class="addendum-wrap">
        <p class="txt-or">※ 첨언 필요시 아래에 해당하는 내용을 입력하시기 바랍니다.</p>
        <table class="tbl-write type1">
          <colgroup>
            <col style="width:130px;">
            <col style="width:auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">첨언</th>
              <td>
                <textarea name="" id="" cols="" rows="" placeholder="입력하세요."></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap right">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">확인</button>
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
      currentTab: 0,
      showModal: this.propShowModal,
      tabsType: ['기본설정', '부가설정', '권한설정'],
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