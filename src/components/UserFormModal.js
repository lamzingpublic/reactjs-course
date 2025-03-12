import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

function UserFormModal({ show, handleClose, handleShow, setShow }) {


    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [uname, setUserName] = useState("");
    const [errormessage, setErrorMessage] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if (fname === "" || lname === "" || uname === "") {
            //alert("All fields are required!")
            setErrorMessage("All fields are required!")
        } else {
            setErrorMessage("")
            console.log("---- " + fname + "  " + lname)
            submitFormData();
        }
    }

    const submitFormData = async () => {
        const json = JSON.stringify({ firstname: fname, lastname: lname, username: uname });
        const res = await axios.post('https://67c9b82d102d684575c346b0.mockapi.io/blogs/formtable', json, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        });
        console.log("result ---> "+JSON.stringify(res))
        setShow(false)

        window.location.reload(false); 

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formSubmit}>
                        {errormessage.length > 0 && <Alert variant={'danger'}>
                            {errormessage}
                        </Alert>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={(e) => {
                                setFirstName(e.target.value)
                                setErrorMessage("")
                            }} type="fname" placeholder="Enter Firstname" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={(e) => setLastName(e.target.value)} type="lname" placeholder="Enter Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(e) => setUserName(e.target.value)} type="uname" placeholder="Enter Username" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserFormModal;