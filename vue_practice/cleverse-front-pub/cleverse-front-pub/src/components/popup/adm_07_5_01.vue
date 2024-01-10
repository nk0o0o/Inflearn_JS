<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="배너 정보 변경"
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
						<th scope="row">제목</th>
						<td>
							<div class="member-grp full">
								<div class="scroll">
									<p class="nodata"><span>지난 주 가장 활동적인 노드는?</span></p>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">배너 이미지</th>
						<td>
							<form action="">
								<div class="atch-box-wrap">
									<input type="file" id="atchfile" @change="handleFileChange">
									<label for="atchfile" class="atch-file">
										<span class="tit">{{file_name}}</span>
										<span class="btn-atch">불러오기</span>
									</label>
								</div>
							</form>
						</td>
					</tr>
					<tr>
						<th scope="row">노출기간</th>
						<td>
							<Datepicker 
								weekStart="0"
								v-model="rangeDate"
								range 
								:enableTimePicker="false"/>
						</td>
					</tr>
					<tr>
						<th scope="row">연결 URL</th>
						<td>
							<div class="input-box full">
								<p class="data">https://cp.Hanwha.com</p>
							</div>

						</td>
					</tr>
					<tr>
						<th scope="row">게시여부</th>
						<td>
							<div class="input-radio h16">
								<input type="radio" name="radio3" id="radio3_1" checked><label for="radio3_1">Y</label>
							</div>
							<div class="input-radio h16">
								<input type="radio" name="radio3" id="radio3_2"><label for="radio3_2">N</label>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn md">저장</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import Datepicker from '@vuepic/vue-datepicker';


export default defineComponent({
  components: {
    basePopup,
	Datepicker,
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
		rangeDate: [new Date(),new Date()],
		file_name: "1172 * 80 / png, jpg, /  50MB 이하",
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods: {
	onHideModal(){
		this.$emit('popClose');
	},
	handleFileChange(e:any) {
		this.file_name = e.target.files[0].name;
	}
  }
})
</script>