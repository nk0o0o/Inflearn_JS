import React from 'react';
/* import { Link, Outlet } from 'react-router-dom'; */
import { NavLink, Outlet } from 'react-router-dom';
//NavLink :현재 라우트의 경로와 일치하는 경우 특정 스타일 또는 CSS 클래스를 적용
const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };
    return (
        <li>
          <NavLink
            to={`/articles/${id}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 {id}
          </NavLink>
        </li>
      );
}
const Articles = () => {
    /* const activeStyle = {
        color: 'green',
        fontSize: 21,
    }; */
  return (
    <div>
        {/*
            Link 로 이동
        <ul>
            <li>
                <Link to="/articles/1">게시글 1</Link>
            </li>
            <li>
                <Link to="/articles/2">게시글 2</Link>
            </li>
            <li>
                <Link to="/articles/3">게시글 3</Link>
            </li>
        </ul> */}
        
        <ul>
           {/* NavLink로 이동 --- > 공통영역 뽑기
             <li>
                <NavLink 
                    to="/articles/1"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    게시글 1
                </NavLink>
            </li> */}
            <ArticleItem id={1} />
            <ArticleItem id={2} />
            <ArticleItem id={3} />
        </ul>
        <Outlet />
    </div>
  );
};

export default Articles;