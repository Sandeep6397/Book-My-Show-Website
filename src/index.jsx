import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css'
//context provider
import MovieProvider from './Context/movie.Context';
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
         <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


