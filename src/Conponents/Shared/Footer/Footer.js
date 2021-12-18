import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './Footer.css';
import wave from '../../../Images/wave.png';
import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import food1 from '../../../Images/bugers/1.jpg';
import food2 from '../../../Images/bugers/2.jpg';
import food3 from '../../../Images/bugers/3.jpg';
import food4 from '../../../Images/bugers/4.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>  <Image src={wave} width="100%"></Image>
            <section className='footer-contact'>
                <Container className='p-5'>
                    <Row>
                        <Col xs={12} lg={6}>
                            <h2 className='delivery-heading'>Contactless delivery available</h2>
                            <h3 className='number mt-10'>Order By Phone - 01567942829</h3>
                            <Container style={{ marginTop: 20 }}>
                                <Row style={{ padding: 10 }}>
                                    <Col><h5>Location</h5></Col>
                                    <Col><h5>Delivery Hours</h5></Col>
                                    <Col><h5>Takeaway Hours</h5></Col>
                                </Row>
                                <Row style={{ padding: 10 }}>
                                    <Col>60 East 65th Street, New York</Col>
                                    <Col>Monday – Saturday: 11AM - 11PM</Col>
                                    <Col>Monday – Saturday: 1PM - 10PM</Col>
                                </Row>
                            </Container>
                        </Col>

                        <Col xs={12} lg={6}>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.6398044225925!2d90.35998049999999!3d23.753800900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfeaac77cf97%3A0x56e8b5892d7e73df!2sMohammadpur%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1639839063489!5m2!1sen!2sbd"
                                width="100%"
                                height="450px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='footer-newsletter p-4'>
                <Container>
                    <Row>
                        <Col>
                            <h2 style={{ fontFamily: 'Rakkas', fontSize: 40, textAlign: 'center', color: 'white' }}>Stay informed about special offers</h2>
                            <Form className='d-flex justify-content-center'>
                                <Form.Control type='email' placeholder='Enter Your E-mail' style={{ width: 450, height: 50, borderRadius: 50 }}></Form.Control>
                                <Button variant='danger' style={{ borderRadius: 50 }}>Subscribe</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <Container style={{ marginTop: 50 }}>
                    <Row>
                        <Col xs={12} lg={4} >
                            <h5 className="fw-bold text-danger fs-5">Let's Get Together</h5>
                            <li className='footer-nav-link'><FontAwesomeIcon /> Mohammadpur Bus Stand, 56/F</li>
                            <li className='footer-nav-link'>Mon - Saturday 11AM - 11PM</li>

                        </Col>
                        <Col xs={12} lg={4} className="fw-bold text-light fs-5">
                            <h5 className="fw-bold text-danger fs-5">About Us</h5>
                            <li className='footer-nav-link'><FontAwesomeIcon /><Link to="" className='footer-nav-url'>Our Story</Link></li>
                            <li className='footer-nav-link'><Link to="" className='footer-nav-url'>Our Team</Link></li>
                            <li className='footer-nav-link'><Link to="" className='footer-nav-url'>Our Food</Link></li>
                            <li className='footer-nav-link'><Link to="" className='footer-nav-url'>Health Measure</Link></li>
                        </Col>
                        <Col xs={12} lg={4} className="fw-bold text-light fs-5">
                            <h5 className="fw-bold text-danger fs-5">Instagram</h5>
                            <Row>
                                <Col style={{ padding: 10 }}>
                                    <Image src={food1} width={60} style={{ padding: 5 }}></Image>
                                    <Image src={food3} width={60} style={{ padding: 5 }}></Image>
                                    <Image src={food2} width={60} style={{ padding: 5 }}></Image>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 10 }}>
                                    <Image src={food1} width={60} style={{ padding: 5 }}></Image>
                                    <Image src={food3} width={60} style={{ padding: 5 }}></Image>
                                    <Image src={food2} width={60} style={{ padding: 5 }}></Image>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} lg={4}> Hello</Col>
                    </Row>
                </Container>
            </section>
        </div >
    );
};

export default Footer;