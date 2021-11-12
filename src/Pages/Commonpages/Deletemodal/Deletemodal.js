import React from 'react';
import { Modal ,Button} from 'react-bootstrap';

const Deletemodal = ({children,DeleteHanlder,deleteid,setPermission,permission,setIsdelete,handleClose}) => {
            return (
    <>   
    <Modal
        show={permission}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title><i className="fas fa-trash-alt fa-2x"></i></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-danger fw-bold fs-5">
                Are Your Sure ! Want to delete This item ?
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => {
            setIsdelete(false)
            setPermission(false)
        }}>
            No
        </Button>
        <Button variant="primary" onClick={() => {
            DeleteHanlder(deleteid)
            
        }}>Yes Sure</Button>
        </Modal.Footer>
    </Modal>
    </>
    );
};

export default Deletemodal;