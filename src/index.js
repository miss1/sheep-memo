import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css'
import 'animate.css';
import CssBaseline from '@mui/material/CssBaseline';
import Bmob from 'hydrogen-js-sdk';
import GlobalProvider from './components/globalProvider'

Bmob.initialize("452d29465d132369", "04052019");
React.$bmob = Bmob;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="yc">
    <CssBaseline />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </div>
);
