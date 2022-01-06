import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddFood = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [ing, setIng] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);

    const handleAddFood = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('ing', ing);
        formData.append('desc', desc);
        formData.append('image', image);
        console.log(formData)
        axios.post('https://ancient-ravine-11592.herokuapp.com/food', formData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Food Added to store',
                        'success'
                    )
                }
            })

    }
    return (
        <div>
            <Container className='d-flex justify-content-center '>
                <Form onSubmit={handleAddFood} style={{ width: '80%' }}>
                    <h2 className='login-heading'>Add Food</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" onChange={e => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price*</Form.Label>
                        <Form.Control className='w-100' type="number" placeholder="Enter Price" name="price" onChange={e => setPrice(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control as="textarea" name="ing" onChange={e => setIng(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description*</Form.Label>
                        <Form.Control as="textarea" name="desc" onChange={e => setDesc(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image*</Form.Label>
                        <Form.Control type='file' onChange={e => setImage(e.target.files[0])} name="image" required />
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