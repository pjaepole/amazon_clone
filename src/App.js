import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/checkout' element={<Checkout/>}/>          
          <Route path='/login' element={<Login/>}/> 
          <Route path='/' element={<Homepage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
