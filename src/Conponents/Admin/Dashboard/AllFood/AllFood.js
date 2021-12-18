import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import img from '../../../../Images/bugers/5.jpg';
const AllFood = () => {
    return (
        <div>
            <Container className='p-3'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={img} width={60} alt="" />
                                <span>Burger</span>
                            </td>
                            <td>$85</td>
                            <td>
                                <Button variant='dark'>Edit</Button>
                                <Button variant='danger'>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </Container>
        </div>
    );
};

export default AllFood;