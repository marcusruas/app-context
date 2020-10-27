import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './services/reportWebVitals';

import App from './ui';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
