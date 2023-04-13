import React from 'react';

//따로 컴포넌트 만들어서 값만 받아와서 뿌려주자
function User({ user , onRemove, onToggle}) {
    return (
        <div>
            <b className={user.active ? 'green' : 'black'}
              
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
             <span>({user.email})</span>
            <button onClick={()=> onRemove(user.id)}>삭제</button>
        </div>
    );
}

export default function UserList({users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}


            {/* 
                <div>
                    <b>{users[0].username}</b> <span>({users[0].email})</span>
                </div>
                <div>
                    <b>{users[1].username}</b> <span>({users[1].email})</span>
                </div>
                <div>
                    <b>{users[2].username}</b> <span>({users[1].email})</span>
                </div> 
                    이렇게 보내면 값당 하나하나 컴포넌트를 만들어냄 - 비효율 
                    - 최적화해야함(값만 보내서 뿌려주는 컴포넌트 만들어주자)
            */}
                {/* 
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
            순서대로 가져와서 뿌려주는것도 비효율
            - map을 활용하자
            */}
        </div>
    );
}
