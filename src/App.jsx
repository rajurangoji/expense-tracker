import React from 'react'
import './App.css'
import Input from './Input'

function App() {
  return (
    <div className='container'>
      <div className='heading'>
        <h1>Expense Tracker...</h1>
      </div>
      <div className='main-container'>
        <Input/>
      </div>
    </div>
  )
}

export default App
