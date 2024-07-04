import Main from './pages/Main';
import Price from './pages/Price';
import Currencies from './pages/Currencies';
import {Router, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/price' element={<Price />} />
        <Route path='/currencies' element={<Currencies />} />
      </Routes>
    </div>
  )
}

export default App
