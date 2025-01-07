import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VideoPage from './pages/VideoPage';
import Toast from './components/atoms/Toast';

interface ToastData {
  message: string;
  type: 'success' | 'error' | 'info';
}

const App: React.FC = () => {
  const [toastData, setToastData] = useState<ToastData | null>(null);

  const showToast = (
    message: string,
    type: 'success' | 'error' | 'info' = 'info',
  ) => {
    setToastData({ message, type });
  };

  const handleCloseToast = () => setToastData(null);

  return (
    <>
      {' '}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/register"
          element={<RegisterPage showToast={showToast} />}
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<VideoPage />} />
      </Routes>
      {toastData && (
        <Toast
          message={toastData.message}
          type={toastData.type}
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};

export default App;
