import { API_DOMAIN } from "./DOMAIN";

export interface CreateOrderParams {
  restaurant_id: number;
  delivery_address: string;
  payment_method: string;
  items: {
    item_id: number;
    quantity: number;
  }[];
}
// According to the API documentation, the request body for creating an order should have the following structure:
// type CreateOrder_Client struct {
// 	RestaurantID    uint32                   `json:"restaurant_id"`
// 	DeliveryAddress pgtype.Text              `json:"delivery_address"`
// 	PaymentMethod   pgtype.Text              `json:"payment_method"`
// 	Items           []CreateOrderItem_Client `json:"items"`
// }
//
// type CreateOrderItem_Client struct {
// 	ItemID   uint32         `json:"item_id"`
// 	Quantity uint32         `json:"quantity"`
// }
export const createOrder = async (order: CreateOrderParams): Promise<number> => {
  const response = await fetch(`${API_DOMAIN}/order/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    throw new Error('Failed to create order');
  }

  const data = await response.json();
  return data.orderId;
};

