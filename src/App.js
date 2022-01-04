import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path='/checkout'>
            
          </Route>
          <Route path='/login'>
            
          </Route>
          <Route path='/' element={<Homepage/>}/>
            
          
        </Routes>
      
    </Router>
  );
}

export default App;
