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
        <button type="button" class="btn_view task">Task View</button>
      </div>
    </div>
    <div class="nodata">
        <p>Task가 없어요!<br>Team에서 Task를 등록해 주세요!</p>
    </div>
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
  },
});
</script>