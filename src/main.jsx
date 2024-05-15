import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css';

import { AuthContextProvider } from './context/authContext';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from "react-query";
import {BrowserRouter as Router } from 'react-router-dom';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QueryClientProvider  client={queryClient}>
    <AuthContextProvider>

  <Router>
    <App />

  </Router>
    </AuthContextProvider>
   </QueryClientProvider>
   <ToastContainer/>
  </React.StrictMode>,
)
