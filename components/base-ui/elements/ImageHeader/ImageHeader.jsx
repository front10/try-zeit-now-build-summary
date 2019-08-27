/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { getUuid } from '@front10/helpers/dist/uuid';
import useStyles from '@front10/helpers/dist/UseStyles';
import Box from '../Box';
import Text from '../Text';
import {
  isElementInViewport,
  loadImage,
  getScrollParent
} from '../../helpers/imageLazyLoading';

class ImageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = false;
    this.image = null;
    this.scrollParents = [];
    this.id = `fr-image-${getUuid()}`;
  }

  componentDidUpdate = prevProps => {
    this.onUpdate(prevProps);
  };

  handleLoadImage = () => {
    const { image, imageHeight, imageWidth, pathNoImageFound } = this.props;
    this.image = loadImage(
      this.loaded,
      this.image,
      image,
      imageHeight,
      imageWidth,
      pathNoImageFound
    );
  };

  onUpdate = prevProps => {
    const { image, imageHeight, imageWidth } = this.props;
    if (image !== prevProps.image || (image === prevProps.image && this.loaded === false)) {
      this.loaded = false;
      if (this.image) {
        this.image.setAttribute(
          'style',
          `background-image:none;height:${imageHeight};width:${imageWidth};backgroundColor:lightgray;animation:pulse 1s infinite ease-in-out`
        );
        if (isElementInViewport(this.id)) this.handleLoadImage();
      }
    }
  };

  componentDidMount = () => {
    if (this.image) {
      setTimeout(() => {
        this.scrollParents = getScrollParent(this.image, this.scrollParents);
        if (isElementInViewport(this.id)) {
          this.handleLoadImage();
        } else this.addEventListener();
      });
    }
  };

  componentWillUnmount = () => {
    this.removeEventListener();
  };

  listener = () => {
    clearTimeout(this.scrollTimmer);
    this.scrollTimmer = setTimeout(() => {
      if (isElementInViewport(this.id) && !this.loaded) this.handleLoadImage();
    }, 250);
  };

  addEventListener = () => {
    this.scrollParents.map(node => {
      if (node && typeof node.addEventListener === 'function') {
        node.addEventListener('scroll', this.listener, true);
      }
      return node;
    });
  };

  removeEventListener = () => {
    this.scrollParents.map(node => {
      if (node && typeof node.addEventListener === 'function')
        node.removeEventListener('scroll', this.listener, true);
      return node;
    });
  };

  noLabelImage = () => {
    const { translate, noLabelImageSettings } = this.props;
    return (
      <Box className="cmp-image-label" display="none">
        <Text {...noLabelImageSettings}>{translate('cmp-image-header-label-not-image-found')}</Text>
      </Box>
    );
  };

  render = () => {
    const { imageHeight, imageWidth, hoverEffect, alt, focusable, children } = this.props;
    const [className, style] = useStyles(this.props);
    const loadingImageStyle = {
      ...style,
      height: imageHeight,
      width: imageWidth,
      backgroundColor: 'lightgray',
      animation: 'pulse 1s infinite ease-in-out'
    };
    return (
      <Box
        id={this.id}
        tabIndex={focusable ? 0 : null}
        focusable={focusable}
        height="100"
        className={`fr-${ImageHeader.componentName}-container`}
        role="img"
        dataTestId="imageHeader"
        ariaLabel={alt}
      >
        <Box
          className={`fr-image-header ${hoverEffect &&
            `fr-effects fr-effect-${hoverEffect}`} ${className}`}
          style={loadingImageStyle}
          focusReferences={imageLoadedElem => {
            this.image = imageLoadedElem;
          }}
        >
          {children}
          {this.noLabelImage()}
        </Box>
      </Box>
    );
  };
}

ImageHeader.propTypes = {
  /**
   * URI of the image.
   */
  image: PropTypes.string,
  /**
   * alt description
   */
  alt: PropTypes.string,
  /**
   * Height of Destination Image
   */
  imageHeight: PropTypes.string,
  /**
   * Width of Destination Image
   */
  imageWidth: PropTypes.string,
  /**
   * Effect apply of the image
   */
  hoverEffect: PropTypes.oneOf([
    'grayscale',
    'fadeIn',
    'scale',
    'blur',
    'opacity',
    'sepia',
    'lightly',
    'dark'
  ]),
  /**
   * Enable focusable in this components.
   */
  focusable: PropTypes.bool,
  /**
   *  Children of the component
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  pathNoImageFound: PropTypes.string,
  translate: PropTypes.func,
  noLabelImageSettings: PropTypes.objectOf(PropTypes.any)
};
ImageHeader.defaultProps = {
  image: '',
  alt: null,
  imageHeight: '250px',
  imageWidth: '100%',
  hoverEffect: null,
  focusable: true,
  children: null,
  pathNoImageFound:
    'https://res.cloudinary.com/dakp804eh/image/upload/v1561045947/airmodules/Utils/NoImageFound.svg',
  translate: () => {},
  noLabelImageSettings: {
    position: 'absolute',
    padding: '3',
    bottom: '0',
    right: '0'
  }
};

ImageHeader.componentName = 'ImageHeader';

export default ImageHeader;
