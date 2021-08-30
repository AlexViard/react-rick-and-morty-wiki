import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/Home';

import './style.scss';

const App = () => (
  <>
    <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
    </Switch>
  </>
);

export default App;

