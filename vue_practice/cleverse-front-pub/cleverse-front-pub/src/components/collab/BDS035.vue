<template>
	<div class="modal-window viewer">
		<header class="modal-header">
			<div class="tit">
				<div class="left">
					<div class="file_name">파일명과 속성 노출.pptx</div>
					<div class="location">Life Solution 클러스터 소개 자료</div>
				</div>
				<div class="util del">
					<button type="button" class="btn_del">파일삭제</button>
				</div>
			</div>
			<button @click="$emit('close')" class="btn_close">닫기</button>
		</header>
		<div class="modal-content">
			<div class="viewer_box">
				<div class="row">
					<div class="img">
						<img :src="require('@/assets/imgs/collaboration/img/cardnews_09.jpg')">
					</div>
				</div>
				<!-- <div class="unsupported">
					<div class="tit">미리보기를 제공하지 않는 파일입니다.</div>
					<div class="txt">압축파일, 디자인 파일, 파일 크기가 큰 파일 등은 미리보기를 제공하지 않습니다.<br>화면 오른쪽 상단 을 클릭하여, 파일 다운로드를 선택해 주세요.</div>
				</div>
				<div style="font-size: 30px; color:#fff; text-align:center; margin-top: 150px;">뷰어 영역</div> -->
			</div>
			<viewer-version/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//import ViewerVersion from "@/components/collab/ViewerVersion.vue";

export default defineComponent({
	components: {
		// ViewerOpinionSearch,
		// ViewerHistory,
		//ViewerVersion,
	},
	data() {
		return { 
			// isActive: false,
			// isActive1: false,
			// toggleTxt: 'Lock',
		};
	},
	methods: { 
		// viewerOpinion_search_closed() {
		// 		document.getElementById('viewerPaperAllComment').classList.toggle('active');
		// },
		// viewerHistory_closed() {
		// 		alert('d');
		// 		document.getElementById('viewerHistory').classList.toggle('active');
		// },
		// ViewerVersion_closed() {
		// 		this.isActive1 = !this.isActive1;
		// 		document.getElementById('ViewerVersion').classList.toggle('active');
		// },
		// toggleAcitve(){
		// 	this.isActive = !this.isActive;
		// 	this.toggleTxt = !this.isActive ? 'Unlock' : 'Lock';
		// }
	},
});
</script>