import React,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import OffCanvasComponent from '../OffCanvasComponent';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import CartUser from './../CartUser';
import ProductForm from '../ProductForm';

import logo from './../../assets/icons/cat-in-black-silhouette.png';
import iconTshirt from './../../assets/icons/t-shirt.png';
import iconCanvas from './../../assets/icons/canvas.png';
import iconSale from './../../assets/icons/hot-sale.png';
import iconPatch from './../../assets/icons/patch.png';
import iconCart from './../../assets/icons/cart.svg';


import './NavBar.css'
import useAuth from '../../hooks/useAuth';
import { logout } from '../../api/auth';


export default function NavBar(props) {
//usamos el hook para traer el user 
const {user} = useAuth(); 

const [isAdmin,setIsAdmin] = useState(false);

useEffect(()=>{
      if(user){      
      setIsAdmin(user.role == "admin");
      };
      // console.log(user)
},[user]);

//funcion para desloguear usuario y recargar pagina 
const logoutNav = () =>{
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
    <Navbar  expand="lg"  fixed="top" className='navbar-container' >
    <Container >
      <Navbar.Brand > 
            <Link to='/' className='navbar-link-img'>
            <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  />{' '}ConQuePoquito
            </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/remeras" className='navbar-link'>
            <span>Remeras</span>
            <span><img src={iconTshirt} width="25"
                  height="25" alt='remeras'/></span>
            
          </Link>
          <Link to="/laminas" className='navbar-link'>
            <span>Laminas</span>
            <span><img src={iconCanvas} width="25"
                  height="25" alt='laminas'/></span>
          </Link>
          <Link to="/parches" className='navbar-link'>
            <span>Parches</span>
            <span><img src={iconPatch} width="25"
                  height="25" alt='parches'/></span>
          </Link>
          <Link to="/ofertas" className='navbar-link'>
            <span>Ofertas</span>
            <span><img src={iconSale} width="25"
                  height="25" alt='sale'/></span>
          </Link>
          
        </Nav>


        <Nav pullright="true">
            {user ? <button onClick={logoutNav} >
            salir</button> : <></> }
        </Nav>
        <Nav pullright="true">
            {user ? <></> : <button  onClick={handleShowRegister} >
            registro
            </button>}
        </Nav>
        <Nav pullright="true">
            {user ? <></> : <button onClick={handleShowLogin} >
               login
            </button>}
        </Nav>
        <Nav pullright="true">
            {isAdmin ? <button  onClick={handleShowAddProduct} >
                  Nuevo producto
            </button> : <></>}
        </Nav>
        <Nav pullright="true">
            {user ? <button  onClick={handleShowCart} >
            <img src={iconCart} width="30"
                  height="30" alt='cart'/>
            </button> : <></>}
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
