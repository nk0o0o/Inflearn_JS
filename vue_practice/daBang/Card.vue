<template>
    <div class="product">
        <img class="room-img"  
            @click="openModal" 
            :src="room.image" alt>
        <h3>{{ room.title }}</h3>
        <p class="price">월세 : {{ room.price }} 원</p>
        <!-- <button @click="incrementCount(0)">허위매물신고</button>
        <span>신고수 : {{ count[0] }}</span> -->
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        room:Object
    },
    setup(props, {emit}) {

        const openModal = () => { 
            emit('openModal', props.room.id)
        }


        return {
            openModal,


        }//return

    }//setup
}
</script>

<style></style>