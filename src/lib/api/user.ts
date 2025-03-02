import { API_DOMAIN } from "./DOMAIN";

export interface User {
  id: number;
  username: string;
  email: string;
  profile: string;
}

export const registerUser = async (user: Partial<User>): Promise<User> => {
  const response = await fetch(`${API_DOMAIN}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Failed to register user');
  }
  return response.json();
};

export const loginUser = async (credentials: { username: string; password: string }): Promise<{ token: string }> => {
  const response = await fetch(`${API_DOMAIN}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Failed to login');
  }
  return response.json();
};

export const getUserProfile = async (token: string): Promise<User> => {
  const response = await fetch(`${API_DOMAIN}/user/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return response.json();
};

export const updateUserProfile = async (token: string, profile: Partial<User>): Promise<User> => {
  const response = await fetch(`${API_DOMAIN}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  });
  if (!response.ok) {
    throw new Error('Failed to update user profile');
  }
  return response.json();
};

