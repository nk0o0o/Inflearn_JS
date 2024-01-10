<template>
  <base-popup 
    :propShowModal="showModal"
		:propIsScrollClass="isScrollClass"
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="조직태그 선택"
    class="ly-pop-type1 admin"
  >
    <template v-slot:body>
			<div class="tag_select_wrap">
				<div class="sect">
						<strong>지향점</strong>
						<ul>
								<li v-for="(item, index) in tagList1" :key="index">
										<input type="checkbox" name="tagCont1" :id="item.idFor">
										<label :for="item.idFor">{{item.name}}</label>
										<button type="button" class="btn_tag_del" @click="tagItemDel(index,tagList1)">삭제</button>
								</li>
						</ul>
				</div>
				<div class="sect">
						<strong>목표</strong>
						<ul>
								<li v-for="(item, index) in tagList2" :key="index">
										<input type="checkbox" name="tagCont2" :id="item.idFor" :disabled="item.disabled">
										<label :for="item.idFor">{{item.name}}</label>
										<button type="button" class="btn_tag_del" @click="tagItemDel(index,tagList2)">삭제</button>
								</li>
						</ul>
				</div>
				<div class="sect">
						<strong>역할</strong>
						<ul>
								<li v-for="(item, index) in tagList3" :key="index">
										<input type="checkbox" name="tagCont3" :id="item.idFor">
										<label :for="item.idFor">{{item.name}}</label>
										<button type="button" class="btn_tag_del" @click="tagItemDel(index,tagList3)">삭제</button>
								</li>
						</ul>
				</div>
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


export default defineComponent({
  components: {
    basePopup,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
		propIsScrollClass: {
      type: String,
      default: '',
    },
  },
  data(){
    return{
      isActive: false,
      error: false,
      showModal: this.propShowModal,
			isScrollClass: this.propIsScrollClass,
			tagList1: [
					{"name": "#지향점1", "idFor": "tagCont1_1", "disabled": true},
					{"name": "#지향점2", "idFor": "tagCont1_2", "disabled": false},
					{"name": "#지향점3", "idFor": "tagCont1_3", "disabled": false},
			],
			tagList2: [
					{"name": "#목표1", "idFor": "tagCont2_1", "disabled": true},
					{"name": "#목표2", "idFor": "tagCont2_2", "disabled": false},
					{"name": "#목표3", "idFor": "tagCont2_3", "disabled": false},
					{"name": "#목표4", "idFor": "tagCont2_4", "disabled": false},
					{"name": "#목표5", "idFor": "tagCont2_5", "disabled": false},
					{"name": "#목표6", "idFor": "tagCont2_6", "disabled": false},
					{"name": "#목표7", "idFor": "tagCont2_7", "disabled": false},
					{"name": "#목표8", "idFor": "tagCont2_8", "disabled": false},
					{"name": "#목표9", "idFor": "tagCont2_9", "disabled": false},
			],
			tagList3: [
					{"name": "#역할1", "idFor": "tagCont3_1", "disabled": true},
					{"name": "#역할2", "idFor": "tagCont3_2", "disabled": false},
					{"name": "#역할3", "idFor": "tagCont3_3", "disabled": false},
					{"name": "#역할4", "idFor": "tagCont3_4", "disabled": false},
					{"name": "#역할5", "idFor": "tagCont3_5", "disabled": false},
					{"name": "#역할6", "idFor": "tagCont3_6", "disabled": false},
					// {"name": "#역할7", "idFor": "tagCont3_7", "disabled": false},
			],
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
    },
		tagItemDel(index: any,tagList: any[]) {
				tagList.splice(index, 1);
		}
  }
})
</script>