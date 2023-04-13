import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Products"
import axios from "axios";
import { Container,Button, Row} from 'react-bootstrap';

export default function Main({shoes, setShoes}) {
  return (
    <>
        <div className='main-bg'></div>
        <Container>
            <Row xs={2} md={3}>
                {/* <Col>
                <img src='http://www.heossem.com/react/img/shoes1.webp'/>
                <h4>상품제목</h4>
                <p>상세설명</p>
                <p>가격</p>
                </Col> */}
                {shoes.map(item=>
                (<Products key={item.id} item={item}/>)
                )}
            </Row>
            <div className='more'>
                <Button onClick={()=>{
                  axios.get('http://localhost:5000/shop')
                  .then((result)=>{
                    console.log('result.data ===', result.data)
                    let newData = [...shoes, ...result.data]
                    setShoes(newData) //App.js에서 넘어온 바구니에 newData 담아보내기
                  })
                  .catch(()=>{console.log('데이터 불러오기 실패')})
                }}
                variant="success">
                  더보기</Button>
            </div>
        </Container>
    </>
  )
}
