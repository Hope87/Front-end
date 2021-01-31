import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Navigation/Nav';

const AsyncHomePage = lazy(() => import('./Pages/Home'));
const AsyncMoviesPage = lazy(() => import('./Pages/MoviesPage'));
const AsyncMovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));

const App = () => (
  <div>
    <Nav />

    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/movie/:id" component={AsyncMovieDetailsPage} />
        <Route path="/movie" component={AsyncMoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
