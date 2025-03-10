import { create } from "zustand";

export const useCart = create((set)=>({
    cart:[],

    addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        } else {
            return {
                cart: [...state.cart, { ...product, quantity: 1 }],
            };
        }
    }),

    removeFromCart: (productId) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === productId);
        if (!existingItem) return state;

        if (existingItem.quantity > 1) {
            return {
                cart: state.cart.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        } else {
            return {
                cart: state.cart.filter((item) => item.id !== productId),
            };
        }
    }),
    clearCart: () => set({cart: []}),
}))
