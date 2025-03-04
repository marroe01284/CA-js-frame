import React from "react";
import { useCart } from "../store/store";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Checkout</h1>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="border p-2 rounded-md">
              <h2 className="text-xl">{item.title}</h2>
              <img src={item.image.url} alt={item.title} className="w-20" />
              <p>{item.price} kr</p>
              <button
                className="border border-red-500 p-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="mt-4">
        <h3 className="text-xl">Total: {total} kr</h3>
        <button 
          className="mt-2 p-2 bg-green-500 text-white rounded-md"
          onClick={() => navigate("/checkout-success")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}