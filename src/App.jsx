import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddLab from './components/AddLab'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddLab />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App