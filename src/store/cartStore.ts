import { create } from 'zustand';

interface CartItem {
  itemId: number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  updateItemQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item: CartItem) => set((state) => {
    const existingItem = state.items.find(i => i.itemId === item.itemId);
    if (existingItem) {
      return {
        items: state.items.map(i =>
          i.itemId === item.itemId ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      };
    }
    return { items: [...state.items, item] };
  }),
  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(item => item.itemId !== itemId),
  })),
  updateItemQuantity: (itemId, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.itemId === itemId ? { ...item, quantity } : item
    ),
  })),
  clearCart: () => set({ items: [] }),
}));

