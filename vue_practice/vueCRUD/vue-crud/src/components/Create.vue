<template>
  <main class="page_create">
    <h2>{{ creatState }}</h2>
    <form @submit.prevent="onSubmit" class="post_form">
      <div class="post_write_area">
        <div class="post_row">
          <label for="postTit" class="post_l_cell">제목</label>
          <input type="text" id="postTit" class="post_r_cell shadow_box" v-model="postCont.postTit" required/>
        </div>
        <div class="post_row">
          <label for="postAuthor" class="post_l_cell">글쓴이</label>
          <input type="text" id="postAuthor" class="post_r_cell shadow_box" v-model="postCont.postAuthor" required/>
        </div>
        <div class="post_row">
          <label for="postText" class="post_l_cell">내용</label>
          <textarea id="postText" class="post_r_cell shadow_box" v-model="postCont.postText" required></textarea>
        </div>
      </div>
      <div v-if="hasError" class="msg_error">내용을 입력하세요</div>
      <div class="btn_area">
        <button type="button" class="btn shadow_box" @click="goList()">목록</button>
        <button type="submit" class="btn shadow_box">저장</button>
      </div>
    </form>
  </main>
</template>

<script>
import { ref, reactive, watch, computed } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
export default {
  name:"Create",
  emit:["add-post"], 
  setup (_, {emit}) {
    const router = useRouter();
    const route = useRoute();
    const hasError = ref(false);
    let postId = ref(route.params.contentId)
    let creatState = ref("새글쓰기")
    let postCont = reactive({
      postTit:"",
      postAuthor:"",
      postText:""
    });
    
    //수정하기 눌러서 온 경우
    if(postId.value){
      creatState.value = "수정하기";
      postCont = reactive({
        postTit:route.query.title,
        postAuthor:route.query.author,
        postText:route.query.content
      });
    }     

    //수정하다가 새글쓰기하는 경우
    onBeforeRouteUpdate((to, from) => {
      if (to.params.contentId !== from.params.contentId) {
        if (!confirm("수정 취소? 수정 내용이 저장되지 않습니다")) {          
          return false
        } else {
          postId.value = to.params.contentId;
          creatState.value = "새글쓰기";
          postCont.postTit = "",
          postCont.postAuthor = "",
          postCont.postText = ""  
        }
      }
    })

    onBeforeRouteLeave((to, from)=>{
      if(!confirm("글쓰기 멈춤?")){
        return false
      }
    })
    
    //글저장
    const onSubmit = () =>{
      if (!confirm("저장하겠습니까?")) {
        alert("저장 취소하였습니다");
        return false
      } else {
        hasError.value = false;
        alert("저장완료하였습니다");        

        addPost(postId.value)

        //입력칸 비우기
        postCont.postTit="",
        postCont.postAuthor="",
        postCont.postText=""
        
        //리스트페이지로 이동
        goList();
      }
    }
    
    //글보내기 emit
    const addPost = (postid)=>{
      emit("add-post", {
        id: postid,
        title: postCont.postTit,
        author: postCont.postAuthor,
        content: postCont.postText,
      });
    }
    
    //목록으로이동
    const goList = () => {
      router.push({
        name: "Read",
      });
    };
    
    return {
      hasError,
      postId,
      postCont,
      creatState,
      goList,
      onSubmit,      
    }
  }
}
</script>

<style scoped>
.post_row{
  display: flex;
  padding: 4px 0;

}
.post_row .post_l_cell{
  flex: 0 0 20%;
  text-align: left;
}
.post_row .post_r_cell{
  flex: 0 0 80%;
  box-sizing: border-box;
}
#postText{
  height: 100px;
}
.btn_area{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.btn_area button + button{
  margin-left: 8px;
}
.post_form{
  position: relative;
}
.msg_error{
  position: absolute;
  bottom:0px;
  left: 0;
  color: red;
}
</style>