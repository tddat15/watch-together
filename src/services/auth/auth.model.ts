export interface RegisterBodyRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterBodyResponse {
  username: string;
}

export interface LoginBodyRequest {
  username: string;
  password: string;
}

export interface LoginBodyResponse {
  accessToken: string;
  refreshToken: string;
}
