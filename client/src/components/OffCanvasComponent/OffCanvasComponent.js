import React,{useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function OffCanvas(props) {

  const {title,show,setShowCanvas,componentCanvas} = props;

  const handleClose = () => setShowCanvas(false);

  return (
    <>
    <Offcanvas show={show} onHide={handleClose} scroll={true} placement={'end'} expand={'sm'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {componentCanvas}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
