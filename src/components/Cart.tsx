"use client";
import React, { useCallback } from 'react';
import { cn } from '@/lib/utils/cn';
import CartItem from './CartItem';
import { useCartStore } from '../store/cartStore';
import { createOrder } from '@/lib/api/order';

export default function Cart({ className }: { className?: string }) {
  const { items, updateItemQuantity, removeItem } = useCartStore();

  const handleConfirmOrder = useCallback(async () => {
    try {
      const orderParams = {
        restaurant_id: 1, // Replace with actual restaurant ID
        delivery_address: "123 Main St", // Replace with actual delivery address
        payment_method: "credit_card", // Replace with actual payment method
        items: items.map(item => ({
          item_id: item.itemId,
          quantity: item.quantity,
        })),
      };

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
      const orderId = await createOrder(orderParams);
      console.log(`Order confirmed with ID: ${orderId}`);
    } catch (error) {
      console.error("Failed to confirm order", error);
    }
  }, [items]);

  return (
    <div className={cn("", className)}>
      {items.map((item) => (
        <CartItem
          key={item.itemId}
          className="mb-4"
          imageUrl={item.image_url}
          title={item.name}
          description={`Description for ${item.name}`} // Replace with actual description logic
          quantity={item.quantity}
          price={item.price}
          onIncrease={() => updateItemQuantity(item.itemId, item.quantity + 1)}
          onDecrease={() => {
            if (item.quantity > 1) {
              updateItemQuantity(item.itemId, item.quantity - 1);
            } else {
              removeItem(item.itemId);
            }
          }}
        />
      ))}
      <button
        onClick={handleConfirmOrder}
        className="mt-4 bg-orange-FF text-white px-4 py-2 rounded"
      >
        Confirm Order
      </button>
    </div>
  );
}
