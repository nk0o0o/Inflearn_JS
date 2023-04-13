import { useParams } from 'react-router-dom'

export default function Article() {
    const {id}= useParams(); //Link로 url로 넘겨주는값
    console.log(id)
  return (
    <div>
      <h2>게시글 {id}글 입니다</h2>
    </div>
  )
}
