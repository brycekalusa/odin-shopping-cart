import './cart.css'
import NavBar from "../NavBar/NavBar";
import AdjustQuantity from "../Quantity/AdjustQuantity";

export default function Cart({ cart, cartCount, updateItem, deleteItem }) {
    return (
        <>
            <NavBar cartCount={cartCount}/>
            {cartCount === 0 ?
            <p>Oops! You don't have any items in your cart. Visit the shop to 
                add some!</p> 
            :
            <div className="cart">
                {cart.map((item, index) => {
                    return (
                    <div
                        key={index}
                        className="cart-item"
                    >
                        <div className="cart-item-div">
                            <img className="cart-item-img" src={item.image}></img>
                        </div>
                        <div className="cart-item-div">
                            <div className="item-info">
                                <h2 className="item-title">{item.title}</h2>
                                <AdjustQuantity
                                    index={index} 
                                    quantity={item.quantity}
                                    updateItem={updateItem}
                                />
                                <h3>{'$' + item.price * item.quantity}</h3>
                            </div>
                        </div>
                        <div className="cart-item-div">
                        <button 
                            className="delete" 
                            onClick={deleteItem(index)}>Remove</button>
                        </div>
                    </div>
                    )
                })}
                <div className="cart-checkout-btns">
                    <h3></h3>
                    <button>Checkout</button>
                    <p><i>This button does not function as it is not in scope of 
                        the project.</i></p>
                </div>
            </div>
            }
        </>
    )
}
