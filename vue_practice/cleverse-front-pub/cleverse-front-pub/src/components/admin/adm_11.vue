<template>
	<div class="inner">
		<div class="sect-header">
			<div class="left">
				<h3>게시판 관리</h3>
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
				<div class="tab-menu_wrap">
					<div class="tab-type1">
						<ul class="adm-tab-menu">
							<li :class="{'active':currentTab1===index}" v-for="(tab, index) in tabsType1" :key="index">
								<button type="button" @click="currentTab1 = index">{{tab}}</button>
							</li>
						</ul>
					</div>
				</div>
				<!-- s: 탭 컨텐츠 1 -->
				<div class="tab-contents" v-show="currentTab1 == 0">
					<div class="tbl">
						<table>
							<colgroup>
								<col style="width:20%;">
								<col style="width:auto;">
							</colgroup>
							<tbody>
							<tr>
									<th scope="row">게시판 ID</th>
									<td> 71817 </td>
							</tr>
							<tr>
									<th scope="row">게시판제목(korea)</th>
									<td>
										<div class="input-box type3 wid100">
											<input type="text" required placeholder="">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										</div>
									</td>
							</tr>
							<tr>
									<th scope="row">제목(english)</th>
									<td>
										<div class="input-box type3 wid100">
											<input type="text" required placeholder="">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										</div>
									</td>
							</tr>
							<tr>
									<th scope="row">
										<span>상태</span>
									</th>
									<td>
										<div class="input-radio h16">
											<input type="radio" name="radCont1" id="radCont1_1" checked>
											<label for="radCont1_1">활성</label>
										</div>
										<div class="input-radio h16">
											<input type="radio" name="radCont1" id="radCont1_2">
											<label for="radCont1_2">비활성</label>
										</div>
									</td>
							</tr>
							<tr>
									<th scope="row">링크여부</th>
									<td>
										<div class="input-chk square">
											<input type="checkbox" id="link1">
											<label for="link1">링크</label>
											<span class="link-txt">(*체크된 경우 아래 URL페이지와 링크됩니다.)</span>
										</div>

										<div class="input-box type3 wid100">
											<input type="text" required placeholder="">
											<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
										</div>
									</td>
							</tr>
							</tbody>
						</table>

						<div class="group-admin_bn">
							<button type="button" class="btn md">저장</button>
							<button type="button" class="btn md">글 목록</button>
						</div>
					</div>
				</div>
				<!-- //e: 탭 컨텐츠 1 -->

				<!-- s: 탭 컨텐츠 2 -->
				<div class="tab-contents" v-show="currentTab1 == 1">
					<div class="tbl">
						<table>
							<colgroup>
								<col style="width:20%;">
								<col style="width:auto;">
							</colgroup>
							<tbody>
							<tr>
									<th scope="row">속성</th>
									<td>
										<div class="board-chk-warp">
											<div class="input-chk square" v-for="(item,index) in chkList" :key="index">
												<input type="checkbox" :name="`chkCont${index}`" :id="`chkCont${index}`">
												<label :for="`chkCont${index}`">{{ item }}</label>
												<div class="input-box type3" v-if="item == '첨부파일'">
													<input type="text" required placeholder="" class="file-attach-mb">
													<span>&nbsp;MByte(최대50MB)</span>
												</div>
											</div>
										</div>

										<div class="board-select-wrap">
											<div class="board-multi-select">
												<select class="board-select" multiple="multiple">
													<option value="1">1one</option>
													<option value="2" selected="selected" >2two</option>
													<option value="3">3three</option>
													<option value="4">4four</option>
													<option value="5">5one</option>
													<option value="6">6two</option>
													<option value="7">7three</option>
													<option value="8">8four</option>
													<option value="9">9one</option>
													<option value="10">10two</option>
													<option value="11">11three</option>
													<option value="12">12four</option>
													<option value="13">13one</option>
													<option value="14">14two</option>
													<option value="15">15three</option>
													<option value="16">16four</option>
												</select>
											</div>
											<div class="select-order">
												<button type="button" class="order-up"><span class="blind">위로</span></button>
												<button type="button" class="order-down"><span class="blind">아래로</span></button>
											</div>
										</div>

										<div class="input-wrap">
											<div class="input-box type3">
												<input type="text" required placeholder="">
												<button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
											</div>
											<button type="button" class="btn md line-type2">추가</button>
											<button type="button" class="btn md line-type2">수정</button>
											<button type="button" class="btn md line-type2">삭제</button>
										</div>
									</td>
							</tr>
							<tr>
									<th scope="row">등록 승인여부</th>
									<td>
										<select class="board-select default">
											<option value="1">사용함</option>
											<option value="2">사용안함</option>
										</select>
									</td>
							</tr>
							<tr>
									<th scope="row">등록 알림 대상</th>
									<td>
										<div class="board-select-wrap">
											<div class="board-multi-select">
												<select class="board-select" multiple="multiple">
													<option value="1">1one</option>
													<option value="2" selected="selected" >2two</option>
													<option value="3">3three</option>
													<option value="4">4four</option>
													<option value="5">5one</option>
													<option value="6">6two</option>
													<option value="7">7three</option>
													<option value="8">8four</option>
													<option value="9">9one</option>
													<option value="10">10two</option>
													<option value="11">11three</option>
													<option value="12">12four</option>
													<option value="13">13one</option>
													<option value="14">14two</option>
													<option value="15">15three</option>
													<option value="16">16four</option>
												</select>
											</div>
											<div class="select-order">
												<button type="button" class="btn md line-type2">추가</button>
												<button type="button" class="btn md line-type2">삭제</button>
											</div>
										</div>
									</td>
							</tr>
							<tr>
									<th scope="row">본문유형</th>
									<td>
										<select class="board-select default">
											<option value="1">기본(웹 에디터 사용)</option>
										</select>
									</td>
							</tr>
							<tr>
									<th scope="row">목록설정</th>
									<td>
										<div class="list-set-wrap">
											<!-- s: 왼쪽 메뉴 -->
											<ul class="set-left">
												<li>
													<div class="input-chk square">
														<input type="checkbox" id="item1-1">
														<label for="item1-1">점수[<span>5%</span>]</label>
													</div>
												</li>
												<li>
													<div class="input-chk square">
														<input type="checkbox" id="item1-2">
														<label for="item1-2">조회기록[<span>5%</span>]</label>
													</div>
												</li>
											</ul>
											<!-- //e: 왼쪽 메뉴 -->

											<!-- s: 버튼 -->
											<div class="set-btn">
												<button type="button" class="btn md line-type2">추가</button>
												<button type="button" class="btn md line-type2">삭제</button>
											</div>
											<!-- //e: 버튼 -->

											<!-- s: 오르쪽 메뉴 -->
											<ul class="set-right">
												<li>
													<div class="input-chk square">
														<input type="checkbox" id="item2-1">
														<label for="item2-1">번호[<span>5%</span>]</label>
													</div>
												</li>
												<li>
													<div class="input-chk square">
														<input type="checkbox" id="item2-2">
														<label for="item2-2">첨부[<span>2%</span>]</label>
													</div>
												</li>
											</ul>
											<!-- //e: 오르쪽 메뉴 -->
										</div>

										<div class="set-column">
											<span class="column-txt">컬럼너비</span>
											<div class="input-box type3">
												<input type="text" required placeholder="">
											</div>
											%
											<button type="button" class="btn md line-type2">적용</button>
										</div>
									</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- //e: 탭 컨텐츠 2 -->

				<!-- s: 탭 컨텐츠 3 -->
				<div class="tab-contents" v-show="currentTab1 == 2">
					<div class="tbl">
						<table>
							<colgroup>
								<col style="width:20%;">
								<col style="width:auto;">
							</colgroup>
							<tbody>
							<tr>
									<th scope="row">관리자</th>
									<td>
										<div class="board-select-wrap">
											<div class="board-multi-select">
												<select class="board-select" multiple="multiple">
													<option value="1">1one</option>
													<option value="2" selected="selected" >2two</option>
													<option value="3">3three</option>
													<option value="4">4four</option>
													<option value="5">5one</option>
													<option value="6">6two</option>
													<option value="7">7three</option>
													<option value="8">8four</option>
													<option value="9">9one</option>
													<option value="10">10two</option>
													<option value="11">11three</option>
													<option value="12">12four</option>
													<option value="13">13one</option>
													<option value="14">14two</option>
													<option value="15">15three</option>
													<option value="16">16four</option>
												</select>
											</div>
											<div class="select-order">
												<button type="button" class="btn md line-type2">추가</button>
												<button type="button" class="btn md line-type2">삭제</button>
											</div>
										</div>
									</td>
							</tr>
							<tr>
									<th scope="row">세부권한</th>
									<td>
										<div class="input-chk square">
											<input type="checkbox" id="detail-authority">
											<label for="detail-authority">권한필요</label>
										</div>
									</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- //e: 탭 컨텐츠 2 -->
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
			Treeselect,
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
				isMultiple: false,
				currentTab1: 0,
				tabsType1: ['기본설정', '부가설정', '권한설정'],
				chkList:[
									"기간 지정",
									"수정금지",
									"누구나 수정 가능",
									"긴급표시 사용",
									"답변(Reply)가능",
									"글 등록시 알림",
									"익명 설정",
									"첨부파일",
									"추천하기",
									"별체크 사용",
									"공지글 등록 허용",
									"HTML제목허용",
									"답변시 SNS알림",
									"게시글 열람권한 설정",
									"링크URL 설정",
									"회사공지 사용",
									"임직원용 글 등록 허용",
									"인쇄금지",
									"첨부파일 다운로드 금지",
									"작성자 비공개",
									"컨텐츠 비공개",
									"컨텐츠 이동 제한",
									"게시글분류"
				],
			}
	},
})
</script>
