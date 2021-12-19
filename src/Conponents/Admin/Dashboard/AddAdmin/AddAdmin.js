import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
const AddAdmin = () => {
    const [email, setEmail] = useState('');
    console.log(email);

    const onSubmit = e => {
        e.preventDefault();
        const user = { email };
        axios.put('https://ancient-ravine-11592.herokuapp.com/admin', user)
            .then(res => {
                if (res.data.matchedCount) {
                    alert('Updataed')
                }
            })
    }
    return (
        <div>
            <Container className='d-flex justify-content-center flex-column'>
                <Form xs={12} style={{ width: '80%' }} onSubmit={onSubmit}>
                    <h2 className='login-heading'>Add Admin</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onBlur={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Add
                    </Button>
                </Form>

                <div>
                </div>
            </Container>
        </div>
    );
};

export default AddAdmin;