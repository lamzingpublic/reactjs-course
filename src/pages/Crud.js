import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { db } from '../firebase';
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
const Crud = () => {
    const [dataBooks, setDataBooks] = useState([]);
     

    useEffect(() => {
        fetchDataFirestore();
        // console.log(" 1 ")
        // let unsubscribed = false;
        // getDocs(collection(db, "react205")).then((querySnapshot)=>{
        //     console.log(" 2 ")
        //     if (unsubscribed) return; // unsubscribed? do nothing.
        // //     const newDataArray = querySnapshot.docs
        // //     .map((doc) => {
        // //         console.log(JSON.stringify(doc))
        // //     }
        
        // // );
        // setDataBooks(querySnapshot.docs.map(doc => ({
        //     id: doc.id,
        //     ...doc.data()
        //   })))

        // // const newDataArray = querySnapshot.forEach((doc) =>  doc.data);

        // //     console.log(" 3 "+JSON.stringify(newDataArray))

        // //     setDataBooks(newDataArray)
        // }).catch((e)=>{
        //     if (unsubscribed) return; // unsubscribed? do nothing.
        //     console.log(" 4 ")
        //     // TODO: Handle errors
        //     console.error("Failed to retrieve data", e);
        // })


    }, []);

    const setDataFirestore = async () => {
        await setDoc(doc(db, "react2025", uuidv4()), {
            name: "XYZ",
            author: "Shiva Khera",
            price: "300"
        });
    }

    const fetchDataFirestore = async () => {
        try {
        const querySnapshot = await getDocs(collection(db, "react2025"));
       // console.log("---->"+JSON.stringify(querySnapshot.docs))
        const newDataArray = querySnapshot.docs.map((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            return doc.data()
        });

        console.log("---"+JSON.stringify(newDataArray))
        setDataBooks(pItems=>[...pItems, ...newDataArray])
    } catch (error) {
        console.error("Error fetching documents: ", error);
    }
        
    }
    console.log("book data "+JSON.stringify(dataBooks))
    return (
        <Container>
            <h1>CRUD Application</h1>
            <hr />
            { dataBooks?.map((bookData) => <p>{bookData.name}<br/></p>) }
            <Button variant='primary' onClick={() => setDataFirestore()} >Set Data</Button>
        </Container>
    );
};

export default Crud;
