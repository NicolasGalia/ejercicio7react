import React from 'react';
import {ListGroup} from 'react-bootstrap'
import RowPersonaje from "./RowPersonaje";
import { empleados } from '../personajes';

const List = () => {
    return (
    <ListGroup>
      <ListGroup.Item>
        <RowPersonaje></RowPersonaje>
      </ListGroup.Item>
    </ListGroup>
    );
};

export default List;