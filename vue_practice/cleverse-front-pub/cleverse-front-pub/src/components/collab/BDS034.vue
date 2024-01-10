<template>
	<div class="modal-window viewer">
		<header class="modal-header">
			<div class="tit">
				<div class="left">
					<div class="file_name">파일명과 속성 노출.pptx</div>
					<div class="location">디지털기획팀 > 전략수립 및 정책을 위한</div>
				</div>
				<div class="util">
					<button type="button" class="btn_eiidt"><span>Edit</span></button>
					<button type="button" class="btn_lock" :class="{'active':isActive}" @click="toggleAcitve"><span>{{toggleTxt}}</span></button>
					<button type="button" class="btn-ver" :class="{'active':isActive1}" @click="ViewerVersion_closed()">History</button>
					<div class="dropdown-type1">
						<dropdown-menu
							:propItem="dropItem"
						>
						</dropdown-menu>
					</div>
				</div>
			</div>
			<button @click="$emit('close')" class="btn_close">닫기</button>
		</header>
		<div class="modal-content">
			<div class="viewer_box">
				<div class="unsupported">
					<div class="tit">미리보기를 제공하지 않는 파일입니다.</div>
					<div class="txt">압축파일, 디자인 파일, 파일 크기가 큰 파일 등은 미리보기를 제공하지 않습니다.<br>화면 오른쪽 상단 <b></b> 을 클릭하여, 파일 다운로드를 선택해 주세요.</div>
				</div>
				<div style="font-size: 30px; color:#fff; text-align:center; margin-top: 150px;">뷰어 영역</div>
			</div>
			<viewer-version
				:propClass="isActive1"
				@viewerClose="versionClose"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewerVersion from "@/components/collab/ViewerVersion.vue"
import dropdownMenu from "@/components/dropdownMenu.vue"

export default defineComponent({
  components: {
		ViewerVersion,
		dropdownMenu
  },
  data() {
    return {
			isActive: false,
			isActive1: false,
			toggleTxt: 'Lock',
      dropItem: [
        { title: '활동내역', itemId: 'selected1' },
        { title: '다운로드', itemId: 'selected2' },
        { title: '복사', itemId: 'selected3' },
        { title: '버전 업데이트', itemId: 'selected4' },
        { title: '파일 삭제', itemId: 'selected5' },
      ],
    }
  },
  methods: {
		ViewerVersion_closed() {
			this.isActive1 = !this.isActive1;
		},
		toggleAcitve(){
			this.isActive = !this.isActive;
			this.toggleTxt = !this.isActive ? 'Lock' : 'Unlock';
		},
		versionClose(){
			this.isActive1 = false;
		}
  }
});
</script>