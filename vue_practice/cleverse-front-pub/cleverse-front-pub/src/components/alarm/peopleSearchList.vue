<template>
	<div class="peopleSearchList">
		<div class="node-wrap">
			<div class="sector sc">
				<strong>검색결과</strong>
				<ul>
					<li>
						<!-- S: 20210907 캡틴의 경우 round class 추가 -->
						<div class="img round"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="이미지"></div>
						<!-- //E: 20210907 캡틴의 경우 round class 추가 -->
						<dl>
							<dt class="ell-singleline">
								김이름
								<!-- S: 20210906 추가 -->
								<span class="pos">직위 / 직책</span>
								<!-- //E: 20210906 추가 -->
							</dt>
							<dd class="ell-singleline">부문명 / 노드명</dd>
						</dl>
						<div class="bn-pp_sel">
							<input type="checkbox" name="people" id="pp1" checked>
							<label for="pp1">김이름 차장</label>
						</div>
					</li>
					<li>
						<div class="img"><img :src="require('@/assets/imgs/collaboration/svg/default-img-24.png')" alt="이미지"></div>
						<dl>
							<dt class="ell-singleline">
								김이름
								<!-- S: 20210906 추가 -->
								<span class="pos">직위 / 직책</span>
								<!-- //E: 20210906 추가 -->
							</dt>
							<dd class="ell-singleline">부문명 / 협력사 관련 정보 기획서 협력사 관련 정보 기획서 업데이트 예정</dd>
						</dl>
						<div class="bn-pp_sel">
							<input type="checkbox" name="people" id="pp2">
							<label for="pp2">김이름 차장</label>
						</div>
					</li>
					<li>
						<div class="img"><img :src="require('@/assets/imgs/collaboration/svg/img_dummy1.png')" alt="이미지"></div>
						<dl>
							<dt class="ell-singleline">
								김이름
								<!-- S: 20210906 추가 -->
								<span class="pos">직위 / 직책</span>
								<!-- //E: 20210906 추가 -->
							</dt>
							<dd class="ell-singleline">부문명 / 노드명</dd>
						</dl>
						<div class="bn-pp_sel">
							<input type="checkbox" name="people" id="pp3">
							<label for="pp3">김이름 차장</label>
						</div>
					</li>
					<li>
						<div class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="이미지"></div>
						<dl>
							<dt class="ell-singleline">
								김이름
								<!-- S: 20210906 추가 -->
								<span class="pos">직위 / 직책</span>
								<!-- //E: 20210906 추가 -->
							</dt>
							<dd class="ell-singleline">부문명 / 노드명</dd>
						</dl>
						<div class="bn-pp_sel">
							<input type="checkbox" name="people" id="pp4">
							<label for="pp4">김이름 차장</label>
						</div>
					</li>
					<li>
						<div class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="이미지"></div>
						<dl>
							<dt class="ell-singleline">
								김이름
								<!-- S: 20210906 추가 -->
								<span class="pos">직위 / 직책</span>
								<!-- //E: 20210906 추가 -->
							</dt>
							<dd class="ell-singleline">부문명 / 노드명</dd>
						</dl>
						<div class="bn-pp_sel">
							<input type="checkbox" name="people" id="pp5">
							<label for="pp5">김이름 차장</label>
						</div>
					</li>
					<li>
						<div class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="이미지"></div>
						<dl>
							<dt class="ell-singleline">
								김이름
								<!-- S: 20210906 추가 -->
								<span class="pos">직위 / 직책</span>
								<!-- //E: 20210906 추가 -->
							</dt>
							<dd class="ell-singleline">부문명 / 노드명</dd>
						</dl>
						<div class="bn-pp_sel">
							<input type="checkbox" name="people" id="pp6">
							<label for="pp6">김이름 차장</label>
						</div>
					</li>
				</ul>
				<div class="no-data" v-if="show"><span>해당 검색어와 일치하는<br />사용자가 없습니다.</span></div>
			</div>
			<div class="sector foot">
				<button type="button" class="btn">취소</button>
				<button type="button" class="btn bk">저장</button>
			</div>
		</div>
	</div>
</template>
