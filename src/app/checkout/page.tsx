import { useCartStore } from '@/store/cartStore';
import React from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, removeItem, clearCart } = useCartStore();

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {items.map((item) => (
                <li key={item.itemId} className="flex justify-between items-center mb-2">
                  <Image src={item.image_url} alt={item.name} width={50} height={50} />
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${item.price * item.quantity}</span>
                  <button
                    className="text-red-500"
                    onClick={() => removeItem(item.itemId)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">Total: ${calculateTotal()}</span>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
