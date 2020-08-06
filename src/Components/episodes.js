import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Episodes() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/src/assets/9AA5A3E0-7FD4-45F7-828A-02CCCF358265_1_105_c.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Episodes;
