<template>
  <Header></Header>
  <router-view 
    :searchResult="searchResult"
    :postItems="filteredPost"
    @add-post="addPost" 
    @toggle-post="togglePost" 
    @delete-post="deletePost"      
    @edit-post="editPost"
    @search-post="searchPost"
    @sort-post="sortPost"
  ></router-view>
</template>

<script>
import Header from "@/components/Header.vue";
import { ref, computed } from "vue";
import { useRouter } from 'vue-router'
import axios from "axios";
export default{
  name:"App",
  components:{
    Header
  },
  setup() {
    const router = useRouter();
    const postItems = ref(null);
    const loading = ref(true);
    const error = ref("");
    const searchText = ref("");
    const selectOption = ref("");
    let searchResult = ref(false);
    let editPostId = ref("");

    //가져오기
    const getPost = async (params) => {
      try {
        const res = await axios.get("http://localhost:5000/posts/");
        postItems.value = res.data;
        loading.value = false;
      } catch (err) {
        error.value = err;
      }
    };
    getPost();

    //날짜 포맷
    const formatDate = (date) => {
      date = [
        '' + date.getFullYear(),
        '0' + (date.getMonth() + 1),
        '0' + date.getDate(),
        '0' + date.getHours(),
        '0' + date.getMinutes()
      ].map(component => component.slice(-2)); 
      return date.slice(0, 3).join('.') + ' ' + date.slice(3).join(':');
    }

    //글올리기
    const addPost = async (post) => {
      error.value = "";
      if(!editPostId.value){
        try {
          const res = await axios.post("http://localhost:5000/posts/", {
            id:post.id,
            title: post.title,
            author: post.author,
            content: post.content,
            createdAt: formatDate(new Date()),
            checked:false
          });
          postItems.value.push(res.data);
        } catch (err) {
          console.log("error")
          error.value = err;
        }        
      }else{
        try{
          const res = await axios.put(`http://localhost:5000/posts/${editPostId.value}`,{
            id:editPostId,
            title: post.title,
            author: post.author,
            content: post.content,
            createdAt: formatDate(new Date()),
            checked:false
          })
          getPost();
        }catch(err){
          error.value = err
        }
      }
    }

    //토글
    const togglePost = async (idx) => {
      error.value = "";
      const id = postItems.value[idx].id;
      try {
        await axios.patch("http://localhost:5000/posts/" + id, {
          checked: !postItems.value[idx].checked,
        });
      } catch (err) {
        console.log("error")
        error.value = err;
      }
      postItems.value[idx].checked = !postItems.value[idx].checked;
    };

    //글삭제
    const deletePost = async() => {
      error.value='';
      const id = postItems.value.map((obj) => {
        if(obj.checked == true){
          return obj.id
        }
      }).filter(el=>el)
      if(!id.length){
        alert("선택된 글이 없습니다.")
      }else{
        try{
          for (let i = 0; i < id.length; i++) {
            const res = await axios.delete('http://localhost:5000/posts/' + id[i])
            getPost();
          }
          alert("삭제완료")
        }catch(err){
          console.log("error")
          error.value = err
        }
      }
    }
   
    //글 수정
    const editPost = async (postId) => {
      editPostId.value = postId;
      try {
        const res = await axios.get("http://localhost:5000/posts/" + postId);
        router.push({
        name: "Create",
        params: {
          contentId: postId,
        },
        query:{
          id:postId,
          title:res.data.title,
          content:res.data.content,
          author:res.data.author
        }
      });
      } catch (err) {
        error.value = err;
      }
    };
    //글 검색
    const searchPost = (text)=>{
      searchText.value = text
    }
    const sortPost = (text)=>{
      selectOption.value = text
    }
    // 글 검색/정렬로 거른값 넘기기
    const filteredPost = computed(()=>{
      let items = postItems.value;
      
      if(!selectOption.value && !searchText.value){
        searchResult.value = false;
        return items
      }
      
      if(selectOption.value){
        switch (selectOption.value) {
          case "latest":
          return items.sort((a, b)=>{
            return b.createdAt.localeCompare(a.createdAt)
          })
          case "oldest":
          return items.sort((a, b)=>{
            return a.createdAt.localeCompare(b.createdAt)
          })
          case "title":
          return items.sort((a, b)=>{
            return a.title.toUpperCase().localeCompare(b.title.toUpperCase())
          })
        }
      }

      if(searchText.value){
        searchResult.value = !searchResult.value;
        return items.filter(post => {
          return post.title.toUpperCase().includes(searchText.value.toUpperCase())
            || post.content.toUpperCase().includes(searchText.value.toUpperCase())
            || post.author.toUpperCase().includes(searchText.value.toUpperCase())
            || post.createdAt.toUpperCase().includes(searchText.value.toUpperCase())
        })
      }
      
    })
    return{
      error,
      postItems,
      editPostId,
      selectOption,
      searchText,
      searchResult,
      filteredPost,
      getPost,
      sortPost,
      searchPost,
      addPost,
      togglePost,
      deletePost,
      editPost,
    }
  }
}


</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 500px;
  margin: 0 auto;
}
</style>
