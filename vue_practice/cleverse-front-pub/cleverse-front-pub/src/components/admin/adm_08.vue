<template>
	<div class="inner">
		<div class="sect-header">
			<div class="left">
				<h3>권한별 사용자정의</h3>
			</div>
		</div>

		<div class="group-admin_wrap">
			<div class="group-admin_sel">  
				<div class="treeselect">
					<treeselect
						v-model="treeSelected"
						:max-height="500"
						:options="treeData"
						:default-expand-level="0"
						:always-open="true"
						:load-options="handleLoadOptions"
						@select="onSelect"
						@deselect="onDeselect"
						:multiple="isMultiple"
						:autoSelectDescendants="false"
						:flat="true"
					></treeselect>
				</div>
			</div>

			<div class="group-admin_regist">
				<div class="tbl">
					<table>
						<colgroup>
							<col style="width:20%;">
							<col style="width:auto;">
						</colgroup>
						<tbody>
						<tr>
								<th scope="row">그룹위치</th>
								<td>
									<p class="bread-scr">
										한화생명 <span>&gt;</span> 전략부문 <span>&gt;</span> 투자솔루션
									</p>
								</td>
						</tr>
						<tr>
								<th scope="row">그룹명</th>
								<td>
									<form action="">
										<div class="input-box type1">
											<input type="text" required placeholder="그룹명">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
											<div class="error" v-if="error">에러 내용입력</div>
										</div>
									</form>
								</td>
						</tr>
						<tr>
								<th scope="row">
										<span class="asterisk">그룹구분</span>
								</th>
								<td>
									<div class="input-radio h16">
										<input type="radio" name="radCont1" id="radCont1_1" checked>
										<label for="radCont1_1">미지정</label>
									</div>
									<div class="input-radio h16">
										<input type="radio" name="radCont1" id="radCont1_2">
										<label for="radCont1_2">부문</label>
									</div>
									<div class="input-radio h16">
										<input type="radio" name="radCont1" id="radCont1_3">
										<label for="radCont1_3">클러스터</label>
									</div>
									<div class="input-radio h16">
										<input type="radio" name="radCont1" id="radCont1_4">
										<label for="radCont1_4">Side Project</label>
									</div>
									<div class="input-radio h16">
										<input type="radio" name="radCont1" id="radCont1_5">
										<label for="radCont1_5">Idea Farm</label>
									</div>
								</td>
						</tr>
						<tr>
								<th scope="row">
									<span>부문구분</span>
								</th>
								<td>
									<div class="input-radio h16">
										<input type="radio" name="radCont2" id="radCont2_1" checked>
										<label for="radCont2_1">공통부문</label>
									</div>
									<div class="input-radio h16">
										<input type="radio" name="radCont2" id="radCont2_2">
										<label for="radCont2_2">개별부분</label>
									</div>
								</td>
						</tr>
						<tr>
								<th scope="row">캐치프레이즈</th>
								<td>
									<form action="">
										<div class="input-box type1">
											<input type="text" required placeholder="그룹명" value="전략부문">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
											<div class="error" v-if="error">에러 내용입력</div>
										</div>
									</form>
								</td>
						</tr>
						<tr>
								<th scope="row">목표</th>
								<td>
									<form action="">
										<div class="input-box type1">
											<input type="text" required placeholder="목표를 입력해 주세요.(45자 이내)">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
											<div class="error" v-if="error">에러 내용입력</div>
										</div>
									</form>
								</td>
						</tr>
						<tr>
								<th scope="row">부문장</th>
								<td>
									<div class="group-link_list_wrap">
										<div class="group-link_list">
											김한화
											<!-- <span class="nodata">부문장 선택시 자동으로 노출됩니다.</span> -->
										</div>
										<div class="group-link_bn">
											<button type="button" class="btn md line-type2">선택</button>
										</div>
									</div>
								</td>
						</tr>
						<tr>
								<th scope="row">부문 구성원<br>연계</th>
								<td>
									<div class="group-link_list_wrap">
										<div class="group-link_list">
										<span class="nodata">부문 구성원 선택시 자동으로 노출됩니다.</span>
										</div>
										<div class="group-link_bn">
										<button type="button" class="btn md line-type2">선택</button>
										</div>
									</div>
								</td>
						</tr>
						<tr>
								<th scope="row">부문아이콘</th>
								<td>
									<div class="group-link_list_wrap">
											<div class="group-link_list">
												<img class="img-sector" src="@/assets/img/v2-svg/cluster-sector.svg">
												<span class="img-name">cluster-sector.svg</span>
											</div>
											<div class="group-link_bn">
												<button type="button" class="btn md line-type2">선택</button>
											</div>
									</div>
								</td>
						</tr>
						<tr>
							<th scope="row">조직도<br>연계</th>
							<td>
							<div class="group-link_list_wrap">
								<div class="group-link_list">
									<span class="nodata">연계 부문 선택시 자동으로 노출됩니다.</span>
								</div>
								<div class="group-link_bn">
									<button type="button" class="btn md line-type2">Clear</button>
								</div>
							</div>
							</td>
						</tr>
						</tbody>
					</table>

					<div class="group-admin_bn">
						<button type="button" class="btn md">하위 추가</button>
						<button type="button" class="btn md">이동/복사</button>
						<button type="button" class="btn md">삭제</button>
						<button type="button" class="btn md">저장</button>
					</div>

				</div>
			</div>
				
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'

export default defineComponent({
    // register the component
	components: { 
			Treeselect 
	},
	data() {
			return {
					// define the default value
					treeSelected: null,
					// define options
					treeData: [ 
						{
							id: 'a',
							label: 'a',
							children: [ 
								{
									id: 'aa',
									label: 'aa',
								}, {
									id: 'ab',
									label: 'ab',
								} 
							],
						}, {
							id: 'b',
							label: 'b',
						}, {
							id: 'c',
							label: 'c',
						},
						{
							id: 'e',
							label: 'e',
							children: [ 
								{
									id: 'f',
									label: 'f',
									children: [ 
										{
											id: 'j',
											label: 'j',
										}, {
											id: 'k',
											label: 'k',
											children: [ 
												{
													id: 'ja',
													label: 'ja',
												}, 
												{
													id: 'ka',
													label: 'ka',
													children: [ 
														{
															id: 'jb',
															label: 'jb',
														}, 
														{
															id: 'kb',
															label: 'kb',
														}, 
														{
															id: 'jbc',
															label: 'jbc',
														}, 
													],
												}, {
														id: 'kah',
														label: 'kah',
														children: [ 
															{
																id: 'jbh',
																label: 'jbh',
															}, 
															{
																id: 'jbhc',
																label: 'jbhc',
															}, 
														]
												} 
											],
										} 
									],
								},
								{
									id: 'n',
									label: 'n',
									children: [ 
										{
											id: 'aac',
											label: 'aac',
										}, {
											id: 'abc',
											label: 'abc',
										} 
									],
								},
								{
									id: 'g',
									label: 'g',
								} 
							],
						}, {
								id: 'h',
								label: 'h',
						}, {
								id: 'i',
								label: 'i',
						}, {
								id: 'l',
								label: 'l',
						}
				],
				isMultiple: false
			}
	},
})
</script>
