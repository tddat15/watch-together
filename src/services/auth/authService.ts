import { apiService } from '../apiService';
import { LoginBodyRequest, RegisterBodyRequest } from './auth.model';

export const authService = {
  // The register function sends a POST request to the /auth/register endpoint with the data provided in the body.
  register: (data: RegisterBodyRequest) =>
    apiService.post('/auth/register', data),
  // The login function sends a POST request to the /auth/login endpoint with the data provided in the body.
  login: (data: LoginBodyRequest) => apiService.post('/auth/login', data),
};
