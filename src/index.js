import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { ProductsProvider } from './context/book_context';


ReactDOM.render(

  <ProductsProvider>
  <App />
  </ProductsProvider>
  
  ,
  document.getElementById('root')
);

