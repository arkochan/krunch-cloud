import { API_DOMAIN } from "./DOMAIN";

export interface User {
  id: number;
  username: string;
  email: string;
  profile: string;
}
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
