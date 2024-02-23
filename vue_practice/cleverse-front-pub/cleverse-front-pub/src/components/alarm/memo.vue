<template>
	<div>
		<button type="button" class="memo-sand_btn" @click="clickSelect"><span>메모 보내기</span></button>
		<div class="memo-sand_wrap" id="mailbox" :class="{'active':selectActive}">
			<div class="memo-sand_search focus"><!-- focus class 추가 시 .memo-sand_input 활성화, .memo-sand_placeholder 비활성화 -->
				<strong>받는사람 :</strong>
				<input type="text" placeholder="@이름, @노드명, @클러스터명, @부문명 검색" value="@김이">
				<div class="memo-sand_search_list">
					<div class="memo-sand_search_list_inner">
						<strong>검색결과</strong>
						<p class="nodata" v-if="list">해당 검색어와 일치하는 조직이 없습니다.</p>
						<ul class="list" v-else>
							<li v-for="(item, index) in field" :key="index">
								<dl>
									<dt class="ell-singleline">{{item.field}}</dt>
									<dd class="ell-singleline">{{item.part}}</dd>
								</dl>
							</li>
						</ul>
						<p class="nodata" v-if="mix">해당 검색어와 일치하는 조직이 없습니다.</p>
						<ul class="list_mix" v-else>
							<li v-for="(item, index) in personnel" :key="index" :class="item.cp">
								<a href="#">
									<div class="img"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.name"></div>
									<dl>
										<dt>
											{{item.name}}
											<span class="pos">{{item.spot}} / {{item.pos}}</span>
										</dt>
										<dd>{{item.sector}} / {{item.node}}</dd>
									</dl>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="memo-sand_addr">
				<span v-for="(item, index) in sandList" :key="index">
					@{{item.name}}
					<button type="button">닫기</button>
				</span>
			</div>

			<div class="memo-sand_txt">
				<textarea name="" id="" cols="" rows="" placeholder="메모를 입력해 주세요!">
메모를 입력합니다. 
줄바꿈을 하는대로 이전 메모는 내려가고,
작성중인 메모의 영역이 늘어납니다.


___________________________________________________

받는 사람 : 시스템개발노드, 김생명, 이한화, 윤이름
보낸 사람 : 박이름ㆍ2021.09.07 오전 11:23

입력한 메모 내용이 표시됩니다. 
받는사람 영역 / 내용영역 모두 필수 입력 항목입니다. 

받는사람은 개인/조직 포함 갯수 제한 없습니다. 
내용 영역은 한글기준 1000자 제한합니다. (디자인/개발 협의)

필수 항목 입력 완료 후 메모 보내기 버튼 활성화 됩니다. 

링크 삽입 가능합니다.
https://www.naver.com/

받는사람 영역 / 내용영역 모두 필수 입력 항목입니다. 받는사람 영역 / 내용영역 모두 필수 입력 항목입니다. 
입력한 메모 내용이 표시됩니다. 
				</textarea>
			</div>
			<div class="memo-sand_foot_btn">
				<button type="button" class="btn bk" disabled>메모 보내기</button>
			</div>
			<button type="button" class="memo-sand_close_btn" @click="clickSelect">닫기</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
  data() {
    return {
      list: true,
      mix: false,
			selectActive: false,
      classCase: this.propClass,
			personnel: [
				{ 
					cp: 'cp',
					src: 'img_dummy1.png',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
				{ 
					src: 'img_pp_default.png',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
				{ 
					src: 'img_pp_default.png',
					name: '김이름',
					spot: '직위',
					pos: '직책',
					sector: '부문명',
					node: '노드명',
				},
			],
			field: [
				{ 
					field: '가나다 부문',
					part: '한화생명',
				},
				{ 
					field: '가나다 클러스터',
					part: '소속 부문명',
				},
			],
			sandList: [
				{ name: '장한화'	},
				{ name: '장한화장한화'	},
				{ name: '시스템개발노드'	},
				{ name: '노드클러스트부문명이 긴경우 최대 범위까지 노출후노출후노출후노출후'	},
			],
    }
  },
  methods: {
    clickSelect(){
			this.selectActive = !this.selectActive
		},
  }
});
</script>