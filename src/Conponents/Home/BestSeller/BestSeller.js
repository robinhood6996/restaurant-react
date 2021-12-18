import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './BestSeller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import banner from '../../../Images/bugers/banner.jpg';
import burger4 from '../../../Images/bugers/4.jpg';
import burger5 from '../../../Images/bugers/5.jpg';
import SingleProduct from './SingleProduct';

const BestSeller = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./food.json')
            .then(res => res.json())
            .then(data => setFoods(data)
            )
    }, []);

    const handleAdd = (food) => {
        const existingCart = [...cart];
        if (existingCart.indexOf(food) === -1) {
            const newCart = [...existingCart, food];
            setCart(newCart);
        }
    }
    console.log(cart)
    return (
        <div className='mb-10 best-seller'>
            <h2 className='text-center best-title'>Best Seller</h2>

            <Container>
                <Row>
                    {
                        foods.slice(3, 6).map((food) => <SingleProduct key={food.id} food={food} handleAdd={handleAdd}></SingleProduct>)
                    }
                </Row>

                <Row>
                    <Col>
                        <div className="banner" style={{}}>
                            <img className='img-fluid' src={banner} alt="" />
                        </div>
                    </Col>
                    <Col style={{ marginBottom: 10 }}>
                        <Card style={{ width: '25rem', height: '44rem', padding: 20, borderRadius: 50 }}>
                            <div className='card-title' >
                                <Card.Text className='fs-6 fw-bold'>
                                    BEEF
                                </Card.Text>
                                <Card.Text className='fs-1 fw-bold food-name'>
                                    CrazyBeefTuna Burger
                                </Card.Text>
                            </div>
                            <Card.Img variant="top" src={burger4} />
                            <Card.Body className='best-seller-food-card'>
                                <div>
                                    <h3 className='food-price'>$8.00</h3>
                                    <p className='food-cal'>200 gr/600 cal</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='cart-plus' icon={faPlus} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ marginBottom: 10 }}>
                        <Card style={{ width: '25rem', height: '38rem', padding: 20, borderRadius: 50 }}>
                            <div className='card-title'>
                                <Card.Text className='fs-6 fw-bold'>
                                    BEEF
                                </Card.Text>
                                <Card.Text className='fs-1 fw-bold food-name'>
                                    Bøfsandwich
                                </Card.Text>
                            </div>
                            <Card.Img variant="top" src={burger5} />
                            <Card.Body className='best-seller-food-card'>
                                <div>
                                    <h3 className='food-price'>$8.00</h3>
                                    <p className='food-cal'>200 gr/600 cal</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='cart-plus' icon={faPlus} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BestSeller;
