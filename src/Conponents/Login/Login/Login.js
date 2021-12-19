import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../../Shared/Navigation';
import './Login.css';
import wave from '../../../Images/wave.png';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useNavigate();
    const { signInWithGoogle, loginUser } = useAuth();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(email, password, location, history);
    }
    return (
        <div>
            <Navigation></Navigation>
            <img src={wave} width='100%' style={{ margin: 0, padding: 0 }} alt="" />
            <section className='login-area'>

                <Container className='d-flex justify-content-center flex-column'>
                    <Form xs={12} style={{ width: '80%' }} onSubmit={handleLogin}>
                        <h2 className='login-heading'>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => setemail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <span>New here? <Link to='/register'>Please Register</Link></span>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Login
                        </Button><br />
                        OR
                    </Form>

                    <div>
                        <Button variant="danger" size="sm" className='mt-2' onClick={handleGoogleSignIn}>
                            Login with Google
                        </Button>
                    </div>
                </Container>

            </section>

        </div>
    );
};

export default Login;