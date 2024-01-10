<template>
    <vue-final-modal
      v-model="showModal"
      v-slot="{ params }"
      v-bind="$attrs"
      classes="modal-container"
      content-class="modal-content"
      @click-outside="clickOutside"
      :click-to-close="clickToClose"
      :lock-scroll="propLockScroll"
    >
    <template v-if="propFrameUrl">
      <div class="modal__content" :class="[isScrollClass, bodyClass]">
        <slot v-bind:params="params" name="body"></slot>
      </div>
    </template>
    <template v-else>
      <h1 class="modal__title">
        <slot name="title">{{title}}</slot>
      </h1>

      <div class="modal__content" :class="[isScrollClass, bodyClass]">
        <slot v-bind:params="params" name="body"></slot>
      </div>

      <div class="modal__action">
        <slot name="btnWrap"></slot>
      </div>
    </template>

    <button class="modal__close" @click="popClose">
      <span class="blind">레이어 팝업 닫기</span>
    </button>
  </vue-final-modal>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent ({
  props: {
    propLockScroll:{
      type: Boolean,
      default: false,
    },
    propFrameUrl:{
      type: String,
      default: '',
    },
    clickToClose : {
      type: Boolean,
      default: true,
    },
    pageInfo: null,
    title: {
      type: String,
      default: ''
    },
    propShowModal: {
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
      showModal: this.propShowModal,
      isScrollClass: this.propIsScrollClass? 'is-scroll': '',
      bodyClass: this.propBodyClass
    }
  },
  watch:{
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    popClose(){
      this.$emit('popClose', this.showModal = false);
    },
    clickOutside(){
      if(this.clickToClose) {
        this.$emit('popClose', this.showModal = false);
      }
    }
  }
})
</script>
