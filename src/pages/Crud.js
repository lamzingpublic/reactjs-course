import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { db } from '../firebase';
import { doc, setDoc, collection, getDocs, getDoc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

import BooksTable from '../components/BooksTable';


const Crud = () => {
    const [dataBooks, setDataBooks] = useState([]);
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [uid, setId] = useState("");
    const [editstatus, setEditStatus] = useState(false);


    useEffect(() => {
        fetchDataFirestore();
    }, []);

    const setDataFirestore = async () => {
        if (name === "" || author === "") {
            alert("All fields are required!")
        } else {
            await setDoc(doc(db, "react2025", uuidv4()), {
                name: name,
                author: author,
            });
            setName("");
            setAuthor("");
            setId("");
            fetchDataFirestore();
        }

    }

    const fetchDataFirestore = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "react2025"));
            // console.log("---->"+JSON.stringify(querySnapshot.docs))
            const newDataArray = querySnapshot.docs.map((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let udata = doc.data();
                console.log("1 : ", udata)
                udata.uid = doc.id
                console.log("2 : ", udata)
                return udata;
            });

            console.log("---" + JSON.stringify(newDataArray))
            setDataBooks(newDataArray)
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }

    }

    const updateFirestore = async () => {

        // Reference to the document
        //const docRef = db.collection('react2025').doc(uid);
        const docRef = doc(db, "react2025", uid);
        
        // Update specific fields
        updateDoc(docRef, {
            name: name,
            author: author
        }).
            then(() => {
                console.log('Document successfully updated!');
                alert("Document successfully updated!");
                setName("");
                setAuthor("");
                setId("");
                setEditStatus(false)
                fetchDataFirestore();
            }).
            catch((error) => {
                console.error('Error updating document: ', error);
            });

    }

    return (
        <Container>
            <h1>CRUD Application</h1>
            <hr />
            <BooksTable dataBooks={dataBooks} setEditStatus={setEditStatus} editstatus={editstatus} setName={setName} setAuthor={setAuthor} setId={setId} />
            <hr />
            {editstatus ? <h1>Update Data</h1> : <h1>Add Data</h1>}
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
                </Form.Group>
                {editstatus ? <><Button variant='primary' onClick={() => updateFirestore()} >Update</Button>&nbsp; &nbsp;<Button variant='primary' onClick={() => {
                    setEditStatus(false);
                    setName("");
                    setAuthor("");
                    setId("");

                }

                } >Reset</Button></> : <Button variant='primary' onClick={() => setDataFirestore()} >Submit</Button>}
            </Form>
        </Container>
    );
};

export default Crud;
