import React, { useEffect } from "react";
import { useCart } from "../store/store";
import { Link } from "react-router-dom";

export function CheckoutSucceeded(){
    const { clearCart } = useCart();

    useEffect(() => {
        setTimeout(() => {
            clearCart();
        }, 3000);
    }, [clearCart]);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Checkout Successful!</h1>
            <p>Thank you for your purchase.</p>
            <Link to="/">Back to products</Link>
        </div>
    );
}