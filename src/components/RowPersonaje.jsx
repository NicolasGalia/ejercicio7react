import React from 'react';
import { Card, Row } from 'react-bootstrap';
import Avatar from './Avatar'

const RowPersonaje = ({id, fullName, title, department, pic}) => {
    return (
     
        <Card style={{ width: '18rem' }}>
          <Row>
      <Card.Header>
        <Avatar pic={pic}></Avatar>
        </Card.Header>
        <Card.Body>
        <Card.Title>
{
  fullName
}
        </Card.Title>
        <Card.Text>
  {
    title
  }        
        </Card.Text>
        </Card.Body>
        <Card.Footer>
{
  department
}
        </Card.Footer>
        </Row>
    </Card>
    );
};

export default RowPersonaje;