<template>
    <vue-final-modal
      v-model="showModal"
      v-slot="{ params }"
      v-bind="$attrs"
      @click-outside="clickOutside"
      classes="modal-container"
      content-class="modal-content"
    >
    <h1 class="modal__title">
      <slot name="title">{{title}}</slot>
    </h1>

    <div class="modal__content" :class="[isScrollClass, bodyClass]">
      <slot v-bind:params="params" name="body"></slot>
    </div>

    <div class="modal__action">
      <slot name="btnWrap"></slot>
    </div>

    <button class="modal__close" @click="alertClose">
      <span class="blind">레이어 팝업 닫기</span>
    </button>
  </vue-final-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    pageInfo: null,
    title: {
      type: String,
      default: ''
    },
    propAlertShowModal: {
      type: Boolean,
      default: false,
    },
    propIsScrollClass: {
      type: Boolean,
      default: false
    },
    propBodyClass: {
      type: String,
      default: ''
    },
  },
  inheritAttrs: false,
  data() {
    return {
      showModal: this.propAlertShowModal,
      isScrollClass: this.propIsScrollClass? 'is-scroll': '',
      bodyClass: this.propBodyClass
    }
  },
  watch:{
    'propAlertShowModal': function(){
      this.showModal = this.propAlertShowModal
    }
  },
  methods:{
    alertClose(){
      this.$emit('alertClose', this.showModal = false);
    },
    clickOutside(){
      this.$emit('alertClose', this.showModal = false);
    }
  }
})
</script>
