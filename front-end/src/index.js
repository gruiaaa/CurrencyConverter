// index.js (or your main entry file)
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducers'; // Adjust the path as per your project structure
import App from './App'; // Assuming your main component is named App
import { setUser } from './actions/actions';

const store = createStore(reducer);

if(localStorage.getItem('currency')){
  store.dispatch({
    type:"SET_USER",
    payload:JSON.parse(localStorage.getItem('currency'))
  })
}



// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

