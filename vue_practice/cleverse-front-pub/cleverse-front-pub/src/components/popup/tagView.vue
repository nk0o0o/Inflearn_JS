<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="태그상세보기"
    class="ly-pop-type1 xsm"
  >
    <template v-slot:body>
      <div class="tag-all-view">
        <ul class="tag-all-view__list">
          <li
            v-for="(item, index) in tags"
            :key="index"
            :class="item.tagClass"
          >
            <span>{{item.tagName}}</span>
          </li>
        </ul>
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
  },
  data(){
    return{
      isActive: false,
      error: false,
      showModal: this.propShowModal,
      tags: [ 
        { tagClass: 'c01', tagName: '5' } , 
        { tagClass: 'c02', tagName: '중점과제' },
        { tagClass: 'c03', tagName: '주요 과제' }, 
        { tagClass: 'c04', tagName: '일상과제' }, 
        { tagClass: 'c05', tagName: '제휴영업부문 과제' }, 
        { tagClass: 'c06', tagName: '상품전략실 과제' }, 
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