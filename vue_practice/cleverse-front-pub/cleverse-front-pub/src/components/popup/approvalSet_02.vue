<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="전자결재 비밀번호 설정"
    class="ly-pop-type1 mm"
  >
    <template v-slot:body>
		<div class="tbl data-type inp-round-type">
			<table>
				<colgroup>
					<col style="width:32%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
          <tr>
						<th scope="row">현재 비밀번호</th>
						<td>
							<div class="flex">
                <form class="flex-1" action="">
                  <div class="input-box type3 w100p">
                    <input type="password" required>
                    <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                    <div class="error" v-if="error">에러 내용입력</div>
                  </div>
                </form>
                <button type="button" class="btn md line-type1 mg-l5">비밀번호 초기화</button>
              </div>
						</td>
					</tr>
					<tr>
						<th scope="row">신규 비밀번호</th>
						<td>
							<form action="">
                <div class="input-box type3 w100p">
                  <input type="password" required>
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
						</td>
					</tr>
					<tr>
						<th scope="row">신규 비밀번호 확인</th>
						<td>
							<form action="">
                <div class="input-box type3 w100p">
                  <input type="password" required>
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <div class="error" v-if="error">에러 내용입력</div>
                </div>
              </form>
						</td>
					</tr>
				</tbody>
			</table>
      <div class="msg-imp org mg-t15">해당 비밀번호는 서클 비밀번호와는 무관하며 별도 설정됩니다.</div>
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