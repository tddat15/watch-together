import { apiService } from '../apiService';
import {
  LoginBodyRequest,
  LoginBodyResponse,
  RegisterBodyRequest,
  RegisterBodyResponse,
} from './auth.model';
import { AxiosResponse } from 'axios';

export const authService = {
  // The register function sends a POST request to the /auth/register endpoint with the data provided in the body.
  register: (
    data: RegisterBodyRequest,
  ): Promise<AxiosResponse<RegisterBodyResponse>> =>
    apiService.post('/auth/register', data),

  // The login function sends a POST request to the /auth/login endpoint with the data provided in the body.
  login: (data: LoginBodyRequest): Promise<AxiosResponse<LoginBodyResponse>> =>
    apiService.post('/auth/login', data),
};
