<template>
  <div class="task-content import-task">
    <div class="skeleton-content_head">
      <div class="task-date_wrap">
        <span class="btn_prev"><button type="button">이전</button></span>
        <dl>
          <dt>Today</dt>
          <dd class="week">
            <div class="date">
              <Datepicker
                v-model="date"
                :format="format"
                @update:modelValue="onUpdateDate"
                :enableTimePicker="false"
                locale="ko"
                cancelText="취소"
                selectText="선택"
                weekStart="0"
                />
            </div>
          </dd>
        </dl>
        <span class="btn_next"><button type="button">이후</button></span>
      </div>
      <div>
        <div class="dropdown-collab-type6">
          <filter-list
            anchor='bottom end'
          ></filter-list>
        </div>
        <button type="button" class="btn_view group">Group View</button>
      </div>
    </div>

     <ul class="group-view_list">
      <li class="ov" v-for="(item, index) in tasks" :key="index" :class="{ov: item.open}">
        <div class="group-view_list_inner">
          <div class="group-view_list_head">
            <span class="txt">
              <a href="#" class="ell-singleline">{{item.text}}</a>
              <span class="num">{{item.num}}</span>
            </span>
          </div>
          <div class="task-add_input" :class="{ ov: item.isActive }">
            <div class="input">
              <form action="">
                <div class="input-box">
                  <input type="text" required placeholder="Task를 입력해주세요">
                  <button type="reset" class="input-txt-del">입력 삭제</button>
                </div>
              </form>
            </div>
            <div class="dates">
              <div class="date line-type f-18">
                <Datepicker
                  placeholder="시작일 선택 - 종료일 선택"
                  v-model="rangeDate"
                  :format="rangeFormat2"
                  range
                  locale="ko"
                  cancelText="취소"
                  selectText="저장"
                  :enableTimePicker="false"/>
              </div>
            </div>
            <div class="bn">
              <button type="button" class="btn_cancel"  @click="item.isActive = !item.isActive">취소</button>
              <button type="button" class="btn_regist">저장</button>
            </div>
          </div>
          <div class="task-add_btn" :class="{ hide: item.isActive }">
            <button type="button" class="btn_addtask" @click="item.isActive = !item.isActive">Add Subtask</button>
          </div>
        </div>
        <button type="button" class="btn_section_view"  @click="item.open = !item.open">열기/닫기</button>
      </li>
    </ul>
    <!-- <div class="mytask-banner">
      <a href="#"><img :src="require('@/assets/imgs/collaboration/img/banner_node.png')" alt="두근두근 파도타기 - 지난주 가장 활동적인 노드는? START"></a>
    </div> -->
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import filterList from '@/components/filterList.vue';


export default defineComponent({
  components: {
    filterList,
    Datepicker,
  },
  data() {
    return {
      date: new Date().toString(),
      rangeDate: [new Date(),new Date()],
      tasks: [
        {
          open: true,
          text: 'Side Task',
          num: 0,
        }
      ],
    };
  },
  methods: {
    format(date:any) {
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      return `${month}.${day}`;
    },
    rangeFormat(date :any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();
      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();
      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
    rangeFormat2(date :any) {
      const dayStart = ('0' + date[0].getDate()).slice(-2);
      const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
      const yearStart = date[0].getFullYear();
      const dayEnd = ('0' + date[1].getDate()).slice(-2);
      const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
      const yearEnd = date[1].getFullYear();
      return `${yearStart}.${monthStart}.${dayStart} - ${yearEnd}.${monthEnd}.${dayEnd}`;
    },
  },
});
</script>