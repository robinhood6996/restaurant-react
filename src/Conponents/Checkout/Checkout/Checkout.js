import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import wave from '../../../Images/wave.png';
import Navigation from '../../Shared/Navigation';
import { removeAllFromCart } from '../../../redux/action/cartAction';
import axios from 'axios';
import Swal from 'sweetalert2';


const Checkout = () => {
    const { user, isLoading } = useAuth();
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [ordered, setOrdered] = useState(false);




    //get cart state from redux
    const carts = useSelector(cart => cart.cart);
    const dispatch = useDispatch()

    //get all orders
    let foods = {};
    for (const product of carts) {
        foods[product._id] = product.qty;
    }

    //calculate
    let total = 0;
    const totalQuantity = 0;

    for (const product of carts) {
        total = total + product.qty * product.price;
    }
    let shipping = total > 0 ? 5 : 0;

    //Form
    // let order = { name: user.displayName, email: user.email };
    const handleChange = (e) => {

    }
    const handleOrder = e => {
        e.preventDefault();
        // setOrdered(true);
        // setOrderId(Math.random() * 100000 + 1);
        const order = { name, email, phone, location, foods };
        dispatch(removeAllFromCart());
        localStorage.removeItem('carts');
        setOrdered(true);
        axios.post('https://ancient-ravine-11592.herokuapp.com/order', order)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Thanks!',
                        'Your order has been placed',
                        'success'
                    )
                }
            })

    }
    return (
        <div>
            <Navigation></Navigation>
            <Image src={wave} width="100%"></Image>
            <section style={{ background: '#f5e7c1', height: '100vh' }}>

                <Container className='d-flex justify-content-center '>

                    {
                        carts.length && <Form onSubmit={handleOrder} style={{ width: '80%' }}>
                            <h2 className='login-heading'>Checkout</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" defaultValue={user.displayName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address*</Form.Label>
                                <Form.Control className='w-100' type="email" placeholder="Enter email" name="email" defaultValue={user.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number*</Form.Label>
                                <Form.Control type="phone" placeholder="Enter Phone" name="phone" onBlur={e => setPhone(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address*</Form.Label>
                                <Form.Control type="phone" placeholder="Enter Location" name="location" onBlur={e => setLocation(e.target.value)} required />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Place Order
                            </Button>
                            <div>
                                <h3>Item Ordered: {carts.length}</h3>
                                <h3>Total Bill: ${total + shipping}</h3>
                            </div>
                        </Form>

                    }
                    {
                        !carts.length && !ordered ? <h2> Your cart is empty</h2> : ''
                    }
                    {
                        ordered && <h2>Your order successfully placed!</h2>
                    }
                </Container>
            </section>
        </div>
    );
};

export default Checkout;