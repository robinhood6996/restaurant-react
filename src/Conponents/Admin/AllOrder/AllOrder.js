import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1111/order')
            .then(res => {
                setOrders(res.data)
            })
    }, [])
    return (
        <div>
            <h2>All Orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Foods</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <td>{index}</td>
                            <td>{order.name}</td>
                            <td>{order.phone}</td>
                            <td>{order.location}</td>
                            <td></td>
                            <td><Button variant={'danger'}>Delete</Button> | <Button variant={'warning'}>Pending</Button></td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllOrder;