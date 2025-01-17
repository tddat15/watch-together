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
        setSuccess(true);

        const { accessToken, refreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        setTimeout(() => {
          setIsPopupVisible(false);
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      setIsPopupVisible(true);
      setError('Login failed. Please try again.');
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
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
          {success ? <p>Login successfully!</p> : <p>Login Failed</p>}
        </div>
      )}
    </div>
  );
};

export default Index;
