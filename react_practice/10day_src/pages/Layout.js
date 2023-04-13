import React from 'react'
import { Outlet, useNavigate} from 'react-router-dom'

export default function Layout() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const goArticles = () => {
        navigate('./articles', { replace: true })//{ replace: true } = 현재 페이지를 페이지 기록에 남기지 않음(뒤로가도 이전페이지로 안감)
    }
    
    
  return (
    <div>
    <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
  )
}
