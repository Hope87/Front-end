import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles.css';
// import App from './components/form/App';
// import App from './components/Hw2/Expresso/App';
// import App from './components/Hw2/Phonebook/App';
// import App from './components/ContentBox/App';
// import App from './components/Chat/App';
// import App from './components/RestApi/App';
// import App from './components/Hw3/components/App';
// import App from './components/Router/App';
// import App from './components/Animations/App';
import App from './components/Hw4/components/App';


ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.querySelector('#root'),
);


