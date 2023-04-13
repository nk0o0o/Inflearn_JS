import React from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Detail({shoes}) {
    let {id} = useParams()
  return (
    <div>
        <Container>
            <Row>
                <Col md={{ span: 2, offset: 3 }}>
                    <img src={`http://www.heossem.com/react/img/shoes${id}.webp`}/>
                </Col>
                <Col md={{ span: 2, offset: 3 }}>
                    <h4>{shoes[id].title}</h4>
                    <p>{shoes[id].content}</p>
                    <p>{shoes[id].price}</p>
                    <Button variant="danger">주문하기</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
