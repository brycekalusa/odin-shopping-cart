import { Link } from "react-router-dom"

export default function NavBar({ cartCount }) {
    return (
        <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart {`(${cartCount})`}</Link>
        </div>
    )
}