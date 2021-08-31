import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/Header/Home';
import Characters from 'components/Characters';
import './style.scss';


const App = () => (
  <>
    <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/characters" exact>
          <Characters />
        </Route>
    </Switch>
  </>
);

export default App;

