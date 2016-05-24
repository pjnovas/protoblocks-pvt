import React, { Component } from 'react';
//import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

import {
  isLoaded as isLoadedProducts,
  load as loadProducts
} from 'redux/modules/products';

import {
  isLoaded as isLoadedKits,
  load as loadKits
} from 'redux/modules/kits';

import {
  Hero,
  Intro,
  SubHero,
  Features,
  Contact,
  Footer
} from '../../components';

import Products from './Products';
import Kits from './Kits';

// this DUMMY annotation is necesary to make Server Rendering WORK
// https://github.com/erikras/react-redux-universal-hot-example/issues/1078
//@asyncConnect([{ promise: () => Promise.resolve() }])

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isLoadedProducts(getState())) {
      promises.push(dispatch(loadProducts()));
    }

    if (!isLoadedKits(getState())) {
      promises.push(dispatch(loadKits()));
    }

    return Promise.all(promises);
  }
}])
export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Intro />
        <SubHero />
        <Products/>
        <Kits />
        <Features />
        <Contact />
        <Footer />
      </div>
    );
  }
}

/*

return (
  <div className={styles.home}>
    <Helmet title="Home"/>
    <div className={styles.masthead}>
      <div className="container">
        <div className={styles.logo}>
          <p>
            <img src={logoImage}/>
          </p>
        </div>
        <h1>{config.app.title}</h1>
        <h2>{config.app.description}</h2>
      </div>
    </div>

    <div className="container">

    </div>
  </div>
);
*/
