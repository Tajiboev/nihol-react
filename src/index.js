import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from './contexts/LocaleContext'

import './sass/index.sass';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
