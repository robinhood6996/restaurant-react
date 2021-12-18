import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../Images/logo2.png';
import food from '../../Images/bugers/1.jpg'
import './Navigation.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/action/cartAction';
const Navigation = () => {
    const carts = useSelector(cart => cart.cart);
    const dispatch = useDispatch()
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} width={150} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Breakfast</Nav.Link>
                            <Nav.Link href="#link">Lunch</Nav.Link>
                            <Nav.Link href="#link">Dinner</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">More</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='me-2 align-items-center'>
                            <Nav.Link href="#link" className='mr-2'><span className='fs-6'>Order By Phone</span><br /><span style={{ color: '#cc3a3a' }}>0156897464</span></Nav.Link>

                            <NavDropdown title={<button className='ms-4 id="basic-nav-dropdown"' style={{ border: '1px solid #cc3a3a', background: 'none', borderRadius: 10 }}> <FontAwesomeIcon icon={faCartPlus} className='fs-5' /> <span className='fs-5'>{carts.length ? carts.length : 0}</span></button>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className='cart-items'>
                                    {/* <div className='cart-item'>
                                        There are nothing on your cart!
                                    </div> */}
                                    {
                                        carts.map(cart => <div key={cart.id} className='cart-item d-flex justify-content-evenly border-bottom'>
                                            <div className="food-image">
                                                <img src={cart.image} width={50} alt="" />
                                            </div>
                                            <div className="food-details">
                                                <p>{cart.name} <button className='btn btn-danger' onClick={() => dispatch(removeFromCart(cart))}>X</button></p>
                                                <p>{cart.qty} x ${cart.price} = </p>
                                            </div>
                                        </div>)
                                    }

                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    {/* <div className='subtotal d-flex justify-content-between'>
                                        <p>Subotal:</p>
                                        <p>$6.00</p>
                                    </div> */}
                                    <div className='checkout-btn d-flex justify-content-between'>
                                        <button className='btn btn-danger'>View Cart</button>
                                        <button className='btn btn-danger'>Checkout</button>
                                    </div>
                                </NavDropdown.Item>

                            </NavDropdown>
                            <div className='btwlink ms-4'>
                                <a href="https://eatsy.bold-themes.com/burger/menu/" target="_self" className="btButtonWidgetLink ml-2">
                                    <span className="btButtonWidgetText">VIEW FULL MENU</span>
                                </a>
                            </div>
                            <div className='btwlink ms-4'>
                                <a href="https://eatsy.bold-themes.com/burger/menu/" target="_self" className="btButtonWidgetLink ml-2">
                                    <span className="btButtonWidgetText">Login</span>
                                </a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;