import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './services/reportWebVitals';

import App from './ui';
import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

reportWebVitals();
