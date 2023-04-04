import './App.css'; 
import React from 'react';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
