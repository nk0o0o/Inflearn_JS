import React from 'react'
import { Navigate } from 'react-router-dom';

export default function MyPage() {
    const isLoggedIn = false;//로그인안된상태 테스트
    if(!isLoggedIn){
        return <Navigate to={"/login"} replace={true}/>
    }
  return (
    <div>
        마이페이지      
    </div>
  )
}
