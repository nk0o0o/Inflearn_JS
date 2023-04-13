<!-- vue3 -->
<template>
    <!-- {{ name }} -->
    <!-- {{ greeting('point') }} -->
    <!-- {{ greet }} -->
    {{name}}
    <button v-on:click="updateName">클릭</button>
</template>

<script>
    import { ref } from "vue";
    //ref 변하고 싶은 거 ref로 찾아서 바꿔줌 (usestate같음)
    export default{
        setup(){
            //let name = '초기값'
            let name = ref('초기값')//문자나 숫자
            const greeting = (name) =>{
                return 'Hello~'+name
            }
            const greet = greeting(name)
            const updateName = () =>{
                name.value = '이벤트 클릭 변경값'
                //console.log(name)
            }
            return{
                //name
                //greet
                name,
                updateName
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>