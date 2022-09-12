import React,{useState,useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import OffCanvasComponent from '../OffCanvasComponent';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import CartUser from './../CartUser';
import ProductForm from '../ProductForm';

import logo from './../../assets/img/cat-animal-icon.svg'


import './NavBar.css'


import useAuth from '../../hooks/useAuth';
import { logout } from '../../api/auth';


export default function NavBar(props) {

const {user,isLoading} = useAuth(); 
const [isAdmin,setIsAdmin] = useState(false);

useEffect(()=>{
      if(user){      
      setIsAdmin(user.role == "admin");
      }
},[user]);

//funcion para desloguear usuario y recargar pagina 
const logoutNav =() =>{
      logout();
      window.location.reload();
}

const [showCanvasLogin, setShowCanvasLogin] = useState(false);
const handleShowLogin = () => setShowCanvasLogin(true);

const [showCanvasRegister, setShowCanvasRegister] = useState(false);
const handleShowRegister = () => setShowCanvasRegister(true);
const handleHideRegister = () => setShowCanvasRegister(false);

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
          <Nav.Link href="/ofertas">Ofertas</Nav.Link>
        </Nav>


        <Nav pullright="true">
            {user ?<Button variant="primary" onClick={logoutNav} className="me-2">
                  Logout
            </Button> : <></> }
        </Nav>
        <Nav pullright="true">
            {user ? <></> : <Button variant="primary" onClick={handleShowRegister} className="me-2">
                  Registro
            </Button>}
        </Nav>
        <Nav pullright="true">
            {user ? <></> : <Button variant="primary" onClick={handleShowLogin} className="me-2">
                  Login
            </Button>}
        </Nav>
        <Nav pullright="true">
            {isAdmin ? <Button variant="primary" onClick={handleShowAddProduct} className="me-2">
                  Nuevo producto
            </Button> : <></>}
        </Nav>
        <Nav pullright="true">
            {user ? <Button variant="primary" onClick={handleShowCart} className="me-2">
                  cart
            </Button> : <></>}
        </Nav>
      </Navbar.Collapse>

      {user ? <></> : <OffCanvasComponent show={showCanvasLogin} title='Login de usuario' 
            setShowCanvas={setShowCanvasLogin} componentCanvas = {<LoginForm/>}></OffCanvasComponent>}
            
      {user ? <></> :<OffCanvasComponent show={showCanvasRegister} title='Registro de usuario' 
            setShowCanvas={setShowCanvasRegister} componentCanvas = {<RegisterForm handleHideRegister={handleHideRegister}/>}>
      </OffCanvasComponent>}
      
      {user ?  <OffCanvasComponent show={showCanvasCart} title='Tus compras' 
            setShowCanvas={setShowCanvasCart} componentCanvas = {<CartUser userData={user}/>}></OffCanvasComponent> : <></>}
      {isAdmin ?  <OffCanvasComponent show={showCanvasAddProduct} title='Nuevo Producto' 
            setShowCanvas={setShowCanvasAddProduct} componentCanvas = {<ProductForm handleHideAddProduct={handleHideAddProduct}/>}></OffCanvasComponent> : <></>}

    </Container>
  </Navbar>
  )
}
