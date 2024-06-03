import './quantity.css'
import { useState } from 'react';

export default function AdjustQuantity({ index, quantity, updateItem }) {
    let [cartQuantity, setCartQuantity] = useState(quantity);

    const updateQuantity = (e) => {
        let newCartQuantity = e.target.value
        setCartQuantity(newCartQuantity)

        if (newCartQuantity !== '' && newCartQuantity > 0) {
            newCartQuantity = Number(newCartQuantity)
            updateItem(index, newCartQuantity)
        }

        if (newCartQuantity !== '' && newCartQuantity <= 0) {
            alert('Please enter a positive quantity or remove the item!')
        }
    }

    return (
        <div className="quantity-btns">
            <div>
                <span>Quantity: </span>
                <input className="quantity-input" 
                    onChange={updateQuantity} 
                    value={cartQuantity}
                    type="number"
                    min="1" />
            </div>       
        </div>
    )
}