import { Restaurant } from "@/types/restaurant";

const API_DOMAIN = 'https://api.krunchcloud.com';


export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${API_DOMAIN}/restaurant/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }
  return response.json();
};

