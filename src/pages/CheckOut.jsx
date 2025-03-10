import React from "react";
import { useCart } from "../store/store";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price correctly based on quantity
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cart.length > 0 ? (
        <ul className="space-y-6">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:justify-between border p-4 rounded-md shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-700">{item.price} kr</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <button
                  className="border border-green-500 p-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  className="border border-red-500 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">Your cart is empty.</p>
      )}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold">Total: {total} kr</h3>
        <button
          className="mt-4 sm:mt-0 px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors"
          onClick={() => navigate("/checkout-success")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}