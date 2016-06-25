import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
    App,
    Home,
    Product
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      <Route path=":section" component={Home} />
      <Route path="/modulos/:pid" component={Product} />
      <IndexRoute component={Home}/>
    </Route>
  );
};
