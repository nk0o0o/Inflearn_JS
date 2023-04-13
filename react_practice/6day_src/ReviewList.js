import React from 'react'
import ReviewItem from './ReviewItem'

export default function ReviewList({reviewList, onRemove, onEdit}) {
  return (
    <div className='ReviewList'>
        <h2>리뷰리스트</h2>
        <p>{reviewList.length}개의 리뷰가 있습니다.</p>
        <div>
            {reviewList.map((list)=>( //중괄호를 쓰면 return을 써줘야해서 소괄호로씀
                //기능이 있으면 계속 렌더링 되므로 반복되는건 뽑아줘야함
                <ReviewItem {...list} key={list.id}  onRemove={onRemove} onEdit={onEdit}
                 //===list={list} 
                    // title={list.title}
                    // content={list.content}
                    // emotion={list.emotion}
                    // create_date={list.create_date}
                />
                
            ))}
        </div>
    </div>
  )
}
