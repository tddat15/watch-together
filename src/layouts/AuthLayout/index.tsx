import React, { ReactNode } from 'react';
import './style.css';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__container">{children}</div>
    </div>
  );
};

export default AuthLayout;
