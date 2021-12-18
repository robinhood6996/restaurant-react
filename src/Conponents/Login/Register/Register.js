import React, { memo, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../../Shared/Navigation';
import wave from '../../../Images/wave.png';
import useAuth from '../../../Hooks/useAuth';
const Register = memo(() => {
    const [loginData, setLoginData] = useState({});
    const history = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, loginData.phone, loginData.location, history);

    }
    return (
        <div>
            <Navigation></Navigation>
            <img src={wave} width='100%' style={{ margin: 0, padding: 0 }} alt="" />
            <section className='login-area'>
                <Container className='d-flex justify-content-center '>
                    <Form onSubmit={handleLoginSubmit} style={{ width: '80%' }}>
                        <h2 className='login-heading'>Register</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control className='w-100' type="email" placeholder="Enter email" name="email" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Phone" name="phone" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Location*</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Location" name="location" onBlur={handleOnBlur} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password*</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password2" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <span>Already have an account? <Link to='/login'>Please Login</Link></span>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Register
                        </Button>
                    </Form>
                </Container>
            </section>
        </div>
    );
});

export default Register;