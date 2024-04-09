import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css'
import 'animate.css';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalProvider from './components/globalProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="yc">
    <CssBaseline />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </div>
);
