import React from 'react';
import { Card }from 'react-bootstrap';


const Avatar = ({pic}) => {
    return (
        <Card>
       <Card.Img variant="top" src= {pic} className="rounded-circle" />
        </Card>
    );
};

export default Avatar;