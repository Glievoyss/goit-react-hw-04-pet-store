import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Pages/HomePage/HomePage';
import About from '../Pages/AboutPage/AboutPage';
import Pets from '../Pages/PetsPage/PetsPage';
import Pet from '../Pages/PetPage/PetPage';

const BodySite = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pets/:idPet" component={Pet} />
      <Route path="/pets" component={Pets} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default BodySite;
