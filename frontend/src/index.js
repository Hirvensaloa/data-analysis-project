import React from 'react';
import ReactDOM from 'react-dom';
import './main/css/index.css';
import App from './main/js/App';
import * as serviceWorker from './main/js/serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import questionReducer from './main/js/reducers/questionReducer';

const store = createStore(questionReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
