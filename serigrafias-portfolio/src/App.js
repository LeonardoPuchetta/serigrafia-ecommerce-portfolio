
import React,{useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes 
  } from "react-router-dom";
import routes from './config/routes'  ;
import AuthProvider from "./providers/AuthProvider";

import AOS from 'aos';
import "aos/dist/aos.css";

import './App.css';




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
    <Router>
        <Routes>
          {routes.map((route,index) => (
                <Route  key={index} 
                        path={route.path}
                        element={ <route.layout>
                                  <route.component/>
                                  </route.layout>}
                          />
          ))}
        </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
