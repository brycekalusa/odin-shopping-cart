import './shop.css'
import NavBar from "../NavBar/NavBar"
import AddQuantity from "../Quantity/AddQuantity"

export default function Shop({ shopItems, cartCount, addItem, loading }) {
    if (loading === true) {
        return (
        <>
            <NavBar cartCount={cartCount}/>
            <h2>Loading...</h2>
        </>
        )
    } else {
        return (
            <>
                <NavBar cartCount={cartCount}/>
                <div className="shop">
                    {shopItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="shop-item"
                            >
                                <h2 className="item-title">{item.title}</h2>
                                <h4>{'Rating: ' + item.rating.rate}</h4>
                                <img className="item-img" src={item.image}></img>
                                <h3>{'$' + item.price}</h3>
                                <div className="cart-btns">
                                    <AddQuantity 
                                        addItem={addItem}
                                        index={index}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

    
}