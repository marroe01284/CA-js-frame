import { Link } from "react-router-dom"
import { ShoppingCart } from "./CartIcon"


export function Header (){
    return(
        <header>
            <nav className="flex justify-evenly">
                <Link to="/">Products</Link>
                <Link to="/contact">Contact</Link>
                <ShoppingCart/>
            </nav>
        </header>
    )
}