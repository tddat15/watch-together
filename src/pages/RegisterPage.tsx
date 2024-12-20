import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import RegisterForm from '../components/organisms/RegisterForm';

interface RegisterPageProps {
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ showToast }) => {
  return (
    <AuthLayout>
      <h2
        style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px' }}
      >
        Register Account
      </h2>
      <RegisterForm showToast={showToast} />
    </AuthLayout>
  );
};

export default RegisterPage;
