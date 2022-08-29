import React from 'react';
import NavBar from './../components/NavBar'

export default function LayoutBasic(props) {

const {children} = props;

  return (
  <>
  
  <NavBar/>
  
    <div className=''>{children}</div>

  </>
  )
}
