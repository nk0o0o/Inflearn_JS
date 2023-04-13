import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import Main from "./Main"
import Member from "./Member"
import Location from "./Location"
import About from "./About"
import data from "./data.js"
import Detail from "./Detail"
import { useState } from 'react';
import { Routes, Route, Link, useLocation, useParams, Outlet, useNavigate } from 'react-router-dom';


function App() {
  const [shoes, setShoes] = useState(data)
  let navigate = useNavigate()
  return (
    <div className="App">
      {/* 내비 */}
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/about/member')}}>OUR HOME</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/location')}}>찾아오시는길</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* // 내비 */}


      {/* 라우터 */}
      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes}/>}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
          
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<Member/>}/>
          <Route path="location" element={<Location/>}/>
        </Route>
        <Route path='/*' element={<div>접근이 잘못되었습니다.</div>}/>

      </Routes>
    </div>
  );
}

export default App;
