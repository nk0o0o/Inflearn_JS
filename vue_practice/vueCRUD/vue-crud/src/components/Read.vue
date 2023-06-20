<template>
  <div class="page_read">
    <!-- 리스트상단 -->
    <div class="d-flex df-a-center df-j-between">
      <div class="search_wrap">
        <input type="text"
          placeholder="Search" 
          :value="searchText"  
          @input="searchText = $event.target.value"  
          @keyup.prevent="searchPost(searchText)"
        />
      </div>

      <div class="filter_wrap">
        <select name="listFilter" id="" value="최신순" v-model="selectOption">
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
          <option value="title">제목순</option>
        </select>
      </div>
      <button type="button" @click.stop="deletePost(selectOption)">선택글삭제</button>
    </div>
    <!-- //리스트상단 -->
    <!-- 리스트 목록 -->
    <div>
      <div class="table_list">
        <div class="t_header">
          <div class="t_h_cell t_num">ID</div>
          <div class="t_h_cell">날짜</div>
          <div class="t_h_cell">제목</div>
          <div class="t_h_cell">작성자</div>
          <div class="t_h_cell t_check">선택</div>
        </div>
        <div class="t_body" v-for="(item, index) in sortedItems" :key="item.id">
          <div class="t_row" :class="{'is_checked':item.checked}">
            <div class="t_b_cell t_num">{{ item.id }}</div>
            <div class="t_b_cell">{{ item.createdAt }}</div>
            <div class="t_b_cell post_tit" @click="moveToDetail(item.id)">{{ item.title }}</div>
            <div class="t_b_cell">{{ item.author }}</div>
            <div class="t_b_cell t_check">
              <input type="checkbox" name="" 
                :id="'checkBox' + index" 
                @click.stop
                @change.stop="togglePost(index)"
                :checked="item.checked"
              />
              <label :for="'checkBox' + index"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //리스트 목록 -->
  </div>
</template>

<script>
import { ref, toRef, computed, isProxy, toRaw } from 'vue'
import { useRouter } from "vue-router";
export default {
  name:"Read",
  props: {
    postItems:Array
  },
  emits: ["toggle-post", "delete-post", "search-post"],
  setup (props,{emit}) {
    const router = useRouter();
    const searchText = ref("")
    const postItems = toRef(props, 'postItems')
    const selectOption = ref(null)
    //토글 체크
    const togglePost = (idx) => {
      emit("toggle-post", idx)
    }
    //삭제하기
    const deletePost = () => {
      if (!confirm("삭제?")) {
        alert("삭제 취소");
        return false
      } else {
        emit("delete-post")
      }
    };
    
    //상세페이지로 이동
    const moveToDetail = (postId) => {
      router.push({
        name: "Detail",
        params: {
          contentId: postId,
        },
      });
    };
    //검색 필터
    const searchPost = (text) => {
      searchText.value = text;
    }
    //글 검색 / 정렬
    let sortedItems = computed(()=>{      
      if(selectOption.value){
        switch (selectOption.value) {
          case "latest":
            postItems.value.sort((a, b)=>{
              return b.createdAt.localeCompare(a.createdAt)
            })
            break;
            case "oldest":
              postItems.value.sort((a, b)=>{
              return a.createdAt.localeCompare(b.createdAt)
            })
            break;
          case "title":
            postItems.value.sort((a, b)=>{
              return a.title.toUpperCase().localeCompare(b.title.toUpperCase())
            })
            break;
        
        }
      }

      if(searchText.value){
        return postItems.value.filter(post => {
          return post.title.includes(searchText.value)
            ||post.content.includes(searchText.value)
            ||post.author.includes(searchText.value)
            ||post.createdAt.includes(searchText.value)
        })
      }

      return postItems.value
    })
    return {
      router,
      postItems,
      searchText,
      selectOption,
      sortedItems,
      moveToDetail,
      deletePost,
      togglePost,
      searchPost
    }
  }
}
</script>

<style scoped>
  .post_tit{
    cursor: pointer;
  }
  .t_row.is_checked{
    background-color: #efefef;
    font-weight: 700;
  }
</style>