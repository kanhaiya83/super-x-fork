import React, { useState, useEffect } from 'react';
import './assets/css/App.css';
import './assets/css/tailwind.css';
import {BrowserRouter as Router, Routes , Route, Link}from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/dashboard/*' element={<Dashboard></Dashboard>}></Route>
    </Routes>
  </Router>
    </>
  )

}


export default App;
