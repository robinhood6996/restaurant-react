import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import wave from '../../../Images/wave.png';
import Navigation from '../../Shared/Navigation';
import food from '../../../Images/Foods/10.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/action/cartAction';
const Shop = () => {
    const [foods, setFoods] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('./food.json')
            .then(res => res.json())
            .then(data => setFoods(data)
            )
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <img src={wave} width="100%" alt="" />
            <section style={{ background: '#f5e7c1', paddingBottom: 50 }}>
                <h2 className="shop-head" style={{ fontFamily: 'Rakkas', textAlign: 'center', color: 'goldenrod', fontSize: 50 }}>Our All Delicious Food</h2>
                <Container>
                    <Row >
                        {
                            foods.map(food => <Col xs={12} lg={4} style={{ padding: 10 }}>
                                <Card style={{ width: '25rem', padding: 20, borderRadius: 20 }}>
                                    <Card.Img variant="top" width={150} src={food.image} />
                                    <Card.Body>
                                        <Card.Title ><Link style={{ color: '#cc3a3a', textDecoration: 'none' }} to="">{food.name}</Link></Card.Title>
                                        <Card.Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                            ${food.price}
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => dispatch(addToCart(food))}>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Shop;