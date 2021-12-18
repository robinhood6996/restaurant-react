import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import bg from '../../Images/bugers/1.jpg'
import Navigation from '../Shared/Navigation';
import './Cart.css'
const Cart = () => {
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
                        <tr className='border-bottom'>
                            <td><button className='btn btn-danger'>X</button><img src={bg} width={60} alt="" /><span className='fw-bold'>Beacon Beacon Burger</span></td>
                            <td className='fw-bold'>$20</td>
                            <td className='fw-bold'>2</td>
                            <td className='fw-bold'>$40</td>
                        </tr>
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
                            <td className='fw-bold fs-5'>$56</td>
                        </tr>
                        <tr className='border-bottom'>
                            <td className='fw-bold fs-5'>Shipping:</td>
                            <td></td>
                            <td></td>
                            <td className='fw-bold fs-5'>$5</td>
                        </tr>
                        <tr >
                            <td className='fw-bold fs-5'>Total:</td>
                            <td></td>
                            <td></td>
                            <td className='fw-bold fs-5'>$61</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='d-flex justify-content-center'>
                    <button className='text-center btn btn-danger'>Proceed To Checkout</button>
                </div>
            </Container>
        </div>
    );
};

export default Cart;