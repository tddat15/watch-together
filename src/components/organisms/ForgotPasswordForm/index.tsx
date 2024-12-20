import React, { useState } from 'react';
import './style.css';
import InputField from '../../atoms/InputField';
import SubmitButton from '../../atoms/SubmitButton';
import Link from '../../atoms/Link';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Logging in with:', { email });

    //Todo: Call Api
  };

  return (
    <form onSubmit={handleSubmit} className="forgot-password-form">
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeHolder=""
      />

      <SubmitButton label="Send Email" />

      <div className="forgot-password-form__bottom-links">
        <Link href="/login">Back to Login.</Link>
        <Link href="/register">
          Can't find your password? Create a new account?
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
