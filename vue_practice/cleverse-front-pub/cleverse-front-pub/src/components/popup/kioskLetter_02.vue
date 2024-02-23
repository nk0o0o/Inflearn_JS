<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="Key News > 게시글 선택"
    class="ly-pop-type1 kiosk-pop"
  >
    <template v-slot:body>
      <div class="kiosk-pop-content"> 
        <div class="kiosk-pop-list_select_wrap">
          <ul class="kiosk-pop-list_select">
            <li
              v-for="(item, index) in selectList"
              :key="index"
              :class="{ 'disabled': item.disabled }"
            >
              <div class="notice">{{item.sort}}</div>
              <div class="content">{{item.title}}</div>
              <div class="name">{{item.name}}</div>
              <div class="date">{{item.date}}</div>
              <div class="bn">
                <div class="chk">
                  <input 
                    type="checkbox" 
                    name="chk" 
                    :id="`chk${item.id}`" 
                    :checked="item.checked"
                    :disabled="item.disabled"
                  >
                  <label :for="`chk${item.id}`">
                    <span>선택</span>
                    <em>선택됨</em>
                  </label>
                </div>
              </div>
            </li>
          </ul>
          <Paging
            v-model="page" 
            :records="500" 
            :per-page="25" 
            :options="{hideCount: true}" 
            @paginate="myCallback"
          />
        </div>
      </div>  
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap right">
        <button type="button" class="btn lg line-type2">취소</button>
        <button type="button" class="btn lg">저장</button>
      </div>
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    basePopup,
    Paging,
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
      page: 1,
      error: false,
      showModal: this.propShowModal,
      selectList: [
        {
          id: 1,
          checked: true,
          disabled: false,
          sort: '공지사항',
          title: '게시글 제목 영역',
          name: '작성자명',
          date: '2022.02.22 13:00',
        },
        {
          id: 2,
          checked: false,
          disabled: true,
          sort: '공지사항',
          title: '게시글 제목 영역/게시글 제목 영역/게시글 제목 영역',
          name: '작성자명',
          date: '2022.02.22 13:00',
        },
        {
          id: 3,
          checked: false,
          disabled: false,
          sort: '공지사항',
          title: '게시글 제목 영역',
          name: '작성자명',
          date: '2022.02.22 13:00',
        },
        {
          id: 4,
          checked: false,
          disabled: true,
          sort: '공지사항',
          title: '게시글 제목 영역',
          name: '작성자명',
          date: '2022.02.22 13:00',
        },
        {
          id: 5,
          checked: false,
          disabled: false,
          sort: '공지사항',
          title: '게시글 제목 영역',
          name: '작성자명',
          date: '2022.02.22 13:00',
        },
        {
          id: 6,
          checked: false,
          disabled: false,
          sort: '공지사항',
          title: '게시글 제목 영역',
          name: '작성자명',
          date: '2022.02.22 13:00',
        },
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
  },
})
</script>