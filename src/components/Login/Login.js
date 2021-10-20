import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Login.css';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {
        user,
        signWithEmail,
        signInWithEmail,
        errorFirebase,
        setFirebaseError,
        resetPass
    } = useFirebase();
    console.log(user);

    const handleLogin = () => {
        if (isLogin) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Ensure string has two uppercase letters.');
            return;
        }
        if (!/.{8}/.test(password)) {
            setError('Ensure string is of length 8.');
            return;
        }
        isLogin
            ? signInWithEmail(email, password)
            : signWithEmail(email, password);
        setError('');
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setFirebaseError('');
        setError('');
        setPassword(e.target.value);
    };
    const handleResetPass = () => {
        resetPass(email);
    };
    return (
        <div className="login-container">
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>
                        {isLogin ? 'Login' : 'Registration'}
                    </Card.Title>
                    <p>{user?.displayName}</p>
                    <Card.Text>
                        <Form onSubmit={handleRegistration}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onBlur={handleEmailChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onBlur={handlePasswordChange}
                                    required
                                />
                            </Form.Group>
                            <div>
                                <p className="text-danger">{error}</p>
                                <p className="text-danger">{errorFirebase}</p>
                            </div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                        <div className="d-flex justify-content-between mt-3">
                            <button
                                className="islogin-btn"
                                onClick={handleLogin}
                            >
                                {isLogin
                                    ? 'Create new account'
                                    : 'Already Registered?'}
                            </button>
                            {isLogin && (
                                <button
                                    onClick={handleResetPass}
                                    className="forget-btn"
                                >
                                    Forget Passowrd?
                                </button>
                            )}
                        </div>
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
