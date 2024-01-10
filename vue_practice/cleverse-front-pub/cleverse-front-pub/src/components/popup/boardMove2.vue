<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="게시판 이동"
    class="ly-pop-type1 xxs"
  >
    <template v-slot:body>
		<div class="tbl">
			<div>
				<p class="fc org">※ 이동할 게시판을 선택해 주세요.</p>
        <div class="mg-t20">
          <select-view
            :propOptionList='optionLsit'
            :propPlaceholder='`회사명`'
            :propClass='`type3 h40 w100p`'
            >
          </select-view>
        </div>
				<div class="treeselect bdt">
					<treeselect
						v-model="treeSelected"
						:max-height="295"
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
		</div>
    </template>

	<template v-slot:btnWrap>
		<div class="btn-wrap">
			<button type="button" class="btn lg line-type1">취소</button>
			<button type="button" class="btn lg">이동</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
// @ts-ignore 
import Treeselect from 'vue3-treeselect';
import selectView from "@/components/selectView.vue"

export default defineComponent({
  components: {
    basePopup,
    Treeselect,
    selectView,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      optionLsit: [
        { value: '회사명', label: '회사명' },
        { value: '옵션명', label: '옵션명' },
        { value: '옵션명', label: '옵션명' },
      ],
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
                      id: 'j',
                      label: 'j',
                    }, {
                      id: 'k',
                      label: 'k',
                    } 
                  ],
                } 
              ],
            }, {
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
          id: 'h',
          label: 'h',
        }
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
  }
})
</script>