import { Item } from "./item";

export interface Restaurant {
  id: number;
  name: string;
  address: string;
}
export interface RestaurantDetails {
  id: number;
  name: string;
  address: string;
  items: Item[];
}
