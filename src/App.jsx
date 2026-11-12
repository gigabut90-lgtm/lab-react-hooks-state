import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [mode, setMode] = useState('white')

  function Darkmode() {
    setMode(mode === 'white' ? 'black' : 'white')
  }

  return (
    <div style={{
      backgroundColor: mode,
      color: mode === 'black' ? 'white' : 'black',
    }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle mode={mode} setMode={Darkmode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList />

      {/* TODO: Implement and render Cart component */}
      <Cart />
    </div>
  )
}

export default App