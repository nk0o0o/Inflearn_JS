<!-- vue3 -->
<template>
    <h2>Composition Api</h2>
    <p>{{ message }}</p><!-- 탬플릿문법 : 이중중괄호 : 콧수염기법 머쉬탯시 -->
    <p v-text="firstName + ' ' + lastName"></p> <!-- 따옴표안이어도 문자열이 아님! 뷰가 알아서 해줌 -->
    <p v-html="formattedMessage"></p>
    <p>{{ `${ firstName } ${lastName}` }}</p>
    <slot>{{ message }}</slot>
</template>

<script>
    import {reactive, computed} from 'vue';
    //재활용을 해주께, (리액트에서 useMemo랑 비슷!)
    export default{
        setup(){
            // declaring rendering 여기서(setup()) 선언해서
            // html 에서 사용하겠다
            // 객체, 배열, 등등 정의하는 방법이 다름
            const state = reactive({
                //객체 저장소 (리액트에서 useState랑 비슷)
                message: "Hello World!",
                firstName : "John",
                lastName : "Doe"        
            })
            const formattedMessage = computed( ()=> {
                return `<strong>${state.message}</strong>`
            })

            return{
                //선언된거 랜더링 시켜주는거 : 반응형
                message : state.message,
                firstName : state.firstName,
                lastName : state.lastName,
                formattedMessage
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>