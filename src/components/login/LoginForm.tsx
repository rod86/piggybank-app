import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm: React.FC = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control type="email" placeholder="Email" className="mb-2" />
                <Form.Control type="password" placeholder="Password" className="mb-2" />
            </Form.Group>
            <Button type="button" block>Login</Button>
        </Form>
    );
};

export default LoginForm;
