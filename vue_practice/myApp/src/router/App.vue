<template>
    <h1>라우터 연습</h1>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Work">Work</router-link></li>
    </ul>
    <hr/>
    <router-view/>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>