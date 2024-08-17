import React, { useState } from 'react';
import styled from 'styled-components';
import { Google as GoogleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordModal from './ForgotPasswordModal';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
    @media (max-width: 480px) {
        padding: 10px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Card = styled.div`
    backdrop-filter: blur(10px);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
    width: 90%;
    max-width: 400px;
    padding: 20px;
    height: fit-content;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    border-radius: 15px;
    padding: 40px;
    animation: borderColorChange 5s infinite alternate;

    @keyframes borderColorChange {
        0% { border-color: #ff6b6b; }
        25% { border-color: #4ecdc4; }
        50% { border-color: #45b7d1; }
        75% { border-color: #f7b731; }
        100% { border-color: #ff6b6b; }
    }
    
    @media (max-width: 768px) {
        border-radius: 10px;
    }
    @media (max-width: 480px) {
        padding: 15px;
    }
`;

const CardHeader = styled.div`
    color: white;
    padding: 10px 0;
    text-align: center;
    font-size: 23px;
    font-weight: 500;
    font-family: 'Trebuchet MS', 'sans-serif';
    border-bottom: 2px solid #f0f0f0;
    margin-bottom: 20px;
    @media (max-width: 480px) {
        font-size: 22px;
    }
`;

const CardBody = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 480px) {
        padding: 0 10px;
    }
`;

const Input = styled.input`
    width: 90%;
    padding: 12px;
    margin: 12px 0;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
    background: #fff;

    &:focus {
        outline: none;
        border-color: #4285F4;
    }
    @media (max-width: 480px) {
        font-size: 14px;
        padding: 10px;
    }
`;

const Button = styled.button`
    width: 80%;
    padding: 12px;
    background: #4285F4;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    margin: 20px auto 0;
    display: block;
    transition: all 0.3s ease;

    &:hover {
        background: #3367D6;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 480px) {
        font-size: 16px;
        padding: 10px;
    }
`;

const GoogleIconButton = styled.button`
    background: #fff;
    border: none;
    color: red;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 1);
    &:hover {
        background: #f5f5f5;
        transition: all 0.3s ease;
        color: #e9967a;
    }

    svg {
        font-size: 24px;
    }
    @media (max-width: 480px) {
        width: 36px;
        height: 36px;
        svg {
            font-size: 20px;
        }
    }
`;

const ToggleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
`;

const ToggleHeader = styled.h2`
    font-size: 20px;
    color: ${props => props.$active ? '#4285F4' : '#888'};
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    font-family: 'Trebuchet MS', 'sans-serif';
    font-weight: 500;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: #4285F4;
        transform: scaleX(${props => props.$active ? 1 : 0});
        transition: transform 0.3s ease;
    }

    &:hover {
        color: black;
        border-bottom: 2px solid gray;
        background-color: #f0f0f0;
        padding: 12px;
        border-radius: 10px;
    }
    @media (max-width: 480px) {
        font-size: 18px;
        padding: 8px;
    }
`;

const ForgotPassword = styled.a`
    font-size: 12px;
    color: #4285F4;
    cursor: pointer;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #3367D6;
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
    font-size: 12px;
    color: white;
    font-weight: 500;
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const PasswordInputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const PasswordToggleIcon = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #757575;
    margin-right: 10px;
    @media (max-width: 480px) {
        right: 5px;
    }
`;

const GoogleText = styled.p`
    font-size: 12px;
    color: white;
    margin-top: 10px;
    text-align: center;
    margin-bottom: -10px;
`;

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleForm = (value) => {
        setIsSignUp(value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // const handleSubmit = () => {
    //     //  handle the login/signup logic
    //     // For now, we'll just navigate to the dashboard
    //     navigate('/dashboard');
    // };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Container>
            <LeftSection>
                <img src="../images/login-image.png" alt="Illustration" style={{ width: '80%', maxWidth: '400px', borderRadius: '15px' }} />
            </LeftSection>
            <RightSection>
                <Card>
                    <CardHeader>{isSignUp ? 'Create Account' : 'Welcome Back'}</CardHeader>
                    <CardBody>
                        <ToggleContainer>
                            <ToggleHeader $active={!isSignUp} onClick={() => toggleForm(false)}>Sign In</ToggleHeader>
                            <ToggleHeader $active={isSignUp} onClick={() => toggleForm(true)}>Sign Up</ToggleHeader>
                        </ToggleContainer>
                        {isSignUp && (
                            <Label>
                                Full Name
                                <Input type="text" placeholder="Full Name" />
                            </Label>
                        )}
                        <Label>
                            Email
                            <Input type="email" placeholder="Email" />
                        </Label>
                        <Label>
                            Password
                            <PasswordInputWrapper>
                                <Input type={showPassword ? "text" : "password"} placeholder="Password" />
                                <PasswordToggleIcon onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </PasswordToggleIcon>
                            </PasswordInputWrapper>
                        </Label>
                        <Button >{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                        <ForgotPassword onClick={openModal}>Forgot Password?</ForgotPassword>
                        <GoogleIconButton>
                            <GoogleIcon />
                        </GoogleIconButton>
                        <GoogleText>{isSignUp ? 'Sign up with Google' : 'Sign in with Google'}</GoogleText>
                    </CardBody>
                </Card>
            </RightSection>
            <ForgotPasswordModal isOpen={isModalOpen} onClose={closeModal} />
        </Container>
    );
};

export default LoginPage;