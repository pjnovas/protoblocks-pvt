import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import { reducer as form } from 'redux-form';
import products from './products';
import kits from './kits';
import contact from './contact';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form,
  products,
  kits,
  contact
});
