import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
`;

const Card = styled.div`
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Header = styled.div`
    background: #2575fc;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 24px;
`;

const FormContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #2575fc;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #2575fc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1a5bb8;
    }
`;

const SignUpForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container>
            <Card>
                <Header>Sign Up</Header>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" placeholder="Full Name" required />
                        <Input type="email" placeholder="Email" required />
                        <Input type="password" placeholder="Password" required />
                        <Button type="submit">Sign Up</Button>
                    </form>
                </FormContainer>
            </Card>
        </Container>
    );
};

export default SignUpForm;