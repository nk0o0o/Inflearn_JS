<template>
    <h2>저의 노력이 담긴 작업물입니다.</h2>
    <ul>
        <li><router-link :to="{name:'project'}">프로젝트</router-link></li>
        <li><router-link :to="{name:'graphics'}">그래픽</router-link></li>
        <li><router-link to="/publish">퍼블리싱</router-link></li>
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