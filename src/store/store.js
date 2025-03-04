import { create } from "zustand";

export const useCart = create((set)=>({
    cart:[],
    //add to cart
    addToCart: (product) => set((state)=>({
        cart: [...state.cart, product],
    })), 
    //rove from cart to cart
    removeFromCart: (productId) => set((state)=>({
        cart: state.cart.filter(item => item.id !== productId),
    })),
    // clear the cart
    clearCart: () => set({cart: []}),
}))
