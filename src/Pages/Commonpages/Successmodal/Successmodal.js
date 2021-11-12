import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modals.css'
const Successmodal = ({setShow,show,handleClose,children}) => {
    return (
        <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><i className="fas fa-check-circle fa-2x"></i></Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-warning fs-4 modalbody fw-bold">
           {children}
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-info" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Successmodal;