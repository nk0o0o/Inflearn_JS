<template>
  <base-popup
    :propShowModal="showModal"
    @popClose="onHideModal"
    @confirm="onConfirm"
    title="비밀번호 변경"
    class="ly-pop-type1 mm scroll"
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
      <ul class="list-dash gry mg-t15">
        <li>귀하의 비밀번호는 암호화되어 안전하게 관리되고 있습니다.</li>
        <li class="fc org">영소,영대,특수,숫자로 3가지 조합시 8~20자, 2가지 조합시 10~20자로 조합하여<br>사용하실 수 있습니다.</li>
        <li>생년월일, 전화번호 등 개인정보와 관련된 숫자, 연속된 숫자와 같이 쉬운 비밀번호는<br>다른 사람이 쉽게 알아낼 수 있으니 사용을 자제해 주시기 바랍니다.</li>
        <li>이전에 사용했던 비밀번호나 타 사이트와는 다른 비밀번호를 사용하고,<br>비밀번호는 주기적으로 변경해주세요.</li>
        <li>비밀번호 만료일 : 2022.12.15</li>
      </ul>
      <p class="msg-imp org mg-t5">로그인 시 비밀번호의 안전한 사용에 대한 책임은 당사자에게 있습니다.</p>
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