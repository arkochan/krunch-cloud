import { Item } from "@/types/item";
import { Restaurant } from "@/types/restaurant";
import { API_DOMAIN } from "./DOMAIN";
export const searchRestaurantsByName = async (name: string): Promise<Restaurant[]> => {
  const response = await fetch(`${API_DOMAIN}/search/restaurants/${name}`);
  if (!response.ok) {
    throw new Error(`Failed to search restaurants with name ${name}`);
  }
  return response.json();
};

export const searchItemsByName = async (name: string): Promise<Item[]> => {
  const response = await fetch(`${API_DOMAIN}/search/items/${name}`);
  if (!response.ok) {
    throw new Error(`Failed to search items with name ${name}`);
  }
  return response.json();
};

export const searchItemsAndRestaurants = async (query: string): Promise<{ items: Item[], restaurants: Restaurant[] }> => {
  const response = await fetch(`${API_DOMAIN}/search/query/${query}`);
  if (!response.ok) {
    throw new Error(`Failed to search items and restaurants with query ${query}`);
  }
  return response.json();
};
