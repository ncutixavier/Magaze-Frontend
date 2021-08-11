import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Index from './routes/index'
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Index />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();
