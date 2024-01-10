<template>
  <base-popup 
    :propShowModal="showModal"
    :propIsScrollClass="true"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    title="Key News"
    class="ly-pop-type1 kiosk-pop"
  >
    <template v-slot:body>
      <div class="kiosk-pop-content">
        <p class="kiosk-pop-content_notice">*정렬 순서 기준, 최대 6개까지만 메인에 노출됩니다.</p>
        <draggable
            v-if="!nodata"
            class="kiosk-pop-list"
            item-key="order"
            tag="transition"
            handle=".handle"
            :component-data="{ tag: 'ul', name: 'kiosk-list', type: 'transition' }"
            v-model="list"
            v-bind="dragOptions"
            @start="isDragging = true"
            @end="isDragging = false"
        >
          <template #item="{ element }">
              <li class="kiosk-pop-list_item" :class="element.class">
                <i class="handle"></i>
                <kiosk-list
                  :propKind="element.kind"
                  :propTitle="element.title"
                  :propWriter="element.writer"
                  :propDate="element.date"
                  :propKioskTitle="element.kioskTitle"
                  :propContent="element.content"
                >
                </kiosk-list>
              </li>
          </template>
        </draggable>

        <div class="nodata" v-if="nodata">
          <p class="type1">Key News 게시글이 없습니다.<br>게시글 선택 버튼을 클릭해주세요.</p>
        </div>
        <div class="bn_sel">
          <button type="button">게시글 선택</button>
        </div>
        <!-- <Paging
          v-model="page" 
          :records="500" 
          :per-page="25" 
          :options="{hideCount: true}" 
          @paginate="myCallback"
        /> -->
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
import draggable from "vuedraggable";
import basePopup from "@/components/layout/basePopup.vue"
import kioskList from "@/components/popup/kioskList.vue"
//@ts-ignore
// import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    basePopup,
    draggable,
    kioskList,
    // Paging,
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
      nodata: false,
      page: 1,
      error: false,
      showModal: this.propShowModal,
       list: [
            {
              "order": 0,
              "kind": "공지사항",
              "title": "게시글 제목 영역1",
              "writer": "작성자명",
              "date": "2022.02.22 13:00",
              "kioskTitle": "Key News용 제목",
              "content": "게시글 제목 영역입니다. 게시물 선택 시, 제목 원본 데이터가 노출됩니다. Key News용으로 편집 가능합니다.",
              "class": "move-item",
            },
            {
              "order": 1,
              "kind": "공지사항",
              "title": "게시글 제목 영역2",
              "writer": "작성자명",
              "date": "2022.02.22 13:00",
              "kioskTitle": "Key News용 제목",
              "content": "게시글 제목 영역입니다. 게시물 선택 시, 제목 원본 데이터가 노출됩니다. Key News용으로 편집 가능합니다.",
              "class": "move-item",
            },
            {
              "order":2,
              "kind": "공지사항",
              "title": "게시글 제목 영역3",
              "writer": "작성자명",
              "date": "2022.02.22 13:00",
              "kioskTitle": "Key News용 제목",
              "content": "게시글 제목 영역입니다. 게시물 선택 시, 제목 원본 데이터가 노출됩니다. Key News용으로 편집 가능합니다.",
              "class": "move-item",
            },
            {
              "order": 3,
              "kind": "공지사항",
              "title": "게시글 제목 영역4",
              "writer": "작성자명",
              "date": "2022.02.22 13:00",
              "kioskTitle": "Key News용 제목",
              "content": "게시글 제목 영역입니다. 게시물 선택 시, 제목 원본 데이터가 노출됩니다. Key News용으로 편집 가능합니다.",
              "class": "disabled",
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
  computed: {
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: false,
                // ghostClass: "ghost",
                drag: true,
                draggable: '.move-item'
            };
        }
    }
})
</script>