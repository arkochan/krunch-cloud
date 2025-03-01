import { create } from 'zustand';

interface CartItem {
  itemId: number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

interface CartState {
  activeRest: number | null;
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  updateItemQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  setActiveRest: (restnId: number) => void;
}

export const useCartStore = create<CartState>((set) => {
  const initialState = {
    activeRest: null,
    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
  };

  const saveToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  return {
    ...initialState,
    addItem: (item: CartItem) => set((state) => {
      const existingItem = state.items.find(i => i.itemId === item.itemId);
      const updatedItems = existingItem
        ? state.items.map(i =>
          i.itemId === item.itemId ? { ...i, quantity: i.quantity + item.quantity } : i
        )
        : [...state.items, item];
      saveToLocalStorage(updatedItems);
      return { items: updatedItems };
    }),
    removeItem: (itemId) => set((state) => {
      const updatedItems = state.items.filter(item => item.itemId !== itemId);
      saveToLocalStorage(updatedItems);
      return { items: updatedItems };
    }),
    updateItemQuantity: (itemId, quantity) => set((state) => {
      const updatedItems = state.items.map(item =>
        item.itemId === itemId ? { ...item, quantity } : item
      );
      saveToLocalStorage(updatedItems);
      return { items: updatedItems };
    }),
    clearCart: () => {
      saveToLocalStorage([]);
      set({ items: [] });
    },
    setActiveRest: (restnId) => set({ activeRest: restnId }),
  };
});

