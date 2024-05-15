import React, { useState, useEffect } from 'react';
import './assets/css/App.css';
import './assets/css/tailwind.css';
import {BrowserRouter as Router, Routes , Route, Link}from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import LoginPage from './pages/LoginPage';
import { AuthContextProvider } from './context/authContext';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider  client={queryClient}>
    <AuthContextProvider>
  <Router>
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/dashboard/*' element={<Dashboard></Dashboard>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
  </Router>
  </AuthContextProvider>
   </QueryClientProvider>
   <ToastContainer/>
    </>
  )

}


export default App;
