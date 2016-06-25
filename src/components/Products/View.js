import React, { Component, PropTypes } from 'react';
//import { Link } from 'react-router';
import ImageGallery from './ImageGallery';
import NavBar from '../NavBar/NavBar';

export default class ProductView extends Component {

  getImages() {
    const baseImg = '/images/products/';
    const basePhoto = baseImg + 'photos/';

    const { id, photos } = this.props;
    const fileName = id.replace('-', '_');

    const images = [];

    // Put 3D view first
    images.push({
      original: `${baseImg}${fileName}_b.png`,
      thumbnail: `${baseImg}${fileName}_s.png`
    });

    // Set Product Photos
    for (let i = 0; i < photos; i++) {
      images.push({
        original: `${basePhoto}${fileName}_${i}.jpg`,
        thumbnail: `${basePhoto}${fileName}_${i}.jpg`
      });
    }

    return images;
  }

  getColor(family) {
    switch (family) {
      case 'lightblue': return 'celeste';
      case 'red': return 'rojo';
      case 'white': return 'blanco';
      case 'orange': return 'naranja';
      default: return '';
    }
  }

  render() {
    const { title, /*family,*/
      details, support, additions, size, notIncluded, link, showBuy } = this.props;
    const styles = require('./View.scss');

    const images = this.getImages();

    return (
      <div>
        <NavBar showClose/>
        <div className={styles.container}>
          <div className={styles.content}>

            <div className={styles.header}>
              <h3 className={styles.name}>{title}</h3>
              { showBuy &&
                <div className={styles.buy}>
                  <a href={link} target="_blank">Comprar</a>
                </div>
              }
              <div className={styles.description}>
                {details && <p>{details}</p>}
                {support && <p>Soporta {support} {notIncluded && '*'}</p>}
                {additions && <p>Se entrega con {additions}</p>}
                {/*family && <p>Color: {this.getColor(family)}</p>*/}
                {size &&
                  <div>
                    <h4>Medidas:</h4>
                    <ul>
                      <li>Largo: {size.length}mm.</li>
                      <li>Ancho: {size.width}mm.</li>
                      <li>Alto: {size.height}mm.</li>
                    </ul>
                  </div>
                }
                {notIncluded && <p style={{'fontStyle': 'italic'}}>* No incluye {notIncluded}</p>}
              </div>
            </div>

            <div className={styles.slider}>
              <ImageGallery lazyLoad items={images}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

ProductView.propTypes = {
  id: PropTypes.string,
  family: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
  photos: PropTypes.number,
  support: PropTypes.string,
  additions: PropTypes.string,
  size: PropTypes.shape({
    long: PropTypes.number,
    wide: PropTypes.number,
    tall: PropTypes.number
  }),
  notIncluded: PropTypes.string,
  link: PropTypes.string,
  showBuy: PropTypes.bool
};
