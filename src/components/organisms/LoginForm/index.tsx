import React, { useEffect, useState } from 'react';
import './style.css';
import InputField from '../../atoms/InputField';
import SubmitButton from '../../atoms/SubmitButton';
import Link from '../../atoms/Link';
import { authService } from '../../../services/auth/authService';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Logging in with:', { username, password });

    try {
      const response = await authService.login({
        username,
        password,
      });

      if (response.status === 201) {
        setIsPopupVisible(true);
        setError('');

        setTimeout(() => {
          setIsPopupVisible(false);
          navigate('/home');
        }, 2000);
      }
    } catch (err) {
      setIsPopupVisible(true);
      setError('Login failed. Please try again.');
      setSuccess(false);
    }
  };

  useEffect(() => {
    console.log('aa', isPopupVisible);
  }, [isPopupVisible]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          label="Username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeHolder="Type your username"
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeHolder="Type your password"
        />
        <SubmitButton label="Login" />

        <div className="login-form__bottom-links">
          <Link href="/forgot-password">Forgot Password?</Link>
          <Link href="/register">Register a new account</Link>
        </div>
      </form>

      {isPopupVisible && (
        <div className="popup">
          <p>Login successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Index;
