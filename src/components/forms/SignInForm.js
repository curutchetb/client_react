import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function SignInForm({ errors, onSubmitCallback }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ email, password });
    }

    return (
        <Form onSubmit={submitForm}>
            <Form.Group className='mt-3' control="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    isInvalid={errors.email}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mt-3' control="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    isInvalid={errors.password}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>

        <Button className='mt-3' variant='primary' type='submit'>Sign in</Button>

        </Form>

    )
}
