<template>
  <div class="filter">
    <label>과목선택:
      <select v-model="subjectFilter" name="" id="">
        <option value="">All</option>
        <option v-for="subject in uniqueSubjects"
          :key="subject">{{ subject }}</option>
      </select>
    </label>
    Search : <input type="text" v-model="searchCommand" name="" id="">
  </div>
  <!-- ------------------------------------ -->
  <table border="1">
    <thead>
      <tr>
        <td>ID</td>
        <td>과목</td>
        <td>명령어</td>
        <td>문법</td>
        <td>삭제</td>
      </tr>
    </thead>
    <tbody>
      <CommandData 
        v-for="item in filteredData" 
        :key="item.id" 
        :id="item.id" 
        :subject="item.subject" 
        :command="item.command"
        :grammer="item.grammer"
        @delete-command="deleteCommand"
         />
    </tbody>

  </table>
  <!---------------------------------------- -->
  <AddCommandForm @add-command="addCommand"/>
  <!---------------------------------------- -->
</template>

<script>
import { reactive,ref, computed } from "vue";
import CommandData from './CommandData.vue';
import AddCommandForm from './AddCommandForm.vue';


export default {
  name: 'App',
  components: {
    CommandData,
    AddCommandForm
  },
  //-----------------------------------------------
  setup() {
    const storageData = JSON.parse(localStorage.getItem('cheetData')) || [];
    const cheetData = reactive(storageData)
      /* { id: 1, subject: 'Html', command: 'h1', grammer: '제목' },
      { id: 2, subject: 'Vue', command: 'ref', grammer: '상태변수' },
      { id: 3, subject: 'React', command: 'useState', grammer: '상태변수' },
      { id: 4, subject: 'Vue', command: 'v-on', grammer: '이벤트' },
      { id: 5, subject: 'React', command: 'props', grammer: '부모에서 자식에게 값 전달' }, */
    // ---------------------------------------
    const saveLocalStorage = () => {
      localStorage.setItem('cheetData', JSON.stringify(cheetData))
    }
    // ---------------------------------------
    const uniqueId =()=>{
      const maxId = cheetData.length > 0?
      Math.max(...cheetData.map(item =>item.id)) : 0 //비어있는 저장 뿌리면 0
      return maxId + 1//가장 큰값에 +1
    }
    // ---------------------------------------
    const addCommand = (newCommandItem) => { 
      const newId = uniqueId();
      newCommandItem.id=newId;
      cheetData.push(newCommandItem);
      saveLocalStorage();
    }
    // ---------------------------------------
    const deleteCommand = (id) => { 
      const index = cheetData.findIndex(item => item.id === id);//받아온 id의 아이템은 몇번째야? 없으면 -1
      if(index !== -1){ //인덱스가 있으면
        cheetData.splice(index,1)//그 번째부터 1개 지우기
        saveLocalStorage()
      }
    }
    // ---------------------------------------
    const uniqueSubjects = computed(() => {//사용자의 입력을 받는 이벤트의 경우 반응성 필요하고,  computed로 감싸줘야함 좋은 점은 캐시저장을해서 그뒤로 바로 출력해줌
      const subjects = cheetData.map((item) => item.subject);
      return [...new Set(subjects)];
    });
    // ---------------------------------------
    const subjectFilter = ref('');
    const searchCommand = ref('');
    const filteredData = computed(() => {
      let filtered = cheetData

      if (subjectFilter.value.trim()) {
        filtered = filtered.filter(
        item => item.subject.toLowerCase().includes(subjectFilter.value.toLowerCase()))
      }
      //입력받은것도 과목 벨류안에 넣자 (과목, 명령어, 문법에 포함된 값도 )
      if (searchCommand.value.trim()) {
        filtered = filtered.filter(item => 
          item.subject.toLowerCase().includes(searchCommand.value.toLowerCase()) ||
          item.command.toLowerCase().includes(searchCommand.value.toLowerCase()) ||
          item.grammer.toLowerCase().includes(searchCommand.value.toLowerCase()))

      }
      return filtered;
    })
    
    // ---------------------------------------
    return {
      cheetData,
      addCommand,
      deleteCommand,
      uniqueSubjects,
      filteredData,
      subjectFilter,
      searchCommand
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
#app {
  max-width: 520px;
  margin: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
td, th {
  padding: 10px;
}
.grid-container{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, auto);
  grid-gap: 10px;
}
input{
  width: 100%; padding: 10px;
}
.grid-container label{
  display: inline-block;
}
.submit-btn{
  grid-column:1/3;
  text-align: center;
  width: 100%;
}
.submit-btn button{
  padding: 10px;
}
</style>