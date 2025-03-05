import { Link } from "react-router-dom";
import { ShoppingCart } from "./CartIcon";

export function Header() {
  return (
    <header className="bg-gray-800 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <div className="flex-1">
          <h1 className="font-bold text-3xl text-white">Nile</h1>
        </div>
        <div className="flex-1 flex justify-center space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <ShoppingCart />
        </div>
      </nav>
    </header>
  );
}
