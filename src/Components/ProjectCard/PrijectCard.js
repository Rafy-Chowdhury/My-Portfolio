import React from 'react';
import { Card } from 'react-bootstrap';

const PrijectCard = ({data}) => {
  const {title, about, liveLink} = data;

    return (
        <div className="col-md-4 text-center mt-5">
            <Card style={{ width: '18rem', height: '14rem', backgroundColor: "black", color:"white"}}>
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    
    <Card.Text>
      {about}
    </Card.Text>
    <Card.Link href={liveLink} target="_blank">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      
        </div>
    );
};

export default PrijectCard;