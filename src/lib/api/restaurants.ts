import { Restaurant } from "@/types/restaurant";
import { API_DOMAIN } from "./DOMAIN";



export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${API_DOMAIN}/restaurant/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }
  return response.json();
};

export const getRestaurantById = async (id: number): Promise<Restaurant> => {
  const response = await fetch(`${API_DOMAIN}/restaurant/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch restaurant with id ${id}`);
  }
  return response.json();
};

