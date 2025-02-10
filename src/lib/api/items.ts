import { Item } from "@/types/item";

const API_DOMAIN = 'https://api.krunchcloud.com';


export const getAllItems = async (): Promise<Item[]> => {
  const response = await fetch(`${API_DOMAIN}/item/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
};

export const getItemById = async (id: number): Promise<Item> => {
  const response = await fetch(`${API_DOMAIN}/item/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch item with id ${id}`);
  }
  return response.json();
};

