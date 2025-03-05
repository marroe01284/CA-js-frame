import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../store/store";
//create a specific product page use the ID of the product as the params for the dynamic segment.

export function SpecificProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const { cart, addToCart } = useCart();
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
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-lg">
          {product ? (
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">
                {product.title}
              </h2>
              <img
                src={product.image.url}
                alt={product.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="mb-4">
                {product.discountedPrice &&
                product.discountedPrice < product.price ? (
                  <>
                    <p className="line-through text-gray-500">
                      {product.price}
                    </p>
                    <p className="text-red-500 text-xl font-semibold">
                      {product.discountedPrice}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-800 text-xl font-semibold">
                    {product.price}
                  </p>
                )}
              </div>
              <button
                className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors cursor-pointer"
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
