<template>
  <main class="page_read">
    <!-- 리스트상단 -->
    <div class="d-flex df-a-center df-j-between gap-20">
      <div class="search_wrap">
        <input type="text"
          class="shadow_box"
          placeholder="Search" 
          :value="searchText"  
          @input="searchText = $event.target.value"  
          @keyup.prevent="searchPost(searchText)"
        />
      </div>
      <div class="filter_wrap">
        <select name="listFilter" id="" value="최신순" v-model="selectOption" class="shadow_box">
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
          <option value="title">제목순</option>
        </select>
      </div>
      <button type="button" class="shadow_box btn_delete d-flex" @click.stop="deletePost(selectOption)">
        <i class="ico_del red">선택글삭제</i>
      </button>
    </div>
    <!-- //리스트상단 -->
    <!-- 리스트 목록 -->
    <div class="table_list shadow_box">
      <!-- <div class="t_header">
        <div class="t_h_cell t_num">ID</div>
        <div class="t_h_cell t_w_10"></div>
        <div class="t_h_cell t_title">제목</div>
        <div class="t_h_cell t_w_15">작성자</div>
        <div class="t_h_cell t_date t_w_30">날짜</div>
      </div> -->
      <div class="t_body">
        <div v-if="!sortedItems.length && searchText">조건에 만족하는 값이 없습니다.</div>
        <div v-else class="t_row" :class="{'is_checked':item.checked}" v-for="(item, index) in sortedItems" :key="item.id">
          <!-- <div class="t_b_cell t_num">{{ item.id }}</div> -->
          <div class="t_b_cell t_select">
            <input type="checkbox" name="" 
              :id="'checkBox' + index" 
              @click.stop
              @change.stop="togglePost(index)"
              :checked="item.checked"
            />
            <label :for="'checkBox' + index"></label>
          </div>
          <div class="t_b_cell">{{ item.author }}</div>
          <div class="t_b_cell t_title" @click="moveToDetail(item.id)">{{ item.title }}</div>
          <div class="t_b_cell t_date">{{ item.createdAt }}</div>
        </div>
      </div>
    </div>
    <!-- //리스트 목록 -->
  </main>
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
      let items = postItems.value;
     
      if(!selectOption.value && !searchText.value){
        return {...postItems.value}
      }
      
      if(selectOption.value){
        switch (selectOption.value) {
          case "latest":
            items.sort((a, b)=>{
              return b.createdAt.localeCompare(a.createdAt)
            })
            break;
            case "oldest":
            items.sort((a, b)=>{
              return a.createdAt.localeCompare(b.createdAt)
            })
            break;
          case "title":
            items.sort((a, b)=>{
              return a.title.toUpperCase().localeCompare(b.title.toUpperCase())
            })
            break;
        
        }
      }

      if(searchText.value){
        return items.filter(post => {
          return post.title.toUpperCase().includes(searchText.value.toUpperCase())
            || post.content.toUpperCase().includes(searchText.value.toUpperCase())
            || post.author.toUpperCase().includes(searchText.value.toUpperCase())
            || post.createdAt.toUpperCase().includes(searchText.value.toUpperCase())
        })
      }
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
  .t_row.is_checked{
    background-color: #efefef;
    font-weight: 700;
  }
  .filter_wrap{
    margin-left: auto;
  }
  .table_list{
    margin-top: 20px;
  }
  .t_body{display: flex;
  flex-direction: column;
  gap: 8px;}
  .t_row{
    padding: 8px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 30px auto;
    border: 1px solid #aaa;
    border-radius: 20px;
  }
  .t_select{
    grid-row:1/4;
    display: flex;
  }
  .t_date{
    text-align: right;
  }
</style>