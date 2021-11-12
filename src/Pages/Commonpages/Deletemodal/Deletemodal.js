import React from 'react';
import { Modal ,Button} from 'react-bootstrap';

const Deletemodal = ({DeleteHanlder,deleteid,setPermission,permission,setIsdelete,handleClose}) => {
            return (
    <>   
    <Modal
        show={permission}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        I will not close if you click outside me. Don't even try to press
        escape key.
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