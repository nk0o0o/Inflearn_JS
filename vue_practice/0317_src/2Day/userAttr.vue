<template>
    <!-- 바인드로 클래스 -->
    <div :class="{ 'is-active': isActive  }">클래스 활성화 </div>
    <!-- 이벤트 -->
    <button @click="toggleActive">Toggle</button>
    <!-- 바인드로 스타일 -->
    <div :style="{ color: textColor, fontSize: fontSize + 'px' }">스타일이 지정된 텍스트</div>
    
    <!-- 바인드로 속성 -->
    <div v-bind:my-attr="isActive2 ? 'active' : ''">{{ customValue }}</div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const isActive = ref(true);
      const textColor = ref("red");
      const fontSize = ref(24);
      const customValue = ref("사용자 지정 스타");
      const isActive2 = ref(false);

  
      function toggleActive() {
        isActive.value = !isActive.value;
      }
  
      function toggleActive2() {
      isActive2.value = !isActive2.value;
    }
      return { 
        isActive, 
        isActive2, 
        textColor,
        fontSize,
        customValue,
        toggleActive, 
        toggleActive2,
      };
    },
  };
  </script>
  
  <style>
    .is-active {
      color: red;
      font-weight: bold;
    }
    [my-attr="active"] {
      background-color: yellow;
    }
  </style>