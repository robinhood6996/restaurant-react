import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddAdmin = () => {
    return (
        <div>
            <Container className='d-flex justify-content-center flex-column'>
                <Form xs={12} style={{ width: '80%' }}>
                    <h2 className='login-heading'>Add Admin</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Add
                    </Button><br />
                    OR
                </Form>

                <div>
                    <Button variant="danger" size="sm" className='mt-2' >
                        Login with Google
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default AddAdmin;