import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://v2.api.noroff.dev/online-shop";
export function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducts(data.data);
    }
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="text-center text-2xl font-bold my-4">Products Page</div>
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-7xl p-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="p-4 flex-1">
              <h2 className="font-bold text-xl mb-2">{product.title}</h2>
              <img
                src={product.image.url}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-500 text-sm mb-2">
                Rating: {product.rating}
              </p>
              {product.reviews && product.reviews.length > 0 && (
                <div className="mb-2">
                  <p className="font-semibold text-gray-800">Reviews:</p>
                  {product.reviews.map((review) => (
                    <div key={review.id} className="text-sm text-gray-600">
                      {review.description}
                    </div>
                  ))}
                </div>
              )}
              {product.discountedPrice &&
              product.discountedPrice < product.price ? (
                <>
                  <p className="line-through text-gray-500">{product.price}</p>
                  <p className="text-red-500 font-semibold">
                    {product.discountedPrice}
                  </p>
                </>
              ) : (
                <p className="text-gray-700 font-semibold">{product.price}</p>
              )}
            </div>
            <div className="p-4">
              <Link
                to={`/${product.id}`}
                className="block text-center w-32 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors mx-auto"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
