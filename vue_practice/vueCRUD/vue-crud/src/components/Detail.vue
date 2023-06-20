<template>
  <div class="page_detail">
    <div v-if="loading">..Loading</div>
    <div v-else class="page_edit_wrap">
      <div class="tit_area">
        <h2>{{ post.title }}</h2>
        <div class="d-flex df-a-center df-j-between">
          <div class="post_info">{{ post.createdAt }}</div>
          <div class="post_info">{{ post.author }}</div>
        </div>
      </div>
      <div class="cont_area">
        {{ post.content }}
      </div>
    </div>
    <div class="btn_area">
      <button type="button" @click="EditPost(postId)">수정</button>
      <button type="button" @click="moveToListPage">목록</button>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";
export default {
  name:"Detail",
  emits: ["edit-post"],
  setup (_, {emit}) {
    const route = useRoute();
    const router = useRouter();
    const error = ref("");
    const post = ref(null);
    const loading = ref(true);
    const postId = route.params.contentId;
    
    //글 내용 가져오기
    const getPost = async (params) => {
      try {
        const res = await axios.get("http://localhost:5000/posts/" + postId);
        post.value = res.data;
        loading.value = false;
      } catch (err) {
        error.value = err;
      }
    };
    getPost();

    //글 내용 수정
    const EditPost = (postId)=>{
      emit("edit-post", postId)
    }

    //목록페이지로 이동
    const moveToListPage = () => {
      router.push({
        name: "Read",
      });
    };

    return {
      loading,
      error,
      post,
      postId,
      EditPost,
      moveToListPage
    }
  }
}
</script>

<style scoped>
  .tit_area h2{padding: 16px 8px;}
  .post_info{font-size: 14px;line-height: 1;}
  .cont_area{
    padding: 24px 16px;
    text-align: justify;
  }
</style>