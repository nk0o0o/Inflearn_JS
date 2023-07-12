<template>
   <div class="bg_black" v-if="modal">
      <div class="bg_white">
         <h4> {{ rooms[active].title }} </h4>
         <figure>
               <img :src="rooms[active].image" />
         </figure>
         <p>{{ rooms[active].content }}</p>
         <p>월세 : {{ rooms[active].price }} 원</p>
         <button @click="closeModal">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
   name:'TodoInputModal',
   setup(_, {emit}){
      const closeModal = () => { 
            emit('closeModal')
        }

      return {
         closeModal,
      }
   }
}
</script>

<style>
.modal {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal-content {
  background-color: #ffffff;
  margin: 15% auto;
  padding: 20px;
  width: 500px;
  border: 1px solid #888;
}
.close {
  padding: 10px;
  cursor: pointer;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
</style>

