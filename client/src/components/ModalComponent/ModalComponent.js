import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function ModalComponent(props) {

    const {title,textBtn,setShowModal,componentModal,showModal,functionModal} = props;

    const handleClose = () => setShowModal(false);




  return (
    <>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {componentModal}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={functionModal}>
            {textBtn}
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}
