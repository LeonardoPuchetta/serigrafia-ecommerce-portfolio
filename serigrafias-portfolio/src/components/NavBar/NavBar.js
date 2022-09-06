import React,{useState} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import OffCanvasComponent from '../OffCanvasComponent';
import LoginForm from '../LoginForm';
import CartUser from './../CartUser';
import ProductForm from '../ProductForm';

import logo from './../../assets/img/cat-animal-icon.svg'


import './NavBar.css'


import useAuth from '../../hooks/useAuth';




export default function NavBar(props) {

const {user,isLoading} = useAuth();  




const [showCanvasLogin, setShowCanvasLogin] = useState(false);
const handleShowLogin = () => setShowCanvasLogin(true);

const [showCanvasCart, setShowCanvasCart] = useState(false);
const handleShowCart = () => setShowCanvasCart(true);

const [showCanvasAddProduct, setShowCanvasAddProduct] = useState(false);
const handleShowAddProduct = () => setShowCanvasAddProduct(true);
const handleHideAddProduct = () => setShowCanvasAddProduct(false);



  return (
    <Navbar bg="dark" expand="lg"  variant="dark"  fixed="top" >
    <Container>
    <Navbar.Brand href="/"> 
        <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}ConQuePoquito
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/remeras">Remeras</Nav.Link>
          <Nav.Link href="/laminas">Laminas</Nav.Link>
          <Nav.Link href="/parches">Parches</Nav.Link>
          <Nav.Link href="/parches">Ofertas</Nav.Link>
        </Nav>

        <Nav pullright="true">
            {user ? <></> : <Button variant="primary" onClick={handleShowLogin} className="me-2">
                  login
            </Button>}
        </Nav>
        <Nav pullright="true">
            {user ? <Button variant="primary" onClick={handleShowAddProduct} className="me-2">
                  Nuevo producto
            </Button> : <></>}
        </Nav>
        <Nav pullright="true">
            {user ? <Button variant="primary" onClick={handleShowCart} className="me-2">
                  cart
            </Button> : <></>}
        </Nav>
      </Navbar.Collapse>

      {user ? <></> : <OffCanvasComponent show={showCanvasLogin} title='login' 
            setShowCanvas={setShowCanvasLogin} componentCanvas = {<LoginForm/>}></OffCanvasComponent>}
      {user ?  <OffCanvasComponent show={showCanvasCart} title='cart' 
            setShowCanvas={setShowCanvasCart} componentCanvas = {<CartUser userData={'hola'}/>}></OffCanvasComponent> : <></>}
      {user ?  <OffCanvasComponent show={showCanvasAddProduct} title='Nuevo Producto' 
            setShowCanvas={setShowCanvasAddProduct} componentCanvas = {<ProductForm handleHideAddProduct={handleHideAddProduct}/>}></OffCanvasComponent> : <></>}

    </Container>
  </Navbar>
  )
}
