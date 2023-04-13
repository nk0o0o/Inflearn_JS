import React from 'react'

//간단하지만 컴포넌트 나누고 싶을때 걍 같이씀
function Button({children}) { // children props 내장된 변수
    //가운데에 값으로 넣는거
    return <button>{children}</button>    
}

function Menu({children, url}) {
    return <li><a href={url}>{children}</a></li>
}

export default function Children() {
  return (
    <div>
        <Button>Click Me!</Button><br/>
        <Button>Submit!</Button><br/>
        <Button>Cancle!</Button>

        <div className="MenuList">
            <Menu url="https://www.google.com"> 구글 바로가기</Menu>
            <Menu url="https://www.naver.com"> 네이버 바로가기</Menu>
            <Menu url="https://www.daum.net"> 다음 바로가기</Menu>
        </div>
    </div>
  )
}
