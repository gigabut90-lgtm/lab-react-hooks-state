import React from 'react'

const DarkModeToggle = ({ mode, setMode }) => {
  return (
    <button onClick={setMode}>
      {mode === 'white' ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
    </button>
  )
}

export default DarkModeToggle