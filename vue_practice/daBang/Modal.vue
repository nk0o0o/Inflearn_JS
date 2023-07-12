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
    name : 'Modal',
    props:{//써도안써도됨
        rooms:Object,
        active:Number, 
        modal:Boolean,
    },
    setup(_, {emit}) {//props _,생략할수있음 {emit}은 두번째속성

        const closeModal = () => { 
            emit('closeModal')
        }

        //---------------------------------------
        return {

            closeModal,
          /*   rooms,
            active, 
            modal, */

        }//return




    }//setup
}
</script>

<style lang="scss" scoped></style>