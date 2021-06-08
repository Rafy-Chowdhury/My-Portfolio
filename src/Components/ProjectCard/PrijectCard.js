import React from 'react';
import { Card } from 'react-bootstrap';
import WOW from 'wowjs';
import './ProjectCard.css';

const PrijectCard = ({data}) => {
  const {title, about, liveLink, github} = data;
  new WOW.WOW().init();

    return (
        <div className="col-md-4 text-center mt-5">
            <Card className="wow zoomIn" data-wow-iteration="1" style={{ width: '18rem', height: 'auto', backgroundColor: "crimson", color:"white"}}>
            
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{about}</Card.Text>
                  <Card.Link className="buttonStyle" href={liveLink} target="_blank">Live Site</Card.Link>
                    <Card.Link className="buttonStyle" href={github} target="_blank">Source Code</Card.Link>
              </Card.Body>
            </Card>
      
        </div>
    );
};

export default PrijectCard;