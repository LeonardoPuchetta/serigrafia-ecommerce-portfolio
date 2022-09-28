
import React,{useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import CartProvider from "./providers/CartProvider";

import LayoutBasic from "./layouts/LayoutBasic";
import Remeras from "./pages/Remeras";
import Laminas from "./pages/Laminas";
import Parches from "./pages/Parches";
import Ofertas from "./pages/Ofertas";
import ProductDetailContainer from "./components/ProductDetailContainer";

import AOS from 'aos';
import "aos/dist/aos.css";

function App() {


  useEffect(()=>{
    const script = document.createElement("script");
  
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.async = true;
  
    document.body.appendChild(script);

    AOS.init({
      duration : 2000
    });
  },[])



  return (

  <AuthProvider>
    <CartProvider >
      <Router>
          <Routes> 

            <Route path='/' element={<LayoutBasic/>}/>
            <Route path='/remeras' element={<LayoutBasic><Remeras/></LayoutBasic>}/>
              <Route path='/remeras/:id' element={<LayoutBasic><ProductDetailContainer/></LayoutBasic>}/>
            <Route path='/laminas' element={<LayoutBasic><Laminas/></LayoutBasic>}/>
              <Route path='/laminas/:id'  element={<LayoutBasic><ProductDetailContainer/></LayoutBasic>}/>
            <Route path='/parches' element={<LayoutBasic><Parches/></LayoutBasic>}/>
              <Route path='/parches/:id'  element={<LayoutBasic><ProductDetailContainer/></LayoutBasic>}/>
            <Route path='/ofertas' element={<LayoutBasic><Ofertas/></LayoutBasic>}/>
            <Route path='*' element={<p>Error 404</p>}/>
        
          </Routes>  
      </Router>
    </CartProvider>
  </AuthProvider>
  );
}

export default App;
