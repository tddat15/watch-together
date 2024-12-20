import { apiService } from '../apiService';
import { LoginBodyRequest, RegisterBodyRequest } from './auth.model';

export const authService = {
  register: (data: RegisterBodyRequest) =>
    apiService.post('/auth/register', data),
  login: (data: LoginBodyRequest) => apiService.post('/auth/login', data),
};
