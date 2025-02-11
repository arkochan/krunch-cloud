export interface Order {
  id: number;
  createdAt: string;
  status: string;
  userId: number;
  restaurantId: number;
  total: string;
  deliveryAddress: string | null;
  paymentMethod: string | null;
  deliveryFee: string;
}

export interface GetOrderWithItemsRow {
  orderId: number;
  createdAt: string;
  status: string;
  userId: number;
  restaurantId: number;
  total: string;
  deliveryAddress: string | null;
  paymentMethod: string | null;
  deliveryFee: string;
  orderItemId: number;
  itemId: number;
  quantity: number;
  orderItemPrice: string;
  itemName: string;
}


export interface OrderItem {
  id: number;
  orderId: number;
  itemId: number;
  quantity: number;
  price: string;
}
