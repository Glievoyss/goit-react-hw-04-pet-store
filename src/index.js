import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <HashRouter basename="/goit-react-hw-04-pet-store">
    <Route component={App} />
  </HashRouter>,
  document.querySelector('#root'),
);
