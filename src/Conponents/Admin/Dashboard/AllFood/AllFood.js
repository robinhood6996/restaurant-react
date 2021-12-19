import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import img from '../../../../Images/bugers/5.jpg';
import axios from 'axios';
const AllFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1111/food')
            .then(res => setFoods(res.data))
    }, [])
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
                        {
                            foods.map(food => <tr key={food._id}>
                                <td>
                                    <img src={`data:image/jpeg;base64,${food.image}`} width={60} alt="" />
                                    <span>{food.name}</span>
                                </td>
                                <td>${food.price}</td>
                                <td>
                                    <Button variant='dark'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>

            </Container>
        </div>
    );
};

export default AllFood;