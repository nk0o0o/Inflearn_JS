import {useRef, useState} from "react"
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import './App.css'

function App() { // 함수 선언식
    const [users, setUsers] = useState([//users는 객체덩어리
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);
    //----------------------------------------------------------------------------------
    const [inputs, setInputs] = useState({//변하는 값을 기억시키는 저장소 {}는 객체
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;//디스트럭쳐링
        setInputs( { ...inputs, [name]: value } );//...input풀고, name의 값을 
    };
    //----------------------------------------------------------------------------------
    //생성하기
    const nextId = useRef(4); //4번째부터 집어넣어
    const onCreate = () => {  //자식끼리 값 전달 못하니깐 app.js거치고가야해!   
        //입력하면 초기화되고 추가시킴
        setInputs({
            username:'',
            email:''
        })

        const user={
            id:nextId.current,
            username,//==username:username,
            email,
            active:false
        }
        setUsers([...users, user])// users가 객체 자체니깐
        // == setUsers(users.concat(user));
        nextId.current += 1; //그 다음 아이디에 추가 시켜
    };
    //-----------------------------------------------------------------------------------
    //삭제하기
    const onRemove = (id)=>{//User컴포넌트에서 받아온값
        setUsers(users.filter(user => user.id !== id)); 
        //각 객체를 user라는 변수에 담고, user에서 id뽑고 그걸 삭제하고 싶은
        //id랑 비교해서 같지 않은 애들만 남겨보여주기
    }
    //----------------------------------------------------------------------------------
    //(수정하기) user의 active값 토글로 f/t 건드려보기
    const onToggle = (id) => {
        setUsers(
          users.map(user => //user들 돌아가면서 다보기
            user.id === id ? { ...user, active: !user.active } : user
            //user객체 다뿌려주는데~ 
            //객체의 id가 같으면 그 객체의 active 값을 반대로 고치고 뿌릴거야
          )
        );
      };
    
    return (
        <div className="App">
            <CreateUser 
                username={username} 
                email={email} 
                onChange={onChange} 
                onCreate={onCreate}/>
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        </div>
    );
}

export default App;
