<template>
	<div>
		<div class="sect-header">
			<div class="left">
				<h3>통계자료 다운로드</h3>
			</div>
		</div>
	<div class="tbl">
		<table>
			<colgroup>
			<col style="width:20%;">
			<col style="width:auto;">
			</colgroup>
			<tbody>
			<tr>
				<th scope="row">개인/노드/클러스터별</th>
				<td>
					<div class="statistics-date">
						<Datepicker 
							weekStart="0"
							v-model="rangeDate"
							range 
							:enableTimePicker="false"/>
						<button type="button" class="btn sm line-type2">엑셀 다운로드</button>
					</div>
					<div class="statistics-select">
						<div class="board-count" v-for="(item,index) in chkList" :key="index">
							<span v-for="(item1,index1) in item" :key="index1">
								<input type="checkbox" :name="'chkCont'+index+'_'+index1" :id="'chkCont'+index+'_'+index1">
								<label :for="'chkCont'+index+'_'+index1">{{ item1 }}</label>
							</span>
						</div>
					</div>
				</td>
			</tr>
			<tr>
					<th scope="row">로그인 사용자 수</th>
					<td>
						<div class="statistics-date">
							<Datepicker
								weekStart="0"
								v-model="rangeDate"
								range 
								:enableTimePicker="false"/>
							<button type="button" class="btn sm line-type2">엑셀 다운로드</button>
						</div>
					</td>
			</tr>
			<tr>
					<th scope="row">보드별 접근 횟수</th>
					<td>
						<div class="statistics-date">
							<Datepicker
								weekStart="0"
								v-model="rangeDate"
								range 
								:enableTimePicker="false"/>
							<button type="button" class="btn sm line-type2">엑셀 다운로드</button>
						</div>
					</td>
			</tr>
			</tbody>
		</table>
	</div>

	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';

export default defineComponent({
	components: {
		Datepicker,
	},
	data () {
		return {
			error: false,
			show : false,
			rangeDate: [new Date(),new Date()],
			chkList:[
				["비정규 노드","생성 신청 건수"],
				["Task log","생성 건수","의견 작성 건수","요청 건수","파일 업로드 건수","텍스트/표 생성 건수"],
				["Side Task","생성 건수","의견 작성 건수","요청 건수","파일 업로드 건수","텍스트/표 생성 건수"],
				["협업보드","생성 건수","의견 작성 건수","요청 건수","파일 업로드 건수","텍스트/표 생성 건수"],
				["로그인","로그인 수"],
			],
		}
	},
	methods: {
        
  },
})
</script>