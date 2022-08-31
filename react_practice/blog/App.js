



 const [todos, setTodos] = useState([
   {
     id: 1,
     text: '리액트 기초 알아보기',
     checked: true,
   },
   {
     id: 2,
     text: '컴포넌트 스타일링 하기',
     checked: true,
   },
   {
     id: 3,
     text: '투두리스트 만들기',
     checked: false,
   },
 ]);
 
 
 
 <TodoTemplate> //앱을 이루는 컨테이너 박스
   
      <ToDoInsert />
       //할 일 입력창
      <ToDoList> //할 일 목록(ul)
      	<ToDoListItem /> //할 일 (li)
      </ToDoList>
	  <ToDoEdit /> //수정하기 창(팝업창이라서 대충 빼놓음)
    </TodoTemplate>