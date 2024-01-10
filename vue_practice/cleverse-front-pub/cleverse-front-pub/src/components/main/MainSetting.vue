<template>
  <div class="main-setting">
    <MainHead/>
    <div class="main-setting-wrap">
      <MainLeft/>
      <div class="main-body">
        <draggable
            class="main-portlet"
            item-key="order"
            tag="transition"
            :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
            v-model="list"
            v-bind="dragOptions"
            @start="isDragging = true"
            @end="isDragging = false"
        >
            <template #item="{ element }">
                <li class="main-portlet-item" :class="element.class">
                    {{ element.name }}
                    <button type="button" class="ico-single-del"><span class="blind">삭제</span></button>
                </li>
            </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHead from "./MainHead.vue"
import MainLeft from "./MainLeft.vue"
import draggable from "vuedraggable";

export default defineComponent({
  name: "transition-example",
  components: {
    MainHead,
    MainLeft,
    draggable 
  },
  data() {
        return {
          list: [
            {
              "name": "나의 Task",
              "order": 0,
              "class": 'set-task disabled',
            },
            {
              "name": "채널Hplus",
              "order": 1,
              "class": 'set-Hplus disabled',
            },
            {
              "name": "공지배너",
              "order": 3,
              "class": 'set-notice disabled',
            },
            {
              "name": "메일",
              "order": 4,
              "class": 'move-item active',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 5,
              "class": 'move-item',
            },
            {
              "name": "팀원 현황",
              "order": 6,
              "class": 'move-item active',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 7,
              "class": 'move-item',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 8,
              "class": 'move-item',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 9,
              "class": 'move-item',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 10,
              "class": 'move-item',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 11,
              "class": 'move-item',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 12,
              "class": 'move-item',
            },
            {
              "name": "유연근무 간편등록",
              "order": 13,
              "class": 'move-item active',
            },
            {
              "name": "포틀릿을 추가해 보세요",
              "order": 14,
              "class": 'move-item',
            },
            {
              "name": "전자결재",
              "order": 15,
              "class": 'move-item active',
            },
            {
              "name": "회사게시판",
              "order": 2,
              "class": 'set-board disabled',
            },
          ],
        };
    },
    methods: {

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
<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>