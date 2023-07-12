<template>
  <div class="container">

    <h1>DaBang</h1>
    <nav class="menu">
      <a href="#" v-for="menu, i in menus" :key="i">{{ menu }}</a>
    </nav>
    <button @click="priceSort">가격순 정렬</button>

    <!-- //------------------------------------------ -->
    <Card
        v-for="room,i in rooms"
        :key="i"
        :room="room"
        @openModal="modal=true;"
    ></Card>
    
    <!-- <div class="product" v-for="room, i in rooms">
      <img @click="modal=true; active=i" 
        class="room-img" 
        :src="room.image" alt>
      <h3>{{ room.title }}</h3>
      <p class="price">월세 : {{ room.price }} 원</p>
      <button @click="incrementCount(0)">허위매물신고</button>
      <span>신고수 : {{ count[0] }}</span>
    </div> -->

  </div><!-- ./container -->

  <Modal 
    @closeModal="modal = false"
    :rooms="rooms"
    :active="active" 
    :modal="modal"
  ></Modal>

  <!-- modal -->
  <!-- <div class="bg_black" v-if="modal">
    <div class="bg_white">
      <h4>{{ rooms[active].title }}</h4>
      <figure>
        <img :src="rooms[active].image"/>
      </figure>
      <p>{{rooms[active].content }}</p>
      <p>월세 : {{rooms[active].price }} 원</p>
      <button @click="modal=false">닫기</button>
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue";
import data from "../assets/data.js";
export default {
  name:'App',//써도 되고 안써도되고
  components: {
    Modal,
    Card
  },
  setup () {
    const menus = ['Home','관심목록','방내놓기'];
    const modal = ref(false);
    const rooms = ref(data);
    const active = ref(0)
    //----------------------------------------------------
    const priceSort = () => { 
      rooms.value.sort(function(a, b) {
        return a.price - b.price
      })
    }
    //----------------------------------------------------
    /* const count = ref([0,0,0]);
    const incrementCount = (index) =>{
      count.value[index]++
    } */
    //----------------------------------------------------
    return {
      data,
      rooms,
      active,
      menus,
      modal,      
      priceSort,
      /* count,
      incrementCount, */
      
    }//return

  }//setup
}
</script>

<style>
*{margin: 0;padding: 0;}
body{
  width: 100%;
  height: 100vh;
}
.container{
  max-width: 520px;
  margin: auto;
}
.menu{
  padding: 15px;
  background: darkslateblue;
  border-radius: 5px;
}
.menu a{
  padding:10px;
  text-decoration: none;
  color: #fff;
}
.room-img{
  width: 100%;
}

.bg_black{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
}
.bg_white{
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}
.bg_white figure, .bg_white img {
  width: 100%;
  height: auto;
}
</style>