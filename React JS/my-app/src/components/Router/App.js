import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ArticlesPage from './Pages/Articles';
import NotFoundPage from './Pages/NotFound';
import Nav from './Navigation/Nav';

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 'padding: 0 16px',
};

const App = () => (
  <div style={containerStyles}>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
