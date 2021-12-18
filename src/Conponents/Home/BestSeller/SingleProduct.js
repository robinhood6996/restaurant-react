import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/action/cartAction';
const SingleProduct = (props) => {
    const { name, price, image } = props.food;
    const dispatch = useDispatch();
    return (
        <Col style={{ marginBottom: 10 }}>
            <Card style={{ width: '25rem', height: '44rem', padding: 20, borderRadius: 50 }}>
                <div className='card-title'>
                    <Card.Text className='fs-6 fw-bold'>
                        CHICKEN
                    </Card.Text>
                    <Card.Text className='fs-1 fw-bold food-name'>
                        {name}
                    </Card.Text>
                </div>
                <Card.Img variant="top" style={{ height: '23rem' }} src={image} />
                <Card.Body className='best-seller-food-card'>
                    <div>
                        <h3 className='food-price'>${price}</h3>
                        <p className='food-cal'>200 gr/600 cal</p>
                    </div>
                    <div>
                        <button style={{ border: 'none', background: 'none' }} onClick={() => dispatch(addToCart(props.food))}> <FontAwesomeIcon className='cart-plus' icon={faPlus} />
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;