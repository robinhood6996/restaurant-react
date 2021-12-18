import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
const AddFood = () => {
    const [food, setFood] = useState({})
    const handlefood = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...food };
        newData[field] = value;
        setFood(newData);

    }
    const handleAddFood = (e) => {
        e.preventDefault();
        axios.post('http://localhost:1111/food', {
            food
        }).then(res => res.data.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <Container className='d-flex justify-content-center '>
                <Form onSubmit={handleAddFood} style={{ width: '80%' }}>
                    <h2 className='login-heading'>Add Food</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" onBlur={handlefood} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price*</Form.Label>
                        <Form.Control className='w-100' type="number" placeholder="Enter Price" name="price" onBlur={handlefood} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control as="textarea" name="ingredients" onBlur={handlefood} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description*</Form.Label>
                        <Form.Control as="textarea" name="description" onBlur={handlefood} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image link*</Form.Label>
                        <Form.Control type='text' name="image" onBlur={handlefood} />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Add
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddFood;