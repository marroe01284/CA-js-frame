
import { Link } from "react-router-dom";//-
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../store/store";


const CartItemsCount = () => {
  const cartProducts = useCart((state) => state.cart);
  return <span>{cartProducts.length}</span>;
};

export function ShoppingCart() {
  return (
    <div className="relative">
      <Link to="/checkout">
      <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 text-gray-600 hover:text-gray-900" />
      </Link>
      <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-600 rounded-full">
        <CartItemsCount />
      </div>
    </div>
  );
}
