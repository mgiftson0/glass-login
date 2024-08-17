import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Close as CloseIcon } from '@mui/icons-material';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 95%;
  }
`;

const ModalHeader = styled.h2`
  margin-top: 0;
  color: #333;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Trebuchet MS', 'sans-serif';
  text-decoration: underline;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ModalInput = styled.input`
  width: 80%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
   display: block;
  margin: 0 auto;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #4285F4;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const ModalButton = styled.button`
  background-color: ${props => props.disabled ? '#ccc' : '#4285F4'};
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;
  transition: all 0.3s ease;
  opacity: ${props => props.disabled ? 0.7 : 1};
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#3367D6'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 5px 15px rgba(0, 0, 0, 0.2)'};
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #f44336;
  }
`;

const StyledH5 = styled.h5`
  color: #4285F4;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
  font-family: 'Trebuchet MS', 'sans-serif';

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsButtonActive(email.trim() !== '');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isButtonActive) {
      //handle the password reset logic
      console.log('Password reset requested for:', email);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <ModalHeader>Reset Password </ModalHeader>
        <StyledH5>Enter your email to reset your password</StyledH5>
        <form onSubmit={handleSubmit}>
          <ModalInput 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            required
          />
          <ModalButton type="submit" disabled={!isButtonActive}>Get Link</ModalButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ForgotPasswordModal;