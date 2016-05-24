import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import {
  isLoaded as isLoadedProducts,
  load as loadProducts
} from 'redux/modules/products';
import * as productsActions from 'redux/modules/products';

import {
  ProductView
} from '../../components';

// this DUMMY annotation is necesary to make Server Rendering WORK
// https://github.com/erikras/react-redux-universal-hot-example/issues/1078
//@asyncConnect([{ promise: () => Promise.resolve() }])

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoadedProducts(getState())) {
      return dispatch(loadProducts());
    }
  }
}])
@connect(
  state => ({
    products: state.products.byId,
    loading: state.products.loading
  }),
  {...productsActions })
export default class Home extends Component {
  static propTypes = {
    products: PropTypes.object,
    loading: PropTypes.bool,
    load: PropTypes.func.isRequired,
    params: PropTypes.object
  };

  render() {
    const { products, loading, params } = this.props;

    if (loading) {
      return (<span>Cargando ...</span>);
    }

    return (
      <div>
        <Helmet title="Home"/>
        <ProductView {...products[params.pid]} />
      </div>
    );
  }
}
