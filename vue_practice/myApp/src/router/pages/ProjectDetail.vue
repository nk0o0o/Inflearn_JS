<template>
    <div>
        <button @click="goBack">뒤로가기</button>
        
        <h3>{{ project.title }}</h3>
        <p>{{ project.content }}</p>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
    setup () {
        const route = useRoute()
        const router = useRouter()
        const projectId = route.params.id;
        //------------------------------------------------------------------
        const projects = ref([
            {id:1, title:'프로젝트1', content:'프로젝트 1 상세 정보입니다.'},
            {id:2, title:'프로젝트2', content:'프로젝트 2 상세 정보입니다.'},
            {id:3, title:'프로젝트3', content:'프로젝트 3 상세 정보입니다.'},
        ])
        const project = computed(()=>{
            return projects.find(p => p.id = Number(projectId))
        })
        //------------------------------------------------------------------
        const goBack = () =>{
            router.back()
        }

        return {
          route,
          router,
          projectId,
          projects,
          project,
          goBack
        }
    }
}
</script>

<style scoped>

</style>