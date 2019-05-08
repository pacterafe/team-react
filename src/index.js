import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';


import App from './study-demo/';




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
if (module.hot) { module.hot.accept(); }