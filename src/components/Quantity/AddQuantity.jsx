import './quantity.css'
import { useState } from 'react';

export default function AddQuantity({ addItem, index }) {
    let [inputQuantity, setInputQuantity] = useState(0);

    const enterQuantity = (e) => {
        let newInputQuantity = e.target.value
        setInputQuantity(newInputQuantity)
        if (newInputQuantity !== '') {
            newInputQuantity = Number(newInputQuantity)
            setInputQuantity(newInputQuantity)
        }
    }

    return (
        <div className="quantity-btns">
            <input className="quantity-input" 
                onChange={enterQuantity} 
                value={inputQuantity}
                type="number"
                min="0" />
            <button className="add-cart" 
                onClick={addItem(index, inputQuantity)}>Add to Cart</button>
        </div>
    )
}
