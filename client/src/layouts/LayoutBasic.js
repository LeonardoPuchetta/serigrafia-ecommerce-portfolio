import React from 'react';
import NavBar from './../components/NavBar';
import Footer from '../components/Footer';

export default function LayoutBasic(props) {

const {children} = props;

  return (
  <>
  
  <NavBar/>
  
    <div className=''>{children}</div>

  <Footer/>  

  </>
  )
}
