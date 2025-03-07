// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";
//vanilla javascript
//E
import { Button, Card } from "react-bootstrap";

function BCard({title, body}) {
  let navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/blogdetails")}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default BCard;