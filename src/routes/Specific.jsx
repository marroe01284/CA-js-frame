import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../store/store";
//create a specific product page use the ID of the product as the params for the dynamic segment.


export function SpecificProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(false);
    const {cart, addToCart} = useCart();
    const url = "https://v2.api.noroff.dev/online-shop/";
    useEffect(() => {
      async function getProduct() {
        const response = await fetch(url + id);
        const data = await response.json();
        setProduct(data.data);
      }
      getProduct();
    }, []);
    return (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
              {product ? (
                <div>
                  <h2 className="text-lg font-bold text-center">{product.title}</h2>
                  <img
                    src={product.image.url}
                    alt={product.title}
                    className="w-50 mx-auto"
                  />
                  <p className="text-sm">{product.description}</p>
                  {product.onSale ? (
                    <>
                      <p className="line-through text-gray-500">{product.price}</p>
                      <p className="text-red-500">{product.discountedPrice}</p>
                    </>
                  ) : (
                    <p>{product.price}</p>
                  )}
                  <button
                    className="border border-red-500 p-2 rounded-md bg-green-500 text-white hover:bg-green-600"
                    onClick={() => {
                      addToCart(product);
                      console.log(cart);
                    }}
                  >
                    Purchase
                  </button>
                </div>
              ) : (
                <p className="text-center">Loading...</p>
              )}
            </div>
          </div>
        </>
      );
    }