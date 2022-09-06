
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes 
  } from "react-router-dom";
import routes from './config/routes'  ;
import AuthProvider from "./providers/AuthProvider";

import './App.css';


function App() {
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
