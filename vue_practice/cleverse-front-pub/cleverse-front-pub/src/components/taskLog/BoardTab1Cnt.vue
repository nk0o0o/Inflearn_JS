<template>
	<div class="boardtab1-cnt-wrap">
		<!-- 보드 편집 영역 S -->
		<div>
			<p style="height: 50px;"></p>
			<div class="menubar" style="left: 200px; top: 400px;">
				<span>
					<button class="menubar-button tb-add-btn1"> 상단행 </button> <!-- 위행추가 -->
					<button class="menubar-button tb-add-btn2"> 하단행 </button> <!-- 아래행추가 -->
					<button class="menubar-button tb-add-btn3"> 행삭제 </button> <!--  -->
					<div class="div"></div>
					<button class="menubar-button tb-add-btn4"> 좌측열 </button> <!-- 앞열추가 -->
					<button class="menubar-button tb-add-btn5"> 우측열 </button> <!-- 뒷열추가 -->
					<button class="menubar-button tb-add-btn6"> 열삭제 </button> <!--  -->
					<div class="div"></div>
					<button class="menubar-button tb-add-btn7"> 셀병합 </button> <!--  -->
					<button class="menubar-button tb-add-btn8"> 셀분할 </button> <!--  -->
					<div class="div"></div>
					<button class="menubar-button tb-add-btn9"> 표삭제 </button> <!-- 테이블삭제 -->
				</span>
			</div>
			<p style="height: 50px;"></p>
			<div class="menububble" style="left: 300px; top: 500px;">
				<select-view
					:propOptionList="optionLsit"
					:propPlaceholder="'H1(40pt)'"
					:propClass="'type2 wht'"
					>
				</select-view>
				<div class="div"></div>
				<button class="menububble-button h2"> H2 </button>
				<button class="menububble-button h3"> H3 </button>
				<button class="menububble-button b"><i aria-hidden="true" class="fa fa-bold"></i></button>
				<button class="menububble-button i"><i aria-hidden="true" class="fa fa-italic"></i></button>
				<button class="menububble-button strikethrough"><i aria-hidden="true" class="fa fa-strikethrough"></i></button>
				<button class="menububble-button underline"><i aria-hidden="true" class="fa fa-underline"></i></button>
				<div class="div"></div>
				<div tabindex="-1" class="vue-swatches">
						<div class="vue-swatches__trigger__wrapper">
							<button value="#000000" class="menububble-button swatches"><i aria-hidden="true" class="fa fa-eyedropper"></i></button>
						</div>
						<div class="vue-swatches__container clear col-4">
							<button class="c-ff0000" style="background-color:#000"></button>
							<button class="c-ff6600 active" style="background-color:#666"></button>
							<button class="c-fff000" style="background-color:#999"></button>
							<button class="c-d8ff00" style="background-color:#b8814c"></button>

							<button class="c-7eff00" style="background-color:#f97723"></button>
							<button class="c-00ff7e" style="background-color:#eca90f"></button>
							<button class="c-00ffe4" style="background-color:#f3da33"></button>
							<button class="c-00ccff" style="background-color:#ff0000"></button>

							<button class="c-0078ff" style="background-color:#0024ff"></button>
							<button class="c-0024ff" style="background-color:#34a6db"></button>
							<button class="c-4800ff" style="background-color:#794ccd"></button>
							<button class="c-732020" style="background-color:#682007"></button>

							<button class="c-4a3303" style="background-color:#15a293"></button>
							<button class="c-5f265c" style="background-color:#a2c10b"></button>
							<button class="c-808080" style="background-color:#259c00"></button>
							<button class="c-000000" style="background-color:#ed67cc"></button>
						</div>
					</div>
					<div class="div"></div>
					<button class="menububble-button left"><i aria-hidden="true" class="fa fa-align-left"></i></button>
					<button class="menububble-button center"><i aria-hidden="true" class="fa fa-align-center"></i></button>
					<button class="menububble-button right"><i aria-hidden="true" class="fa fa-align-right"></i></button>
					<button class="menububble-button justify"><i aria-hidden="true" class="fa fa-align-justify"></i></button>
					<div class="div"></div>
					<button class="menububble-button list"><i aria-hidden="true" class="fa fa-list"></i></button>
					<button class="menububble-button list-ol"><i aria-hidden="true" class="fa fa-list-ol"></i></button>
					<button class="menububble-button page-break"><i aria-hidden="true" class="fa fa-page-break"></i></button>
			</div>
		</div>
		<p style="height: 150px;"></p>
		<div class="editor-wrapper">
			<div>
				<div class="ProseMirror" contenteditable="true" tabindex="0">
					<h1>H1 협업서비스 디자인 시안</h1>
					<h2>H2 협업서비스 디자인 시안</h2>
					<h3>H3 협업서비스 디자인 시안</h3>
					<h4>H4 협업서비스 디자인 시안</h4>
					<h5>H5 협업서비스 디자인 시안</h5>
					<h6>H6 협업서비스 디자인 시안</h6>
					<p style="text-align: left">본문 글자 사이즈 적용하였습니다.</p>
					<p style="text-align: left">화면 꽉 차게 작성합니다. 한 줄의 최대길이까지 작성 가능합니다. 작성자가 줄바꿈을 하지 않으면 한줄의 최대 길이까지 작성됩니다. 최대길이까지 작성 완료되었습니다. 최대길이는 </p>
					<p style="text-align: left"><strong>지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다. 지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</strong></p>
					<p style="text-align: left">* 지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 <span class="modify-highlight">러프스케치과정</span>을 거쳤고, 메인 디자인 시안을 진행하였습니다.</p>
					<h2>H2 협업서비스 디자인 시안</h2>
					<p style="text-align: left"><em>지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다. 지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</em></p>
					<p style="text-align: left"><s>지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다. 지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</s></p>
					<p style="text-align: left"><u>지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다. 지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</u></p>
					<p style="text-align: left"><span style="color:#FF0000">* 지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</span></p>
					<h3>H3 협업서비스 디자인 시안</h3>
					<ol>
						<li class="dropdown-file">
							<p style="text-align: left">과제 시스템 진입점에 대한 결정 필요 <br>서클 내 위치할 경우 홈화면이 너무 성과/평가에 치우쳐 보이지 않았으면 좋겠음.</p>
							<button type="button" class="dropdown-file-preview">
								<span class="ico-file-gif large"></span>
							</button>
							<button type="button" class="dropdown-file-preview ico-imgs">
								<img :src="require('@/assets/imgs/collaboration/img/dropdown-img-sample.png')">
							</button>
						</li>
						<li><p style="text-align: left">서클 내 위치할 경우 홈화면이 너무 성과/평가에 치우쳐 보이지 않았으면 좋겠음.</p></li>
						<li><p style="text-align: left">서클 내 위치할 경우 홈화면이 너무 성과/평가에 치우쳐 보이지 않았으면 좋겠음.</p></li>
					</ol>

					<div class="eidtbox-ty1 content_line">
						<div class="row_box clear hover_box">
							<div class="hover_inner">
								<div class="move hidden"></div>
								<div class="block_handle">&nbsp;</div>
								<div><hr></div>
							</div>
						</div>
					</div><!-- //content_line -->

					<ul>
						<li><p style="text-align: left">과제 시스템 진입점에 대한 결정 필요 <br>서클 내 위치할 경우 홈화면이 너무 성과/평가에 치우쳐 보이지 않았으면 좋겠음.</p></li>
						<li><p style="text-align: left">서클 내 위치할 경우 홈화면이 너무 성과/평가에 치우쳐 보이지 않았으면 좋겠음.</p></li>
						<li><p style="text-align: left">서클 내 위치할 경우 홈화면이 너무 성과/평가에 치우쳐 보이지 않았으면 좋겠음.</p></li>
					</ul>

					<div class="eidtbox-ty1 content_line">
						<div class="row_box clear hover_box">
							<div class="hover_inner">
								<div class="move hidden"></div>
								<div class="block_handle">&nbsp;</div>
								<div><hr></div>
							</div>
						</div>
					</div><!-- //content_line -->

					<div class="hw-tb-color-0">
						<div class="tableWrapper">
							<table style="min-width: 519px; width: 740px;">
								<colgroup>
										<col style="width: 247px;">
										<col style="width: 247px;">
										<col style="width: 246px;">
								</colgroup>
								<tbody>
									<tr>
										<th data-colwidth="247"><p style="text-align: center">구분자1</p></th>
										<th data-colwidth="247"><p style="text-align: center">구분자2</p></th>
										<th data-colwidth="246"><p style="text-align: center">구분자3</p></th>
									</tr>
									<tr>
										<td data-colwidth="247"><p style="text-align: left">데이터 입력한 내용</p></td>
										<td data-colwidth="247"><p style="text-align: left">데이터 입력한 내용</p></td>
										<td data-colwidth="246"><p style="text-align: left">데이터 입력한 내용</p></td>
									</tr>
									<tr class="">
										<td data-colwidth="247"><p style="text-align: left">데이터 입력한 내용</p></td>
										<td data-colwidth="247"><p style="text-align: left">데이터 입력한 내용</p></td>
										<td data-colwidth="246"><p style="text-align: left">데이터 입력한 내용</p></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div data-v-0a93ba96="" data-v-1df72fb5=""><div data-v-0a93ba96="" data-block-id="BLOC20210831110826838HxEb" class="contentblock board_layout box-click owner"><div data-v-0a93ba96="" class="editor"><div data-v-0a93ba96="" class="name">헬로우</div> <div data-v-0a93ba96="" class="lock">잠김</div></div> <div data-v-0a93ba96="" class="eidtbox-ty1 align_top"><div data-v-0a93ba96="" class="row_box clear hover_box"><div data-v-0a93ba96="" class="hover_inner"><div data-v-0a93ba96="" class="move"></div> <div data-v-0a93ba96="" data-block-id="BLOC20210831110826838HxEb" transfer-data="BLOC20210831110826838HxEb" class="block_handle" style="top: 0px; height: 138px;">&nbsp;</div> <div data-v-0a93ba96=""><div data-v-0a93ba96="" class="editor-wrapper cell-resize" style="width: 1244px; position: relative; overflow-x: auto;"><div data-v-0a93ba96=""><div contenteditable="true" tabindex="0" class="ProseMirror" style="width: 1244px;"><div class="hw-tb-color-2"><div class="tableWrapper">
				<table style="width: 1956px;"><colgroup><col style="width: 387px;"><col style="width: 387px;"><col style="width: 182px;"></colgroup><tbody><tr class=""><th style="background:#f6f7fa;color:#666;" data-colwidth="387"><p style="text-align:left"><br></p></th><th style="background:#f6f7fa;color:#666;" data-colwidth="387" class=""><p style="text-align:left" class=""><br></p></th><th style="background:#f6f7fa;color:#666;" data-colwidth="182"><p style="text-align:left"><br></p></th></tr><tr><td data-colwidth="387"><p style="text-align:left"><br></p></td><td data-colwidth="387"><p style="text-align:left"><br></p></td><td data-colwidth="182"><p style="text-align:left"><br></p></td></tr><tr class=""><td data-colwidth="387"><p style="text-align:left"><br></p></td><td data-colwidth="387"><p style="text-align:left"><br></p></td><td data-colwidth="182" class=""><p style="text-align:left" class=""><br></p></td></tr></tbody></table></div></div></div></div></div></div> <div data-v-0a93ba96="" class="hover_comment"><div data-v-0a93ba96="" class="tutorial-wrap"><button data-v-0a93ba96="" type="button" class="permit_everyone"><span data-v-0a93ba96="" class="count">&nbsp;</span></button></div></div></div></div></div></div></div>
		<!-- //보드 편집 영역 E -->

		<p class="tit-guide">이미지추가(펼침) / 잠김 본인 [BDS_008]</p>
		<div class="board_layout box-click owner content block">
			<div class="create-user recent">
				<span>일이삼사오육칠팔구십일이삼사오</span>
				<v-tooltip
					activator='parent'
					anchor='bottom'
					content-class='bottom right f-14 ta-r'
				>
					<p>생성자 : 김한화</p>
					<p class="f-13 fc lgray">2021.01.01 12:00</p>
					<p>최종수정자 : 김한화</p>
					<p  class="f-13 fc lgray">2021.01.01 12:00</p>
				</v-tooltip>
			</div>
			<div class="editor">
				<div class="name">김영철김영철김영철김영철김영철김영철</div>
				<div class="lock">잠김</div>
			</div>
			<div class="eidtbox-ty1">
				<div class="h1">협업서비스 디자인 시안</div>
				<div class="txt">지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</div>
				<div class="img_box">
					<div class="one">
						<img :src="require('@/assets/imgs/collaboration/img/img-board-1.png')">
						<div class="btn">
							<button type="button" class="img_zoom active">이미지 축소 확대</button>
							<drop-util
								:propItem="dropItem"
								@selected="utilMenuSelected"
							/>
						</div>
					</div>
					<div class="one">
						<img :src="require('@/assets/imgs/collaboration/img/img-board-1.png')">
						<div class="btn">
							<button type="button" class="img_zoom active">이미지 축소 확대</button>
							<drop-util
								:propItem="dropItem"
								@selected="utilMenuSelected"
							/>
						</div>
					</div>
				</div>
				<div class="txt">1.지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</div>
				<div class="txt">2.지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</div>
				<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
			</div>
		</div>

			<p class="tit-guide">이미지추가(펼침)  / 잠김 타인 [BDS_008]</p>
			<div class="board_layout box-click another">
				<div class="editor">
					<div class="name">박소담</div>
					<div class="lock">잠김</div>
				</div>
				<div class="eidtbox-ty1">
					<div class="h1">협업서비스 디자인 시안</div>
					<div class="txt">지금까지의 회의와 정보를 토대로 디자인을 하기에 앞서 러프스케치과정을 거쳤고, 메인 디자인 시안을 진행하였습니다.</div>
					<div class="img_box">
						<div class="one">
								<img :src="require('@/assets/imgs/collaboration/img/img-board-1.png')">
								<div class="btn">
									<button type="button" class="img_zoom active">이미지 축소 확대</button>
									<drop-util
										:propItem="dropItem"
										@selected="utilMenuSelected"
									/>
								</div>
							</div>
							<div class="one">
								<img :src="require('@/assets/imgs/collaboration/img/img-board-1.png')">
								<div class="btn">
									<button type="button" class="img_zoom active">이미지 축소 확대</button>
									<drop-util
										:propItem="dropItem"
										@selected="utilMenuSelected"
									/>
								</div>
							</div>
					</div>
				</div>
				<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
			</div>
			<p class="tit-guide">텍스트</p>
			<div class="row_box hover_box">
				<div class="hover_inner">
					<div>글자스타일 H3_2021.05.02 회의 내용</div>
					<div class="hover_comment">
						<div class="tutorial-wrap">
							<button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button>
							<div class="tooltip-b cr tutorial" v-if="tutorialClose">
								<ul class="list-dot">
									<li>아이콘을 누르시면 단락별 피드백도 가능합니다.</li>
								</ul>
								<button type="button" class="tutorial-close" @click="tutorialBtn"><span class="hide">닫기</span></button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="tit-guide">텍스트 단락별 코멘트 아이콘 활성화</p>
			<div class="row_box hover_box">
				<div class="hover_inner">
					<div>글자스타일 H3_2021.07.29 툴팁 추가</div>
					<div class="hover_comment active">
						<div class="tutorial-wrap">
							<button type="button" @click="paperAllComment()"><span class="count">99+</span></button>
							<div class="tooltip-b cr tutorial" v-if="tutorialClose">
								<ul class="list-dot">
									<li>아이콘을 누르시면 단락별 피드백도 가능합니다.</li>
								</ul>
								<button type="button" class="tutorial-close" @click="tutorialBtn"><span class="hide">닫기</span></button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p class="tit-guide">이미지추가(접힘) [BDS_007]</p>
			<div class="board_layout content block">
				<div class="create-user">
					<span>생성자 영역2</span>
					<v-tooltip
						activator='parent'
						anchor='bottom'
						content-class='bottom right f-14 ta-r'
					>
						<p>생성자 : 김한화</p>
						<p class="f-13 fc lgray">2021.01.01 12:00</p>
						<p>최종수정자 : 김한화</p>
						<p  class="f-13 fc lgray">2021.01.01 12:00</p>
					</v-tooltip>
				</div>
				<div class="attachfile_box">
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file img"><span class="file-name ell-singleline">LIFEPLUS 디자인가이드LIFEPLUS </span><span>.jpg</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
								</div>
								<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">99+</span></button></div>
							</div>
						</div>
					</div>
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file pdf"><span class="file-name ell-singleline">협업서비스 디자인 시안 B타입</span><span>.pdf</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
									<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file excel"><span class="file-name ell-singleline">협업서비스 디자인 시안 B타입</span><span>.xlsx</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
									<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file word"><span class="file-name ell-singleline">협업서비스 디자인 시안 B타입</span><span>.word</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
									<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file ppt"><span class="file-name ell-singleline">협업서비스 디자인 시안 B타입</span><span>.ppt</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
									<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file hwp"><span class="file-name ell-singleline">협업서비스 디자인 시안 B타입</span><span>.hwp</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
									<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file zip"><span class="file-name ell-singleline">협업서비스 디자인 시안 B타입</span><span>.zip</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
									<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="ico-file etc"><span class="file-name ell-singleline">협업서비스 디자인 시안 B타입</span><span>.etc</span></div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
									<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p class="tit-guide">대용량 파일 업로드시 로딩 아이콘노출 [BDS_009]</p>
			<div class="board_layout">
				<div class="attachfile_box">
					<div class="row_box hover_box">
						<div class="hover_inner">
							<div class="file_row clear">
								<div class="move"></div>
								<div class="file_name ico-file img">협업서비스 디자인 시안 A타입.jpg</div>
								<div class="btn">
									<button type="button" class="img_zoom">이미지 확대 축소</button>
									<div class="drop">
										<div class="dropdown-type1 dot-gry">
											<dropdown-menu
												:propItem="dropItem"
											></dropdown-menu>
										</div>
									</div>
								</div>
								<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">99+</span></button></div>
							</div>
						</div>
						<div class="loading-box white">
							<div class="loader_wrap">
								<div class="loader">파일 업로드 중입니다.</div>
								<div class="loader-txt">파일 업로드 중입니다.</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p class="tit-guide">의사결정 등록 [BDS_081]</p>
			<div class="todo_wrap write hover_box">
				<div class="hover_inner">
					<div class="move"></div>
					<div class="top">
						<div class="label-fin">의사결정</div>
						<span class="status-txt">승인 전</span>
						<div class="dividing_line_ty2"></div>
						<div class="dropdown-collab-type3 txt-arw">
							<memberCall-search></memberCall-search>
						</div>
						<div class="right">
							<div class="date">2020.12.18</div>
						</div>
					</div>
					<div class="write_grp clear">
						<div class="write fl">
							<form action="">
								<div class="input-box">
									<textarea name="" placeholder="의사결정 요청 내용을 입력하여 위젯을 등록한 후, 클릭하여 파일을 첨부해보세요." maxlength="100" id="todo3" @keyup="todo3(100)"></textarea>
									<button type="reset" class="input-txt-del">입력 삭제</button>
									<div class="character-limit_box txtr"><span class="error" v-if="error">입력 가능한 글자수를 초과하였습니다.</span> <span class="count">(<b>3</b>/100)</span></div>
									<div class="error" v-if="error">검토/의사결정 요청 내용을 입력해주세요.</div>
								</div>
							</form>
						</div>
						<div class="btn_box fr">
							<button type="button" class="btn-txt-primary">취소</button>
							<button type="button" class="btn-txt-primary black">등록</button>
						</div>
					</div>
					<div class="hover_comment">
						<div class="tutorial-wrap">
							<button type="button" @click="paperAllComment()"><span class="count">99+</span></button>
							<div class="tooltip-b cr tutorial" v-if="tutorialClose">
								<ul class="list-dot">
									<li>아이콘을 누르시면 단락별 피드백도 가능합니다.</li>
								</ul>
								<button type="button" class="tutorial-close" @click="tutorialBtn"><span class="hide">닫기</span></button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p class="tit-guide">의사결정 [BDS_082] 승인전</p>
			<div class="todo_wrap view hover_box dropdown-file">
				<div class="hover_inner">
					<div class="move"></div>
					<div class="top">
						<div class="label-fin">의사결정</div>
						<div class="status-txt">승인 전</div>
						<div class="dividing_line_ty2"></div>
						<div class="ico_attachfile">첨부파일</div>
						<div class="right">
							<div class="date">2020.11.10</div>
							<div class="re-de">
								<div class="re">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3 gray'"
										>
										</dropdown-menu2>
									</div>
								</div>
								<div class="division"></div>
								<div class="de">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3'"
										>
										</dropdown-menu2>
									</div>
								</div>
							</div>
							<div class="drop">
								<div class="dropdown-type1 dot-gry">
									<dropdown-menu
										:propItem="dropItem8"
									></dropdown-menu>
								</div>
							</div>
						</div>
					</div>
					<div class="view">타사 건강보험 상품 판매 데이터 수집 요청타사 건강보험 상품 판매 데이터 수집 요청타사 건강보험 상품 판매 데이터 수집 요청타사 건강보험 상품 판매 데이터 수집 요청타사 건강보험 상품 판매 데이터 수집 요청타사 건강보험 상품 판매 데이터 수집 요청</div>
					<div class="hover_comment active">
						<div class="tutorial-wrap">
							<button type="button" @click="paperAllComment()"><span class="count">99+</span></button>
							<div class="tooltip-b cr tutorial" v-if="tutorialClose">
								<ul class="list-dot">
									<li>아이콘을 누르시면 단락별 피드백도 가능합니다.</li>
								</ul>
								<button type="button" class="tutorial-close" @click="tutorialBtn"><span class="hide">닫기</span></button>
							</div>
						</div>
					</div>
				</div>
				<button type="button" class="dropdown-file-preview"><span class="ico-file-gif large"></span></button>
				<button type="button" class="dropdown-file-preview ico-imgs"><img :src="require('@/assets/imgs/collaboration/img/dropdown-img-sample.png')"></button>
			</div>

			<p class="tit-guide">의사결정 [BDS_082] 승인전 - 등록 중</p>
			<div class="todo_wrap view hover_box data_entry">
				<div class="hover_inner">
					<div class="move"></div>
					<div class="top">
						<div class="label-fin">의사결정</div>
					</div>
				</div>
				<div class="loading-box white"><div class="loader_wrap"><div class="loader">등록 중입니다.</div> <div class="loader-txt">등록 중입니다.</div></div></div>
			</div>

			<p class="tit-guide">의사결정 [BDS_082] 승인</p>
			<div class="todo_wrap view hover_box">
				<div class="hover_inner">
					<div class="move"></div>
					<div class="top">
						<div class="label-fin">의사결정</div>
						<div class="status-txt">승인</div>
						<div class="dividing_line_ty2"></div>
						<div class="ico_attachfile">첨부파일</div>
						<div class="right">
							<div class="date">2020.11.10<span class="ico-new"></span></div>
							<div class="re-de">
								<div class="re">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3 gray'"
										>
										</dropdown-menu2>
									</div>
								</div>
								<div class="division"></div>
								<div class="de">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3'"
										>
										</dropdown-menu2>
									</div>
								</div>
							</div>
							<div class="drop">
								<div class="dropdown-type1 dot-gry">
									<dropdown-menu
										:propItem="dropItem8"
									></dropdown-menu>
								</div>
							</div>
						</div>
					</div>
					<div class="view">타사 건강보험 상품 판매 데이터 수집 요청</div>
					<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
				</div>
			</div>

			<p class="tit-guide">의사결정 [BDS_082] 반려</p>
			<div class="todo_wrap view hover_box">
				<div class="hover_inner">
					<div class="move"></div>
					<div class="top">
						<div class="label-fin">의사결정</div>
						<div class="status-txt">승인</div>
						<!-- <div class="dividing_line_ty2"></div> -->
						<div class="right">
							<div class="date">2020.11.10<span class="ico-new"></span></div>
							<div class="re-de">
								<div class="re">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3 gray'"
										>
										</dropdown-menu2>
									</div>
								</div>
								<div class="division"></div>
								<div class="de">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3'"
										>
										</dropdown-menu2>
									</div>
								</div>
						</div>
						<div class="drop">
							<div class="dropdown-type1 dot-gry">
								<dropdown-menu
									:propItem="dropItem8"
								></dropdown-menu>
							</div>
						</div>
					</div>
				</div>
				<div class="view">타사 건강보험 상품 판매 데이터 수집 요청</div>
				<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
			</div>
		</div>

		<p class="tit-guide">할 일 등록 [BDS_020]</p>
		<div class="todo_wrap write hover_box">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="top">
					<div class="label-fin">할 일</div>
					<div class="dropdown-collab-type1 icon" id="select-box">
						<dropdown-menu
							:propisSlotMode="true"
							:propSelectText="selectSlotText"
							:propId="'select-box'"
							@selected="selectSlotValue"
							:propType="true"
							:propLocation="'bottom'"
						>
							<template v-slot:img>
								<i :class="imgSectorClass"></i>
							</template>
							<template v-slot:body={on}>
								<div class="dropdown-collab-list-type1 pub-prav" :style="`width:${on.width}px`">
									<div
										class="item"
										v-for="(item, index) in dropItem9"
										:key="index"
										:value="index"
										:class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
									>
										<button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
											{{ item.title }}
										</button>
									</div>
								</div>
							</template>
						</dropdown-menu>
					</div>
					<div class="dividing_line_ty2"></div>
					<div class="dropdown-collab-type3 txt-arw">
						<memberCall-search2></memberCall-search2>
					</div>
					<div class="right">
						<div class="date bd0">
							<Datepicker
								v-model="date"
								:format="format"
								@update:modelValue="onUpdateDate"
								:enableTimePicker="false"
								locale="ko"
								cancelText="취소"
								selectText="선택"
							/>
						</div>
					</div>
				</div>
				<div class="write_grp clear">
					<div class="write fl">
						<form action="">
							<div class="input-box">
								<textarea name="" placeholder=" 할 일을 입력해 주세요." maxlength="100" id="todo1" @keyup="todo1(100)"></textarea>
								<button type="reset" class="input-txt-del">입력 삭제</button>
								<div class="error" v-if="error">할 일을 입력해 주세요.</div>
								<div class="character-limit_box txtr"><span class="error" v-if="error">입력 가능한 글자수를 초과하였습니다.</span> <span class="count">(<b>{{ count1 }}</b>/100)</span></div>
							</div>
						</form>
					</div>
					<div class="btn_box fr">
						<button type="button" class="btn-txt-primary">취소</button>
						<button type="button" class="btn-txt-primary black">등록</button>
					</div>
				</div>
				<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
			</div>
		</div>

		<p class="tit-guide">담당자 등록 [BDS_021]</p>
		<div class="todo_wrap write hover_box">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="top">
					<div class="label-fin">할 일</div>
					<div class="dropdown-collab-type1 icon" id="select-box">
						<dropdown-menu
							:propisSlotMode="true"
							:propSelectText="selectSlotText"
							:propId="'select-box'"
							@selected="selectSlotValue"
							:propType="true"
							:propLocation="'bottom'"
						>
							<template v-slot:img>
								<i :class="imgSectorClass"></i>
							</template>
							<template v-slot:body={on}>
								<div class="dropdown-collab-list-type1 pub-prav" :style="`width:${on.width}px`">
									<div
										class="item"
										v-for="(item, index) in dropItem9"
										:key="index"
										:value="index"
										:class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
									>
										<button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
											{{ item.title }}
										</button>
									</div>
								</div>
							</template>
						</dropdown-menu>
					</div>
					<div class="dividing_line_ty2"></div>
					<div class="dropdown-collab-type3 txt-arw">
						<memberCall-search2></memberCall-search2>
					</div>
					<div class="right">
						<div class="date bd0">
							<Datepicker
								v-model="date"
								:format="format"
								@update:modelValue="onUpdateDate"
								:enableTimePicker="false"
								locale="ko"
								cancelText="취소"
								selectText="선택"
							/>
						</div>
					</div>
					<div class="member_grp">
						<div class="scroll">
							<div>김한화 <button type="button">삭제</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">삭제</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">삭제</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">삭제</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
							<div>김한화 <button type="button">x</button></div>
							<div>박하윤 <button type="button">x</button></div>
							<div>이지은 <button type="button">x</button></div>
						</div>
					</div>
				</div>
				<div class="write_grp clear ty2">
						<div class="write fl">
							<form action="">
								<div class="input-box">
									<textarea name="" placeholder="할 일 제목을 입력해주세요." readonly>타사 건강보험 상품 판매 데이터 수집 요청 타사 건강보험 상품 판매 데이터 수집 요청 사건강</textarea>
									<button type="reset" class="input-txt-del">입력 삭제</button>
									<div class="error" v-if="error">할 일을 입력해 주세요.</div>
								</div>
							</form>
						</div>
						<div class="btn_box fr">
							<button type="button" class="btn-txt-primary">취소</button>
							<button type="button" class="btn-txt-primary black">등록</button>
						</div>
				</div>
			</div>
		</div>

		<p class="tit-guide">할 일 오류 [BDS_023]</p>
		<div class="todo_wrap write hover_box">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="top">
					<div class="label-fin">할 일</div>
					<div class="dropdown-collab-type1 icon" id="select-box">
						<dropdown-menu
							:propisSlotMode="true"
							:propSelectText="selectSlotText"
							:propId="'select-box'"
							@selected="selectSlotValue"
							:propType="true"
							:propLocation="'bottom'"
						>
							<template v-slot:img>
								<i :class="imgSectorClass"></i>
							</template>
							<template v-slot:body={on}>
								<div class="dropdown-collab-list-type1 pub-prav" :style="`width:${on.width}px`">
									<div
										class="item"
										v-for="(item, index) in dropItem9"
										:key="index"
										:value="index"
										:class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
									>
										<button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
											{{ item.title }}
										</button>
									</div>
								</div>
							</template>
						</dropdown-menu>
					</div>
					<div class="dividing_line_ty2"></div>
					<div class="dropdown-collab-type3 txt-arw">
						<memberCall-search2></memberCall-search2>
					</div>
					<div class="right">
						<div class="date bd0">
							<Datepicker
								v-model="date"
								:format="format"
								@update:modelValue="onUpdateDate"
								:enableTimePicker="false"
								locale="ko"
								cancelText="취소"
								selectText="선택"
							/>
						</div>
					</div>
			</div>
			<div class="write_grp clear">
					<div class="write fl">
							<form action="">
								<div class="input-box">
									<textarea name="" placeholder=" 할 일을 입력해 주세요." maxlength="100" id="todo2" @keyup="todo2(100)"></textarea>
									<button type="reset" class="input-txt-del">입력 삭제</button>
									<div class="character-limit_box txtr"><span class="error">입력 가능한 글자수를 초과하였습니다.</span> <span class="count">(<b>{{ count2 }}</b>/00)</span></div>
									<div class="error">할 일을 입력해 주세요.</div>
								</div>
								<div class="input-box">
								</div>
							</form>
					</div>
					<div class="btn_box fr">
						<button type="button" class="btn-txt-primary">취소</button>
						<button type="button" class="btn-txt-primary black">등록</button>
					</div>
				</div>
			</div>
		</div>

		<p class="tit-guide">할 일 등록완료 [BDS_024] 미완료</p>
		<div class="todo_wrap view hover_box">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="top">
					<div class="label-fin">할 일</div>
					<div class="dropdown-collab-type1 icon" id="select-box">
						<dropdown-menu
							:propisSlotMode="true"
							:propSelectText="selectSlotText"
							:propId="'select-box'"
							@selected="selectSlotValue"
							:propType="true"
							:propLocation="'bottom'"
						>
							<template v-slot:img>
								<i :class="imgSectorClass"></i>
							</template>
							<template v-slot:body={on}>
								<div class="dropdown-collab-list-type1 pub-prav" :style="`width:${on.width}px`">
									<div
										class="item"
										v-for="(item, index) in dropItem9"
										:key="index"
										:value="index"
										:class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
									>
										<button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
											{{ item.title }}
										</button>
									</div>
								</div>
							</template>
						</dropdown-menu>
					</div>
					<div class="dividing_line_ty2"></div>
					<div class="right">
						<div class="date">-2020.11.10</div>
						<div class="re-de">
							<div class="re">
								<div class="dropdown-type2 tooltip text img">
									<dropdown-menu2
										:propImg="'img_dummy1.png'"
										:propName="'김한화'"
										:propItem="dropItem7"
										:propClass="'dropdown-type2-list type3 gray'"
									>
									</dropdown-menu2>
								</div>
							</div>
							<div class="division"></div>
							<div class="de">
								<div class="dropdown-type2 tooltip text img">
									<dropdown-menu2
										:propImg="'img_dummy1.png'"
										:propName="'김한화'"
										:propItem="dropItem7"
										:propClass="'dropdown-type2-list type3'"
									>
									</dropdown-menu2>
								</div>
							</div>
						</div>
						<div class="drop">
							<div class="dropdown-type1 dot-gry">
								<dropdown-menu
									:propItem="dropItem4"
								></dropdown-menu>
							</div>
						</div>
					</div>
				</div>
				<div class="view">타사 건강보험 상품 판매 데이터 수집 요청 타사 건강보험 상품 판매 데이터 수집 요청 타사 건강보험 상품 판매 데이터 수집 요청 타사 건강보험 상품 판매 데이터 수집 요청타사 건강보험 상품 판매 데이터 수집 요청 타사 건강보험 상품 판매 데이터 수집 요청</div>
			</div>
		</div>

		<p class="tit-guide">할 일 등록완료 [BDS_024] 완료</p>
		<div class="todo_wrap view hover_box">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="top">
						<div class="label-fin">할 일</div>
						<div class="dropdown-collab-type1 icon" id="select-box">
							<dropdown-menu
								:propisSlotMode="true"
								:propSelectText="selectSlotText"
								:propId="'select-box'"
								@selected="selectSlotValue"
								:propType="true"
								:propLocation="'bottom'"
							>
								<template v-slot:img>
									<i :class="imgSectorClass"></i>
								</template>
								<template v-slot:body={on}>
									<div class="dropdown-collab-list-type1 pub-prav" :style="`width:${on.width}px`">
										<div
											class="item"
											v-for="(item, index) in dropItem9"
											:key="index"
											:value="index"
											:class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
										>
											<button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
												{{ item.title }}
											</button>
										</div>
									</div>
								</template>
							</dropdown-menu>
						</div>
						<div class="dividing_line_ty2"></div>
						<div class="right">
							<div class="date">-2020.11.10</div>
							<div class="re-de">
								<div class="re">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3 gray'"
										>
										</dropdown-menu2>
									</div>
								</div>
								<div class="division"></div>
								<div class="de">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3'"
										>
										</dropdown-menu2>
									</div>
								</div>
							</div>
							<div class="drop">
								<div class="dropdown-type1 dot-gry">
									<dropdown-menu
										:propItem="dropItem4"
									></dropdown-menu>
								</div>
							</div>
						</div>
					</div>
				<div class="view">타사 건강보험 상품 판매 데이터 수집 요청</div>
			</div>
		</div>

		<p class="tit-guide">보드 url을 등록 시 관련보드 등록 view로 노출됨</p>
		<div class="todo_wrap view hover_box">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="top">
						<div class="label-fin">보드</div>
						<span class="team">디지털문화팀</span>
						<!-- <div class="dividing_line_ty2"></div> -->
						<div class="right">
							<div class="re-de">
								<div class="de">
										<div class="dropdown-type2 tooltip text img">
											<dropdown-menu2
												:propImg="'img_dummy1.png'"
												:propName="'김한화'"
												:propItem="dropItem7"
												:propClass="'dropdown-type2-list type3'"
											>
											</dropdown-menu2>
										</div>
								</div>
							</div>
							<div class="drop">
								<div class="dropdown-type1 dot-gry">
									<dropdown-menu
										:propItem="dropItem5"
									></dropdown-menu>
								</div>
							</div>
					</div>
				</div>
				<div class="view">업무공유시스템 현황 조사</div>
			</div>
		</div>

		<p class="tit-guide">보드 url을 등록 시 관련보드 등록 비공개</p>
		<div class="todo_wrap view hover_box">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="top">
						<div class="label-fin">보드</div>
						<span class="team">디지털문화팀</span>
						<!-- <div class="dividing_line_ty2"></div> -->
						<div class="right">
							<div class="re-de">
								<div class="de">
									<div class="dropdown-type2 tooltip text img">
										<dropdown-menu2
											:propImg="'img_dummy1.png'"
											:propName="'김한화'"
											:propItem="dropItem7"
											:propClass="'dropdown-type2-list type3'"
										>
										</dropdown-menu2>
									</div>
								</div>
							</div>
							<div class="drop">
								<div class="dropdown-type1 dot-gry">
									<dropdown-menu
										:propItem="dropItem5"
									></dropdown-menu>
								</div>
							</div>
					</div>
				</div>
				<div class="view">비공개 보드입니다.</div>
			</div>
		</div>

		<p class="tit-guide">URL 등록 [BDS_029]</p>
		<div class="url_box hover_box tit-only">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="img"><img :src="require('@/assets/imgs/collaboration/img/board_url02.png')"></div>
				<div class="tit ell-singleline">http://www.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.comwww.aaa.com</div>
				<div class="drop">
					<div class="dropdown-type1 dot-gry">
						<dropdown-menu
							:propItem="dropItem6"
						></dropdown-menu>
					</div>
				</div>
				<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
			</div>
		</div>

		<p class="tit-guide"></p>
		<div class="url_box hover_box tit-only">
			<div class="hover_inner">
				<div class="move"></div>
				<div class="img"><img :src="require('@/assets/imgs/collaboration/img/board_url.png')"></div>
				<div class="tit">내부 사이트에 올린 게시물 타이틀명이 보여집니다.</div>
				<div class="drop">
					<div class="dropdown-type1 dot-gry">
						<dropdown-menu
							:propItem="dropItem6"
						></dropdown-menu>
					</div>
				</div>
				<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
			</div>
		</div>

		<p class="tit-guide"></p>
		<div class="url_box hover_box tit-only">
			<div class="hover_inner">
					<div class="move"></div>
					<div class="img"><img :src="require('@/assets/imgs/collaboration/img/board_url01.png')"></div>
				<div class="tit">https://타이틀명을 못불러울 경우 URL명이 표시됨.com</div>
				<div class="drop">
					<div class="dropdown-type1 dot-gry">
						<dropdown-menu
							:propItem="dropItem6"
						></dropdown-menu>
					</div>
				</div>
				<div class="hover_comment"><button type="button" @click="paperAllComment()"><span class="count">&nbsp;</span></button></div>
			</div>
		</div>

		<!-- 링크추가 -->
		<p class="tit-guide">링크추가 [BDS0000]</p>
		<div class="attachlink_box">
			<div class="hover_box">
				<div class="hover_inner">
					<div class="hover_row">
						<div class="left">
							<div class="view">
								<div class="ico_attachlink">첨부파일</div>
								<div class="txt">
									<span>협업보드</span>
									<span>주간보고 리포트</span>
								</div>
							</div>
						</div>
						<div class="right">
							<div class="drop">
								<div class="dropdown-type1 dot-gry">
									<dropdown-menu
										:propItem="dropItem6"
									></dropdown-menu>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- //링크추가 -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dropUtil from "@/components/dropUtil.vue"
