<!-- vue3 -->
<template>
    <!-- {{ name }} -->
    <!-- {{ greeting('point') }} -->
    <!-- {{ greet }} -->
    {{name.nickName}}
    <button v-on:click="updateName">클릭</button>

    {{name1.nickName}}
    <button v-on:click="updateName1">클릭2</button>
  
    <!-- {{name2.nickName}}
    <button v-on:click="updateName2">클릭2</button> -->
</template>

<script>
    import { ref, reactive } from "vue";
    export default{
        setup(){
            let name = ref({
                nickName : 'Point'
            })//객체
            
            const updateName = () =>{
                name.value.nickName = '이벤트 클릭 변경값'
                //console.log(name)
            }

            let name1 = reactive({
                nickName : 'nana'
            })
            const updateName1 = () =>{
                name1.nickName = 'Ddubi'
                //console.log(name)
            }

           /* reactive는 객체만 가능!!!
            let name2 = reactive('이름')
            const updateName2 = () =>{
                name1.nickName = 'Ddubi'
                //console.log(name)
            } */
            return{
                name,
                name1,
                updateName,
                updateName1
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>