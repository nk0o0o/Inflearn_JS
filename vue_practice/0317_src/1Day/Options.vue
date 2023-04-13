<!-- vue 2 -->
<template>
    <h2>Option Api</h2>
    <p>option Api 에서 출력하는 방법들</p>
    <p>{{ message }}</p><!-- 탬플릿문법 : 이중중괄호 : 콧수염기법 머쉬탯시 -->
    <p v-text="firstName + ' ' + lastName"></p> <!-- 따옴표안이어도 문자열이 아님! 뷰가 알아서 해줌 -->
    <p v-html="formattedMessage"></p>
    <p>{{ `${ firstName } ${lastName}` }}</p>
    <slot>{{ message }}</slot>
</template>

<script>
    export default {
        data(){
            return{
                message: "Hello World!",
                firstName : "John",
                lastName : "Doe"                
            }
        },
        computed:{
            formattedMessage(){
                return `<strong>${this.message}</strong>`
            }
        },
        mounted(){

        }
    }
</script>

<style lang="scss" scoped>

</style>