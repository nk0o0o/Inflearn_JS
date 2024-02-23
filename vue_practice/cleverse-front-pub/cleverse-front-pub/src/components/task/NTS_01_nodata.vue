<template>
  <div>
    <div class="task-content">
      <div class="skeleton-content_head">
        <div class="task-date_wrap">
          <span class="btn_prev"><button type="button">이전</button></span>
          <dl>
            <dt>This week</dt>
            <dd class="week range">
              <div class="date">
                <Datepicker 
                  v-model="rangeDate"
                  range 
                  locale="ko"
                  cancelText="취소"
                  selectText="선택"
                  :format="rangeFormat"
                  :enableTimePicker="false"
                  weekStart="0"
                />
              </div>
            </dd>
          </dl>
          <span class="btn_next"><button type="button">이후</button></span>
        </div>
        <div>
          <button type="button" class="btn_view comp">Complete</button>
          <button type="button" class="btn bk plus">New Task</button>
        </div>
      </div>
      
      <div class="nodata">
        <p>Task가 없어요!<br>Task를 등록해주세요!</p>
      </div>
    
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'


export default defineComponent({
    components: {
      Datepicker,
    },
    data() {
      return {
        rangeDate: [new Date(),new Date()],
      };
    },
    methods: {
       rangeFormat(date :any) {
        const dayStart = ('0' + date[0].getDate()).slice(-2);
        const monthStart = ('0' + (date[0].getMonth() + 1)).slice(-2);
        const yearStart = date[0].getFullYear();
        const dayEnd = ('0' + date[1].getDate()).slice(-2);
        const monthEnd = ('0' + (date[1].getMonth() + 1)).slice(-2);
        const yearEnd = date[1].getFullYear();
        return `${monthStart}.${dayStart} - ${monthEnd}.${dayEnd}`;
      },
    },
    computed: {
      
    }
});
</script>