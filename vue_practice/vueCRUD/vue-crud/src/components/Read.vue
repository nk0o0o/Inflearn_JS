<template>
  <main class="page_read">
    <!-- 리스트상단 -->
    <div class="d-flex df-a-center df-j-between gap-20">
      <div class="search_wrap">
        <input type="text"
          class="shadow_box"
          placeholder="Search" 
          :value="searchText"  
          @input="searchText = $event.target.value;searchPost(searchText)"          
        />
      </div>
      <div class="filter_wrap">
        <select name="listFilter" id="" value="최신순" v-model="selectOption" @change="sortPost(selectOption);" class="shadow_box">
        <!-- <select name="listFilter" id="" value="최신순" :value="selectOption" @input="selectOption = $event.target.value;sortPost(selectOption);" class="shadow_box"> -->
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
    <div class="table_list">
      <!-- <div class="t_header">
        <div class="t_h_cell t_num">ID</div>
        <div class="t_h_cell t_w_10"></div>
        <div class="t_h_cell t_title">제목</div>
        <div class="t_h_cell t_w_15">작성자</div>
        <div class="t_h_cell t_date t_w_30">날짜</div>
      </div> -->
      <div class="t_body">
        <div v-if="searchResult" class="t_row shadow_box nodata">조건에 만족하는 값이 없습니다.</div>
        <div v-else class="t_row shadow_box" :class="{'is_checked':item.checked}" v-for="(item, index) in postItems" :key="item.id">
         <!--  <div class="t_b_cell t_num">{{ item.id }}</div> -->
          <div class="t_b_cell">{{ item.author }}</div>
          <div class="t_b_cell t_title" @click="moveToDetail(item.id)">{{ item.title }}</div>
          <div class="t_b_cell t_date">{{ item.createdAt }}</div>
          <div class="t_b_cell t_select">
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
    <!-- //리스트 목록 -->
  </main>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from "vue-router";
export default {
  name:"Read",
  props: {
    postItems:Array,
    searchResult:Boolean
  },
  emits: ["toggle-post", "delete-post", "search-post", "sort-post"],
  setup (props,{emit}) {
    const router = useRouter();
    const searchText = ref("")
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
      emit("search-post", text)      
    }
    //정렬
    const sortPost = (text)=>{
      emit("sort-post", text)
    }
    return {
      router,
      searchText,
      selectOption,
      sortPost,
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
  .t_body{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .t_row{
    padding: 16px;
    display: grid;
    grid-template-columns: auto 36px ; 
    border-radius: 16px;
  }
  .t_b_cell{
    font-size: .75rem;
    color: #5D5C5D;
    line-height: 1.25;
  }
  .t_b_cell + .t_b_cell{
    margin-top: 4px;
  }
  .t_b_cell + .t_date{
    margin-top: 8px;
  }
  .t_title{
    font-size: 1rem;
    font-weight: 700;
    color: #152C07;
    white-space:normal;
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
  .t_date{
    text-align: left;
    color: #BEBEBE;
  }
  .t_select{
    grid-row: 1 / span 3;
    grid-column: 2 / span 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .t_select input{
    display: none;
  }
  .t_select input + label{
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
  }
  .t_select label{
    position: relative;
    width:20px;
    height: 20px;
    background-color: #c7fae2;
    border-radius: 4px;
    cursor: pointer;
  }
  .t_select input:checked + label::after{
    content: '';
    display: block;
    color: #fff;
    position: absolute;
    top: 45%;
    left: 50%;
    width: 10px;
    height: 6px;
    border-bottom-left-radius: 2px;
    border-bottom: solid 2px currentColor;
    border-left: solid 2px currentColor;    
    -webkit-transform: translate(-50%, -45%) rotate(-45deg);
    transform: translate(-50%, -45%) rotate(-45deg);
  }
  .t_select input:checked + label{
    opacity: 1;
    visibility: visible;
    background-color: #5ede99;
  }
  .t_row:hover .t_select input + label{
    opacity: 1;
    visibility: visible;
  }
  .nodata{
    font-size: 1rem;
    color: #152C07;
  }
</style>