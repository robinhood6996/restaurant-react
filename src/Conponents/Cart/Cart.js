import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import bg from '../../Images/bugers/1.jpg'
import Navigation from '../Shared/Navigation';

import './Cart.css';



const Cart = () => {
    const carts = useSelector(cart => cart.cart);

    let total = 0;
    const totalQuantity = 0;

    for (const product of carts) {
        total = total + product.qty * product.price;

    }
    let shipping = total > 0 ? 5 : 0;


    return (
        <div>
            <Navigation></Navigation>
            <hr />
            <h2 className='text-center fs-1 mt-5 shopping-cart-heading'>Shopping Cart</h2>
            <Container className='p-3'>
                <Table responsive="sm" borderless="true">
                    <thead>
                        <tr className='bg-danger text-light border-bottom' >
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map(cart => <tr className='border-bottom' key={cart.id}>
                                <td><button className='btn btn-danger'>X</button><img src={cart.image} width={60} alt="" /><span className='fw-bold'>{cart.name}</span></td>
                                <td className='fw-bold'>${cart.price}</td>
                                <td className='fw-bold'>{cart.qty}</td>
                                <td className='fw-bold'>${cart.qty * cart.price}</td>
                            </tr>)
                        }
                        <tr className='border-bottom'>
                            <td>Coupon: <form action="" className='d-flex'><input type="text" placeholder='Coupon Code' /> <input className='btn btn-danger m-1' type="submit" value="Apply" /></form></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className='border-bottom'>
                            <td className='fs-2'>Cart Totals</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className='border-bottom'>
                            <td className='fw-bold fs-5'>Subtotal:</td>
                            <td></td>
                            <td></td>
                            <td className='fw-bold fs-5'>${total}</td>
                        </tr>
                        <tr className='border-bottom'>
                            <td className='fw-bold fs-5'>Shipping:</td>
                            <td></td>
                            <td></td>
                            <td className='fw-bold fs-5'>${shipping}</td>
                        </tr>
                        <tr >
                            <td className='fw-bold fs-5'>Total:</td>
                            <td></td>
                            <td></td>
                            <td className='fw-bold fs-5'>${total + shipping}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='d-flex justify-content-center m-2'>
                    <button className='text-center btn btn-dark m-2'><FontAwesomeIcon icon={faArrowLeft} /><Link className='link' to="/shop">Continue Shopping</Link></button>
                    <button className='text-center btn btn-danger m-2'><Link className='link' to="/checkout">Proceed To Checkout</Link> <FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
            </Container>
        </div>
    );
};

export default Cart;