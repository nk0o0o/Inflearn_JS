<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="권한 변경/삭제"
    class="ly-pop-type1 admin"
  >
    <template v-slot:body>
		<div class="tbl">
			<table>
				<colgroup>
					<col style="width:20%;">
					<col style="width:auto;">
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">부문명</th>
						<td>
						<div class="form-wrap bs">
							<div class="member-grp">
								<div class="scroll">
									<div class="data">태그1<button type="button" class="del">x</button></div>
									<div class="data">태그2<button type="button" class="del">x</button></div>
								</div>
							</div>
							<div><button type="button" class="btn md line-type1">조직도에서 선택</button></div>
						</div>
						</td>
					</tr>
					<tr>
						<th scope="row">권한설정</th>
						<td>
							<div class="input-chk"> 
								<input type="checkbox" name="chk1" id="chk1_1"><label for="chk1_1">캡틴</label> 
							</div>
							<div class="input-chk"> 
								<input type="checkbox" name="chk1" id="chk1_2"><label for="chk1_2">위원회</label> 
							</div>
							<div class="input-chk"> 
								<input type="checkbox" name="chk1" id="chk1_3"><label for="chk1_3">관리자</label> 
							</div>
							<div class="input-chk"> 
								<input type="checkbox" name="chk1" id="chk1_4"><label for="chk1_4">최고관리자</label> 
							</div>
							<p class="star">캡틴 : - 
                                <ul class="depth1">
									<li>위원회 : 노드 승인 메뉴 접근가능</li> 
									<li>관리자 : 모든 메뉴 접근 가능</li> 
									<li>최고관리자 : 프론트 모든 기능 접근 가능</li>
								</ul>
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md line-type1">삭제</button>
			<button type="button" class="btn md">저장</button>
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