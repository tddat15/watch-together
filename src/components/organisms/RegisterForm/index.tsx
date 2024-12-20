import React, { useState } from 'react';
import InputField from '../../atoms/InputField';
import Link from '../../atoms/Link';
import SubmitButton from '../../atoms/SubmitButton';
import './style.css';
import { authService } from '../../../services/auth/authService';
import { useNavigate } from 'react-router-dom';

interface RegisterFormProps {
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ showToast }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      showToast('Password and confirm password do not match.', 'error');
      return;
    }

    try {
      const response = await authService.register({
        username,
        password,
        email,
      });

      if (response.status === 201) {
        setIsPopupVisible(true);
        setError('');

        setTimeout(() => {
          setIsPopupVisible(false);
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      setSuccess(false);
    }

    console.log('Register with: ', { username, email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="register-form">
        <InputField
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeHolder="Type your email"
        />
        <InputField
          label="Username"
          type="text"
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

        <InputField
          label="Confirm your password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeHolder="Confirm you password"
        />
        <SubmitButton label="Register" />

        <div className="register-form__bottom-links">
          <Link href="/login">Already have account? Login now.</Link>
        </div>
      </form>

      {isPopupVisible && (
        <div className="popup">
          <p>Register successfully!</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
