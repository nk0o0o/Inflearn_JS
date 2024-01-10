<template>
	<dropdown-menu3
		:propisSlotMode="true"
		:propType="true"
		:propLocation="'bottom'"
		:clickToHide="false"
	>
		<template v-slot:body>
			<div class="dropdown-box-filter">
				<div class="dropdown-list_header">
					<strong>2</strong>건 선택
					<button type="button" class="btn-refresh">새로고침</button>
				</div>
				<div class="cnt_inner">
					<div class="cnt-option">
						<div class="tit">파일 경로</div>
						<ul>
							<li v-for="(item, idx) in checkBoxList" :key="idx">
								<div class="input-chk square"><input type="checkbox" name="chk1" :id="`chk1-${idx}`"><label :for="`chk1-${idx}`">{{item.text}}</label></div>
							</li>
						</ul>
					</div>
					<div class="cnt-file" >
						<div class="tit">파일 유형</div>
						<ul>
							<li v-for="(item, idx) in checkBoxList2" :key="idx">
								<div class="input-chk square"><input type="checkbox" name="chk2" :id="`chk2-${idx}`"><label :for="`chk2-${idx}`">{{item.text}}</label></div>
							</li>
						</ul>
					</div>
				</div>
				<div class="dropdown-list_foot">
					<button type="button" class="btn sm line-type2">취소</button>
					<button type="button" class="btn sm">적용</button>
				</div>
			</div>
		</template>
	</dropdown-menu3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

export default defineComponent({
  components: {
		dropdownMenu3,
  },
  data() {
    return {
			checkBoxList: [
        { text: '보드'},
        { text: '최종결과물' },
        { text: '의사결정' },
      ],
			checkBoxList2: [
        { text: '전체'},
        { text: 'PPT' },
        { text: 'EXCEL' },
        { text: 'WORD' },
        { text: 'PDF' },
        { text: 'IMG' },
      ],
    }
  },
  methods: {
    
  }
});
</script>