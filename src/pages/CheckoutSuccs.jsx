import React, { useEffect } from "react";
import { useCart } from "../store/store";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export function CheckoutSucceeded() {
  const { clearCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      clearCart();
    }, 3000);
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="text-green-500 text-8xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2 text-green-700">
        Checkout Successful!
      </h1>
      <p className="text-lg mb-6 text-gray-700">Thank you for your purchase.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Back to products
      </Link>
    </div>
  );
}
