import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <Router>
        <Header/>
        <Home/>
        <Routes>
          <Route path='/checkout' element={<Checkout/>}/>          
          <Route path='/login' element={<Login/>}/> 
          <Route path='/' element={<Homepage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
