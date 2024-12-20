import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import LoginForm from '../components/organisms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <h2
        style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px' }}
      >
        Login
      </h2>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
