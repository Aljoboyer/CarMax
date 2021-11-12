import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Successmodal = ({setShow,show,handleClose}) => {
    return (
        <>   
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title>Operation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            successfull
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
            close
        </Button>
        </Modal.Footer>
    </Modal>
    </>
    );
};

export default Successmodal;