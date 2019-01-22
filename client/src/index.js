import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
