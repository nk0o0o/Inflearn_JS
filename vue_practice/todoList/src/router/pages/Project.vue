<template>
    <div>
        <h2>프로젝트</h2>
        <ul>
           <li v-for="project in projectList" :key="project.id">
                <router-link :to="{
                    name:'projectDetail',
                    params:{
                        id:project.id
                    }
                }">{{ project.title }}</router-link>
            </li>
        </ul>
        <hr/>
        <router-view/>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name:'project',
    setup () {
        const projectList = ref([
            {id:1, title:'프로젝트1'},
            {id:2, title:'프로젝트2'},
            {id:3, title:'프로젝트3'},
        ])
        return {
            projectList
        }
    }
})
</script>

<style scoped>

</style>