<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="양식종류 선택"
    class="ly-pop-type1 admin pp"
  >
    <template v-slot:body>
      <div class="treeselect bg-gray">
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
      <div class="mg-t15">
        <p class="input-data-txt">선택한 양식</p>
        <div class="input-box type3 round-type full mg-t5">
          <input type="text" required>
          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
          <div class="error" v-if="error">에러 내용입력</div>
        </div>
      </div>
    </template>
    
    <template v-slot:btnWrap>
		<div class="btn-wrap">
      <button type="button" class="btn lg line-type2">취소</button>
			<button type="button" class="btn lg">선택</button>
		</div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'

export default defineComponent({
  components: {
    basePopup,
    Treeselect
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