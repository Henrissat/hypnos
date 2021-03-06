import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HypnosProvider } from "./components/Home/hypnos-context"
import { RoomsProvider } from "./components/Hotel/room-context"

/*
var butter = require('buttercms')('039c7b814a0dd82b6b67f8846c7945ca7141c40a');
butter.page.retrieve('*', 'Galery/index.js19-.01/él').then(response => console.log(response.data))
*/

ReactDOM.render(
  <HypnosProvider>
    <RoomsProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </RoomsProvider>
  </HypnosProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
