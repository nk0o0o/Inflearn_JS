import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Products({item}) {
  return (
    <div className='product'>
        <Col>
        <Link to={`/detail/${item.id}`}>
            <img src={`http://www.heossem.com/react/img/shoes${item.id}.webp`}/>
            <h4>{item.title}</h4>
            <p>{item.price}</p>
        </Link>
        </Col>
    </div>
  )
}
