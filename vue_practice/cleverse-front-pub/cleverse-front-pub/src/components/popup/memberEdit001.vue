<template>
  <base-popup 
    :propShowModal="showModal" 
    @popClose="onHideModal" 
    @confirm="onConfirm" 
    title=""
    class="ly-pop-type1 member-edit__layer"
  >
    <template v-slot:body>
      <div class="content">
        <p class="txt1">협업보드 멤버 편집시 비공개 보드로 변경되며<br>전체공개,멤버공개로 변경할 수 없습니다.</p>
        <div class="dropdown-type2 tooltip">
          <dropdown-menu2
            :propItem="dropItem"
            :propClass="'dropdown-type2-list member-edit__tip'"
            propLocation="bottom center"
          >
          </dropdown-menu2>
        </div>
        <p class="txt2">변경하시겠습니까?</p>
      </div>
    </template>
    <template v-slot:btnWrap>
      <div class="btn-wrap">
        <button type="button" class="btn lg line-type1">취소</button>
        <button type="button" class="btn lg">확인</button>
      </div>
    </template>
  </base-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue";
import dropdownMenu2 from "@/components/dropdownMenu2.vue"

export default defineComponent({
  components: {
    basePopup,
    dropdownMenu2
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
      dropItem: { 
        title: `
          <p>
            협업보드는 기본적으로 협업공간의 멤버와 동일하게 구성됩니다.<br>
            협업공간에서 멤버를 추가/삭제 시에<br>
            협업보드도 동일하게 적용되지만<br>
            보드멤버를 협업공간과 다르게 구성 시에는<br>
            더 이상 협업공간의 멤버 변경에 영향을 받지 않으므로<br>
            추후 보드 운영자가 멤버를 수동으로 추가/삭제 해야 합니다.
          </p>
        `,
      },
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