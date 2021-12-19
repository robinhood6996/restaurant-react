import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation';
import wave from '../../../Images/wave.png';
import burger from '../../../Images/bugers/3.jpg';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/action/cartAction';
const SingleFood = () => {
    const [food, setFood] = useState({})
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        const url = `http://localhost:1111/food/${id}`;
        axios.get(url)
            .then(res => {
                setFood(res.data);
            })
    }, [id]);

    if (!food) {
        return
    }

    return (
        <div>
            <Navigation></Navigation>
            <img src={wave} width="100%" alt="" />
            <section style={{ background: '#F5E7C1', paddingBottom: 50 }}>
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Image src={`data:image;base64,${food.image}`} style={{ borderRadius: 10, width: '60%' }} />
                            <p style={{ marginTop: 20 }}><b>Description: </b>{food.desc}</p>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h2>${food.price}</h2>
                            <p><b>Ingredients: </b>{food.ing}</p>
                            <Button variant='danger' onClick={() => dispatch(addToCart(food))}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default SingleFood;