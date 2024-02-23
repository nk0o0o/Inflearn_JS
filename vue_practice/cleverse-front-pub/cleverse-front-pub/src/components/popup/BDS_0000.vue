<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title="나의 협업보드"
    class="ly-pop-type1 admin sm f-14 scroll"
  >
    <template v-slot:body>
      <ul class="board-addLink-list">
        <li v-for="(item, index) in boardList" :key="index">
          <div class="tit">
            <button type="button" class="btn-addLink">{{item.title}}</button>
          </div>
          <div class="cont">
            <span class="member">{{item.name}} 외 {{item.num}}명</span> 
            <span>{{item.date}}</span>
          </div>
        </li>
      </ul>
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
      showModal: this.propShowModal,
      boardList: [
        {
          title: 'MZ-Project',
          name: '김한화',
          num: '2',
          date: '2021.05.01 - 2021.05.28',
        },
        {
          title: 'MZ-Project',
          name: '김한화',
          num: '1',
          date: '2021.05.01 - 2021.05.28',
        },
        {
          title: 'MZ-Project',
          name: '김한화',
          num: '1',
          date: '2021.05.01 - 2021.05.28',
        },
        {
          title: 'MZ-Project',
          name: '김한화',
          num: '1',
          date: '2021.05.01 - 2021.05.28',
        },
        {
          title: 'MZ-Project',
          name: '김한화',
          num: '1',
          date: '2021.05.01 - 2021.05.28',
        },
      ]
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