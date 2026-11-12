
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [mode, setMode] = useState('white')
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  function Darkmode() {
    setMode(previousMode =>
      previousMode === 'white' ? 'black' : 'white'
    )
  }

  function addToCart(product) {
    setCartItems(previousItems => [...previousItems, product])
  }

  return (
    <div style={{
      backgroundColor: mode,
      color: mode === 'black' ? 'white' : 'black',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle mode={mode} setMode={Darkmode} />

      <br /><br />

      <label htmlFor="category">Filter by Category: </label>

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        addToCart={addToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
