import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Register  from './components/Register';

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/register" exact component={Register}/>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Layout>
  )
}

export default Routes;