import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function BooksTable({dataBooks, setEditStatus, editstatus, setName, setAuthor, setId}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataBooks?.map((item, index)=>{
            return  <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td><Button variant='success' onClick={()=>{
                setEditStatus(true)
                setName(item.name)
                setAuthor(item.author)
                setId(item.uid)
                
                }} size='sm'>Edit</Button>&nbsp; <Button variant='danger' size='sm'>Delete</Button></td>
          </tr>
        })}
       
    
      </tbody>
    </Table>
  );
}

export default BooksTable;