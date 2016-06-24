import React, { Component, PropTypes } from 'react';

import {
  KitItem,
  KitsList
} from '../../components';

import * as kitsActions from 'redux/modules/kits';

import { connect } from 'react-redux';

@connect(
  state => ({
    products: state.products.byId,
    kits: state.kits.data,
    loading: state.kits.loading
  }),
  {...kitsActions })
export default class Kits extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    kits: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    load: PropTypes.func.isRequired
  };

  getFullKits() {
    const { kits, products } = this.props;
    return kits.map( kit => {
      return {
        ...kit,
        products: (kit.products || []).map( p => {
          return Object.assign({}, p, products[p.id]);
        })
      };
    });
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return (<span>Cargando Kits ...</span>);
    }

    const kits = this.getFullKits();

    return (
      <div>
        <KitsList>
          {kits.map(kit =>
            <KitItem key={kit.id} kit={kit} />
          )}
        </KitsList>
      </div>
    );
  }
}
