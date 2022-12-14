import React from 'react';
import {ListGroup} from 'react-bootstrap'
import RowPersonaje from "./RowPersonaje";
import { empleados } from '../personajes';


const List = () => {
    return (
    <ListGroup>
 {
    empleados.map(empleado => (
        <ListGroup.Item >
        <RowPersonaje fullName={empleado.fullName} title={empleado.title} department={empleado.department} pic={empleado.pic}  >
        </RowPersonaje>
      </ListGroup.Item>
    ))
 }        
    </ListGroup>
    
    );
};



export default List;

