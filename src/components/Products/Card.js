import React, { Component, PropTypes } from 'react';
import Image360 from '../Image360/Image360';

export default class Product extends Component {
  render() {
    const { id, family, title, kit } = this.props;
    const styles = require('./Card.scss');

    let ctnStyles = styles.content + ' ' + styles[family];
    if (kit) {
      ctnStyles += ' ' + styles.kit;
    }

    const imgFile = `/images/products/${id.replace('-', '_')}`;
    const imgBase = imgFile + '_s.png';
    const imgSprite = imgFile + '.jpg';

    return (
      <div className={ctnStyles}>

        <div className={styles.header + ' ' + styles.desktopTitle}>
          <h3 className={styles.name}>{title}</h3>
        </div>

        <div className={styles.body}>
          <Image360 base={imgBase} sprite={imgSprite} sprites={15}
           spriteHeight={202} styles={styles.picture} noSprite={kit}/>
        </div>

        <div className={styles.header + ' ' + styles.mobileTitle}>
          <h3 className={styles.name}>{title}</h3>
        </div>

        <div className={styles.more}>+ info</div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string,
  family: PropTypes.string,
  title: PropTypes.string,
  kit: PropTypes.bool
};
