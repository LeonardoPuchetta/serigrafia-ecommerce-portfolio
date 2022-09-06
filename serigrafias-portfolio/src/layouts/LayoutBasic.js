import React from 'react';
import NavBar from './../components/NavBar';
import Footer from '../components/Footer';

import useAuth from '../hooks/useAuth';

export default function LayoutBasic(props) {

const {children} = props;
const {user,isLoading} = useAuth();



  return (
  <>
  
  <NavBar/>
  
    <div className=''>{children}</div>

  <Footer/>  

  </>
  )
}
