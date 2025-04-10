import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { WishlistProvider } from './context/WishlistContext';
import { FilterProvider } from './context/FilterContext'; // 👈 Import Filter Context

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WishlistProvider>
      <FilterProvider> 
        <App />
      </FilterProvider>
    </WishlistProvider>
  </BrowserRouter>
);
