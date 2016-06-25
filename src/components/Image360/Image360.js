import React, { Component, PropTypes } from 'react';

export default class Image360 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      spriteStyles: {}
    };
  }

  componentDidMount() {
    if (!this.state.ready && window.innerWidth > 475) {
      this.loadSprite();
    }
  }

  onHover(e) {
    this.setState({
      spriteStyles: this.getSpriteStyles(e.nativeEvent.offsetX)
    });
  }

  getSpriteStyles(x) {
    const currentX = !x || x < 0 ? 0 : x;
    const pic = this.refs.picture;
    const bound = (pic.getBoundingClientRect && pic.getBoundingClientRect()) || {};

    const { base, sprites, sprite, spriteHeight } = this.props;

    if (!bound.width) {
      return {
        height: `${spriteHeight}px`,
        backgroundImage: `url('${base}')`
      };
    }

    const picWidth = this.sprite.width / sprites;
    const imageIndex = Math.floor((currentX / bound.width) * sprites);
    const padding = bound.width < picWidth ? (picWidth - bound.width) / 2 : 0;

    const posX = (imageIndex * picWidth) + padding;

    return {
      backgroundImage: `url('${sprite}')`,
      height: `${spriteHeight}px`,
      backgroundPositionX: `-${(posX)}px`
    };
  }

  resetAnimation() {
    this.setState({
      spriteStyles: this.getSpriteStyles()
    });
  }

  loadSprite() {
    this.sprite = new Image();

    this.sprite.onload = () => {
      this.setState({
        ready: true,
        spriteStyles: this.getSpriteStyles()
      });
    };

    this.sprite.onerror = () => {
      this.setState({ ready: false });
    };

    this.sprite.src = this.props.sprite;
  }

  render() {
    const { noSprite, base, styles } = this.props;

    if (!noSprite && this.state.ready) {
      return (
        <div className={styles} ref="picture" style={this.state.spriteStyles}
          onMouseMove={ e => this.onHover(e) }
          onMouseOut={ () => this.resetAnimation() }></div>
      );
    }

    return (
      <div ref="picture">
        <img className={styles} src={base} />
      </div>
    );
  }
}

Image360.propTypes = {
  noSprite: PropTypes.bool,
  styles: PropTypes.string,
  base: PropTypes.string,
  sprite: PropTypes.string,
  sprites: PropTypes.number,
  spriteHeight: PropTypes.number
};
