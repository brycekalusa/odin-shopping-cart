import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage';

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0);
  const [loading,  setLoading] = useState(true)

  useEffect(() => {
    const fetchShopItems = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setShopItems(data);
    }
    fetchShopItems();
    setLoading(false);
  }, []);

  const addItem = (index, inputQuantity) => () => {
    const title = shopItems[index].title
    const price = shopItems[index].price
    const image = shopItems[index].image
    
    let cartIndex = cart.findIndex(item => item.title === title)
    let found = (cart.find((item) => item.title === title))

    if (inputQuantity <= 0) {
      alert ('Please enter a positive quantity!')
    } else {
    if (found) {
      const newQuantity = found.quantity + inputQuantity;
      const newCart = [...cart]
      newCart[cartIndex].quantity = newQuantity;
      setCart(newCart);
      const sum = 
        Object.values(newCart).reduce((acc, {quantity}) => acc + quantity, 0)
      setCartCount(sum);
    } else {
      const newCart = [...cart,
        {
          title: title,
          price: price,
          image: image,
          quantity: inputQuantity
        }]
      setCart(newCart);
      const sum = 
        Object.values(newCart).reduce((acc, {quantity}) => acc + quantity, 0)
      setCartCount(sum);
    }}
  }

  const updateItem = (index, newCartQuantity) => {
    const newQuantity = newCartQuantity;
      const newCart = [...cart]
      newCart[index].quantity = newQuantity;
      setCart(newCart);
      const sum = 
        Object.values(newCart).reduce((acc, {quantity}) => acc + quantity, 0)
      setCartCount(sum);
  }

  const deleteItem = index => () => {
    const newCart = [...cart]
    newCart.splice(index, 1);
    setCart(newCart)
    const sum = 
      Object.values(newCart).reduce((acc, {quantity}) => acc + quantity, 0)
    setCartCount(sum);
}

  return (
    <>
      <Routes>
        <Route path="/" element={<Home 
          cartCount={cartCount}/>}>
        </Route>
        <Route path="/shop" element={<Shop 
          cart={cart} 
          shopItems={shopItems} 
          addItem={addItem} 
          cartCount={cartCount}
          loading={loading}/>}>
        </Route>
        <Route path="/cart" element={<Cart 
          cart={cart} 
          cartCount={cartCount}
          updateItem={updateItem}
          deleteItem={deleteItem}/>}>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  )
}

export default App;
