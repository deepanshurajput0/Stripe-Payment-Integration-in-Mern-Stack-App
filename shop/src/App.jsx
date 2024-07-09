import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import CartDetails from './components/CartDetails';
import Success from './components/Success';
import Cancel from './components/Cancel';
function App() {
  return (
     <div>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<CartDetails/>} />
      <Route path='/success' element={<Success/>} />
      <Route path='/cancel' element={<Cancel/>} />
      </Routes>
      </Router>
     </div>
  )
}

export default App
