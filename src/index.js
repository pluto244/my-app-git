import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux_store';
import { Provider } from 'react-redux';
const root = createRoot(document.getElementById('root'));
let renderEntireTree = () => {
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>
  );
  // debugger
};

renderEntireTree();

store.subscribe(() => {
  
  renderEntireTree();
  
});
