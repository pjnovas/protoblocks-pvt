import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
    App,
    Home,
    Product,
    NotFound,
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>

      <Route path=":pid" component={Product}>
        <Route path=":tab" component={Product}/>
      </Route>

      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
