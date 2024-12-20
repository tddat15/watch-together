import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import ForgotPasswordForm from '../components/organisms/ForgotPasswordForm';

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <h2
        style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px' }}
      >
        Forgot Password
      </h2>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
