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

    useEffect(() => {
        fetch('http://localhost:1111/food')
            .then(res => res.json())
            .then(data => setFoods(data)
            )
    }, []);


    return (
        <div className='mb-10 best-seller'>
            <h2 className='text-center best-title'>Best Seller</h2>

            <Container>
                <Row>
                    {
                        foods.slice(3, 6).map((food) => <SingleProduct key={food.id} food={food} ></SingleProduct>)
                    }
                </Row>

                <Row>
                    <Col>
                        <div className="banner" style={{}}>
                            <img className='img-fluid' src={banner} alt="" />
                        </div>
                    </Col>
                    {
                        foods.slice(1, 3).map((food) => <SingleProduct key={food.id} food={food}></SingleProduct>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default BestSeller;
