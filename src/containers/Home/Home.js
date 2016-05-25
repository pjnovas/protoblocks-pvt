import React, { Component, PropTypes } from 'react';
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

import {
  Element,
  scroller
} from 'react-scroll';


// this DUMMY annotation is necesary to make Server Rendering WORK
// https://github.com/erikras/react-redux-universal-hot-example/issues/1078
//@asyncConnect([{ promise: () => Promise.resolve() }])

// TODO: check for sequencial actions: https://github.com/erikras/react-redux-universal-hot-example/issues/1094
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
  static propTypes = {
    params: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props;
    const validSections = ['modulos'];

    if (params.section && validSections.indexOf(params.section) > -1) {
      setTimeout(() => this.goTo(params.section, {
        duration: 0,
        smooth: false
      }), 100);
    }
  }

  goTo(element, options) {
    scroller.scrollTo(element, Object.assign({
      duration: 1500,
      smooth: true
    }, options));
  }

  render() {
    return (
      <div>
        <Hero onContinue={ () => this.goTo('intro') } />
        <Element name="intro">
          <Intro />
        </Element>
        <SubHero />
        <Element name="modulos">
          <Products/>
        </Element>
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
