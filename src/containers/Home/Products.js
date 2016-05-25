import React, { Component, PropTypes } from 'react';

import {
  ProductItem,
  ProductsList
} from '../../components';

import * as productsActions from 'redux/modules/products';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect(
  state => ({
    products: state.products.data,
    loading: state.products.loading
  }),
  {...productsActions })
export default class Products extends Component {
  static propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool,
    load: PropTypes.func.isRequired
  };

  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <span>Cargando Productos ...</span>;
    }

    return (
      <div>
        <ProductsList>
          {products.map(product =>
            <Link key={product.id} to={`/modulos/${product.id}`}>
              <ProductItem product={product}/>
            </Link>
          )}
        </ProductsList>
      </div>
    );
  }
}
