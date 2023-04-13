import React from 'react'

export default function Profile({img, name, detail, isNew}) {
  return (
    <div className="profile">
        <div className="photo"><img src={img}/></div>
        <h2>{name}</h2>
        <p>{detail}</p>
        {isNew && <span className="new">NEW</span>}
        {/* isNew가 있냐없냐? 없다 끝, 있다 뒤에꺼 넣기 참일때만 뒤로 넘어옴 */}
    </div>
  )
}