import dropdownMenu from "@/components/dropdownMenu3.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import selectView from "@/components/selectView.vue"
import memberCallSearch from "@/components/taskLog/memberCallSearch.vue"
import memberCallSearch2 from "@/components/taskLog/memberCallSearch2.vue"
import Datepicker from '@vuepic/vue-datepicker'

export default defineComponent({
	components: {
		dropUtil,
		dropdownMenu,
		dropdownMenu2,
		selectView,
		memberCallSearch,
		memberCallSearch2,
		Datepicker,
	},
	data() {
		return {
			isActive: false,
			tutorialClose: true,
			error: false,
			show: false,
			date: new Date().toString(),
			optionLsit: [
        { value: 'H1(40pt)', label: 'H1(40pt)' },
        { value: 'H2(36pt)', label: 'H2(36pt)' },
        { value: 'H3(32pt)', label: 'H3(32pt)' },
        { value: 'H4(28pt)', label: 'H4(28pt)' },
        { value: 'H5(24pt)', label: 'H5(24pt)' },
        { value: 'H6(20pt)', label: 'H6(20pt)' },
        { value: '본문', label: '본문' },
      ],
			dropItem: [
				{ title: '다운로드'},
				{ title: 'URL 복사' },
				{ title: '파일 삭제' },
			],
			dropItem4: [
				{ title: '할 일 삭제' },
				{ title: '할 일 복제' },
			],
			dropItem5: [
				{ title: '링크 삭제' },
			],
			dropItem6: [
				{ title: 'URL 복사' },
				{ title: 'URL 삭제' },
			],
			dropItem7: {
        title: `
          <div class="tooltip-member">
						<div>
							<span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
							<p><b>김한화</b> <span class="pos">직위/직책</span></p>
						</div>
						<p class="cp">회사명 <span></span> 소속조직명</p>
						<p class="phone">010-1234-2336</p>
						<p class="email">mail@hanwha.com</p>
					</div>
        `,
      },
			dropItem8: [
				{ title: '의사결정 삭제' },
			],

			selectSlotText:'미완료',
			dropSelectItem:{
				itemId: 'selected1'
			},
			dropItem9: [
				{
					title: '미완료',
					itemId: 'selected1',
					class: '',
					imgClass: 'ico-select-chk01'
				},
				{
					title: '완료',
					itemId: 'selected2',
					class: '',
					imgClass: 'ico-select-chk02'
				},
			],
			imgSectorClass: 'ico-select-chk01',
		};
	},
	methods: {
		tutorialBtn(){
      this.tutorialClose = false;
    },
		selectValue(val:any){
			this.dropSelectItem.itemId = val.selected
		},
		dropClickItem(item: any){
			if(item.imgClass) this.imgSectorClass = item.imgClass
			this.dropSelectItem.itemId = item.itemId
		},
		selectSlotValue(val:any){
			this.selectSlotText = val
		},
		format(date:any) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${year}.${month}.${day}`;
    },
		utilMenuSelected(){
			alert('메뉴 선택 완료')
		},
	}
});
</script>
