import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import config from '../../config';

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
  }), {...productsActions })
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

    const product = products[params.pid];
    const desc = product.details || `Módulo ideal para ${product.support}`;

    const meta = [
      { name: 'description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: `${config.imagesBase}/products/${product.id.replace('-', '_')}_s.png` },
      { property: 'og:image:width', content: 300 },
      { property: 'og:image:height', content: 202 },
      { name: 'twitter:card', content: 'product' }
    ];

    return (
      <div>
        <Helmet title={product.title} meta={meta} />
        <ProductView {...product} tab={params.tab}/>
      </div>
    );
  }
}
