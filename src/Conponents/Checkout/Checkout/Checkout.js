import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import wave from '../../../Images/wave.png';
import Navigation from '../../Shared/Navigation';
const Checkout = () => {
    const { user, isLoading } = useAuth();
    const [orderData, setOrderData] = useState({});
    const [ordered, setOrdered] = useState(false);
    const [orderId, setOrderId] = useState(0);
    let order = { name: user.displayName, email: user.email };
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...order };
        newOrderData[field] = value;
        setOrderData(newOrderData);
        console.log(orderData);
    }
    const handleOrder = e => {
        e.preventDefault();
        setOrdered(true);
        setOrderId(Math.random() * 100000 + 1);
    }
    return (
        <div>
            <Navigation></Navigation>
            <Image src={wave}></Image>
            <section style={{ background: '#f5e7c1', height: '100vh' }}>
                <Container className='d-flex justify-content-center '>
                    {
                        ordered == false ? <Form onSubmit={handleOrder} style={{ width: '80%' }}>
                            <h2 className='login-heading'>Checkout</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" value={user.displayName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address*</Form.Label>
                                <Form.Control className='w-100' type="email" placeholder="Enter email" name="email" value={user.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number*</Form.Label>
                                <Form.Control type="phone" placeholder="Enter Phone" name="phone" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address*</Form.Label>
                                <Form.Control type="phone" placeholder="Enter Location" name="location" onChange={handleChange} required />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Place Order
                            </Button>
                        </Form> :
                            <div>
                                <h2>Thanks for your order</h2>
                                <h3>You order id is: <b>{orderId.toFixed(0)}</b></h3>
                            </div>
                    }
                </Container>
            </section>
        </div>
    );
};

export default Checkout;