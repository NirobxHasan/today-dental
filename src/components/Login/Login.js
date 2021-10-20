import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Login.css';
import useFirebase from '../../hooks/useFirebase';
import googleIcon from './../../images/icon/google.png';
import facebookIcon from './../../images/icon/002-facebook.png';
import useAuth from '../../hooks/useContext';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const {
        user,
        signInWithGoogle,
        signInWithFacebook,
        regWithEmail,
        signInWithEmail,
        errorFirebase,
        setFirebaseError,
        resetPass
    } = useAuth();

    const handleLogin = () => {
        if (isLogin) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    };

    const handleGoogleLogin = () => {
        signInWithGoogle();
    };
    const handleFacebookLogin = () => {
        signInWithFacebook();
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
        if (isLogin) {
            signInWithEmail(email, password);
            console.log(user);
        } else {
            regWithEmail(name, email, password);
        }
        setError('');
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
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
                        <h3>{isLogin ? 'Login' : 'Registration'}</h3>
                    </Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleRegistration}>
                            {!isLogin && (
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        onBlur={handleNameChange}
                                        required
                                    />
                                </Form.Group>
                            )}
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
                    <div className="d-flex justify-content-center">
                        <div>
                            <h6>Login With</h6>
                            <div className="d-flex">
                                <button
                                    className="social-icon"
                                    onClick={handleGoogleLogin}
                                >
                                    <img src={googleIcon} alt="" />
                                </button>
                                <button
                                    className="social-icon"
                                    onClick={handleFacebookLogin}
                                >
                                    <img src={facebookIcon} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
