import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://v2.api.noroff.dev/online-shop";
export function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducts(data.data);
    }
    getProducts();
  }, []);
  return (
    <>
      <div className="text-center"> Products Page</div>
      {/* //return the data from the api response */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-7xl p-6">
        {products.map((products) => {
          return (
            <Link
              to={"/" + products.id}
              key={products.id}
              className="max-w-64max-w-sm border-gray-200 rounded-md shadow-sm hover:shadow-lg transition-shadow border"
            >
              <div className="p-4">
                <h2 className="font-bold text-xl">{products.title}</h2>
                <img
                  src={products.image.url}
                  alt={products.title}
                  className="w-full h-48 object-cover"
                />
                <p className="mt-2">{products.description}</p>
                <p className="text-gray-500 text-sm">
                  Rating: {products.rating}
                </p>
                <div>
                  {products.reviews.map((review) => (
                    <div key={review.id}>
                      <p>Reviews: {review.description}</p>
                    </div>
                  ))}
                </div>
                {products.discountedPrice &&
                products.discountedPrice < products.price ? (
                  <>
                    <p className="line-through text-gray-500">
                      {products.price}
                    </p>
                    <p className="text-red-500">{products.discountedPrice}</p>
                  </>
                ) : (
                  <p className="text-gray-500">{products.price}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default App;
