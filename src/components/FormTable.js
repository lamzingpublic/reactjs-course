import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
function FormTable() {

    const [dataForm, setDataForm] = useState([]);

    useEffect(() => {
        formApiCall()
    }, []);

    const formApiCall = () => {
        axios
            .get(
                `https://67c9b82d102d684575c346b0.mockapi.io/blogs/formtable`
            )
            .then((response) => {

                let formdata = response.data;
                setDataForm(formdata)

            }).catch((e) => {
                console.log("eror " + e)
            });
    }

    const onDeleteUser = (id) =>{
        axios
        .delete(
            `https://67c9b82d102d684575c346b0.mockapi.io/blogs/formtable/${id}`
        )
        .then((response) => {
            window.location.reload(false); 

        }).catch((e) => {
            console.log("eror " + e)
        });
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataForm.map((item, index) => {

                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.username}</td>
                            <td> <Button onClick={()=>onDeleteUser(item.id)} variant="danger" size="sm">
          Delete
        </Button></td>
                        </tr>
                    })

                }


            </tbody>
        </Table>
    );
}

export default FormTable;